import { pickForBand } from './helpers.js';

export const distanceCircularTemplate = {
  id: 'distance-circular',
  gradeRange: ['5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'circular-meet',
      band: 'easy',
      generate(rng) {
        const v1 = rng.int(4, 6);
        const v2 = rng.int(3, 5);
        const sum = v1 + v2;
        const t = rng.pick([30, 40, 50, 60]);
        const circumference = sum * t;
        return {
          question: `小明和小华在学校周长 ${circumference} 米的环形跑道上跑步。小明每秒跑 ${v1} 米，小华每秒跑 ${v2} 米。两人从同一地点同时出发，背向而行，经过多少秒两人第一次相遇？`,
          answer: `${t} 秒`,
          subtype: 'distance-circular',
          payload: { kind: 'opposite-meet', circumference, v1, v2, t },
        };
      },
    },
    {
      id: 'circular-chase',
      band: 'medium',
      generate(rng) {
        const diff = rng.pick([2, 3, 4]);
        const slow = rng.int(3, 5);
        const fast = slow + diff;
        const t = rng.pick([40, 50, 60, 80, 100]);
        const circumference = diff * t;
        return {
          question: `小明和小华在周长 ${circumference} 米的环形跑道上跑步。小明每秒跑 ${fast} 米，小华每秒跑 ${slow} 米。两人从同一地点同时同向出发，小明经过多少秒第一次追上小华？`,
          answer: `${t} 秒`,
          subtype: 'distance-circular',
          payload: { kind: 'chase', circumference, v1: fast, v2: slow, t },
        };
      },
    },
    {
      id: 'circular-multi',
      band: 'hard',
      generate(rng) {
        const v1 = rng.int(4, 6);
        const v2 = rng.int(3, 5);
        const sum = v1 + v2;
        const t = rng.pick([25, 30, 40, 50]);
        const circumference = sum * t;
        const meets = rng.int(2, 5);
        const totalSec = t * meets;
        return {
          question: `小明和小华在周长 ${circumference} 米的环形跑道上背向跑步。小明每秒跑 ${v1} 米，小华每秒跑 ${v2} 米。两人相遇一次需要多少秒？在 ${totalSec} 秒内，两人一共相遇多少次？`,
          answer: `相遇一次需要 ${t} 秒，在 ${totalSec} 秒内一共相遇 ${meets} 次`,
          subtype: 'distance-circular',
          payload: { kind: 'multi-meet', circumference, v1, v2, t, meets, windowSec: totalSec },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
