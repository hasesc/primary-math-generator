# 小学数学出题小程序 · 项目全局状态与路线图 (PROJECT_STATUS)

> 本文件与 [`prototype/admin.html`](prototype/admin.html) 可视化管理看板、[`CHANGELOG.md`](CHANGELOG.md) 联动。
> 运行 `node scripts/manage.mjs` 可自动执行全套测试并刷新看板数据。

## 1. 当前版本与核心指标
- **当前阶段**：直接导出 A4 矢量 PDF 引擎全面落地（`v0.8.9`）：彻底废除强制弹出系统打印机对话框的落后交互，在后台引入 Headless Chromium 毫秒级极速渲染（约 200ms），实现“📥 下载练习卷 (PDF)”、“📥 下载试卷+答案 (合辑 PDF)”和“📥 下载参考答案 (PDF)”一键静默直出；手机移动端直达 PDF 文件下载并支持微信转发与家庭打印小程序，自动化测试 8 大套件持续 100% 满分全绿
- **生成入口覆盖（非完整考点验收）**：人教版 1~6 年级上下册共 **94 个单元**（93 个专属插件/模板映射 + 1 个六下《整理与复习》全科综合卷；其中 **69 个单元具备阶梯考法**、**2 个单元具备三档数值梯度**、**23 个单元为课标定界范围**，“两档待升级”保持 0 个）
- **UI 与卷面**：现代教育工作台、毛玻璃导航、单元搜索过滤、A4 练习卷排版与大题科学分栏（直接写得数、列竖式、填空比较、作图、解决问题），支持手机移动端原生触控吸底栏与题卡自适应
- **内置模块**：
  - **单元同步练**（主打，支持 3/6 题图形卷与 20/30/40 题标准卷）
  - **单元测验卷**（旗舰新增，标准 100 分制 6 大板块模拟考，含答题留白与思路点拨）
  - **口算每日一练**（14 个分级范围，覆盖 1~6 年级加减乘除、小数与百分数速算）
  - **竖式每日一练**（10 个分级范围，覆盖 2~6 年级多位数加减乘除、小数对齐与圆周率竖式框渲染）
- **自动化防线**：8 大测试套件（`smoke-test`、`coverage-test`、`correctness-test`、`daily-practice-test` 186配置、`difficulty-gradient-test`、`rotation-test`、`regression-test`、`exam-paper-test` 18配置）+ 11 类 PDF 打印边界校验

---

## 2. 核心架构文件地图（改代码先看这里）

| 模块/目录 | 核心文件 | 职责说明 |
|---|---|---|
| **工程规范蓝图** | [`SIX_CORE_UPGRADES_SPEC.md`](SIX_CORE_UPGRADES_SPEC.md) | 六大核心升级工程技术规范（题型、模式、排版、答案解析、手机适配、题库深度） |
| **单元配置表** | [`prototype/units.js`](prototype/units.js) | 人教版 1~6 年级 94 个单元映射定义（`plugin` / `arithmeticPlugin` / `topics` / `maxCount`）及 `gradeDefaults` |
| **组卷总入口** | [`prototype/paper.js`](prototype/paper.js) | `generatePaper(config)` 纯函数组卷入口与 `generateExamPaper` 100分制测验卷引擎，调度引擎策略与单元插件，无任何存储 |
| **概念辨析题** | [`prototype/conceptProblems.js`](prototype/conceptProblems.js) | 小学数学判断题（√/×）与单项选择题（A/B/C/D）算法生成引擎，带高仿真干扰项与解析点拨 |
| **每日一练** | [`prototype/dailyPractice.js`](prototype/dailyPractice.js) | 24 个口算/竖式专项范围定义、独立算法生成器调度、去重生成与 `renderVertical` 竖式 DOM 渲染 |
| **课标范围题库** | [`prototype/scopeProblems.js`](prototype/scopeProblems.js) | 39 个课标专项单元插件（数的认识、口算笔算分流、四则/混合运算、分数小数、因数倍数、倍的认识等） |
| **通用单元插件** | [`prototype/unitPlugins.js`](prototype/unitPlugins.js) | 单元插件汇总表 `UNIT_PLUGINS` 及单位换算、方程、百分数、负数、搭配、推理、鸽巢等插件 |
| **几何图形题** | [`prototype/geometryProblems.js`](prototype/geometryProblems.js) | 16 个几何与观察物体单元插件（立体/平面图形、角、三视图、周长面积、圆、圆柱圆锥等） |
| **方格坐标题** | [`prototype/gridProblems.js`](prototype/gridProblems.js) | 6 个方格纸作图与方向位置插件（平移对称旋转、东南西北、数对、方向与距离），含答案参考图 |
| **统计与钟表** | [`prototype/diagramProblems.js`](prototype/diagramProblems.js) | 7 个钟表与统计图表插件（认识钟表/时间、单复式统计表、条形/折线/扇形统计图） |
| **SVG 渲染器** | [`prototype/renderDiagram.js`](prototype/renderDiagram.js) | 将 `clock` / `bar-chart` / `line-chart` / `pie-chart` / `grid` / `geometry` 数据渲染为高分打印 SVG |
| **前端交互与打印** | [`prototype/index.html`](prototype/index.html), [`prototype/app.js`](prototype/app.js), [`prototype/style.css`](prototype/style.css) | 四步出卷流程、卷面题型分组渲染、参考答案页、A4 打印专用 CSS |
| **管理看板** | [`prototype/admin.html`](prototype/admin.html), [`prototype/admin.js`](prototype/admin.js), [`scripts/manage.mjs`](scripts/manage.mjs) | 可视化项目管理后台、94 单元三档难度体检、一键测试与 Git 快照工具 |
| **小程序骨架** | `repos/skeleton/` | 微信小程序原生 TS+SCSS 骨架（木兰 PSL v2），待合入 `prototype/` 引擎与页面 |

---

## 3. 待办任务看板 (Roadmap & Backlog)

### P0 · 核心考点攻坚与缺陷修复（已完成）
- [x] **P0 级核心考点攻坚与数值缺陷修复**：以 [`UNIT_COVERAGE_AUDIT.md`](UNIT_COVERAGE_AUDIT.md) 为缺口验收标准，彻底修复折扣四舍五入与折后满减门槛逻辑 Bug，重构六下《百分数（二）》为 4 大板块全覆盖阶梯插件，补齐一下《认识人民币》核心单元与元角分进率体系。主干考点全部具备独立逆向复算测试与考法轮转校验，P0风险全部关闭。
- [x] 建立项目管理系统（可视化看板 + 自动巡检脚本 + Git 仓库 + AI 记忆规则）
- [x] 完成第一批 3 个单元（`有余数的除法`、`倍的认识`、`因数与倍数`）的三档难度独立考法梯度
- [x] **扩充其余单元的三档难度梯度（`easy / medium / hard`）**：全部 34 个“两档数值”单元已升级为三档阶梯考法或三档递进数值（阶梯考法单元达 35 个、三档数值达 32 个，两档待升级清零）
- [x] **前端支持 URL 参数直达单元**：从 `admin.html` 点击任意单元可直接打开 `index.html` 对应年级学期单元并预览试卷

### P1 · 微信小程序端移植（M1 → M2）
- [ ] 将 `prototype/` 下的纯 JS 生成引擎与插件模块迁移至 `repos/skeleton/miniprogram/`
- [ ] 实现小程序端四步选卷 UI（教材→年级学期单元→难度题量→预览导出）与 SVG/Canvas 图形渲染适配
- [ ] 补齐“关于”页开源许可证声明（木兰 PSL v2 + MIT）与隐私保护指引

### P2 · 变现与多出口副线（M3 → M4）
- [ ] 编写闲鱼/小红书电子资料包批量导出脚本（按年级×单元自动生成带水印与小程序码的 PDF 题卡包）
- [ ] 注册个人小程序账号，完成微信认证（¥30/年）与 ICP 备案，按“工具”类目提审
- [ ] UV 满 500 后接入流量主（导出 PDF 激励视频 + 结果页 Banner）

---

## 4. 不可触碰的合规与技术红线（每次发版必查）
1. **绝不做题库、不存题目**：所有题目必须实时算法生成，不引入云数据库存题。
2. **命名与文案红线**：只用“单元同步练 / 练习卷 / 实时生成 / 导出打印”，严禁出现“真题 / 试卷 / 小升初 / 名校 / 提分 / 课程 / 讲解 / 辅导”。
3. **引擎参数铁律**：调用底层引擎时 `config.digits` 四键（`add/subtract/multiply/divide`）必须齐全，`termCount` 必传。
4. **缓存刷新铁律**：修改 `prototype/*.js` 或 `style.css` 后，同步递增 `index.html` / `admin.html` 中的 `?v=` 版本串。
