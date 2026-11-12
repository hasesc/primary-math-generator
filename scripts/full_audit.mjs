import { UNITS } from '../prototype/units.js';
import { generatePaper } from '../prototype/paper.js';

const grades = ['1','2','3','4','5','6'];
const sems = ['上','下'];

let totalUnits = 0;
const analysis = [];

for (const g of grades) {
  for (const s of sems) {
    const list = UNITS[g][s] || [];
    list.forEach((u, idx) => {
      totalUnits++;
      const id = `${g}${s}-U${idx+1}`;
      const name = u.name;
      
      const diffData = {};
      for (const diff of ['easy', 'medium', 'hard']) {
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
        const paper = res.paper || [];
        const formats = [...new Set(paper.map(p => p.format || p.type))];
        const skills = [...new Set(paper.map(p => p.subtemplateId || p.subtype || p.format || p.type))];
        diffData[diff] = {
          count: paper.length,
          formats,
          skills
        };
      }
      
      const easySkills = new Set(diffData.easy.skills);
      const hardSkills = new Set(diffData.hard.skills);
      const isIdenticalSkills = easySkills.size === hardSkills.size && [...easySkills].every(x => hardSkills.has(x));
      const allSkills = new Set([...diffData.easy.skills, ...diffData.medium.skills, ...diffData.hard.skills]);
      const allFormats = new Set([...diffData.easy.formats, ...diffData.medium.formats, ...diffData.hard.formats]);

      analysis.push({
        id,
        name,
        plugin: u.plugin || u.arithmeticPlugin || u.topics?.[0] || 'calc',
        allSkillsCount: allSkills.size,
        allFormatsCount: allFormats.size,
        formats: [...allFormats],
        isIdenticalSkills,
        skills: [...allSkills]
      });
    });
  }
}

console.log('=== 全量 93 单元题型穿透式大检阅 ===');
console.log('单元总数:', totalUnits);

const identicalTierUnits = analysis.filter(u => u.isIdenticalSkills);
console.log(`\n🚨 [问题一：纯数值梯度] 三档考法完全一样（仅数字范围变大，题型零变化）共 ${identicalTierUnits.length} 个:`);
identicalTierUnits.forEach(u => {
  console.log(`  [${u.id}] ${u.name} (插件: ${u.plugin}, 考法数: ${u.allSkillsCount}, 格式: ${u.formats.join('/')})`);
});

const singleFormatUnits = analysis.filter(u => u.allFormatsCount === 1);
console.log(`\n⚠️ [问题二：格式极端单一] 卷面只有单一题型展现格式（如清一色式子或清一色填空）共 ${singleFormatUnits.length} 个:`);
singleFormatUnits.forEach(u => {
  console.log(`  [${u.id}] ${u.name} (单一格式: ${u.formats[0]}, 考法数: ${u.allSkillsCount})`);
});

const greatUnits = analysis.filter(u => !u.isIdenticalSkills && u.allSkillsCount >= 5 && u.allFormatsCount >= 2);
console.log(`\n✅ [优秀标杆] 考法丰富(>=5种)且三档有实质梯度的单元共 ${greatUnits.length} 个:`);
greatUnits.forEach(u => {
  console.log(`  [${u.id}] ${u.name} (总考法: ${u.allSkillsCount}, 格式: ${u.formats.join('/')})`);
});
