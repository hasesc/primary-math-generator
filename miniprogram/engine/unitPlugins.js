// unitPlugins.js —— 单元专用生成器插件（引擎没有覆盖的教材单元在这里补齐）
// 每个插件返回 {question, answer} 数组；difficulty: 'easy'|'medium'|'hard'
import { clockProblems, statisticsProblems } from './diagramProblems.js';
import { gridProblems } from './gridProblems.js';
import { geometryProblems } from './geometryProblems.js';
import { SCOPE_PLUGINS } from './scopeProblems.js';

function ri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[ri(0, arr.length - 1)];
}

// 轮转选择：让同一类插件内的题型均匀分布，避免整卷都是同一种问法
function pickCycle(arr, i) {
  return arr[i % arr.length];
}

/**
 * 长方形和正方形 / 面积：周长、面积应用题
 */
function rectProblems(difficulty, count, cfg) {
  const out = [];
  const ranges = {
    easy:   { side: [3, 12] },
    medium: { side: [4, 25] },
    hard:   { side: [6, 48] },
  }[difficulty];
  const units = ['厘米', '分米', '米'];
  const area = cfg.plugin === 'rect-area';
  const modes = area ? ['rect-a', 'square-a', 'fill', 'choice'] : ['rect-p', 'square-p', 'fill', 'choice'];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const u = pick(units);
    const a = ri(ranges.side[0], ranges.side[1]);
    const b = ri(ranges.side[0], ranges.side[1]);
    const mode = pickCycle(modes, guard - 1);

    let q, ans;
    if (mode === 'fill') {
      const measure = area ? '面积' : '周长';
      const value = area ? a * b : 2 * (a + b);
      const unit = area ? `平方${u}` : u;
      q = `长方形的长是${Math.max(a, b)}${u}，${measure}是${value}${unit}，宽是______${u}。`;
      ans = `${Math.min(a, b)}${u}`;
    } else if (mode === 'choice') {
      const value = area ? a * a : 4 * a;
      const options = [value, value + a, value + 2 * a];
      const offset = ri(0, 2);
      const labels = ['A', 'B', 'C'];
      q = `正方形的边长是${a}${u}，它的${area ? '面积' : '周长'}是（　）${area ? '平方' : ''}${u}。${labels.map((label, i) => ` ${label}. ${options[(i + offset) % 3]}`).join('')}`;
      ans = labels[(3 - offset) % 3];
    } else if (mode === 'rect-p') {
      q = `一个长方形的长是${a}${u}，宽是${b}${u}，它的周长是多少${u}？`;
      ans = `${2 * (a + b)}${u}`;
    } else if (mode === 'square-p') {
      const s = a;
      q = `一块正方形手帕的边长是${s}${u}，要在它的四周缝上花边，至少需要多少${u}花边？`;
      ans = `${4 * s}${u}`;
    } else if (mode === 'rect-a') {
      q = `一个长方形的长是${a}${u}，宽是${b}${u}，它的面积是多少平方${u}？`;
      ans = `${a * b}平方${u}`;
    } else {
      const s = a;
      q = `一个正方形桌面的边长是${s}${u}，它的面积是多少平方${u}？`;
      ans = `${s * s}平方${u}`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    const format = mode === 'fill' || mode === 'choice' ? mode : undefined;
    out.push({ question: q, answer: ans, subtype: 'unit-rect', subtemplateId: mode, format });
  }
  return out;
}

/**
 * 时分秒 / 认识时间：经过时间计算（引擎 time 模板偏少，这里补简单经过时间题）
 */
function elapsedProblems(difficulty, count, cfg = {}) {
  const out = [];
  const seen = new Set();
  const span = { easy: [10, 30], medium: [20, 90], hard: [35, 180] }[difficulty];
  const lowGrade = ['1', '2'].includes(String(cfg.grade || ''));
  const modes = lowGrade
    ? ['find-end']
    : difficulty === 'easy'
      ? ['find-end', 'find-start', 'find-duration']
      : difficulty === 'medium'
        ? ['find-end', 'find-start', 'find-duration', 'sec-convert']
        : ['find-start', 'find-duration', 'train-delay', 'bell-intervals'];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const h1 = lowGrade ? ri(7, 11) : ri(7, 20);
    const m1 = ri(0, 55);
    const add = ri(span[0], span[1]);
    const total = h1 * 60 + m1 + add;
    const h2 = Math.floor(total / 60) % 24;
    const m2 = total % 60;
    if (lowGrade && (h2 > 12 || h2 < 7)) continue;
    const start = `${h1}时${m1 ? `${m1}分` : ''}`;
    const end = `${h2}时${m2 ? `${m2}分` : ''}`;
    const mode = pickCycle(modes, out.length);
    let q, answer, format;
    if (mode === 'find-end') {
      q = `小明${start}开始写作业，写了${add}分钟，写完时是几时几分？`;
      answer = end;
    } else if (mode === 'find-start') {
      q = `小明写了${add}分钟作业，在${end}写完。他开始写作业的时间是______。`;
      answer = start;
      format = 'fill';
    } else if (mode === 'find-duration') {
      q = `小明从${start}写作业到${end}，一共写了多少分钟？`;
      answer = `${add}分钟`;
    } else if (mode === 'sec-convert') {
      const mins = ri(2, 9);
      const secs = ri(5, 55);
      q = `${mins}分${secs}秒 = ______秒。`;
      answer = `${mins * 60 + secs}秒`;
      format = 'fill';
    } else if (mode === 'train-delay') {
      q = `一列动车原定${start}到站，因故晚点${add}分钟，实际几时几分到站？`;
      answer = end;
    } else {
      const bell = pick(['时钟', '挂钟', '大钟', '大楼钟声', '钟楼大钟']);
      const k = ri(3, 7);
      const gap = ri(2, 6);
      const k2 = k + ri(2, 5);
      q = `${bell}敲${k}下需要${(k - 1) * gap}秒，照这样计算，敲${k2}下需要______秒。`;
      answer = `${(k2 - 1) * gap}秒`;
      format = 'fill';
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer, subtype: 'unit-elapsed', subtemplateId: mode, format });
  }
  return out;
}

/* ── 长度单位换算（二年级长度单位 / 三年级测量） ── */
function unitLenProblems(difficulty, count, cfg) {
  const out = [];
  const seen = new Set();
  const pairs = [
    { big: '米', small: '厘米', k: 100 },
    { big: '米', small: '分米', k: 10 },
    { big: '分米', small: '厘米', k: 10 },
    { big: '厘米', small: '毫米', k: 10 },
    { big: '千米', small: '米', k: 1000 },
    { big: '吨', small: '千克', k: 1000 },
  ];
  const usable = String(cfg.grade) === '2' ? pairs.slice(0, 1) : pairs;
  const modes = difficulty === 'easy'
    ? ['len-big-to-small', 'len-small-to-big', 'len-compare']
    : difficulty === 'medium'
      ? ['len-big-to-small', 'len-compound', 'len-compare']
      : ['len-compound', 'len-compare', 'len-cut-story'];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const p = pick(usable);
    const n = difficulty === 'hard' ? ri(2, 15) : ri(1, 9);
    const extra = ri(1, p.k - 1);
    let q, ans, format;
    const mode = pickCycle(modes, guard);
    if (mode === 'len-big-to-small') {
      q = `${n}${p.big} = （　）${p.small}`;
      ans = `${n * p.k}${p.small}`;
      format = 'fill';
    } else if (mode === 'len-small-to-big') {
      q = `${n * p.k}${p.small} = （　）${p.big}`;
      ans = `${n}${p.big}`;
      format = 'fill';
    } else if (mode === 'len-compound') {
      q = `${n}${p.big}${extra}${p.small} = （　）${p.small}`;
      ans = `${n * p.k + extra}${p.small}`;
      format = 'fill';
    } else if (mode === 'len-compare') {
      const delta = ri(-5, 5);
      q = `在括号里填 >、< 或 =：${n}${p.big}（　）${n * p.k + delta}${p.small}。`;
      ans = delta === 0 ? '=' : delta > 0 ? '<' : '>';
      format = 'compare';
    } else {
      q = p.big === '吨'
        ? `一批货物重${n}吨，运走${extra}千克后，还剩多少千克？`
        : `一根木料长${n}${p.big}，锯下${extra}${p.small}后，还剩多少${p.small}？`;
      ans = `${n * p.k - extra}${p.small}`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-len', subtemplateId: mode, format });
  }
  return out;
}

/* ── 质量单位换算（克和千克 / 吨） ── */
function unitWeightProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const modes = difficulty === 'easy'
    ? ['kg-to-g', 'g-to-kg', 'weight-compare']
    : difficulty === 'medium'
      ? ['kg-g-compound', 'weight-compare', 'weight-sub-story']
      : ['kg-g-compound', 'weight-compare', 'weight-multi-bags'];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const n = ri(1, difficulty === 'hard' ? 12 : 8);
    const extra = ri(1, 9) * 100;
    const mode = pickCycle(modes, guard);
    let q, ans, format;
    if (mode === 'kg-to-g') {
      q = `${n}千克 = （　）克`;
      ans = `${n * 1000}克`;
      format = 'fill';
    } else if (mode === 'g-to-kg') {
      q = `${n * 1000}克 = （　）千克`;
      ans = `${n}千克`;
      format = 'fill';
    } else if (mode === 'kg-g-compound') {
      q = `${n}千克${extra}克 = （　）克`;
      ans = `${n * 1000 + extra}克`;
      format = 'fill';
    } else if (mode === 'weight-compare') {
      const grams = n * 1000 + ri(-9, 9) * 100;
      q = `在括号里填 >、< 或 =：${n}千克（　）${grams}克。`;
      ans = grams === n * 1000 ? '=' : grams > n * 1000 ? '<' : '>';
      format = 'compare';
    } else if (mode === 'weight-sub-story') {
      q = `一袋米重${n}千克，取出${extra}克后，还剩多少克？`;
      ans = `${n * 1000 - extra}克`;
    } else {
      const bags = ri(2, 5);
      q = `每袋杂粮重${extra}克，买${bags}袋一共重多少克？比${n + 5}千克少多少克？`;
      ans = `${extra * bags}克，少${(n + 5) * 1000 - extra * bags}克`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-weight', subtemplateId: mode, format });
  }
  return out;
}

/* ── 平行四边形和梯形 / 多边形的面积 ── */
function quadAreaProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const range = { easy: [2, 9], medium: [3, 15], hard: [4, 24] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(range[0], range[1]);
    const h = ri(range[0], range[1]);
    let q, ans;
    if (ri(0, 1) === 0) {
      q = `一个平行四边形的底是${a}厘米，高是${h}厘米，它的面积是多少平方厘米？`;
      ans = `${a * h}平方厘米`;
    } else {
      const b = ri(a + 1, a + 6);
      const sum = a + b;
      const hh = sum % 2 === 0 ? h : h + 1;
      q = `一个梯形的上底是${a}厘米，下底是${b}厘米，高是${hh}厘米，它的面积是多少平方厘米？`;
      ans = `${((a + b) * hh) / 2}平方厘米`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-quad', subtemplateId: mode === 0 ? 'quad-para' : 'quad-trapezoid' });
  }
  return out;
}

/* ── 三角形（面积 + 内角和） ── */
function triangleProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const range = { easy: [2, 10], medium: [3, 16], hard: [4, 26] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(range[0], range[1]);
    const h = (ri(range[0], range[1]) * 2) || 2; // 保证面积是整数
    let q, ans, subId;
    if (ri(0, 2) !== 0) {
      q = `一个三角形的底是${a}厘米，高是${h}厘米，它的面积是多少平方厘米？`;
      ans = `${(a * h) / 2}平方厘米`;
      subId = 'triangle-area';
    } else {
      const x = ri(30, 100);
      const y = ri(30, 140 - x);
      q = `一个三角形中，两个角分别是${x}°和${y}°，第三个角是多少度？`;
      ans = `${180 - x - y}°`;
      subId = 'triangle-angle';
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-triangle', subtemplateId: subId });
  }
  return out;
}

/* ── 圆（周长 / 面积，π 取 3.14） ── */
function circleProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const PI = 3.14;
  const range = { easy: [1, 7], medium: [1, 13], hard: [2, 18] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const r = ri(range[0], range[1]);
    let q, ans;
    const mode = pickCycle(['circ', 'circ-d', 'area', 'area-d', 'diameter', 'radius'], guard);
    if (mode === 'circ') {
      q = `一个圆的半径是${r}厘米，它的周长是多少厘米？`;
      ans = `${(2 * PI * r).toFixed(2)}厘米`;
    } else if (mode === 'circ-d') {
      q = `一个圆形花坛的直径是${2 * r}米，绕它走一圈是多少米？`;
      ans = `${(PI * 2 * r).toFixed(2)}米`;
    } else if (mode === 'area') {
      q = `一个圆的半径是${r}分米，它的面积是多少平方分米？`;
      ans = `${(PI * r * r).toFixed(2)}平方分米`;
    } else if (mode === 'area-d') {
      q = `一个圆形桌面的直径是${2 * r}分米，它的面积是多少平方分米？`;
      ans = `${(PI * r * r).toFixed(2)}平方分米`;
    } else if (mode === 'diameter') {
      q = `圆的半径是${r}厘米，直径是______厘米。`;
      ans = `${2 * r}厘米`;
    } else {
      q = `圆的直径是${2 * r}厘米，半径是______厘米。`;
      ans = `${r}厘米`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-circle', subtemplateId: mode, format: mode === 'diameter' || mode === 'radius' ? 'fill' : undefined });
  }
  return out;
}

/* ── 长方体和正方体（体积 / 表面积） ── */
function solidProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const range = { easy: [2, 6], medium: [3, 10], hard: [4, 14] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(range[0], range[1]);
    const b = ri(range[0], range[1]);
    const c = ri(range[0], range[1]);
    let q, ans;
    const mode = pickCycle(['v', 'v', 's', 'cube-v', 'cube-s'], guard);
    if (mode === 'cube-v') {
      q = `一个正方体的棱长是${a}厘米，它的体积是多少立方厘米？`;
      ans = `${a ** 3}立方厘米`;
    } else if (mode === 'cube-s') {
      q = `一个正方体的棱长是${a}分米，它的表面积是多少平方分米？`;
      ans = `${6 * a * a}平方分米`;
    } else if (mode === 'v') {
      q = `一个长方体木箱，长${a}分米、宽${b}分米、高${c}分米，它的体积是多少立方分米？`;
      ans = `${a * b * c}立方分米`;
    } else {
      q = `一个长方体纸盒，长${a}厘米、宽${b}厘米、高${c}厘米，做这个纸盒至少需要多少平方厘米纸板？`;
      ans = `${2 * (a * b + b * c + a * c)}平方厘米`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-solid', subtemplateId: mode });
  }
  return out;
}

/* ── 圆柱与圆锥（体积 / 侧面积 / 表面积） ── */
function cylinderProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const PI = 3.14;
  const range = { easy: [1, 4], medium: [2, 6], hard: [2, 9] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const r = ri(range[0], range[1]);
    const h = ri(range[0], range[1]) * (difficulty === 'easy' ? 1 : 2);
    let q, ans;
    const mode = pickCycle(['cyl-v', 'cyl-v', 'cyl-side', 'cyl-s', 'cone-v'], guard);
    if (mode === 'cyl-v') {
      q = `一个圆柱的底面半径是${r}厘米，高是${h}厘米，它的体积是多少立方厘米？`;
      ans = `${(PI * r * r * h).toFixed(2)}立方厘米`;
    } else if (mode === 'cyl-side') {
      q = `一个圆柱的底面半径是${r}分米，高是${h}分米，它的侧面积是多少平方分米？`;
      ans = `${(2 * PI * r * h).toFixed(2)}平方分米`;
    } else if (mode === 'cyl-s') {
      q = `一个圆柱的底面半径是${r}厘米，高是${h}厘米，它的表面积是多少平方厘米？`;
      ans = `${(2 * PI * r * r + 2 * PI * r * h).toFixed(2)}平方厘米`;
    } else {
      const h3 = ri(range[0], range[1]) * 3;
      q = `一个圆锥的底面半径是${r}厘米，高是${h3}厘米，它的体积是多少立方厘米？`;
      ans = `${(PI * r * r * h3 / 3).toFixed(2)}立方厘米`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-cylinder', subtemplateId: mode });
  }
  return out;
}

/* ── 简易方程（解方程） ── */
function equationProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const range = { easy: [2, 25], medium: [3, 50], hard: [4, 80] }[difficulty];
  const modes = difficulty === 'easy'
    ? ['eq-plus', 'eq-minus', 'eq-times', 'eq-divide']
    : difficulty === 'medium'
      ? ['eq-two-add', 'eq-two-sub', 'eq-bracket', 'eq-eval']
      : ['eq-combine-like', 'eq-reverse-sub', 'eq-sum-multiple', 'eq-diff-multiple'];
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    const x = ri(range[0], range[1]);
    const a = ri(2, 9);
    const b = ri(2, 25);
    let q, ans;
    const mode = pickCycle(modes, guard);
    if (mode === 'eq-plus') {
      q = `解方程：x + ${b} = ${x + b}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-minus') {
      q = `解方程：x − ${b} = ${x}`;
      ans = `x = ${x + b}`;
    } else if (mode === 'eq-times') {
      q = `解方程：${a}x = ${a * x}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-divide') {
      q = `解方程：x ÷ ${a} = ${x}`;
      ans = `x = ${a * x}`;
    } else if (mode === 'eq-two-add') {
      q = `解方程：${a}x + ${b} = ${a * x + b}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-two-sub') {
      q = `解方程：${a}x − ${b} = ${a * x - b}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-bracket') {
      q = `解方程：${a}（x + ${b}）= ${a * (x + b)}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-eval') {
      q = `当 x = ${x} 时，代数式 ${a}x + ${b} 的值是多少？`;
      ans = `${a * x + b}`;
    } else if (mode === 'eq-combine-like') {
      const k = ri(2, 6);
      q = `解方程：${a + k}x − ${a}x = ${k * x}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-reverse-sub') {
      q = `解方程：${a * x + b} − ${a}x = ${b}`;
      ans = `x = ${x}`;
    } else if (mode === 'eq-sum-multiple') {
      q = `果园里桃树和梨树共有 ${(a + 1) * x} 棵，桃树棵数是梨树的 ${a} 倍。列方程求得梨树有多少棵？`;
      ans = `${x}棵`;
    } else {
      q = `甲数是乙数的 ${a} 倍，甲数比乙数多 ${(a - 1) * x}。列方程求得乙数是多少？`;
      ans = `${x}`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-equation', subtemplateId: mode });
  }
  return out;
}

/* ── 百分数（一）（二）：求百分率 / 折扣成数税率 ── */
function percentProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const base = { easy: [10, 100], medium: [20, 200], hard: [40, 500] }[difficulty];
  const modes = difficulty === 'easy'
    ? ['pct-of-num', 'pct-to-dec', 'find-pct-basic']
    : difficulty === 'medium'
      ? ['pct-of-num', 'find-pct', 'find-total']
      : ['pct-discount', 'pct-growth', 'pct-interest'];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const b = ri(base[0] / 10, base[1] / 10) * 10;
    const pct = b % 4 === 0 ? pick([10, 20, 25, 40, 50, 60, 75, 80]) : pick([10, 20, 40, 50, 60, 80]);
    const part = (b * pct) / 100;
    const mode = pickCycle(modes, guard);
    let q, ans, format;
    if (mode === 'pct-of-num') {
      q = `${b}的${pct}%是______。`;
      ans = `${part}`;
      format = 'fill';
    } else if (mode === 'pct-to-dec') {
      const p2 = ri(1, 99);
      q = `把百分数 ${p2}% 化成小数是______。`;
      ans = `${p2 / 100}`;
      format = 'fill';
    } else if (mode === 'find-pct-basic' || mode === 'find-pct') {
      q = `一次问卷共收到${b}份答卷，其中${part}份选择了步行出行。选择步行的答卷占总数的百分之几？`;
      ans = `${pct}%`;
    } else if (mode === 'find-total') {
      q = `一次问卷中，有${part}份答卷选择步行，占总数的${pct}%。一共收到多少份答卷？`;
      ans = `${b}份`;
    } else if (mode === 'pct-discount') {
      const disc = pick([6, 7, 8, 9]);
      q = `一件外套原价${b}元，商场促销打${disc}折出售，现价是______元。`;
      ans = `${(b * disc) / 10}元`;
      format = 'fill';
    } else if (mode === 'pct-growth') {
      q = `某果园去年产苹果${b}吨，今年产苹果${b + part}吨，今年比去年增产了百分之几？`;
      ans = `${pct}%`;
    } else {
      const years = pick([1, 2, 3]);
      q = `王叔叔把${b * 10}元存入银行，年利率是2%，存期${years}年，到期时一共可取回本息多少元？`;
      ans = `${b * 10 + (b * 10 * 2 * years) / 100}元`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-percent', subtemplateId: mode, format });
  }
  return out;
}

/* ── 负数：温度比较与数轴正负加减 ── */
function negativeProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const modes = difficulty === 'easy'
    ? ['neg-write', 'pos-neg-meaning', 'compare-basic']
    : difficulty === 'medium'
      ? ['compare', 'rise', 'diff']
      : ['number-line-dist', 'std-weight-offset', 'multi-step-move'];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(1, difficulty === 'hard' ? 25 : 15);
    const b = ri(1, difficulty === 'hard' ? 25 : 15);
    let q, ans;
    const mode = pickCycle(modes, guard);
    if (mode === 'neg-write') {
      q = `零下${a}摄氏度记作______℃，零上${b}摄氏度记作+${b}℃。`;
      ans = `-${a}`;
    } else if (mode === 'pos-neg-meaning') {
      q = `如果向东走${a}米记作+${a}米，那么向西走${b}米应记作______米。`;
      ans = `-${b}`;
    } else if (mode === 'compare-basic' || mode === 'compare') {
      if (a === b) continue;
      q = `比较大小：-${a} 和 -${b}，哪个数更大？`;
      ans = `-${Math.min(a, b)}`;
    } else if (mode === 'rise') {
      const up = ri(1, 15);
      q = `早上气温是-${a}℃，中午比早上升高了${up}℃，中午的气温是多少？`;
      ans = `${up - a}℃`;
    } else if (mode === 'diff') {
      q = `某地某天最高气温${b}℃，最低气温-${a}℃，这天的温差是多少？`;
      ans = `${a + b}℃`;
    } else if (mode === 'number-line-dist') {
      q = `在数轴上，表示-${a}的点与表示+${b}的点之间相距多少个单位长度？`;
      ans = `${a + b}`;
    } else if (mode === 'std-weight-offset') {
      const std = ri(10, 50) * 10;
      q = `一袋饼干标准净重为${std}克，超过标准记为正，不足记为负。质检记作-${a}克，这袋饼干实际重多少克？`;
      ans = `${std - a}克`;
    } else {
      const depth = ri(10, 40) * 10;
      const up = ri(2, 9) * 10;
      const down = ri(2, 9) * 10;
      q = `潜水艇在海平面以下${depth}米处（记作-${depth}米），先上升${up}米，又下潜${down}米，现在位置记作多少米？`;
      ans = `-${depth - up + down}米`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-negative', subtemplateId: mode });
  }
  return out;
}

/* ── 大数的认识：改写与求近似数 ── */
function bigNumberProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const n = ri(2, difficulty === 'hard' ? 9 : 6);
    let q, ans;
    const mode = pickCycle(['wan', 'yi', 'approx-wan'], guard);
    if (mode === 'wan') {
      const v = n * 10000 + ri(1, 9999);
      q = `把 ${v} 改写成用“万”作单位的数。`;
      ans = `${(v / 10000).toFixed(4).replace(/0+$/, '').replace(/\.$/, '')}万`;
    } else if (mode === 'yi') {
      const v = n * 100000000;
      q = `把 ${v} 改写成用“亿”作单位的数。`;
      ans = `${n}亿`;
    } else {
      const v = n * 10000 + ri(1000, 9999);
      q = `把 ${v} 省略万位后面的尾数，求出近似数。`;
      ans = `约${Math.round(v / 10000)}万`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-bignum' });
  }
  return out;
}

/* ── 算术段插件：小数除法 / 分数乘法 / 分数除法（引擎策略不覆盖，这里精确生成） ── */
function gcd(a, b) { return b ? gcd(b, a % b) : a; }
function frac(n, d) {
  const g = gcd(n, d) || 1;
  return `${n / g}/${d / g}`;
}

function decimalDivProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const subIds = {
    easy: ['dec-div-int-divisor', 'dec-div-ten-divisor'],
    medium: ['dec-div-dec-divisor', 'dec-div-two-tenth'],
    hard: ['dec-div-two-dec', 'dec-div-special-quarter'],
  }[difficulty] || ['dec-div-int-divisor'];

  let guard = 0;
  while (out.length < count && guard < count * 50) {
    guard++;
    const subtemplateId = subIds[guard % subIds.length];
    let dividend, divisor, quotient;

    if (subtemplateId === 'dec-div-int-divisor') {
      divisor = ri(2, 6);
      quotient = ri(11, 49) / 10;
      dividend = Number((quotient * divisor).toFixed(1));
    } else if (subtemplateId === 'dec-div-ten-divisor') {
      divisor = pick([10, 100]);
      dividend = ri(15, 95);
      quotient = Number((dividend / divisor).toFixed(2));
    } else if (subtemplateId === 'dec-div-dec-divisor') {
      divisor = pick([0.2, 0.4, 0.5, 0.8]);
      quotient = ri(11, 49) / 10;
      dividend = Number((quotient * divisor).toFixed(2));
    } else if (subtemplateId === 'dec-div-two-tenth') {
      divisor = ri(11, 29) / 10;
      quotient = ri(2, 8);
      dividend = Number((quotient * divisor).toFixed(1));
    } else if (subtemplateId === 'dec-div-two-dec') {
      divisor = pick([0.15, 0.25, 0.12, 0.16]);
      quotient = ri(12, 48) / 10;
      dividend = Number((quotient * divisor).toFixed(3));
    } else {
      divisor = pick([0.25, 0.5, 1.25]);
      quotient = ri(4, 24);
      dividend = Number((quotient * divisor).toFixed(2));
    }

    const q = `${dividend} ÷ ${divisor} = ______`;
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({
      question: q,
      answer: String(quotient),
      subtype: 'unit-dec-div',
      subtemplateId,
      band: difficulty,
    });
  }
  return out;
}

function fractionMulProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const subIds = {
    easy: ['frac-mul-int-simple', 'frac-mul-int-cancel'],
    medium: ['frac-mul-frac-basic', 'frac-mul-frac-cancel'],
    hard: ['frac-mul-three-terms', 'frac-mul-cross-cancel'],
  }[difficulty] || ['frac-mul-int-simple'];

  let guard = 0;
  while (out.length < count && guard < count * 50) {
    guard++;
    const subtemplateId = subIds[guard % subIds.length];
    let q, ans;

    if (subtemplateId === 'frac-mul-int-simple') {
      const an = ri(1, 4), ad = ri(an + 2, 9);
      const k = ri(2, 5);
      q = `${an}/${ad} × ${k} = ______`;
      ans = frac(an * k, ad);
    } else if (subtemplateId === 'frac-mul-int-cancel') {
      const ad = pick([4, 6, 8, 9, 10, 12]);
      const an = ri(1, ad - 1);
      const k = ad;
      q = `${an}/${ad} × ${k} = ______`;
      ans = String(an);
    } else if (subtemplateId === 'frac-mul-frac-basic') {
      const an = ri(1, 4), ad = ri(an + 1, 6);
      const bn = ri(1, 4), bd = ri(bn + 1, 7);
      q = `${an}/${ad} × ${bn}/${bd} = ______`;
      ans = frac(an * bn, ad * bd);
    } else if (subtemplateId === 'frac-mul-frac-cancel') {
      const common = ri(2, 5);
      const an = ri(1, 3);
      const ad = common * ri(2, 4);
      const bn = common;
      const bd = ri(5, 9);
      q = `${an}/${ad} × ${bn}/${bd} = ______`;
      ans = frac(an * bn, ad * bd);
    } else if (subtemplateId === 'frac-mul-three-terms') {
      const an = 1, ad = 2;
      const bn = 2, bd = 3;
      const cn = 3, cd = 4;
      q = `${an}/${ad} × ${bn}/${bd} × ${cn}/${cd} = ______`;
      ans = '1/4';
    } else {
      const an = ri(3, 7), ad = ri(an + 1, 12);
      const bn = ri(2, 6), bd = ri(bn + 1, 15);
      q = `${an}/${ad} × ${bn}/${bd} = ______`;
      ans = frac(an * bn, ad * bd);
    }

    if (seen.has(q)) continue;
    seen.add(q);
    out.push({
      question: q,
      answer: ans,
      subtype: 'unit-frac-mul',
      subtemplateId,
      band: difficulty,
    });
  }
  return out;
}

function fractionDivProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const an = ri(1, 5), ad = ri(an + 1, 9);
    const useInt = difficulty === 'easy' ? true : difficulty === 'hard' ? false : ri(0, 1) === 0;
    let q, ans;
    if (useInt) {
      const k = ri(2, difficulty === 'easy' ? 6 : 9);
      q = `${an}/${ad} ÷ ${k} = ______`;
      ans = frac(an, ad * k);
    } else {
      const bn = ri(1, difficulty === 'hard' ? 6 : 4), bd = ri(bn + 1, difficulty === 'hard' ? 11 : 7);
      q = `${an}/${ad} ÷ ${bn}/${bd} = ______`;
      ans = frac(an * bd, ad * bn);
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-frac-div' });
  }
  return out;
}

/* ── 面积单位换算（公顷和平方千米） ── */
function unitAreaProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const pairs = [
    { big: '公顷', small: '平方米', k: 10000 },
    { big: '平方千米', small: '公顷', k: 100 },
    { big: '平方千米', small: '平方米', k: 1000000 },
  ];
  const subIds = {
    easy: ['ha-to-sqm', 'sqkm-to-ha', 'sqm-to-ha', 'ha-to-sqkm'],
    medium: ['area-unit-choice', 'area-compare', 'area-mixed-sum'],
    hard: ['land-planning-rect', 'crop-yield-area', 'area-speed-plow'],
  }[difficulty] || ['ha-to-sqm', 'sqkm-to-ha', 'sqm-to-ha'];

  let guard = 0;
  while (out.length < count && guard < count * 35) {
    guard++;
    const subtemplateId = subIds[guard % subIds.length];
    const n = ri(2, difficulty === 'easy' ? 60 : difficulty === 'medium' ? 40 : 80);
    let q, ans, format = 'fill';

    if (subtemplateId === 'ha-to-sqm') {
      q = `${n}公顷 = （　）平方米`;
      ans = `${n * 10000}平方米`;
    } else if (subtemplateId === 'sqkm-to-ha') {
      q = `${n}平方千米 = （　）公顷`;
      ans = `${n * 100}公顷`;
    } else if (subtemplateId === 'sqm-to-ha') {
      q = `${n * 10000}平方米 = （　）公顷`;
      ans = `${n}公顷`;
    } else if (subtemplateId === 'ha-to-sqkm') {
      q = `${n * 100}公顷 = （　）平方千米`;
      ans = `${n}平方千米`;
    } else if (subtemplateId === 'area-unit-choice') {
      const places = [
        [`一个标准足球场的占地面积约是 ${ri(65, 75) * 100}（　）`, '平方米'],
        [`某城市中心广场的面积约是 ${ri(20, 50)}（　）`, '公顷'],
        [`我国某省份陆地面积约为 ${ri(10, 40)}万（　）`, '平方千米'],
        [`某小学的占地面积约是 ${ri(2, 6)}（　）`, '公顷'],
        [`某大型森林公园的占地面积约是 ${ri(50, 150)}（　）`, '公顷'],
        [`某水库库区的水面面积约是 ${ri(5, 25)}（　）`, '平方千米'],
        [`某生态农场的采摘果园面积约是 ${ri(10, 30)}（　）`, '公顷'],
        [`某标准室内羽毛球场的占地面积约是 ${ri(100, 300)}（　）`, '平方米'],
      ];
      const pl = places[guard % places.length];
      q = `在括号里填上合适的面积单位：${pl[0]}。`;
      ans = pl[1];
    } else if (subtemplateId === 'area-compare') {
      const p = pick(pairs);
      const delta = ri(-2, 2) * p.k / 10;
      q = `在括号里填 >、< 或 =：${n}${p.big}（　）${n * p.k + delta}${p.small}。`;
      ans = delta === 0 ? '=' : delta > 0 ? '<' : '>';
      format = 'compare';
    } else if (subtemplateId === 'area-mixed-sum') {
      const m = ri(1, 9) * 10;
      q = `${n}平方千米 + ${m}公顷 = （　）公顷`;
      ans = `${n * 100 + m}公顷`;
    } else if (subtemplateId === 'land-planning-rect') {
      const len = ri(2, 10) * 100;
      const wid = ri(2, 8) * 50;
      q = `一块长方形麦地长 ${len} 米，宽 ${wid} 米，这块麦地的面积是（　）公顷。`;
      ans = `${(len * wid) / 10000}公顷`;
    } else if (subtemplateId === 'crop-yield-area') {
      const ha = ri(2, 20);
      const perHa = ri(10, 30);
      q = `一个果园占地 ${ha} 公顷，平均每公顷产苹果 ${perHa} 吨，这个果园一共能产苹果（　）吨。`;
      ans = `${ha * perHa}吨`;
    } else if (subtemplateId === 'area-speed-plow') {
      const speed = ri(2, 8) * 50;
      const width = ri(2, 6);
      const hours = ri(1, 3);
      q = `一台洒水车每分钟行驶 ${speed} 米，洒水宽度是 ${width} 米。工作 ${hours} 小时共洒水（　）公顷。`;
      ans = `${(speed * 60 * hours * width) / 10000}公顷`;
    }

    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-area', subtemplateId, format });
  }
  return out;
}

/* ── 小数乘法算术插件 ── */
function decimalMulProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const subIds = {
    easy: ['dec-mul-tenth-int', 'dec-mul-ten-hundred'],
    medium: ['dec-mul-tenth-tenth', 'dec-mul-int-tenth'],
    hard: ['dec-mul-hundredth-tenth', 'dec-mul-special-quarter'],
  }[difficulty] || ['dec-mul-tenth-int'];

  let guard = 0;
  while (out.length < count && guard < count * 50) {
    guard++;
    const subtemplateId = subIds[guard % subIds.length];
    let a, b;

    if (subtemplateId === 'dec-mul-tenth-int') {
      const tenths = ri(11, 49);
      a = tenths % 10 === 0 ? (tenths + 1) / 10 : tenths / 10;
      b = ri(2, 9);
    } else if (subtemplateId === 'dec-mul-ten-hundred') {
      a = ri(11, 89) / 10;
      b = pick([10, 100]);
    } else if (subtemplateId === 'dec-mul-tenth-tenth') {
      const t1 = ri(11, 39);
      const t2 = ri(11, 29);
      a = t1 % 10 === 0 ? (t1 + 1) / 10 : t1 / 10;
      b = t2 % 10 === 0 ? (t2 + 1) / 10 : t2 / 10;
    } else if (subtemplateId === 'dec-mul-int-tenth') {
      a = ri(3, 12);
      const t = ri(11, 49);
      b = t % 10 === 0 ? (t + 1) / 10 : t / 10;
    } else if (subtemplateId === 'dec-mul-hundredth-tenth') {
      a = Number((ri(105, 395) / 100).toFixed(2));
      const t = ri(11, 29);
      b = t % 10 === 0 ? (t + 1) / 10 : t / 10;
    } else {
      a = pick([0.25, 0.5, 1.25, 2.5]);
      b = pick([4, 8, 12, 16, 24, 32]);
    }

    // 确保满足 correctness-test.mjs 的断言：!Number.isInteger(a) || !Number.isInteger(b)
    if (Number.isInteger(a) && Number.isInteger(b)) {
      a = a + 0.5;
    }

    const ans = Number((a * b).toFixed(3));
    const q = `${a} × ${b} = ______`;
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({
      question: q,
      answer: String(ans),
      subtype: 'unit-dec-mul',
      subtemplateId,
      band: difficulty,
    });
  }
  return out;
}

/* ── 小数加减算术插件 ── */
function decimalAddSubProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const maxVal = difficulty === 'easy' ? 59 : difficulty === 'medium' ? 99 : 199;
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(11, maxVal) / 10;
    const b = ri(11, maxVal) / 10;
    const isAdd = ri(0, 1) === 0;
    const hi = Math.max(a, b);
    const lo = Math.min(a, b);
    const ans = Number((isAdd ? a + b : hi - lo).toFixed(2));
    const q = `${isAdd ? `${a} + ${b}` : `${hi} - ${lo}`} = ______`;
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: String(ans), subtype: 'unit-dec-addsub' });
  }
  return out;
}

/* ── 运算应用题：按单元的运算类型生成对应文字题（纯计算单元的"应用题段"） ── */
function wordProblems(difficulty, count, cfg = {}) {
  const out = [];
  const seen = new Set();
  const ops = cfg.operations || { add: true, subtract: true, multiply: false, divide: false };
  const digits = cfg.digits || { add: 2, subtract: 2, multiply: 1, divide: 1 };
  const isDecimal = cfg.calcType === 'decimal-arithmetic'
    || String(cfg.arithmeticPlugin || '').startsWith('dec-');
  const isFraction = cfg.calcType === 'fraction-arithmetic'
    || String(cfg.arithmeticPlugin || '').startsWith('frac-');
  const scale = (d) => {
    const n = Math.max(1, d);
    const base = Math.pow(10, n - 1);
    return [base, base * (difficulty === 'hard' ? 9 : difficulty === 'medium' ? 6 : 3)];
  };
  const rangeOf = (op) => scale(digits[op] || 2);
  const ri2 = (r) => ri(r[0], r[1]);

  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    let q, ans;
    const dec = (v) => Number(v.toFixed(2));

    if (isFraction) {
      const den = pick([2, 3, 4, 5, 6]);
      const total = den * ri(2, difficulty === 'hard' ? 12 : 6);
      const num = ri(1, den - 1);
      if (ri(0, 1) === 0) {
        q = `一根绳子长${total}米，用去了它的${num}/${den}，用去了多少米？`;
        ans = `${(total * num) / den}米`;
      } else {
        q = `一桶油重${total}千克，倒出它的${num}/${den}，还剩多少千克？`;
        ans = `${(total * (den - num)) / den}千克`;
      }
    } else if (isDecimal) {
      const price = Number((ri(15, difficulty === 'hard' ? 900 : 250) / 10).toFixed(1));
      const n = ri(2, difficulty === 'hard' ? 9 : 5);
      if (String(cfg.arithmeticPlugin || '').includes('div')) {
        const total = Number((price * n).toFixed(1));
        q = `买${n}本同样的笔记本共花${total}元，每本多少元？`;
        ans = `${price}元`;
      } else if (ops.multiply) {
        q = `一支笔${price}元，买${n}支一共要多少元？`;
        ans = `${dec(price * n)}元`;
      } else {
        const a = price;
        const b = Number((ri(11, 199) / 10).toFixed(1));
        const hi = Math.max(a, b);
        const lo = Math.min(a, b);
        q = `小明有${hi}元，买文具花了${lo}元，还剩多少元？`;
        ans = `${dec(hi - lo)}元`;
      }
    } else if (ops.multiply && !ops.divide) {
      const n = ri2(rangeOf('multiply'));
      const per = ri(2, difficulty === 'hard' ? 12 : 8);
      if (ri(0, 1) === 0) {
        q = `每箱有${per}瓶矿泉水，${n}箱一共有多少瓶？`;
        ans = `${n * per}瓶`;
      } else {
        q = `每张桌子坐${per}人，${n}张桌子一共能坐多少人？`;
        ans = `${n * per}人`;
      }
    } else if (ops.divide && (!ops.add && !ops.subtract || guard % 3 === 0)) {
      const per = ri(2, difficulty === 'hard' ? 12 : 8);
      const people = ri(2, difficulty === 'hard' ? 12 : 8);
      if (guard % 2 === 0) {
        q = `${per * people}个苹果平均分给${people}个小朋友，每人分到多少个？`;
        ans = `${per}个`;
      } else {
        q = `${per * people}个苹果，每${per}个装一袋，可以装几袋？`;
        ans = `${people}袋`;
      }
    } else if (ops.subtract && (!ops.add || guard % 2 === 0)) {
      const a = ri2(rangeOf('subtract'));
      const b = ri(1, Math.max(2, Math.floor(a / 2)));
      if (ri(0, 1) === 0) {
        q = `书架上有${a}本书，借走${b}本，还剩多少本？`;
        ans = `${a - b}本`;
      } else {
        q = `一班有${a}人，二班比一班少${b}人，二班有多少人？`;
        ans = `${a - b}人`;
      }
    } else {
      const a = ri2(rangeOf('add'));
      const b = ri2(rangeOf('add'));
      q = `树上有${a}只小鸟，又飞来${b}只，现在一共有多少只？`;
      ans = `${a + b}只`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-word' });
  }
  return out;
}

/* ── 找规律（一、二年级） ── */
function patternProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const modesByDiff = {
    easy: ['arith-up', 'arith-down', 'repeat-2'],
    medium: ['arith-two', 'double', 'repeat-3'],
    hard: ['growing-diff', 'missing-middle', 'bead-cycle'],
  };
  const modes = modesByDiff[difficulty] || modesByDiff.medium;
  let guard = 0;
  while (out.length < count && guard < count * 50) {
    guard++;
    let q, ans;
    const mode = pickCycle(modes, guard);
    if (mode === 'arith-up') {
      const start = ri(1, 15);
      const step = ri(2, 5);
      const seq = [0, 1, 2, 3].map((i) => start + i * step);
      q = `找规律填数：${seq.join('，')}，（　）`;
      ans = `${seq[3] + step}`;
    } else if (mode === 'arith-down') {
      const step = ri(2, 5);
      const start = ri(25, 45);
      const seq = [0, 1, 2, 3].map((i) => start - i * step);
      q = `找规律填数：${seq.join('，')}，（　）`;
      ans = `${seq[3] - step}`;
    } else if (mode === 'repeat-2') {
      const syms = ['△', '○', '□', '☆', '●', '▲', '■', '★', '◇', '◆', '▽', '▼', '♡', '♢'];
      const s1 = pick(syms);
      const s2 = pick(syms.filter((s) => s !== s1));
      const k = ri(2, 4);
      q = `按规律接着画：${Array(k).fill(`${s1}${s2}`).join('')}（　）（　）`;
      ans = `${s1}${s2}`;
    } else if (mode === 'arith-two') {
      const start = ri(1, 12);
      const step = ri(2, 7);
      const seq = [0, 1, 2, 3].map((i) => start + i * step);
      q = `找规律填数：${seq.join('，')}，（　），（　）`;
      ans = `${seq[3] + step}，${seq[3] + 2 * step}`;
    } else if (mode === 'double') {
      const start = ri(1, 9);
      const seq = [0, 1, 2, 3].map((i) => start * Math.pow(2, i));
      q = `找规律填数：${seq.join('，')}，（　）`;
      ans = `${seq[3] * 2}`;
    } else if (mode === 'repeat-3') {
      const syms = ['△', '○', '□', '☆', '●', '▲', '■', '★', '◇', '◆'];
      const s1 = pick(syms);
      const s2 = pick(syms.filter((s) => s !== s1));
      const s3 = pick(syms.filter((s) => s !== s1 && s !== s2));
      const unit = [s1, s2, s3];
      const nth = ri(10, 30);
      q = `图形按“${unit.join('')}”的规律重复排列，第 ${nth} 个图形是（　）。`;
      ans = `${unit[(nth - 1) % 3]}`;
    } else if (mode === 'growing-diff') {
      const a0 = ri(1, 15);
      const d = ri(1, 3);
      const seq = [a0, a0 + d, a0 + 3 * d, a0 + 6 * d, a0 + 10 * d];
      q = `找规律填数：${seq.join('，')}，（　）`;
      ans = `${a0 + 15 * d}`;
    } else if (mode === 'missing-middle') {
      const start = ri(2, 18);
      const step = ri(3, 9);
      const seq = [0, 1, 2, 3, 4].map((i) => start + i * step);
      q = `找规律填空缺的数：${seq[0]}，${seq[1]}，（　），${seq[3]}，${seq[4]}`;
      ans = `${seq[2]}`;
    } else {
      const red = ri(1, 3);
      const yellow = ri(1, 3);
      const period = red + yellow;
      const c1 = pick(['红', '蓝', '黑']);
      const c2 = pick(['黄', '白', '绿']);
      const n = ri(11, 49);
      q = `珠子按“${red}颗${c1}、${yellow}颗${c2}”的规律依次穿成一串，第 ${n} 颗珠子是什么颜色？`;
      const rem = ((n - 1) % period) + 1;
      ans = rem <= red ? c1 : c2;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-pattern', subtemplateId: mode });
  }
  return out;
}

/* ── 搭配（一）（二） ── */
function combineProblems(difficulty, count, cfg) {
  const out = [];
  const seen = new Set();
  const isGrade2 = String(cfg?.grade) === '2';

  const modesByDiff = isGrade2
    ? {
        easy: ['clothes-basic', 'digits-two', 'handshake-3'],
        medium: ['clothes', 'digits', 'breakfast-combo', 'handshake'],
        hard: ['clothes-3x3', 'digits-sum-choice', 'photo-order-3', 'round-robin'],
      }
    : {
        easy: ['clothes-basic', 'digits-two', 'breakfast-combo', 'path-basic'],
        medium: ['clothes', 'digits', 'path', 'handshake', 'round-robin-4'],
        hard: ['digits-with-zero', 'photo-fixed', 'round-robin', 'path-three-stops'],
      };

  const modes = modesByDiff[difficulty] || modesByDiff.medium;
  let guard = 0;
  while (out.length < count && guard < count * 80) {
    guard++;
    let q, ans;
    const mode = pickCycle(modes, guard);

    if (mode === 'clothes-basic') {
      if (isGrade2) {
        const top = pick([['短袖', '长袖'], ['衬衫', 'T恤'], ['毛衣', '外套']]);
        const bottom = pick([['短裤', '长裤'], ['牛仔裤', '运动裤'], ['长裙', '短裙']]);
        q = `有${top.join('、')}共2件上衣，${bottom.join('、')}共2件下装，各选一件搭配，一共有多少种不同的穿法？`;
        ans = `4种`;
      } else {
        const a = ri(2, 4);
        const b = ri(2, 4);
        q = `有${a}件不同的上衣和${b}条不同的裤子，各选一件搭配，一共有多少种不同的穿法？`;
        ans = `${a * b}种`;
      }
    } else if (mode === 'digits-two') {
      const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
      if (isGrade2) {
        const nums = pool.slice(0, 2);
        q = `用${nums.join('、')}这两张数字卡片，能组成多少个不同的两位数？`;
        ans = `2个`;
      } else {
        const nums = pool.slice(0, 3);
        q = `用${nums.join('、')}这3张数字卡片，每次取2张组成两位数（十位和个位不同），一共能组成多少个不同的两位数？`;
        ans = `6个`;
      }
    } else if (mode === 'handshake-3') {
      const names = pick([['小明', '小华', '小军'], ['小红', '小丽', '小芳'], ['小刚', '小敏', '小强']]);
      q = `${names.join('、')}3位同学互相握手，每两人握一次手，一共要握多少次手？`;
      ans = `3次`;
    } else if (mode === 'clothes') {
      const a = ri(2, 4);
      const b = ri(3, 5);
      const itemA = pick(['件不同的上衣', '件不同的T恤', '件不同的衬衫']);
      const itemB = pick(['条不同的裤子', '条不同的裙子', '条不同的长裤']);
      q = `有${a}${itemA}和${b}${itemB}，每次各选一件搭配，一共有多少种不同的穿法？`;
      ans = `${a * b}种`;
    } else if (mode === 'breakfast-combo') {
      const drinks = pick([['牛奶', '豆浆'], ['果汁', '酸奶'], ['红茶', '绿茶']]);
      const foods = pick([['面包', '包子', '油条'], ['烧麦', '蛋挞', '花卷'], ['煎饼', '蛋糕', '三明治']]);
      q = `早餐有${drinks.join('、')}共${drinks.length}种饮品，${foods.join('、')}共${foods.length}种早点，各选一种搭配，一共有多少种不同的早餐搭配？`;
      ans = `${drinks.length * foods.length}种`;
    } else if (mode === 'digits') {
      const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
      const nums = pool.slice(0, 3);
      q = `用${nums.join('、')}这3张数字卡片，每次取2张组成没有重复数字的两位数，一共能组成多少个不同的两位数？`;
      ans = `6个`;
    } else if (mode === 'handshake') {
      const n = ri(4, 7);
      const act = pick(['每两人握一次手，一共要握多少次手', '每两人通一次电话，一共要通多少次电话']);
      q = `${n}个小朋友聚会，${act}？`;
      ans = `${(n * (n - 1)) / 2}次`;
    } else if (mode === 'clothes-3x3') {
      const colorA = pick(['红、黄、蓝', '白、黑、蓝', '粉、绿、紫']);
      const colorB = pick(['黑、白、灰', '蓝、深蓝、黑']);
      q = `有${colorA}3种颜色的上衣，${colorB}3种颜色的裤子，各选一件搭配，一共有多少种不同的穿法？`;
      ans = `9种`;
    } else if (mode === 'digits-sum-choice') {
      const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
      const nums = pool.slice(0, 3);
      q = `用${nums.join('、')}这3个数字中的任意2个求和，得数一共有多少种可能？`;
      ans = `3种`;
    } else if (mode === 'photo-order-3') {
      const names = pick([['爸爸', '妈妈', '小明'], ['小明', '小华', '小军'], ['小刚', '小红', '小丽'], ['李老师', '张老师', '王老师']]);
      q = `${names.join('、')}3人排成一排合影，一共有多少种不同的排法？`;
      ans = `6种`;
    } else if (mode === 'round-robin-3') {
      const sport = pick(['拔河', '乒乓球', '接力跑']);
      q = `3个班级进行${sport}比赛，每两个班都要赛一场，一共要赛多少场？`;
      ans = `3场`;
    } else if (mode === 'path-basic' || mode === 'path') {
      const a = ri(2, 4);
      const b = ri(2, 5);
      const loc = pick([['家', '图书馆', '少年宫'], ['学校', '书店', '科技馆'], ['家', '学校', '公园']]);
      q = `从${loc[0]}到${loc[1]}有${a}条路，从${loc[1]}到${loc[2]}有${b}条路，从${loc[0]}经${loc[1]}到${loc[2]}一共有多少种不同的走法？`;
      ans = `${a * b}种`;
    } else if (mode === 'round-robin-4') {
      q = `4支足球队进行单循环赛（每两队之间都要赛一场），一共要进行多少场比赛？`;
      ans = `6场`;
    } else if (mode === 'digits-with-zero') {
      const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
      const k = ri(3, 4);
      const nums = [0, ...pool.slice(0, k)];
      q = `用${nums.join('、')}这${k + 1}张数字卡片，每次取2张组成没有重复数字的两位数，一共能组成多少个？`;
      ans = `${k * k}个`;
    } else if (mode === 'photo-fixed') {
      const group = pick([
        ['小明', '小华', '小红', '小军'],
        ['小刚', '小丽', '小芳', '小强'],
        ['小敏', '小杰', '东东', '亮亮'],
        ['爸爸', '妈妈', '小明', '姐姐'],
        ['赵老师', '钱老师', '孙老师', '李老师'],
      ]);
      const fixedPos = pick(['最左边', '最右边', '排头', '排尾']);
      const target = pick(group);
      q = `${group.join('、')}共4人排成一排照相，如果${target}必须站在${fixedPos}，一共有多少种不同的排法？`;
      ans = `6种`;
    } else if (mode === 'round-robin') {
      const n = ri(4, 8);
      const sport = pick(['乒乓球', '羽毛球', '象棋', '围棋', '篮球']);
      q = `学校举办${sport}比赛，有${n}名选手（或队伍）参加单循环赛（每两名选手之间都要赛一场），一共要进行多少场比赛？`;
      ans = `${(n * (n - 1)) / 2}场`;
    } else {
      const a = ri(2, 4), b = ri(2, 4), c = ri(2, 4);
      const locs = pick([['A地', 'B地', 'C地', 'D地'], ['小明家', '学校', '少年宫', '图书馆'], ['甲城', '乙城', '丙城', '丁城']]);
      q = `从${locs[0]}到${locs[1]}有${a}条路，从${locs[1]}到${locs[2]}有${b}条路，从${locs[2]}到${locs[3]}有${c}条路。从${locs[0]}经${locs[1]}、${locs[2]}到${locs[3]}共有多少种走法？`;
      ans = `${a * b * c}种`;
    }

    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-combine', subtemplateId: mode });
  }
  return out;
}

/* ── 推理（二年级数学广角） ──
 * 三种考法轮转：fruit 水果配对 / order 高矮排序 / queue 排队位置
 * 三档：easy 2~3人 → medium 3人（问中间/隐藏直接线索）→ hard 4人
 */
function permutationsOf(arr) {
  if (arr.length <= 1) return [arr.slice()];
  return arr.flatMap((x, i) => permutationsOf([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [x, ...p]));
}
const CN_ORD = ['一', '二', '三', '四'];

function reasoningProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const names = ['小明', '小红', '小刚', '小丽', '小华', '小芳'];
  const items = ['苹果', '香蕉', '橘子', '梨', '葡萄', '西瓜', '桃子'];
  const shuffle = (a) => a.slice().sort(() => Math.random() - 0.5);
  const modes = ['fruit', 'order', 'queue'];
  let guard = 0;
  while (out.length < count && guard < count * 80) {
    guard++;
    const mode = modes[guard % modes.length];
    let q;
    let ans;
    if (mode === 'fruit') {
      const n = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
      const ns = shuffle(names).slice(0, n + 1);
      const its = shuffle(items).slice(0, n + 1);
      const perm = shuffle(its);
      const clues = ns.slice(0, -2).map((name, i) => `${name}拿的是${perm[i]}`);
      clues.push(`${ns.at(-2)}拿的不是${perm.at(-1)}`);
      const target = guard % 2 ? ns.length - 1 : ns.length - 2;
      q = `${ns.join('、')}每人拿一种不同的水果，水果有${its.join('、')}。${clues.join('；')}。${ns[target]}拿的是什么？`;
      ans = perm[target];
    } else if (mode === 'order') {
      const k = difficulty === 'hard' ? 4 : 3;
      const tallToShort = shuffle(names).slice(0, k);
      const clues = shuffle(tallToShort.slice(0, -1).map((a, i) => `${a}比${tallToShort[i + 1]}高`));
      const asks = difficulty === 'easy'
        ? [['最高', 0], ['最矮', k - 1]]
        : difficulty === 'medium' ? [['排在中间', 1]] : [['第二高', 1], ['第三高', 2]];
      const [label, idx] = asks[guard % asks.length];
      q = `${shuffle(tallToShort).join('、')}比身高，${clues.join('，')}。谁${label}？`;
      ans = tallToShort[idx];
    } else {
      const k = difficulty === 'hard' ? 4 : 3;
      const ns = shuffle(names).slice(0, k);
      const truth = shuffle(ns); // truth[i] 排在第 i+1 个
      const pos = (p, arr) => arr.indexOf(p);
      const targetName = ns[guard % k];
      const pool = [];
      ns.forEach((p) => {
        // easy 才给出“直接位置”线索；medium/hard 只给否定与前后关系，需要推理
        if (difficulty === 'easy' && p !== targetName) pool.push({ text: `${p}排在第${CN_ORD[pos(p, truth)]}个`, ok: (a) => pos(p, a) === pos(p, truth) });
        for (let i = 0; i < k; i++) if (i !== pos(p, truth)) pool.push({ text: `${p}不排在第${CN_ORD[i]}个`, ok: (a) => pos(p, a) !== i });
        ns.forEach((o) => { if (o !== p && pos(p, truth) < pos(o, truth)) pool.push({ text: `${p}排在${o}前面`, ok: (a) => pos(p, a) < pos(o, a) }); });
      });
      const all = permutationsOf(ns);
      const chosen = [];
      let alive = all;
      for (const c of shuffle(pool)) {
        if (alive.length === 1) break;
        const next = alive.filter(c.ok);
        if (next.length < alive.length) { chosen.push(c); alive = next; }
      }
      if (alive.length !== 1) continue;
      q = `${ns.join('、')}排成一队。${chosen.map((c) => c.text).join('；')}。${targetName}排在第几个？`;
      ans = `第${CN_ORD[pos(targetName, truth)]}个`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-reasoning', subtemplateId: `reason-${difficulty}-${mode}` });
  }
  return out;
}

/* ── 表内除法算术插件（2~9 的乘法口诀范围内） ── */
function tableDivProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    const b = ri(2, 9);
    const q = ri(1, 9);
    const a = b * q;
    const question = `${a} ÷ ${b} = ______`;
    if (seen.has(question)) continue;
    seen.add(question);
    out.push({ question, answer: String(q), subtype: 'unit-table-div' });
  }
  return out;
}

/* ── 有余数的除法算术插件 ── */
function remainderDivProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    const b = ri(2, 9);
    const q = ri(1, 9);
    const r = ri(1, b - 1);
    const a = b * q + r;
    const question = `${a} ÷ ${b} = ______`;
    if (seen.has(question)) continue;
    seen.add(question);
    out.push({ question, answer: `${q}……${r}`, subtype: 'unit-rem-div' });
  }
  return out;
}

/* ── 数据收集整理（条形统计表读图题） ── */
function dataCountProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const subjects = ['苹果', '香蕉', '橘子', '梨', '葡萄'];
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    const picked = subjects.slice(0, ri(3, 4));
    const counts = picked.map(() => ri(3, difficulty === 'hard' ? 30 : 18));
    const table = picked.map((s, i) => `${s}${counts[i]}人`).join('，');
    let q, ans;
    const mode = pickCycle(['total', 'diff', 'most', 'sum2'], guard);
    if (mode === 'total') {
      q = `二（1）班调查同学最喜欢的水果，结果如下：${table}。一共调查了多少人？`;
      ans = `${counts.reduce((a, b) => a + b, 0)}人`;
    } else if (mode === 'diff') {
      const hi = Math.max(...counts);
      const lo = Math.min(...counts);
      const maxSubject = picked[counts.indexOf(hi)];
      const minSubject = picked[counts.indexOf(lo)];
      if (hi === lo) continue;
      q = `调查结果：${table}。喜欢${maxSubject}的比喜欢${minSubject}的多多少人？`;
      ans = `${hi - lo}人`;
    } else if (mode === 'most') {
      const hi = Math.max(...counts);
      const subjects2 = picked.filter((s, i) => counts[i] === hi);
      q = `调查结果：${table}。喜欢哪种水果的人最多？`;
      ans = subjects2.join('、');
    } else {
      const i = ri(0, picked.length - 1);
      let j = ri(0, picked.length - 1);
      while (j === i) j = ri(0, picked.length - 1);
      q = `调查结果：${table}。喜欢${picked[i]}的和喜欢${picked[j]}的一共有多少人？`;
      ans = `${counts[i] + counts[j]}人`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-data' });
  }
  return out;
}

/* ── 鸽巢问题（抽屉原理） ── */
function pigeonholeProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const modesByDiff = {
    easy: ['drawer-plus-one', 'socks', 'books-basic'],
    medium: ['drawer', 'birthday', 'books'],
    hard: ['balls', 'reverse-objects', 'cards-suit'],
  };
  const modes = modesByDiff[difficulty] || modesByDiff.medium;
  let guard = 0;
  while (out.length < count && guard < count * 60) {
    guard++;
    const mode = pickCycle(modes, guard);
    let q, ans;
    if (mode === 'drawer-plus-one') {
      const m = ri(2, 12);
      q = `把${m + 1}只鸽子放进${m}个鸽巢里，总有一个鸽巢里至少飞进几只鸽子？`;
      ans = `2只`;
    } else if (mode === 'books-basic') {
      const shelves = ri(2, 8);
      const r = ri(1, shelves - 1);
      const n = shelves + r;
      q = `把${n}本课外书放进${shelves}个抽屉，总有一个抽屉至少放几本？`;
      ans = `2本`;
    } else if (mode === 'drawer') {
      const m = ri(2, 8);
      const k = ri(2, 5);
      const r = ri(1, m - 1);
      const n = k * m + r;
      q = `把${n}个苹果放进${m}个抽屉里，不管怎么放，总有一个抽屉里至少放几个苹果？`;
      ans = `${k + 1}个`;
    } else if (mode === 'socks') {
      const colors = ri(2, 9);
      const item = pick(['袜子', '手套', '筷子']);
      q = `抽屉里有${colors}种颜色的${item}各若干只（看不见颜色），至少要摸出多少只，才能保证有2只同色？`;
      ans = `${colors + 1}只`;
    } else if (mode === 'birthday') {
      const n = ri(13, 60);
      const ansN = Math.ceil(n / 12);
      q = `${n}名同学中，至少有几名同学的生日在同一个月？`;
      ans = `${ansN}名`;
    } else if (mode === 'balls') {
      const colors = ri(2, 6);
      const want = ri(3, 6);
      const ansN = colors * (want - 1) + 1;
      q = `盒子里有${colors}种颜色的球各若干个，至少摸出多少个球，才能保证有${want}个球同色？`;
      ans = `${ansN}个`;
    } else if (mode === 'reverse-objects') {
      const m = ri(3, 9);
      const k = ri(2, 5);
      q = `把一些小球放进${m}个盒子里，要保证总有一个盒子里至少有${k + 1}个小球，那么至少需要准备多少个小球？`;
      ans = `${m * k + 1}个`;
    } else if (mode === 'cards-suit') {
      const cardType = pick(['deck-52', 'deck-54', 'deck-points']);
      if (cardType === 'deck-54') {
        const want = ri(2, 5);
        q = `一副完整的扑克牌（54张，含大小王及4种花色各13张），至少从中任意抽出多少张牌，才能保证有${want}张牌是同一种花色？`;
        ans = `${4 * (want - 1) + 1 + 2}张`;
      } else if (cardType === 'deck-points') {
        q = `一副扑克牌去掉大小王（剩52张，有1至13各4张），至少从中抽出多少张牌，才能保证有2张牌的点数相同？`;
        ans = `14张`;
      } else {
        const want = ri(2, 8);
        const desc = pick(['一副扑克牌去掉大小王后还剩4种花色', '一副52张的扑克牌（含黑桃、红桃、梅花、方块各13张）', '一盒扑克牌去掉了大王和小王']);
        q = `${desc}，至少从中抽出多少张牌，才能保证有${want}张牌是同一种花色？`;
        ans = `${4 * (want - 1) + 1}张`;
      }
    } else {
      const n = ri(10, 50);
      const shelves = ri(2, 6);
      const ansN = Math.ceil(n / shelves);
      q = `图书角有${n}本书，放进${shelves}个书架，总有一个书架至少放多少本？`;
      ans = `${ansN}本`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-pigeonhole', subtemplateId: mode });
  }
  return out;
}

/* ── 百分数（二）（折扣、成数、税率、利率、促销策略） ── */
function percentTwoProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const subIds = {
    easy: ['discount-calc', 'chengshu-concept', 'tax-calc', 'interest-calc'],
    medium: ['discount-reverse', 'chengshu-yield', 'tax-reverse', 'interest-total'],
    hard: ['promo-compare', 'discount-save', 'chengshu-decrease', 'interest-diff'],
  }[difficulty] || ['discount-calc', 'chengshu-concept', 'tax-calc', 'interest-calc'];

  let guard = 0;
  while (out.length < count && guard < count * 35) {
    guard++;
    const subtemplateId = subIds[guard % subIds.length];
    let q, ans;

    if (subtemplateId === 'discount-calc') {
      const items = ['一件衣服', '一双球鞋', '一个书包', '一辆自行车', '一台风扇', '一套运动服'];
      const item = pick(items);
      const rates = [
        { r: 0.8, name: '八折' },
        { r: 0.7, name: '七折' },
        { r: 0.85, name: '八五折' },
        { r: 0.9, name: '九折' },
        { r: 0.75, name: '七五折' },
      ];
      const d = pick(rates);
      const price = ri(3, 20) * 20;
      const final = Math.round(price * d.r);
      q = `${item}原价 ${price} 元，现在商场搞促销打${d.name}出售，现价是多少元？`;
      ans = `${final}元`;
    } else if (subtemplateId === 'chengshu-concept') {
      const chengshus = [
        { c: '二成', pct: '20%' },
        { c: '三成五', pct: '35%' },
        { c: '四成', pct: '40%' },
        { c: '八成五', pct: '85%' },
        { c: '一成五', pct: '15%' },
        { c: '五成', pct: '50%' },
      ];
      const ch = pick(chengshus);
      q = `农业收成中，“${ch.c}”改写成百分数是（    ）。`;
      ans = ch.pct;
    } else if (subtemplateId === 'tax-calc') {
      const sales = ri(10, 50) * 10;
      const taxRate = pick([3, 5, 6]);
      const tax = (sales * taxRate) / 100;
      q = `一家饭店某月的营业额是 ${sales} 万元，如果按营业额的 ${taxRate}% 缴纳增值税，应缴纳税款多少万元？`;
      ans = `${tax}万元`;
    } else if (subtemplateId === 'interest-calc') {
      const principal = ri(2, 10) * 1000;
      const years = ri(1, 3);
      const rate = years === 1 ? 2.0 : years === 2 ? 2.5 : 3.0;
      const interest = Math.round(principal * (rate / 100) * years);
      q = `小明把 ${principal} 元压岁钱存入银行，存期 ${years} 年，年利率是 ${rate.toFixed(1)}%，到期后可得利息多少元？`;
      ans = `${interest}元`;
    } else if (subtemplateId === 'discount-reverse') {
      const items = ['一件羽绒服', '一台学习机', '一双运动鞋', '一套百科全书', '一个微波炉'];
      const item = pick(items);
      const rates = [
        { r: 0.8, name: '八折' },
        { r: 0.7, name: '七折' },
        { r: 0.9, name: '九折' },
        { r: 0.75, name: '七五折' },
      ];
      const d = pick(rates);
      const price = ri(4, 25) * 20;
      const final = Math.round(price * d.r);
      q = `${item}打${d.name}出售，现价是 ${final} 元，这件商品的原价是多少元？`;
      ans = `${price}元`;
    } else if (subtemplateId === 'chengshu-yield') {
      const crops = ['水稻', '玉米', '小麦', '苹果', '棉花'];
      const crop = pick(crops);
      const lastYear = ri(5, 20) * 10;
      const chengshus = [
        { c: '一成', r: 0.1 },
        { c: '二成', r: 0.2 },
        { c: '二成五', r: 0.25 },
        { c: '三成', r: 0.3 },
      ];
      const ch = pick(chengshus);
      const thisYear = Math.round(lastYear * (1 + ch.r));
      q = `某农场去年产${crop} ${lastYear} 吨，今年比去年增产${ch.c}，今年产${crop}多少吨？`;
      ans = `${thisYear}吨`;
    } else if (subtemplateId === 'tax-reverse') {
      const taxRate = pick([3, 5]);
      const sales = ri(10, 40) * 10;
      const tax = (sales * taxRate) / 100;
      q = `某商场按 ${taxRate}% 的税率缴纳增值税 ${tax} 万元，该商场本月的营业额是多少万元？`;
      ans = `${sales}万元`;
    } else if (subtemplateId === 'interest-total') {
      const principal = ri(5, 20) * 1000;
      const years = ri(1, 3);
      const rate = years === 1 ? 2.0 : years === 2 ? 2.5 : 3.0;
      const interest = Math.round(principal * (rate / 100) * years);
      const total = principal + interest;
      q = `李阿姨把 ${principal} 元存入银行，存期 ${years} 年，年利率 ${rate.toFixed(1)}%，到期时她一共可以取回本金和利息共多少元？`;
      ans = `${total}元`;
    } else if (subtemplateId === 'promo-compare') {
      const price = ri(4, 8) * 100;
      const costA = price * 0.8;
      const costB = price - (price / 100) * 25;
      const better = costA < costB ? '甲商场' : '乙商场';
      const diff = Math.abs(costA - costB);
      q = `一件大衣标价 ${price} 元。甲商场一律打八折，乙商场“满100元减25元”。在哪个商场购买更划算？更划算的商场比另一家便宜多少元？`;
      ans = `在${better}买更划算，便宜 ${diff} 元`;
    } else if (subtemplateId === 'discount-save') {
      const price = ri(5, 25) * 20;
      const rates = [
        { r: 0.8, name: '八折' },
        { r: 0.75, name: '七五折' },
        { r: 0.7, name: '七折' },
      ];
      const d = pick(rates);
      const saved = Math.round(price * (1 - d.r));
      q = `一套百科全书原价 ${price} 元，现在书店打${d.name}特价出售，买这套书比原来便宜了多少元？`;
      ans = `${saved}元`;
    } else if (subtemplateId === 'chengshu-decrease') {
      const lastPower = ri(5, 15) * 10;
      const chengshus = [
        { c: '一成', r: 0.1 },
        { c: '一成五', r: 0.15 },
        { c: '二成', r: 0.2 },
      ];
      const ch = pick(chengshus);
      const thisPower = Math.round(lastPower * (1 - ch.r) * 10) / 10;
      q = `某工厂通过节水节电改造，今年用电量比去年节约了${ch.c}。去年用电 ${lastPower} 万度，今年用电多少万度？`;
      ans = `${thisPower}万度`;
    } else if (subtemplateId === 'interest-diff') {
      const principal = ri(5, 20) * 1000;
      const int3Yr = Math.round(principal * 0.03 * 3);
      const int1Yr = Math.round(principal * 0.02 * 3);
      const diff = int3Yr - int1Yr;
      q = `本金 ${principal} 元，存入银行3年。若按三年期整存整取（年利率3.0%），比每年存一次一年期（年利率2.0%，连续存3年）到期利息多多少元？`;
      ans = `${diff}元`;
    }

    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-percent-two', subtemplateId, format: 'application' });
  }
  return out;
}

/* ── 认识人民币（元角分进率、币值辨识、购物找零） ── */
function rmbProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const subIds = {
    easy: ['rmb-rate-fill', 'rmb-yuan-to-jiao', 'rmb-jiao-to-fen', 'rmb-compound-to-jiao'],
    medium: ['rmb-compare', 'rmb-add-simple', 'rmb-sub-simple', 'rmb-shop-total'],
    hard: ['rmb-shop-change', 'rmb-pay-exact', 'rmb-afford-calc', 'rmb-bill-exchange'],
  }[difficulty] || ['rmb-rate-fill', 'rmb-yuan-to-jiao', 'rmb-jiao-to-fen', 'rmb-compound-to-jiao'];

  let guard = 0;
  while (out.length < count && guard < count * 35) {
    guard++;
    const subtemplateId = subIds[guard % subIds.length];
    let q, ans, format = 'fill';

    if (subtemplateId === 'rmb-rate-fill') {
      const rates = [
        { q: '1元 = （    ）角', a: '10' },
        { q: '1角 = （    ）分', a: '10' },
        { q: '1元 = （    ）分', a: '100' },
        { q: '10角 = （    ）元', a: '1' },
        { q: '10分 = （    ）角', a: '1' },
      ];
      const r = rates[guard % rates.length];
      q = r.q;
      ans = r.a;
    } else if (subtemplateId === 'rmb-yuan-to-jiao') {
      const n = ri(2, 9);
      q = `${n}元 = （    ）角`;
      ans = `${n * 10}`;
    } else if (subtemplateId === 'rmb-jiao-to-fen') {
      const n = ri(2, 8);
      q = `${n}角 = （    ）分`;
      ans = `${n * 10}`;
    } else if (subtemplateId === 'rmb-compound-to-jiao') {
      const y = ri(1, 5);
      const j = ri(1, 9);
      if (guard % 2 === 0) {
        q = `${y}元${j}角 = （    ）角`;
        ans = `${y * 10 + j}`;
      } else {
        q = `${y * 10 + j}角 = （    ）元（    ）角`;
        ans = `${y}元${j}角`;
      }
    } else if (subtemplateId === 'rmb-compare') {
      format = 'compare';
      const y = ri(1, 9);
      const delta = ri(-2, 2) * 5;
      const j = y * 10 + delta;
      q = `在括号里填 >、< 或 =：${y}元（    ）${j}角。`;
      ans = delta === 0 ? '=' : delta > 0 ? '<' : '>';
    } else if (subtemplateId === 'rmb-add-simple') {
      const y1 = ri(1, 5);
      const j1 = ri(1, 8);
      const y2 = ri(1, 4);
      q = `${y1}元${j1}角 + ${y2}元 = （    ）元（    ）角`;
      ans = `${y1 + y2}元${j1}角`;
    } else if (subtemplateId === 'rmb-sub-simple') {
      const y = ri(2, 5);
      const j = ri(1, 9);
      q = `${y}元 - ${j}角 = （    ）元（    ）角`;
      ans = `${y - 1}元${10 - j}角`;
    } else if (subtemplateId === 'rmb-shop-total') {
      const items = [
        { name: '一支铅笔', price: ri(5, 9) },
        { name: '一块橡皮', price: ri(5, 8) },
        { name: '一把尺子', price: ri(6, 9) },
      ];
      const i1 = items[0];
      const i2 = items[1];
      const sum = i1.price + i2.price;
      q = `买${i1.name}花 ${i1.price}角，买${i2.name}花 ${i2.price}角，一共花了多少钱？`;
      ans = sum >= 10 ? `${Math.floor(sum / 10)}元${sum % 10}角` : `${sum}角`;
    } else if (subtemplateId === 'rmb-shop-change') {
      const items = [
        { name: '一本练习本', price: ri(2, 4) },
        { name: '一个笔袋', price: ri(5, 8) },
        { name: '一盒彩笔', price: ri(6, 9) },
      ];
      const it = pick(items);
      const bill = 10;
      q = `小红买${it.name}花了 ${it.price}元，付给售货员一张 ${bill}元纸币，应找回多少元？`;
      ans = `${bill - it.price}元`;
    } else if (subtemplateId === 'rmb-pay-exact') {
      const fives = ri(1, 3);
      const ones = ri(1, 4);
      const total = fives * 5 + ones;
      q = `买一套拼图需要 ${total}元。如果只用面值 5元 和 1元 的纸币正好付清不用找钱，需要（    ）张 5元 和（    ）张 1元。`;
      ans = `${fives}张5元，${ones}张1元`;
    } else if (subtemplateId === 'rmb-afford-calc') {
      const pocket = ri(15, 25);
      const p1 = ri(8, 12);
      const p2 = ri(10, 16);
      const need = p1 + p2;
      const diff = need - pocket;
      q = `小明有 ${pocket}元 零花钱，想买一本 ${p1}元 的故事书和一个 ${p2}元 的书包，他的钱够吗？还差多少元？`;
      ans = diff > 0 ? `不够，还差${diff}元` : `够了，还剩${-diff}元`;
    } else if (subtemplateId === 'rmb-bill-exchange') {
      const exchanges = [
        { big: '1张100元', small: '10元', num: '10' },
        { big: '1张50元', small: '10元', num: '5' },
        { big: '1张20元', small: '5元', num: '4' },
        { big: '1张10元', small: '1元', num: '10' },
        { big: '1张5元', small: '1元', num: '5' },
      ];
      const ex = pick(exchanges);
      q = `${ex.big}可以换（    ）张${ex.small}纸币。`;
      ans = ex.num;
    }

    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-rmb', subtemplateId, format });
  }
  return out;
}

export const UNIT_PLUGINS = {
  ...SCOPE_PLUGINS,
  'geo-count': geometryProblems,
  'geo-position': geometryProblems,
  'geo-shapes-solid': geometryProblems,
  'geo-shapes-plane': geometryProblems,
  'geo-angle-intro': geometryProblems,
  'geo-angle-measure': geometryProblems,
  'geo-view-1': geometryProblems,
  'geo-view-2': geometryProblems,
  'geo-view-3': geometryProblems,
  'geo-perimeter': geometryProblems,
  'geo-area': geometryProblems,
  'geo-quad': geometryProblems,
  'geo-composite': geometryProblems,
  'geo-triangle': geometryProblems,
  'geo-circle': geometryProblems,
  'geo-cuboid': geometryProblems,
  'geo-cylinder': geometryProblems,
  'grid-pairs': gridProblems,
  'grid-direction': gridProblems,
  'grid-bearing': gridProblems,
  'grid-motion-1': gridProblems,
  'grid-motion-2': gridProblems,
  'grid-motion-3': gridProblems,
  clock: clockProblems,
  'data-table': statisticsProblems,
  'double-table': statisticsProblems,
  'bar-chart': statisticsProblems,
  'bar-average': statisticsProblems,
  'line-chart': statisticsProblems,
  'pie-chart': statisticsProblems,
  rect: rectProblems,
  'rect-area': rectProblems,
  elapsed: elapsedProblems,
  word: wordProblems,
  pattern: patternProblems,
  combine: combineProblems,
  reasoning: reasoningProblems,
  'table-div': tableDivProblems,
  'rem-div': remainderDivProblems,
  'data-count': dataCountProblems,
  pigeonhole: pigeonholeProblems,
  'unit-len': unitLenProblems,
  'unit-weight': unitWeightProblems,
  'unit-area': unitAreaProblems,
  'quad-area': quadAreaProblems,
  triangle: triangleProblems,
  circle: circleProblems,
  solid: solidProblems,
  cylinder: cylinderProblems,
  equation: equationProblems,
  percent: percentProblems,
  negative: negativeProblems,
  'big-number': bigNumberProblems,
  'dec-div': decimalDivProblems,
  'dec-mul': decimalMulProblems,
  'dec-addsub': decimalAddSubProblems,
  'frac-mul': fractionMulProblems,
  'frac-div': fractionDivProblems,
  'percent-two': percentTwoProblems,
  rmb: rmbProblems,
};
