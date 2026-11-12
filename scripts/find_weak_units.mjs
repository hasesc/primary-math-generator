import { UNITS } from '../prototype/units.js';
import { generatePaper } from '../prototype/paper.js';

const grades = ['1','2','3','4','5','6'];
const sems = ['上','下'];
const weakUnits = [];

for (const g of grades) {
  for (const s of sems) {
    const list = UNITS[g][s] || [];
    list.forEach((u, idx) => {
      const id = `${g}${s}-U${idx+1}`;
      const name = u.name;
      const getSkills = (diff) => {
        const res = generatePaper({
          problemCount: 20,
          grade: g,
          semester: s,
          difficulty: diff,
          questionTypes: ['arithmetic', 'application', 'olympiad'],
          plugin: u.plugin,
          topics: u.topics,
          calcOverride: u.calc,
          calcType: u.calcType,
          arithmeticPlugin: u.arithmeticPlugin
        });
        const subs = new Set((res.paper || []).map(p => p.subtemplateId || p.subtype || p.format || p.type));
        return [...subs];
      };
      const easySubs = getSkills('easy');
      const medSubs = getSkills('medium');
      const hardSubs = getSkills('hard');
      const allSubs = new Set([...easySubs, ...medSubs, ...hardSubs]);
      weakUnits.push({
        id,
        name,
        plugin: u.plugin || u.arithmeticPlugin || u.topics?.[0] || 'calc',
        totalDistinctSkills: allSubs.size,
        easySkillCount: easySubs.length,
        medSkillCount: medSubs.length,
        hardSkillCount: hardSubs.length,
        skills: [...allSubs]
      });
    });
  }
}

weakUnits.sort((a,b) => a.totalDistinctSkills - b.totalDistinctSkills);

console.log('=== 🔴 极度薄弱（仅 1~2 种考法，出 20 题会大量机械重复）===');
weakUnits.filter(u => u.totalDistinctSkills <= 2).forEach(u => {
  console.log(`[${u.id}] ${u.name} (插件/来源: ${u.plugin}) -> 总考法: ${u.totalDistinctSkills} 种 | 考法列表: [${u.skills.join(', ')}]`);
});

console.log('\n=== 🟡 相对薄弱（仅 3 种考法，三档梯度不明显）===');
weakUnits.filter(u => u.totalDistinctSkills === 3).forEach(u => {
  console.log(`[${u.id}] ${u.name} (插件/来源: ${u.plugin}) -> 总考法: ${u.totalDistinctSkills} 种 | 考法列表: [${u.skills.join(', ')}]`);
});

console.log('\n=== 汇总统计 ===');
console.log(`极度薄弱 (<=2 种考法): ${weakUnits.filter(u => u.totalDistinctSkills <= 2).length} 个单元`);
console.log(`相对薄弱 (3 种考法): ${weakUnits.filter(u => u.totalDistinctSkills === 3).length} 个单元`);
console.log(`考法较丰富 (>=4 种考法): ${weakUnits.filter(u => u.totalDistinctSkills >= 4).length} 个单元`);
