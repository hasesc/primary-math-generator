# 出题小程序 · 项目长期备忘 (MEMORY)

> **重要提示**：本项目已启用全链路管理系统（`GEMINI.md` + `PROJECT_STATUS.md` + `CHANGELOG.md` + `prototype/admin.html` 看板 + `scripts/manage.mjs` 自动巡检与 Git 快照）。每次改动后必须运行 `node scripts/manage.mjs snapshot "说明"`。

## 1. 项目定位
- **产品**：小学数学出题工具小程序（个人主体，免费 + 广告 IAA → 后续叠加“虚拟支付:个人”会员制）
- **v1.0 核心卖点**：按教材版本×年级×单元×难度实时生成整卷+答案页；同时内置“口算每日一练”与“竖式每日一练”模块
- **红线**：① 纯算法实时生成，绝不做题库/存储 ② 命名只叫“单元同步练”，绝不碰“真题/试卷/小升初/课程/讲解” ③ 名称/Logo 完全自起

## 2. 最新开发状态（2026-11-12 v0.8.7）
- **六大核心升级工程第三阶段全面完成 (`SIX_CORE_UPGRADES_SPEC.md` Phase 3)**：
  - 全面完成 22 个几何、方格坐标、统计图表及单位换算单元的真阶梯考法重构（`geometryProblems.js`, `gridProblems.js`, `diagramProblems.js`, `unitPlugins.js`）。
  - 难度梯度分布跃升：**阶梯考法单元达 67 个**（原 47 个），三档数值降至 2 个（`geo-composite` 和 `geo-circle`），课标定界 24 个，两档待升级 0 个。
  - 7 个几何与三视图单元、6 个方格作图单元、6 个统计图表单元及公顷平方千米单位换算单元均具备鲜明的 Easy/Medium/Hard 认知梯度，且每档均配备作图参考答案。
- **“💯 单元测验卷”全真100分模拟考模式已上线**：
  - 严格对齐小学期中期末 100 分制大题排版：一、填空(20分) + 二、判断(10分) + 三、选择(10分) + 四、计算(30分：口算+竖式+脱式) + 五、操作(10分) + 六、应用(20分)。
  - 新增概念辨析题引擎 (`prototype/conceptProblems.js`)，生成高仿真易错判断题与带干扰项选择题。
  - 卷面规范解决问题作答留白框 (`.solve-workspace`)，参考答案页全面支持【解析 / 思路点拨】。
- **手机移动端 Mobile-First 深度响应式适配已上线**：
  - 新增底部常驻大拇指触控吸底栏 (`.mobile-action-bar`)，单手顺畅完成选级、选单元、定题量与出卷。
  - 移动端试卷卡片化自适应布局，防止横向溢出，优化手机微信内打开体验。
- **口算与竖式每日一练全学段深度重构（24 范围，覆盖 1~6 年级）**：
  - 彻底终结 3~6 年级口算与 6 年级竖式断层，新增整十整百乘除、万以内口算、两位数乘一位数、小数加减乘除速算、百分数口算及圆周率倍数竖式。
  - 全面实现 `easy / medium / hard` 三档真实数学算理梯度。
- **自动化防线保持 8 大测试套件 100% 满分全绿**：18 组配置测验卷全链路通过，93 单元覆盖测试全绿，同卷考法轮转零重复。
- **93 单元生成入口已接通（不等于全部考点覆盖）**：人教版 1~6 年级上下册 93 个单元中，92 个已接入专属插件/模板（含 `scopeProblems.js` 41个课标专项、`geometryProblems.js` 17个几何图形、`gridProblems.js` 6个方格作图、`diagramProblems.js` 8个钟表与统计图表、`unitPlugins.js` 通用专项），仅 6下《整理与复习》为全科综合复习卷。
- **全库生硬伪去重标记彻底清除与情境真实化**：彻底消灭 `（第${guard}组）`、`（第${guard}局）`、`（第${guard}题）` 等生硬标记，年级认知隔离搭配（一）与搭配（二），全面扩充真实生活常识情境。
- **三档难度梯度升级深化**：47 个单元实现 `easy / medium / hard` 差异化阶梯考法、22 个单元实现三档递进数值区间、24 个低年级/概念单元为课标定界，“两档待升级”保持为 0 个。
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
