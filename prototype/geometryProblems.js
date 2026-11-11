const integer = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const scene = (...elements) => ({ kind: 'geometry', elements: elements.flat() });
const element = (tag, attrs, text) => ({ tag, attrs, text });
const text = (x, y, value) => element('text', { x, y, 'text-anchor': 'middle', 'font-size': 12, fill: 'currentColor', stroke: 'none' }, value);
const line = (x1, y1, x2, y2, dashed = false) => element('line', { x1, y1, x2, y2, 'stroke-dasharray': dashed ? '4 3' : 'none' });
const rect = (x, y, width, height, fill = 'none') => element('rect', { x, y, width, height, fill });
const ellipse = (cx, cy, rx, ry) => element('ellipse', { cx, cy, rx, ry, fill: 'none' });
const polygon = (points, fill = 'none') => element('polygon', { points: points.map(p => p.join(',')).join(' '), fill });

function cubes(heights) {
  const faces = [];
  const at = (x, y, z) => [113 + (x - y) * 17, 74 + (x + y) * 9 - z * 18];
  for (let depth = 0; depth <= 3; depth++) {
    for (let y = 0; y < heights.length; y++) {
      for (let x = 0; x < heights[y].length; x++) {
        if (x + y !== depth) continue;
        for (let z = 0; z < heights[y][x]; z++) {
          const a = at(x, y, z + 1), b = at(x + 1, y, z + 1);
          const c = at(x + 1, y + 1, z + 1), d = at(x, y + 1, z + 1);
          faces.push(
            polygon([b, c, at(x + 1, y + 1, z), at(x + 1, y, z)], '#ddd'),
            polygon([d, c, at(x + 1, y + 1, z), at(x, y + 1, z)], '#f2f2f2'),
            polygon([a, b, c, d], 'white'),
          );
        }
      }
    }
  }
  return faces;
}

function earlyTasks(plugin) {
  if (plugin === 'geo-count') {
    const a = integer(2, 5), b = integer(1, a - 1);
    const upper = integer(0, 1);
    const dots = (n, y) => Array.from({ length: n }, (_, i) => ellipse(47 + 27 * i, y, 7, 7));
    return [
      ['count-objects', '数一数，图中有几个圆？', a, scene(dots(a, 52))],
      ['compare-groups', '上排和下排，哪一排的圆更多？', upper ? '上排' : '下排', scene(dots(upper ? a : b, 39), dots(upper ? b : a, 71))],
      ['match-quantity', '在下方横线上画三角形，画得和圆一样多。', `画 ${b} 个三角形`, scene(dots(b, 43), line(30, 83, 180, 83)),
        scene(dots(b, 43), Array.from({ length: b }, (_, i) => polygon([[39 + 27 * i, 82], [55 + 27 * i, 82], [47 + 27 * i, 68]])))],
    ];
  }
  if (plugin === 'geo-position') {
    const x = integer(52, 130);
    const box = rect(x, 48, 27, 27);
    const right = integer(0, 1) === 1;
    const cx = right ? x + 51 : x - 24;
    return [
      ['vertical-position', '圆在正方形的上面还是下面？', right ? '上面' : '下面', scene(box, ellipse(x + 13.5, right ? 28 : 95, 7, 7))],
      ['horizontal-position', '圆在正方形的左边还是右边？', right ? '右边' : '左边', scene(box, ellipse(cx, 61, 7, 7))],
      ['place-relative', '在圆的右边画一个三角形。', '示例见参考图', scene(ellipse(x, 58, 8, 8)),
        scene(ellipse(x, 58, 8, 8), polygon([[x + 18, 66], [x + 36, 66], [x + 27, 50]]))],
    ];
  }
  const variant = integer(0, 1);
  if (plugin === 'geo-shapes-solid') {
    const block = cubes([[1]]);
    const ball = [ellipse(62, 59, 20, 20), ellipse(62, 59, 20, 6)];
    const cylinder = [ellipse(152, 39, 17, 6), ellipse(152, 77, 17, 6), line(135, 39, 135, 77), line(169, 39, 169, 77)];
    return [
      ['name-solid', '图中是哪一种立体图形？', variant ? '球' : '圆柱', scene(variant ? ball : cylinder)],
      ['identify-flat-and-curved', '哪一个图形既有平面又有曲面？写 A 或 B。', 'B', scene(ball, cylinder, text(62, 94, 'A'), text(152, 94, 'B'), text(109, 15 + variant * 3, '选一选'))],
      ['identify-cube', '哪一个是正方体？写 A 或 B。', variant ? 'A' : 'B',
        scene(block, variant ? cylinder : ball, text(variant ? 113 : 62, 104, 'A'), text(variant ? 152 : 113, 104, 'B'))],
    ];
  }
  const size = integer(21, 30);
  const square = rect(54, 35, size, size);
  const triangle = polygon([[110, 72], [152, 72], [128, 35]]);
  return [
    ['name-shape', '图中是哪一种平面图形？', variant ? '正方形' : '三角形', scene(variant ? square : triangle)],
    ['count-sides', '数一数，这个图形有几条边？', variant ? 4 : 3, scene(variant ? rect(50, 35, size + 14, size) : polygon([[65, 80], [118, 80], [100, 24]]))],
    ['find-shape', '哪个图形是正方形？写 A 或 B。', variant ? 'A' : 'B',
      scene(square, rect(122, 40, size + 11, size), text(65, 92, variant ? 'A' : 'B'), text(140, 92, variant ? 'B' : 'A'))],
  ];
}

function angleTasks(plugin, difficulty) {
  const pool = difficulty === 'easy'
    ? [30, 45, 60, 90]
    : difficulty === 'medium'
      ? [35, 55, 70, 110, 125, 145]
      : [25, 65, 85, 105, 135, 155];
  const deg = pool[integer(0, pool.length - 1)];
  const x = integer(55, 72), y = 82;
  const ray = (angle, length = 47) => line(x, y, x + length * Math.cos(angle * Math.PI / 180), y - length * Math.sin(angle * Math.PI / 180));
  const angle = degrees => [ray(0), ray(degrees)];
  const type = deg < 90 ? '锐角' : deg > 90 ? '钝角' : '直角';
  if (plugin === 'geo-angle-measure') {
    if (difficulty === 'hard') return [
      ['measure-angle', '用量角器量出图中角的度数。', `${deg}°`, scene(angle(deg))],
      ['supplement-angle', `已知图中角与∠2拼成一个平角（180°），图中角为 ${deg}°，求∠2的度数。`, `${180 - deg}°`, scene(angle(deg), ray(180))],
      ['draw-angle', `以图中的线段为一条边、左端点为顶点，向上画出 ${deg}° 的角。`, `${deg}°，见参考图`, scene(ray(0)), scene(angle(deg))],
    ];
    return [
      ['measure-angle', '用量角器量出图中角的度数。', `${deg}°`, scene(angle(deg))],
      ['classify-angle', '判断图中的是锐角、直角还是钝角。', type, scene(angle(deg))],
      ['draw-angle', `以图中的线段为一条边、左端点为顶点，向上画出 ${deg}° 的角。`, `${deg}°，见参考图`, scene(ray(0)), scene(angle(deg))],
    ];
  }
  const right = integer(0, 1);
  if (difficulty === 'hard') return [
    ['count-right-angles', '数一数，图中的图形一共有几个直角？', right ? 4 : 1,
      scene(right ? rect(x, 39, 54, 37) : polygon([[x, 75], [x + 50, 75], [x, 35]]))],
    ['right-angle', '图中的角是直角吗？可以用三角尺比一比。', right ? '是' : '不是', scene(angle(right ? 90 : 60))],
    ['locate-vertex', '在图中用小圆点标出角的顶点。', '两条边的公共端点', scene(angle(deg)), scene(angle(deg), ellipse(x, y, 3, 3))],
  ];
  return [
    ['count-angles', '数一数，图中的封闭图形有几个角？', right ? 4 : 3,
      scene(right ? rect(x, 39, 54, 37) : polygon([[x, 75], [x + 50, 75], [x + 19, 35]]))],
    ['right-angle', '图中的角是直角吗？可以用三角尺比一比。', right ? '是' : '不是', scene(angle(right ? 90 : 60))],
    ['locate-vertex', '在图中用小圆点标出角的顶点。', '两条边的公共端点', scene(angle(deg)), scene(angle(deg), ellipse(x, y, 3, 3))],
  ];
}

function viewTasks(plugin, difficulty) {
  const top = () => integer(difficulty === 'hard' ? 1 : 0, difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3);
  const heights = plugin === 'geo-view-1'
    ? [[1, integer(0, difficulty === 'easy' ? 1 : 2), 0], [integer(0, 1), 1, integer(0, difficulty === 'hard' ? 2 : 1)]]
    : [[1, top(), 0], [top(), 1, top()]];
  const build = cubes(heights);
  const caption = [text(70, 113, '从前面看 ↗'), text(176, 113, '↖ 从右面看')];
  const front = heights[0].map((n, i) => Math.max(n, heights[1][i]));
  const side = heights.map(row => Math.max(...row));
  const projection = cells => cells.flatMap((row, y) => row.map((filled, x) => rect(205 + x * 18, 47 + y * 18, 18, 18, filled ? '#ddd' : 'none')));
  const rows = columns => Array.from({ length: 3 }, (_, y) => columns.map(height => height >= 3 - y));
  const topView = heights.map(row => row.map(height => height > 0));
  const layout = scene(build, caption);
  if (plugin === 'geo-view-3') {
    const hMax = difficulty === 'easy' ? 2 : 3;
    const first = [[1, 0], [1, integer(1, hMax)]];
    const second = [[1, integer(1, hMax)], [0, 1]];
    const plan = cells => cells.flatMap((row, y) => row.map((n, x) => [
      rect(54 + 28 * x, 28 + 28 * y, 28, 28),
      text(68 + 28 * x, 46 + 28 * y, n || ''),
    ])).flat();
    const prompt = '俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。';
    const buildPlan = [[first[1][1], 1], [1, 0]];
    return [
      ['interpret-plan', `${prompt} 拼出这堆图形一共需要几个小正方体？`, first.flat().reduce((a, b) => a + b), scene(plan(first)), scene(cubes(first), caption)],
      ['plan-to-front', `${prompt} 从前面看，左右两列分别有几层？`, `左列 ${Math.max(...second.map(row => row[0]))} 层，右列 ${Math.max(...second.map(row => row[1]))} 层`, scene(plan(second)), scene(cubes(second), caption)],
      ['build-from-plan', `${prompt} 请用小正方体摆出这个图形。`, '搭法见参考图', scene(plan(buildPlan)), scene(cubes(buildPlan), caption)],
    ];
  }
  return [
    ['count-blocks', '图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？', heights.flat().reduce((a, b) => a + b), layout],
    plugin === 'geo-view-1'
      ? ['read-front', '从前面看，最下面一行能看到几个小正方形？', front.filter(n => n > 0).length, layout]
      : ['read-front', '从前面看，最高的一列有几个小正方形？', Math.max(...front), layout],
    plugin === 'geo-view-1'
      ? ['draw-top', '从上面看哪些格子有小正方体？在右侧空格中涂出来。右侧图上方对应物体的后方。', '见参考图', scene(build, caption, projection(topView.map(row => row.map(() => false)))), scene(build, caption, projection(topView))]
      : ['draw-side', '从右面看是什么样子？在右侧方格里从最底下一行开始涂，左列对应物体的后排。', '见参考图', scene(build, caption, projection(rows(side).map(row => row.map(() => false)))), scene(build, caption, projection(rows(side)))],
  ];
}

function planeTasks(plugin, difficulty) {
  const a = integer(4, difficulty === 'easy' ? 7 : difficulty === 'medium' ? 10 : 16);
  const b = integer(2, a - 1);
  const dimensions = scene(rect(35, 24, 94, 62), text(82, 104, `${a} 厘米`), text(160, 58, `${b} 厘米`));
  const square = scene(rect(37, 23, 63, 63), text(68, 106, `${b} 厘米`));
  if (plugin === 'geo-perimeter') return [
    ['rect-perimeter', '求图中长方形的周长。', `${2 * (a + b)} 厘米`, dimensions],
    ['square-perimeter', '沿正方形四周围一圈，需要多长的线？', `${4 * b} 厘米`, square],
    ['trace-perimeter', '从图中的黑点出发，沿边描一圈，再回到黑点。', '描出长方形四条边', scene(dimensions.elements, element('circle', { cx: 35, cy: 24, r: 3, fill: '#111' })),
      scene(rect(35, 24, 94, 62), element('rect', { x: 35, y: 24, width: 94, height: 62, fill: 'none', 'stroke-width': 4 }))],
  ];
  if (plugin === 'geo-area') {
    const cells = Array.from({ length: b + 1 }, (_, y) => Array.from({ length: a + 1 }, (_, x) => rect(30 + x * 6, 20 + y * 6, 6, 6, x < a && y < b ? '#ddd' : 'none')));
    return [
      ['count-area-units', '每小格是 1 平方厘米。数一数，阴影的面积是多少？', `${a * b} 平方厘米`, scene(cells.flat())],
      ['rect-area', '按图中标注，求长方形的面积。', `${a * b} 平方厘米`, dimensions],
      ['square-area', '按图中标注，求正方形的面积。', `${b * b} 平方厘米`, square],
    ];
  }
  if (plugin === 'geo-quad') {
    const para = [[34, 84], [118, 84], [145, 32], [61, 32]];
    const trap = [[34, 84], [142, 84], [113, 32], [62, 32]];
    return [
      ['classify-quad', '图中是平行四边形还是梯形？', a % 2 ? '平行四边形' : '梯形', scene(polygon(a % 2 ? para : trap), text(200, 36 + b, '看一看'))],
      ['parallel-sides', '用笔描出这个梯形中互相平行的一对边。', '描出上底和下底', scene(polygon(trap), text(200, 42 + a, '描一描')),
        scene(polygon(trap), element('line', { x1: 34, y1: 84, x2: 142, y2: 84, 'stroke-width': 4 }), element('line', { x1: 62, y1: 32, x2: 113, y2: 32, 'stroke-width': 4 }))],
      ['draw-height', '从黑点向下方的底画一条高。', '见参考图', scene(polygon(para), element('circle', { cx: 61, cy: 32, r: 3, fill: '#111' }), text(197, 48 + b, '画一画')),
        scene(polygon(para), line(61, 32, 61, 84, true), rect(61, 77, 7, 7))],
    ];
  }
  if (plugin === 'geo-composite') {
    const h = 2 * b;
    const trapezoid = scene(polygon([[35, 82], [152, 82], [118, 31], [64, 31]]), line(64, 31, 64, 82, true),
      text(90, 20, `${b} 厘米`), text(93, 101, `${a} 厘米`), text(95, 63, `${h} 厘米`));
    const lShape = [[33, 22], [87, 22], [87, 51], [151, 51], [151, 83], [33, 83]];
    return [
      ['trapezoid-area', '根据图中上下底和高，求梯形面积。', `${(a + b) * h / 2} 平方厘米`, trapezoid],
      ['split-shape', '只画一条线，把这个图形分成两个长方形。', '示例见参考图', scene(polygon(lShape), text(197, 35 + a, '分一分')), scene(polygon(lShape), line(87, 51, 87, 83, true))],
      ['combine-areas', '阴影由两个长方形拼成，图中数字均以厘米为单位。求阴影面积。', `${b * (h + a)} 平方厘米`,
        scene(polygon(lShape, '#ddd'), line(33, 51, 87, 51, true), text(60, 16, b), text(23, 39, h), text(91, 104, a), text(166, 69, b))],
    ];
  }
  if (plugin === 'geo-triangle') {
    const points = a % 2 ? [[31, 83], [123, 83], [31, 25]] : [[31, 83], [123, 83], [75, 20]];
    const second = 80 - b * 2;
    return [
      ['classify-triangle', '看图判断，这是直角三角形还是锐角三角形？', a % 2 ? '直角三角形' : '锐角三角形', scene(polygon(points), a % 2 ? rect(31, 76, 7, 7) : text(171, 46 + b, '看一看'))],
      ['triangle-angle-sum', '根据图中标出的两个角，求顶角 ∠A。', `${180 - 45 - second}°`,
        scene(polygon([[31, 83], [145, 83], [84, 24]]), text(84, 15, 'A'), text(54, 77, '45°'), text(121, 77, `${second}°`))],
      ['triangle-height', '从顶点 A 向下方的底画一条高。', '见参考图', scene(polygon(points), text(points[2][0], points[2][1] - 7, 'A')),
        scene(polygon(points), line(points[2][0], points[2][1], points[2][0], 83, true), text(points[2][0], points[2][1] - 7, 'A'))],
    ];
  }
  const cx = 81, cy = 57, r = 36;
  const circle = ellipse(cx, cy, r, r);
  const diameter = line(cx - r, cy, cx + r, cy);
  const radius = line(cx, cy, cx + r, cy);
  const center = element('circle', { cx, cy, r: 2, fill: '#111' });
  return [
    ['identify-segment', '图中画出的线段是半径还是直径？', a % 2 ? '直径' : '半径', scene(circle, a % 2 ? diameter : radius, center, text(cx, cy - 7, 'O'))],
    ['diameter-to-radius', '图中标出直径的长度，求这个圆的半径。', `${a} 厘米`, scene(circle, diameter, center, text(cx, 105, `${2 * a} 厘米`))],
    ['draw-radius', '从圆心 O 画一条半径。', '示例见参考图', scene(circle, center, text(cx - 8, cy + 13, 'O'), text(155, 37 + b, '画一画')),
      scene(circle, center, radius, text(cx - 8, cy + 13, 'O'))],
  ];
}

function solidTasks(plugin, difficulty) {
  const a = integer(4, difficulty === 'easy' ? 6 : difficulty === 'medium' ? 10 : 15);
  const b = integer(2, a - 1);
  const h = integer(2, difficulty === 'easy' ? 5 : difficulty === 'medium' ? 8 : 11);
  if (plugin === 'geo-cuboid') {
    const box = scene(rect(42, 35, 90, 53), polygon([[42, 35], [68, 18], [158, 18], [132, 35]]),
      polygon([[132, 35], [158, 18], [158, 71], [132, 88]]), text(87, 105, `${a} 厘米`), text(175, 81, `${b} 厘米`), text(19, 64, `${h} 厘米`));
    const size = 17 + b;
    const net = [0, 1, 2, 3].map(i => rect(55 + i * size, 45, size, size));
    net.push(rect(55 + size, 45 - size, size, size), rect(55 + size, 45 + size, size, size));
    const face = (i, label) => text(55 + (i + 0.5) * size, 49 + size / 2, label);
    if (difficulty === 'hard') return [
      ['cuboid-volume', '读图中三条棱的长度，求长方体的体积。', `${a * b * h} 立方厘米`, box],
      ['cuboid-edge-sum', '按图中标注的长、宽、高，求这个长方体12条棱的总长度。', `${4 * (a + b + h)} 厘米`, box],
      ['opposite-face', '把这个展开图折成正方体，与 A 面相对的是哪个面？', 'C 面',
        scene(net, face(0, 'A'), face(1, 'B'), face(2, 'C'), face(3, 'D')),
        scene(net, face(0, 'A'), face(1, 'B'), face(2, 'C'), face(3, 'D'), text(217, 55, 'A 与 C 相对'))],
    ];
    return [
      ['cuboid-volume', '读图中三条棱的长度，求长方体的体积。', `${a * b * h} 立方厘米`, box],
      ['cuboid-surface', '按图中标注，求长方体六个面的总面积。', `${2 * (a * b + a * h + b * h)} 平方厘米`, box],
      ['opposite-face', '把这个展开图折成正方体，与 A 面相对的是哪个面？', 'C 面',
        scene(net, face(0, 'A'), face(1, 'B'), face(2, 'C'), face(3, 'D')),
        scene(net, face(0, 'A'), face(1, 'B'), face(2, 'C'), face(3, 'D'), text(217, 55, 'A 与 C 相对'))],
    ];
  }
  const rx = 24, ry = 8;
  const cx = 78, top = 31, bottom = 84;
  const cylinder = [ellipse(cx, top, rx, ry), ellipse(cx, bottom, rx, ry), line(cx - rx, top, cx - rx, bottom), line(cx + rx, top, cx + rx, bottom)];
  const cone = [ellipse(cx, bottom, rx, ry), line(cx, top, cx - rx, bottom), line(cx, top, cx + rx, bottom)];
  const base = [line(cx - rx, bottom, cx + rx, bottom), text(cx, 107, `直径 ${2 * b} 厘米`)];
  const height = [line(cx, top, cx, bottom, true), text(135, 61, `高 ${3 * h} 厘米`)];
  if (difficulty === 'hard') return [
    ['cylinder-lateral-area', '根据图中标注，求圆柱的侧面积。π 取 3.14。', `${(3.14 * 2 * b * 3 * h).toFixed(2)} 平方厘米`, scene(cylinder, base, height)],
    ['cone-volume', '根据图中标注，求圆锥体积。π 取 3.14。', `${(3.14 * b * b * h).toFixed(2)} 立方厘米`, scene(cone, base, height)],
    ['mark-cone-height', '画出图中圆锥的高。', '从顶点垂直连到底面圆心', scene(cone, element('circle', { cx, cy: bottom, r: 2, fill: '#111' }), text(150, 36 + a, '画一画')),
      scene(cone, line(cx, top, cx, bottom, true), element('circle', { cx, cy: bottom, r: 2, fill: '#111' }))],
  ];
  return [
    ['cylinder-volume', '根据图中标注，求圆柱体积。π 取 3.14。', `${(3.14 * b * b * 3 * h).toFixed(2)} 立方厘米`, scene(cylinder, base, height)],
    ['cone-volume', '根据图中标注，求圆锥体积。π 取 3.14。', `${(3.14 * b * b * h).toFixed(2)} 立方厘米`, scene(cone, base, height)],
    ['mark-cone-height', '画出图中圆锥的高。', '从顶点垂直连到底面圆心', scene(cone, element('circle', { cx, cy: bottom, r: 2, fill: '#111' }), text(150, 36 + a, '画一画')),
      scene(cone, line(cx, top, cx, bottom, true), element('circle', { cx, cy: bottom, r: 2, fill: '#111' }))],
  ];
}

export function geometryProblems(difficulty, count, { plugin }) {
  const items = [];
  const seen = new Set();
  for (let attempt = 0; items.length < Math.min(6, count) && attempt < count * 40; attempt++) {
    let tasks;
    if (plugin.startsWith('geo-view-')) tasks = viewTasks(plugin, difficulty);
    else if (plugin.startsWith('geo-angle-')) tasks = angleTasks(plugin, difficulty);
    else if (['geo-count', 'geo-position', 'geo-shapes-solid', 'geo-shapes-plane'].includes(plugin)) tasks = earlyTasks(plugin);
    else if (['geo-cuboid', 'geo-cylinder'].includes(plugin)) tasks = solidTasks(plugin, difficulty);
    else tasks = planeTasks(plugin, difficulty);
    const [skill, question, answer, diagram, answerDiagram] = tasks[items.length % tasks.length];
    const key = JSON.stringify([question, diagram]);
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({ question, answer: String(answer), diagram, answerDiagram, format: 'geometry', subtemplateId: skill, subtype: 'unit-geometry' });
  }
  return items;
}
