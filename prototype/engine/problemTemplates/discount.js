import { pickNumberByBand, pickForBand } from './helpers.js';

const ITEMS = ['文具', '书包', '运动鞋', '台灯', '服装', '自行车'];

function pickItem(rng) { return rng.pick(ITEMS); }

export const discountTemplate = {
  id: 'discount',
  gradeRange: ['5', '6'],
  semester: 'all',
  subtemplates: [
    {
      id: 'discount-single',
      band: 'easy',
      generate(rng) {
        // 折扣取整数折或半折 (如 5折、6折、7折、8折、8.5折、9折)
        const discountOptions = [
          { rate: 0.5, name: '5折' },
          { rate: 0.6, name: '6折' },
          { rate: 0.7, name: '7折' },
          { rate: 0.75, name: '7.5折' },
          { rate: 0.8, name: '8折' },
          { rate: 0.85, name: '8.5折' },
          { rate: 0.9, name: '9折' },
        ];
        const d = rng.pick(discountOptions);
        // 原价选 20 的倍数, 确保乘以任何折扣均为整元
        const price = rng.int(3, 20) * 20;
        const final = Math.round(price * d.rate);
        const item = pickItem(rng);
        return {
          question: `一件${item}原价${price}元，现在打${d.name}，现价多少元？`,
          answer: `${final}元`,
          subtype: 'discount',
          payload: { kind: 'single', price, rate: d.rate, final },
        };
      },
    },
    {
      id: 'discount-stack',
      band: 'medium',
      generate(rng) {
        const d = rng.pick([
          { rate: 0.7, name: '7折' },
          { rate: 0.8, name: '8折' },
          { rate: 0.9, name: '9折' },
        ]);
        // 原价 200~500 元
        const price = rng.int(10, 25) * 20;
        const afterRate = Math.round(price * d.rate);
        // 满减门槛取小于等于折后价的整百数, 确保真实达到门槛
        const threshold = Math.max(100, Math.floor(afterRate / 100) * 100);
        const fullMinus = Math.min(60, Math.floor(threshold / 5));
        const final = afterRate - fullMinus;
        const item = pickItem(rng);
        return {
          question: `一件${item}原价${price}元，先打${d.name}，再参加满${threshold}减${fullMinus}的活动，实际付多少元？`,
          answer: `${final}元`,
          subtype: 'discount',
          payload: { kind: 'stack', price, rate: d.rate, threshold, fullMinus, final },
        };
      },
    },
    {
      id: 'discount-buy-get',
      band: 'hard',
      generate(rng) {
        const unitPrice = pickNumberByBand(rng, 'hard', { min: 5, max: 30 });
        const buyN = pickNumberByBand(rng, 'hard', { min: 3, max: 5 });
        const getM = 1;
        const want = pickNumberByBand(rng, 'hard', { min: 7, max: 15 });
        const groups = Math.floor(want / (buyN + getM));
        const leftover = want - groups * (buyN + getM);
        const paid = groups * buyN + leftover;
        const total = unitPrice * paid;
        const item = pickItem(rng);
        return {
          question: `超市${item}每件${unitPrice}元，买${buyN}送${getM}。小明想买${want}件${item}，最少付多少钱？`,
          answer: `${total}元`,
          subtype: 'discount',
          payload: { kind: 'buy-get', unitPrice, buyN, getM, want, paid, total },
        };
      },
    },
  ],
  generate(rng, difficultyLevel) { return pickForBand(this, difficultyLevel, rng); },
};
