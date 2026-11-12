import { SCOPE_PLUGINS } from './scopeProblems.js';
import { UNIT_PLUGINS } from './unitPlugins.js';

export const DAILY_RANGES = [
  // 1年级 口算
  { id: 'sum-10', name: '10以内加减法', grade: 1, mode: 'oral', maxCount: 20 },
  { id: 'carry-20', name: '20以内进位加法', grade: 1, mode: 'oral', maxCount: 20 },
  { id: 'borrow-20', name: '20以内退位减法', grade: 1, mode: 'oral', maxCount: 20 },
  { id: 'sum-100-oral', name: '100以内口算加减法', grade: 1, mode: 'oral' },

  // 2年级 口算与竖式
  { id: 'table-times-2', name: '表内乘法', grade: 2, mode: 'oral' },
  { id: 'divide-table-1', name: '表内除法（2～6口诀）', grade: 2, mode: 'oral', maxCount: 20 },
  { id: 'divide-table-2', name: '表内除法（7～9口诀）', grade: 2, mode: 'oral', maxCount: 20 },
  { id: 'sum-100-column', name: '两位数加减法', grade: 2, mode: 'vertical' },

  // 3年级 口算与竖式
  { id: 'round-times-div', name: '整十整百数乘除法', grade: 3, mode: 'oral' },
  { id: 'sum-10000-oral', name: '万以内加减法口算', grade: 3, mode: 'oral' },
  { id: 'sum-10000-column', name: '三位数加减法', grade: 3, mode: 'vertical' },
  { id: 'multi-times-one', name: '多位数乘一位数', grade: 3, mode: 'vertical' },
  { id: 'two-times-two', name: '两位数乘两位数', grade: 3, mode: 'vertical' },
  { id: 'divide-one', name: '除数是一位数的除法', grade: 3, mode: 'vertical' },

  // 4年级 口算与竖式
  { id: 'two-times-one-oral', name: '两位数乘一位数口算', grade: 4, mode: 'oral' },
  { id: 'dec-addsub-oral', name: '小数加减法口算', grade: 4, mode: 'oral' },
  { id: 'three-times-two', name: '三位数乘两位数', grade: 4, mode: 'vertical' },
  { id: 'divide-two', name: '除数是两位数的除法', grade: 4, mode: 'vertical' },
  { id: 'dec-addsub', name: '小数加减法', grade: 4, mode: 'vertical' },

  // 5年级 口算与竖式
  { id: 'dec-muldiv-oral', name: '小数乘除法口算', grade: 5, mode: 'oral' },
  { id: 'dec-mul', name: '小数乘法', grade: 5, mode: 'vertical' },
  { id: 'dec-div', name: '小数除法', grade: 5, mode: 'vertical' },

  // 6年级 口算与竖式
  { id: 'percent-oral', name: '百分数与小数速算', grade: 6, mode: 'oral' },
  { id: 'pi-multiply', name: '圆周率倍数竖式计算', grade: 6, mode: 'vertical' },
];

function ri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function roundTo(val, decimals = 4) {
  const p = 10 ** decimals;
  return Math.round(val * p) / p;
}

function buildProblem(a, b, op, mode, rangeId, difficulty) {
  const first = String(a);
  const second = String(b);
  let expected;
  if (op === '+') expected = roundTo(Number(a) + Number(b));
  else if (op === '−') expected = roundTo(Number(a) - Number(b));
  else if (op === '×') expected = roundTo(Number(a) * Number(b));
  else if (op === '÷') expected = roundTo(Number(a) / Number(b));
  return {
    question: `${first} ${op} ${second} = ______`,
    answer: String(expected),
    type: 'arithmetic',
    format: mode === 'vertical' ? 'vertical' : 'arithmetic',
    payload: { operands: [first, second], operation: op },
    subtype: `daily-${rangeId}`,
    subtemplateId: difficulty,
  };
}

function generateByLoop(difficulty, count, mode, rangeId, makeOne) {
  const paper = [];
  const seen = new Set();
  let guard = 0;
  while (paper.length < count && guard < count * 200) {
    guard++;
    const [a, b, op] = makeOne(difficulty);
    const item = buildProblem(a, b, op, mode, rangeId, difficulty);
    if (seen.has(item.question)) continue;
    seen.add(item.question);
    paper.push(item);
  }
  if (paper.length < count) {
    throw new Error(`${rangeId}/${difficulty}: 题量不足 (实出 ${paper.length}/${count})`);
  }
  return { paper, shortfall: {} };
}

// 1. sum-10
function genSum10(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'sum-10', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      if (isAdd) {
        const a = ri(1, 4), b = ri(1, 5 - a);
        return [a, b, '+'];
      }
      const a = ri(2, 5), b = ri(1, a);
      return [a, b, '−'];
    }
    if (d === 'medium') {
      if (isAdd) {
        const a = ri(2, 8), b = ri(1, 10 - a);
        return [a, b, '+'];
      }
      const a = ri(5, 10), b = ri(1, a - 1);
      return [a, b, '−'];
    }
    // hard: 含0或和为10或被减数为10
    if (isAdd) {
      if (Math.random() < 0.4) {
        const a = ri(1, 9); return [a, 10 - a, '+'];
      }
      const a = ri(0, 10), b = ri(0, 10 - a);
      return [a, b, '+'];
    }
    const a = ri(8, 10), b = ri(0, a);
    return [a, b, '−'];
  });
}

// 2. carry-20 (总池36道进位加法，加权梯度抽取20道)
function genCarry20(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'carry-20', (d) => {
    let a, b;
    if (d === 'easy') {
      a = Math.random() < 0.75 ? pick([9, 8]) : ri(5, 9);
      b = ri(10 - a, 9);
      if (Math.random() < 0.5) [a, b] = [b, a];
    } else if (d === 'medium') {
      a = Math.random() < 0.75 ? pick([7, 6, 8]) : ri(5, 9);
      b = ri(10 - a, 9);
      if (Math.random() < 0.5) [a, b] = [b, a];
    } else {
      a = Math.random() < 0.75 ? pick([2, 3, 4, 5, 6]) : ri(5, 9);
      b = ri(10 - a, 9);
      if (Math.random() < 0.5) [a, b] = [b, a];
    }
    return [a, b, '+'];
  });
}

// 3. borrow-20 (总池36道退位减法，加权梯度抽取20道)
function genBorrow20(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'borrow-20', (d) => {
    let a, b;
    if (d === 'easy') {
      b = Math.random() < 0.75 ? pick([9, 8, 7]) : ri(2, 9);
      a = ri(11, 18);
      while (a - b <= 0 || a - b >= 10) a = ri(11, 18);
    } else if (d === 'medium') {
      b = Math.random() < 0.75 ? pick([6, 7, 8]) : ri(2, 9);
      a = ri(11, 18);
      while (a - b <= 0 || a - b >= 10) a = ri(11, 18);
    } else {
      b = Math.random() < 0.75 ? pick([2, 3, 4, 5, 6]) : ri(2, 9);
      a = ri(11, 18);
      while (a - b <= 0 || a - b >= 10) a = ri(11, 18);
    }
    return [a, b, '−'];
  });
}

// 4. sum-100-oral
function genSum100Oral(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'sum-100-oral', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      // 整十数加减整十数
      if (isAdd) {
        const a = ri(1, 8) * 10, b = ri(1, 9 - a / 10) * 10;
        return [a, b, '+'];
      }
      const a = ri(2, 9) * 10, b = ri(1, a / 10 - 1) * 10;
      return [a, b, '−'];
    }
    if (d === 'medium') {
      // 两位数加减一位数不进不退
      if (isAdd) {
        const a = ri(11, 88), b = ri(1, Math.min(9, 9 - (a % 10)));
        return [a, b, '+'];
      }
      const a = ri(15, 99), b = ri(1, Math.max(1, a % 10));
      return [a, b, '−'];
    }
    // hard: 两位数加减一位数进位退位
    if (isAdd) {
      const a = ri(12, 88);
      const ones = a % 10;
      const b = ones === 0 ? ri(1, 9) : ri(10 - ones, 9);
      return [a, b, '+'];
    }
    const a = ri(20, 95);
    const ones = a % 10;
    const b = ones === 9 ? ri(1, 9) : ri(ones + 1, 9);
    return [a, b, '−'];
  });
}

// 5. table-times-2 (九九乘法表全池81题，三档加权)
function genTableTimes(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'table-times-2', (d) => {
    let a, b;
    if (d === 'easy') {
      a = Math.random() < 0.75 ? ri(2, 6) : ri(2, 9);
      b = Math.random() < 0.75 ? ri(2, 6) : ri(2, 9);
    } else if (d === 'medium') {
      a = Math.random() < 0.75 ? ri(4, 9) : ri(2, 9);
      b = Math.random() < 0.75 ? ri(4, 9) : ri(2, 9);
    } else {
      if (Math.random() < 0.25) {
        a = ri(2, 9); b = a; // 平方口算
      } else {
        a = Math.random() < 0.75 ? ri(6, 9) : ri(2, 9);
        b = Math.random() < 0.75 ? ri(6, 9) : ri(2, 9);
      }
    }
    return [a, b, '×'];
  });
}

// 6. divide-table-1
function genDivideTable1(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'divide-table-1', (d) => {
    let b, q;
    if (d === 'easy') {
      b = Math.random() < 0.7 ? ri(2, 4) : ri(2, 6);
      q = Math.random() < 0.7 ? ri(2, 4) : ri(2, 6);
    } else if (d === 'medium') {
      b = Math.random() < 0.7 ? ri(3, 5) : ri(2, 6);
      q = Math.random() < 0.7 ? ri(3, 6) : ri(2, 6);
    } else {
      b = Math.random() < 0.7 ? ri(5, 6) : ri(2, 6);
      q = Math.random() < 0.7 ? ri(4, 6) : ri(2, 6);
    }
    return [b * q, b, '÷'];
  });
}

// 7. divide-table-2
function genDivideTable2(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'divide-table-2', (d) => {
    let b, q;
    if (d === 'easy') {
      b = ri(7, 9);
      q = Math.random() < 0.75 ? ri(2, 5) : ri(2, 9);
    } else if (d === 'medium') {
      b = ri(7, 9);
      q = Math.random() < 0.75 ? ri(5, 7) : ri(2, 9);
    } else {
      b = ri(7, 9);
      q = Math.random() < 0.75 ? ri(7, 9) : ri(2, 9);
    }
    return [b * q, b, '÷'];
  });
}

// 8. sum-100-column
function genSum100Column(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'sum-100-column', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      // 两位数不进位加 / 不退位减
      if (isAdd) {
        const a1 = ri(1, 6), a0 = ri(0, 5);
        const b1 = ri(1, 8 - a1), b0 = ri(0, 9 - a0);
        return [a1 * 10 + a0, b1 * 10 + b0, '+'];
      }
      const a1 = ri(3, 9), a0 = ri(2, 9);
      const b1 = ri(1, a1 - 1), b0 = ri(0, a0);
      return [a1 * 10 + a0, b1 * 10 + b0, '−'];
    }
    if (d === 'medium') {
      // 一次进位 / 一次退位
      if (isAdd) {
        const a1 = ri(1, 6), a0 = ri(3, 9);
        const b1 = ri(1, 7 - a1), b0 = ri(10 - a0, 9);
        return [a1 * 10 + a0, b1 * 10 + b0, '+'];
      }
      const a1 = ri(3, 9), a0 = ri(0, 6);
      const b1 = ri(1, a1 - 1), b0 = ri(a0 + 1, 9);
      return [a1 * 10 + a0, b1 * 10 + b0, '−'];
    }
    // hard: 和为100或整十数退位
    if (isAdd) {
      if (Math.random() < 0.5) {
        const a = ri(15, 85);
        return [a, 100 - a, '+'];
      }
      const a = ri(35, 68), b = ri(35, 95 - a);
      return [a, b, '+'];
    }
    if (Math.random() < 0.4) {
      const b = ri(11, 89);
      return [100, b, '−'];
    }
    const tens = ri(4, 9) * 10;
    const b = ri(11, tens - 11);
    return [tens, b, '−'];
  });
}

// 9. round-times-div (3上口算)
function genRoundTimesDiv(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'round-times-div', (d) => {
    const isMul = Math.random() < 0.5;
    if (d === 'easy') {
      if (isMul) {
        const a = ri(2, 9) * 10, b = ri(2, 5);
        return [a, b, '×'];
      }
      const q = ri(2, 9) * 10, b = ri(2, 5);
      return [q * b, b, '÷'];
    }
    if (d === 'medium') {
      if (isMul) {
        const a = ri(1, 9) * 100, b = ri(2, 6);
        return [a, b, '×'];
      }
      const q = ri(2, 9) * 10, b = ri(6, 9);
      return [q * b, b, '÷'];
    }
    // hard: 几百几十乘一位数 / 较大除法
    if (isMul) {
      const a = ri(11, 45) * 10, b = ri(3, 8);
      return [a, b, '×'];
    }
    const q = ri(20, 95), b = ri(4, 9);
    return [q * b, b, '÷'];
  });
}

// 10. sum-10000-oral (3上口算)
function genSum10000Oral(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'sum-10000-oral', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      if (isAdd) {
        const a = ri(1, 8) * 100, b = ri(1, 9 - a / 100) * 100;
        return [a, b, '+'];
      }
      const a = ri(2, 9) * 100, b = ri(1, a / 100 - 1) * 100;
      return [a, b, '−'];
    }
    if (d === 'medium') {
      if (isAdd) {
        const a = ri(11, 35) * 100, b = ri(1, 9) * 100;
        return [a, b, '+'];
      }
      const a = ri(15, 45) * 100, b = ri(1, 9) * 100;
      return [a, b, '−'];
    }
    // hard: 几百几十加减进退位
    if (isAdd) {
      const a = ri(12, 65) * 10, b = ri(12, 65) * 10;
      return [a, b, '+'];
    }
    const a = ri(35, 95) * 10, b = ri(12, Math.floor(a / 10) - 5) * 10;
    return [a, b, '−'];
  });
}

// 11. sum-10000-column (3上竖式)
function genSum10000Column(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'sum-10000-column', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      // 不进位加 / 不退位减
      if (isAdd) {
        const a = ri(111, 555), b = ri(111, 444);
        return [a, b, '+'];
      }
      const a = ri(333, 999), b = ri(111, a - 100);
      return [a, b, '−'];
    }
    if (d === 'medium') {
      // 连续进位 / 连续退位
      if (isAdd) {
        const a = ri(245, 685), b = ri(245, 950 - a);
        return [a, b, '+'];
      }
      const a = ri(450, 950), b = ri(185, a - 150);
      return [a, b, '−'];
    }
    // hard: 中间有0或末尾有0退位 / 和过千
    if (isAdd) {
      const a = ri(520, 890), b = ri(520, 890);
      return [a, b, '+'];
    }
    if (Math.random() < 0.5) {
      // 被减数中间有0
      const a = ri(4, 9) * 100 + ri(1, 8);
      const b = ri(125, a - 50);
      return [a, b, '−'];
    }
    // 被减数末尾有0
    const a = ri(4, 9) * 100;
    const b = ri(125, a - 50);
    return [a, b, '−'];
  });
}

// 12. multi-times-one (3上竖式)
function genMultiTimesOne(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'multi-times-one', (d) => {
    if (d === 'easy') {
      const a = ri(11, 48), b = ri(2, 4);
      return [a, b, '×'];
    }
    if (d === 'medium') {
      const a = ri(125, 450), b = ri(3, 7);
      return [a, b, '×'];
    }
    // hard: 中间有0或末尾有0
    if (Math.random() < 0.5) {
      const a = ri(2, 9) * 100 + ri(1, 9);
      const b = ri(3, 8);
      return [a, b, '×'];
    }
    const a = ri(12, 85) * 10;
    const b = ri(3, 8);
    return [a, b, '×'];
  });
}

// 13. two-times-two (3下竖式)
function genTwoTimesTwo(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'two-times-two', (d) => {
    if (d === 'easy') {
      if (Math.random() < 0.5) {
        const a = ri(12, 85), b = ri(1, 4) * 10;
        return [a, b, '×'];
      }
      const a = ri(11, 32), b = ri(11, 23);
      return [a, b, '×'];
    }
    if (d === 'medium') {
      const a = ri(23, 75), b = ri(15, 45);
      return [a, b, '×'];
    }
    // hard: 连续进位大数
    const a = ri(48, 98), b = ri(35, 95);
    return [a, b, '×'];
  });
}

// 14. divide-one (3下竖式)
function genDivideOne(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'divide-one', (d) => {
    if (d === 'easy') {
      const b = ri(2, 5);
      const q = ri(12, 48);
      return [b * q, b, '÷'];
    }
    if (d === 'medium') {
      const b = ri(3, 9);
      const q = ri(45, 199);
      return [b * q, b, '÷'];
    }
    // hard: 商中间有0或末尾有0
    const b = ri(3, 9);
    let q;
    if (Math.random() < 0.5) {
      // 商中间有0，如 102~109, 203~208
      q = ri(1, 4) * 100 + ri(1, 9);
    } else {
      // 商末尾有0，如 120, 150, 210, 320
      q = ri(11, 45) * 10;
    }
    return [b * q, b, '÷'];
  });
}

// 15. two-times-one-oral (4上口算)
function genTwoTimesOneOral(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'two-times-one-oral', (d) => {
    const isMul = Math.random() < 0.6;
    if (d === 'easy') {
      if (isMul) {
        const a = ri(11, 24), b = ri(2, 3);
        return [a, b, '×'];
      }
      const b = ri(2, 4) * 10, q = ri(2, 5);
      return [b * q, b, '÷'];
    }
    if (d === 'medium') {
      if (isMul) {
        const a = ri(14, 35), b = ri(3, 6);
        return [a, b, '×'];
      }
      const b = ri(2, 8) * 10, q = ri(3, 8);
      return [b * q, b, '÷'];
    }
    // hard: 常用速算数
    if (isMul) {
      if (Math.random() < 0.4) {
        return pick([[25, 4, '×'], [125, 8, '×'], [15, 6, '×'], [14, 5, '×'], [18, 5, '×']]);
      }
      const a = ri(25, 85), b = ri(4, 9);
      return [a, b, '×'];
    }
    const b = ri(3, 9) * 10, q = ri(6, 9);
    return [b * q, b, '÷'];
  });
}

// 16. dec-addsub-oral (4下口算)
function genDecAddsubOral(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'dec-addsub-oral', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      if (isAdd) {
        const a = roundTo(ri(1, 5) + ri(1, 4) * 0.1, 1);
        const b = roundTo(ri(1, 4) + ri(1, 5) * 0.1, 1);
        return [a, b, '+'];
      }
      const a = roundTo(ri(3, 8) + ri(4, 8) * 0.1, 1);
      const b = roundTo(ri(1, 2) + ri(1, 3) * 0.1, 1);
      return [a, b, '−'];
    }
    if (d === 'medium') {
      if (isAdd) {
        const a = roundTo(ri(1, 5) + ri(6, 9) * 0.1, 1);
        const b = roundTo(ri(1, 4) + ri(5, 9) * 0.1, 1);
        return [a, b, '+'];
      }
      const a = roundTo(ri(3, 8) + ri(1, 3) * 0.1, 1);
      const b = roundTo(ri(1, 2) + ri(5, 8) * 0.1, 1);
      return [a, b, '−'];
    }
    // hard: 整数减一位小数或凑整
    if (isAdd) {
      const a = roundTo(ri(1, 8) * 0.1, 1);
      return [a, roundTo(1 - a, 1), '+'];
    }
    const a = ri(1, 5);
    const b = roundTo(ri(1, a * 10 - 1) * 0.1, 1);
    return [a, b, '−'];
  });
}

// 17. three-times-two (4上竖式)
function genThreeTimesTwo(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'three-times-two', (d) => {
    if (d === 'easy') {
      const a = ri(11, 45) * 10, b = ri(1, 4) * 10;
      return [a, b, '×'];
    }
    if (d === 'medium') {
      const a = ri(125, 450), b = ri(15, 45);
      return [a, b, '×'];
    }
    // hard: 中间有0或末尾有0
    if (Math.random() < 0.5) {
      const a = ri(2, 9) * 100 + ri(1, 9);
      const b = ri(18, 55);
      return [a, b, '×'];
    }
    const a = ri(15, 85) * 10;
    const b = ri(20, 60);
    return [a, b, '×'];
  });
}

// 18. divide-two (4上竖式)
function genDivideTwo(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'divide-two', (d) => {
    if (d === 'easy') {
      const b = ri(2, 8) * 10;
      const q = ri(2, 9);
      return [b * q, b, '÷'];
    }
    if (d === 'medium') {
      const b = ri(21, 89);
      const q = ri(4, 9);
      return [b * q, b, '÷'];
    }
    // hard: 商是两位数
    const b = ri(15, 65);
    const q = ri(12, 45);
    return [b * q, b, '÷'];
  });
}

// 19. dec-addsub (4下竖式)
function genDecAddsub(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'dec-addsub', (d) => {
    const isAdd = Math.random() < 0.5;
    if (d === 'easy') {
      if (isAdd) {
        const a = roundTo(ri(11, 65) * 0.1, 1);
        const b = roundTo(ri(11, 55) * 0.1, 1);
        return [a, b, '+'];
      }
      const a = roundTo(ri(55, 95) * 0.1, 1);
      const b = roundTo(ri(11, 45) * 0.1, 1);
      return [a, b, '−'];
    }
    if (d === 'medium') {
      if (isAdd) {
        const a = roundTo(ri(111, 555) * 0.01, 2);
        const b = roundTo(ri(111, 555) * 0.01, 2);
        return [a, b, '+'];
      }
      const a = roundTo(ri(450, 950) * 0.01, 2);
      const b = roundTo(ri(125, 380) * 0.01, 2);
      return [a, b, '−'];
    }
    // hard: 位数不同补0 / 整数减小数
    if (isAdd) {
      const a = roundTo(ri(15, 85) * 0.1, 1);
      const b = roundTo(ri(115, 485) * 0.01, 2);
      return [a, b, '+'];
    }
    if (Math.random() < 0.5) {
      const a = ri(5, 20);
      const b = roundTo(ri(115, a * 100 - 50) * 0.01, 2);
      return [a, b, '−'];
    }
    const a = roundTo(ri(45, 95) * 0.1, 1);
    const b = roundTo(ri(115, a * 100 - 50) * 0.01, 2);
    return [a, b, '−'];
  });
}

// 20. dec-muldiv-oral (5上口算)
function genDecMuldivOral(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'dec-muldiv-oral', (d) => {
    const isMul = Math.random() < 0.5;
    if (d === 'easy') {
      if (isMul) {
        const a = roundTo(ri(1, 9) * 0.1, 1);
        const b = ri(2, 9);
        return [a, b, '×'];
      }
      const q = roundTo(ri(1, 9) * 0.1, 1);
      const b = ri(2, 6);
      return [roundTo(q * b, 2), b, '÷'];
    }
    if (d === 'medium') {
      if (isMul) {
        const a = roundTo(ri(2, 12) * 0.1, 1);
        const b = roundTo(ri(2, 9) * 0.1, 1);
        return [a, b, '×'];
      }
      const q = roundTo(ri(2, 12) * 0.1, 1);
      const b = roundTo(ri(2, 8) * 0.1, 1);
      return [roundTo(q * b, 2), b, '÷'];
    }
    // hard: 特殊小数巧算速算与两位小数乘除
    if (isMul) {
      if (Math.random() < 0.5) {
        const special = pick([0.25, 0.75, 1.25, 2.5, 0.5, 0.125]);
        const b = ri(2, 20) * 2;
        return [special, b, '×'];
      }
      const a = roundTo(ri(11, 45) * 0.01, 2);
      const b = ri(2, 12);
      return [a, b, '×'];
    }
    if (Math.random() < 0.5) {
      const b = pick([0.02, 0.04, 0.05, 0.08, 0.25, 0.5]);
      const q = ri(2, 25);
      return [roundTo(q * b, 3), b, '÷'];
    }
    const q = roundTo(ri(12, 65) * 0.1, 1);
    const b = roundTo(ri(3, 9) * 0.01, 2);
    return [roundTo(q * b, 3), b, '÷'];
  });
}

// 21. dec-mul (5上竖式)
function genDecMul(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'dec-mul', (d) => {
    if (d === 'easy') {
      const a = roundTo(ri(12, 65) * 0.1, 1);
      const b = ri(2, 6);
      return [a, b, '×'];
    }
    if (d === 'medium') {
      const a = roundTo(ri(12, 45) * 0.1, 1);
      const b = roundTo(ri(12, 35) * 0.1, 1);
      return [a, b, '×'];
    }
    // hard: 两位乘两位末尾有0化简或小数乘大数
    if (Math.random() < 0.3) {
      const special = pick([0.25, 1.25, 0.45, 3.14, 0.75]);
      const b = roundTo(ri(4, 32) * 0.1, 1);
      return [special, b, '×'];
    }
    const a = roundTo(ri(115, 385) * 0.01, 2);
    const b = roundTo(ri(15, 85) * 0.01, 2);
    return [a, b, '×'];
  });
}

// 22. dec-div (5上竖式)
function genDecDiv(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'dec-div', (d) => {
    if (d === 'easy') {
      const q = roundTo(ri(12, 55) * 0.1, 1);
      const b = ri(2, 6);
      return [roundTo(q * b, 2), b, '÷'];
    }
    if (d === 'medium') {
      const q = ri(12, 85);
      const b = roundTo(ri(12, 45) * 0.1, 1);
      return [roundTo(q * b, 2), b, '÷'];
    }
    // hard: 被除数位数不够补0 / 商小于1
    if (Math.random() < 0.5) {
      const q = roundTo(ri(12, 85) * 0.01, 2);
      const b = roundTo(ri(15, 45) * 0.1, 1);
      return [roundTo(q * b, 3), b, '÷'];
    }
    const q = ri(15, 75);
    const b = roundTo(ri(12, 45) * 0.01, 2);
    return [roundTo(q * b, 2), b, '÷'];
  });
}

// 23. percent-oral (6上口算)
function genPercentOral(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'percent-oral', (d) => {
    const isMul = Math.random() < 0.6;
    if (d === 'easy') {
      if (isMul) {
        const rate = pick([0.5, 0.25, 0.2, 0.1]);
        const base = ri(1, 25) * 20;
        return [rate, base, '×'];
      }
      const rate = pick([0.5, 0.2, 0.1]);
      const res = ri(2, 25);
      return [roundTo(res * rate, 2), rate, '÷'];
    }
    if (d === 'medium') {
      if (isMul) {
        const rate = pick([0.75, 0.4, 0.6, 0.8, 0.15, 0.35, 0.45]);
        const base = ri(2, 25) * 10;
        return [rate, base, '×'];
      }
      const rate = pick([0.25, 0.4, 0.5, 0.8, 0.2]);
      const res = ri(10, 80);
      return [roundTo(res * rate, 2), rate, '÷'];
    }
    // hard: 折扣与稍复杂百分数
    if (isMul) {
      const rate = pick([0.85, 0.95, 0.65, 0.35, 0.72, 0.88]);
      const base = ri(2, 20) * 10;
      return [rate, base, '×'];
    }
    const rate = pick([0.75, 0.85, 0.6, 0.45]);
    const res = ri(15, 120);
    return [roundTo(res * rate, 2), rate, '÷'];
  });
}

// 24. pi-multiply (6上竖式)
function genPiMultiply(diff, count, mode) {
  return generateByLoop(diff, count, mode, 'pi-multiply', (d) => {
    let b;
    if (d === 'easy') {
      b = Math.random() < 0.7 ? ri(2, 25) : ri(26, 50);
    } else if (d === 'medium') {
      b = Math.random() < 0.7 ? pick([10, 12, 14, 15, 16, 18, 20, 24, 25, 28, 30, 32, 35, 40, 45, 50]) : ri(11, 60);
    } else {
      b = Math.random() < 0.6 ? pick([4, 9, 16, 25, 36, 49, 64, 81, 100, 144, 169, 196, 225, 256]) : ri(25, 99);
    }
    return [3.14, b, '×'];
  });
}

export const DAILY_GENERATORS = {
  'sum-10': genSum10,
  'carry-20': genCarry20,
  'borrow-20': genBorrow20,
  'sum-100-oral': genSum100Oral,
  'table-times-2': genTableTimes,
  'divide-table-1': genDivideTable1,
  'divide-table-2': genDivideTable2,
  'sum-100-column': genSum100Column,
  'round-times-div': genRoundTimesDiv,
  'sum-10000-oral': genSum10000Oral,
  'sum-10000-column': genSum10000Column,
  'multi-times-one': genMultiTimesOne,
  'two-times-two': genTwoTimesTwo,
  'divide-one': genDivideOne,
  'two-times-one-oral': genTwoTimesOneOral,
  'dec-addsub-oral': genDecAddsubOral,
  'three-times-two': genThreeTimesTwo,
  'divide-two': genDivideTwo,
  'dec-addsub': genDecAddsub,
  'dec-muldiv-oral': genDecMuldivOral,
  'dec-mul': genDecMul,
  'dec-div': genDecDiv,
  'percent-oral': genPercentOral,
  'pi-multiply': genPiMultiply,
};

export function generateDailyPractice(config) {
  const { mode, rangeId, grade, problemCount, difficulty } = config;
  const range = DAILY_RANGES.find(r => r.id === rangeId && r.mode === mode && r.grade <= Number(grade));
  if (!range || !['easy', 'medium', 'hard'].includes(difficulty)
      || ![20, 30, 40].includes(problemCount) || problemCount > (range.maxCount || 40)) {
    throw new Error('请选择适合年级的练习范围和题量');
  }

  const customGen = DAILY_GENERATORS[rangeId];
  if (customGen) {
    return customGen(difficulty, problemCount, mode);
  }

  const generator = SCOPE_PLUGINS[rangeId] || UNIT_PLUGINS[rangeId];
  const paper = [];
  const seen = new Set();
  for (let attempt = 0; paper.length < problemCount && attempt < 200; attempt++) {
    const candidates = generator(difficulty, 40, { plugin: rangeId });
    if (rangeId === 'table-times-2') candidates.push(...SCOPE_PLUGINS['table-times-1'](difficulty, 40, { plugin: 'table-times-1' }));
    for (const item of candidates) {
      if (item.subtemplateId && item.subtemplateId !== 'calculate' && !item.subtype?.startsWith('unit-dec-')) continue;
      const question = item.question.replace(/^(口算：|列竖式计算：)/, '').replace(/ - /g, ' − ');
      if (seen.has(question)) continue;
      seen.add(question);
      const operands = question.match(/^([\d.]+)\s*([+−×÷])\s*([\d.]+)\s*=/);
      if (!operands) throw new Error('计算题格式无效');
      paper.push({
        ...item, question, type: 'arithmetic', format: mode === 'vertical' ? 'vertical' : 'arithmetic',
        payload: { operands: [operands[1], operands[3]], operation: operands[2] },
      });
      if (paper.length === problemCount) break;
    }
  }
  if (paper.length < problemCount) throw new Error('当前范围的不同题目不足，请减少题量');
  return { paper, shortfall: {} };
}

export function renderVertical(problem) {
  const box = document.createElement('div');
  box.className = 'vertical-problem';
  const { operands: [first, second], operation } = problem.payload;
  if (operation === '÷') {
    const calculation = document.createElement('div');
    calculation.className = 'division-setup';
    const divisor = document.createElement('span');
    divisor.textContent = second;
    const dividend = document.createElement('span');
    dividend.className = 'dividend';
    dividend.textContent = first;
    calculation.append(divisor, dividend);
    box.append(calculation);
  } else {
    const decimals = Math.max(...[first, second].map(n => (n.split('.')[1] || '').length));
    for (const [i, value] of [first, second].entries()) {
      const row = document.createElement('div');
      row.textContent = (i ? operation + ' ' : '  ') + (operation === '×' ? value : Number(value).toFixed(decimals));
      box.append(row);
    }
    box.classList.add('vertical-stack');
  }
  return box;
}
