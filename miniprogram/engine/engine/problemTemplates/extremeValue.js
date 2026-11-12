import { pickForBand } from './helpers.js';

export const extremeValueTemplate = {
  id: 'extreme-value',
  gradeRange: ['5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'extreme-max-product',
      band: 'easy',
      generate(rng) {
        const total = rng.int(10, 20);
        const a = Math.floor(total / 2);
        const b = total - a;
        const product = a * b;
        return {
          question: `把 ${total} 分成两个整数相加，怎样分能使它们的乘积最大？最大乘积是多少？`,
          answer: `分成 ${a} 和 ${b} 时乘积最大，最大乘积是 ${product}`,
          subtype: 'extreme-value',
          payload: { kind: 'max-product', total, a, b, product },
        };
      },
    },
    {
      id: 'extreme-min-perimeter',
      band: 'medium',
      generate(rng) {
        const side = rng.int(4, 12);
        const perimeter = 4 * side;
        const area = side * side;
        return {
          question: `用一根长 ${perimeter} 厘米的铁丝围成一个长方形或正方形（边长为整厘米数），围成什么图形时面积最大？最大面积是多少平方厘米？`,
          answer: `围成正方形时面积最大，边长是 ${side} 厘米，最大面积是 ${area} 平方厘米`,
          subtype: 'extreme-value',
          payload: { kind: 'min-perimeter', side, perimeter, area },
        };
      },
    },
    {
      id: 'extreme-pigeon-min',
      band: 'hard',
      generate(rng) {
        const boxes = rng.int(3, 6);
        const q = rng.int(2, 4);
        const r = rng.int(1, boxes - 1);
        const items = boxes * q + r;
        const minCount = q + 1;
        return {
          question: `把 ${items} 本书放进 ${boxes} 个抽屉里，总有一个抽屉里至少放进几本书？`,
          answer: `至少放进 ${minCount} 本（因为 ${items} ÷ ${boxes} = ${q}……${r}，${q} + 1 = ${minCount}）`,
          subtype: 'extreme-value',
          payload: { kind: 'pigeon-min', items, boxes, q, r, minCount },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
