import { pickForBand } from './helpers.js';

export const boatCurrentTemplate = {
  id: 'boat-current',
  gradeRange: ['5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'boat-find-downstream',
      band: 'easy',
      generate(rng) {
        const vStill = rng.int(10, 20);
        const vCurrent = rng.int(1, 4);
        const vDown = vStill + vCurrent;
        const vUp = vStill - vCurrent;
        return {
          question: `一艘轮船在静水中的速度是每小时 ${vStill} 千米，水流速度是每小时 ${vCurrent} 千米。这艘轮船顺水航行和逆水航行的速度各是多少？`,
          answer: `顺水速度是每小时 ${vDown} 千米，逆水速度是每小时 ${vUp} 千米`,
          subtype: 'boat-current',
          payload: { kind: 'find-downstream', vStill, vCurrent, vDown, vUp },
        };
      },
    },
    {
      id: 'boat-find-still',
      band: 'medium',
      generate(rng) {
        const vStill = rng.int(12, 22);
        const vCurrent = rng.int(2, 5);
        const vDown = vStill + vCurrent;
        const vUp = vStill - vCurrent;
        return {
          question: `一艘轮船顺水航行的速度是每小时 ${vDown} 千米，逆水航行的速度是每小时 ${vUp} 千米。求这艘轮船在静水中的速度和水流速度。`,
          answer: `静水速度是每小时 ${vStill} 千米，水流速度是每小时 ${vCurrent} 千米`,
          subtype: 'boat-current',
          payload: { kind: 'find-still', vDown, vUp, vStill, vCurrent },
        };
      },
    },
    {
      id: 'boat-time',
      band: 'hard',
      generate(rng) {
        const scenarios = [
          { vStill: 15, vCurrent: 3, distance: 72, tUp: 6, tDown: 4, totalHours: 10 },
          { vStill: 18, vCurrent: 6, distance: 72, tUp: 6, tDown: 3, totalHours: 9 },
          { vStill: 20, vCurrent: 4, distance: 96, tUp: 6, tDown: 4, totalHours: 10 },
          { vStill: 24, vCurrent: 6, distance: 90, tUp: 5, tDown: 3, totalHours: 8 },
          { vStill: 16, vCurrent: 4, distance: 60, tUp: 5, tDown: 3, totalHours: 8 },
        ];
        const { vStill, vCurrent, distance, tUp, tDown, totalHours } = rng.pick(scenarios);
        return {
          question: `一艘轮船在静水中的速度是每小时 ${vStill} 千米，水流速度是每小时 ${vCurrent} 千米。甲、乙两码头相距 ${distance} 千米，轮船从甲码头逆水航行到乙码头，再顺水返回甲码头，往返一共需要多少小时？`,
          answer: `一共需要 ${totalHours} 小时（逆水用时 ${tUp} 小时，顺水用时 ${tDown} 小时）`,
          subtype: 'boat-current',
          payload: { kind: 'boat-time', vStill, vCurrent, distance, tUp, tDown, totalHours },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
