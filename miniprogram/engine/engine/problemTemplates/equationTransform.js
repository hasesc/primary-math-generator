import { pickNumberByBand, pickForBand } from './helpers.js';

/**
 * 等式变换与运算律：考查四则运算中和、差、积的变化规律及等式的基本性质。
 */
export const equationTransformTemplate = {
  id: 'equation-transform',
  gradeRange: ['4', '5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'eq-2digit-add',
      band: 'easy',
      generate(rng) {
        const a = pickNumberByBand(rng, 'easy', { min: 25, max: 80 });
        const b = pickNumberByBand(rng, 'easy', { min: 15, max: 70 });
        const delta = [2, 3, 5, 10][rng.int(0, 3)];
        const sum = a + b;
        return {
          question: `在加法算式 ${a} + ${b} = ${sum} 中，如果加数 ${a} 增加 ${delta}，另一个加数 ${b} 不变，新的和是（    ）；若要使和仍保持 ${sum}，加数 ${b} 应该（    ）（填“增加”或“减少”）（    ）。`,
          answer: `${sum + delta}；减少 ${delta}`,
          explanation: `和的变化规律：一个加数增加几，和也随之增加几，故新和为 ${sum} + ${delta} = ${sum + delta}；若要使和不变，另一个加数必须减少相同的数 ${delta}。`,
          subtype: 'equation-transform',
          payload: { a, b, sum, delta, kind: 'sum-change' },
        };
      },
    },
    {
      id: 'eq-3digit-sub',
      band: 'medium',
      generate(rng) {
        const b = pickNumberByBand(rng, 'medium', { min: 60, max: 180 });
        const diff = pickNumberByBand(rng, 'medium', { min: 30, max: 120 });
        const a = b + diff;
        const delta = [2, 4, 5, 10][rng.int(0, 3)];
        return {
          question: `在减法算式 ${a} - ${b} = ${diff} 中，如果被减数增加 ${delta}，减数不变，新的差是（    ）；若被减数变为 ${a + delta}，要使差保持 ${diff} 不变，减数应变为（    ）。`,
          answer: `${diff + delta}；${b + delta}`,
          explanation: `差的变化规律：被减数增加 ${delta}，减数不变，差也增加 ${delta}，故新差为 ${diff} + ${delta} = ${diff + delta}；根据差不变性质，被减数增加 ${delta}，减数也必须增加 ${delta}，减数应变为 ${b} + ${delta} = ${b + delta}。`,
          subtype: 'equation-transform',
          payload: { a, b, diff, delta, kind: 'diff-change' },
        };
      },
    },
    {
      id: 'eq-mul-rearrange',
      band: 'hard',
      generate(rng) {
        const a = pickNumberByBand(rng, 'hard', { min: 12, max: 35 });
        const b = pickNumberByBand(rng, 'hard', { min: 10, max: 25 });
        const factor = [2, 3, 5][rng.int(0, 2)];
        const product = a * b;
        return {
          question: `在乘法算式 ${a} × ${b} = ${product} 中，如果因数 ${a} 乘 ${factor}，另一个因数 ${b} 不变，新的积是（    ）；若因数 ${a} 乘 ${factor}，要使积保持 ${product} 不变，因数 ${b} 应该（    ）（填“乘”或“除以”）（    ）。`,
          answer: `${product * factor}；除以 ${factor}`,
          explanation: `积的变化规律：一个因数乘几（0除外），另一个因数不变，积也乘几，故新积为 ${product} × ${factor} = ${product * factor}；若要使积不变，另一个因数必须除以相同的数 ${factor}。`,
          subtype: 'equation-transform',
          payload: { a, b, product, factor, kind: 'product-change' },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) {
    return pickForBand(this, difficultyLevel, rng);
  },
};
