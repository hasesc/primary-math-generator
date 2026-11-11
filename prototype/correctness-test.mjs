import assert from 'node:assert/strict';
import { createRng } from './engine/utils/rng.js';
import { chickenRabbitTemplate } from './engine/problemTemplates/chickenRabbit.js';
import { treePlantingTemplate } from './engine/problemTemplates/treePlanting.js';
import { statisticsProblems } from './diagramProblems.js';
import { UNIT_PLUGINS } from './unitPlugins.js';

const issues = new Set();
const check = (condition, message) => { if (!condition) issues.add(message); };
const previousRandom = Math.random;
let seed = 1829;
Math.random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32);
try {
  for (let i = 1; i <= 160; i++) {
    for (const template of chickenRabbitTemplate.subtemplates) {
      const { question, answer, payload } = template.generate(createRng(i));
      if (template.id === 'chicken-rabbit-with-difference' || template.id === 'chicken-rabbit-buying') {
        const counts = Object.fromEntries([...answer.matchAll(/(\D+?)(\d+)只/g)].map(([, name, n]) => [name.replace(/^，/, ''), Number(n)]));
        const match = question.match(/(鸡|兔|鹤|龟|兔子|松鼠|蜘蛛|螃蟹)(?:的数量)?比(鸡|兔|鹤|龟|兔子|松鼠|蜘蛛|螃蟹)多(\d+)只/);
        if (match) {
          const [, larger, smaller, difference] = match;
          check(counts[larger] - counts[smaller] === Number(difference) && Number(difference) > 0, '鸡兔同笼的大小关系与答案矛盾');
        }
        if (template.id === 'chicken-rabbit-buying') {
          check(counts.鸡 * payload.price1 + counts.兔 * payload.price2 === payload.totalPrice, '鸡兔价格与总价矛盾');
        }
      }
      if (template.id === 'chicken-rabbit-basic') {
        check(payload.leg1 !== payload.leg2, '同脚数动物无法由总头数与总脚数唯一确定');
      }
      if (template.id === 'chicken-rabbit-move') {
        const [, count, animal, heads, legs] = question.match(/(\d+)只([^后]+)后.*?(\d+)个头[、，](\d+)条腿/);
        const [, first, second] = answer.match(/(\d+)只.*?(\d+)只/).map(Number);
        const remainingFirst = first - (animal === payload.animal1 ? Number(count) : 0);
        const remainingSecond = second - (animal === payload.animal2 ? Number(count) : 0);
        check(remainingFirst >= 0 && remainingSecond >= 0 && remainingFirst + remainingSecond === Number(heads)
          && remainingFirst * payload.leg1 + remainingSecond * payload.leg2 === Number(legs), '鸡兔移出数量、剩余头数或腿数错误');
      }
    }
    for (const template of treePlantingTemplate.subtemplates) {
      const { answer, payload } = template.generate(createRng(i));
      const gaps = (payload.length ?? payload.circumference) / payload.interval;
      check(Number.isInteger(gaps), '植树题的总长度与固定间距矛盾');
      const expected = (gaps + (payload.bothEnds ? 1 : 0)) * (payload.sides || 1);
      check(Number.parseInt(answer, 10) === expected, '植树题的棵数错误');
    }
    for (const p of statisticsProblems('easy', 40, { plugin: 'bar-average' })) {
      if (p.subtemplateId !== 'find-extrema') continue;
      const { labels, values } = p.diagram;
      const highest = labels.filter((_, j) => values[j] === Math.max(...values));
      const lowest = labels.filter((_, j) => values[j] === Math.min(...values));
      const [most, least] = p.answer.split('最多，');
      check(most === highest.join('、') && least === `${lowest.join('、')}最少`, '条形图漏掉并列的最大值或最小值');
    }
    for (const { question, answer } of UNIT_PLUGINS['dec-mul']('medium', 40)) {
      const [a, b] = question.match(/[\d.]+/g).map(Number);
      check(!Number.isInteger(a) || !Number.isInteger(b), '小数乘法混入整数乘法');
      check(Math.round(a * b * 100) === Math.round(Number(answer) * 100), '小数乘法答案错误');
    }
  }
} finally {
  Math.random = previousRandom;
}
assert.deepEqual([...issues], []);
console.log('鸡兔同笼、植树、统计图并列和小数乘法的独立复算通过');
