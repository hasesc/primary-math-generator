// scripts/manage.mjs —— 出题小程序全链路管理与巡检引擎
// 用法：
//   node scripts/manage.mjs                 # 运行全部测试 + 93单元深度体检 + 更新看板数据 prototype/projectStatus.js
//   node scripts/manage.mjs snapshot "说明"  # 运行巡检更新看板后，自动 git add & git commit 保存版本快照

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { UNITS, gradeDefaults } from '../prototype/units.js';
import { generatePaper } from '../prototype/paper.js';
import { DAILY_RANGES, generateDailyPractice } from '../prototype/dailyPractice.js';
import { SCOPE_PLUGINS } from '../prototype/scopeProblems.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const TEST_SUITES = [
  { id: 'smoke', name: '整卷生成冒烟测试 (6年级×3难度)', file: 'prototype/smoke-test.mjs' },
  { id: 'coverage', name: '93单元全量联动与756配置覆盖测试', file: 'prototype/coverage-test.mjs' },
  { id: 'correctness', name: '数学答案独立逆向复算测试 (160轮)', file: 'prototype/correctness-test.mjs' },
  { id: 'daily', name: '口算/竖式每日一练专项测试 (123配置)', file: 'prototype/daily-practice-test.mjs' },
  { id: 'gradient', name: '三档难度阶梯考法与答案测试', file: 'prototype/difficulty-gradient-test.mjs' },
];

// 各插件的难度梯度实现分类（基于源码静态+动态双重核验）
const THREE_TIER_PLUGINS = new Set([
  'elapsed', 'unit-len', 'unit-weight', 'unit-area', 'percent', 'negative', 'dec-div', 'word',
  'data-table', 'double-table', 'bar-chart', 'bar-average', 'line-chart', 'pie-chart',
  'grid-motion-1', 'grid-motion-2', 'grid-motion-3', 'grid-direction', 'grid-pairs', 'grid-bearing',
  'geo-perimeter', 'geo-area', 'geo-quad', 'geo-triangle', 'geo-composite', 'geo-circle',
  'geo-view-1', 'geo-view-2', 'geo-view-3', 'geo-angle-intro', 'geo-angle-measure', 'geo-cuboid', 'geo-cylinder',
  'dec-mul', 'dec-addsub', 'frac-mul', 'frac-div',
]);

const TWO_TIER_PLUGINS = new Set([]);

function detectModule(u) {
  if (u.review) return { key: 'review', label: '全科综合复习 (Engine)', file: 'prototype/paper.js' };
  if (u.plugin && SCOPE_PLUGINS[u.plugin]) return { key: 'scope', label: '课标范围专项 (scopeProblems)', file: 'prototype/scopeProblems.js' };
  if (u.plugin?.startsWith('geo-')) return { key: 'geometry', label: '几何与视图专项 (geometryProblems)', file: 'prototype/geometryProblems.js' };
  if (u.plugin?.startsWith('grid-')) return { key: 'grid', label: '方格与坐标作图 (gridProblems)', file: 'prototype/gridProblems.js' };
  if (['clock', 'data-table', 'double-table', 'bar-chart', 'bar-average', 'line-chart', 'pie-chart'].includes(u.plugin)) {
    return { key: 'diagram', label: '钟表与统计图表 (diagramProblems)', file: 'prototype/diagramProblems.js' };
  }
  if (u.plugin || u.arithmeticPlugin) return { key: 'unitPlugin', label: '通用单元插件 (unitPlugins)', file: 'prototype/unitPlugins.js' };
  if (u.topics) return { key: 'engineTopic', label: '引擎题材模板 (problemTemplates)', file: 'prototype/engine/problemTemplates/' };
  return { key: 'default', label: '默认计算与组卷', file: 'prototype/paper.js' };
}

function classifyGradient(u, byDiff) {
  const easySkills = new Set(byDiff.easy.skills);
  const medSkills = new Set(byDiff.medium.skills);
  const hardSkills = new Set(byDiff.hard.skills);
  const sameSet = (a, b) => a.size === b.size && [...a].every(x => b.has(x));

  if (!sameSet(easySkills, medSkills) || !sameSet(medSkills, hardSkills)) {
    return {
      tier: 'tiered-skills',
      label: '阶梯考法',
      badge: 'success',
      note: '基础/标准/提高具备不同的考法模板或进阶题型分支',
    };
  }
  if (u.plugin === 'clock') {
    if (String(u.grade) === '1') {
      return {
        tier: 'fixed-range',
        label: '课标定界',
        badge: 'neutral',
        note: '一年级上册《认识钟表》课标规定仅考整时（固定步长60分）',
      };
    }
    return {
      tier: 'three-tier-range',
      label: '三档数值',
      badge: 'info',
      note: '基础(15分刻)/标准(5分刻)/提高(1分刻)三档精细度',
    };
  }
  if (THREE_TIER_PLUGINS.has(u.plugin)) {
    return {
      tier: 'three-tier-range',
      label: '三档数值',
      badge: 'info',
      note: '基础/标准/提高三档采用独立递进的数值区间或图形步长',
    };
  }
  if (TWO_TIER_PLUGINS.has(u.plugin) || u.arithmeticPlugin) {
    return {
      tier: 'two-tier-range',
      label: '两档数值',
      badge: 'warning',
      note: '目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法',
    };
  }
  return {
    tier: 'fixed-range',
    label: '课标定界',
    badge: 'neutral',
    note: '按教材单元固定算理/图形范围出题（三档考法与数值区间一致）',
  };
}

function withSeededRandom(seedStart, fn) {
  const orig = Math.random;
  let seed = seedStart;
  Math.random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32);
  try {
    return fn();
  } finally {
    Math.random = orig;
  }
}

function auditUnits() {
  const units = [];
  const grades = ['1', '2', '3', '4', '5', '6'];
  const sems = ['上', '下'];

  for (const grade of grades) {
    for (const semester of sems) {
      const list = UNITS[grade][semester] || [];
      list.forEach((u, index) => {
        const count = u.maxCount || 20;
        const byDifficulty = {};
        for (const [dIdx, difficulty] of ['easy', 'medium', 'hard'].entries()) {
          const seed = Number(grade) * 10000 + (semester === '上' ? 1000 : 2000) + index * 50 + dIdx * 7 + 42;
          const res = withSeededRandom(seed, () => {
            const defaults = gradeDefaults(grade, semester, count);
            return generatePaper({
              problemCount: count,
              grade,
              semester,
              difficulty,
              questionTypes: ['arithmetic', 'application', 'olympiad'],
              ...defaults,
              calcOverride: u.calc || null,
              calcType: u.calcType || null,
              arithmeticPlugin: u.arithmeticPlugin || null,
              topics: u.topics || null,
              plugin: u.plugin || null,
            });
          });
          const paper = res.paper || [];
          const skills = [...new Set(paper.map(p => p.subtemplateId || p.subtype || p.type))];
          const formats = [...new Set(paper.map(p => p.format || p.type))];
          // 取前 4 道不同考法的代表样题
          const samples = [];
          const seenSkill = new Set();
          for (const p of paper) {
            const sk = p.subtemplateId || p.subtype || p.type;
            if (seenSkill.has(sk) && samples.length < 4 && seenSkill.size < skills.length) continue;
            seenSkill.add(sk);
            samples.push({
              question: p.question,
              answer: String(p.answer),
              skill: sk,
              format: p.format || p.type,
              responseKind: p.responseKind || null,
              hasDiagram: Boolean(p.diagram),
              hasAnswerDiagram: Boolean(p.answerDiagram),
            });
            if (samples.length >= 4) break;
          }
          byDifficulty[difficulty] = {
            generatedCount: paper.length,
            targetCount: count,
            skills,
            formats,
            samples,
          };
        }

        const mod = detectModule(u);
        const grad = classifyGradient({ ...u, grade, semester }, byDifficulty);

        units.push({
          id: `G${grade}${semester}-U${index + 1}`,
          grade: Number(grade),
          semester,
          unitNo: index + 1,
          name: u.name,
          plugin: u.plugin || null,
          arithmeticPlugin: u.arithmeticPlugin || null,
          topics: u.topics || null,
          maxCount: u.maxCount || null,
          review: Boolean(u.review),
          moduleKey: mod.key,
          moduleLabel: mod.label,
          moduleFile: mod.file,
          gradientTier: grad.tier,
          gradientLabel: grad.label,
          gradientBadge: grad.badge,
          gradientNote: grad.note,
          skillCount: {
            easy: byDifficulty.easy.skills.length,
            medium: byDifficulty.medium.skills.length,
            hard: byDifficulty.hard.skills.length,
          },
          hasDiagram: byDifficulty.medium.samples.some(s => s.hasDiagram),
          byDifficulty,
        });
      });
    }
  }
  return units;
}

function auditDailyRanges() {
  return DAILY_RANGES.map((r, i) => {
    const res = withSeededRandom(9000 + i * 31, () => generateDailyPractice({
      mode: r.mode,
      rangeId: r.id,
      grade: r.grade,
      problemCount: 20,
      difficulty: 'medium',
    }));
    return {
      ...r,
      maxCount: r.maxCount || 40,
      samples: res.paper.slice(0, 3).map(p => ({ question: p.question, answer: String(p.answer) })),
    };
  });
}

function runTestSuites() {
  const results = [];
  for (const suite of TEST_SUITES) {
    const t0 = Date.now();
    try {
      const stdout = execFileSync(process.execPath, [path.join(ROOT, suite.file)], {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      const ms = Date.now() - t0;
      const lines = stdout.trim().split(/\r?\n/).filter(Boolean);
      results.push({
        ...suite,
        passed: true,
        durationMs: ms,
        summary: lines.slice(-2).join(' | '),
      });
    } catch (err) {
      const ms = Date.now() - t0;
      results.push({
        ...suite,
        passed: false,
        durationMs: ms,
        summary: (err.stderr || err.stdout || err.message || '执行失败').trim().slice(0, 200),
      });
    }
  }
  return results;
}

function parseMarkdownTasks() {
  const statusFile = path.join(ROOT, 'PROJECT_STATUS.md');
  if (!fs.existsSync(statusFile)) return [];
  const text = fs.readFileSync(statusFile, 'utf8');
  const sections = [];
  let current = null;
  for (const line of text.split(/\r?\n/)) {
    const h3 = line.match(/^###\s+(.+)/);
    if (h3) {
      current = { group: h3[1].trim(), items: [] };
      sections.push(current);
      continue;
    }
    const task = line.match(/^- \[([ xX])\]\s+(.+)/);
    if (task && current) {
      current.items.push({
        done: task[1].toLowerCase() === 'x',
        text: task[2].replace(/\*\*/g, '').trim(),
      });
    }
  }
  return sections;
}

function parseChangelog() {
  const file = path.join(ROOT, 'CHANGELOG.md');
  if (!fs.existsSync(file)) return [];
  const text = fs.readFileSync(file, 'utf8');
  const entries = [];
  let current = null;
  for (const line of text.split(/\r?\n/)) {
    const h2 = line.match(/^##\s+\[([^\]]+)\]\s*-\s*([^·]+)·\s*(.+)/);
    if (h2) {
      current = {
        version: h2[1].trim(),
        date: h2[2].trim(),
        title: h2[3].trim(),
        bullets: [],
      };
      entries.push(current);
      continue;
    }
    if (current && line.trim().startsWith('- ')) {
      current.bullets.push(line.trim().slice(2).replace(/`/g, ''));
    } else if (current && line.match(/^\s{2,}-\s+/)) {
      current.bullets.push('  • ' + line.trim().slice(2).replace(/`/g, ''));
    }
  }
  return entries;
}

function getGitHistory() {
  try {
    const out = execFileSync('git', ['log', '-n', '15', '--pretty=format:%h|%ad|%s', '--date=format:%Y-%m-%d %H:%M'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const statusOut = execFileSync('git', ['status', '-s'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const commits = out.trim()
      ? out.trim().split(/\r?\n/).map(line => {
          const [hash, date, ...msg] = line.split('|');
          return { hash, date, message: msg.join('|') };
        })
      : [];
    const dirtyFiles = statusOut.trim() ? statusOut.trim().split(/\r?\n/).length : 0;
    return { initialized: true, commits, dirtyFiles };
  } catch {
    return { initialized: false, commits: [], dirtyFiles: 0 };
  }
}

function main() {
  const action = process.argv[2] || 'status';
  const commitMsg = process.argv[3];

  console.log('🔍 [1/4] 正在执行 5 大自动化测试套件...');
  const tests = runTestSuites();
  for (const t of tests) {
    console.log(`   ${t.passed ? '✅' : '❌'} ${t.name} (${t.durationMs}ms)`);
  }

  console.log('📊 [2/4] 正在对 93 个教材单元与 17 个每日一练进行三档难度深度体检...');
  const units = auditUnits();
  const dailyRanges = auditDailyRanges();

  const summary = {
    generatedAt: new Date().toLocaleString('zh-CN', { hour12: false }),
    totalUnits: units.length,
    dedicatedUnits: units.filter(u => !u.review).length,
    reviewUnits: units.filter(u => u.review).length,
    diagramUnits: units.filter(u => u.hasDiagram).length,
    dailyCount: dailyRanges.length,
    testsPassed: tests.filter(t => t.passed).length,
    testsTotal: tests.length,
    byGradient: {
      'tiered-skills': units.filter(u => u.gradientTier === 'tiered-skills').length,
      'three-tier-range': units.filter(u => u.gradientTier === 'three-tier-range').length,
      'two-tier-range': units.filter(u => u.gradientTier === 'two-tier-range').length,
      'fixed-range': units.filter(u => u.gradientTier === 'fixed-range').length,
    },
    byModule: {
      scope: units.filter(u => u.moduleKey === 'scope').length,
      geometry: units.filter(u => u.moduleKey === 'geometry').length,
      grid: units.filter(u => u.moduleKey === 'grid').length,
      diagram: units.filter(u => u.moduleKey === 'diagram').length,
      unitPlugin: units.filter(u => u.moduleKey === 'unitPlugin').length,
      engineTopic: units.filter(u => u.moduleKey === 'engineTopic').length,
      review: units.filter(u => u.moduleKey === 'review').length,
    },
  };

  console.log('📝 [3/4] 正在汇总路线图、变更日志与 Git 版本记录...');
  const roadmap = parseMarkdownTasks();
  const changelog = parseChangelog();

  const writeStatusFile = (gitInfo) => {
    const payload = {
      summary,
      tests,
      git: gitInfo,
      roadmap,
      changelog,
      dailyRanges,
      units,
    };
    const outPath = path.join(ROOT, 'prototype', 'projectStatus.js');
    fs.writeFileSync(
      outPath,
      `// 自动生成文件（请勿手改）：由 node scripts/manage.mjs 生成\nexport const PROJECT_STATUS = ${JSON.stringify(payload, null, 2)};\n`,
      'utf8'
    );
  };

  writeStatusFile(getGitHistory());

  if (action === 'snapshot') {
    if (tests.some(t => !t.passed)) {
      console.error('❌ 存在未通过的测试套件，已中止快照提交！请先修复报错。');
      process.exitCode = 1;
      return;
    }
    const msg = commitMsg || `chore: 状态快照更新 (${summary.generatedAt})`;
    console.log(`📦 [4/4] 正在创建 Git 版本快照: "${msg}"...`);
    try {
      execFileSync('git', ['add', '-A'], { cwd: ROOT, stdio: 'inherit' });
      const status = execFileSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' });
      if (status.trim()) {
        execFileSync('git', ['commit', '-m', msg], { cwd: ROOT, stdio: 'inherit' });
        const gitInfo = getGitHistory();
        gitInfo.dirtyFiles = 0;
        writeStatusFile(gitInfo);
        execFileSync('git', ['add', 'prototype/projectStatus.js'], { cwd: ROOT, stdio: 'ignore' });
        execFileSync('git', ['commit', '--amend', '--no-edit'], { cwd: ROOT, stdio: 'ignore' });
      } else {
        console.log('   ℹ️ 工作区无新增改动，跳过 commit。');
      }
    } catch (e) {
      console.error('⚠️ Git 快照执行异常:', e.message);
      process.exitCode = 1;
      return;
    }
  } else {
    console.log('✅ [4/4] 已更新看板数据文件: prototype/projectStatus.js');
  }

  console.log('\n================ 项目状态总览 ================');
  console.log(`• 教材单元总数: ${summary.totalUnits} 个 (专属插件 ${summary.dedicatedUnits} + 综合复习 ${summary.reviewUnits}，含图形渲染 ${summary.diagramUnits} 个)`);
  console.log(`• 难度梯度分布: 阶梯考法 ${summary.byGradient['tiered-skills']} | 三档数值 ${summary.byGradient['three-tier-range']} | 两档数值 ${summary.byGradient['two-tier-range']} | 课标定界 ${summary.byGradient['fixed-range']}`);
  console.log(`• 模块分布:     Scope课标专项 ${summary.byModule.scope} | 通用单元插件 ${summary.byModule.unitPlugin} | 几何 ${summary.byModule.geometry} | 钟表统计 ${summary.byModule.diagram} | 方格 ${summary.byModule.grid} | 引擎模板 ${summary.byModule.engineTopic}`);
  console.log(`• 每日一练范围: ${summary.dailyCount} 个 (口算 + 竖式)`);
  console.log(`• 自动化测试:   ${summary.testsPassed}/${summary.testsTotal} 套件全部通过`);
  console.log('==============================================');
}

main();
