# 出题小程序 · 项目长期备忘 (MEMORY)

> **重要提示**：本项目已启用全链路管理系统（`GEMINI.md` + `PROJECT_STATUS.md` + `CHANGELOG.md` + `prototype/admin.html` 看板 + `scripts/manage.mjs` 自动巡检与 Git 快照）。每次改动后必须运行 `node scripts/manage.mjs snapshot "说明"`。

## 1. 项目定位
- **产品**：小学数学出题工具小程序（个人主体，免费 + 广告 IAA → 后续叠加“虚拟支付:个人”会员制）
- **v1.0 核心卖点**：按教材版本×年级×单元×难度实时生成整卷+答案页；同时内置“口算每日一练”与“竖式每日一练”模块
- **红线**：① 纯算法实时生成，绝不做题库/存储 ② 命名只叫“单元同步练”，绝不碰“真题/试卷/小升初/课程/讲解” ③ 名称/Logo 完全自起

## 2. 最新开发状态（2026-11-11 v0.8.2）
- **93 单元生成入口已接通（不等于全部考点覆盖）**：人教版 1~6 年级上下册 93 个单元中，92 个已接入专属插件/模板（含 `scopeProblems.js` 39个课标专项、`geometryProblems.js` 16个几何图形、`gridProblems.js` 6个方格作图、`diagramProblems.js` 7个钟表与统计图表、`unitPlugins.js` 通用专项），仅 6下《整理与复习》为全科综合复习卷。
- **UI 界面全面精装修与卷面排版升级**：彻底告别毛坯房，落地现代教育科技蓝设计系统（圆角、弥散阴影、毛玻璃悬浮顶栏与控制台、模式选择卡、单元即时搜索、三档情境化难度大卡片、A4 拟真名校作业卷抬头与大题科学分栏）。
- **本地启动与浏览器跨源体验优化**：新增 `scripts/serve.mjs` 与根目录 `双击启动出题器.bat`，解决本地 `file:///` 协议下浏览器禁用 ES Module 导致的按钮点击无反应，支持开箱即用。
- **三档难度梯度升级深化**：42 个单元实现 `easy / medium / hard` 差异化阶梯考法、26 个单元实现三档递进数值区间、25 个低年级/概念单元为课标定界，“两档待升级”保持为 0 个。
- **打印与 PDF 样张已验证**：`output/pdf/` 下已生成 11 类典型题型 A4 PDF 样张及合并审阅卷 `print-review-samples.pdf`，通过无溢出、题号完整性校验。
- **项目管理系统已上线**：
  - 网页管理看板：`prototype/admin.html`（93 单元矩阵、三档难度样题对比、待办、变更日志、测试与 Git 状态）
  - 自动化巡检与快照 CLI：`node scripts/manage.mjs` / `node scripts/manage.mjs snapshot "说明"`

## 3. 核心文件索引
- 状态与路线图：`PROJECT_STATUS.md`
- 变更日志：`CHANGELOG.md`
- AI 强制规范：`GEMINI.md`
- 原型前端与看板：`prototype/index.html`、`prototype/admin.html`
- 出题核心：`prototype/units.js`、`prototype/paper.js`、`prototype/scopeProblems.js`、`prototype/unitPlugins.js`、`prototype/geometryProblems.js`、`prototype/gridProblems.js`、`prototype/diagramProblems.js`、`prototype/renderDiagram.js`、`prototype/dailyPractice.js`
- 自动化测试：`prototype/smoke-test.mjs`、`prototype/coverage-test.mjs`、`prototype/correctness-test.mjs`、`prototype/daily-practice-test.mjs`、`prototype/difficulty-gradient-test.mjs`、`prototype/rotation-test.mjs`、`prototype/regression-test.mjs`

## 4. 下一步待办
1. 先按 `UNIT_COVERAGE_AUDIT.md` 确认目标教材版次，关闭折扣/满减与难度边界P0；详细考点状态只维护在该表。
2. 将 `prototype/` 出题引擎与页面移植到微信小程序骨架 `repos/skeleton/`。
3. 编写闲鱼/小红书 PDF 题卡包批量生成脚本（带小程序码导流）。
