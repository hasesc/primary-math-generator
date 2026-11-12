# 出题小程序 · 项目长期备忘 (MEMORY)

> **重要提示**：本项目已启用全链路管理系统（`GEMINI.md` + `PROJECT_STATUS.md` + `CHANGELOG.md` + `prototype/admin.html` 看板 + `scripts/manage.mjs` 自动巡检与 Git 快照）。每次改动后必须运行 `node scripts/manage.mjs snapshot "说明"`。

## 1. 项目定位
- **产品**：小学数学出题工具小程序（个人主体，免费 + 广告 IAA → 后续叠加“虚拟支付:个人”会员制）
- **v1.0 核心卖点**：按教材版本×年级×单元×难度实时生成整卷+答案页；同时内置“口算每日一练”与“竖式每日一练”模块
- **红线**：① 纯算法实时生成，绝不做题库/存储 ② 命名只叫“单元同步练”，绝不碰“真题/试卷/小升初/课程/讲解” ③ 名称/Logo 完全自起

## 2. 最新开发状态（2026-11-12 v0.9.0）
- **微信小程序原生端技术移植与三大页面正式上线（0 服务器 0 维护成本）**：
  - 成功将 94 个教材单元纯算法生成引擎完整移植至 `repos/skeleton/miniprogram/engine/`，实现纯字符串级高分 SVG 渲染器与 Base64 DataURL，彻底脱离浏览器 DOM 依赖。
  - 上线小程序首页练习中心（`pages/index/index`），支持“单元同步练”、“每日一练”、“单元测验卷”三大模式，涵盖 1~6 年级上下册 94 单元网格与口算/竖式天天练。
  - 上线纸质练习卷预览与导出页（`pages/paper/paper`），实现六大规范大题分栏、专属作业本横线书写留白、换题、答案解析折叠与全卷文字一键复制。
  - 上线合规与关于页（`pages/about/index`），严格对齐微信个人主体“工具-办公”类目规范，内置纯算法生成声明、零题库存储声明与开源许可证政策。
  - 自动化测试套件扩充至 **9 大套件**（新增 `miniprogram-engine-test.mjs`），持续保持 100% 满分全绿。
- **彻底消灭“方阵”成人缩写为“正方形队伍/点阵”，修复队列人数与层数逻辑漏洞 (`formation.js` & `scopeProblems.js`)**：
  - 将全部题目中的“方阵”字眼替换为小学生通俗易懂的“正方形队伍”、“实心正方形队伍”、“中空的正方形队伍”以及数与形中的“正方形点阵”。
  - 修复 `perimeter / 4` 无法整除时落入硬编码兜底题“一个方阵最外层共60人,这个方阵每边多少人?”的严重漏洞：改为先生成边长逆推最外层人数，彻底消除兜底题。
  - 修复中空队列层数 `(outer - inner) / 2` 产生小数层（2.5层）的逻辑错误，保证层数与人数均为合理整数。
- **全面排查并重构成人电报体、荒唐算例与不规范术语**：
  - **家庭年龄 (`ageProblemFamily.js`)**：消除缩放导致的“父亲年龄是儿子的1倍，儿子4岁，父亲4岁”的荒唐数值 Bug；消除 `一家三口:`、`祖孙三代:` 冒号电报体，改为生动亲切的小学叙事题干。
  - **工程效率 (`unitaryWork.js`)**：消除无主语电报体“用5天完成50件”，改为“工人李师傅用 X 天时间加工了 Y 个零件...”；修复水池进出水管排空用时出现多位长循环小数（如 22.285714285714285 小时）的算例 Bug，精选整除友好因子组。
  - **环形跑道 (`distanceCircular.js`)**：消灭初高中物理公式化英文单位“m/s”，规范为小学数学标准用语“每秒跑 X 米”，规范相遇与同向追及情境。
  - **钟面角 (`clockAngle.js`)**：废弃“时针分针下次重合大约55分钟后”，全面对齐人教版小学几何钟面角体系：整点夹角、半点夹角（如3点30分时夹角为75度）、时分针旋转角度（分针1分钟6°，时针1小时30°）。
  - **极值与最值 (`extremeValue.js`)**：消除“长方形面积约17，哪一形状周长最小”与大学符号“证明由鸽巢原理, ⌈...⌉”，规范为人教版周长最大面积与六年级抽屉原理。
  - **流水行船与列车过桥 (`boatCurrent.js` & `trainBridge.js`)**：英文缩写“km/h”统一规范为“千米/时”，修复相遇兜底选项中遗留的 `速度均为${v1}m/s` 为“速度均为每秒 X 米”。
- **全局题目与解析标点全角规范化 (`prototype/engine/problemTemplates/` 42个模板)**：
  - 将中文题干与解析中的英文半角逗号 `,` 和问号 `?` 全面升级为标准的中文全角标点 `，` 和 `？`，彻底杜绝电报体与中英文混排凌乱感。
- **彻底净化并重构病态遗留题型 (`prototype/engine/problemTemplates/equationTransform.js`)**：
  - 彻底清除 `(可能进位)` 与含糊不清的“新等式是否仍成立?给出一种调整方案”语病题干。
  - 重写为符合小学人教版课标的“和、差、积的变化规律”与“等式基本性质”规范考法（带严密唯一答案与解析点拨）。
- **题目下方作答书写空间全面优化上线 (`prototype/app.js` & `prototype/style.css`)**：
  - 彻底解决题下留白不足痛点：为全部解决问题/应用题智能挂载 `.solve-workspace`，配备 26mm A4 打印级书写空间、淡雅作业本对齐线及规范“答：_________”答语行。
  - 为多步脱式计算挂载 3 行等号递进留白（`＝ ____________________`），作图题挂载推导横线。
  - 设置 `break-inside: avoid !important;` 保证单题与书写区在 A4 打印时绝不跨页撕裂。
- **直接导出 A4 矢量 PDF 引擎上线（告别系统打印机，直接给出 PDF 文件）**：
  - 后台接入 Headless Chromium 实例池 (`scripts/serve.mjs` `/api/export-pdf`)，~200ms 极速生成标准 A4 矢量 PDF。
  - 前端上线三合一下载组：“📥 下载练习卷 (PDF)”、“📥 下载试卷+答案 (合辑 PDF)”、“📥 下载参考答案 (PDF)”，点击直接触发文件下载进“下载”文件夹，零打印机弹窗。
  - 手机移动端底栏直达“📥 立即下载 PDF 试卷”，完美支持微信文件传输助手转发、群分享与家庭无线打印小程序调用。
  - 支持未启动后台服务的友好指引与安全降级。
- **P0 级核心考点攻坚与缺陷修复完成 (`UNIT_COVERAGE_AUDIT.md`)**：
  - 彻底修复折扣四舍五入与折后满减门槛校验逻辑 Bug，消除算理错误。
  - 彻底重构六年级下册《百分数（二）》为 4 大板块全覆盖阶梯插件 (`percentTwoProblems`)：涵盖折扣、成数、税率、利率及促销比选方案。
  - 补齐人教版一年级下册核心缺失单元《认识人民币》(`rmbProblems`)：涵盖元角分进率、面额换算、名数比较、简单加减、购物找零与纸币兑换。
  - 教材单元总数达 **94 个**（专属插件 93 + 全科复习 1），阶梯考法单元达 **69 个**，三档数值降至 2 个，课标定界 23 个。
- **六大核心升级工程第三阶段全面完成 (`SIX_CORE_UPGRADES_SPEC.md` Phase 3)**：
  - 全面完成 22 个几何、方格坐标、统计图表及单位换算单元的真阶梯考法重构（`geometryProblems.js`, `gridProblems.js`, `diagramProblems.js`, `unitPlugins.js`）。
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
- **自动化防线保持 8 大测试套件 100% 满分全绿**：18 组配置测验卷全链路通过，94 单元覆盖测试全绿，同卷考法轮转零重复。
- **94 单元生成入口已全部接通**：人教版 1~6 年级上下册 94 个单元中，93 个已接入专属插件/模板（含 `scopeProblems.js` 41个课标专项、`geometryProblems.js` 17个几何图形、`gridProblems.js` 6个方格作图、`diagramProblems.js` 8个钟表与统计图表、`unitPlugins.js` 通用专项与人民币/百分数二），仅 6下《整理与复习》为全科综合复习卷。
- **全库生硬伪去重标记彻底清除与情境真实化**：彻底消灭 `（第${guard}组）`、`（第${guard}局）`、`（第${guard}题）` 等生硬标记，年级认知隔离搭配（一）与搭配（二），全面扩充真实生活常识情境。
- **三档难度梯度升级深化**：69 个单元实现 `easy / medium / hard` 差异化阶梯考法、2 个单元实现三档递进数值区间、23 个低年级/概念单元为课标定界，“两档待升级”保持为 0 个。
- **打印与 PDF 样张已验证**：`output/pdf/` 下已生成 11 类典型题型 A4 PDF 样张及合并审阅卷 `print-review-samples.pdf`，通过无溢出、题号完整性校验。
- **项目管理系统已上线**：
  - 网页管理看板：`prototype/admin.html`（94 单元矩阵、三档难度样题对比、待办、变更日志、测试与 Git 状态）
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
