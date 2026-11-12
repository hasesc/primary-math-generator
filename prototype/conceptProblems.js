// conceptProblems.js —— 小学数学概念辨析题引擎（判断题与选择题算法生成）
// 契合人教版 1~6 年级课标概念易混淆点，纯算法实时生成，零题库存储
// 每道题配有标准数学答案与详尽【思路点拨/解析】

import { createRng } from './engine/utils/rng.js';

let rngSeed = Date.now();
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

/* ══════════════════════════════════════════════════════════════════
 * 判断题题库生成器 (True / False Judgements)
 * 动态按年级与单元匹配概念，真伪命题均衡轮换
 * ══════════════════════════════════════════════════════════════════ */

const JUDGE_TEMPLATES = [
  // ── 1~2年级概念 ──
  {
    minGrade: 1, maxGrade: 2, topic: 'number',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      const n = randInt(2, 9);
      if (isTrue) {
        return {
          question: `任何数加上 0，都还得这个数。`,
          answer: '√',
          explanation: '0 表示一个也没有，任何数与 0 相加结果仍为原数。',
        };
      } else {
        return {
          question: `任何数减去 0，都得 0。`,
          answer: '×',
          explanation: '一个数减去 0 仍得原数，例如 5 - 0 = 5，而不是 0。',
        };
      }
    }
  },
  {
    minGrade: 2, maxGrade: 3, topic: 'table-times',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '求几个相同加数的和，用乘法计算比较简便。',
          answer: '√',
          explanation: '乘法是求相同加数和的简便运算。',
        };
      } else {
        return {
          question: '求几个不同加数的和，也可以直接用乘法计算。',
          answer: '×',
          explanation: '乘法只能表示相同加数的连加，加数不同时不能直接列乘法算式。',
        };
      }
    }
  },
  {
    minGrade: 2, maxGrade: 4, topic: 'geometry',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '角的大小与两边的长短无关，只与两边张开的大小有关。',
          answer: '√',
          explanation: '角是由一点引出的两条射线组成的图形，射线无限长，角的大小取决于两条边张开的夹角。',
        };
      } else {
        return {
          question: '用放大镜看一个 30° 的角，这个角的度数会变大。',
          answer: '×',
          explanation: '放大镜只放大了边的长度，角的两条边张开的角度并没有变，仍是 30°。',
        };
      }
    }
  },
  {
    minGrade: 2, maxGrade: 4, topic: 'division',
    generate: () => {
      const div = randInt(4, 9);
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: `在有余数的除法算式中，如果除数是 ${div}，余数最大只能是 ${div - 1}。`,
          answer: '√',
          explanation: `在除法计算中，余数必须严格小于除数，因此余数最大为 ${div} - 1 = ${div - 1}。`,
        };
      } else {
        return {
          question: `在有余数的除法算式中，如果除数是 ${div}，余数可以等于 ${div}。`,
          answer: '×',
          explanation: `余数必须严格小于除数，如果余数等于除数，说明商还可以再加 1，还能继续除。`,
        };
      }
    }
  },

  // ── 3~4年级概念 ──
  {
    minGrade: 3, maxGrade: 5, topic: 'perimeter-area',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '面积相等的两个长方形，它们的周长不一定相等。',
          answer: '√',
          explanation: '例如面积同为 12 平方厘米，长宽可以是 4×3（周长14厘米），也可以是 6×2（周长16厘米）。',
        };
      } else {
        return {
          question: '周长相等的两个长方形，它们的面积一定相等。',
          answer: '×',
          explanation: '例如周长都是 16 厘米，长宽可以是 5 和 3（面积15），也可以是 4 和 4（面积16）。',
        };
      }
    }
  },
  {
    minGrade: 3, maxGrade: 6, topic: 'zero-div',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '0 除以任何不是 0 的数，商都是 0。',
          answer: '√',
          explanation: '0 除以任何非 0 的数都得 0，这是除法运算的基本性质。',
        };
      } else {
        return {
          question: '0 除以任何数都得 0。',
          answer: '×',
          explanation: '0 不能作除数，如果除数是 0，除法算式无意义。必须加上“非0”的限定。',
        };
      }
    }
  },
  {
    minGrade: 4, maxGrade: 6, topic: 'triangle',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '三角形任意两边之和大于第三边。',
          answer: '√',
          explanation: '两点之间线段最短，所以三角形任意两边长度之和一定大于第三边。',
        };
      } else {
        return {
          question: '把一个大三角形剪成两个小三角形，每个小三角形的内角和是 90°。',
          answer: '×',
          explanation: '任意三角形的内角和都是固定的 180°，与三角形的大小、裁剪无关。',
        };
      }
    }
  },
  {
    minGrade: 4, maxGrade: 6, topic: 'decimal-nature',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '在小数的末尾添上“0”或去掉“0”，小数的大小不变。',
          answer: '√',
          explanation: '这是小数的基本性质，末尾的 0 不改变其数值大小，但计数单位发生了改变。',
        };
      } else {
        return {
          question: '在小数点的后面添上“0”或去掉“0”，小数的大小不变。',
          answer: '×',
          explanation: '必须在“末尾”添 0 或去 0，若在小数点后面直接加 0（如 2.5 变成 2.05），小数大小改变。',
        };
      }
    }
  },
  {
    minGrade: 4, maxGrade: 6, topic: 'parallelogram',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '自行车车架通常做成三角形，这是利用了三角形的稳定性。',
          answer: '√',
          explanation: '三角形三边长度确定后形状即固定，具有稳定性；伸缩拉闸门则利用了平行四边形的不稳定性。',
        };
      } else {
        return {
          question: '电动伸缩门利用了平行四边形具有稳定性的特点。',
          answer: '×',
          explanation: '平行四边形容易变形，具有“不稳定性”，伸缩门正是利用这一易变形特点设计的。',
        };
      }
    }
  },

  // ── 5~6年级概念 ──
  {
    minGrade: 5, maxGrade: 6, topic: 'factors-primes',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '最小的质数是 2，它也是唯一的偶质数。',
          answer: '√',
          explanation: '2 只有因数 1 和 2，是最小的质数，也是所有偶数中唯一的质数。',
        };
      } else {
        return {
          question: '所有的偶数都是合数，所有的奇数都是质数。',
          answer: '×',
          explanation: '2 是偶数但为质数；1 是奇数但既不是质数也不是合数；9、15 是奇数但为合数。',
        };
      }
    }
  },
  {
    minGrade: 5, maxGrade: 6, topic: 'multiples-nature',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '一个非零自然数的最大因数和最小倍数都是它本身。',
          answer: '√',
          explanation: '例如 8 的最大因数是 8，最小倍数也是 8，二者相等。',
        };
      } else {
        return {
          question: '一个数的倍数一定比它的因数大。',
          answer: '×',
          explanation: '一个数的最小倍数等于它的最大因数（都是它本身），并不大于因数。',
        };
      }
    }
  },
  {
    minGrade: 5, maxGrade: 6, topic: 'fraction-nature',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '把 3 米长的绳子平均分成 4 段，每段占全长的 1/4。',
          answer: '√',
          explanation: '把全长看作单位“1”，平均分成 4 段，每段就是全长的 1/4；每段长度是 3/4 米。',
        };
      } else {
        return {
          question: '把一根木料锯成 5 段，每段木料占全长的 1/5 米。',
          answer: '×',
          explanation: '每段占全长的分率是 1/5（不带单位），而不是 1/5 米。',
        };
      }
    }
  },
  {
    minGrade: 5, maxGrade: 6, topic: 'equation',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '方程一定是等式，但等式不一定是方程。',
          answer: '√',
          explanation: '含有未知数的等式叫方程。例如 2 + 3 = 5 是等式但不是方程；2x = 6 既是等式也是方程。',
        };
      } else {
        return {
          question: '含有未知数的式子就叫做方程。',
          answer: '×',
          explanation: '方程必须同时满足两个条件：① 含有未知数；② 必须是等式。例如 3x + 5 不是等式，不是方程。',
        };
      }
    }
  },
  {
    minGrade: 6, maxGrade: 6, topic: 'circle',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '在同一个圆里，直径的长度是半径的 2 倍，圆周率是一个固定的常数。',
          answer: '√',
          explanation: '同圆或等圆中 d = 2r；任何圆的周长与直径之比都是固定的 π。',
        };
      } else {
        return {
          question: '大圆的圆周率比小圆的圆周率大。',
          answer: '×',
          explanation: '圆周率 π 是一个固定的常数（约 3.14159...），大小圆的圆周率完全相同。',
        };
      }
    }
  },
  {
    minGrade: 6, maxGrade: 6, topic: 'percent',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '一件商品打“八折”出售，现价比原价便宜了 20%。',
          answer: '√',
          explanation: '八折表示现价是原价的 80%，因此比原价便宜了 1 - 80% = 20%。',
        };
      } else {
        return {
          question: '一根钢管长 80% 米。',
          answer: '×',
          explanation: '百分数只表示两个数的倍比关系，后面绝对不能带计量单位。',
        };
      }
    }
  },
  {
    minGrade: 6, maxGrade: 6, topic: 'negative',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '0 既不是正数，也不是负数。',
          answer: '√',
          explanation: '0 是正数和负数的分界点，它既不是正数也不是负数。',
        };
      } else {
        return {
          question: '所有的负数都大于 0。',
          answer: '×',
          explanation: '负数都小于 0，正数都大于 0。',
        };
      }
    }
  },
  {
    minGrade: 6, maxGrade: 6, topic: 'proportion',
    generate: () => {
      const isTrue = Math.random() < 0.5;
      if (isTrue) {
        return {
          question: '圆的周长与它的直径成正比例关系。',
          answer: '√',
          explanation: '因为 周长 ÷ 直径 = π（常数），比值一定，所以成正比例。',
        };
      } else {
        return {
          question: '正方形的面积与它的边长成正比例关系。',
          answer: '×',
          explanation: '面积 ÷ 边长 = 边长（是一个变量，不是定值），所以不成正比例。',
        };
      }
    }
  },
];

/* ══════════════════════════════════════════════════════════════════
 * 单项选择题题库生成器 (Multiple Choice Questions)
 * 4 个规范选项 (A/B/C/D)，带典型错因干扰项
 * ══════════════════════════════════════════════════════════════════ */

const CHOICE_TEMPLATES = [
  // ── 1~2年级选择题 ──
  {
    minGrade: 1, maxGrade: 2, topic: 'clock',
    generate: () => {
      const h = randInt(2, 10);
      return {
        question: `钟面上，分针指向 12，时针指向 ${h}，此时是（    ）。`,
        options: [
          `A. ${h} 时`,
          `B. 12 时`,
          `C. ${h === 12 ? 1 : h + 1} 时`,
          `D. 6 时`
        ],
        answer: 'A',
        explanation: `分针指向 12 时，时针指向几就是几时，因此此时是 ${h} 时。`
      };
    }
  },
  {
    minGrade: 2, maxGrade: 3, topic: 'unit-len',
    generate: () => {
      const items = [
        { name: '一支新铅笔的长', val: '18 厘米', wrong: ['18 米', '180 毫米', '18 分米'] },
        { name: '教室黑板的长', val: '4 米', wrong: ['4 厘米', '40 米', '4 毫米'] },
        { name: '一棵大树的高', val: '10 米', wrong: ['10 厘米', '10 毫米', '100 米'] },
      ];
      const target = pickOne(items);
      const opts = shuffle([
        { text: target.val, isCorrect: true },
        { text: target.wrong[0], isCorrect: false },
        { text: target.wrong[1], isCorrect: false },
        { text: target.wrong[2], isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: `下面物品中，${target.name}大约是（    ）。`,
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `根据实际生活经验，${target.name}约是 ${target.val}。`
      };
    }
  },

  // ── 3~4年级选择题 ──
  {
    minGrade: 3, maxGrade: 4, topic: 'tree-planting',
    generate: () => {
      const totalLen = pickOne([40, 50, 60, 80, 100]);
      const gap = 5;
      const count = totalLen / gap + 1;
      const opts = shuffle([
        { text: `${count} 棵`, isCorrect: true },
        { text: `${totalLen / gap} 棵`, isCorrect: false }, // 漏加1
        { text: `${count - 2} 棵`, isCorrect: false }, // 误减1
        { text: `${count + 1} 棵`, isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: `在一条全长 ${totalLen} 米的小路一侧植树，每隔 ${gap} 米栽一棵（两端都栽），一共要栽（    ）棵树。`,
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `两端都栽树，棵数 = 间隔数 + 1。间隔数 = ${totalLen} ÷ ${gap} = ${totalLen / gap} 个，棵数 = ${totalLen / gap} + 1 = ${count} 棵。`
      };
    }
  },
  {
    minGrade: 3, maxGrade: 5, topic: 'rect-pull',
    generate: () => {
      const opts = [
        { text: '周长不变，面积变小', isCorrect: true },
        { text: '周长变小，面积不变', isCorrect: false },
        { text: '周长和面积都变大', isCorrect: false },
        { text: '周长和面积都不变', isCorrect: false },
      ];
      const shuffled = shuffle(opts);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = shuffled.findIndex(o => o.isCorrect);
      return {
        question: '把一个长方形活动木框拉成一个平行四边形，它的（    ）。',
        options: shuffled.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: '拉动时四条木条的长度没有变，所以周长不变；但木框倾斜后高变矮了，所以底乘高算出的面积变小了。'
      };
    }
  },
  {
    minGrade: 4, maxGrade: 5, topic: 'triangle-sides',
    generate: () => {
      // 构造能组成三角形的边组与不能组成的边组
      const valid = pickOne([
        [4, 5, 6], [3, 4, 5], [5, 6, 8], [6, 8, 10]
      ]);
      const invalids = [
        [2, 3, 6], // 2+3 < 6
        [3, 4, 7], // 3+4 = 7
        [1, 2, 4], // 1+2 < 4
      ];
      const opts = shuffle([
        { text: `${valid[0]}cm、${valid[1]}cm、${valid[2]}cm`, isCorrect: true },
        { text: `${invalids[0][0]}cm、${invalids[0][1]}cm、${invalids[0][2]}cm`, isCorrect: false },
        { text: `${invalids[1][0]}cm、${invalids[1][1]}cm、${invalids[1][2]}cm`, isCorrect: false },
        { text: `${invalids[2][0]}cm、${invalids[2][1]}cm、${invalids[2][2]}cm`, isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: '下面三组线段中，能围成一个三角形的是（    ）。',
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `三角形任意两边之和必须严格大于第三边。只有 ${valid[0]} + ${valid[1]} > ${valid[2]} 能围成三角形。`
      };
    }
  },
  {
    minGrade: 4, maxGrade: 6, topic: 'unit-area-convert',
    generate: () => {
      const ha = randInt(2, 8);
      const sqMeters = ha * 10000;
      const opts = shuffle([
        { text: `${sqMeters} 平方米`, isCorrect: true },
        { text: `${ha * 100} 平方米`, isCorrect: false }, // 误用长度进率100
        { text: `${ha * 1000} 平方米`, isCorrect: false },
        { text: `${ha * 10} 平方米`, isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: `${ha} 公顷等于（    ）。`,
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `1 公顷 = 10000 平方米，因此 ${ha} 公顷 = ${ha} × 10000 = ${sqMeters} 平方米。`
      };
    }
  },

  // ── 5~6年级选择题 ──
  {
    minGrade: 5, maxGrade: 6, topic: 'prime-sum',
    generate: () => {
      const opts = shuffle([
        { text: '奇数', isCorrect: false },
        { text: '合数', isCorrect: false },
        { text: '无法确定是质数还是合数', isCorrect: true },
        { text: '一定是质数', isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: '两个质数的和（    ）。',
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: '举反例：2 + 3 = 5（质数），3 + 5 = 8（合数），所以可能是质数也可能是合数，无法确定。'
      };
    }
  },
  {
    minGrade: 5, maxGrade: 6, topic: 'cylinder-cone',
    generate: () => {
      const v = randInt(3, 9) * 3; // 确保能整除3
      const coneV = v / 3;
      const cutV = v - coneV;
      const opts = shuffle([
        { text: `${cutV} 立方厘米`, isCorrect: true },
        { text: `${coneV} 立方厘米`, isCorrect: false }, // 误选圆锥体积
        { text: `${v} 立方厘米`, isCorrect: false },
        { text: `${v / 2} 立方厘米`, isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: `把一个体积是 ${v} 立方厘米的圆柱形木料削成一个最大的圆锥，削去部分的体积是（    ）。`,
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `等底等高的圆锥体积是圆柱的 1/3，即 ${coneV} 立方厘米；削去部分占 2/3，体积为 ${v} - ${coneV} = ${cutV} 立方厘米。`
      };
    }
  },
  {
    minGrade: 5, maxGrade: 6, topic: 'scale-area',
    generate: () => {
      const scale = randInt(2, 4);
      const areaScale = scale * scale;
      const opts = shuffle([
        { text: `${areaScale} 倍`, isCorrect: true },
        { text: `${scale} 倍`, isCorrect: false }, // 误以为周长倍数
        { text: `${scale * 2} 倍`, isCorrect: false },
        { text: `${areaScale * 2} 倍`, isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: `一个长方形的长和宽各扩大到原来的 ${scale} 倍，它的面积扩大到原来的（    ）。`,
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `长方形面积 = 长 × 宽。长和宽都乘 ${scale}，面积扩大 ${scale} × ${scale} = ${areaScale} 倍。`
      };
    }
  },
  {
    minGrade: 6, maxGrade: 6, topic: 'circle-perimeter-area',
    generate: () => {
      const rRatio = randInt(2, 4);
      const areaRatio = rRatio * rRatio;
      const opts = shuffle([
        { text: `周长扩大到原来的 ${rRatio} 倍，面积扩大到原来的 ${areaRatio} 倍`, isCorrect: true },
        { text: `周长和面积都扩大到原来的 ${rRatio} 倍`, isCorrect: false },
        { text: `周长扩大到原来的 ${rRatio} 倍，面积扩大到原来的 ${rRatio * 2} 倍`, isCorrect: false },
        { text: `周长扩大到原来的 ${areaRatio} 倍，面积扩大到原来的 ${rRatio} 倍`, isCorrect: false },
      ]);
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = opts.findIndex(o => o.isCorrect);
      return {
        question: `如果一个圆的半径扩大到原来的 ${rRatio} 倍，那么它的（    ）。`,
        options: opts.map((o, idx) => `${letters[idx]}. ${o.text}`),
        answer: letters[correctIdx],
        explanation: `圆周长 C = 2πr，周长与半径成正比，扩大 ${rRatio} 倍；面积 S = πr²，与半径的平方成正比，扩大 ${areaRatio} 倍。`
      };
    }
  },
];

/* ══════════════════════════════════════════════════════════════════
 * 外部公共导出接口
 * ══════════════════════════════════════════════════════════════════ */

/**
 * 批量生成判断题
 * @param {object} param0 { grade, count }
 */
export function generateJudgeProblems({ grade = 3, count = 5 } = {}) {
  const g = Number(grade);
  const matched = JUDGE_TEMPLATES.filter(t => g >= t.minGrade && g <= t.maxGrade);
  const pool = matched.length >= count ? matched : JUDGE_TEMPLATES;
  const results = [];
  const seen = new Set();

  let attempts = 0;
  while (results.length < count && attempts < count * 20) {
    attempts++;
    const tpl = pool[Math.floor(Math.random() * pool.length)];
    const p = tpl.generate();
    if (!p || seen.has(p.question)) continue;
    seen.add(p.question);
    results.push({
      type: 'judge',
      format: 'judge',
      responseKind: 'judge',
      subtemplateId: `judge-${tpl.topic}`,
      question: p.question,
      answer: p.answer,
      explanation: p.explanation || '',
      score: 2,
    });
  }
  return results;
}

/**
 * 批量生成单项选择题
 * @param {object} param0 { grade, count }
 */
export function generateChoiceProblems({ grade = 3, count = 5 } = {}) {
  const g = Number(grade);
  const matched = CHOICE_TEMPLATES.filter(t => g >= t.minGrade && g <= t.maxGrade);
  const pool = matched.length >= count ? matched : CHOICE_TEMPLATES;
  const results = [];
  const seen = new Set();

  let attempts = 0;
  while (results.length < count && attempts < count * 20) {
    attempts++;
    const tpl = pool[Math.floor(Math.random() * pool.length)];
    const p = tpl.generate();
    if (!p || seen.has(p.question)) continue;
    seen.add(p.question);
    results.push({
      type: 'choice',
      format: 'choice',
      responseKind: 'choice',
      subtemplateId: `choice-${tpl.topic}`,
      question: p.question,
      options: p.options || [],
      answer: p.answer,
      explanation: p.explanation || '',
      score: 2,
    });
  }
  return results;
}
