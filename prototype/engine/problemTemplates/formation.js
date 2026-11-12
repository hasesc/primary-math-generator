import { pickForBand } from './helpers.js';

export const formationTemplate = {
  id: 'formation',
  gradeRange: ['4', '5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'formation-solid',
      band: 'easy',
      generate(rng) {
        const side = rng.int(6, 15);
        const total = side * side;
        const perimeter = 4 * (side - 1);
        return {
          question: `同学们做操排成每边 ${side} 人的实心正方形队伍，这个正方形队伍一共有多少人？最外层一圈有多少人？`,
          answer: `一共 ${total} 人，最外层一圈有 ${perimeter} 人`,
          subtype: 'formation',
          payload: { kind: 'solid', side, total, perimeter },
        };
      },
    },
    {
      id: 'formation-hollow',
      band: 'medium',
      generate(rng) {
        const inner = rng.int(4, 8);
        const layers = rng.int(2, 4);
        const outer = inner + 2 * layers;
        const total = outer * outer - inner * inner;
        return {
          question: `同学们排成一个中空的正方形队伍，最外层每边 ${outer} 人，内部中空部分每边 ${inner} 人，一共有 ${layers} 层。这个正方形队伍一共有多少人？`,
          answer: `${total} 人`,
          subtype: 'formation',
          payload: { kind: 'hollow', outer, inner, layers, total },
        };
      },
    },
    {
      id: 'formation-from-perimeter',
      band: 'hard',
      generate(rng) {
        const side = rng.int(10, 25);
        const perimeter = 4 * (side - 1);
        const total = side * side;
        return {
          question: `同学们排成一个实心正方形队伍，最外层一圈一共有 ${perimeter} 人。这个正方形队伍每边有多少人？一共有多少人？`,
          answer: `每边有 ${side} 人，一共有 ${total} 人`,
          subtype: 'formation',
          payload: { kind: 'from-perimeter', perimeter, side, total },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
