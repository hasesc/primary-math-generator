import assert from 'node:assert/strict';
import { SCOPE_PLUGINS } from './scopeProblems.js';

for (const plugin of ['divide-remainder', 'times-as-many', 'factors']) {
  const ids = {};
  for (const difficulty of ['easy', 'medium', 'hard']) {
    const problems = SCOPE_PLUGINS[plugin](difficulty, 40, { plugin });
    assert.equal(problems.length, 40, `${plugin}/${difficulty}: 题量不足`);
    ids[difficulty] = new Set(problems.map(p => p.subtemplateId));
    assert.equal(ids[difficulty].size, 4);
  }
  assert([...ids.hard].every(id => !ids.medium.has(id)), `${plugin}: 提高题应有不同考法`);
}

for (let i = 0; i < 100; i++) {
  for (const plugin of ['divide-remainder', 'times-as-many', 'factors']) {
    for (const p of SCOPE_PLUGINS[plugin]('hard', 4, { plugin })) {
      const n = (p.question.match(/\d+/g) || []).map(Number);
      let expected;
      switch (p.subtemplateId) {
        case 'remainder-dividend': expected = n[0] * n[1] + n[2]; break;
        case 'remainder-divisor': expected = (n[0] - n[2]) / n[1]; break;
        case 'remainder-extra-box': expected = `${Math.ceil(n[0] / n[1])} 个`; break;
        case 'remainder-fill-group': expected = `${(n[1] - n[0] % n[1]) % n[1]} 本`; break;
        case 'times-extra': expected = n[0] * n[1] + n[2]; break;
        case 'times-reverse-extra': expected = (n[0] - n[2]) / n[1]; break;
        case 'times-combined': expected = n[0] * (n[1] + 1); break;
        case 'times-difference': expected = n[0] * (n[1] - 1); break;
        case 'common-factor': expected = Array.from({ length: n[0] }, (_, j) => j + 1).filter(x => n[0] % x === 0 && n[1] % x === 0).join('、'); break;
        case 'multiple-two-five': expected = Array.from({ length: n[1] - n[0] - 1 }, (_, j) => n[0] + j + 1).filter(x => x % 2 === 0 && x % 5 === 0).join('、'); break;
        case 'factor-multiple': expected = Array.from({ length: n[0] }, (_, j) => j + 1).filter(x => n[0] % x === 0 && x % n[1] === 0).join('、'); break;
        case 'divisibility-digit': expected = Array.from({ length: 10 }, (_, j) => j).filter(x => (n[0] * 10 + x) % 2 === 0 && (n[0] * 10 + x) % 3 === 0).join('、'); break;
        default: assert.fail(`未知考法：${p.subtemplateId}`);
      }
      assert.equal(p.answer, String(expected), p.question);
    }
  }
}
console.log('三个单元的难度梯度、题量和提高题答案检查通过');
