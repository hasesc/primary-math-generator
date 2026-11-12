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
import { generateJudgeProblems, generateChoiceProblems } from './conceptProblems.js';
import { generateDailyPractice } from './dailyPractice.js';
import { gradeDefaults } from './units.js';

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
  if (config.mode === 'exam') {
    return generateExamPaper(config);
  }
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
  return { paper: spreadSubtemplates(results), shortfall };
}

/**
 * 考法轮转：重排题目，使相邻两题 subtemplateId 尽量不同（GEMINI.md 技术红线）。
 * 贪心策略：每步在“与上一题考法不同”的候选中选剩余数量最多的考法，
 * 可证明只要不存在某考法数量 > ⌈n/2⌉，即可做到相邻零重复；否则达到理论最小值。
 * 无 subtemplateId 的题不参与比较，原相对顺序尽量保留。
 */
export function spreadSubtemplates(list) {
  const rest = list.slice();
  const out = [];
  while (rest.length) {
    const prev = out.length ? out[out.length - 1].subtemplateId : undefined;
    const counts = new Map();
    for (const p of rest) if (p.subtemplateId) counts.set(p.subtemplateId, (counts.get(p.subtemplateId) || 0) + 1);
    let best = -1;
    let bestCount = -1;
    rest.forEach((p, i) => {
      const id = p.subtemplateId;
      if (id && id === prev) return;
      const c = id ? counts.get(id) : 0;
      if (c > bestCount) { best = i; bestCount = c; }
    });
    out.push(rest.splice(best < 0 ? 0 : best, 1)[0]);
  }
  return out;
}

/**
 * 💯 100分制单元达标测验卷生成器 (全真模拟考试卷)
 * 严格按照小学期中期末卷标准大题结构与分值配置：
 * 一、用心思考，正确填空（20分）
 * 二、火眼金睛，明辨是非（判断题 10分）
 * 三、仔细推敲，精挑细选（选择题 10分）
 * 四、神机妙算，细心计算（30分：口算8分 + 竖式12分 + 脱式/简算10分）
 * 五、动手动脑，实践操作（10分：作图/几何/统计）
 * 六、走进生活，解决问题（20分：4道综合生活应用题）
 */
export function generateExamPaper(config) {
  const g = Number(config.grade) || 3;
  const sem = config.semester || '上';
  const diff = config.difficulty || 'medium';

  // 1. 生成单元专属基础题目池（抽取 35 题供各板块提炼）
  const defaults = gradeDefaults(g, sem, 35);
  const unitRaw = generatePaper({
    ...defaults,
    ...config,
    ...(config.unit || {}),
    mode: 'unit',
    problemCount: 35,
  });
  const unitPool = unitRaw.paper || [];

  // 2. 一、用心思考，正确填空（共 10 小题，每题 2 分，共 20 分）
  const fillCandidates = unitPool.filter(p =>
    p.format === 'fill' ||
    p.responseKind === 'blank' ||
    p.question.includes('（  ）') ||
    p.question.includes('______') ||
    p.question.includes('（    ）')
  );
  let sec1Items = fillCandidates.slice(0, 10);
  if (sec1Items.length < 10) {
    const extra = unitPool.filter(p => !p.diagram && p.type !== 'olympiad' && !sec1Items.includes(p)).slice(0, 10 - sec1Items.length);
    sec1Items = [...sec1Items, ...extra];
  }
  const sec1 = sec1Items.map(p => ({
    ...p,
    examSection: 1,
    sectionTitle: '用心思考，正确填空',
    score: 2,
    format: 'fill',
  }));

  // 3. 二、火眼金睛，明辨是非（共 5 小题，每题 2 分，共 10 分）
  const judges = generateJudgeProblems({ grade: g, count: 5 }).map(p => ({
    ...p,
    examSection: 2,
    sectionTitle: '火眼金睛，明辨是非',
    score: 2,
    format: 'judge',
  }));

  // 4. 三、仔细推敲，精挑细选（共 5 小题，每题 2 分，共 10 分）
  const choices = generateChoiceProblems({ grade: g, count: 5 }).map(p => ({
    ...p,
    examSection: 3,
    sectionTitle: '仔细推敲，精挑细选',
    score: 2,
    format: 'choice',
  }));

  // 5. 四、神机妙算，细心计算（共 30 分）
  // 5.1 直接写出得数（8 题，每题 1 分 = 8 分）
  let oralRange = 'round-times-div';
  if (g === 1) oralRange = 'carry-20';
  else if (g === 2) oralRange = 'table-times-2';
  else if (g === 3) oralRange = 'round-times-div';
  else if (g === 4) oralRange = 'two-times-one-oral';
  else if (g === 5) oralRange = 'dec-muldiv-oral';
  else if (g === 6) oralRange = 'percent-oral';

  const orals = generateDailyPractice({
    mode: 'oral',
    grade: g,
    rangeId: oralRange,
    difficulty: diff,
    problemCount: 20,
  }).paper.slice(0, 8).map(p => ({
    ...p,
    examSection: 4,
    calcGroup: 1,
    calcGroupName: '直接写出得数',
    calcGroupScoreText: '每题 1 分，共 8 分',
    score: 1,
    format: 'arithmetic',
  }));

  // 5.2 列竖式计算（4 题，每题 3 分 = 12 分）
  let vertRange = 'divide-one';
  if (g === 1) vertRange = 'sum-100-oral';
  else if (g === 2) vertRange = 'sum-100-column';
  else if (g === 3) vertRange = 'multi-times-one';
  else if (g === 4) vertRange = 'divide-two';
  else if (g === 5) vertRange = 'dec-mul';
  else if (g === 6) vertRange = 'pi-multiply';

  const verticals = (g === 1
    ? generateDailyPractice({ mode: 'oral', grade: 1, rangeId: 'carry-20', difficulty: diff, problemCount: 20 }).paper
    : generateDailyPractice({ mode: 'vertical', grade: g, rangeId: vertRange, difficulty: diff, problemCount: 20 }).paper
  ).slice(0, 4).map((p, idx) => ({
    ...p,
    examSection: 4,
    calcGroup: 2,
    calcGroupName: '列竖式计算' + (idx === 0 ? '（带★的要验算）' : ''),
    calcGroupScoreText: '每题 3 分，共 12 分',
    score: 3,
    format: g === 1 ? 'arithmetic' : 'vertical',
  }));

  // 5.3 脱式计算 / 简便运算（2 题，每题 5 分 = 10 分）
  const mixedPool = unitPool.filter(p => p.type === 'arithmetic' && p.question.includes('+') && (p.question.includes('×') || p.question.includes('÷')));
  let mixedItems = mixedPool.slice(0, 2);
  if (mixedItems.length < 2) {
    const a = (g <= 2 ? 8 : (g <= 4 ? 24 : 125));
    const b = (g <= 2 ? 3 : (g <= 4 ? 6 : 8));
    const c = (g <= 2 ? 15 : (g <= 4 ? 45 : 37));
    mixedItems = [
      {
        question: `${a} × ${b} + ${c} = ______`,
        answer: String(a * b + c),
        explanation: `运算顺序：先算乘法 ${a} × ${b} = ${a * b}，再算加法 ${a * b} + ${c} = ${a * b + c}。`,
      },
      {
        question: `${a * b + c} - ${a} × ${b} = ______`,
        answer: String(c),
        explanation: `运算顺序：先算乘法 ${a} × ${b} = ${a * b}，再算减法 ${a * b + c} - ${a * b} = ${c}。`,
      }
    ];
  }
  const calcMixed = mixedItems.map(p => ({
    ...p,
    examSection: 4,
    calcGroup: 3,
    calcGroupName: g >= 4 ? '脱式计算（能简便的要简便）' : '脱式计算',
    calcGroupScoreText: '每题 5 分，共 10 分',
    score: 5,
    format: 'arithmetic',
  }));

  // 6. 五、动手动脑，实践操作（2 题，每题 5 分，共 10 分）
  let diagramPool = unitPool.filter(p => p.diagram || p.format === 'draw' || p.format === 'grid' || p.format === 'geometry');
  let sec5Items = diagramPool.slice(0, 2);
  if (sec5Items.length < 2) {
    const geoFallbackKeys = {
      1: 'clock',
      2: 'geo-view-1',
      3: 'clock',
      4: 'geo-angle-measure',
      5: 'grid-pairs',
      6: 'grid-bearing',
    };
    const key = geoFallbackKeys[g] || 'clock';
    if (UNIT_PLUGINS[key]) {
      const generated = UNIT_PLUGINS[key](diff, 2, { plugin: key, grade: g, difficulty: diff }) || [];
      sec5Items = [...sec5Items, ...generated.slice(0, 2 - sec5Items.length)];
    }
  }
  const sec5 = sec5Items.map(p => ({
    ...p,
    examSection: 5,
    sectionTitle: '动手动脑，实践操作',
    score: 5,
    format: p.diagram ? 'draw' : (p.format || 'practice'),
  }));

  // 7. 六、走进生活，解决问题（4 题，每题 5 分，共 20 分）
  const wordPool = unitPool.filter(p =>
    (p.type === 'application' || p.responseKind === 'word' || p.question.length > 20) &&
    !sec1.includes(p) && !sec5.includes(p)
  );
  let sec6Items = wordPool.slice(0, 4);
  if (sec6Items.length < 4) {
    const backup = unitPool.filter(p => !sec1.includes(p) && !sec5.includes(p)).slice(0, 4 - sec6Items.length);
    sec6Items = [...sec6Items, ...backup];
  }
  const sec6 = sec6Items.map(p => ({
    ...p,
    examSection: 6,
    sectionTitle: '走进生活，解决问题',
    score: 5,
    format: 'application',
    responseKind: 'word',
  }));

  const allProblems = [
    ...sec1,
    ...judges,
    ...choices,
    ...orals,
    ...verticals,
    ...calcMixed,
    ...sec5,
    ...sec6,
  ];

  return {
    paper: allProblems,
    isExam: true,
    totalScore: 100,
    shortfall: {},
  };
}
