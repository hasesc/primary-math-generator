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
    out.push({ question: q, answer: ans, subtype: 'unit-rect', format });
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
  // 一二年级只学 12 时制，题目不出现 13 时以后的时间
  const lowGrade = ['1', '2'].includes(String(cfg.grade || ''));
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
    const mode = lowGrade ? 0 : out.length % 3;
    const [q, answer, format] = [
      [`小明${start}开始写作业，写了${add}分钟，写完时是几时几分？`, end],
      [`小明写了${add}分钟作业，在${end}写完。他开始写作业的时间是______。`, start, 'fill'],
      [`小明从${start}写作业到${end}，一共写了多少分钟？`, `${add}分钟`],
    ][mode];
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer, subtype: 'unit-elapsed', format });
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
  ];
  const usable = String(cfg.grade) === '2' ? pairs.slice(0, 1) : pairs;
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const p = pick(usable);
    const n = difficulty === 'hard' ? ri(2, 9) : ri(1, 9);
    let q, ans;
    const mode = guard % 3;
    if (mode === 0) {
      q = `${n}${p.big} = （　）${p.small}`;
      ans = `${n * p.k}${p.small}`;
    } else if (mode === 1) {
      q = `${n * p.k}${p.small} = （　）${p.big}`;
      ans = `${n}${p.big}`;
    } else {
      const delta = ri(-5, 5);
      q = `在括号里填 >、< 或 =：${n}${p.big}（　）${n * p.k + delta}${p.small}。`;
      ans = delta === 0 ? '=' : delta > 0 ? '<' : '>';
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-len', format: mode === 2 ? 'compare' : 'fill' });
  }
  return out;
}

/* ── 质量单位换算（克和千克 / 吨） ── */
function unitWeightProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const n = ri(1, difficulty === 'hard' ? 9 : 6);
    const extra = ri(1, 9) * 100;
    const mode = guard % 3;
    let q, ans;
    if (mode === 0) {
      q = `${n}千克${difficulty === 'easy' ? '' : `${extra}克`} = （　）克`;
      ans = `${n * 1000 + (difficulty === 'easy' ? 0 : extra)}克`;
    } else if (mode === 1) {
      const grams = n * 1000 + ri(-9, 9) * 100;
      q = `在括号里填 >、< 或 =：${n}千克（　）${grams}克。`;
      ans = grams === n * 1000 ? '=' : grams > n * 1000 ? '<' : '>';
    } else {
      q = `一袋米重${n}千克，取出${extra}克后，还剩多少克？`;
      ans = `${n * 1000 - extra}克`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    const format = ['fill', 'compare', undefined][mode];
    out.push({ question: q, answer: ans, subtype: 'unit-weight', format });
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
    out.push({ question: q, answer: ans, subtype: 'unit-quad' });
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
    let q, ans;
    if (ri(0, 2) !== 0) {
      q = `一个三角形的底是${a}厘米，高是${h}厘米，它的面积是多少平方厘米？`;
      ans = `${(a * h) / 2}平方厘米`;
    } else {
      const x = ri(30, 100);
      const y = ri(30, 140 - x);
      q = `一个三角形中，两个角分别是${x}°和${y}°，第三个角是多少度？`;
      ans = `${180 - x - y}°`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-triangle' });
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
    out.push({ question: q, answer: ans, subtype: 'unit-circle', format: mode === 'diameter' || mode === 'radius' ? 'fill' : undefined });
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
    out.push({ question: q, answer: ans, subtype: 'unit-solid' });
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
    out.push({ question: q, answer: ans, subtype: 'unit-cylinder' });
  }
  return out;
}

/* ── 简易方程（解方程） ── */
function equationProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const range = { easy: [1, 20], medium: [2, 60], hard: [5, 120] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const x = ri(range[0], range[1]);
    const a = ri(1, Math.max(2, Math.round(range[1] / 2)));
    let q, ans;
    const mode = pickCycle(['plus', 'minus', 'times', 'divide'], guard);
    if (mode === 'plus') {
      q = `解方程：x + ${a} = ${x + a}`;
      ans = `x = ${x}`;
    } else if (mode === 'minus') {
      const sub = ri(1, Math.max(1, x - 1));
      q = `解方程：x - ${sub} = ${x - sub}`;
      ans = `x = ${x}`;
    } else if (mode === 'times') {
      q = `解方程：${a}x = ${a * x}`;
      ans = `x = ${x}`;
    } else {
      q = `解方程：x ÷ ${a} = ${x}`;
      ans = `x = ${a * x}`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-equation' });
  }
  return out;
}

/* ── 百分数（一）：求百分率 / 求部分量 ── */
function percentProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const base = { easy: [10, 100], medium: [20, 200], hard: [40, 500] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const b = ri(base[0] / 10, base[1] / 10) * 10;
    const pct = b % 4 === 0 ? pick([10, 20, 25, 40, 50, 60, 75, 80]) : pick([10, 20, 40, 50, 60, 80]);
    const part = (b * pct) / 100;
    const mode = guard % 3;
    let q, ans;
    if (mode === 0) {
      q = `${b}的${pct}%是______。`;
      ans = `${part}`;
    } else if (mode === 1) {
      q = `一次问卷共收到${b}份答卷，其中${part}份选择了步行出行。选择步行的答卷占总数的百分之几？`;
      ans = `${pct}%`;
    } else {
      q = `一次问卷中，有${part}份答卷选择步行，占总数的${pct}%。一共收到多少份答卷？`;
      ans = `${b}份`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-percent', format: mode === 0 ? 'fill' : undefined });
  }
  return out;
}

/* ── 负数：温度比较与简单加减 ── */
function negativeProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(1, difficulty === 'hard' ? 20 : 10);
    let q, ans;
    const mode = pickCycle(['compare', 'rise', 'diff'], guard);
    if (mode === 'compare') {
      const b = ri(1, difficulty === 'hard' ? 25 : 12);
      if (a === b) continue;
      q = `比较大小：-${a} 和 -${b}，哪个数更大？`;
      ans = `-${Math.min(a, b)}`;
    } else if (mode === 'rise') {
      const up = ri(1, 12);
      q = `早上气温是-${a}℃，中午比早上升高了${up}℃，中午的气温是多少？`;
      ans = `${up - a > 0 ? up - a : up - a}℃`;
    } else {
      const b = ri(1, a + 8);
      q = `某地某天最高气温${b}℃，最低气温-${a}℃，这天的温差是多少？`;
      ans = `${a + b}℃`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-negative' });
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
  const divRange = { easy: [2, 5], medium: [2, 9], hard: [3, 12] }[difficulty];
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const b = ri(divRange[0], divRange[1]);
    let q10 = ri(11, difficulty === 'hard' ? 199 : 99); // 被除数=商×除数（一位小数商）
    while (q10 % 10 === 0) q10 = ri(11, difficulty === 'hard' ? 199 : 99);
    const quotient = q10 / 10;
    const dividend = Number((quotient * b).toFixed(1));
    const q = `${dividend} ÷ ${b} = ______`;
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: String(quotient), subtype: 'unit-dec-div' });
  }
  return out;
}

function fractionMulProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const an = ri(1, 5), ad = ri(an + 1, 9);
    const useInt = ri(0, 1) === 0;
    let q, ans;
    if (useInt) {
      const k = ri(2, difficulty === 'hard' ? 12 : 6);
      q = `${an}/${ad} × ${k} = ______`;
      ans = frac(an * k, ad);
    } else {
      const bn = ri(1, 5), bd = ri(bn + 1, 9);
      q = `${an}/${ad} × ${bn}/${bd} = ______`;
      ans = frac(an * bn, ad * bd);
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-frac-mul' });
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
    const useInt = ri(0, 1) === 0;
    let q, ans;
    if (useInt) {
      const k = ri(2, difficulty === 'hard' ? 9 : 5);
      q = `${an}/${ad} ÷ ${k} = ______`;
      ans = frac(an, ad * k);
    } else {
      const bn = ri(1, 4), bd = ri(bn + 1, 7);
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
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const p = pick(difficulty === 'easy' ? pairs.slice(0, 2) : pairs);
    const n = ri(1, difficulty === 'easy' ? 9 : difficulty === 'medium' ? 20 : 50);
    const mode = guard % 3;
    let q, ans;
    if (mode === 0) {
      q = `${n}${p.big} = （　）${p.small}`;
      ans = `${n * p.k}${p.small}`;
    } else if (mode === 1) {
      q = `${n * p.k}${p.small} = （　）${p.big}`;
      ans = `${n}${p.big}`;
    } else {
      const delta = ri(-2, 2) * p.k / 10;
      q = `在括号里填 >、< 或 =：${n}${p.big}（　）${n * p.k + delta}${p.small}。`;
      ans = delta === 0 ? '=' : delta > 0 ? '<' : '>';
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-area', format: mode === 2 ? 'compare' : 'fill' });
  }
  return out;
}

/* ── 小数乘法算术插件 ── */
function decimalMulProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const tenths = ri(11, difficulty === 'hard' ? 99 : 49);
    if (tenths % 10 === 0) continue;
    const a = tenths / 10;
    const useInt = ri(0, 1) === 0;
    const b = useInt ? ri(2, 9) : ri(11, 49) / 10;
    const ans = Number((a * b).toFixed(2));
    const q = `${a} × ${b} = ______`;
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: String(ans), subtype: 'unit-dec-mul' });
  }
  return out;
}

/* ── 小数加减算术插件 ── */
function decimalAddSubProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard++;
    const a = ri(11, difficulty === 'hard' ? 199 : 99) / 10;
    const b = ri(11, difficulty === 'hard' ? 199 : 99) / 10;
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
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    let q, ans;
    const mode = pickCycle(['arith', 'double', 'repeat'], guard);
    if (mode === 'arith') {
      const start = ri(1, 9);
      const step = ri(2, difficulty === 'hard' ? 9 : 5);
      const seq = [0, 1, 2, 3].map((i) => start + i * step);
      q = `找规律填数：${seq.join('，')}，（　），（　）`;
      ans = `${seq[3] + step}，${seq[3] + 2 * step}`;
    } else if (mode === 'double') {
      const start = ri(1, 4);
      const seq = [0, 1, 2, 3].map((i) => start * Math.pow(2, i));
      q = `找规律填数：${seq.join('，')}，（　）`;
      ans = `${seq[3] * 2}`;
    } else {
      const unit = pick([['△', '○'], ['□', '☆'], ['●', '▲']]);
      q = `按规律接着画：${Array(3).fill(unit.join('')).join('')}（　）（　）`;
      ans = `${unit[0]}${unit[1]}`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-pattern' });
  }
  return out;
}

/* ── 搭配（一）（二） ── */
function combineProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    let q, ans;
    const mode = pickCycle(['clothes', 'digits', 'path', 'handshake'], guard);
    if (mode === 'clothes') {
      const a = ri(2, 4);
      const b = ri(2, 5);
      q = `有${a}件上衣和${b}条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？`;
      ans = `${a * b}种`;
    } else if (mode === 'digits') {
      const n = difficulty === 'hard' ? 3 : 2;
      const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
      const nums = pool.slice(0, n + 1);
      const width = n === 2 ? '两' : '三';
      q = `用${nums.join('、')}这${n + 1}张数字卡片，每次取${n}张组成${width}位数，一共能组成多少个不同的${width}位数？`;
      ans = `${n === 2 ? nums.length * (nums.length - 1) : nums.length * (nums.length - 1) * (nums.length - 2)}个`;
    } else if (mode === 'path') {
      const a = ri(2, 3);
      const b = ri(2, 4);
      q = `从甲地到乙地有${a}条路，从乙地到丙地有${b}条路，从甲地经乙地到丙地一共有多少种走法？`;
      ans = `${a * b}种`;
    } else {
      const n = ri(3, difficulty === 'hard' ? 10 : 7);
      q = `${n}个小朋友，每两人握一次手，一共要握多少次手？`;
      ans = `${(n * (n - 1)) / 2}次`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-combine' });
  }
  return out;
}

/* ── 推理（二年级数学广角） ── */
function reasoningProblems(difficulty, count) {
  const out = [];
  const seen = new Set();
  const names = ['小明', '小红', '小刚', '小丽', '小华'];
  const items = ['苹果', '香蕉', '橘子', '梨', '葡萄', '西瓜'];
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard++;
    const n = difficulty === 'hard' ? 3 : 2;
    const shuffledNames = names.slice().sort(() => Math.random() - 0.5);
    const shuffledItems = items.slice().sort(() => Math.random() - 0.5);
    const ns = shuffledNames.slice(0, n + 1);
    const its = shuffledItems.slice(0, n + 1);
    // 随机分配给每个人不同的物品
    const perm = its.slice().sort(() => Math.random() - 0.5);
    // 先确定前面的人，最后两人再用一条排除线索区分。
    const clues = ns.slice(0, -2).map((name, i) => `${name}拿的是${perm[i]}`);
    clues.push(`${ns.at(-2)}拿的不是${perm.at(-1)}`);
    const target = guard % 2 ? ns.length - 1 : ns.length - 2;
    const q = `${ns.join('、')}每人拿一种不同的水果，水果有${its.join('、')}。${clues.join('；')}。${ns[target]}拿的是什么？`;
    const ans = perm[target];
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-reasoning' });
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
  let guard = 0;
  while (out.length < count && guard < count * 60) {
    guard++;
    const mode = pickCycle(['drawer', 'socks', 'birthday', 'balls', 'books'], guard);
    let q, ans;
    if (mode === 'drawer') {
      const m = ri(2, difficulty === 'hard' ? 9 : 5);   // 抽屉数
      const k = ri(1, difficulty === 'hard' ? 6 : 4);   // 每抽屉基数
      const r = ri(1, m - 1);                            // 余数
      const n = k * m + r;
      q = `把${n}个苹果放进${m}个抽屉里，不管怎么放，总有一个抽屉里至少放几个苹果？`;
      ans = `${k + 1}个`;
    } else if (mode === 'socks') {
      const colors = ri(2, difficulty === 'hard' ? 5 : 3);
      q = `抽屉里有${colors}种颜色的袜子各若干只（黑暗中看不见颜色），至少要摸出多少只袜子，才能保证有2只同色？`;
      ans = `${colors + 1}只`;
    } else if (mode === 'birthday') {
      const n = ri(13, difficulty === 'hard' ? 80 : 40);
      const ansN = Math.ceil(n / 12);
      q = `${n}个人中，至少有几个人的生日在同一个月？`;
      ans = `${ansN}人`;
    } else if (mode === 'balls') {
      const colors = ri(2, 4);
      const want = ri(2, difficulty === 'hard' ? 4 : 3);
      const ansN = colors * (want - 1) + 1;
      q = `盒子里有${colors}种颜色的球各若干个，至少摸出多少个球，才能保证有${want}个球同色？`;
      ans = `${ansN}个`;
    } else {
      const n = ri(10, difficulty === 'hard' ? 60 : 30);
      const shelves = ri(2, 5);
      const ansN = Math.ceil(n / shelves);
      q = `图书角有${n}本书，放进${shelves}个书架，总有一个书架至少放多少本？`;
      ans = `${ansN}本`;
    }
    if (seen.has(q)) continue;
    seen.add(q);
    out.push({ question: q, answer: ans, subtype: 'unit-pigeonhole' });
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
};
