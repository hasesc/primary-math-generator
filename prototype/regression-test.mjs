import assert from 'node:assert/strict';
import { SCOPE_PLUGINS } from './scopeProblems.js';
import { UNIT_PLUGINS } from './unitPlugins.js';
import { createRng } from './engine/utils/rng.js';
import { chickenRabbit3VarTemplate } from './engine/problemTemplates/chickenRabbit3Var.js';

const originalRandom = Math.random;
let seed = 7351;
Math.random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32);
try {
  for (const p of SCOPE_PLUGINS.calendar('hard', 400, { plugin: 'calendar' })) {
    if (p.subtemplateId !== 'weekday-cycle') continue;
    const [year, month, start, end] = p.question.match(/\d+/g).map(Number);
    assert(end > start && end <= new Date(Date.UTC(year, month, 0)).getUTCDate(), p.question);
  }
  for (const p of SCOPE_PLUGINS['decimal-addsub']('hard', 400, { plugin: 'decimal-addsub' })) {
    if (p.subtemplateId !== 'decimal-coupon-story') continue;
    const [threshold, discount, first, second] = p.question.match(/\d+(?:\.\d+)?/g).map(Number);
    assert(discount < threshold && first + second >= threshold && parseFloat(p.answer) >= 0, p.question);
    assert(Math.abs(parseFloat(p.answer) - (first + second - discount)) < 1e-9, p.question);
  }
  for (const p of SCOPE_PLUGINS['fraction-properties']('hard', 400, { plugin: 'fraction-properties' })) {
    if (p.subtemplateId !== 'find-fraction-by-sum') continue;
    let [a, b] = p.question.match(/约分后是 (\d+)\/(\d+)/).slice(1).map(Number);
    while (b) [a, b] = [b, a % b];
    assert.equal(a, 1, p.question);
  }
  for (const template of chickenRabbit3VarTemplate.subtemplates) for (let i = 1; i <= 80; i++) {
    const p = template.generate(createRng(i));
    const [total, legs] = p.question.match(/共(\d+)只.*?(?:腿数共|腿数)(\d+)条/).slice(1).map(Number);
    const counts = [...p.answer.matchAll(/(?:牛|羊|猪|鸡)(\d+)[头只]/g)].map(m => Number(m[1]));
    const solutions = [];
    for (let x = 0; x <= total; x++) for (let y = 0; y <= total - x; y++) {
      const z = total - x - y;
      if (4 * x + 4 * y + 2 * z !== legs) continue;
      if (template.band === 'easy') {
        if (x - y !== Number(p.question.match(/牛比羊多(\d+)只/)[1])) continue;
      } else if (template.band === 'medium') {
        const [, px, py, pz, value] = p.question.match(/牛每头(\d+)元、羊每只(\d+)元、鸡每只(\d+)元，总价值(\d+)元/).map(Number);
        if (x * px + y * py + z * pz !== value) continue;
      } else {
        if (x !== y * Number(p.question.match(/牛的数量是猪的(\d+)倍/)[1])) continue;
      }
      solutions.push([x, y, z]);
    }
    assert.deepEqual(solutions, [counts], p.question);
  }
  const expectedSkills = {
    'geo-circle': ['circle-circumference', 'circle-area', 'identify-segment', 'diameter-to-radius', 'draw-radius', 'radius-to-diameter'],
    'geo-composite': ['parallelogram-area', 'triangle-area', 'trapezoid-area', 'split-shape', 'combine-areas', 'triangle-find-height'],
  };
  for (const [plugin, skills] of Object.entries(expectedSkills)) for (const difficulty of ['easy', 'medium', 'hard']) {
    const paper = UNIT_PLUGINS[plugin](difficulty, 6, { plugin });
    assert.deepEqual(paper.map(p => p.subtemplateId), skills);
    for (const p of paper) {
      const texts = p.diagram.elements.filter(e => e.tag === 'text').map(e => e.text);
      const numbers = texts.flatMap(t => String(t).match(/\d+(?:\.\d+)?/g) || []).map(Number);
      if (p.subtemplateId === 'circle-circumference') assert.equal(parseFloat(p.answer), Number((2 * 3.14 * numbers[0]).toFixed(2)));
      if (p.subtemplateId === 'circle-area') assert.equal(parseFloat(p.answer), Number((3.14 * numbers[0] ** 2).toFixed(2)));
      if (p.subtemplateId === 'parallelogram-area') assert.equal(parseFloat(p.answer), numbers[0] * numbers[1]);
      if (p.subtemplateId === 'triangle-area') assert.equal(parseFloat(p.answer), numbers[0] * numbers[1] / 2);
      if (p.subtemplateId === 'triangle-find-height') {
        const [area, base] = p.question.match(/\d+/g).map(Number);
        assert.equal(parseFloat(p.answer), 2 * area / base);
      }
    }
  }
  const measurement = UNIT_PLUGINS['unit-len']('medium', 40, { grade: '3', plugin: 'unit-len' });
  assert(measurement.some(p => p.question.includes('吨')), '测量单元缺少吨与千克');
  assert(!UNIT_PLUGINS['unit-len']('medium', 40, { grade: '2', plugin: 'unit-len' }).some(p => /吨|千米|毫米|分米/.test(p.question)));
  for (const difficulty of ['easy', 'medium', 'hard']) {
    const paper = UNIT_PLUGINS.reasoning(difficulty, 30);
    assert.equal(new Set(paper.map(p => p.subtemplateId)).size, 3);
    for (const p of paper) {
      const names = [...new Set(p.question.match(/小[明红刚丽华芳]/g))];
      const fruit = p.subtemplateId.endsWith('-fruit');
      assert.equal(names.length, difficulty === 'hard' ? 4 : difficulty === 'easy' && fruit ? 2 : 3, p.question);
      if (p.subtemplateId.endsWith('-order') && difficulty === 'medium') assert(p.question.includes('排在中间'), p.question);
      if (p.subtemplateId.endsWith('-queue') && difficulty !== 'easy') {
        assert(!/小[明红刚丽华芳]排在第/.test(p.question.split('。')[1]), '进阶排队题不应直接给出位置');
      }
    }
  }
} finally {
  Math.random = originalRandom;
}
console.log('题面有效性、动物题唯一解及缺失考点回归检查通过');
