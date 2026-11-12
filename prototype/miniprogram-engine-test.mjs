// prototype/miniprogram-engine-test.mjs
// 验证 repos/skeleton/miniprogram/engine 生成引擎的一致性与全学段覆盖

import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  UNITS,
  gradeDefaults,
  generatePaper,
  generateExamPaper,
  DAILY_RANGES,
  generateDailyPractice,
  renderDiagramSVG,
} from '../repos/skeleton/miniprogram/engine/index.js';

describe('微信小程序引擎全链路测试', () => {
  it('涵盖 1~6 年级上下册所有单元结构', () => {
    assert.strictEqual(typeof UNITS, 'object');
    for (let g = 1; g <= 6; g++) {
      assert.ok(Array.isArray(UNITS[String(g)]['上']), `年级 ${g} 上册单元存在`);
      assert.ok(Array.isArray(UNITS[String(g)]['下']), `年级 ${g} 下册单元存在`);
    }
  });

  it('每日一练涵盖全部 24 个专项分类', () => {
    assert.strictEqual(DAILY_RANGES.length, 24);
  });

  it('同步练能在小程序引擎中正常生成 1~6 年级试卷', () => {
    for (let g = 1; g <= 6; g++) {
      const u = UNITS[String(g)]['上'][0];
      const def = gradeDefaults(g, '上', u.maxCount || 20);
      const res = generatePaper({
        ...def,
        ...u,
        grade: String(g),
        semester: '上',
        difficulty: 'medium',
        problemCount: u.maxCount || 20,
      });
      assert.ok(Array.isArray(res.paper), `年级 ${g} 生成 paper 数组`);
      assert.ok(res.paper.length > 0, `年级 ${g} 题目数量大于 0`);
      assert.ok(res.paper[0].question, '题干存在');
      assert.ok(res.paper[0].answer !== undefined, '答案存在');
    }
  });

  it('100分制测验卷能正常生成并返回 100 分满分结构', () => {
    const u = UNITS['4']['上'][1];
    const def = gradeDefaults(4, '上', 35);
    const exam = generateExamPaper({
      ...def,
      ...u,
      grade: '4',
      semester: '上',
      difficulty: 'medium',
    });
    assert.strictEqual(exam.totalScore, 100);
    assert.ok(exam.paper.length >= 25);
  });

  it('SVG 图形渲染器能在纯字符串环境中输出有效 SVG', () => {
    const svgClock = renderDiagramSVG({ kind: 'clock', clocks: [{ hour: 3, minute: 0 }] });
    assert.ok(svgClock.startsWith('<svg') && svgClock.endsWith('</svg>'));

    const svgGrid = renderDiagramSVG({ kind: 'grid', numbered: true });
    assert.ok(svgGrid.startsWith('<svg') && svgGrid.endsWith('</svg>'));
  });
});
