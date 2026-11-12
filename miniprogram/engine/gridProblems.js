const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const pair = ([x, y]) => `（${x}，${y}）`;
const directions = ['东', '东北', '北', '西北', '西', '西南', '南', '东南'];
const vectors = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
const points = (a, b) => [{ at: a, label: 'A' }, { at: b, label: 'B' }];

export function gridProblems(difficulty, count, { plugin }) {
  const items = [];
  const seen = new Set();
  const stepMax = { easy: 2, medium: 3, hard: 4 }[difficulty];
  for (let attempt = 0; items.length < Math.min(count, 6) && attempt < count * 40; attempt++) {
    const mode = items.length % 3;
    const x = random(2, 4);
    const y = random(2, 5);
    const step = random(1, stepMax);
    let diagram = { kind: 'grid' };
    let tasks;

    if (plugin === 'grid-pairs') {
      const a = [x, y];
      const b = [x + step, y];
      const c = [x, y + step];
      const d = [x + step, y + step];
      diagram = { ...diagram, numbered: true };
      if (difficulty === 'easy') {
        tasks = [
          ['read-pair', '用数对表示点 A 的位置。', pair(a), { marks: [{ at: a, label: 'A' }] }],
          ['plot-pair', `在图上标出点 B${pair(b)}。`, `B${pair(b)}`, {}, { marks: [{ at: b, label: 'B' }] }],
          ['pair-concept', `点 A${pair(a)} 在方格纸上表示第（    ）列第（    ）行。`, `第 ${a[0]} 列第 ${a[1]} 行`, { marks: [{ at: a, label: 'A' }] }],
        ];
      } else if (difficulty === 'hard') {
        tasks = [
          ['quad-pairs', `若 A${pair(a)}、B${pair(b)}、C${pair(c)} 和 D 构成一个平行四边形，顶点 D 的数对是（    ）。`, pair(d), { marks: [{ at: a, label: 'A' }, { at: b, label: 'B' }, { at: c, label: 'C' }] }, { marks: [{ at: a, label: 'A' }, { at: b, label: 'B' }, { at: c, label: 'C' }, { at: d, label: 'D' }] }],
          ['reverse-vertex', `点 A${pair(a)} 关于水平对称线 y=${y} 对称的点 A′ 的数对是（    ）。`, pair(a), { marks: [{ at: a, label: 'A' }] }],
          ['area-from-pairs', `以 A${pair(a)}、B${pair(b)}、D${pair(d)}、C${pair(c)} 为顶点的正方形面积是（    ）个小方格。`, `${step * step} 个`, { marks: [{ at: a, label: 'A' }, { at: b, label: 'B' }, { at: d, label: 'D' }, { at: c, label: 'C' }] }],
        ];
      } else {
        const isRow = (x + y) % 2 === 0;
        const p2 = isRow ? [x + step, y] : [x, y + step];
        tasks = [
          ['move-pair', `在图上标出点 A${pair(a)} 向右移动 ${step} 格后的点 A′。`, `A′${pair(b)}`, { marks: [{ at: a, label: 'A' }] }, { marks: [{ at: a, label: 'A' }, { at: b, label: 'A′' }] }],
          ['line-pairs', `点 A${pair(a)} 和点 B${pair(p2)} 在同一（    ）上。（填“行”或“列”）`, isRow ? '行' : '列', { marks: [{ at: a, label: 'A' }, { at: p2, label: 'B' }] }],
          ['triangle-vertex-pairs', `将三角形 ABC 向右平移 ${step} 格，点 A${pair(a)} 对应的点 A′ 的数对是（    ）。`, pair(b), { marks: [{ at: a, label: 'A' }] }],
        ];
      }
    } else if (plugin === 'grid-direction' || plugin === 'grid-bearing') {
      const bearing = plugin === 'grid-bearing';
      const i = random(0, 7);
      const [dx, dy] = vectors[i];
      const a = [5, 5];
      const length = step / Math.hypot(dx, dy);
      const b = [a[0] + dx * length, a[1] + dy * length];
      const direction = [null, '东偏北45°', null, '西偏北45°', null, '西偏南45°', null, '东偏南45°'][i];
      const name = bearing ? direction || `正${directions[i]}` : directions[i];
      const opposite = directions[(i + 4) % 8];
      const marks = points(a, b);
      const distance = step * 100;
      diagram = { ...diagram, compass: true };

      if (bearing) {
        const segment = { from: a, to: b, text: `${distance} 米${direction ? ' · 45°' : ''}` };
        if (difficulty === 'easy') {
          tasks = [
            ['read-bearing', '从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。', name, { marks, segment }],
            ['bearing-distance', `每小格边长代表 100 米，A 到 B 的图上距离代表实际距离（    ）米。`, `${distance} 米`, { marks, segment }],
            ['plot-bearing', `B 在 A 的${name}方向 ${distance} 米处。每小格边长代表 100 米，请在图上标出 B。`, `${name}方向 ${distance} 米`, { marks: marks.slice(0, 1) }, { marks, segment }],
          ];
        } else if (difficulty === 'hard') {
          const speed = 50;
          tasks = [
            ['route-speed-time', `小明以每分钟 ${speed} 米的速度从 A 走向 B，需要走（    ）分钟。`, `${distance / speed} 分钟`, { marks, segment }],
            ['multi-point-bearing', `B 在 A 的${name}方向 ${distance} 米处，请在图中标出点 B。`, `${name}方向 ${distance} 米`, { marks: marks.slice(0, 1) }, { marks, segment }],
            ['bearing-intercept', `由 A 出发经 B 处掉头返回 A，往返一共行驶了（    ）米。`, `${distance * 2} 米`, { marks, segment }],
          ];
        } else {
          tasks = [
            ['plot-bearing', `B 在 A 的${name}方向 ${distance} 米处。每小格边长代表 100 米，请用直尺在图上标出 B。`, `${name}方向 ${distance} 米`, { marks: marks.slice(0, 1) }, { marks, segment }],
            ['reverse-bearing', `如果以 B 为观测点，点 A 在点 B 的什么方向？`, opposite, { marks, segment }],
            ['return-distance', '沿图中线段从 A 到 B 后原路返回，一共走多少米？', `${distance * 2} 米`, { marks, segment }],
          ];
        }
      } else {
        // grid-direction (3下)
        if (difficulty === 'easy') {
          tasks = [
            ['read-direction', 'B 在 A 的什么方向？', name, { marks }],
            ['dir-opposite', `与“${directions[i]}”相对的方向是（    ）。`, opposite, { marks: marks.slice(0, 1) }],
            ['plot-direction', `在 A 的${name}方向标出一点 C。`, `示例：C 在 A 的${name}方向`, { marks: marks.slice(0, 1) }, { marks: [{ at: a, label: 'A' }, { at: b, label: 'C' }] }],
          ];
        } else if (difficulty === 'hard') {
          const refDirs = ['东', '南', '西', '北'];
          const refD = refDirs[random(0, 3)];
          const backD = { '东': '西', '西': '东', '南': '北', '北': '南' }[refD];
          tasks = [
            ['multi-stop-tour', `从 A 先向${directions[i]}走到 B，再从 B 原路回到 A，一共走了（    ）段路。`, '2 段', { marks }],
            ['compass-relative', `指南针指针指向${refD}面，则背对指针的方向是（    ）面。`, backD, { marks: marks.slice(0, 1) }],
            ['route-distance', `小华从学校 A 出发向${name}走 ${step} 格到达图书馆 B，请在图中标出 B。`, `标出点 B`, { marks: marks.slice(0, 1) }, { marks }],
          ];
        } else {
          tasks = [
            ['read-eight-dir', '看图判断：点 B 在点 A 的什么方向？（填8个方向之一）', name, { marks }],
            ['reverse-direction', '如果从 B 看 A，A 在 B 的什么方向？', opposite, { marks }],
            ['route-walk', `从点 A 出发在图上标出向${name}方向走 ${step} 格到达的点 B。`, `标出点 B`, { marks: marks.slice(0, 1) }, { marks }],
          ];
        }
      }
    } else {
      // motion: grid-motion-1, grid-motion-2, grid-motion-3
      const original = [[x, y], [x + 2, y], [x, y + 1]];
      const translate = original.map(([px, py]) => [px + Math.min(step, 9 - x - 2), py]);
      const shift = translate[0][0] - x;
      const axis = x + 2.5;
      const reflect = original.map(([px, py]) => [2 * axis - px, py]);
      const [cx, cy] = original[0];
      const clockwise = original.map(([px, py]) => [cx + py - cy, cy - (px - cx)]);
      const counterclockwise = original.map(([px, py]) => [cx - (py - cy), cy + px - cx]);
      const pivot = [{ at: original[0], label: 'O' }];
      const figure = { polygons: [original] };

      if (plugin === 'grid-motion-3') {
        const markIndex = random(1, 2);
        const marked = [...pivot, { at: original[markIndex], label: 'A' }];
        const rotatedMark = [...pivot, { at: counterclockwise[markIndex], label: 'A′' }];
        if (difficulty === 'easy') {
          const hours = [3, 6, 9];
          const h = hours[random(0, 2)];
          tasks = [
            ['read-rotation', '以 O 为旋转中心，原图（实线）怎样旋转得到虚线图形？', '顺时针旋转 90°', { polygons: [original, clockwise], marks: pivot }],
            ['rotate-point-direct', '画出三角形绕 O 点顺时针旋转 90° 后的图形。', '见参考图', { ...figure, marks: pivot }, { polygons: [original, clockwise], marks: pivot }],
            ['clock-hand-rotate', `钟面上分针从“12”旋转到“${h}”，顺时针旋转了（    ）度。`, `${h * 30}°`, { polygons: [original], marks: pivot }],
          ];
        } else if (difficulty === 'hard') {
          tasks = [
            ['rotate-combo-pattern', '一个图形绕中心点连续旋转 4 次 90° 后，（    ）回到原位置。（填“能”或“不能”）', '能', { polygons: [original, clockwise], marks: pivot }],
            ['rotate-counter-clockwise', '画出三角形绕 O 点逆时针旋转 90° 后的图形。', '见参考图', { ...figure, marks: pivot }, { polygons: [original, counterclockwise], marks: pivot }],
            ['rotate-area-trace', '三角形旋转前后，它的形状和大小（    ）。', '完全不变', { polygons: [original, clockwise], marks: pivot }],
          ];
        } else {
          const ang = [90, 180][random(0, 1)];
          tasks = [
            ['rotate-clockwise', '画出三角形绕 O 点顺时针旋转 90° 后的图形。', '见参考图', { ...figure, marks: pivot }, { polygons: [original, clockwise], marks: pivot }],
            ['track-rotated-point', '三角形绕 O 点逆时针旋转 90°，点 A 的对应点在 O 的哪一侧？离 O 几格？', markIndex === 1 ? '上方 2 格' : '左侧 1 格', { ...figure, marks: marked }, { polygons: [original, counterclockwise], marks: rotatedMark }],
            ['rotate-angle-detect', `图形绕 O 点旋转 ${ang}°，对应点与 O 点连线形成的角是（    ）度。`, `${ang}°`, { polygons: [original], marks: pivot }],
          ];
        }
      } else if (plugin === 'grid-motion-1') {
        if (difficulty === 'easy') {
          tasks = [
            ['motion-type-judge', '实线三角形变成虚线三角形时，发生的是平移、旋转还是轴对称翻折？', '轴对称翻折', { polygons: [original, reflect], axis }],
            ['draw-slide-simple', `画出三角形向右平移 ${shift} 格后的图形。`, '见参考图', figure, { polygons: [original, translate] }],
            ['read-slide-simple', '原图（实线）向右平移了几格得到虚线图形？', `${shift} 格`, { polygons: [original, translate] }],
          ];
        } else if (difficulty === 'hard') {
          const cuts = [['长方形', '2'], ['正方形', '4'], ['等腰梯形', '1']];
          const ct = cuts[random(0, 2)];
          tasks = [
            ['draw-symmetric-half', '画出这个三角形关于虚线对称的轴对称图形。', '见参考图', { ...figure, axis }, { polygons: [original, reflect], axis }],
            ['motion-cut-open', `${ct[0]}一共有（    ）条对称轴。`, `${ct[1]} 条`, { ...figure, axis }],
            ['slide-draw-exact', `画出三角形向右平移 ${shift} 格后的图形。`, '见参考图', figure, { polygons: [original, translate] }],
          ];
        } else {
          const shapes = [['长方形', '2 条'], ['正方形', '4 条'], ['等边三角形', '3 条'], ['等腰梯形', '1 条']];
          const sh = shapes[random(0, 3)];
          tasks = [
            ['read-slide', '原图（实线）向右平移了几格，得到虚线图形？', `${shift} 格`, { polygons: [original, translate] }],
            ['count-axis', `${sh[0]}有（    ）条对称轴。`, sh[1], { ...figure, axis }],
            ['draw-reflection', '画出这个三角形关于虚线对称的轴对称图形。', '见参考图', { ...figure, axis }, { polygons: [original, reflect], axis }],
          ];
        }
      } else {
        // grid-motion-2 (4下)
        if (difficulty === 'easy') {
          const shapes = [['等边三角形', '3 条'], ['等腰三角形', '1 条'], ['正方形', '4 条']];
          const sh = shapes[random(0, 2)];
          tasks = [
            ['draw-slide', `画出三角形向右平移 ${shift} 格后的图形。`, '见参考图', figure, { polygons: [original, translate] }],
            ['count-axis', `${sh[0]}有（    ）条对称轴。`, sh[1], { ...figure, axis }],
            ['read-slide', '原图（实线）向右平移了几格，得到虚线图形？', `${shift} 格`, { polygons: [original, translate] }],
          ];
        } else if (difficulty === 'hard') {
          tasks = [
            ['irregular-area-motion', '利用平移转化法，把不规则图形转化成规则图形，面积（    ）。', '保持不变', { polygons: [original, translate] }],
            ['dual-axis-reflect', '画出这个三角形关于虚线对称的轴对称图形。', '见参考图', { ...figure, axis }, { polygons: [original, reflect], axis }],
            ['multi-step-motion', `三角形先向右平移 ${shift} 格，对应顶点到对称轴的距离（    ）。`, '发生改变', { polygons: [original, translate], axis }],
          ];
        } else {
          const dist = Math.abs(x - axis);
          tasks = [
            ['draw-reflection', '画出这个三角形关于虚线对称的轴对称图形。', '见参考图', { ...figure, axis }, { polygons: [original, reflect], axis }],
            ['distance-to-axis', `点 A 到对称轴的距离是 ${dist} 格，它的对称点到对称轴的距离是（    ）格。`, `${dist} 格`, { polygons: [original, reflect], axis }],
            ['draw-slide', `画出三角形向右平移 ${shift} 格后的图形。`, '见参考图', figure, { polygons: [original, translate] }],
          ];
        }
      }
    }

    const [skill, question, answer, picture, reference] = tasks[mode];
    diagram = { ...diagram, ...picture };
    const key = JSON.stringify([question, diagram]);
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({
      question, answer: String(answer), diagram, subtemplateId: skill, subtype: 'unit-grid', format: 'grid',
      answerDiagram: reference ? { ...diagram, ...reference } : undefined,
    });
  }
  return items;
}
