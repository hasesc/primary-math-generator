// paper.js —— 整卷生成入口（移植自引擎 useProblemGenerator.generate，去掉 IndexedDB 历史库）
// v0.4：全单元联动——calcOverride / calcType / arithmeticPlugin / topics / plugin 五种映射
// 纯函数 + 实时生成，无题目存储（合规红线）
import { createRng } from './engine/utils/rng.js';
import { ProblemGeneratorFactory } from './engine/strategies/ProblemGeneratorFactory.js';
import {
  buildComposition, computeCap, enumerateSubtypes,
} from './engine/problemTemplates/diversity.js';
import { levelToBand } from './engine/problemTemplates/helpers.js';
import { UNIT_PLUGINS } from './unitPlugins.js';

const ARITH_DEFAULT_PROBLEM_TYPE = 'result';

function difficultyToLevel(d) {
  return { easy: 1, medium: 2, hard: 3 }[d] || 2;
}

let rngCounter = 0;
function nextRng() {
  return createRng(Math.floor(Math.random() * 1e9) + ++rngCounter);
}

function generateOneLive(type, config) {
  const innerConfig = { ...config };
  let strategyType = type;
  if (type === 'arithmetic') {
    // 单元可指定算术类型：decimal-arithmetic（小数）/ fraction-arithmetic（分数）
    strategyType = innerConfig.calcType || 'arithmetic';
    if (strategyType === 'arithmetic' && !innerConfig.problemType) {
      innerConfig.problemType = ARITH_DEFAULT_PROBLEM_TYPE;
    }
  }
  const strategy = ProblemGeneratorFactory.createStrategy(strategyType, innerConfig);
  const p = strategy.generate(nextRng());
  if (!p) return p;
  // 小数/分数策略返回 expression，统一成 question（并补填空横线）
  if (!p.question && p.expression) {
    p.question = p.expression.replace(/=\s*\?$/, '= ______');
    p.answer = String(p.answer);
  }
  return p;
}

/**
 * 生成整卷
 * @param {object} config 除 gradeDefaults 外可带：
 *   calcOverride {operations?, digits?, termCount?} —— 单元对计算题的覆盖
 *   calcType 'decimal-arithmetic'|'fraction-arithmetic' —— 算术策略切换
 *   arithmeticPlugin string —— 算术段插件 key
 *   topics [string] —— 允许的应用题/思维题模板 id
 *   plugin string —— 应用题段插件 key（其应用题全部由插件生成）
 */
export function generatePaper(config) {
  // 1. 单元 calcOverride 合并
  const cfg = { ...config };
  if (cfg.calcOverride) {
    if (cfg.calcOverride.operations) cfg.operations = { ...cfg.operations, ...cfg.calcOverride.operations };
    if (cfg.calcOverride.digits) cfg.digits = { ...cfg.digits, ...cfg.calcOverride.digits };
    if (cfg.calcOverride.termCount) cfg.termCount = cfg.calcOverride.termCount;
  }

  const composition = buildComposition(cfg);
  const activeBand = levelToBand(difficultyToLevel(cfg.difficulty));

  // 2. 单元 topics → 模板 id 白名单
  const topicAllow = cfg.topics && cfg.topics.length ? new Set(cfg.topics) : null;
  const tplIdsByType = { application: new Set(), olympiad: new Set() };
  if (topicAllow) {
    for (const type of ['application', 'olympiad']) {
      for (const s of enumerateSubtypes(type, cfg.grade)) {
        if (topicAllow.has(s.templateId)) tplIdsByType[type].add(s.templateId);
      }
    }
  }

  // 3. 单元插件/题材白名单存在时，思维题段并入应用题段（避免混进与该单元无关的思维题）
  //    非计算类单元（几何/方程/统计等）连计算段也并入——整卷均为该单元内容
  const hasUnitScope = !!(cfg.calcOverride || cfg.plugin || cfg.arithmeticPlugin || cfg.calcType || topicAllow);
  const nonCalcUnit = !!cfg.plugin && cfg.plugin !== 'word' && !cfg.arithmeticPlugin;
  if ((nonCalcUnit || (topicAllow && !cfg.calcOverride && !cfg.arithmeticPlugin && !cfg.calcType))
      && composition.arithmetic > 0) {
    const target = !cfg.plugin && tplIdsByType.application.size === 0 && tplIdsByType.olympiad.size > 0
      ? 'olympiad' : 'application';
    composition[target] += composition.arithmetic;
    composition.arithmetic = 0;
  }
  if (cfg.plugin && composition.olympiad > 0) {
    composition.application += composition.olympiad;
    composition.olympiad = 0;
  } else if (topicAllow && composition.olympiad > 0 && tplIdsByType.olympiad.size === 0 && tplIdsByType.application.size > 0) {
    composition.application += composition.olympiad;
    composition.olympiad = 0;
  } else if (topicAllow && composition.application > 0 && tplIdsByType.application.size === 0 && tplIdsByType.olympiad.size > 0) {
    composition.olympiad += composition.application;
    composition.application = 0;
  }

  const capForCount = {
    application: computeCap(composition.application || 0,
      enumerateSubtypes('application', cfg.grade, activeBand).length || 1),
    olympiad: computeCap(composition.olympiad || 0,
      enumerateSubtypes('olympiad', cfg.grade, activeBand).length || 1),
  };
  const usage = { application: new Map(), olympiad: new Map() };
  const seen = new Set();
  const results = [];
  const shortfall = {};

  const pushResult = (type, p) => {
    const result = {
      type,
      subtype: p.subtype,
      question: p.question,
      answer: p.answer,
      payload: p.payload || {},
    };
    if (p.subtemplateId) result.subtemplateId = p.subtemplateId;
    if (p.band) result.band = p.band;
    if (p.format) result.format = p.format;
    if (p.responseKind) result.responseKind = p.responseKind;
    if (p.diagram) result.diagram = p.diagram;
    if (p.answerDiagram) result.answerDiagram = p.answerDiagram;
    results.push(result);
  };

  // 4. 各题型循环
  for (const [type, count] of Object.entries(composition)) {
    if (!count || count <= 0) continue;

    // 4.1 单元插件：应用题段由 cfg.plugin 生成；算术段可由 cfg.arithmeticPlugin 生成
    const pluginKey = type === 'application'
      ? cfg.plugin
      : (type === 'arithmetic' ? cfg.arithmeticPlugin : null);
    if (pluginKey && UNIT_PLUGINS[pluginKey]) {
      const items = UNIT_PLUGINS[pluginKey](cfg.difficulty, count, cfg) || [];
      items.slice(0, count).forEach((it) => {
        const key = it.diagram ? JSON.stringify([it.question, it.diagram]) : it.question;
        if (seen.has(key)) return;
        seen.add(key);
        pushResult(type, { ...it, subtype: it.subtype || 'unit-plugin' });
      });
      const made = results.filter(p => p.type === type).length;
      if (made < count) shortfall[type] = count - made;
      continue;
    }

    let produced = 0;
    const unitScoped = type !== 'arithmetic' && topicAllow;

    if (unitScoped) {
      // 4.2 单元题材：直接按模板生成（不做盲试，快且保证命中）
      const strategy = ProblemGeneratorFactory.createStrategy(type, cfg);
      let subs = strategy.listSubtemplates().filter((s) => topicAllow.has(s.templateId));
      const bandSubs = subs.filter((s) => s.band === activeBand);
      const preferred = bandSubs.length >= 2 ? bandSubs : subs;
      if (!subs.length) {
        shortfall[type] = count;
        continue;
      }
      const deadline = Date.now() + 3000;
      // 配额按"单元允许的子模板数"分配，而非全年级模板数
      const unitCap = Math.max(2, Math.ceil(count / subs.length));
      let attempts = 0;
      while (produced < count && attempts < count * 40 && Date.now() < deadline) {
        attempts++;
        const pool = attempts > count * 10 ? subs : preferred;
        const leastUsed = Math.min(...pool.map(s => usage[type].get(s.subtemplateId) || 0));
        const candidates = attempts > count * 20 ? pool : pool.filter(s =>
          (usage[type].get(s.subtemplateId) || 0) === leastUsed);
        const st = candidates[Math.floor(Math.random() * candidates.length)];
        try {
          const p = strategy.generateFromSubtemplate(nextRng(), st);
          if (!p || !p.question) continue;
          if (seen.has(p.question)) continue;
          const used = usage[type].get(p.subtemplateId) || 0;
          // 卡住时放宽配额，保证题量（题材池小的单元）
          const effectiveCap = attempts > count * 10 ? unitCap * 3 : unitCap;
          if (used >= effectiveCap) continue;
          usage[type].set(p.subtemplateId, used + 1);
          seen.add(p.question);
          pushResult(type, p);
          produced++;
        } catch (err) { /* 该子模板本次生成失败，换一个 */ }
      }
    } else {
      // 4.3 常规实时生成
      let attempts = 0;
      const budget = count * 25;
      const deadline = Date.now() + 2500;
      while (produced < count && attempts < budget && Date.now() < deadline) {
        attempts++;
        try {
        const settings = type === 'arithmetic' && !cfg.calcType && !cfg.problemType
            && cfg.termCount === 2 && produced % 3 === 2 && attempts <= count * 10
            ? { ...cfg, problemType: 'operand' } : cfg;
          const p = generateOneLive(type, settings);
          if (!p || !p.question) continue;
          if (seen.has(p.question)) continue;
          if ((type === 'application' || type === 'olympiad') && p.subtemplateId) {
            const used = usage[type].get(p.subtemplateId) || 0;
            if (used >= capForCount[type]) continue;
            usage[type].set(p.subtemplateId, used + 1);
          }
          seen.add(p.question);
          pushResult(type, p.subtype === 'arithmetic-operand' ? { ...p, format: 'fill' } : p);
          produced++;
        } catch (err) {
          // 年级/模板不匹配 —— 跳过
        }
      }
    }
    if (produced < count) shortfall[type] = count - produced;
  }

  // 单元卷缺题时保留缺口，避免用无关计算题凑数。
  const missing = Object.values(shortfall).reduce((a, b) => a + b, 0);
  if (missing > 0 && !hasUnitScope) {
    let filled = 0;
    let attempts = 0;
    while (filled < missing && attempts < missing * 25) {
      attempts++;
      try {
        const p = generateOneLive('arithmetic', cfg);
        if (!p || !p.question) continue;
        if (seen.has(p.question)) continue;
        seen.add(p.question);
        results.push({ type: 'arithmetic', subtype: p.subtype, question: p.question, answer: p.answer, payload: {} });
        filled++;
      } catch (err) { /* skip */ }
    }
    shortfall._filledByArithmetic = filled;
  }

  shortfall._unitScoped = hasUnitScope;
  return { paper: results, shortfall };
}
