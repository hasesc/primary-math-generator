// coverage-test.mjs —— 全单元联动覆盖测试（v2）
import assert from 'node:assert/strict';
import { generatePaper } from './paper.js';
import { gradeDefaults, UNITS } from './units.js';
import { SCOPE_PLUGINS } from './scopeProblems.js';

const grades = ['1', '2', '3', '4', '5', '6'];
const sems = ['上', '下'];
let total = 0, ok = 0, fail = 0, concept = 0;
const rows = [];
const singleSection = new Set();
let checked = 0;

for (const g of grades) {
  for (const sem of sems) {
    for (const u of UNITS[g][sem]) {
      total++;
      const defaultCount = u.maxCount || 30;
      const d = gradeDefaults(g, sem, defaultCount);
      let paper = [], shortfall = {}, ms = 0;
      try {
        const t0 = Date.now();
        const r = generatePaper({
          problemCount: defaultCount, grade: g, semester: sem, difficulty: 'medium',
          questionTypes: ['arithmetic', 'application', 'olympiad'],
          ...d,
          calcOverride: u.calc || null,
          calcType: u.calcType || null,
          arithmeticPlugin: u.arithmeticPlugin || null,
          topics: u.topics || null,
          plugin: u.plugin || null,
        });
        ms = Date.now() - t0;
        paper = r.paper; shortfall = r.shortfall;
      } catch (e) {
        rows.push(`❌ ${g}${sem} ${u.name} 生成异常: ${e.message}`);
        fail++;
        continue;
      }
      const apps = paper.filter(p => p.type !== 'arithmetic');
      const arith = paper.filter(p => p.type === 'arithmetic');
      const synced = !!(u.calc || u.topics || u.plugin || u.calcType || u.arithmeticPlugin);

      if (!synced) {
        concept++;
        continue;
      }

      const problems = [];
      const formats = new Set(paper.map(p => p.format || p.type));
      if (u.plugin === 'rect' || u.plugin === 'rect-area') {
        assert.deepEqual(formats, new Set(['application', 'fill', 'choice']), u.name);
        assert(paper.every(p => !p.question.includes(u.plugin === 'rect-area' ? '周长' : '面积')), u.name);
      }
      if (u.name === '时分秒') {
        assert(formats.has('fill'), '时分秒应包含反求开始时间的填空题');
        assert(paper.some(p => p.question.includes('一共写了多少分钟')), '时分秒应包含求时长题');
      }
      if (u.name === '万以内数的认识') {
        const expected = new Set(['place-value', 'compose-number', 'compare-numbers', 'read-number', 'write-number', 'estimate']);
        assert.deepEqual(new Set(paper.map(p => p.subtemplateId)), expected, '万以内数的认识应练数位、组成、大小、读写和近似数');
        assert(paper.every(p => !/年龄|厘米|苹果|分数/.test(p.question)), '万以内数的认识混入通用应用题');
        for (const p of paper.filter(p => p.subtemplateId === 'place-value')) {
          const [, number, place] = p.question.match(/(\d+) 中，([个十百千万])位/);
          const index = '个十百千万'.indexOf(place);
          const power = 10 ** index;
          assert.equal(Number(p.answer), Math.floor(Number(number) / power) % 10 * power);
        }
      }
      if (['unit-len', 'unit-area', 'unit-weight'].includes(u.plugin)) {
        assert(formats.has('fill') && formats.has('compare'), u.name);
      }
      if (u.plugin === 'clock') {
        assert.deepEqual(formats, new Set(['fill', 'draw', 'choice']), u.name);
        for (const p of paper) {
          const clocks = p.diagram.clocks;
          if (p.format === 'draw') {
            assert.deepEqual(clocks, [null]);
            assert(p.answerDiagram.clocks[0]);
          } else if (p.format === 'choice') {
            assert.equal(new Set(clocks.map(t => t.hour * 60 + t.minute)).size, 3);
            const t = clocks['ABC'.indexOf(p.answer)];
            assert(p.question.includes(`${t.hour}时${t.minute ? `${t.minute}分` : ''}？`));
          }
        }
      }
      if (paper[0]?.subtype === 'unit-statistics') {
        assert(paper.every(p => p.diagram.kind === u.plugin && p.diagram.values.length === 4), u.name);
        if (u.plugin === 'pie-chart') {
          assert(paper.every(p => p.diagram.values.reduce((sum, n) => sum + n) === 100), u.name);
        }
      }
      for (const difficulty of ['easy', 'medium', 'hard']) {
        for (const problemCount of u.maxCount ? [3, u.maxCount] : [20, 30, 40]) {
          const result = generatePaper({
            ...gradeDefaults(g, sem, problemCount), grade: g, semester: sem, difficulty, problemCount,
            calcOverride: u.calc, calcType: u.calcType, arithmeticPlugin: u.arithmeticPlugin,
            topics: u.topics, plugin: u.plugin,
          });
          const label = `${g}${sem} ${u.name}`;
          checked++;
          if (result.paper.length !== problemCount) {
            problems.push(`${difficulty}/${problemCount} 实出 ${result.paper.length}`);
          }
          if (SCOPE_PLUGINS[u.plugin]) {
            const skills = result.paper.map(p => p.subtemplateId);
            assert(result.paper.every(p => p.subtype === `unit-${u.plugin}`), `${label} 混入其他专题`);
            assert(new Set(skills).size >= Math.min(problemCount, 4), `${label} 专项考法不足`);
            assert(skills.every((skill, i) => i === 0 || skill !== skills[i - 1]), `${label} 考法连续重复`);
            assert(result.paper.every(p => p.format === 'practice' && p.responseKind), `${label} 缺少卷面题型`);
            if (u.plugin.endsWith('-oral') || u.plugin.endsWith('-column')) {
              const calculations = result.paper.filter(p => p.subtemplateId === 'calculate');
              const oral = u.plugin.endsWith('-oral');
              assert(calculations.every(p => p.responseKind === (oral ? 'calculation' : 'written')
                && p.question.startsWith(oral ? '口算：' : '列竖式计算：')), `${label} 口算与笔算范围混用`);
              if (u.plugin.startsWith('sum-10000')) {
                assert(calculations.every(p => {
                  const [a, b] = p.question.match(/\d+/g).map(Number);
                  return oral ? (a < 100 && b < 100) || (a % 10 === 0 && b % 10 === 0)
                    : a >= 100 && b >= 100 && a <= 999 && b <= 999;
                }), `${label} 运算项位数不符合单元范围`);
              }
            }
            if (u.name === '四则运算') assert(skills.includes('nested-brackets') && skills.includes('inverse-relationship'), label);
            if (u.name === '混合运算') assert(!skills.includes('nested-brackets'), label);
          }
          if (u.maxCount && !SCOPE_PLUGINS[u.plugin]) {
            const skills = result.paper.map(p => p.subtemplateId);
            assert.equal(new Set(skills).size, 3, `${label} 应包含三种考法`);
            assert(skills.every((skill, i) => i === 0 || skill !== skills[i - 1]), `${label} 考法连续重复`);
            for (const skill of new Set(skills)) assert.equal(skills.filter(s => s === skill).length, problemCount / 3);
            const kind = u.plugin.startsWith('grid-') ? 'grid' : 'geometry';
            if (kind === 'grid') assert(result.paper.some(p => p.answerDiagram), `${label} 缺少画图参考答案`);
            for (const { question, answer, diagram, answerDiagram, subtemplateId } of result.paper) {
              assert.equal(diagram.kind, kind);
              if (/^(画出|从黑点|只画|在图中用小圆点|用笔描出)|请用小正方体摆出/.test(question)) {
                assert(answerDiagram, `${label} 作图题缺少参考图`);
              }
              if (subtemplateId === 'measure-angle' && kind === 'geometry') {
                const [, ray] = diagram.elements;
                const { x1, y1, x2, y2 } = ray.attrs;
                assert.equal(Math.round(Math.atan2(y1 - y2, x2 - x1) * 180 / Math.PI), Number.parseInt(answer, 10), label);
              }
              for (const d of [diagram, answerDiagram].filter(Boolean)) {
                if (kind === 'grid') {
                  const points = [...(d.marks || []).map(mark => mark.at), ...(d.polygons || []).flat()];
                  assert(points.flat().every(value => value >= 0 && value <= 9), `${label} 图形超出方格`);
                } else {
                  assert(d.elements.some(e => e.tag !== 'text'), `${label} 缺少图形元素`);
                  assert(d.elements.every(e => Object.values(e.attrs).every(v => typeof v !== 'number' || Number.isFinite(v))), `${label} 图形坐标无效`);
                }
              }
            }
          }
          if (result.paper[0]?.subtype === 'unit-statistics') {
            const skills = result.paper.map(p => p.subtemplateId);
            const expected = u.plugin === 'pie-chart' ? 10 : 7;
            assert(new Set(skills).size >= expected, `${label} 考法不足`);
            assert.equal(new Set(result.paper.map(p => p.format || p.type)).size, 1, `${label} 卷面应保留考法轮转顺序`);
            assert(skills.every((skill, i) => i === 0 || skill !== skills[i - 1]), `${label} 考法连续重复`);
            for (const skill of new Set(skills)) {
              assert(skills.filter(value => value === skill).length <= Math.ceil(problemCount / expected), `${label} 单一考法占比过高`);
            }
          }
          if (new Set(result.paper.map(p => p.format || p.type)).size < 2) singleSection.add(label);
        }
      }
      if (paper.length < (u.maxCount || 28)) problems.push(`题量${paper.length}`);
      if (apps.length === 0) problems.push('无应用题');
      if (shortfall._filledByArithmetic) problems.push(`兜底补${shortfall._filledByArithmetic}题`);
      if (ms > 1200) problems.push(`耗时${ms}ms`);
      if (paper.some(p => !p.question || p.answer === undefined || p.answer === null || p.answer === 'null')) problems.push('存在空题/空答案');

      if (u.plugin) {
        const bad = apps.filter(p => !String(p.subtype || '').startsWith('unit-'));
        if (bad.length) problems.push(`插件题${apps.length - bad.length}/${apps.length}`);
      }
      if (u.arithmeticPlugin) {
        const prefix = {
          'dec-div': 'unit-dec-div', 'dec-mul': 'unit-dec-mul', 'dec-addsub': 'unit-dec-addsub',
          'frac-mul': 'unit-frac-mul', 'frac-div': 'unit-frac-div',
          'table-div': 'unit-table-div', 'rem-div': 'unit-rem-div',
        }[u.arithmeticPlugin];
        const bad = arith.filter(p => p.subtype !== prefix);
        if (bad.length) problems.push(`算术插件${arith.length - bad.length}/${arith.length}`);
      }
      if (u.calcType && !u.arithmeticPlugin) {
        const prefix = u.calcType === 'decimal-arithmetic' ? 'arithmetic-decimal' : 'arithmetic-fraction';
        const bad = arith.filter(p => p.subtype !== prefix);
        if (bad.length) problems.push(`纯运算题${arith.length - bad.length}/${arith.length}`);
      }

      if (problems.length) {
        fail++;
        rows.push(`⚠️ ${g}${sem} ${u.name} → ${problems.join('；')}`);
      } else {
        ok++;
        const sample = apps[0] || arith[0];
        rows.push(`✅ ${g}${sem} ${u.name} → ${String(sample.question).slice(0, 34)}`);
      }
    }
  }
}

console.log(rows.filter(r => !r.startsWith('✅')).join('\n'));
console.log(`\n通过样例（抽样 8 条）：`);
console.log(rows.filter(r => r.startsWith('✅')).slice(0, 8).join('\n'));
console.log(`\n总计 ${total} 单元：联动通过 ${ok}，无专属出题映射（含整理与复习）${concept}，不合格 ${fail}`);
console.log(`已检查 ${checked} 种难度与题量组合。至少一组配置只有一个卷面分类的单元（分类数不等于考法数）共 ${singleSection.size} 个：${[...singleSection].join('、')}`);
if (fail) process.exitCode = 1;
