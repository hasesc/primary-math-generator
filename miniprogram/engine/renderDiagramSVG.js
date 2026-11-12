// repos/skeleton/miniprogram/engine/renderDiagramSVG.js
// 纯字符串 SVG 渲染器（无需 DOM，完美兼容微信小程序与任何环境）

function shapeSVG(name, attributes, text = '') {
  const attrs = Object.entries(attributes)
    .filter(([_, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');
  return text ? `<${name} ${attrs}>${text}</${name}>` : `<${name} ${attrs} />`;
}

const line = (x1, y1, x2, y2, width = 1) =>
  shapeSVG('line', { x1, y1, x2, y2, stroke: 'currentColor', 'stroke-width': width });

const label = (x, y, text, size = 12) =>
  shapeSVG('text', { x, y, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': size, fill: 'currentColor' }, String(text));

const point = (cx, cy, radius, turn) => {
  const angle = turn * 2 * Math.PI;
  return [cx + Math.sin(angle) * radius, cy - Math.cos(angle) * radius];
};

export function renderDiagramSVG(spec) {
  if (!spec) return '';
  const { kind, clocks, title, labels, values, second, numbered, compass, marks, polygons, axis, segment, elements } = spec;

  let inner = '';
  let viewBox = '0 0 280 125';
  let width = '280';

  if (kind === 'geometry') {
    viewBox = '0 0 280 125';
    width = '280';
    const groupInner = (elements || []).map(({ tag, attrs, text }) => shapeSVG(tag, attrs, text)).join('');
    inner = `<g stroke="currentColor" stroke-width="1.3">${groupInner}</g>`;
  } else if (kind === 'grid') {
    const at = ([x, y]) => [25 + 19 * x, 194 - 19 * y];
    viewBox = '0 0 230 220';
    width = '230';
    const parts = [];
    for (let i = 0; i <= 9; i++) {
      parts.push(line(...at([i, 0]), ...at([i, 9]), 0.35));
      parts.push(line(...at([0, i]), ...at([9, i]), 0.35));
      if (numbered && i > 0) {
        parts.push(label(at([i, 0])[0], 205, i, 10));
        parts.push(label(14, at([0, i])[1], i, 10));
      }
    }
    if (compass) {
      parts.push(line(211, 53, 211, 30));
      parts.push(line(211, 30, 207, 37));
      parts.push(line(211, 30, 215, 37));
      parts.push(label(211, 21, '北', 10));
    }
    if (axis !== undefined) {
      parts.push(shapeSVG('line', {
        x1: at([axis, 0])[0], y1: at([axis, 0])[1],
        x2: at([axis, 9])[0], y2: at([axis, 9])[1],
        stroke: 'currentColor', 'stroke-width': 1.3, 'stroke-dasharray': '3 3',
      }));
    }
    if (polygons) {
      polygons.forEach((vertices, i) => {
        parts.push(shapeSVG('polygon', {
          points: vertices.map(p => at(p).join(',')).join(' '),
          fill: 'none', stroke: 'currentColor', 'stroke-width': 1.6,
          'stroke-dasharray': i ? '5 3' : 'none',
        }));
      });
    }
    if (segment) {
      const [x1, y1] = at(segment.from);
      const [x2, y2] = at(segment.to);
      parts.push(line(x1, y1, x2, y2, 1.3));
      parts.push(label((x1 + x2) / 2, Math.min(y1, y2) - 14, segment.text, 10));
    }
    if (marks) {
      marks.forEach(({ at: position, label: name }) => {
        const [cx, cy] = at(position);
        parts.push(shapeSVG('circle', { cx, cy, r: 2.8, fill: 'currentColor' }));
        parts.push(label(cx + 7, cy - 7, name, 10));
      });
    }
    inner = parts.join('');
  } else if (kind === 'clock') {
    viewBox = `0 0 ${(clocks || []).length * 112} 120`;
    width = String((clocks || []).length * 112);
    const parts = [];
    (clocks || []).forEach((time, i) => {
      const cx = i * 112 + 56;
      const cy = 53;
      parts.push(shapeSVG('circle', { cx, cy, r: 47, fill: 'white', stroke: 'currentColor' }));
      for (let tick = 0; tick < 60; tick++) {
        parts.push(line(...point(cx, cy, tick % 5 === 0 ? 41 : 44, tick / 60), ...point(cx, cy, 46, tick / 60)));
      }
      for (let hour = 1; hour <= 12; hour++) {
        parts.push(label(...point(cx, cy, 35, hour / 12), hour, 10));
      }
      if (time) {
        parts.push(line(cx, cy, ...point(cx, cy, 23, (time.hour + time.minute / 60) / 12), 3));
        parts.push(line(cx, cy, ...point(cx, cy, 31, time.minute / 60), 1.5));
      }
      parts.push(shapeSVG('circle', { cx, cy, r: 2, fill: 'currentColor' }));
      if ((clocks || []).length > 1) {
        parts.push(label(cx, 111, ['A', 'B', 'C'][i]));
      }
    });
    inner = parts.join('');
  } else if (kind === 'pie-chart') {
    viewBox = '0 0 340 160';
    width = '340';
    const parts = [label(170, 12, title || '')];
    let start = 0;
    (values || []).forEach((value, i) => {
      const end = start + value / 100;
      const p1 = point(86, 89, 60, start);
      const p2 = point(86, 89, 60, end);
      parts.push(shapeSVG('path', {
        d: `M 86 89 L ${p1.join(' ')} A 60 60 0 ${value > 50 ? 1 : 0} 1 ${p2.join(' ')} Z`,
        fill: ['white', '#ddd', '#bbb', '#999'][i % 4], stroke: 'currentColor',
      }));
      parts.push(label(...point(86, 89, 41, (start + end) / 2), `${value}%`, 10));
      parts.push(label(220, 42 + 24 * i, `${(labels || [])[i] || ''}　${value}%`));
      start = end;
    });
    inner = parts.join('');
  } else {
    // bar-chart or line-chart
    viewBox = '0 0 340 160';
    width = '340';
    const parts = [label(170, 12, title || '')];
    const vals = values || [10];
    const tick = Math.ceil(Math.max(...vals) / 40) * 10 || 10;
    const y = v => 136 - (v / (tick * 4)) * 100;
    const x = i => 65 + 74 * i;

    for (let i = 0; i <= 4; i++) {
      const level = i * tick;
      parts.push(line(40, y(level), 328, y(level), 0.4));
      parts.push(label(22, y(level), level, 10));
    }
    parts.push(line(40, 36, 40, 136), line(40, 136, 328, 136));
    vals.forEach((value, i) => {
      if (kind === 'line-chart') {
        if (i > 0) parts.push(line(x(i - 1), y(vals[i - 1]), x(i), y(value), 1.5));
        parts.push(shapeSVG('circle', { cx: x(i), cy: y(value), r: 3, fill: 'currentColor' }));
      } else {
        parts.push(shapeSVG('rect', {
          x: x(i) - 11, y: y(value), width: 22, height: 136 - y(value),
          fill: '#ddd', stroke: 'currentColor',
        }));
      }
      parts.push(label(x(i), y(value) - 8, value, 10));
      parts.push(label(x(i), 147, (labels || [])[i] || '', 10));
    });
    inner = parts.join('');
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}">${inner}</svg>`;
}

export function diagramToDataUrl(spec) {
  const svg = renderDiagramSVG(spec);
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
