// units.js —— 人教版数学教材单元映射表（v0.4：全单元覆盖）
// 每个单元五种映射（均可选）：
//   calc:          { operations?, digits?, termCount? } 计算题范围覆盖
//   calcType:      'decimal-arithmetic'|'fraction-arithmetic' 算术策略切换（小数/分数）
//   arithmeticPlugin: 算术段插件（引擎策略不精确的单元，如分数乘除、小数除法）
//   topics:        [模板 id] 应用题/思维题题材过滤（模板 id 见 engine/problemTemplates）
//   plugin:        应用题段插件（引擎未覆盖的题材，word = 按运算类型生成对应应用题）

export const TEXTBOOKS = [
  { id: 'rjb', name: '人教版', available: true },
  { id: 'bsd', name: '北师大版（建设中）', available: false },
  { id: 'sjb', name: '苏教版（建设中）', available: false },
];

export const UNITS = {
  1: {
    上: [
      { name: '准备课', plugin: 'geo-count', maxCount: 6 },
      { name: '位置', plugin: 'geo-position', maxCount: 6 },
      { name: '1~5的认识和加减法', plugin: 'sum-5' },
      { name: '认识图形（一）', plugin: 'geo-shapes-solid', maxCount: 6 },
      { name: '6~10的认识和加减法', plugin: 'sum-10' },
      { name: '11~20各数的认识', plugin: 'number-20' },
      { name: '认识钟表', plugin: 'clock' },
      { name: '20以内的进位加法', plugin: 'carry-20' },
    ],
    下: [
      { name: '20以内的退位减法', plugin: 'borrow-20' },
      { name: '100以内数的认识', plugin: 'number-100' },
      { name: '100以内的加法和减法（一）', plugin: 'sum-100-oral' },
      { name: '认识图形（二）', plugin: 'geo-shapes-plane', maxCount: 6 },
      { name: '认识人民币', plugin: 'rmb' },
      { name: '100以内的加法和减法（二）', plugin: 'sum-100' },
      { name: '找规律', plugin: 'pattern' },
    ],
  },
  2: {
    上: [
      { name: '长度单位', plugin: 'unit-len' },
      { name: '100以内的加法和减法（二）', plugin: 'sum-100-column' },
      { name: '角的初步认识', plugin: 'geo-angle-intro', maxCount: 6 },
      { name: '表内乘法（一）', plugin: 'table-times-1' },
      { name: '观察物体（一）', plugin: 'geo-view-1', maxCount: 6 },
      { name: '表内乘法（二）', plugin: 'table-times-2' },
      { name: '认识时间', plugin: 'clock' },
      { name: '数学广角——搭配（一）', plugin: 'combine' },
    ],
    下: [
      { name: '数据收集整理', plugin: 'data-table' },
      { name: '表内除法（一）', plugin: 'divide-table-1' },
      { name: '图形的运动（一）', plugin: 'grid-motion-1', maxCount: 6 },
      { name: '表内除法（二）', plugin: 'divide-table-2' },
      { name: '混合运算', plugin: 'mixed-order' },
      { name: '有余数的除法', plugin: 'divide-remainder' },
      { name: '万以内数的认识', plugin: 'number-10000' },
      { name: '克和千克', plugin: 'unit-weight' },
      { name: '数学广角——推理', plugin: 'reasoning' },
    ],
  },
  3: {
    上: [
      { name: '时分秒', plugin: 'elapsed', topics: ['time-complex'] },
      { name: '万以内的加法和减法（一）', plugin: 'sum-10000-oral' },
      { name: '测量', plugin: 'unit-len' },
      { name: '万以内的加法和减法（二）', plugin: 'sum-10000-column' },
      { name: '倍的认识', plugin: 'times-as-many' },
      { name: '多位数乘一位数', plugin: 'multi-times-one' },
      { name: '长方形和正方形', plugin: 'geo-perimeter', maxCount: 6 },
      { name: '分数的初步认识', plugin: 'fraction-intro' },
    ],
    下: [
      { name: '位置与方向（一）', plugin: 'grid-direction', maxCount: 6 },
      { name: '除数是一位数的除法', plugin: 'divide-one' },
      { name: '复式统计表', plugin: 'double-table' },
      { name: '两位数乘两位数', plugin: 'two-times-two' },
      { name: '面积', plugin: 'geo-area', maxCount: 6 },
      { name: '年月日', plugin: 'calendar' },
      { name: '小数的初步认识', plugin: 'decimal-intro' },
      { name: '数学广角——搭配（二）', plugin: 'combine' },
    ],
  },
  4: {
    上: [
      { name: '大数的认识', plugin: 'large-number' },
      { name: '公顷和平方千米', plugin: 'unit-area' },
      { name: '角的度量', plugin: 'geo-angle-measure', maxCount: 6 },
      { name: '三位数乘两位数', plugin: 'three-times-two' },
      { name: '平行四边形和梯形', plugin: 'geo-quad', maxCount: 6 },
      { name: '除数是两位数的除法', plugin: 'divide-two' },
      { name: '条形统计图', plugin: 'bar-chart' },
      { name: '数学广角——优化', plugin: 'optimize' },
    ],
    下: [
      { name: '四则运算', plugin: 'four-operations' },
      { name: '观察物体（二）', plugin: 'geo-view-2', maxCount: 6 },
      { name: '运算定律', plugin: 'operation-laws' },
      { name: '小数的意义和性质', plugin: 'decimal-properties' },
      { name: '三角形', plugin: 'geo-triangle', maxCount: 6 },
      { name: '小数的加法和减法', plugin: 'decimal-addsub' },
      { name: '图形的运动（二）', plugin: 'grid-motion-2', maxCount: 6 },
      { name: '平均数与条形统计图', plugin: 'bar-average' },
      { name: '数学广角——鸡兔同笼', topics: ['chicken-rabbit-complex'] },
    ],
  },
  5: {
    上: [
      { name: '小数乘法', arithmeticPlugin: 'dec-mul', plugin: 'word' },
      { name: '位置', plugin: 'grid-pairs', maxCount: 6 },
      { name: '小数除法', arithmeticPlugin: 'dec-div', plugin: 'word' },
      { name: '可能性', plugin: 'possibility' },
      { name: '简易方程', plugin: 'equation' },
      { name: '多边形的面积', plugin: 'geo-composite', maxCount: 6 },
      { name: '数学广角——植树问题', topics: ['tree-planting'] },
    ],
    下: [
      { name: '观察物体（三）', plugin: 'geo-view-3', maxCount: 6 },
      { name: '因数与倍数', plugin: 'factors' },
      { name: '长方体和正方体', plugin: 'geo-cuboid', maxCount: 6 },
      { name: '分数的意义和性质', plugin: 'fraction-properties' },
      { name: '图形的运动（三）', plugin: 'grid-motion-3', maxCount: 6 },
      { name: '分数的加法和减法', plugin: 'fraction-addsub' },
      { name: '折线统计图', plugin: 'line-chart' },
      { name: '数学广角——找次品', plugin: 'counterfeit', maxCount: 6 },
    ],
  },
  6: {
    上: [
      { name: '分数乘法', arithmeticPlugin: 'frac-mul', plugin: 'word' },
      { name: '位置与方向（二）', plugin: 'grid-bearing', maxCount: 6 },
      { name: '分数除法', plugin: 'fraction-division' },
      { name: '比', topics: ['ratio'] },
      { name: '圆', plugin: 'geo-circle', maxCount: 6 },
      { name: '百分数（一）', plugin: 'percent' },
      { name: '扇形统计图', plugin: 'pie-chart' },
      { name: '数学广角——数与形', plugin: 'number-shape' },
    ],
    下: [
      { name: '负数', plugin: 'negative' },
      { name: '百分数（二）', plugin: 'percent-two' },
      { name: '圆柱与圆锥', plugin: 'geo-cylinder', maxCount: 6 },
      { name: '比例', plugin: 'proportion' },
      { name: '数学广角——鸽巢问题', plugin: 'pigeonhole' },
      { name: '整理与复习', review: true, note: '综合复习（全年级题型混合）' },
    ],
  },
};

/**
 * 按年级/学期推导生成默认参数
 */
export function gradeDefaults(grade, semester, total) {
  const g = String(grade);
  let operations = { add: true, subtract: true, multiply: false, divide: false };
  let digits = { add: 1, subtract: 1, multiply: 1, divide: 1 };
  if (g === '1') {
    digits.multiply = 0;
    digits.divide = 0;
    digits.add = semester === '上' ? 1 : 2;
    digits.subtract = semester === '上' ? 1 : 2;
  } else if (g === '2') {
    operations = { add: true, subtract: true, multiply: true, divide: true };
    digits = { add: 2, subtract: 2, multiply: 1, divide: 1 };
  } else if (g === '3') {
    operations = { add: true, subtract: true, multiply: true, divide: true };
    digits = { add: 3, subtract: 3, multiply: 2, divide: 2 };
  } else {
    operations = { add: true, subtract: true, multiply: true, divide: true };
    digits = { add: 3, subtract: 3, multiply: 3, divide: 2 };
  }

  let composition;
  if (g === '1' || g === '2') {
    composition = { arithmetic: Math.round(total * 0.8), application: total - Math.round(total * 0.8), olympiad: 0 };
  } else if (g === '3' || g === '4') {
    const a = Math.round(total * 0.6);
    const o = Math.round(total * 0.15);
    composition = { arithmetic: a, application: total - a - o, olympiad: o };
  } else {
    const a = Math.round(total * 0.5);
    const o = Math.round(total * 0.25);
    composition = { arithmetic: a, application: total - a - o, olympiad: o };
  }
  const termCount = 2;
  return { operations, digits, composition, termCount };
}
