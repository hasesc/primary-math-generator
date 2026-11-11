const svgNS = 'http://www.w3.org/2000/svg';

function shape(name, attributes, text) {
  const element = document.createElementNS(svgNS, name);
  for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
  if (text !== undefined) element.textContent = text;
  return element;
}

const line = (x1, y1, x2, y2, width = 1) =>
  shape('line', { x1, y1, x2, y2, stroke: 'currentColor', 'stroke-width': width });
const label = (x, y, text, size = 12) =>
  shape('text', { x, y, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': size, fill: 'currentColor' }, text);
const point = (cx, cy, radius, turn) => {
  const angle = turn * 2 * Math.PI;
  return [cx + Math.sin(angle) * radius, cy - Math.cos(angle) * radius];
};

export function renderDiagram({ kind, clocks, title, labels, values, second, numbered, compass, marks, polygons, axis, segment, elements }) {
  if (kind === 'data-table' || kind === 'double-table') {
    const table = document.createElement('table');
    table.className = 'question-table';
    table.createCaption().textContent = `${title}（张）`;
    const header = table.createTHead().insertRow();
    const tbody = table.createTBody();
    for (const title of second ? ['小组', '第一天', '第二天'] : ['小组', '数量']) {
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = title;
      header.append(th);
    }
    labels.forEach((name, i) => {
      const row = tbody.insertRow();
      for (const value of second ? [name, values[i], second[i]] : [name, values[i]]) {
        row.insertCell().textContent = value;
      }
    });
    return table;
  }

  const svg = shape('svg', { role: 'img' });
  svg.classList.add('question-diagram');
  svg.dataset.kind = kind;
  if (kind === 'geometry') {
    svg.setAttribute('viewBox', '0 0 280 125');
    svg.setAttribute('width', '280');
    svg.setAttribute('aria-label', '题目示意图');
    const group = shape('g', { stroke: 'currentColor', 'stroke-width': 1.3 });
    group.append(...elements.map(({ tag, attrs, text }) => shape(tag, attrs, text)));
    svg.append(group);
    return svg;
  }
  if (kind === 'grid') {
    const at = ([x, y]) => [25 + 19 * x, 194 - 19 * y];
    svg.setAttribute('viewBox', '0 0 230 220');
    svg.setAttribute('width', '230');
    svg.setAttribute('aria-label', compass ? '带方向标的方格图' : '方格图');
    for (let i = 0; i <= 9; i++) {
      svg.append(line(...at([i, 0]), ...at([i, 9]), 0.35), line(...at([0, i]), ...at([9, i]), 0.35));
      if (numbered && i > 0) {
        svg.append(label(at([i, 0])[0], 205, i, 10), label(14, at([0, i])[1], i, 10));
      }
    }
    if (compass) {
      svg.append(line(211, 53, 211, 30), line(211, 30, 207, 37), line(211, 30, 215, 37), label(211, 21, '北', 10));
    }
    if (axis !== undefined) {
      const divider = line(...at([axis, 0]), ...at([axis, 9]), 1.3);
      divider.setAttribute('stroke-dasharray', '3 3');
      svg.append(divider);
    }
    polygons?.forEach((vertices, i) => svg.append(shape('polygon', {
      points: vertices.map(p => at(p).join(',')).join(' '), fill: 'none', stroke: 'currentColor',
      'stroke-width': 1.6, 'stroke-dasharray': i ? '5 3' : 'none',
    })));
    if (segment) {
      const [x1, y1] = at(segment.from);
      const [x2, y2] = at(segment.to);
      svg.append(line(x1, y1, x2, y2, 1.3), label((x1 + x2) / 2, Math.min(y1, y2) - 14, segment.text, 10));
    }
    marks?.forEach(({ at: position, label: name }) => {
      const [cx, cy] = at(position);
      svg.append(shape('circle', { cx, cy, r: 2.8, fill: 'currentColor' }), label(cx + 7, cy - 7, name, 10));
    });
    return svg;
  }
  if (kind === 'clock') {
    svg.setAttribute('viewBox', `0 0 ${clocks.length * 112} 120`);
    svg.setAttribute('width', clocks.length * 112);
    svg.setAttribute('aria-label', clocks.length > 1 ? '三个钟面选项' : '钟面');
    clocks.forEach((time, i) => {
      const cx = i * 112 + 56;
      const cy = 53;
      svg.append(shape('circle', { cx, cy, r: 47, fill: 'white', stroke: 'currentColor' }));
      for (let tick = 0; tick < 60; tick++) {
        svg.append(line(...point(cx, cy, tick % 5 === 0 ? 41 : 44, tick / 60), ...point(cx, cy, 46, tick / 60)));
      }
      for (let hour = 1; hour <= 12; hour++) svg.append(label(...point(cx, cy, 35, hour / 12), hour, 10));
      if (time) {
        svg.append(line(cx, cy, ...point(cx, cy, 23, (time.hour + time.minute / 60) / 12), 3));
        svg.append(line(cx, cy, ...point(cx, cy, 31, time.minute / 60), 1.5));
      }
      svg.append(shape('circle', { cx, cy, r: 2, fill: 'currentColor' }));
      if (clocks.length > 1) svg.append(label(cx, 111, ['A', 'B', 'C'][i]));
    });
    return svg;
  }

  svg.setAttribute('viewBox', '0 0 340 160');
  svg.setAttribute('width', '340');
  svg.setAttribute('aria-label', title);
  svg.append(label(170, 12, title));
  if (kind === 'pie-chart') {
    let start = 0;
    values.forEach((value, i) => {
      const end = start + value / 100;
      const p1 = point(86, 89, 60, start);
      const p2 = point(86, 89, 60, end);
      svg.append(shape('path', {
        d: `M 86 89 L ${p1.join(' ')} A 60 60 0 ${value > 50 ? 1 : 0} 1 ${p2.join(' ')} Z`,
        fill: ['white', '#ddd', '#bbb', '#999'][i], stroke: 'currentColor',
      }));
      svg.append(label(...point(86, 89, 41, (start + end) / 2), `${value}%`, 10));
      svg.append(label(220, 42 + 24 * i, `${labels[i]}　${value}%`));
      start = end;
    });
    return svg;
  }

  const tick = Math.ceil(Math.max(...values) / 40) * 10;
  const y = value => 136 - value / (tick * 4) * 100;
  const x = i => 65 + 74 * i;
  for (let i = 0; i <= 4; i++) {
    const level = i * tick;
    svg.append(line(40, y(level), 328, y(level), 0.4), label(22, y(level), level, 10));
  }
  svg.append(line(40, 36, 40, 136), line(40, 136, 328, 136));
  values.forEach((value, i) => {
    if (kind === 'line-chart') {
      if (i) svg.append(line(x(i - 1), y(values[i - 1]), x(i), y(value), 1.5));
      svg.append(shape('circle', { cx: x(i), cy: y(value), r: 3, fill: 'currentColor' }));
    } else {
      svg.append(shape('rect', { x: x(i) - 11, y: y(value), width: 22, height: 136 - y(value), fill: '#ddd', stroke: 'currentColor' }));
    }
    svg.append(label(x(i), y(value) - 8, value, 10), label(x(i), 147, labels[i], 10));
  });
  return svg;
}
