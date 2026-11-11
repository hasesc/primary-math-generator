const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const pair = ([x, y]) => `（${x}，${y}）`;
const directions = ['东', '东北', '北', '西北', '西', '西南', '南', '东南'];
const vectors = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
const points = (a, b) => [{ at: a, label: 'A' }, { at: b, label: 'B' }];

export function gridProblems(difficulty, count, { plugin }) {
  const items = [];
  const seen = new Set();
  const stepMax = { easy: 2, medium: 3, hard: 4 }[difficulty];
  for (let attempt = 0; items.length < Math.min(count, 6) && attempt < count * 30; attempt++) {
    const mode = items.length % 3;
    const x = random(2, 4);
    const y = random(2, 5);
    const step = random(1, stepMax);
    let diagram = { kind: 'grid' };
    let tasks;
    if (plugin === 'grid-pairs') {
      const a = [x, y];
      const b = [x + step, y];
      diagram = { ...diagram, numbered: true };
      tasks = [
        ['read-pair', '用数对表示点 A 的位置。', pair(a), { marks: points(a, b).slice(0, 1) }],
        ['plot-pair', `在图上标出点 B${pair(b)}。`, `B${pair(b)}`, {}, { marks: points(a, b).slice(1) }],
        ['move-pair', `点 A 向右移动 ${step} 格，新位置用数对怎样表示？`, pair(b), { marks: points(a, b).slice(0, 1) }],
      ];
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
        tasks = [
          ['read-bearing', '从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。', name, { marks, segment }],
          ['plot-bearing', `B 在 A 的${name}方向 ${distance} 米处。每小格边长代表 100 米，请用直尺在图上标出 B。`, `${name}方向 ${distance} 米`, { marks: marks.slice(0, 1) }, { marks, segment }],
          ['return-distance', '沿图中线段从 A 到 B 后原路返回，一共走多少米？', `${distance * 2} 米`, { marks, segment }],
        ];
      } else {
        tasks = [
          ['read-direction', 'B 在 A 的什么方向？', name, { marks }],
          ['plot-direction', `在 A 的${name}方向任意标出一点 C。`, `示例：C 在 A 的${name}方向`, { marks: marks.slice(0, 1) }, { marks: [{ at: a, label: 'A' }, { at: b, label: 'C' }] }],
          ['reverse-direction', '如果从 B 看 A，A 在 B 的什么方向？', opposite, { marks }],
        ];
      }
    } else {
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
        tasks = [
          ['rotate-clockwise', '画出三角形绕 O 点顺时针旋转 90° 后的图形。', '见参考图', { ...figure, marks: pivot }, { polygons: [original, clockwise], marks: pivot }],
          ['track-rotated-point', '三角形绕 O 点逆时针旋转 90°，点 A 的对应点在 O 的哪一侧？离 O 几格？', markIndex === 1 ? '上方 2 格' : '左侧 1 格', { ...figure, marks: marked }, { polygons: [original, counterclockwise], marks: rotatedMark }],
          ['read-rotation', '以 O 为旋转中心，原图（实线）怎样旋转得到虚线图形？', '顺时针旋转 90°', { polygons: [original, clockwise], marks: pivot }],
        ];
      } else {
        tasks = [
          ['read-slide', '原图（实线）向右平移了几格，得到虚线图形？', `${shift} 格`, { polygons: [original, translate] }],
          ['draw-slide', `画出三角形向右平移 ${shift} 格后的图形。`, '见参考图', figure, { polygons: [original, translate] }],
          ['draw-reflection', '以虚线为对称轴，画出这个三角形的轴对称图形。', '见参考图', { ...figure, axis }, { polygons: [original, reflect], axis }],
        ];
        if (plugin === 'grid-motion-1') {
          tasks[2] = ['distinguish-motion', '实线三角形变成虚线三角形时，发生的是平移、旋转还是轴对称翻折？', '轴对称翻折', { polygons: [original, reflect], axis }];
        }
      }
    }
    const [skill, question, answer, picture, reference] = tasks[mode];
    diagram = { ...diagram, ...picture };
    const key = JSON.stringify([question, diagram]);
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({
      question, answer, diagram, subtemplateId: skill, subtype: 'unit-grid', format: 'grid',
      answerDiagram: reference ? { ...diagram, ...reference } : undefined,
    });
  }
  return items;
}
