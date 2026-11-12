import { pickForBand } from './helpers.js';

export const unitaryWorkTemplate = {
  id: 'unitary-work',
  gradeRange: ['3', '4', '5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'work-single-rate',
      band: 'easy',
      generate(rng) {
        const days = rng.int(3, 7);
        const perDay = rng.int(15, 40);
        const total = days * perDay;
        const newDays = rng.int(6, 12);
        const newTotal = perDay * newDays;
        return {
          question: `工人李师傅用 ${days} 天时间加工了 ${total} 个零件，平均每天加工几个零件？照这样计算，${newDays} 天能加工多少个零件？`,
          answer: `平均每天加工 ${perDay} 个，${newDays} 天能加工 ${newTotal} 个`,
          subtype: 'unitary-work',
          payload: { kind: 'single-rate', days, total, perDay, newDays, newTotal },
        };
      },
    },
    {
      id: 'work-cooperative',
      band: 'medium',
      generate(rng) {
        const pairs = [
          [6, 6, 3],
          [6, 12, 4],
          [8, 8, 4],
          [10, 10, 5],
          [10, 15, 6],
          [12, 12, 6],
          [12, 24, 8],
          [15, 30, 10],
          [20, 20, 10],
          [20, 30, 12],
        ];
        const [a, b, daysTogether] = rng.pick(pairs);
        return {
          question: `修筑一条公路，甲工程队单独修需要 ${a} 天完成，乙工程队单独修需要 ${b} 天完成。如果两队合修，多少天可以完成？`,
          answer: `${daysTogether} 天`,
          subtype: 'unitary-work',
          payload: { kind: 'cooperative', a, b, total: a * b, daysTogether },
        };
      },
    },
    {
      id: 'work-pool-drain',
      band: 'hard',
      generate(rng) {
        const poolPairs = [
          [4, 6, 12],
          [4, 12, 6],
          [6, 8, 24],
          [6, 10, 15],
          [6, 12, 12],
          [8, 12, 24],
          [10, 15, 30],
          [12, 20, 30],
        ];
        const [fillHours, drainHours, totalHours] = rng.pick(poolPairs);
        return {
          question: `一个蓄水池装有进水管和出水管。单开进水管 ${fillHours} 小时可注满水池，单开出水管 ${drainHours} 小时可将满池水排空。如果两管同时打开，多少小时能将空水池注满？`,
          answer: `${totalHours} 小时`,
          subtype: 'unitary-work',
          payload: { kind: 'pool-drain', fillHours, drainHours, totalHours },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
