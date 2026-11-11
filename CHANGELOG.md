# 出题小程序 · 变更日志与进展台账 (CHANGELOG)

> **管理规范**：每次代码、题型、单元映射、排版或配置改动后，必须运行 `node scripts/manage.mjs` 刷新状态看板并在此文件追加记录。

---

## [v0.6.0] - 2026-11-11 · 项目管理系统上线（看板 + 自动巡检 + Git + 记忆规范）
- **新增可视化管理看板**（[`prototype/admin.html`](prototype/admin.html) / [`prototype/admin.js`](prototype/admin.js)）：
  - 93 个教材单元全景矩阵：支持按年级、模块类型、难度梯度状态过滤，支持点击单元并排对比 `基础 / 标准 / 提高` 三档难度的考法与样题。
  - 支持从管理看板一键跳转到出题器对应单元（`index.html?grade=...&semester=...&unit=...`）。
  - 集成里程碑待办、合规自检红线、踩坑档案、测试套件状态与 Git 提交历史。
- **新增自动化管理与巡检脚本**（[`scripts/manage.mjs`](scripts/manage.mjs)）：
  - 自动执行 5 大测试套件（冒烟、93单元覆盖、数学正确性复算、每日一练、难度梯度）。
  - 自动对 93 个单元进行三档难度抽样与梯度分析（区分“阶梯考法”、“数值梯度”、“固定考法”），生成前端数据模块 [`prototype/projectStatus.js`](prototype/projectStatus.js)。
  - 支持 `node scripts/manage.mjs snapshot "提交说明"` 一键完成测试、看板更新与 Git 提交。
- **建立 Git 版本控制与 AI 强制记忆规范**：
  - 初始化根目录 Git 仓库，配置 `.gitignore`，归档 PDF 自动化打印检验脚本至 `scripts/pdf/`。
  - 新增 Antigravity 常驻规则 [`.agents/rules/project-management.md`](.agents/rules/project-management.md) 与 [`GEMINI.md`](GEMINI.md)，确保后续每次会话自动读取项目状态并在改动后自动记录。

---

## [v0.5.1] - 2026-11-11 09:34 · 专项单元三档难度梯度升级（第一批）
- **升级 3 个核心单元的难度梯度**（[`prototype/scopeProblems.js`](prototype/scopeProblems.js)）：
  - **2下《有余数的除法》(`divide-remainder`)**：区分基础（直接求商和余数、装盒、余数范围判断）、标准（余数最大问题、算式逆推填空）、提高（逆推被除数/除数、进一法至少几个盒子、再添几本装满）。
  - **3上《倍的认识》(`times-as-many`)**：区分基础（直接求倍数/几倍）、标准（应用题求倍数/一倍数/判断）、提高（比几倍多几、已知比几倍多几反求一倍数、和倍、差倍）。
  - **5下《因数与倍数》(`factors`)**：区分基础（因数倍数基本判断、奇偶、5的倍数）、标准（列举全部因数、质数合数判断、2和5公倍判断）、提高（列举公因数、区间内2和5公倍数、既是因数又是倍数、2和3公倍数的数位填数）。
- **新增难度梯度测试**（[`prototype/difficulty-gradient-test.mjs`](prototype/difficulty-gradient-test.mjs)）：验证上述 3 个单元在 `easy / medium / hard` 下题量充足、各含 4 种考法且提高档考法独立、100 轮随机答案独立复算 100% 正确。

---

## [v0.5.0] - 2026-11-10 15:35~16:45 · 93单元100%视觉与题型闭环 + 每日一练 + PDF打印验证
> *注：本阶段改动此前未写入 `.workbuddy/memory/2026-11-10.md`，现完整补录归档。*
- **攻克全部 16 个图形/概念/操作类单元（实现 92/93 专属插件覆盖，仅 6下《整理与复习》为全年级综合复习）**：
  - **几何作图与图形认识**（[`prototype/geometryProblems.js`](prototype/geometryProblems.js)）：新增 `geo-count`（准备课数图形）、`geo-position`（位置上下左右）、`geo-shapes-solid`（认识立体图形）、`geo-shapes-plane`（认识平面图形）、`geo-angle-intro`（角的初步认识）、`geo-view-1/2/3`（观察物体三视图）、`geo-perimeter`（长方形和正方形周长图形题）、`geo-area`（面积图形题）、`geo-angle-measure`（量角器角的度量）、`geo-quad`（平行四边形和梯形）、`geo-triangle`（三角形）、`geo-composite`（组合多边形面积）、`geo-cuboid`（长方体和正方体）、`geo-circle`（圆）、`geo-cylinder`（圆柱与圆锥），图形单元默认 `maxCount: 6`。
  - **方格纸与坐标作图**（[`prototype/gridProblems.js`](prototype/gridProblems.js)）：新增 `grid-motion-1/2/3`（图形的运动：对称/平移/旋转）、`grid-direction`（位置与方向一）、`grid-pairs`（五上用数对确定位置）、`grid-bearing`（六上位置与方向二），自带题目方格图与答案页作图参考图（`answerDiagram`）。
  - **钟表与统计图表 SVG 渲染**（[`prototype/diagramProblems.js`](prototype/diagramProblems.js) + [`prototype/renderDiagram.js`](prototype/renderDiagram.js)）：新增 `clock`（认识钟表/时间：读表填空、画指针、三选一）、`data-table`（数据收集整理）、`double-table`（复式统计表）、`bar-chart`（条形统计图）、`bar-average`（平均数与条形统计图）、`line-chart`（折线统计图）、`pie-chart`（扇形统计图）。
  - **教材范围专项题型生成器**（[`prototype/scopeProblems.js`](prototype/scopeProblems.js)）：新增 39 个按课标范围严格约束的插件（数的认识、口算/笔算分流、运算律、混合运算、四则运算、分数/小数初步与性质、可能性、优化、找次品、数与形、比例等）。
- **新增“口算每日一练”与“竖式每日一练”内置模块**（[`prototype/dailyPractice.js`](prototype/dailyPractice.js) + [`prototype/daily-practice-test.mjs`](prototype/daily-practice-test.mjs)）：
  - 支持 17 个专项练习范围（7 个口算 + 10 个竖式），按所选年级自动解锁，支持竖式自动对齐排版（加减乘竖式与除法竖式框 `renderVertical`），123 种配置测试全过。
- **新增独立数学正确性复算与 Playwright PDF 打印全链路验证**：
  - 新增 [`prototype/correctness-test.mjs`](prototype/correctness-test.mjs)：对鸡兔同笼、植树、条形图并列最值、小数乘法进行 160 轮独立逆向复算。
  - 完成 8 类典型卷面（口算、小数竖式、乘法竖式、除法竖式、万以内数、扇形统计图、方格运动、三视图）的無头 Chrome A4 打印导出与 PDF 边界/题号自动化校验（样张存档于 `output/pdf/`）。

---

## [v0.4.0] - 2026-11-10 15:00~15:45 · 全单元联动初版与引擎深度接通
- 接通引擎 `decimal-arithmetic` 与 `fraction-arithmetic` 策略，支持 `arithmeticPlugin` 与 `generateFromSubtemplate` 精确出题。
- 修复配额计算、轮转死循环、解方程减法分支答案错误、小数除法混入整数、低年级钟表 24 时制超纲等问题。

---

## [v0.1.0 ~ v0.3.0] - 2026-11-10 09:00~15:00 · 立项定稿与网页版原型跑通
- 完成《立项文档_v1.md》与《竞品变现模式调研.md》四轮调研，拍板 **v1.0 直接主打“按教材单元自动出套题”**。
- 克隆开源组卷引擎（`repos/engine`）与小程序骨架（`repos/skeleton`），搭建 `prototype/` 四步出卷 UI 与打印样式，跑通 18/18 冒烟测试。
