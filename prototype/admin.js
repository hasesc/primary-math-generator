import { PROJECT_STATUS } from './projectStatus.js';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const { summary, tests, git, roadmap, changelog, dailyRanges, units } = PROJECT_STATUS;

let selectedUnitId = units[0]?.id || null;

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderTopAndKpi() {
  $('#status-time').textContent = `最新巡检：${summary.generatedAt}`;

  const gitCommit = git.commits?.[0];
  const kpis = [
    {
      label: '人教版教材单元覆盖',
      val: `${summary.totalUnits} / 93`,
      sub: `专属插件 ${summary.dedicatedUnits} 个 · 综合复习 ${summary.reviewUnits} 个 · 含图形 ${summary.diagramUnits} 个`,
    },
    {
      label: '三档难度梯度分布',
      val: `阶梯考法 ${summary.byGradient['tiered-skills']} · 三档数值 ${summary.byGradient['three-tier-range']}`,
      sub: `两档数值(待升级) ${summary.byGradient['two-tier-range']} 个 · 课标定界 ${summary.byGradient['fixed-range']} 个`,
    },
    {
      label: '口算 & 竖式每日一练',
      val: `${summary.dailyCount} 个专项`,
      sub: `7 个口算分级 + 10 个竖式分级（含小数对齐与除法竖式框）`,
    },
    {
      label: '5大自动化测试防线',
      val: `${summary.testsPassed} / ${summary.testsTotal} 通过`,
      sub: summary.testsPassed === summary.testsTotal ? '✅ 零回归错误（冒烟/全覆盖/复算/每日/梯度）' : '❌ 存在未通过测试，请检查',
    },
    {
      label: 'Git 版本快照状态',
      val: git.initialized ? (gitCommit ? `#${gitCommit.hash}` : '已初始化') : '未初始化',
      sub: gitCommit ? `${gitCommit.date} · ${gitCommit.message}` : '运行 node scripts/manage.mjs snapshot 创建快照',
    },
  ];

  $('#kpi-grid').innerHTML = kpis
    .map(
      (k) => `
    <div class="kpi-card">
      <div class="kpi-label">${esc(k.label)}</div>
      <div class="kpi-val">${esc(k.val)}</div>
      <div class="kpi-sub">${esc(k.sub)}</div>
    </div>`
    )
    .join('');
}

function getFilteredUnits() {
  const g = $('#f-grade').value;
  const s = $('#f-sem').value;
  const grad = $('#f-grad').value;
  const mod = $('#f-mod').value;
  const q = $('#f-search').value.trim().toLowerCase();

  return units.filter((u) => {
    if (g !== 'all' && String(u.grade) !== g) return false;
    if (s !== 'all' && u.semester !== s) return false;
    if (grad !== 'all' && u.gradientTier !== grad) return false;
    if (mod !== 'all' && u.moduleKey !== mod) return false;
    if (q) {
      const hay = [
        u.id,
        u.name,
        u.plugin,
        u.arithmeticPlugin,
        u.moduleLabel,
        ...(u.byDifficulty.easy.skills || []),
        ...(u.byDifficulty.medium.skills || []),
        ...(u.byDifficulty.hard.skills || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderUnitTable() {
  const list = getFilteredUnits();
  $('#unit-count-label').textContent = `教材单元列表（共筛选出 ${list.length} / ${units.length} 个）`;

  if (list.length && !list.some((u) => u.id === selectedUnitId)) {
    selectedUnitId = list[0].id;
  }

  const tbody = $('#unit-tbody');
  tbody.innerHTML = list
    .map((u) => {
      const active = u.id === selectedUnitId ? 'active' : '';
      const plugText = u.plugin || u.arithmeticPlugin || (u.topics ? `topics:${u.topics.join(',')}` : '综合复习');
      const diagIcon = u.hasDiagram ? ' 📐' : '';
      const jumpUrl = `index.html?mode=unit&grade=${u.grade}&semester=${encodeURIComponent(u.semester)}&unit=${encodeURIComponent(u.name)}&autogen=1`;
      return `
      <tr class="${active}" data-uid="${esc(u.id)}">
        <td class="mono">${esc(u.id)}</td>
        <td><strong>${esc(u.name)}</strong>${diagIcon}</td>
        <td class="mono" title="${esc(u.moduleFile)}">${esc(plugText)}</td>
        <td class="mono">${u.skillCount.easy} / ${u.skillCount.medium} / ${u.skillCount.hard}</td>
        <td><span class="badge ${esc(u.gradientBadge)}">${esc(u.gradientLabel)}</span></td>
        <td><a class="btn" style="padding:2px 8px;font-size:12px" href="${jumpUrl}" target="_blank" onclick="event.stopPropagation()">出卷 ↗</a></td>
      </tr>`;
    })
    .join('');

  $$('#unit-tbody tr').forEach((tr) => {
    tr.onclick = () => {
      selectedUnitId = tr.dataset.uid;
      renderUnitTable();
      renderUnitDetail();
    };
  });

  renderUnitDetail();
}

function renderUnitDetail() {
  const u = units.find((item) => item.id === selectedUnitId);
  if (!u) {
    $('#detail-title').textContent = '单元三档难度对比';
    $('#detail-links').innerHTML = '';
    $('#detail-body').innerHTML = '<p style="color:var(--muted)">无匹配单元。</p>';
    return;
  }

  $('#detail-title').textContent = `${u.id} · 《${u.name}》三档难度深度对比`;

  const mkJump = (diff, label) =>
    `<a class="btn" style="padding:3px 8px;font-size:12px" target="_blank" href="index.html?mode=unit&grade=${u.grade}&semester=${encodeURIComponent(u.semester)}&unit=${encodeURIComponent(u.name)}&difficulty=${diff}&autogen=1">${label} ↗</a>`;

  $('#detail-links').innerHTML = `
    <div style="display:flex;gap:6px">
      ${mkJump('easy', '预览基础卷')}
      ${mkJump('medium', '预览标准卷')}
      ${mkJump('hard', '预览提高卷')}
    </div>
  `;

  const easySkills = new Set(u.byDifficulty.easy.skills);
  const medSkills = new Set(u.byDifficulty.medium.skills);
  const hardSkills = new Set(u.byDifficulty.hard.skills);

  const diffMeta = [
    { key: 'easy', title: '🟢 基础 (easy)', otherA: medSkills, otherB: hardSkills },
    { key: 'medium', title: '🔵 标准 (medium)', otherA: easySkills, otherB: hardSkills },
    { key: 'hard', title: '🟣 提高 (hard)', otherA: easySkills, otherB: medSkills },
  ];

  const colsHtml = diffMeta
    .map(({ key, title, otherA, otherB }) => {
      const d = u.byDifficulty[key];
      const skillsHtml = d.skills
        .map((sk) => {
          const isUnique = !otherA.has(sk) || !otherB.has(sk);
          return `<span class="skill-tag ${isUnique ? 'unique' : ''}" title="${isUnique ? '差异化考法' : '通用考法'}">${esc(sk)}</span>`;
        })
        .join('');

      const samplesHtml = d.samples
        .map(
          (s, idx) => `
        <div class="sample-item">
          <div class="sample-q">${idx + 1}. ${esc(s.question)} ${s.hasDiagram ? '<span class="badge info">含SVG图</span>' : ''}</div>
          <div class="sample-a">答案：${esc(s.answer)} <span class="mono" style="float:right;font-weight:400">[${esc(s.skill)}]</span></div>
        </div>`
        )
        .join('');

      return `
      <div class="diff-col">
        <h4>
          <span>${title}</span>
          <span class="mono">${d.skills.length}种考法 / ${d.generatedCount}题</span>
        </h4>
        <div class="skill-tags">${skillsHtml}</div>
        <div>${samplesHtml}</div>
      </div>`;
    })
    .join('');

  $('#detail-body').innerHTML = `
    <div class="detail-meta">
      <span class="badge ${esc(u.gradientBadge)}">${esc(u.gradientLabel)}</span>
      <span class="badge neutral">模块：${esc(u.moduleLabel)}</span>
      <span class="badge neutral mono">源码：${esc(u.moduleFile)}</span>
      ${u.plugin ? `<span class="badge primary mono">plugin: ${esc(u.plugin)}</span>` : ''}
      ${u.arithmeticPlugin ? `<span class="badge primary mono">arithmeticPlugin: ${esc(u.arithmeticPlugin)}</span>` : ''}
      ${u.maxCount ? `<span class="badge info">图形卷题量上限: ${u.maxCount}题</span>` : ''}
    </div>
    <div style="font-size:13px;color:#334155;background:#f8fafc;padding:8px 12px;border-radius:6px;border:1px solid var(--border)">
      💡 <strong>梯度诊断说明</strong>：${esc(u.gradientNote)}（绿色高亮标签代表该难度档位独有或进阶差异化的考法 ID）
    </div>
    <div class="diff-cols">${colsHtml}</div>
  `;
}

function renderDailyTab() {
  $('#daily-grid').innerHTML = dailyRanges
    .map((r) => {
      const modeLabel = r.mode === 'oral' ? '口算每日一练' : '竖式每日一练';
      const badgeCls = r.mode === 'oral' ? 'success' : 'info';
      const jumpUrl = `index.html?mode=${r.mode}&grade=${r.grade}&unit=${encodeURIComponent(r.id)}&autogen=1`;
      const samplesHtml = r.samples
        .map(
          (s, i) => `
        <div class="sample-item">
          <div class="sample-q">${i + 1}. ${esc(s.question)}</div>
          <div class="sample-a">答案：${esc(s.answer)}</div>
        </div>`
        )
        .join('');
      return `
      <div class="panel-card">
        <div class="panel-head">
          <span>${esc(r.name)}</span>
          <span class="badge ${badgeCls}">${modeLabel} · ${r.grade}年级+</span>
        </div>
        <div class="list-block">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:12px;color:var(--muted)">
            <span class="mono">ID: ${esc(r.id)}</span>
            <a class="btn" style="padding:2px 8px;font-size:12px" href="${jumpUrl}" target="_blank">直达练习 ↗</a>
          </div>
          ${samplesHtml}
        </div>
      </div>`;
    })
    .join('');
}

function renderRoadmapAndLogs() {
  $('#roadmap-box').innerHTML = roadmap
    .map(
      (sec) => `
    <div class="task-group">
      <h4>${esc(sec.group)}</h4>
      ${sec.items
        .map(
          (it) => `
        <div class="task-item ${it.done ? 'done' : ''}">
          <span>${it.done ? '✅' : '⬜'}</span>
          <span>${esc(it.text)}</span>
        </div>`
        )
        .join('')}
    </div>`
    )
    .join('');

  $('#tests-box').innerHTML = tests
    .map(
      (t) => `
    <div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:13px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong>${t.passed ? '✅' : '❌'} ${esc(t.name)}</strong>
        <span class="mono">${t.durationMs} ms</span>
      </div>
      <div class="mono" style="margin-top:3px;color:var(--muted)">${esc(t.file)} — ${esc(t.summary)}</div>
    </div>`
    )
    .join('');

  if (!git.initialized || !git.commits?.length) {
    $('#git-box').innerHTML = `<p style="color:var(--muted);font-size:13px">暂无 Git 提交记录，请运行 <code>node scripts/manage.mjs snapshot "说明"</code></p>`;
  } else {
    $('#git-box').innerHTML = git.commits
      .map(
        (c) => `
      <div style="padding:6px 0;border-bottom:1px solid var(--border);font-size:13px;display:flex;gap:10px;align-items:baseline">
        <span class="badge primary mono">${esc(c.hash)}</span>
        <span style="flex:1;font-weight:500">${esc(c.message)}</span>
        <span class="mono" style="color:var(--muted)">${esc(c.date)}</span>
      </div>`
      )
      .join('');
  }

  $('#changelog-box').innerHTML = changelog
    .map(
      (entry) => `
    <div class="log-entry">
      <h4><span class="badge primary">${esc(entry.version)}</span> ${esc(entry.title)} <small style="color:var(--muted);font-weight:400">(${esc(entry.date)})</small></h4>
      <ul>
        ${entry.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}
      </ul>
    </div>`
    )
    .join('');
}

/* 绑定事件 */
$$('.tab-btn').forEach((btn) => {
  btn.onclick = () => {
    $$('.tab-btn').forEach((b) => b.classList.toggle('active', b === btn));
    $$('.tab-pane').forEach((p) => p.classList.toggle('active', p.id === `tab-${btn.dataset.tab}`));
  };
});

['#f-grade', '#f-sem', '#f-grad', '#f-mod'].forEach((sel) => {
  $(sel).onchange = renderUnitTable;
});
$('#f-search').oninput = renderUnitTable;

/* 启动渲染 */
renderTopAndKpi();
renderUnitTable();
renderDailyTab();
renderRoadmapAndLogs();
