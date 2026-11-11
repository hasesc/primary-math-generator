// app.js —— 原型交互逻辑
import { TEXTBOOKS, UNITS, gradeDefaults } from './units.js';
import { generatePaper } from './paper.js';
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
const $$ = (sel) => document.querySelectorAll(sel);
let pendingGeneration;

/* ── 第一步：教材 / 年级 / 学期 ── */
function renderTextbooks() {
  const box = $('#textbook-options');
  box.innerHTML = '';
  TEXTBOOKS.forEach((t) => {
    const b = document.createElement('button');
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
  box.innerHTML = '';
  for (let g = 1; g <= 6; g++) {
    const b = document.createElement('button');
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
  box.innerHTML = '';
  ['上', '下'].forEach((s) => {
    const b = document.createElement('button');
    b.className = 'opt' + (state.semester === s ? ' selected' : '');
    b.textContent = `${s}学期`;
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
  $('#btn-next-1').disabled = !(state.grade && (state.mode !== 'unit' || state.semester));
  $('#btn-next-1').textContent = state.mode === 'unit' ? '下一步：选单元 →' : '下一步：选练习范围 →';
}

$$('#mode-options .opt').forEach(button => {
  button.onclick = () => {
    state.mode = button.dataset.mode;
    state.unit = null;
    state.unitIndex = null;
    $$('#mode-options .opt').forEach(b => b.classList.toggle('selected', b === button));
    $('#textbook-options').parentElement.hidden = state.mode !== 'unit';
    $('#semester-options').parentElement.hidden = state.mode !== 'unit';
    refreshStep1();
  };
});
/* ── 第二步：单元 ── */
function renderUnits() {
  const list = $('#unit-list');
  const units = state.mode === 'unit' ? UNITS[state.grade]?.[state.semester] || []
    : DAILY_RANGES.filter(r => r.mode === state.mode && r.grade <= Number(state.grade));
  $('#range-heading').textContent = state.mode === 'unit' ? '② 选择单元' : '② 选择练习范围';
  list.innerHTML = '';
  if (!units.length) list.textContent = '当前年级暂无适用范围，请返回选择其他年级或练习方式。';
  units.forEach((u, i) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'unit-item' + (state.unitIndex === i ? ' selected' : '');
    const synced = u.calc || u.topics || u.plugin || u.calcType || u.arithmeticPlugin;
    d.disabled = state.mode === 'unit' && !(synced || u.review);
    const tag = state.mode !== 'unit' ? '' : d.disabled ? ' · 专项练习建设中' : u.review ? ' · 综合练习'
      : u.maxCount ? (u.plugin === 'counterfeit' ? ' · 短专项' : ' · 图形专项') : ' · 专属卷';
    d.innerHTML = `<div style="color:var(--muted);font-size:12px;margin-bottom:6px">${state.mode === 'unit' ? `第 ${i + 1} 单元` : `${u.grade} 年级起`}${tag}</div>${u.name}${u.note && !synced ? `<div style="color:var(--muted);font-size:11px;margin-top:4px">${u.note}</div>` : ''}`;
    d.onclick = () => {
      state.unitIndex = i;
      state.unitName = u.name;
      state.unit = u;
      if (state.mode !== 'unit' && state.count < 20) state.count = 20;
      if (u.maxCount && state.count > u.maxCount) state.count = u.maxCount;
      if (!u.maxCount && state.count < 20) state.count = 30;
      renderUnits();
      showPanel(3);
    };
    list.appendChild(d);
  });
}

/* ── 面板切换 ── */
function showPanel(n) {
  clearTimeout(pendingGeneration);
  $('#paper-view').classList.add('hidden');
  $$('.panel').forEach((p) => p.classList.add('hidden'));
  $(`#panel-${n}`).classList.remove('hidden');
  $$('.step').forEach((s) => s.classList.toggle('active', s.dataset.step === String(n)));
  if (n === 2) renderUnits();
  if (n === 3) {
    $('#btn-generate').disabled = false;
    $$('#difficulty-options .opt').forEach((o) => o.classList.toggle('selected', o.dataset.v === state.difficulty));
    $$('#count-options .opt').forEach((o) => {
      const count = Number(o.dataset.v);
      o.hidden = state.mode !== 'unit' ? count < 20 || count > (state.unit.maxCount || 40)
        : state.unit.maxCount ? count > state.unit.maxCount : count < 20;
      o.classList.toggle('selected', count === state.count);
    });
  }
}

/* ── 第三步：难度题量 ── */
$$('#difficulty-options .opt').forEach((o) => {
  o.onclick = () => {
    state.difficulty = o.dataset.v;
    $$('#difficulty-options .opt').forEach((x) => x.classList.remove('selected'));
    o.classList.add('selected');
    $('#btn-generate').disabled = false;
  };
});
$$('#count-options .opt').forEach((o) => {
  o.onclick = () => {
    state.count = Number(o.dataset.v);
    $$('#count-options .opt').forEach((x) => x.classList.remove('selected'));
    o.classList.add('selected');
    $('#btn-generate').disabled = false;
  };
});

/* ── 生成整卷 ── */
const SECTION_DEFS = [
  { type: 'arithmetic', title: '计算题', grid: true },
  { type: 'vertical', title: '列竖式计算', grid: false },
  { type: 'fill', title: '填空题', grid: false },
  { type: 'choice', title: '选择题', grid: false },
  { type: 'compare', title: '比较题', grid: false },
  { type: 'draw', title: '画图题', grid: false },
  { type: 'grid', title: '方格图专项', grid: false },
  { type: 'geometry', title: '图形专项', grid: false },
  { type: 'practice', title: '专项练习', grid: false },
  { type: 'application', title: '解决问题', grid: false },
  { type: 'olympiad', title: '思维拓展', grid: false },
];
const CN_NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一'];
const responseLabels = {
  calculation: '计算', written: '竖式', blank: '填空', comparison: '比较', word: '应用', short: '简答',
};

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
    knowledgePoints: [],
    answerMode: 'hidden',
    questionTypes: ['arithmetic', 'application', 'olympiad'],
    ...defaults,
    // 单元联动映射
    calcOverride: unit.calc || null,
    calcType: unit.calcType || null,
    arithmeticPlugin: unit.arithmeticPlugin || null,
    topics: unit.topics || null,
    plugin: unit.plugin || null,
  };
  const status = $('#gen-status');
  status.textContent = '正在实时生成，请稍候……';
  $('#btn-generate').disabled = true;

  // 让 UI 先渲染再执行同步生成
  clearTimeout(pendingGeneration);
  pendingGeneration = setTimeout(() => {
    const t0 = performance.now();
    try {
      const { paper, shortfall } = config.mode === 'unit' ? generatePaper(config) : generateDailyPractice(config);
      const ms = Math.round(performance.now() - t0);
      if (!paper.length) {
        status.textContent = '生成失败：该年级暂无可生成的题型，请调整配置。';
        $('#btn-generate').disabled = false;
        return;
      }
      state.paper = paper;
      state.paperConfig = config;
      let note = `已生成 ${paper.length} 题，耗时 ${ms}ms`;
      if (shortfall._filledByArithmetic) {
        note += `（${shortfall._filledByArithmetic} 题已用计算题补足）`;
      } else if (paper.length < config.problemCount) {
        note += `（本次少 ${config.problemCount - paper.length} 题）`;
      }
      status.textContent = note;
      renderPaper();
      $('#paper-view').classList.remove('hidden');
      $('#paper-view').scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      status.textContent = '生成出错：' + e.message;
    } finally {
      $('#btn-generate').disabled = false;
    }
  }, 50);
}

function renderPaper() {
  const paper = state.paper;
  const { grade, semester, unitName, difficulty, mode } = state.paperConfig;
  const modeName = { unit: '单元同步练', oral: '口算每日一练', vertical: '竖式每日一练' }[mode];
  $('#p-title').textContent = `${grade} 年级数学 · ${modeName}`;
  $('#p-sub').textContent = `${mode === 'unit' ? `人教版 · ${semester}册 · ` : ''}${unitName} · 难度：${{easy:'基础',medium:'标准',hard:'提高'}[difficulty]}`;
  $('#a-sub').textContent = $('#p-sub').textContent;

  const sectionsBox = $('#paper-sections');
  const answersBox = $('#answer-sections');
  sectionsBox.innerHTML = '';
  answersBox.innerHTML = '';
  let qNum = 1;
  let qNumAns = 1;
  let secNo = 0;

  SECTION_DEFS.forEach((sec) => {
    const items = paper.filter((p) => (p.format || p.type) === sec.type);
    if (!items.length) return;
    secNo++;
    const secTitle = `${CN_NUM[secNo - 1]}、${sec.title}`;

    // 题目区
    const secDiv = document.createElement('div');
    const score = sec.type === 'practice' ? '' : `（每题 ${sec.type === 'olympiad' ? 5 : sec.type === 'application' ? 4 : 1} 分）`;
    secDiv.innerHTML = `<div class="section-title">${secTitle}${score}</div>`;
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
      list.className = sec.type === 'vertical' ? 'vertical-grid' : 'app-list' + (items.every(it => it.diagram) ? ' diagram-list' : '');
      items.forEach((it) => {
        const q = document.createElement('div');
        q.className = 'q';
        const label = it.responseKind ? `【${responseLabels[it.responseKind]}】` : '';
        q.textContent = `${qNum}. ${label}${it.question}`;
        qNum++;
        const item = document.createElement('div');
        item.appendChild(q);
        if (sec.type === 'vertical') item.appendChild(renderVertical(it));
        if (it.diagram) item.appendChild(renderDiagram(it.diagram));
        // 书写空间：应用题矮一点，思维拓展高一点
        const ws = document.createElement('div');
        ws.className = 'write-space' + (sec.type === 'olympiad' ? ' tall' : '');
        if (sec.type === 'application' || sec.type === 'olympiad' || it.responseKind === 'word' || it.responseKind === 'written') item.appendChild(ws);
        list.appendChild(item);
      });
      secDiv.appendChild(list);
    }
    sectionsBox.appendChild(secDiv);

    // 答案区：紧凑"题号 + 答案"格式，不复述题目
    const ansDiv = document.createElement('div');
    ansDiv.innerHTML = `<div class="section-title">${sec.title}</div>`;
    const ansList = document.createElement('div');
    ansList.className = items.some(it => it.answerDiagram) ? 'ans-diagrams' : sec.grid ? 'ans-cols' : 'ans-list';
    items.forEach((it) => {
      const a = document.createElement('div');
      a.className = 'ans-item';
      a.textContent = `${qNumAns}. ${it.answer}`;
      if (it.answerDiagram) a.appendChild(renderDiagram(it.answerDiagram));
      qNumAns++;
      ansList.appendChild(a);
    });
    ansDiv.appendChild(ansList);
    answersBox.appendChild(ansDiv);
  });
}

/* ── 事件绑定 ── */
$('#btn-next-1').onclick = () => showPanel(2);
$$('[data-back]').forEach((b) => { b.onclick = () => showPanel(Number(b.dataset.back)); });
$('#btn-generate').onclick = () => doGenerate();
$('#btn-print').onclick = () => window.print();
$('#btn-toggle-answers').onclick = () => {
  state.showAnswers = !state.showAnswers;
  $('#answer-sheet').classList.toggle('hidden', !state.showAnswers);
  $('#btn-toggle-answers').textContent = state.showAnswers ? '隐藏答案页' : '显示答案页';
};
$('#btn-regenerate').onclick = () => doGenerate(state.paperConfig);
$('#btn-back-config').onclick = () => {
  $('#paper-view').classList.add('hidden');
  showPanel(3);
};

/* ── 初始化 ── */
renderTextbooks();
renderGrades();
renderSemesters();
refreshStep1();

/* ── 支持从管理看板 URL 参数直达指定单元/专项预览 ── */
const params = new URLSearchParams(window.location.search);
if (params.get('grade')) {
  const qMode = params.get('mode') || 'unit';
  const qGrade = params.get('grade');
  const qSem = params.get('semester');
  const qUnit = params.get('unit');
  const qDiff = params.get('difficulty') || 'medium';
  if (['unit', 'oral', 'vertical'].includes(qMode)) {
    state.mode = qMode;
    $$('#mode-options .opt').forEach(b => b.classList.toggle('selected', b.dataset.mode === qMode));
    $('#textbook-options').parentElement.hidden = qMode !== 'unit';
    $('#semester-options').parentElement.hidden = qMode !== 'unit';
  }
  state.grade = String(qGrade);
  if (qSem) state.semester = qSem;
  if (['easy', 'medium', 'hard'].includes(qDiff)) state.difficulty = qDiff;
  renderGrades();
  renderSemesters();
  refreshStep1();
  const list = qMode === 'unit' ? (UNITS[state.grade]?.[state.semester] || [])
    : DAILY_RANGES.filter(r => r.mode === qMode && r.grade <= Number(state.grade));
  const idx = list.findIndex(u => u.name === qUnit || u.id === qUnit);
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

