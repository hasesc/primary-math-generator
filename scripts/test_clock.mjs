import { clockProblems } from '../prototype/diagramProblems.js';
import { generatePaper } from '../prototype/paper.js';

console.log('--- 测试 1上 认识钟表 ---');
for (const diff of ['easy', 'medium', 'hard']) {
  for (const cnt of [20, 30, 40]) {
    const res = generatePaper({
      grade: '1',
      semester: '上',
      difficulty: diff,
      problemCount: cnt,
      questionTypes: ['arithmetic', 'application', 'olympiad'],
      plugin: 'clock',
    });
    console.log(`1上 clock ${diff}/${cnt} -> 实出: ${res.paper.length}`);
  }
}

console.log('\n--- 测试 2上 认识时间 ---');
for (const diff of ['easy', 'medium', 'hard']) {
  for (const cnt of [20, 30, 40]) {
    const res = generatePaper({
      grade: '2',
      semester: '上',
      difficulty: diff,
      problemCount: cnt,
      questionTypes: ['arithmetic', 'application', 'olympiad'],
      plugin: 'clock',
    });
    console.log(`2上 clock ${diff}/${cnt} -> 实出: ${res.paper.length}`);
  }
}
