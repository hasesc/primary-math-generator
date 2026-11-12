// exam-paper-test.mjs —— 100分制单元测验卷自动化全链路验收
import { generateExamPaper } from './paper.js';
import { UNITS } from './units.js';

let passed = 0;
let total = 0;

for (let g = 1; g <= 6; g++) {
  for (const diff of ['easy', 'medium', 'hard']) {
    total++;
    const sem = '上';
    const unitList = UNITS[String(g)]?.[sem] || [];
    const unit = unitList[0] || { name: '单元综合' };

    try {
      const res = generateExamPaper({
        grade: g,
        semester: sem,
        unitName: unit.name,
        unit,
        difficulty: diff,
      });

      if (!res || !Array.isArray(res.paper) || res.paper.length < 25) {
        throw new Error(`题量不足: 实出 ${res?.paper?.length || 0}`);
      }
      if (res.totalScore !== 100) {
        throw new Error(`总分异常: 实得 ${res.totalScore}, 应为 100`);
      }

      // 验证判断题与选择题均有答案与解析
      const judges = res.paper.filter(p => p.format === 'judge');
      const choices = res.paper.filter(p => p.format === 'choice');
      if (judges.length !== 5) throw new Error(`判断题数量不符: ${judges.length}`);
      if (choices.length !== 5) throw new Error(`选择题数量不符: ${choices.length}`);

      for (const j of judges) {
        if (!['√', '×'].includes(j.answer)) throw new Error(`判断题答案无效: ${j.answer}`);
        if (!j.explanation) throw new Error(`判断题缺少解析: ${j.question}`);
      }
      for (const c of choices) {
        if (!['A', 'B', 'C', 'D'].includes(c.answer)) throw new Error(`选择题答案无效: ${c.answer}`);
        if (!c.explanation) throw new Error(`选择题缺少解析: ${c.question}`);
        if (!Array.isArray(c.options) || c.options.length !== 4) throw new Error(`选择题选项不为4项`);
      }

      passed++;
    } catch (err) {
      console.error(`❌ ${g}年级 ${sem}册 ${unit.name} (${diff}) 测验卷失败:`, err.message);
      process.exitCode = 1;
    }
  }
}

console.log(`✅ 100分制单元测验卷验证通过: ${passed}/${total} 组全部达标 (6年级×3难度覆盖)`);
