import { pickForBand } from './helpers.js';

export const ageProblemFamilyTemplate = {
  id: 'age-problem-family',
  gradeRange: ['4', '5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'parent-child-ratio',
      band: 'easy',
      generate(rng) {
        const child = rng.int(7, 10);
        const ratio = rng.int(3, 5);
        const parent = child * ratio;
        return {
          question: `爸爸今年的年龄是小明的 ${ratio} 倍，小明今年 ${child} 岁。爸爸今年多少岁？`,
          answer: `${parent} 岁`,
          subtype: 'age-problem-family',
          payload: { kind: 'parent-child-ratio', child, ratio, parent },
        };
      },
    },
    {
      id: 'parent-mother-child',
      band: 'medium',
      generate(rng) {
        const child = rng.int(7, 11);
        const mother = rng.int(32, 38);
        const father = mother + rng.int(1, 4);
        const totalAge = child + mother + father;
        const yearsLater = rng.int(3, 6);
        const futureSum = totalAge + 3 * yearsLater;
        return {
          question: `小明家有三口人，爸爸今年 ${father} 岁，妈妈今年 ${mother} 岁，小明今年 ${child} 岁。再过 ${yearsLater} 年，他们三人的年龄总和是多少岁？`,
          answer: `${futureSum} 岁`,
          subtype: 'age-problem-family',
          payload: { kind: 'parent-mother-child', child, mother, father, yearsLater, totalAge, futureSum },
        };
      },
    },
    {
      id: 'grandparent-parent-child',
      band: 'hard',
      generate(rng) {
        const child = rng.int(8, 12);
        const parent = rng.int(34, 42);
        const grandparent = parent + rng.int(26, 32);
        const totalAge = child + parent + grandparent;
        const diff = grandparent - child;
        return {
          question: `小明今年 ${child} 岁，爸爸今年 ${parent} 岁，爷爷今年 ${grandparent} 岁。现在三人的年龄总和是多少岁？爷爷比小明大多少岁？`,
          answer: `年龄总和是 ${totalAge} 岁，爷爷比小明大 ${diff} 岁`,
          subtype: 'age-problem-family',
          payload: { kind: 'grandparent-parent-child', child, parent, grandparent, totalAge, diff },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
