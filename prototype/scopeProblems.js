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
    'number-10000': difficulty === 'easy' ? [100, 999] : [1000, 10000],
    'large-number': difficulty === 'easy' ? [10001, 999999] : [1000000, 99999999],
  };
  const [min, max] = ranges[kind];
  const a = int(min, max), b = int(min, max);
  const units = String(a).split('').reverse().map((d, i) => [Number(d), i]).filter(([d]) => d);
  const [value, place] = pick(units);
  const parts = units.slice().reverse().map(([d, i]) => `${d}个${i === 0 ? '一' : places[i]}`).join('、');
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
  } else {
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
    a = int(aMin, difficulty === 'easy' && aMax >= 99 ? Math.min(aMin * 2, aMax) : aMax);
    b = int(bMin, bMax);
    operation = '×';
    result = a * b;
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
        const hundreds = difficulty !== 'easy' && int(0, 1);
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
      return [
        ['month-days', `${year} 年 ${month} 月有多少天？`, days],
        ['year-type', `${year} 年是平年还是闰年？`, leap ? '闰年' : '平年'],
        ['year-days', `${year} 年全年有多少天？`, leap ? 366 : 365],
        ['date-rollover', `${year} 年 ${month} 月 ${days} 日的第二天是几月几日？`, `${month % 12 + 1} 月 1 日`],
        ['clock-24h', `把下午 ${a} 时 ${minute} 分写成 24 时计时法的形式。`, `${a + 12} 时 ${minute} 分`],
      ];
    }
    case 'operation-laws': return [
      ['commutative', `用乘法交换律填空：${n} × ${b} = ______ × ${n}。`, b],
      ['associative', `用加法结合律计算：${100 - n} + ${m} + ${n} = ______。`, 100 + m],
      ['distributive', `用乘法分配律填空：${a} ×（${b} + ${c}）= ${a} × ${b} + ${a} × ______。`, c],
      ['simplify-product', `用乘法结合律简算：25 × ${n} × 4 = ______。`, 100 * n],
    ];
    case 'mixed-order': return [
      ['operation-order', `计算 ${n} + ${b} × ${c} 时，应先算哪一步？`, `${b} × ${c}`],
      ['mixed-with-brackets', `（${a} + ${b}）× ${c} = ______`, (a + b) * c],
      ['mixed-no-brackets', `${n} − ${b * c} ÷ ${c} = ______`, n - b],
      ['mixed-story', `每袋有 ${a} 个球，买 ${b} 袋，又单买 ${c} 个。一共有多少个球？`, a * b + c],
    ];
    case 'four-operations': return [
      ['bracket-order', `计算 [${n} −（${a} + ${b}）] × ${c}，先算哪一步？`, `${a} + ${b}`],
      ['nested-brackets', `[${n} −（${a} + ${b}）] × ${c} = ______`, (n - a - b) * c, 'calculation'],
      ['inverse-relationship', `用乘法与除法的关系填空：${n * b} ÷ ______ = ${n}。`, b],
      ['quotient-rule', `（${n * b} + ${b * c}）÷ ${b} = ______`, n + c, 'calculation'],
      ['four-operation-story', `书架上原有 ${n + b * c} 本书，分给 ${b} 组，每组拿走 ${c} 本。之后补入 ${a} 本，书架上现在有多少本？`, n + a, 'word'],
    ];
    case 'fraction-intro': return [
      ['fraction-unit', `把一块纸片平均分成 ${f} 份，其中的 ${a} 份用什么分数表示？`, `${a}/${f}`],
      ['compare-fractions', `填 >、< 或 =：${a}/${f}（　）${a + b}/${f}。`, '<'],
      ['same-denominator-add', `${a}/${f} + ${b}/${f} = ______（保留原分母）`, `${a + b}/${f}`],
      ['whole-minus-fraction', `1 − ${a}/${f} = ______（分母写 ${f}）`, `${f - a}/${f}`],
    ];
    case 'fraction-properties': return [
      ['equivalent-fractions', `${a}/${f} = ______/${f * b}。`, a * b],
      ['simplify-fraction', `把 ${a * b}/${f * b} 约成最简分数。`, fraction(a, f)],
      ['common-denominator', `把 ${a}/${f} 通分成分母是 ${f * c} 的分数。`, `${a * c}/${f * c}`],
      ['fraction-to-decimal', `把 ${n}/100 化成小数。`, n / 100],
    ];
    case 'fraction-addsub': return [
      ['unlike-add', `1/${a} + 1/${f} = ______（结果约成最简分数）`, fraction(a + f, a * f)],
      ['unlike-subtract', `1/${a} − 1/${f} = ______（结果约成最简分数）`, fraction(f - a, a * f)],
      ['fraction-sum-story', `上午读了全书的 1/${a}，下午读了全书的 1/${f}。一共读了全书的几分之几？`, fraction(a + f, a * f)],
      ['fraction-remainder', `先用去总量的 1/${a}，又用去总量的 1/${f}。还剩总量的几分之几？`, fraction(a * f - a - f, a * f)],
    ];
    case 'decimal-intro': case 'decimal-properties': return [
      ['decimal-place', `${a}.${b}${kind === 'decimal-properties' ? c : ''} 的十分位上是几？`, b],
      ['decimal-compare', `填 >、< 或 =：${a}.${b}（　）${a}.${c}。`, compare(b, c)],
      ['decimal-write', `${digits[a]}点${digits[b]}${kind === 'decimal-properties' ? digits[c] : ''}写作多少？`, kind === 'decimal-properties' ? `${a}.${b}${c}` : `${a}.${b}`],
      kind === 'decimal-properties'
        ? ['trailing-zero', `化简小数 ${a}.${b}${c}00。`, `${a}.${b}${c}`]
        : ['decimal-money', `${a} 元 ${b} 角写成以元为单位的小数是多少？`, `${a}.${b} 元`],
    ];
    case 'decimal-addsub': return [
      ['decimal-add', `${n / 10} + ${m / 100} = ______`, (n * 10 + m) / 100],
      ['decimal-subtract', `${n / 10} − ${m / 100} = ______`, (n * 10 - m) / 100],
      ['decimal-sum-story', `一支笔 ${n / 10} 元，一块橡皮 ${m / 100} 元，合计多少元？`, `${(n * 10 + m) / 100} 元`],
      ['decimal-change', `有 ${n / 10} 元，用去 ${m / 100} 元，还剩多少元？`, `${(n * 10 - m) / 100} 元`],
    ];
    case 'fraction-division': return [
      ['fraction-divide', `1/${a} ÷ ${b} = ______`, fraction(1, a * b)],
      ['divide-by-fraction', `${a} ÷ 1/${b} = ______`, a * b],
      ['fraction-division-story', `${a} 米彩带，每 1/${b} 米剪一段，可剪几段？`, a * b],
      ['fraction-original', `一条绳子的 1/${b} 长 ${a} 米，全长多少米？`, `${a * b} 米`],
    ];
    case 'optimize': return [
      ['parallel-tasks', `烧水要 ${n} 分钟，洗杯子要 ${b} 分钟，两件事可以同时做，最少要多少分钟？`, n],
      ['prerequisite', `等水烧开要 ${n} 分钟，烧好后泡茶要 ${a} 分钟。洗杯子要 ${b} 分钟，可以在烧水时洗。最少要多少分钟？`, n + a],
      ['batch-capacity', `一口锅每轮最多煎 ${a} 张饼，一轮需 ${b} 分钟。煎熟 ${a * 2 + 1} 张饼至少要多少分钟？`, 3 * b],
      ['shorter-first', `两人等用同一台打印机，甲要用 ${n} 分钟、乙要用 ${b} 分钟。要让两人等待时间的和最短，谁先用？`, '乙'],
    ];
    case 'possibility': {
      const color = pick(['蓝', '绿', '黄', '黑']);
      return [
      ['certain', `袋里只有 ${n} 个白球，任意摸出一个，摸到白球是一定、可能还是不可能？`, '一定'],
      ['impossible', `袋里有 ${a} 个红球和 ${b} 个白球，任意摸出一个，可能摸到蓝球吗？`, '不可能'],
      ['more-likely', `袋里有 ${a + b} 个红球和 ${b} 个白球，任意摸一个，哪种颜色更容易摸到？`, '红色'],
      ['equally-likely', `袋里红球和${color}球各有 ${a} 个，任意摸一个，摸到这两种颜色的可能性相同吗？`, '相同'],
      ];
    }
    case 'counterfeit': return [
      ['weigh-once', `编号 ${n}、${n + 1}、${n + 2} 的三袋物品中有一袋偏轻。用天平称前两袋，${a % 2 ? '天平平衡' : '第一袋较轻'}。哪一袋偏轻？`, a % 2 ? n + 2 : n],
      ['divide-into-three', `有 ${3 * n} 袋物品，只有一袋偏轻。先平均分成三组比较，每组几袋？`, n],
      ['identify-suspects', `将编号 1 到 ${3 * b} 的物品依次分成三组，每组 ${b} 件。已知有一件偏轻。称第一、二组时，第二组较轻。哪些编号仍可能是次品？`, `${b + 1} 至 ${2 * b}`],
      ['minimum-weighings', `有 ${3 ** Math.min(a, 3)} 个外表相同的零件，只有一个偏轻，用天平每次把候选零件均分成三组，最坏情况下要称几次才能找到？`, Math.min(a, 3)],
    ];
    case 'number-shape': {
      const side = int(2, difficulty === 'easy' ? 13 : 22);
      return [
        ['square-dot-total', `第 1 层有 1 个点。每添一层依次增加 3、5、7……个点。添到第 ${side} 层共有多少个点？`, side * side],
        ['square-border', `把 ${side} 行 ${side} 列的方阵扩成 ${side + 1} 行 ${side + 1} 列，要增加多少个点？`, 2 * side + 1],
        ['square-dot-side', `用 ${side * side} 个点刚好排成实心正方形，每行有几个点？`, side],
        ['odd-sum', `从第 ${a} 个奇数到第 ${a + b - 1} 个奇数（首尾都算）相加，和是多少？`, (a + b - 1) ** 2 - (a - 1) ** 2],
      ];
    }
    case 'proportion': return [
      ['solve-proportion', `解比例：x∶${a} = ${b * c}∶${c}。`, a * b],
      ['proportion-check', `${a}∶${b} 和 ${a * c}∶${b * c + (a % 2)} 能组成比例吗？`, a % 2 ? '不能' : '能'],
      ['direct-proportion', `每本练习本 ${a} 元。买 ${b} 本和买 ${c} 本时，总价与本数成正比例还是反比例？`, '正比例'],
      ['inverse-proportion', `同一段路以每小时 ${a} 千米的速度走需 ${b} 小时。若速度变为原来的 ${c} 倍，速度和时间成什么比例？`, '反比例'],
      ['map-scale', `比例尺 1∶${b * 1000} 的图上量得 ${a} 厘米，实际距离多少米？`, `${a * b * 10} 米`],
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
