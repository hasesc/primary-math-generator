import assert from 'node:assert/strict';
import { SCOPE_PLUGINS } from './scopeProblems.js';
import { UNIT_PLUGINS } from './unitPlugins.js';

function gcd(a, b) {
  let x = Math.abs(a), y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}
function simp(num, den) {
  const g = gcd(num, den);
  return den === g ? String(num / g) : `${num / g}/${den / g}`;
}

// 18 个全部三档考法完全独立的专项插件（easy / medium / hard 每档 4 种考法，且 hard 与 medium 完全不重叠）
const STRICT_TIERED_SCOPE_PLUGINS = [
  'divide-remainder',
  'times-as-many',
  'factors',
  'calendar',
  'operation-laws',
  'mixed-order',
  'fraction-intro',
  'fraction-properties',
  'fraction-addsub',
  'decimal-intro',
  'decimal-properties',
  'decimal-addsub',
  'fraction-division',
  'optimize',
  'possibility',
  'counterfeit',
  'number-shape',
  'proportion',
];

for (const plugin of STRICT_TIERED_SCOPE_PLUGINS) {
  const ids = {};
  for (const difficulty of ['easy', 'medium', 'hard']) {
    const problems = SCOPE_PLUGINS[plugin](difficulty, 40, { plugin });
    assert.equal(problems.length, 40, `${plugin}/${difficulty}: 题量不足`);
    ids[difficulty] = new Set(problems.map(p => p.subtemplateId));
    assert.equal(ids[difficulty].size, 4, `${plugin}/${difficulty}: 应包含 4 种考法`);
  }
  assert([...ids.hard].every(id => !ids.medium.has(id)), `${plugin}: 提高题应有独立考法`);
  assert([...ids.medium].some(id => !ids.easy.has(id)), `${plugin}: 标准题与基础题应有梯度差异`);
}

// 额外 15 个包含阶梯考法分支的插件（含保留必考公共考法的专项、乘法/口算进阶、几何进阶与通用插件）
const PARTIAL_OR_UNIT_TIERED_PLUGINS = [
  'four-operations',
  'number-10000',
  'large-number',
  'multi-times-one',
  'two-times-two',
  'three-times-two',
  'sum-10000-oral',
  'pattern',
  'combine',
  'reasoning',
  'pigeonhole',
  'geo-angle-intro',
  'geo-angle-measure',
  'geo-cuboid',
  'geo-cylinder',
];

for (const plugin of PARTIAL_OR_UNIT_TIERED_PLUGINS) {
  const ids = {};
  const targetCount = plugin.startsWith('geo-') ? 6 : 30;
  for (const difficulty of ['easy', 'medium', 'hard']) {
    const problems = UNIT_PLUGINS[plugin](difficulty, targetCount, { plugin });
    assert.equal(problems.length, targetCount, `${plugin}/${difficulty}: 题量不足`);
    ids[difficulty] = new Set(problems.map(p => p.subtemplateId));
    assert(ids[difficulty].size >= 1, `${plugin}/${difficulty}: 缺少 subtemplateId`);
  }
  assert(
    [...ids.hard].some(id => !ids.medium.has(id)) || [...ids.medium].some(id => !ids.easy.has(id)),
    `${plugin}: 三档应包含差异化考法分支`
  );
}

// 对全部 18 个严格阶梯插件的提高档 (hard) 进行 60 轮独立逆向数学复算
for (let i = 0; i < 60; i++) {
  for (const plugin of STRICT_TIERED_SCOPE_PLUGINS) {
    for (const p of SCOPE_PLUGINS[plugin]('hard', 4, { plugin })) {
      const n = (p.question.match(/\d+(?:\.\d+)?/g) || []).map(Number);
      let expected;
      switch (p.subtemplateId) {
        // 1. divide-remainder
        case 'remainder-dividend': expected = n[0] * n[1] + n[2]; break;
        case 'remainder-divisor': expected = (n[0] - n[2]) / n[1]; break;
        case 'remainder-extra-box': expected = `${Math.ceil(n[0] / n[1])} 个`; break;
        case 'remainder-fill-group': expected = `${(n[1] - n[0] % n[1]) % n[1]} 本`; break;
        // 2. times-as-many
        case 'times-extra': expected = n[0] * n[1] + n[2]; break;
        case 'times-reverse-extra': expected = (n[0] - n[2]) / n[1]; break;
        case 'times-combined': expected = n[0] * (n[1] + 1); break;
        case 'times-difference': expected = n[0] * (n[1] - 1); break;
        // 3. factors
        case 'common-factor': expected = Array.from({ length: n[0] }, (_, j) => j + 1).filter(x => n[0] % x === 0 && n[1] % x === 0).join('、'); break;
        case 'multiple-two-five': expected = Array.from({ length: n[1] - n[0] - 1 }, (_, j) => n[0] + j + 1).filter(x => x % 2 === 0 && x % 5 === 0).join('、'); break;
        case 'factor-multiple': expected = Array.from({ length: n[0] }, (_, j) => j + 1).filter(x => n[0] % x === 0 && x % n[1] === 0).join('、'); break;
        case 'divisibility-digit': expected = Array.from({ length: 10 }, (_, j) => j).filter(x => (n[0] * 10 + x) % 2 === 0 && (n[0] * 10 + x) % 3 === 0).join('、'); break;
        // 4. calendar
        case 'elapsed-hours-same-day': expected = `${n[2] + 12 - n[1]} 小时`; break;
        case 'elapsed-days-in-month': expected = `${n[3] - n[1] + 1} 天`; break;
        case 'weekday-cycle': {
          const diff = (n[3] - n[2]) % 7;
          expected = ['星期三', '星期四', '星期五', '星期六', '星期日', '星期一', '星期二'][diff];
          break;
        }
        case 'cross-midnight-hours': expected = `${24 - n[0] + n[1]} 小时`; break;
        // 5. operation-laws
        case 'near-hundred-plus': expected = n[0] * n[1] + n[2]; break;
        case 'near-hundred-minus': expected = n[0] * n[1] - n[2]; break;
        case 'distributive-diff': expected = n[0] * n[1] - n[2] * n[3]; break;
        case 'pair-eight-125': expected = n[0] * n[1] * n[2]; break;
        // 6. mixed-order
        case 'mixed-reverse-blank': expected = n[0] + n[2] / n[1]; break;
        case 'mixed-combine-expr': expected = n[3] * n[4]; break;
        case 'mixed-two-step-div': expected = `${(n[0] - n[1]) / n[2]} 本`; break;
        case 'mixed-compare-brackets': expected = (n[0] + n[1]) * n[2] - (n[3] + n[4] * n[5]); break;
        // 7. fraction-intro
        case 'fraction-of-quantity': expected = `${(n[0] / n[2]) * n[1]} 颗`; break;
        case 'fraction-remain-quantity': expected = `${n[0] - (n[0] / n[2]) * n[1]} 米`; break;
        case 'fraction-two-parts': expected = `${n[1] - n[0] - n[2]}/${n[1]}`; break;
        case 'fraction-reverse-total': expected = `${n[1] * n[2]} 个`; break;
        // 8. fraction-properties
        case 'invariant-property-add': expected = (n[2] / n[0]) * n[1]; break;
        case 'find-fraction-by-sum': {
          const k = n[2] / (n[0] + n[1]);
          expected = `${n[0] * k}/${n[1] * k}`;
          break;
        }
        case 'share-rope-ratio': expected = `1/${n[1]}`; break;
        case 'max-proper-diff': expected = `1/${n[0]}`; break;
        // 9. fraction-addsub
        case 'frac-solve-equation': expected = simp(n[2] * n[1] - n[3], n[1] * n[3]); break;
        case 'frac-assoc-simplify': expected = simp(n[3] + 1, n[3]); break;
        case 'frac-exceed-plan': expected = simp(n[0] + n[2] - n[1], n[1]); break;
        case 'frac-three-parts-remain': expected = `${n[0] - (n[1] + n[3]) / n[2]} 米`; break;
        // 10. decimal-intro
        case 'decimal-carry-add': expected = `${Number((n[0] + n[1]).toFixed(1))} 元`; break;
        case 'decimal-borrow-sub': expected = `${Number((n[0] - n[1]).toFixed(1))} 元`; break;
        case 'decimal-rope-cut': expected = `${Number((n[0] - n[1] - n[2]).toFixed(1))} 米`; break;
        case 'decimal-diff-total': expected = `${Number((n[0] * 2 - n[1]).toFixed(1))} 千克`; break;
        // 11. decimal-properties
        case 'shift-diff-find': expected = Number((n[0] / 9).toFixed(1)); break;
        case 'unit-convert-decimal': expected = Number((n[0] + n[1] / 1000).toFixed(2)); break;
        case 'approx-max-two-dec': expected = `${n[0].toFixed(1)}4`; break;
        case 'approx-min-two-dec': expected = `${(n[0] - 0.1).toFixed(1)}5`; break;
        // 12. decimal-addsub
        case 'decimal-coupon-story': expected = `${Number((n[2] + n[3] - n[1]).toFixed(1))} 元`; break;
        case 'decimal-mistake-recover': expected = Number((n[2] - (n[1] - n[0])).toFixed(1)); break;
        case 'decimal-tare-weight': expected = `${Number((2 * n[1] - n[0]).toFixed(1))} 千克`; break;
        case 'decimal-shared-overlap': expected = `${Number((n[0] + n[1] - n[2]).toFixed(1))} 米`; break;
        // 13. fraction-division
        case 'frac-known-more': expected = `${(n[0] * n[2]) / (n[2] + n[1])} 棵`; break;
        case 'frac-known-less': expected = `${(n[0] * n[2]) / (n[2] - n[1])} 元`; break;
        case 'frac-work-together': expected = `${(n[1] * n[2]) / (n[1] + n[2])} 天`; break;
        case 'frac-sum-ratio-find': expected = (n[0] * n[2]) / (n[1] + n[2]); break;
        // 14. optimize
        case 'three-queue-min-wait': expected = `${3 * n[0] + 2 * n[1] + n[2]} 分钟`; break;
        case 'general-pancake-time': expected = `${(n[2] * 2 / n[0]) * n[1]} 分钟`; break;
        case 'tianji-card-strategy': expected = '2 局'; break;
        case 'multi-parallel-tea': expected = `${n[0] + n[1] + n[6]} 分钟`; break;
        // 15. possibility
        case 'balance-balls-for-fair': expected = `${n[0] - n[1]} 个`; break;
        case 'min-draws-guarantee': expected = `${n[1] + 1} 个`; break;
        case 'fair-spinner-adjust': expected = `${(n[1] - n[2]) / 2} 格`; break;
        case 'odd-even-card-game': expected = '甲'; break;
        // 16. counterfeit
        case 'max-items-for-k-weighs': expected = 3 ** n[0]; break;
        case 'find-weighs-from-count': expected = n[0] <= 27 ? 3 : n[0] <= 81 ? 4 : 5; break;
        case 'first-weigh-remaining': expected = n[2]; break;
        case 'second-weigh-count': expected = Math.ceil(n[5] / 3); break;
        // 17. number-shape
        case 'table-seating-forward': expected = 2 * n[6] + 2; break;
        case 'table-seating-reverse': expected = (n[4] - 2) / 2; break;
        case 'pythagorean-square-diff': expected = n[0] ** 2 - n[1] ** 2; break;
        case 'hollow-frame-dots': expected = n[0] ** 2 - n[1] ** 2; break;
        // 18. proportion
        case 'scale-area-expand': expected = `${n[0] * n[1] * n[2] ** 2} 平方厘米`; break;
        case 'shadow-height-prop': expected = `${(n[0] * n[2]) / n[1]} 米`; break;
        case 'paving-tiles-inverse': expected = `${(n[0] * n[1]) / n[2]} 块`; break;
        case 'gear-teeth-inverse': expected = `${(n[0] * n[1]) / n[2]} 圈`; break;
        default: assert.fail(`未知考法：${p.subtemplateId}`);
      }
      assert.equal(p.answer, String(expected), `${plugin}/${p.subtemplateId}: ${p.question}`);
    }
  }
}

console.log(`✅ 25 个专项插件（18 个全独立三档考法 + 7 个进阶分支插件）的难度梯度、题量和提高题答案复算全部通过！`);
