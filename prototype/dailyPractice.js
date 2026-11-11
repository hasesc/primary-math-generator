import { SCOPE_PLUGINS } from './scopeProblems.js';
import { UNIT_PLUGINS } from './unitPlugins.js';

export const DAILY_RANGES = [
  { id: 'sum-10', name: '10以内加减法', grade: 1, mode: 'oral', maxCount: 20 },
  { id: 'carry-20', name: '20以内进位加法', grade: 1, mode: 'oral', maxCount: 20 },
  { id: 'borrow-20', name: '20以内退位减法', grade: 1, mode: 'oral', maxCount: 20 },
  { id: 'sum-100-oral', name: '100以内口算加减法', grade: 1, mode: 'oral' },
  { id: 'table-times-2', name: '表内乘法', grade: 2, mode: 'oral' },
  { id: 'divide-table-2', name: '表内除法（7～9口诀）', grade: 2, mode: 'oral', maxCount: 20 },
  { id: 'divide-table-1', name: '表内除法（2～6口诀）', grade: 2, mode: 'oral', maxCount: 20 },
  { id: 'sum-100-column', name: '两位数加减法', grade: 2, mode: 'vertical' },
  { id: 'sum-10000-column', name: '三位数加减法', grade: 3, mode: 'vertical' },
  { id: 'multi-times-one', name: '多位数乘一位数', grade: 3, mode: 'vertical' },
  { id: 'two-times-two', name: '两位数乘两位数', grade: 3, mode: 'vertical' },
  { id: 'divide-one', name: '除数是一位数的除法', grade: 3, mode: 'vertical' },
  { id: 'three-times-two', name: '三位数乘两位数', grade: 4, mode: 'vertical' },
  { id: 'divide-two', name: '除数是两位数的除法', grade: 4, mode: 'vertical' },
  { id: 'dec-addsub', name: '小数加减法', grade: 4, mode: 'vertical' },
  { id: 'dec-mul', name: '小数乘法', grade: 5, mode: 'vertical' },
  { id: 'dec-div', name: '小数除法', grade: 5, mode: 'vertical' },
];

export function generateDailyPractice(config) {
  const { mode, rangeId, grade, problemCount, difficulty } = config;
  const range = DAILY_RANGES.find(r => r.id === rangeId && r.mode === mode && r.grade <= Number(grade));
  if (!range || !['easy', 'medium', 'hard'].includes(difficulty)
      || ![20, 30, 40].includes(problemCount) || problemCount > (range.maxCount || 40)) {
    throw new Error('请选择适合年级的练习范围和题量');
  }
  const generator = SCOPE_PLUGINS[rangeId] || UNIT_PLUGINS[rangeId];
  const paper = [];
  const seen = new Set();
  for (let attempt = 0; paper.length < problemCount && attempt < 200; attempt++) {
    const candidates = generator(difficulty, 40, { plugin: rangeId });
    if (rangeId === 'table-times-2') candidates.push(...SCOPE_PLUGINS['table-times-1'](difficulty, 40, { plugin: 'table-times-1' }));
    for (const item of candidates) {
      if (item.subtemplateId && item.subtemplateId !== 'calculate') continue;
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
