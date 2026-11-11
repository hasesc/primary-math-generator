const int = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const pick = values => values[int(0, values.length - 1)];
const compare = (a, b) => a === b ? '=' : a > b ? '>' : '<';
const digits = '零一二三四五六七八九';
const places = ['个', '十', '百', '千', '万', '十万', '百万', '千万', '亿'];

function readNumber(n) {
  if (n === 10000) return '一万';
  return String(n).split('').map((value, i, values) => {
    const place = values.length - i - 1;
    if (value === '0') return values.slice(i + 1).some(d => d !== '0') && values[i - 1] !== '0' ? '零' : '';
    if (i === 0 && place === 1 && value === '1') return '十';
    return digits[value] + (place ? places[place] : '');
  }).join('');
}

function numberTasks(kind, difficulty) {
  const ranges = {
    'number-20': [11, 20], 'number-100': [11, 100],
    'number-10000': difficulty === 'easy' ? [100, 999] : difficulty === 'medium' ? [1000, 9999] : [1001, 9999],
    'large-number': difficulty === 'easy' ? [10001, 999999] : difficulty === 'medium' ? [1000000, 99999999] : [10000000, 999999999],
  };
  const [min, max] = ranges[kind];
  const a = int(min, max), b = int(min, max);
  const units = String(a).split('').reverse().map((d, i) => [Number(d), i]).filter(([d]) => d);
  const [value, place] = pick(units);
  const parts = units.slice().reverse().map(([d, i]) => `${d}个${i === 0 ? '一' : places[i]}`).join('、');
  if ((kind === 'number-10000' || kind === 'large-number') && difficulty === 'hard') {
    const step = kind === 'large-number' ? 10000 : 100;
    const d1 = int(1, 9), d2 = int(1, 9);
    const hi = Math.max(d1, d2), lo = Math.min(d1, d2);
    return [
      ['place-value', `${a} 中，${places[place]}位上的数字表示多少？`, value * 10 ** place],
      ['compose-number', `由 ${parts} 组成的数写作多少？`, a],
      ['estimate', `把 ${a} 四舍五入到${kind === 'large-number' ? '万' : '百'}位，近似数是多少？`, Math.round(a / step) * step],
      ['max-with-zeros', `用数字 ${d1}、${d2} 和两个 0 组成一个最大的四位数（每个数字只用一次，且大于 ${a % 900 + 100}），这个四位数是多少？`, hi * 1000 + lo * 100],
    ];
  }
  const tasks = [
    ['place-value', `${a} 中，${places[place]}位上的数字表示多少？`, value * 10 ** place],
    ['compose-number', `由 ${parts} 组成的数写作多少？`, a],
    ['compare-numbers', `在括号里填 >、< 或 =：${a}（　）${b}。`, compare(a, b)],
  ];
  if (kind !== 'large-number') {
    tasks.push(['read-number', `${a} 读作什么？`, readNumber(a)], ['write-number', `${readNumber(a)}写作多少？`, a]);
  }
  if (kind === 'number-20' || kind === 'number-100') {
    const n = int(min, max - 2);
    tasks.push(['count-in-order', `按顺序填数：${n}，______，${n + 2}。`, n + 1]);
  } else if (difficulty === 'easy' && kind === 'large-number') {
    tasks.push(['rewrite-wan', `把整万数 ${a}0000 改写成用“万”作单位的数。`, `${a}万`]);
  } else if (difficulty !== 'easy') {
    const step = kind === 'large-number' ? 10000 : 100;
    tasks.push(['estimate', `把 ${a} 四舍五入到${kind === 'large-number' ? '万' : '百'}位，近似数是多少？`, Math.round(a / step) * step]);
  }
  return tasks;
}

function boundedTasks(kind, difficulty) {
  let a, b, operation, result, story;
  const multiplication = { 'table-times-1': [2, 6, 2, 6], 'table-times-2': [2, 9, 6, 9], 'multi-times-one': [10, 999, 2, 9], 'two-times-two': [10, 99, 10, 99], 'three-times-two': [100, 999, 10, 99] };
  if (multiplication[kind]) {
    const [aMin, aMax, bMin, bMax] = multiplication[kind];
    const cap = aMax >= 99
      ? (difficulty === 'easy' ? Math.min(aMin * 2, aMax) : difficulty === 'medium' ? Math.min(aMin * 5, aMax) : aMax)
      : aMax;
    const floor = aMax >= 99 && difficulty === 'hard' ? Math.min(aMin * 3, aMax) : aMin;
    a = int(floor, cap);
    b = int(bMin, bMax);
    operation = '×';
    result = a * b;
    if (['multi-times-one', 'two-times-two', 'three-times-two'].includes(kind) && difficulty === 'hard') {
      const unitStep = a >= 100 ? 100 : 10;
      const approxA = Math.round(a / unitStep) * unitStep;
      return [
        ['calculate', `${a} × ${b} = ______`, result, 'calculation'],
        ['reverse-factor', `已知 ______ × ${b} = ${result}，横线上应填多少？`, a],
        ['estimate-product', `估算：把 ${a} 看作 ${approxA}，则 ${a} × ${b} ≈ ______`, approxA * b],
        ['multi-step-apply', `每箱有 ${a} 本书，买 ${b} 箱后又单买 ${b} 本，一共有多少本？`, result + b, 'word'],
      ];
    }
    story = [`每箱有 ${a} 本书，${b} 箱一共有多少本？`, result];
  } else if (['divide-table-1', 'divide-table-2', 'divide-one', 'divide-two', 'divide-remainder'].includes(kind)) {
    b = kind === 'divide-two' ? int(10, 49) : kind === 'divide-table-1' ? int(2, 6) : kind === 'divide-table-2' ? int(7, 9) : int(2, 9);
    result = int(2, kind === 'divide-table-1' ? 6 : kind === 'divide-table-2' || kind === 'divide-remainder' ? 9 : 18);
    const remainder = kind === 'divide-remainder' ? int(1, b - 1) : 0;
    a = b * result + remainder;
    operation = '÷';
    if (remainder && difficulty === 'hard') return [
      ['remainder-dividend', `一道除法中，除数是 ${b}，商是 ${result}，余数是 ${remainder}。被除数是多少？`, a],
      ['remainder-divisor', `一道除法中，被除数是 ${a}，商是 ${result}，余数是 ${remainder}。除数是多少？`, b],
      ['remainder-extra-box', `${a} 本书每 ${b} 本装一盒，每本书都要装进盒子，至少需要几个盒子？`, `${result + 1} 个`],
      ['remainder-fill-group', `${a} 本书每 ${b} 本装一盒，至少再添几本就能全部装满盒子？`, `${b - remainder} 本`],
    ];
    if (remainder && difficulty === 'medium') return [
      ['remainder-grouping', `${a} 本书每 ${b} 本装一盒，能装满几盒，还剩几本？`, `${result} 盒，剩 ${remainder} 本`],
      ['remainder-check', `被除数是 ${a}，除数是 ${b}，商是 ${result}。余数是多少？`, remainder],
      ['remainder-largest', `一道有余数的除法，除数是 ${b}，商是 ${result}。余数最大是多少？`, b - 1],
      ['remainder-missing', `${a} = ${b} × ${result} + ______。`, remainder],
    ];
    if (remainder) return [
      ['remainder-computation', `${a} ÷ ${b} = ______（写出商和余数）`, `${result} 余 ${remainder}`],
      ['remainder-grouping', `${a} 本书每 ${b} 本装一盒，能装满几盒，还剩几本？`, `${result} 盒，剩 ${remainder} 本`],
      ['remainder-bounds', `除数是 ${b}，余数填 ${remainder} 还是 ${b + remainder} 才可能正确？`, remainder],
      ['remainder-check', `被除数是 ${a}，除数是 ${b}，商是 ${result}。余数是多少？`, remainder],
    ];
    story = [`${a} 本书，每 ${b} 本装一盒，可以装几盒？`, result];
  } else {
    const upper = { 'sum-5': 5, 'sum-10': 10, 'sum-100': 100, 'sum-100-oral': 100, 'sum-100-column': 100, 'sum-10000-oral': 1000, 'sum-10000-column': 10000 }[kind];
    const add = kind === 'carry-20' || (kind !== 'borrow-20' && int(0, 1));
    if (kind === 'carry-20') {
      a = int(2, 9); b = int(10 - a, 9);
    } else if (kind === 'borrow-20') {
      a = int(11, 18); b = int(a % 10 + 1, 9);
    } else {
      const floor = kind === 'sum-10000-column' ? 100 : kind === 'sum-100-oral' || kind === 'sum-100-column' ? 10 : 1;
      a = int(floor, Math.min(upper - floor, kind === 'sum-10000-column' ? 999 : upper));
      b = int(floor, add ? upper - a : a);
      if (kind === 'sum-100-oral') b = add && a <= 80 && int(0, 1) ? int(1, Math.floor((upper - a) / 10)) * 10 : int(1, 9);
      if (kind === 'sum-10000-oral') {
        const hundreds = difficulty === 'hard' ? true : difficulty === 'medium' ? Boolean(int(0, 1)) : false;
        a = hundreds ? int(10, 99) * 10 : int(10, 89);
        b = hundreds ? int(1, Math.floor((add ? upper - a : a) / 10)) * 10 : int(10, add ? 99 - a : a);
      }
      if (kind === 'sum-10000-column') b = int(floor, add ? 999 : a);
    }
    operation = add ? '+' : '−';
    result = add ? a + b : a - b;
    story = add ? [`盒里原有 ${a} 枚棋子，又放入 ${b} 枚，现在有多少枚？`, result]
      : [`盒里原有 ${a} 枚棋子，拿走 ${b} 枚，还剩多少枚？`, result];
  }
  const limit = { 'sum-5': 5, 'sum-10': 10, 'carry-20': 20, 'borrow-20': 20, 'sum-100': 100, 'sum-100-oral': 100, 'sum-100-column': 100, 'sum-10000-oral': 1000, 'sum-10000-column': 10000 }[kind] ?? Infinity;
  const target = Math.min(limit, Math.max(0, result + (b % 3) - 1));
  const method = kind.endsWith('-oral') ? '口算：' : kind.endsWith('-column') ? '列竖式计算：' : '';
  if (kind === 'sum-10000-oral' && difficulty === 'hard') {
    return [
      ['calculate', `${method}${a} ${operation} ${b} = ______`, result, 'calculation'],
      ['reverse-first-operand', `已知 ______ ${operation} ${b} = ${result}，横线上应填多少？`, a],
      ['compare-expression', `在括号里填 >、< 或 =：${a} ${operation} ${b}（　）${target}。`, compare(result, target)],
      ['apply', ...story],
    ];
  }
  return [
    ['calculate', `${method}${a} ${operation} ${b} = ______`, result, method === '列竖式计算：' ? 'written' : 'calculation'],
    ['missing-operand', `${a} ${operation} ______ = ${result}`, b],
    ['compare-expression', `在括号里填 >、< 或 =：${a} ${operation} ${b}（　）${target}。`, compare(result, target)],
    ['apply', ...story],
  ];
}

function conceptTasks(kind, difficulty) {
  const a = int(2, difficulty === 'easy' ? 6 : 9), b = int(2, 9), c = int(2, 9);
  const n = a * 10 + b;
  const m = b * 10 + c;
  const f = a + b + c;
  switch (kind) {
    case 'times-as-many':
      if (difficulty === 'hard') return [
        ['times-extra', `蓝旗有 ${a} 面，红旗比蓝旗的 ${b} 倍多 ${c} 面。红旗有多少面？`, a * b + c],
        ['times-reverse-extra', `红旗有 ${a * b + c} 面，比蓝旗的 ${b} 倍多 ${c} 面。蓝旗有多少面？`, a],
        ['times-combined', `蓝旗有 ${a} 面，红旗是蓝旗的 ${b} 倍。两种旗一共有多少面？`, a * (b + 1)],
        ['times-difference', `蓝旗有 ${a} 面，红旗是蓝旗的 ${b} 倍。红旗比蓝旗多多少面？`, a * (b - 1)],
      ];
      if (difficulty === 'medium') return [
        ['find-times', `红旗有 ${a * b} 面，黄旗有 ${a} 面。红旗的面数是黄旗的几倍？`, b],
        ['find-multiple', `蓝旗有 ${a} 面，红旗是蓝旗的 ${b} 倍。红旗有几面？`, a * b],
        ['find-base', `红旗有 ${a * b} 面，是绿旗的 ${b} 倍。绿旗有几面？`, a],
        ['check-times', `${a * b + 1} 是 ${a} 的 ${b} 倍吗？`, '不是'],
      ];
      return [
      ['times-direct', `${a} 的 ${b} 倍是多少？`, a * b],
      ['times-division', `${a * b} 是 ${a} 的几倍？`, b],
      ['times-simple-story', `每盒彩笔有 ${a} 支，${b} 盒有多少支？`, a * b],
      ['times-equation', `${a} 的 ${b} 倍是 ______，算式是 ${a} × ${b}。`, a * b],
    ];
    case 'calendar': {
      const year = int(1990, 2099), month = int(1, 12);
      const minute = int(1, 59);
      const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
      const laterDay = int(a + 1, days);
      if (difficulty === 'hard') return [
        ['elapsed-hours-same-day', `一辆客车于 ${year} 年某天上午 ${a} 时出发，当天下午 ${b} 时到达终点，一共行驶了多少小时？`, `${b + 12 - a} 小时`],
        ['elapsed-days-in-month', `读书活动从 ${month} 月 ${a} 日开始，到 ${month} 月 ${a + b + c} 日结束（首尾两天都算），一共举办了多少天？`, `${b + c + 1} 天`],
        ['weekday-cycle', `如果 ${year} 年 ${month} 月 ${a} 日是星期三，那么同月 ${laterDay} 日是星期几？`, ['星期三', '星期四', '星期五', '星期六', '星期日', '星期一', '星期二'][(laterDay - a) % 7]],
        ['cross-midnight-hours', `一列列车第一天 ${12 + a} 时发车，第二天早晨 ${b} 时到达（车次 ${minute}），途中行驶了多少小时？`, `${12 - a + b} 小时`],
      ];
      if (difficulty === 'medium') return [
        ['month-days', `${year} 年 ${month} 月有多少天？`, days],
        ['date-rollover', `${year} 年 ${month} 月 ${days} 日的第二天是几月几日？`, `${month % 12 + 1} 月 1 日`],
        ['clock-12h', `把 ${a + 12} 时 ${minute} 分改写成普通计时法（注明“下午”）。`, `下午 ${a} 时 ${minute} 分`],
        ['quarter-days', `${year} 年第一季度（1月、2月、3月）一共有多少天？`, leap ? 91 : 90],
      ];
      return [
        ['month-days-basic', `${year} 年 ${month} 月一共有多少天？`, days],
        ['year-type', `${year} 年是平年还是闰年？`, leap ? '闰年' : '平年'],
        ['year-days', `${year} 年全年有多少天？`, leap ? 366 : 365],
        ['clock-24h', `把下午 ${a} 时 ${minute} 分写成 24 时计时法的形式。`, `${a + 12} 时 ${minute} 分`],
      ];
    }
    case 'operation-laws':
      if (difficulty === 'hard') return [
        ['near-hundred-plus', `用简便方法计算：${n} × 99 + ${n} = ______。`, n * 100],
        ['near-hundred-minus', `用乘法分配律简算：${n} × 101 − ${n} = ______。`, n * 100],
        ['distributive-diff', `用简便方法计算：${n} × ${a + 10} − ${n} × ${a} = ______。`, n * 10],
        ['pair-eight-125', `用乘法交换律和结合律简算：125 × ${n} × 8 = ______。`, 1000 * n],
      ];
      if (difficulty === 'medium') return [
        ['distributive', `用乘法分配律填空：${a} ×（${b} + ${c}）= ${a} × ${b} + ${a} × ______。`, c],
        ['distributive-combine', `用乘法分配律简算：${n} × ${a} + ${n} × ${10 - a} = ______。`, n * 10],
        ['sub-property', `用减法性质简算：${n + 100} − ${a} − ${100 - a} = ______。`, n],
        ['div-property', `用除法性质简算：${n * 100} ÷ 25 ÷ 4 = ______。`, n],
      ];
      return [
        ['commutative', `用乘法交换律填空：${n} × ${b} = ______ × ${n}。`, b],
        ['associative', `用加法结合律计算：${100 - n} + ${m} + ${n} = ______。`, 100 + m],
        ['commutative-add', `用加法交换律填空：${n} + ${m} = ${m} + ______。`, n],
        ['simplify-product', `用乘法结合律简算：25 × ${n} × 4 = ______。`, 100 * n],
      ];
    case 'mixed-order':
      if (difficulty === 'hard') return [
        ['mixed-reverse-blank', `在括号里填数：（______ − ${a}）× ${b} = ${c * b}。`, a + c],
        ['mixed-combine-expr', `先算 ${a} + ${b} = ${a + b}，再算 ${a + b} × ${c}，合并成综合算式算出的得数是多少？`, (a + b) * c],
        ['mixed-two-step-div', `班级图书角有 ${a * b + c} 本书，先借出 ${c} 本，剩下的平均分给 ${b} 个小组，每组分到几本？`, `${a} 本`],
        ['mixed-compare-brackets', `计算（${a} + ${b}）× ${c} 比 ${a} + ${b} × ${c} 的得数大多少？`, a * (c - 1)],
      ];
      if (difficulty === 'medium') return [
        ['operation-order', `计算 ${n} + ${b} × ${c} 时，应先算哪一步？`, `${b} × ${c}`],
        ['mixed-with-brackets', `（${a} + ${b}）× ${c} = ______`, (a + b) * c],
        ['mixed-no-brackets', `${n} − ${b * c} ÷ ${c} = ______`, n - b],
        ['mixed-story', `每袋有 ${a} 个球，买 ${b} 袋，又单买 ${c} 个。一共有多少个球？`, a * b + c],
      ];
      return [
        ['order-same-level', `同级混合运算：${n} − ${a} + ${b} = ______`, n - a + b],
        ['order-mul-add', `乘加计算：${a} × ${b} + ${c} = ______`, a * b + c],
        ['order-div-add', `除加计算：${a * b} ÷ ${a} + ${n} = ______`, b + n],
        ['order-sub-brackets', `带括号计算：${n} −（${a} + ${b}）= ______`, n - a - b],
      ];
    case 'four-operations':
      if (difficulty === 'hard') return [
        ['nested-brackets', `[${n} −（${a} + ${b}）] × ${c} = ______`, (n - a - b) * c, 'calculation'],
        ['inverse-relationship', `用乘法与除法的关系填空：${n * b} ÷ ______ = ${n}。`, b],
        ['four-op-reverse', `已知 [${n} −（______ + ${a}）] × ${b} = ${(n - a - c) * b}，横线上应填多少？`, c],
        ['rental-boat-cost', `全班去划船，大船每条租金 ${c * 6} 元，小船每条租金 ${c * 4} 元。租 ${a} 条大船和 ${b} 条小船一共应付多少元？`, `${(a * 6 + b * 4) * c} 元`, 'word'],
      ];
      if (difficulty === 'medium') return [
        ['bracket-order', `计算 [${n} −（${a} + ${b}）] × ${c}，先算哪一步？`, `${a} + ${b}`],
        ['nested-brackets', `[${n} −（${a} + ${b}）] × ${c} = ______`, (n - a - b) * c, 'calculation'],
        ['inverse-relationship', `用乘法与除法的关系填空：${n * b} ÷ ______ = ${n}。`, b],
        ['quotient-rule', `（${n * b} + ${b * c}）÷ ${b} = ______`, n + c, 'calculation'],
        ['four-operation-story', `书架上原有 ${n + b * c} 本书，分给 ${b} 组，每组拿走 ${c} 本。之后补入 ${a} 本，书架上现在有多少本？`, n + a, 'word'],
      ];
      return [
        ['nested-brackets', `[${n} −（${a} + ${b}）] × ${c} = ______`, (n - a - b) * c, 'calculation'],
        ['inverse-relationship', `用乘法与除法的关系填空：${n * b} ÷ ______ = ${n}。`, b],
        ['add-sub-inverse', `根据加减法各部分关系，由 ${n} + ${a} = ${n + a} 可得 ${n + a} − ${n} = ______。`, a],
        ['zero-operation-rule', `有关 0 的运算：0 ÷ ${n} + ${a} × ${b} = ______。`, a * b, 'calculation'],
      ];
    case 'fraction-intro':
      if (difficulty === 'hard') return [
        ['fraction-of-quantity', `一盒糖果有 ${f * b} 颗，分给小华这盒糖果的 ${a}/${f}，小华分到多少颗？`, `${a * b} 颗`],
        ['fraction-remain-quantity', `一根绳子长 ${f * b} 米，用去了全长的 ${a}/${f}，还剩多少米？`, `${(f - a) * b} 米`],
        ['fraction-two-parts', `一本书，第一天看了全书的 ${a}/${f + c}，第二天看了全书的 ${b}/${f + c}，还剩全书的几分之几没看（保留原分母）？`, `${f + c - a - b}/${f + c}`],
        ['fraction-reverse-total', `盘子里有一些苹果，拿出它的 1/${b} 正好是 ${n} 个，盘子里原来有多少个苹果？`, `${n * b} 个`],
      ];
      if (difficulty === 'medium') return [
        ['fraction-unit', `把一块纸片平均分成 ${f} 份，其中的 ${a} 份用什么分数表示？`, `${a}/${f}`],
        ['compare-fractions', `填 >、< 或 =：${a}/${f}（　）${a + b}/${f}。`, '<'],
        ['same-denominator-add', `${a}/${f} + ${b}/${f} = ______（保留原分母）`, `${a + b}/${f}`],
        ['whole-minus-fraction', `1 − ${a}/${f} = ______（分母写 ${f}）`, `${f - a}/${f}`],
      ];
      return [
        ['fraction-read-part', `把一条长 ${b} 米的彩带平均分成 ${f + c} 份，其中的 ${a} 份占全长的几分之几？`, `${a}/${f + c}`],
        ['compare-unit-fraction', `填 >、< 或 =：1/${f + c}（　）1/${a}。`, '<'],
        ['same-denom-add-basic', `${a}/${f + c} + ${b}/${f + c} = ______（保留原分母）`, `${a + b}/${f + c}`],
        ['same-denom-sub-basic', `${a + b}/${f + c} − ${a}/${f + c} = ______（保留原分母）`, `${b}/${f + c}`],
      ];
    case 'fraction-properties':
      if (difficulty === 'hard') return [
        ['invariant-property-add', `把分数 ${a}/${f} 的分子加上 ${a * b}，要使分数的大小不变，分母应该加上多少？`, f * b],
        ['find-fraction-by-sum', `一个分数约分后是 ${fraction(a, f)}，已知原分数的分子与分母的和是 ${(a + f) * b}，原分数是多少？`, `${a * b}/${f * b}`],
        ['share-rope-ratio', `把 ${n} 米长的铁丝平均截成 ${f} 段，每段占全长的几分之几？`, `1/${f}`],
        ['max-proper-diff', `分母是 ${n} 的最大真分数与最小假分数相差多少（写最简分数）？`, `1/${n}`],
      ];
      if (difficulty === 'medium') return [
        ['simplify-fraction', `把 ${a * b}/${f * b} 约成最简分数。`, fraction(a, f)],
        ['common-denominator', `把 ${a}/${f} 通分成分母是 ${f * c} 的分数。`, `${a * c}/${f * c}`],
        ['improper-to-mixed', `把假分数 ${f * b + a}/${f} 化成带分数，整数部分是 ${b}，分数部分最简形式是多少？`, fraction(a, f)],
        ['share-rope-length', `把 ${a} 米长的绳子平均分成 ${f + c} 段，每段长多少米（用最简分数表示）？`, `${fraction(a, f + c)} 米`],
      ];
      return [
        ['frac-div-relation', `用分数表示除法算式的商：${a} ÷ ${f + c} = ______（不约分）。`, `${a}/${f + c}`],
        ['fraction-unit-name', `分数 ${a}/${n + f} 的分数单位是多少？`, `1/${n + f}`],
        ['equivalent-fractions', `${a}/${f} = ______/${f * b}。`, a * b],
        ['fraction-to-decimal', `把 ${n}/100 化成小数。`, n / 100],
      ];
    case 'fraction-addsub':
      if (difficulty === 'hard') return [
        ['frac-solve-equation', `解方程：x + 1/${f} = ${b}/${a}，x = ______（结果约成最简分数）。`, fraction(b * f - a, a * f)],
        ['frac-assoc-simplify', `用简便方法计算：${a}/${f} + 1/${c} + ${f - a}/${f} = ______（写假分数形式）。`, fraction(c + 1, c)],
        ['frac-exceed-plan', `修路队修一条路，上半月修了全长的 ${f - 1}/${f}，下半月修了全长的 ${a}/${f}，全月实际比原计划多修了全长的几分之几（写最简分数）？`, fraction(a - 1, f)],
        ['frac-three-parts-remain', `一根竹竿长 ${n} 米，第一次截去 ${a}/${f} 米，第二次截去 ${f - a}/${f} 米，还剩多少米？`, `${n - 1} 米`],
      ];
      if (difficulty === 'medium') return [
        ['unlike-add', `1/${a} + 1/${f} = ______（结果约成最简分数）`, fraction(a + f, a * f)],
        ['unlike-subtract', `1/${a} − 1/${f} = ______（结果约成最简分数）`, fraction(f - a, a * f)],
        ['fraction-sum-story', `上午读了全书的 1/${a}，下午读了全书的 1/${f}。一共读了全书的几分之几？`, fraction(a + f, a * f)],
        ['fraction-remainder', `先用去总量的 1/${a}，又用去总量的 1/${f}。还剩总量的几分之几？`, fraction(a * f - a - f, a * f)],
      ];
      return [
        ['same-denom-simplify', `同分母分数相加并约成最简分数：${a}/${2 * n} + ${b}/${2 * n} = ______。`, fraction(a + b, 2 * n)],
        ['same-denom-sub-simplify', `同分母分数相减并约成最简分数：${a + b}/${2 * n} − ${a}/${2 * n} = ______。`, fraction(b, 2 * n)],
        ['whole-minus-frac-basic', `1 − ${a}/${n} = ______（写最简分数）`, fraction(n - a, n)],
        ['same-denom-story', `一块菜地，种茄子占 ${a}/${n + f}，种黄瓜占 ${b}/${n + f}，两种菜共占这块地的几分之几（不约分）？`, `${a + b}/${n + f}`],
      ];
    case 'decimal-intro':
      if (difficulty === 'hard') return [
        ['decimal-carry-add', `一支钢笔 ${a}.${b} 元，一本笔记本 ${c}.${10 - b} 元，买这两样一共要多少元？`, `${a + c + 1} 元`],
        ['decimal-borrow-sub', `小刚带了 ${a + c + 1} 元，买文具花了 ${a}.${b} 元，还剩多少元？`, `${c}.${10 - b} 元`],
        ['decimal-rope-cut', `一根绳子长 ${n / 10} 米，第一次剪去 ${a / 10} 米，第二次剪去 ${b / 10} 米，还剩多少米？`, `${(n - a - b) / 10} 米`],
        ['decimal-diff-total', `甲筐水果重 ${n / 10} 千克，比乙筐重 ${a / 10} 千克，两筐水果一共重多少千克？`, `${(2 * n - a) / 10} 千克`],
      ];
      if (difficulty === 'medium') return [
        ['decimal-compare', `填 >、< 或 =：${n}.${b}（　）${n}.${c}。`, compare(b, c)],
        ['decimal-simple-add', `${a}.${b} + ${c}.0 = ______`, `${a + c}.${b}`],
        ['decimal-simple-sub', `${a + c}.${b} − ${c}.${b} = ______`, `${a}`],
        ['decimal-money-compare', `填 >、< 或 =：${a} 元 ${b} 角（　）${a}.${c} 元。`, compare(b, c)],
      ];
      return [
        ['decimal-place', `${n}.${b} 的十分位上是几？`, b],
        ['decimal-write', `${digits[a]}点${digits[b]}写作多少？`, `${a}.${b}`],
        ['decimal-money', `${a} 元 ${b} 角写成以元为单位的小数是多少？`, `${a}.${b} 元`],
        ['decimal-length', `${n} 分米写成以米为单位的小数是多少米？`, `${n / 10} 米`],
      ];
    case 'decimal-properties':
      if (difficulty === 'hard') return [
        ['shift-diff-find', `把一个小数的小数点向右移动一位后，得到的新数比原数大 ${((a * 10 + b) * 9) / 10}。原来的小数是多少？`, `${a}.${b}`],
        ['unit-convert-decimal', `高级单位换算：${a} 千克 ${b * 100 + c * 10} 克 = ______ 千克（填小数）。`, `${a}.${b}${c}`],
        ['approx-max-two-dec', `一个两位小数“四舍五入”保留一位小数后是 ${n}.${b}，这个两位小数最大是多少？`, `${n}.${b}4`],
        ['approx-min-two-dec', `一个两位小数“四舍五入”保留一位小数后是 ${n}.${b}，这个两位小数最小是多少？`, `${n}.${b - 1}5`],
      ];
      if (difficulty === 'medium') return [
        ['decimal-hundredth', `小数 ${n}.${b}${c} 的百分位上的数字是几？`, c],
        ['shift-right', `把 ${a}.${b}${c} 的小数点向右移动两位，得到的数是多少？`, a * 100 + b * 10 + c],
        ['shift-left', `把 ${n} 缩小到原来的 1/10，结果是多少？`, n / 10],
        ['round-tenth', `把 ${a}.${b}${c} 保留一位小数（四舍五入），近似数是多少？`, (Math.round((a * 100 + b * 10 + c) / 10) / 10).toFixed(1)],
      ];
      return [
        ['decimal-place', `${a}.${b}${c} 的十分位上是几？`, b],
        ['decimal-compare', `填 >、< 或 =：${n}.${b}（　）${n}.${c}。`, compare(b, c)],
        ['decimal-write', `${digits[a]}点${digits[b]}${digits[c]}写作多少？`, `${a}.${b}${c}`],
        ['trailing-zero', `化简小数 ${n}.${b}${c}00。`, `${n}.${b}${c}`],
      ];
    case 'decimal-addsub':
      if (difficulty === 'hard') return [
        ['decimal-coupon-story', `书店满 ${a + c} 元减 ${Math.min(b, a + c - 1)} 元。小华买了一本 ${a}.${b} 元和一本 ${c}.${10 - b} 元的书，优惠后应付多少元？`, `${a + c + 1 - Math.min(b, a + c - 1)} 元`],
        ['decimal-mistake-recover', `小马虎计算小数加法时，把一个加数 ${a}.${b} 看成了 ${a + c}.${b}，算得结果是 ${n + c}.${b}。正确结果是多少？`, `${n}.${b}`],
        ['decimal-tare-weight', `一筐苹果连筐共重 ${a + 2 * b}.8 千克，卖出一半苹果后，连筐重 ${a + b}.4 千克。空筐重多少千克？`, `${a} 千克`],
        ['decimal-shared-overlap', `两根木条分别长 ${n / 10} 米和 ${m / 10} 米，接在一起后接头重叠部分长 ${a / 10} 米。接好后的木条总长多少米？`, `${(n + m - a) / 10} 米`],
      ];
      if (difficulty === 'medium') return [
        ['int-minus-decimal', `计算整数减小数：${a + b} − ${a}.${c} = ______`, (b * 10 - c) / 10],
        ['decimal-missing-addend', `填空：${a}.${b} + ______ = ${a + c}.${b}`, c],
        ['decimal-pair-sum', `简算：${a}.${b} + ${n / 10} + ${c}.${10 - b} = ______`, Number((a + c + 1 + n / 10).toFixed(1))],
        ['decimal-two-step-story', `买菜花去 ${a}.${b} 元，买水果花去 ${c}.${10 - b} 元，付给收银员 ${a + c + 1 + b} 元，应找回多少元？`, `${b} 元`],
      ];
      return [
        ['decimal-add', `${n / 10} + ${m / 100} = ______`, (n * 10 + m) / 100],
        ['decimal-subtract', `${n / 10} − ${m / 100} = ______`, (n * 10 - m) / 100],
        ['decimal-sum-story', `一支笔 ${n / 10} 元，一块橡皮 ${m / 100} 元，合计多少元？`, `${(n * 10 + m) / 100} 元`],
        ['decimal-change', `有 ${n / 10} 元，用去 ${m / 100} 元，还剩多少元？`, `${(n * 10 - m) / 100} 元`],
      ];
    case 'fraction-division':
      if (difficulty === 'hard') return [
        ['frac-known-more', `果园里有桃树 ${f * b} 棵，比梨树多 1/${f - 1}。果园里有梨树多少棵？`, `${(f - 1) * b} 棵`],
        ['frac-known-less', `一件上衣现价 ${(f - 1) * b} 元，比原价降低了 1/${f}。这件上衣原价多少元？`, `${f * b} 元`],
        ['frac-work-together', `第 ${n} 号工程，甲队独做 ${a * (a + 1)} 天完成，乙队独做 ${a + 1} 天完成。两队合做多少天可以完成？`, `${a} 天`],
        ['frac-sum-ratio-find', `甲、乙两数的和是 ${(a + f) * b}，其中甲数是乙数的 ${a}/${f}。乙数是多少？`, f * b],
      ];
      if (difficulty === 'medium') return [
        ['frac-div-frac', `${a}/${f} ÷ ${b}/${f} = ______（写最简分数）`, fraction(a, b)],
        ['fraction-original', `一条绳子的 ${a}/${f} 长 ${a * b} 米，全长多少米？`, `${f * b} 米`],
        ['frac-speed-problem', `小敏 ${a}/${f} 小时走了 ${a * b} 千米，她平均每小时走多少千米？`, `${f * b} 千米`],
        ['frac-solve-eq', `解方程：${a}/${f} x = ${a * c}，x = ______。`, f * c],
      ];
      return [
        ['reciprocal-find', `写出分数 ${a}/${f + c} 的倒数。`, fraction(f + c, a)],
        ['fraction-divide', `1/${a} ÷ ${b} = ______`, fraction(1, a * b)],
        ['divide-by-fraction', `${n} ÷ 1/${b} = ______`, n * b],
        ['fraction-division-story', `${n} 米彩带，每 1/${b} 米剪一段，可剪几段？`, n * b],
      ];
    case 'optimize':
      if (difficulty === 'hard') return [
        ['three-queue-min-wait', `三人排队接水，甲需 ${a} 分钟，乙需 ${a + b} 分钟，丙需 ${n} 分钟。只有一个水龙头，三人等待（含接水）时间的总和最少是多少分钟？`, `${3 * a + 2 * (a + b) + n} 分钟`],
        ['general-pancake-time', `一口锅每次最多烙 2 张饼，两面都要烙，每面需 ${b} 分钟。烙熟 ${n} 张饼最少需要多少分钟？`, `${n * b} 分钟`],
        ['tianji-card-strategy', `三局两胜扑克赛：对方出牌点数依次为 ${n}、${n - 2}、${n - 4}，我方手牌为 ${n - 1}、${n - 3}、${n - 5}。我方用最小牌 ${n - 5} 对阵对方最大牌 ${n}，其余两局我方能赢几局？`, '2 局'],
        ['multi-parallel-tea', `洗水壶 ${a} 分钟，烧开水 ${n} 分钟，烧水时可同时洗茶杯 ${b} 分钟和拿茶叶 ${c} 分钟（${b + c} < ${n}），最后沏茶 1 分钟。最少多少分钟能喝上茶？`, `${a + n + 1} 分钟`],
      ];
      if (difficulty === 'medium') return [
        ['prerequisite', `等水烧开要 ${n} 分钟，烧好后泡茶要 ${a} 分钟。洗杯子要 ${b} 分钟，可以在烧水时洗。最少要多少分钟？`, n + a],
        ['batch-capacity', `一口锅每轮最多煎 ${a} 张饼，一轮需 ${b} 分钟。煎熟 ${a * 2 + 1} 张饼至少要多少分钟？`, 3 * b],
        ['two-queue-wait', `甲打水要 ${a} 分钟，乙打水要 ${n} 分钟，只有 1 个水龙头。两人等待（含打水）时间的总和最少是多少分钟？`, `${2 * a + n} 分钟`],
        ['odd-pancakes', `平底锅每次最多烙 2 张饼，两面都要烙，每面 ${b} 分钟。烙熟 ${2 * a + 1} 张饼最少要多少分钟？`, `${(2 * a + 1) * b} 分钟`],
      ];
      return [
        ['parallel-tasks', `烧水要 ${n} 分钟，洗杯子要 ${b} 分钟，两件事可以同时做，最少要多少分钟？`, n],
        ['shorter-first', `两人等用同一台打印机，甲要用 ${n} 分钟、乙要用 ${b} 分钟。要让两人等待时间的和最短，谁先用？`, '乙'],
        ['even-pancakes', `一口平底锅每次最多烙 2 张饼，两面都要烙，每面 ${b} 分钟。烙熟 ${2 * a} 张饼最少需要多少分钟？`, `${2 * a * b} 分钟`],
        ['flow-sum', `淘米要 ${a} 分钟，电饭煲煮饭要 ${n} 分钟，煮饭时可同时洗菜 ${b} 分钟。做好这些事最少要多少分钟？`, `${a + n} 分钟`],
      ];
    case 'possibility': {
      const color = pick(['蓝', '绿', '黄', '黑']);
      if (difficulty === 'hard') return [
        ['balance-balls-for-fair', `袋里有 ${n} 个红球和 ${a} 个白球，要使任意摸出一个球是红球和白球的可能性相等，需要再放入多少个白球？`, `${n - a} 个`],
        ['min-draws-guarantee', `盒子里有 ${n} 个红球和 ${b} 个黄球，闭上眼睛至少要摸出多少个球，才能保证一定摸到红球？`, `${b + 1} 个`],
        ['fair-spinner-adjust', `转盘平均分成 ${2 * n} 格，其中红色 ${n + a} 格，蓝色 ${n - a} 格。要使指针停在红、蓝两色的可能性相等，应把几格红色改成蓝色？`, `${a} 格`],
        ['odd-even-card-game', `桌上有数字卡片 ${2 * a - 1}、${2 * b - 1}、${2 * n} 共 3 张，任意抽一张，抽到奇数甲赢，抽到偶数乙赢。谁赢的可能性大？`, '甲'],
      ];
      if (difficulty === 'medium') return [
        ['least-likely', `盒子里有 ${n} 个红球、${a + b} 个黄球和 ${a} 个蓝球，任意摸出一个，摸到哪种颜色球的可能性最小？`, '蓝色'],
        ['count-outcomes', `袋子里有 ${n} 种不同颜色的球各若干个，任意摸出一个球，按颜色分有多少种可能的结果？`, `${n} 种`],
        ['infer-most-color', `盒子里有红球和黄球共 ${n} 个，每次摸出一个记录后放回，共摸 30 次，其中红球 ${20 + a} 次、黄球 ${10 - a} 次。盒子里哪种颜色的球可能更多？`, '红球'],
        ['card-parity-likely', `从写有 1 到 ${2 * n + 1} 的数字卡片中任意抽出一张，抽到奇数还是抽到偶数的可能性更大？`, '奇数'],
      ];
      return [
        ['certain', `袋里只有 ${n} 个白球，任意摸出一个，摸到白球是一定、可能还是不可能？`, '一定'],
        ['impossible', `袋里有 ${a} 个红球和 ${b} 个白球，任意摸出一个，可能摸到蓝球吗？`, '不可能'],
        ['more-likely', `袋里有 ${a + b} 个红球和 ${b} 个白球，任意摸一个，哪种颜色更容易摸到？`, '红色'],
        ['equally-likely', `袋里红球和${color}球各有 ${n} 个，任意摸一个，摸到这两种颜色的可能性相同吗？`, '相同'],
      ];
    }
    case 'counterfeit':
      if (difficulty === 'hard') return [
        ['max-items-for-k-weighs', `已知次品比正品略轻，用无砝码天平称 ${(b % 4) + 2} 次（第 ${n} 批），最多可以从多少个物品中保证找出这件次品？`, 3 ** ((b % 4) + 2)],
        ['find-weighs-from-count', `有 ${10 + n} 个外观相同的零件，已知有 1 个次品偏轻，用天平至少称几次一定能找出次品？`, 10 + n <= 27 ? 3 : 10 + n <= 81 ? 4 : 5],
        ['first-weigh-remaining', `有 ${3 * n + 2} 个零件（1 个偏轻），第一次按（${n + 1}，${n + 1}，${n}）分成三组称前两组，若天平不平衡，接下来还在几个零件中继续找？`, n + 1],
        ['second-weigh-count', `有 ${3 * n + 1} 个零件（1 个偏重），第一次按（${n}，${n}，${n + 1}）称前两组且天平平衡；第二次把剩下的 ${n + 1} 个零件再最优分成三份，最多的一份有几个？`, Math.ceil((n + 1) / 3)],
      ];
      if (difficulty === 'medium') return [
        ['identify-suspects', `将编号 1 到 ${3 * b} 的物品（第 ${n} 组）依次分成三份，每份 ${b} 件。已知有一件偏轻，称第一、二份时第二份较轻。哪些编号仍可能是次品？`, `${b + 1} 至 ${2 * b}`],
        ['minimum-weighings', `有 ${3 ** Math.min(a, 3)} 个外表相同的零件（批次 ${n}），只有一个偏轻，用天平最坏情况下要称几次才能找到？`, Math.min(a, 3)],
        ['optimal-partition', `有 ${3 * n + 1} 个零件，其中 1 个偏重。第一次按最优策略分成 3 份，最多的一份有几个零件？`, n + 1],
        ['lighter-or-heavier', `天平左盘放 ${n} 号球，右盘放 ${n + 1} 号球，已知其中一个是偏重的次品。若左盘下沉，次品是几号球？`, n],
      ];
      return [
        ['weigh-once', `编号 ${n}、${n + 1}、${n + 2} 的三袋物品中有一袋偏轻。用天平称前两袋，${a % 2 ? '天平平衡' : '第一袋较轻'}。哪一袋偏轻？`, a % 2 ? n + 2 : n],
        ['divide-into-three', `有 ${3 * n} 袋物品，只有一袋偏轻。先平均分成三组比较，每组几袋？`, n],
        ['two-items-weigh', `有 ${n} 号和 ${n + 1} 号两枚硬币，其中一枚偏轻，用天平至少称几次一定能找出次品？`, 1],
        ['balance-equal-group', `把 ${2 * n + 1} 个零件分成（${n}，${n}，1）三组，称前两组时天平平衡，次品在第几组？`, 3],
      ];
    case 'number-shape': {
      const side = int(2, difficulty === 'easy' ? 13 : 22);
      if (difficulty === 'hard') return [
        ['table-seating-forward', `1 张方桌坐 4 人，2 张方桌拼成一排坐 6 人，3 张拼成一排坐 8 人……${n} 张方桌拼成一排一共可以坐多少人？`, 2 * n + 2],
        ['table-seating-reverse', `按“1 张方桌坐 4 人，每多拼 1 张多坐 2 人”的规律，要坐下 ${2 * n + 2} 人，需要把多少张方桌拼成一排？`, n],
        ['pythagorean-square-diff', `利用数形结合计算平方差：${n + a}² − ${n}² = ______。`, (2 * n + a) * a],
        ['hollow-frame-dots', `一个实心方阵每边有 ${n + a} 个点，拿走中心 ${n} 行 ${n} 列的点后，外圈还剩多少个点？`, (2 * n + a) * a],
      ];
      if (difficulty === 'medium') return [
        ['square-border', `把 ${side} 行 ${side} 列的方阵扩成 ${side + 1} 行 ${side + 1} 列，要增加多少个点？`, 2 * side + 1],
        ['odd-sum', `从第 ${a} 个奇数到第 ${a + b - 1} 个奇数（首尾都算）相加，和是多少？`, (a + b - 1) ** 2 - (a - 1) ** 2],
        ['connected-triangles', `用火柴棒连着摆一排三角形，摆 1 个用 3 根，摆 2 个用 5 根……摆 ${n} 个这样的三角形需要多少根火柴棒？`, 2 * n + 1],
        ['connected-squares', `用小棒连着摆一排正方形，摆 1 个用 4 根，摆 2 个用 7 根……摆 ${n} 个这样的正方形需要多少根小棒？`, 3 * n + 1],
      ];
      return [
        ['square-dot-total', `第 1 层有 1 个点。每添一层依次增加 3、5、7……个点。添到第 ${n} 层共有多少个点？`, n * n],
        ['square-dot-side', `用 ${n * n} 个点刚好排成实心正方形，每行有几个点？`, n],
        ['first-n-odd-sum', `从 1 开始的连续 ${n} 个奇数相加（1 + 3 + 5 + …），和是多少？`, n * n],
        ['triangle-matchsticks', `用火柴棒摆独立三角形，摆 1 个用 3 根，摆 ${n} 个独立三角形一共要用多少根？`, 3 * n],
      ];
    }
    case 'proportion':
      if (difficulty === 'hard') return [
        ['scale-area-expand', `把一个长 ${n} 厘米、宽 ${a} 厘米的长方形按 ${b}∶1 放大后，新长方形的面积是多少平方厘米？`, `${n * a * b * b} 平方厘米`],
        ['shadow-height-prop', `同一时刻同一地点，高 ${a} 米的竹竿影长 ${b} 米；旁边一棵大树的影长是 ${b * c} 米，这棵大树高多少米？`, `${a * c} 米`],
        ['paving-tiles-inverse', `给教室铺地，用面积为 ${a} 平方分米的方砖需要 ${b * c * 10} 块；如果改用面积为 ${a * b} 平方分米的方砖，需要多少块？`, `${c * 10} 块`],
        ['gear-teeth-inverse', `相互咬合的两个齿轮，大齿轮有 ${a * c} 个齿，每分钟转 ${b * 10} 圈；小齿轮有 ${a} 个齿，每分钟转多少圈？`, `${b * c * 10} 圈`],
      ];
      if (difficulty === 'medium') return [
        ['solve-proportion', `解比例：x∶${a} = ${b * c}∶${c}。`, a * b],
        ['map-scale', `比例尺 1∶${b * 1000} 的图上量得 ${a} 厘米，实际距离多少米？`, `${a * b * 10} 米`],
        ['find-other-outer', `在一个比例里，两个内项的积是 ${a * n}，其中一个外项是 ${a}，另一个外项是多少？`, n],
        ['scale-find-map', `实际距离是 ${a * b * 10} 米，画在比例尺是 1∶${b * 1000} 的地图上，图上距离是多少厘米？`, `${a} 厘米`],
      ];
      return [
        ['proportion-check', `${a}∶${b} 和 ${a * c}∶${b * c + (a % 2)} 能组成比例吗（第 ${n} 题）？`, a % 2 ? '不能' : '能'],
        ['outer-inner-product', `在一个比例中，两个内项分别是 ${a} 和 ${n}，则两个外项的积是多少？`, a * n],
        ['direct-proportion', `每本练习本 ${n} 元。买 ${b} 本和买 ${c} 本时，总价与本数成正比例还是反比例？`, '正比例'],
        ['inverse-proportion', `同一段路以每小时 ${n} 千米的速度走需 ${b} 小时。路程一定时，速度和时间成什么比例？`, '反比例'],
      ];
    case 'factors':
      if (difficulty === 'hard') return [
        ['common-factor', `写出 ${a} 和 ${a * b} 的所有公因数（从小到大）。`, Array.from({ length: a }, (_, i) => i + 1).filter(i => a % i === 0).join('、')],
        ['multiple-two-five', `写出大于 ${(a + b) * 10} 且小于 ${(a + b) * 10 + 30}，同时是 2 和 5 的倍数的所有数。`, `${(a + b) * 10 + 10}、${(a + b) * 10 + 20}`],
        ['factor-multiple', `一个数既是 ${a * b} 的因数，又是 ${a} 的倍数。请写出所有这样的数（从小到大）。`, Array.from({ length: b }, (_, i) => (i + 1) * a).filter(i => a * b % i === 0).join('、')],
        ['divisibility-digit', `在 ${a}${b}□ 中填一个数字，使这个三位数同时是 2 和 3 的倍数。写出所有符合条件的数字。`, Array.from({ length: 10 }, (_, i) => i).filter(i => (a * 100 + b * 10 + i) % 6 === 0).join('、')],
      ];
      if (difficulty === 'medium') return [
        ['list-factors', `写出 ${a * b} 的所有因数（从小到大）。`, Array.from({ length: a * b }, (_, i) => i + 1).filter(i => a * b % i === 0).join('、')],
        ['identify-multiple', `${a * b + 1} 是 ${a} 的倍数吗？`, '不是'],
        ['prime-or-composite', `${a % 2 ? a * b : pick([11, 13, 17, 19])} 是质数还是合数？`, a % 2 ? '合数' : '质数'],
        ['divisibility', `${n} 同时是 2 和 5 的倍数吗？`, '不是'],
      ];
      return [
      ['factor-pair', `${a} × ${b} = ${a * b}，${a} 是 ${a * b} 的因数吗？`, '是'],
      ['multiple-basic', `${a} × ${b} = ${a * b}，${a * b} 是 ${a} 的倍数吗？`, '是'],
      ['even-odd', `${n} 是奇数还是偶数？`, n % 2 ? '奇数' : '偶数'],
      ['multiple-five', `${a * 10 + b * 5} 是 5 的倍数吗？`, '是'],
    ];
    default: return [];
  }
}

function fraction(a, b) {
  let x = a, y = b;
  while (y) [x, y] = [y, x % y];
  return b === x ? String(a / x) : `${a / x}/${b / x}`;
}

const numberKinds = ['number-20', 'number-100', 'number-10000', 'large-number'];
const boundedKinds = [
  'sum-5', 'sum-10', 'sum-100', 'sum-100-oral', 'sum-100-column', 'sum-10000-oral', 'sum-10000-column', 'carry-20', 'borrow-20',
  'table-times-1', 'table-times-2', 'multi-times-one', 'two-times-two', 'three-times-two',
  'divide-table-1', 'divide-table-2', 'divide-one', 'divide-two', 'divide-remainder',
];
const conceptKinds = [
  'times-as-many', 'calendar', 'operation-laws', 'mixed-order', 'four-operations', 'fraction-intro', 'fraction-properties', 'fraction-addsub',
  'decimal-intro', 'decimal-properties', 'decimal-addsub', 'fraction-division',
  'optimize', 'possibility', 'counterfeit', 'number-shape', 'proportion', 'factors',
];

function scopeProblems(difficulty, count, { plugin }) {
  const tasksFor = numberKinds.includes(plugin) ? numberTasks : boundedKinds.includes(plugin) ? boundedTasks : conceptTasks;
  const items = [];
  const seen = new Set();
  for (let attempt = 0; items.length < count && attempt < count * 80; attempt++) {
    const tasks = tasksFor(plugin, difficulty);
    const [skill, question, answer, kind] = tasks[items.length % tasks.length];
    if (seen.has(question)) continue;
    seen.add(question);
    const responseKind = kind || (skill === 'apply' || skill.endsWith('-story') ? 'word'
      : skill.startsWith('compare-') || skill.endsWith('-compare') ? 'comparison'
      : question.includes('______') ? 'blank' : 'short');
    items.push({ question, answer: String(answer), subtype: `unit-${plugin}`, subtemplateId: skill, format: 'practice', responseKind });
  }
  return items;
}

export const SCOPE_PLUGINS = Object.fromEntries([...numberKinds, ...boundedKinds, ...conceptKinds].map(kind => [kind, scopeProblems]));
