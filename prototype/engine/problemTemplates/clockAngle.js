import { pickForBand } from './helpers.js';

export const clockAngleTemplate = {
  id: 'clock-angle',
  gradeRange: ['5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'clock-angle-find',
      band: 'easy',
      generate(rng) {
        const h = rng.int(1, 12);
        const raw = h * 30;
        const angle = raw > 180 ? 360 - raw : raw;
        return {
          question: `钟面上 ${h} 点整时，时针与分针所夹的较小角是多少度？`,
          answer: `${angle}°`,
          subtype: 'clock-angle',
          payload: { h, angle, kind: 'find-angle' },
        };
      },
    },
    {
      id: 'clock-half-angle',
      band: 'medium',
      generate(rng) {
        const h = rng.int(1, 11);
        const hourAngle = 30 * h + 15;
        const minuteAngle = 180;
        const diff = Math.abs(hourAngle - minuteAngle);
        const angle = diff > 180 ? 360 - diff : diff;
        return {
          question: `钟面上 ${h} 点 30 分时，时针和分针所夹的较小角是多少度？`,
          answer: `${angle}°`,
          subtype: 'clock-angle',
          payload: { h, angle, kind: 'half-angle' },
        };
      },
    },
    {
      id: 'clock-rotation',
      band: 'hard',
      generate(rng) {
        const minutes = rng.pick([10, 15, 20, 30, 45]);
        const minAngle = minutes * 6;
        const hours = rng.int(1, 5);
        const hourAngle = hours * 30;
        return {
          question: `钟面上的分针走 1 分钟旋转 6°，时针走 1 小时旋转 30°。分针走 ${minutes} 分钟旋转了多少度？时针走 ${hours} 小时旋转了多少度？`,
          answer: `分针旋转了 ${minAngle}°，时针旋转了 ${hourAngle}°`,
          subtype: 'clock-angle',
          payload: { minutes, minAngle, hours, hourAngle, kind: 'rotation' },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
