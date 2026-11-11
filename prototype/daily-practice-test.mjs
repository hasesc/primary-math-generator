import assert from 'node:assert/strict';
import { DAILY_RANGES, generateDailyPractice } from './dailyPractice.js';

let configurations = 0;
for (const range of DAILY_RANGES) {
  for (const difficulty of ['easy', 'medium', 'hard']) {
    for (const problemCount of [20, 30, 40].filter(count => count <= (range.maxCount || 40))) {
      const config = { mode: range.mode, rangeId: range.id, grade: range.grade, problemCount, difficulty };
      const { paper } = generateDailyPractice(config);
      assert.equal(paper.length, problemCount, range.name);
      assert.equal(new Set(paper.map(p => p.question)).size, problemCount, range.name);
      for (const p of paper) {
        const [a, b] = p.payload.operands.map(Number);
        const expected = { '+': a + b, '−': a - b, '×': a * b, '÷': a / b }[p.payload.operation];
        assert(Math.abs(Number(p.answer) - expected) < 0.000001, p.question);
        assert.equal(p.format, range.mode === 'vertical' ? 'vertical' : 'arithmetic');
        assert(Number(p.answer) >= 0);
      }
      configurations++;
    }
  }
}
assert.throws(() => generateDailyPractice({ mode: 'vertical', rangeId: 'three-times-two', grade: 1, problemCount: 20, difficulty: 'easy' }));
console.log(`${configurations} 种每日一练配置通过，题量、去重、答案复算和年级限制正常`);
