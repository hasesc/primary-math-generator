// rotation-test.mjs —— 技术红线：同一张练习卷内考法轮转，相邻两题 subtemplateId 不得重复
// 例外：纯计算题（口算/竖式/calculate）天然同类，不计入；
// 若某单元某档只有 1 种非计算考法，则无法轮转，单独列出（需要补充考法）。
import assert from 'node:assert/strict';
import { generatePaper } from './paper.js';
import { gradeDefaults, UNITS } from './units.js';

const isCalc = (p) => p.type === 'arithmetic' || p.subtemplateId === 'calculate' || p.subtemplateId === 'dec-div'
  || p.responseKind === 'calculation' || p.responseKind === 'written';

const adjacent = [];
const singleKind = new Set();
for (const g of Object.keys(UNITS)) for (const s of Object.keys(UNITS[g])) for (const u of UNITS[g][s]) {
  for (const d of ['easy', 'medium', 'hard']) for (let rep = 0; rep < 6; rep++) {
    const count = u.maxCount || 30;
    const { paper } = generatePaper({
      problemCount: count, grade: g, semester: s, difficulty: d, questionTypes: ['arithmetic', 'application', 'olympiad'],
      ...gradeDefaults(g, s, count), calcOverride: u.calc || null, calcType: u.calcType || null,
      arithmeticPlugin: u.arithmeticPlugin || null, topics: u.topics || null, plugin: u.plugin || null,
    });
    const kinds = new Set(paper.filter((p) => !isCalc(p) && p.subtemplateId).map((p) => p.subtemplateId));
    if (kinds.size === 1) { singleKind.add(`${g}${s} ${u.name} [${d}]`); continue; }
    // 只要不存在某考法超过半数，就必须做到相邻零重复
    const freq = new Map();
    paper.forEach((p) => p.subtemplateId && freq.set(p.subtemplateId, (freq.get(p.subtemplateId) || 0) + 1));
    const dominated = [...freq].some(([id, c]) => !isCalc({ subtemplateId: id }) && c > Math.ceil(paper.length / 2));
    if (dominated) continue;
    for (let i = 1; i < paper.length; i++) {
      const a = paper[i - 1], b = paper[i];
      if (b.subtemplateId && !isCalc(b) && a.subtemplateId === b.subtemplateId) {
        adjacent.push(`${g}${s} ${u.name} [${d}] 第${i}/${i + 1}题 同为 ${b.subtemplateId}`);
        break;
      }
    }
  }
}

if (singleKind.size) {
  console.log(`⚠️ 以下 ${singleKind.size} 个单元档位只有 1 种考法，无法轮转（待补考法）：`);
  [...singleKind].forEach((x) => console.log('   ' + x));
}
assert.deepEqual([...new Set(adjacent)], [], '存在相邻同考法');
console.log('考法轮转（相邻 subtemplateId 不重复）测试通过');
