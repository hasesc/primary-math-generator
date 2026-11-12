import { UNIT_PLUGINS } from '../prototype/unitPlugins.js';
import { SCOPE_PLUGINS } from '../prototype/scopeProblems.js';
import { UNITS } from '../prototype/units.js';
import { generatePaper } from '../prototype/paper.js';

console.log('=== 1. 抽样检查数学广角类单元 ===');
const broadUnits = [
  { g: '2', s: '上', idx: 7, name: '数学广角——搭配（一）' },
  { g: '2', s: '下', idx: 8, name: '数学广角——推理' },
  { g: '3', s: '下', idx: 7, name: '数学广角——搭配（二）' },
  { g: '4', s: '上', idx: 7, name: '数学广角——优化' },
  { g: '4', s: '下', idx: 8, name: '数学广角——鸡兔同笼' },
  { g: '5', s: '上', idx: 6, name: '数学广角——植树问题' },
  { g: '5', s: '下', idx: 7, name: '数学广角——找次品' },
  { g: '6', s: '上', idx: 7, name: '数学广角——数与形' },
  { g: '6', s: '下', idx: 4, name: '数学广角——鸽巢问题' },
];

broadUnits.forEach(u => {
  const res = generatePaper({
    grade: u.g,
    semester: u.s,
    difficulty: 'medium',
    problemCount: 6,
    questionTypes: ['arithmetic', 'application', 'olympiad'],
    ...UNITS[u.g][u.s][u.idx]
  });
  console.log(`\n【${u.g}${u.s} ${u.name}】样卷:`);
  res.paper.slice(0, 5).forEach((p, i) => {
    console.log(`  ${i+1}. [${p.subtemplateId || p.subtype}] ${p.question.replace(/\n/g, ' ')}`);
  });
});
