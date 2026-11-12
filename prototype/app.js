// app.js —— 原型交互逻辑 (现代质感工作台 v0.8)
import { TEXTBOOKS, UNITS, gradeDefaults } from './units.js';
import { generatePaper, spreadSubtemplates } from './paper.js';
import { renderDiagram } from './renderDiagram.js';
import { DAILY_RANGES, generateDailyPractice, renderVertical } from './dailyPractice.js';

const state = {
  textbook: 'rjb',
  mode: 'unit',
  grade: null,
  semester: null,
  unitIndex: null,
  unitName: '',
  unit: null,
  difficulty: 'medium',
  count: 30,
  paper: null,
  paperConfig: null,
  showAnswers: false,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
let pendingGeneration;

/* ── 第一步：教材 / 年级 / 学期 ── */
function renderTextbooks() {
  const box = $('#textbook-options');
  if (!box) return;
  box.innerHTML = '';
  TEXTBOOKS.forEach((t) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'opt';
    b.textContent = t.name;
    b.disabled = !t.available;
    if (t.id === state.textbook) b.classList.add('selected');
    b.onclick = () => {
      if (!t.available) return;
      state.textbook = t.id;
      renderTextbooks();
    };
    box.appendChild(b);
  });
}

function renderGrades() {
  const box = $('#grade-options');
  if (!box) return;
  box.innerHTML = '';
  for (let g = 1; g <= 6; g++) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'opt' + (state.grade === String(g) ? ' selected' : '');
    b.textContent = `${g} 年级`;
    b.onclick = () => {
      state.grade = String(g);
      state.unitIndex = null;
      renderGrades();
      refreshStep1();
    };
    box.appendChild(b);
  }
}

function renderSemesters() {
  const box = $('#semester-options');
  if (!box) return;
  box.innerHTML = '';
  ['上', '下'].forEach((s) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'opt' + (state.semester === s ? ' selected' : '');
    b.textContent = `${s}学期（${s === '上' ? '秋季' : '春季'}）`;
    b.onclick = () => {
      state.semester = s;
      state.unitIndex = null;
      renderSemesters();
      refreshStep1();
    };
    box.appendChild(b);
  });
}

function refreshStep1() {
  const btnNext = $('#btn-next-1');
  if (!btnNext) return;
  const isUnitOrExam = state.mode === 'unit' || state.mode === 'exam';
  const isReady = Boolean(state.grade && (!isUnitOrExam || state.semester));
  btnNext.disabled = !isReady;
  btnNext.textContent = isUnitOrExam ? '下一步：选单元范围 →' : '下一步：选练习范围 →';
  updateMobileBar(1);
}

// 模式切换
$$('#mode-options .mode-card').forEach((card) => {
  card.onclick = () => {
    const mode = card.dataset.mode;
    state.mode = mode;
    state.unit = null;
    state.unitIndex = null;
    $$('#mode-options .mode-card').forEach((c) => {
      c.classList.toggle('selected', c === card);
      c.setAttribute('aria-pressed', String(c === card));
    });
    const isUnitOrExam = state.mode === 'unit' || state.mode === 'exam';
    $('#textbook-field').hidden = !isUnitOrExam;
    $('#semester-field').hidden = !isUnitOrExam;
    refreshStep1();
  };
});

/* ── 第二步：单元选择与搜索 ── */
function renderUnits(filterText = '') {
  const list = $('#unit-list');
  if (!list) return;
  const isUnitOrExam = state.mode === 'unit' || state.mode === 'exam';
  const units = isUnitOrExam
    ? (UNITS[state.grade]?.[state.semester] || [])
    : DAILY_RANGES.filter((r) => r.mode === state.mode && r.grade <= Number(state.grade));

  $('#range-heading').innerHTML = `<span>②</span> ${isUnitOrExam ? '选择单元' : '选择练习范围'}`;
  list.innerHTML = '';

  const q = String(filterText || '').trim().toLowerCase();
  const matched = units.map((u, i) => ({ u, i })).filter(({ u, i }) => {
    if (!q) return true;
    const hay = `${i + 1} ${u.name} ${u.plugin || ''} ${u.note || ''}`.toLowerCase();
    return hay.includes(q);
  });

  if (!matched.length) {
    list.innerHTML = `<div style="grid-column: 1 / -1; padding: 32px; text-align: center; color: var(--muted); font-size: 14px;">未找到匹配的单元，请清空搜索词重试。</div>`;
    return;
  }

  matched.forEach(({ u, i }) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'unit-item' + (state.unitIndex === i ? ' selected' : '');

    const synced = u.calc || u.topics || u.plugin || u.calcType || u.arithmeticPlugin;
    d.disabled = isUnitOrExam && !(synced || u.review);

    // 单元特征标签
    let badgeHtml = '';
    if (state.mode === 'exam') {
      badgeHtml = `<span class="unit-mini-badge" style="background:#fef3c7;color:#b45309">💯 100分测验</span><span class="unit-mini-badge">全真模拟</span>`;
    } else if (state.mode !== 'unit') {
      const isCurrent = u.grade === Number(state.grade);
      badgeHtml = isCurrent
        ? `<span class="unit-mini-badge gradient">🎯 本年级精练</span><span class="unit-mini-badge">${u.grade}年级</span>`
        : `<span class="unit-mini-badge">基础衔接 · ${u.grade}年级</span>`;
    } else if (u.maxCount) {
      badgeHtml = `<span class="unit-mini-badge diagram">📐 图形作图</span><span class="unit-mini-badge">限${u.maxCount}题</span>`;
    } else if (u.review) {
      badgeHtml = `<span class="unit-mini-badge gradient">综合复习练</span>`;
    } else {
      badgeHtml = `<span class="unit-mini-badge gradient">✨ 阶梯考法</span><span class="unit-mini-badge">推荐30题</span>`;
    }

    const idxText = isUnitOrExam ? `Unit ${String(i + 1).padStart(2, '0')}` : `Range ${String(i + 1).padStart(2, '0')}`;

    d.innerHTML = `
      <div class="unit-header-meta">
        <span class="unit-idx-pill">${idxText}</span>
        <span style="color:var(--muted)">${d.disabled ? '暂不可用' : '点击出卷 →'}</span>
      </div>
      <div class="unit-name-text">${u.name}</div>
      <div class="unit-footer-badges">${badgeHtml}</div>
    `;

    d.onclick = () => {
      state.unitIndex = i;
      state.unitName = u.name;
      state.unit = u;
      if (state.mode === 'exam') {
        state.count = 40;
      } else if (state.mode !== 'unit' && state.count < 20) {
        state.count = 20;
      }
      if (u.maxCount && state.count > u.maxCount) state.count = u.maxCount;
      if (!u.maxCount && state.count < 20 && state.mode === 'unit') state.count = 30;
      renderUnits($('#unit-search')?.value || '');
      showPanel(3);
    };
    list.appendChild(d);
  });
}

// 搜索框联动
const searchInput = $('#unit-search');
if (searchInput) {
  searchInput.oninput = (e) => {
    renderUnits(e.target.value);
  };
}

/* ── 面板切换 ── */
function showPanel(n) {
  clearTimeout(pendingGeneration);
  $('#paper-view')?.classList.add('hidden');
  $$('.panel').forEach((p) => p.classList.add('hidden'));
  $(`#panel-${n}`)?.classList.remove('hidden');
  $$('.step').forEach((s) => s.classList.toggle('active', s.dataset.step === String(n)));
  updateMobileBar(n);

  if (n === 2) {
    if ($('#unit-search')) $('#unit-search').value = '';
    renderUnits();
  }
  if (n === 3) {
    $('#btn-generate').disabled = false;
    let badgeText = '';
    if (state.mode === 'exam') {
      badgeText = `已选测验：人教版 ${state.grade}年级${state.semester}册 · 《${state.unitName}》【100分全真模拟考】`;
    } else if (state.mode === 'unit') {
      badgeText = `已选：人教版 ${state.grade}年级${state.semester}册 · 第 ${(state.unitIndex ?? 0) + 1} 单元《${state.unitName}》`;
    } else {
      badgeText = `已选专项：${state.unitName}（${state.unit?.grade}年级起）`;
    }
    if ($('#selected-unit-badge')) $('#selected-unit-badge').textContent = badgeText;

    $$('#difficulty-options .diff-card').forEach((o) => {
      o.classList.toggle('selected', o.dataset.v === state.difficulty);
      o.setAttribute('aria-pressed', String(o.dataset.v === state.difficulty));
    });

    $$('#count-options .count-chip').forEach((o) => {
      const count = Number(o.dataset.v);
      const isMaxRestricted = state.unit?.maxCount;
      if (state.mode === 'exam') {
        o.hidden = count !== 40;
        if (count === 40) o.textContent = '100 分制（全真考卷 6 大题）';
      } else {
        if (count === 40) o.textContent = '40 题（综合练习卷）';
        if (state.mode !== 'unit') {
          o.hidden = count < 20 || count > (state.unit?.maxCount || 40);
        } else {
          o.hidden = isMaxRestricted ? count > state.unit.maxCount : count < 20;
        }
      }
      o.classList.toggle('selected', count === state.count);
    });
  }
}

/* ── 第三步：难度题量绑定 ── */
$$('#difficulty-options .diff-card').forEach((card) => {
  card.onclick = () => {
    state.difficulty = card.dataset.v;
    $$('#difficulty-options .diff-card').forEach((c) => {
      c.classList.remove('selected');
      c.setAttribute('aria-pressed', 'false');
    });
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');
    $('#btn-generate').disabled = false;
  };
});

$$('#count-options .count-chip').forEach((chip) => {
  chip.onclick = () => {
    state.count = Number(chip.dataset.v);
    $$('#count-options .count-chip').forEach((c) => c.classList.remove('selected'));
    chip.classList.add('selected');
    $('#btn-generate').disabled = false;
  };
});

/* ── 试卷大题划分与智能映射 ── */
const SECTION_DEFS = [
  { type: 'arithmetic', title: '直接写出得数', scoreText: '每题 1 分', grid: true },
  { type: 'vertical', title: '列竖式计算', scoreText: '每题 3 分', grid: false },
  { type: 'mixed', title: '脱式计算（递等式计算）', scoreText: '能简算的要简算，每题 4 分', grid: false },
  { type: 'fill', title: '用心思考，正确填空', scoreText: '每空 1 分', grid: false },
  { type: 'judge', title: '火眼金睛，明辨是非（判断题）', scoreText: '对的打“√”，错的打“×”，每题 2 分', grid: false },
  { type: 'choice', title: '仔细推敲，精挑细选（选择题）', scoreText: '将正确选项填在括号内，每题 2 分', grid: false },
  { type: 'compare', title: '在括号里填上“>”、“<”或“=”', scoreText: '每题 1 分', grid: false },
  { type: 'draw', title: '动手操作与作图', scoreText: '每题 4 分', grid: false },
  { type: 'grid', title: '方格图作图与位置', scoreText: '每题 5 分', grid: false },
  { type: 'geometry', title: '图形观察与几何计算', scoreText: '每题 4 分', grid: false },
  { type: 'application', title: '走进生活，解决问题', scoreText: '每题 5 分', grid: false },
  { type: 'olympiad', title: '思维冲浪与培优拓展', scoreText: '每题 5 分', grid: false },
  { type: 'practice', title: '专项综合练', scoreText: '每题 3 分', grid: false },
];

const CN_NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
const responseLabels = {
  calculation: '口算', written: '竖式', blank: '填空', comparison: '比较', word: '应用', short: '简答', judge: '判断', choice: '选择', mixed: '脱式',
};

// 智能判定题目展示题型，将原本单调的 practice 细分至规范板块
function getDisplayType(p) {
  if (p.format && p.format !== 'practice') return p.format;
  if (p.responseKind === 'calculation') return 'arithmetic';
  if (p.responseKind === 'written') return 'vertical';
  if (p.responseKind === 'comparison') return 'compare';
  if (p.responseKind === 'blank') return 'fill';
  if (p.responseKind === 'word') return 'application';
  if (p.responseKind === 'judge' || p.type === 'judge') return 'judge';
  if (p.responseKind === 'choice' || p.type === 'choice') return 'choice';

  const q = p.question || '';
  if (Array.isArray(p.options) && p.options.length) return 'choice';
  if (q.includes('对的打“√”') || q.includes('（√）') || q.includes('（×）')) return 'judge';
  if (p.diagram) {
    if (p.subtype?.startsWith('grid-')) return 'grid';
    return 'geometry';
  }
  if (p.payload && Array.isArray(p.payload.operands)) return 'vertical';

  // 多步四则混合运算 / 脱式计算
  if (q.includes('=') && (q.includes('+') || q.includes('-')) && (q.includes('×') || q.includes('÷') || q.includes('('))) {
    return 'mixed';
  }

  // 口算纯算式（较短且只有单步运算）
  if (q.length < 24 && (q.includes('= （') || q.includes('= _____') || q.includes('= (')) && !q.includes('？') && !q.includes('多少')) {
    return 'arithmetic';
  }

  // 比较大小
  if (q.includes('填上“>”') || q.includes('比较大小') || (q.includes('○') && q.length < 25)) {
    return 'compare';
  }

  // 解决问题 / 生活应用题（疑问句、情境词、长题干）
  if (q.includes('？') || q.includes('?') || q.includes('求') || q.includes('多少') || q.includes('一共') || q.includes('还剩') || q.includes('现价') || q.includes('面积') || q.includes('周长') || q.includes('找回') || q.length > 22) {
    return 'application';
  }

  // 填空题
  if (q.includes('（') || q.includes('(') || q.includes('______')) {
    return 'fill';
  }

  return p.format || p.type || 'practice';
}

function doGenerate(previousConfig) {
  const defaults = gradeDefaults(state.grade, state.semester, state.count);
  const unit = state.unit || {};
  const config = previousConfig || {
    problemCount: state.count,
    mode: state.mode,
    rangeId: unit.id,
    grade: state.grade,
    semester: state.semester,
    difficulty: state.difficulty,
    unitName: state.unitName,
    unit,
    knowledgePoints: [],
    answerMode: 'hidden',
    questionTypes: ['arithmetic', 'application', 'olympiad'],
    ...defaults,
    calcOverride: unit.calc || null,
    calcType: unit.calcType || null,
    arithmeticPlugin: unit.arithmeticPlugin || null,
    topics: unit.topics || null,
    plugin: unit.plugin || null,
  };

  const status = $('#gen-status');
  if (status) status.textContent = '⚡ 算法正在实时生成全套题面，请稍候……';
  $('#btn-generate').disabled = true;

  clearTimeout(pendingGeneration);
  pendingGeneration = setTimeout(() => {
    const t0 = performance.now();
    try {
      const isUnitOrExam = config.mode === 'unit' || config.mode === 'exam';
      const { paper, shortfall } = isUnitOrExam ? generatePaper(config) : generateDailyPractice(config);
      const ms = Math.round(performance.now() - t0);
      if (!paper.length) {
        if (status) status.textContent = '生成失败：当前配置未产出题目，请调整年级或题量。';
        $('#btn-generate').disabled = false;
        return;
      }
      state.paper = paper;
      state.paperConfig = config;
      let note = `✅ 已成功生成整卷共 ${paper.length} 题，耗时 ${ms}ms`;
      if (shortfall._filledByArithmetic) {
        note += `（${shortfall._filledByArithmetic} 题由运算题补足）`;
      }
      if (status) status.textContent = note;
      renderPaper();
      $('#paper-view')?.classList.remove('hidden');
      $('#paper-view')?.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      if (status) status.textContent = '生成出错：' + e.message;
    } finally {
      $('#btn-generate').disabled = false;
    }
  }, 40);
}

function renderPaper() {
  const paper = state.paper;
  const { grade, semester, unitName, difficulty, mode } = state.paperConfig;
  const modeName = { unit: '单元同步练', exam: '单元测验卷', oral: '口算每日一练', vertical: '竖式每日一练' }[mode] || '单元同步练';
  const diffLabel = { easy: '基础巩固', medium: '标准通关', hard: '培优挑战' }[difficulty];

  if (mode === 'exam') {
    $('#p-title').textContent = `${grade} 年级数学 · 单元测验卷（全真模拟考）`;
    $('#p-sub').innerHTML = `
      <div style="font-weight:600;margin-bottom:6px">人教版 · ${semester}册 · 《${unitName}》 · 考评等级：${diffLabel}</div>
      <div class="exam-meta-bar">
        <span>⏱️ 考试时间：60 分钟</span>
        <span>💯 满分：100 分</span>
        <span>班级：________</span>
        <span>姓名：________</span>
        <span>学号：____</span>
        <span>得分：____</span>
      </div>
    `;
    $('#a-sub').textContent = `人教版 · ${grade}年级${semester}册 · 《${unitName}》 参考答案与评分标准`;
  } else {
    $('#p-title').textContent = `${grade} 年级数学 · ${modeName}`;
    $('#p-sub').textContent = `${mode === 'unit' ? `人教版 · ${semester}册 · ` : ''}${unitName} · 考评等级：${diffLabel}`;
    $('#a-sub').textContent = $('#p-sub').textContent;
  }

  const sectionsBox = $('#paper-sections');
  const answersBox = $('#answer-sections');
  sectionsBox.innerHTML = '';
  answersBox.innerHTML = '';

  let qNum = 1;
  let qNumAns = 1;
  let secNo = 0;

  SECTION_DEFS.forEach((sec) => {
    const items = spreadSubtemplates(paper.filter((p) => getDisplayType(p) === sec.type));
    if (!items.length) return;
    secNo++;
    const secTitle = `${CN_NUM[secNo - 1]}、${sec.title}`;

    // 题目区
    const secDiv = document.createElement('div');
    secDiv.className = 'section-block';
    secDiv.innerHTML = `<div class="section-title"><span>${secTitle}</span> <span class="section-score">（${sec.scoreText}）</span></div>`;

    if (sec.grid) {
      const grid = document.createElement('div');
      grid.className = 'calc-grid';
      items.forEach((it) => {
        const q = document.createElement('div');
        q.className = 'q';
        q.textContent = `${qNum}. ${it.question}`;
        qNum++;
        grid.appendChild(q);
      });
      secDiv.appendChild(grid);
    } else {
      const list = document.createElement('div');
      list.className = sec.type === 'vertical' ? 'vertical-grid' : 'app-list' + (items.every((it) => it.diagram) ? ' diagram-list' : '');
      items.forEach((it) => {
        const q = document.createElement('div');
        q.className = 'q';
        const label = it.responseKind && sec.type === 'practice' ? `【${responseLabels[it.responseKind]}】` : '';
        q.textContent = `${qNum}. ${label}${it.question}`;
        qNum++;

        const item = document.createElement('div');
        item.appendChild(q);

        // 选择题选项网格
        if (Array.isArray(it.options) && it.options.length) {
          const optBox = document.createElement('div');
          optBox.className = 'choice-options-grid';
          it.options.forEach((opt) => {
            const optSpan = document.createElement('div');
            optSpan.className = 'opt-item';
            optSpan.textContent = opt;
            optBox.appendChild(optSpan);
          });
          item.appendChild(optBox);
        }

        if (sec.type === 'vertical' && Array.isArray(it.payload?.operands)) item.appendChild(renderVertical(it));
        if (it.diagram) item.appendChild(renderDiagram(it.diagram));

        // 题目下方专用作答与书写留白空间
        // 1. 递等式 / 脱式计算作答留白（3行等号递进，给足分步运算空间）
        if (sec.type === 'mixed' || it.format === 'mixed' || (it.question.includes('=') && (it.question.includes('×') || it.question.includes('÷')) && (it.question.includes('+') || it.question.includes('-')))) {
          const ws = document.createElement('div');
          ws.className = 'steps-workspace';
          for (let i = 0; i < 3; i++) {
            const line = document.createElement('div');
            line.className = 'step-line';
            line.innerHTML = '＝ <span class="step-rule"></span>';
            ws.appendChild(line);
          }
          item.appendChild(ws);
        }
        // 2. 解决问题 / 生活应用题作答留白（作业本淡格线 + 列式算草区 + 规范答语行）
        else if (
          sec.type === 'application' ||
          sec.type === 'olympiad' ||
          it.responseKind === 'word' ||
          it.format === 'application' ||
          it.question.includes('？') ||
          it.question.includes('?') ||
          it.question.includes('多少') ||
          it.question.includes('求') ||
          it.question.includes('一共') ||
          it.question.includes('还剩') ||
          it.question.includes('现价') ||
          it.question.includes('找回') ||
          it.question.length > 22
        ) {
          const ws = document.createElement('div');
          ws.className = 'solve-workspace';
          const space = document.createElement('div');
          space.className = 'solve-space';
          const ansLine = document.createElement('div');
          ansLine.className = 'solve-answer-line';
          ansLine.textContent = '答：________________________________________________。';
          ws.appendChild(space);
          ws.appendChild(ansLine);
          item.appendChild(ws);
        }
        // 3. 作图题 / 几何题预留解题与结论横线
        else if (it.diagram && !it.diagram.readonly) {
          const drawLine = document.createElement('div');
          drawLine.className = 'draw-answer-line';
          drawLine.textContent = '算式或结论：________________________________________________';
          item.appendChild(drawLine);
        }
        list.appendChild(item);
      });
      secDiv.appendChild(list);
    }
    sectionsBox.appendChild(secDiv);

    // 答案区
    const ansDiv = document.createElement('div');
    ansDiv.className = 'section-block';
    ansDiv.innerHTML = `<div class="section-title" style="color:#166534"><span>${secTitle}</span></div>`;
    const ansList = document.createElement('div');
    ansList.className = items.some((it) => it.answerDiagram) ? 'ans-diagrams' : sec.grid ? 'ans-cols' : 'ans-list';

    items.forEach((it) => {
      const a = document.createElement('div');
      a.className = 'ans-item';
      a.innerHTML = `<span style="font-weight:700">${qNumAns}.</span> ${it.answer}`;
      if (it.answerDiagram) a.appendChild(renderDiagram(it.answerDiagram));
      if (it.explanation) {
        const exp = document.createElement('div');
        exp.className = 'ans-exp';
        const tag = (it.format === 'judge' || it.format === 'choice') ? '【解析】' : '【思路点拨】';
        exp.innerHTML = `<span class="exp-badge">${tag}</span>${it.explanation}`;
        a.appendChild(exp);
      }
      qNumAns++;
      ansList.appendChild(a);
    });
    ansDiv.appendChild(ansList);
    answersBox.appendChild(ansDiv);
  });
  updateMobileBar(4);
}

/* ── 手机端快捷吸底条状态控制 ── */
let currentStep = 1;
function updateMobileBar(step) {
  currentStep = step;
  const statusEl = $('#mobile-status-text');
  const btnEl = $('#btn-mobile-next');
  if (!statusEl || !btnEl) return;

  if (step === 1) {
    const isUnitOrExam = state.mode === 'unit' || state.mode === 'exam';
    const isReady = Boolean(state.grade && (!isUnitOrExam || state.semester));
    statusEl.textContent = state.grade
      ? `${state.grade}年级${state.semester || ''} · ${state.mode === 'exam' ? '测验卷' : (state.mode === 'unit' ? '单元练' : '每日一练')}`
      : '请选择年级与学期';
    btnEl.textContent = '选单元 →';
    btnEl.disabled = !isReady;
  } else if (step === 2) {
    statusEl.textContent = state.unitName ? `已选：${state.unitName}` : '请点击选择单元';
    btnEl.textContent = '定题量 →';
    btnEl.disabled = !state.unit;
  } else if (step === 3) {
    statusEl.textContent = state.mode === 'exam' ? '100分全真模拟考卷' : `${state.count}题 · ${state.difficulty === 'easy' ? '基础' : (state.difficulty === 'hard' ? '培优' : '标准')}`;
    btnEl.textContent = '⚡ 立即出卷';
    btnEl.disabled = false;
  } else if (step === 4) {
    statusEl.textContent = `卷面已生成（共 ${state.paper?.length || 0} 题）`;
    btnEl.textContent = '📥 立即下载 PDF 试卷';
    btnEl.disabled = false;
  }
}

/* ── 全局提示与真实 PDF 导出管线（直接下载文件，不调用打印机） ── */
let toastTimer = null;
function showToast(message, duration = 3000) {
  let toast = $('#global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'export-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  if (duration > 0) {
    toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, duration);
  }
}

function getExportFileName(type = 'paper') {
  const gradeStr = state.grade ? `${state.grade}年级` : '';
  const semStr = state.semester ? `${state.semester}册` : '';
  const unitStr = state.unitName || (state.mode === 'oral' ? '口算每日一练' : (state.mode === 'vertical' ? '竖式每日一练' : '练习卷'));
  const modeStr = state.mode === 'exam' ? '单元测验卷' : (state.mode === 'unit' ? '单元同步练' : '');
  const typeStr = type === 'answers' ? '参考答案' : (type === 'both' ? '练习卷与答案合辑' : (modeStr || '练习卷'));
  return `人教版小学数学_${gradeStr}${semStr}_${unitStr}_${typeStr}.pdf`.replace(/[\/\\:*?"<>|]/g, '_');
}

function getExportHtml(type = 'paper') {
  const paperSheet = $('#paper-sheet');
  const answerSheet = $('#answer-sheet');
  if (type === 'paper') {
    return paperSheet ? paperSheet.outerHTML : '';
  } else if (type === 'answers') {
    if (!answerSheet) return '';
    const clone = answerSheet.cloneNode(true);
    clone.classList.remove('hidden');
    return clone.outerHTML;
  } else {
    if (!paperSheet || !answerSheet) return '';
    const ansClone = answerSheet.cloneNode(true);
    ansClone.classList.remove('hidden');
    return paperSheet.outerHTML + '\n' + ansClone.outerHTML;
  }
}

async function exportPdf(type = 'paper') {
  const filename = getExportFileName(type);
  const html = getExportHtml(type);
  if (!html) {
    showToast('⚠️ 未检测到有效卷面内容，请先生成试卷。');
    return;
  }

  showToast('⏳ 正在生成高清 A4 矢量 PDF，请稍候...', 30000);

  try {
    const res = await fetch('/api/export-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html, filename })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }

    const blob = await res.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 8000);

    showToast('✅ PDF 已生成并直接下载，请在“下载”文件夹查看！', 3500);
  } catch (err) {
    console.warn('PDF export API unreachable, fallback to window.print():', err);
    showToast('⚠️ 当前未运行后台服务（建议双击运行【双击启动出题器.bat】体验 1 秒直接下载 PDF）。现为您调起系统打印。', 5000);
    if (type === 'answers' || type === 'both') {
      state.showAnswers = true;
      $('#answer-sheet')?.classList.remove('hidden');
    }
    window.print();
  }
}

const mobileBtn = $('#btn-mobile-next');
if (mobileBtn) {
  mobileBtn.onclick = () => {
    if (currentStep === 1) showPanel(2);
    else if (currentStep === 2 && state.unit) showPanel(3);
    else if (currentStep === 3) doGenerate();
    else if (currentStep === 4) exportPdf('paper');
  };
}

/* ── 事件绑定 ── */
$('#btn-next-1').onclick = () => showPanel(2);
$$('[data-back]').forEach((b) => {
  b.onclick = () => showPanel(Number(b.dataset.back));
});
$('#btn-generate').onclick = () => doGenerate();

// 真实 PDF 直接下载按钮绑定
$('#btn-download-paper')?.addEventListener('click', () => exportPdf('paper'));
$('#btn-download-both')?.addEventListener('click', () => exportPdf('both'));
$('#btn-download-ans')?.addEventListener('click', () => exportPdf('answers'));
$('#btn-print')?.addEventListener('click', () => window.print());

$('#btn-toggle-answers').onclick = () => {
  state.showAnswers = !state.showAnswers;
  $('#answer-sheet').classList.toggle('hidden', !state.showAnswers);
  $('#btn-toggle-answers').textContent = state.showAnswers ? '🙈 隐藏答案页' : '👁️ 显示答案页';
};

$('#btn-regenerate').onclick = () => doGenerate(state.paperConfig);
$('#btn-back-config').onclick = () => {
  $('#paper-view')?.classList.add('hidden');
  showPanel(3);
};

/* ── 初始化第一步 ── */
renderTextbooks();
renderGrades();
renderSemesters();
refreshStep1();

/* ── 支持管理看板 URL 参数直达单元 ── */
const params = new URLSearchParams(window.location.search);
if (params.get('grade')) {
  const qMode = params.get('mode') || 'unit';
  const qGrade = params.get('grade');
  const qSem = params.get('semester');
  const qUnit = params.get('unit');
  const qDiff = params.get('difficulty') || 'medium';

  if (['unit', 'exam', 'oral', 'vertical'].includes(qMode)) {
    state.mode = qMode;
    $$('#mode-options .mode-card').forEach((b) => {
      b.classList.toggle('selected', b.dataset.mode === qMode);
      b.setAttribute('aria-pressed', String(b.dataset.mode === qMode));
    });
    const isUnitOrExam = qMode === 'unit' || qMode === 'exam';
    $('#textbook-field').hidden = !isUnitOrExam;
    $('#semester-field').hidden = !isUnitOrExam;
  }
  state.grade = String(qGrade);
  if (qSem) state.semester = qSem;
  if (['easy', 'medium', 'hard'].includes(qDiff)) state.difficulty = qDiff;

  renderGrades();
  renderSemesters();
  refreshStep1();

  const list = qMode === 'unit'
    ? (UNITS[state.grade]?.[state.semester] || [])
    : DAILY_RANGES.filter((r) => r.mode === qMode && r.grade <= Number(state.grade));

  const idx = list.findIndex((u) => u.name === qUnit || u.id === qUnit);
  if (idx >= 0) {
    const u = list[idx];
    state.unitIndex = idx;
    state.unitName = u.name;
    state.unit = u;
    state.count = u.maxCount || (qMode === 'unit' ? 30 : 20);
    showPanel(3);
    if (params.get('autogen') === '1') doGenerate();
  }
}

window.__APP_INITIALIZED__ = true;
