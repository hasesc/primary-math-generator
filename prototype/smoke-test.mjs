// 冒烟测试：各年级×难度抽样生成，验证移植后的引擎链路
import { generatePaper } from './paper.js';
import { gradeDefaults } from './units.js';

const grades = ['1', '2', '3', '4', '5', '6'];
let pass = 0, fail = 0;

for (const g of grades) {
  for (const diff of ['easy', 'medium', 'hard']) {
    const total = 30;
    const d = gradeDefaults(g, '上', total);
    const config = {
      problemCount: total,
      grade: g,
      semester: '上',
      difficulty: diff,
      knowledgePoints: [],
      answerMode: 'hidden',
      questionTypes: ['arithmetic', 'application', 'olympiad'],
      ...d,
    };
    try {
      const t0 = Date.now();
      const { paper, shortfall } = generatePaper(config);
      const ms = Date.now() - t0;
      const byType = {};
      paper.forEach((p) => { byType[p.type] = (byType[p.type] || 0) + 1; });
      const ok = paper.length >= total * 0.9; // 允许 10% 缺口
      const uniq = new Set(paper.map((p) => p.question)).size;
      console.log(
        `${ok ? '✅' : '⚠️'} ${g}年级/${diff}: ${paper.length}/${total} 题, 去重后 ${uniq}, ${ms}ms, 分布=${JSON.stringify(byType)}` +
        (shortfall._filledByArithmetic ? `, 补足=${shortfall._filledByArithmetic}` : '')
      );
      // 抽样打印前 2 题看看形态
      if (diff === 'medium') {
        paper.slice(0, 2).forEach((p) => console.log(`   例[${p.type}] ${p.question} => ${p.answer}`));
      }
      ok ? pass++ : fail++;
    } catch (e) {
      console.log(`❌ ${g}年级/${diff}: 异常 ${e.message}`);
      fail++;
    }
  }
}
console.log(`\n结果: ${pass} 通过 / ${fail} 未达标`);
