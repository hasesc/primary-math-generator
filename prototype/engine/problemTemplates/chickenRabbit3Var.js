import { pickNumberByBand, pickForBand } from './helpers.js';

export const chickenRabbit3VarTemplate = {
  id: 'chicken-rabbit-3var',
  gradeRange: ['4', '5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'three-cattle-chicken',
      band: 'easy',
      generate(rng) {
        for (let attempt = 0; attempt < 30; attempt++) {
          const sheep = pickNumberByBand(rng, 'easy', { min: 5, max: 15 });
          const cattle = sheep + rng.int(1, 5);
          const chicken = pickNumberByBand(rng, 'easy', { min: 5, max: 15 });
          const total = cattle + sheep + chicken;
          const legs = 4 * cattle + 4 * sheep + 2 * chicken;
          return {
            question: `牧场里有牛、羊、鸡共${total}只,腿数共${legs}条,牛和羊都是4条腿、鸡2条腿,且牛比羊多${Math.abs(cattle - sheep)}只。求牛、羊、鸡各多少只?`,
            answer: `牛${cattle}只,羊${sheep}只,鸡${chicken}只`,
            subtype: 'chicken-rabbit-3var',
            payload: { kind: 'three-cattle-chicken', cattle, sheep, chicken, total, legs },
          };
        }
      },
    },
    {
      id: 'three-value',
      band: 'medium',
      generate(rng) {
        for (let attempt = 0; attempt < 30; attempt++) {
          const x = pickNumberByBand(rng, 'medium', { min: 5, max: 12 });
          const y = pickNumberByBand(rng, 'medium', { min: 3, max: 10 });
          const z = pickNumberByBand(rng, 'medium', { min: 8, max: 18 });
          const py = pickNumberByBand(rng, 'medium', { min: 2, max: 8 });
          const px = py + rng.int(1, 7);
          const pz = pickNumberByBand(rng, 'medium', { min: 1, max: 5 });
          const totalValue = x * px + y * py + z * pz;
          return {
            question: `牧场里牛、羊、鸡共${x + y + z}只，腿数共${4 * x + 4 * y + 2 * z}条。牛和羊每只4条腿、鸡每只2条腿。牛每头${px}元、羊每只${py}元、鸡每只${pz}元，总价值${totalValue}元。求三类各多少只？`,
            answer: `牛${x}头,羊${y}只,鸡${z}只`,
            subtype: 'chicken-rabbit-3var',
            payload: { kind: 'three-value', x, y, z, px, py, pz, totalValue },
          };
        }
      },
    },
    {
      id: 'three-cattle-sheep-pig',
      band: 'hard',
      generate(rng) {
        const pig = pickNumberByBand(rng, 'hard', { min: 3, max: 8 });
        const ratio = rng.int(2, 4);
        const cow = pig * ratio;
        const chicken = pickNumberByBand(rng, 'hard', { min: 10, max: 25 });
        const total = cow + pig + chicken;
        const legs = 4 * cow + 4 * pig + 2 * chicken;
        return {
          question: `牛(4条腿)、猪(4条腿)、鸡(2条腿)共${total}只，腿数${legs}条，且牛的数量是猪的${ratio}倍。求三类各多少只？`,
          answer: `牛${cow}只,猪${pig}只,鸡${chicken}只`,
          subtype: 'chicken-rabbit-3var',
          payload: { kind: 'three-cattle-sheep-pig', cow, pig, chicken, total, legs, ratio },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
