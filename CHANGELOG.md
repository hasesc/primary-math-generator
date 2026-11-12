# 出题小程序 · 变更日志与进展台账 (CHANGELOG)

> **管理规范**：每次代码、题型、单元映射、排版或配置改动后，必须运行 `node scripts/manage.mjs` 刷新状态看板并在此文件追加记录。

---

## [v0.8.4] - 2026-11-12 · 彻底清除全库生硬伪去重标记、按年级隔离数学广角搭配与优化情境算理真实性
- **彻底消除全库生硬“伪去重标记”（代码中 6 处违规字符彻底清零）**：
  - 排查确认根因：此前为防止 `seen.has(key)` 判重过滤，在多处通用模板中生硬拼接了 `（第${guard}组）`、`（第${guard}局）`、`（第${guard}题）`、`（间隔耗时第${m1}组）`、`（第 ${n} 题）` 等人工痕迹，导致用户卷面上出现“照相（第1组）... 照相（第5组）”的不自然重复。
  - 清理范围：
    - `prototype/unitPlugins.js`：清洗 `combineProblems`（照相排队）、`patternProblems`（图形找规律）、`pigeonholeProblems`（扑克牌抽屉花色）、`unitElapsedProblems`（挂钟敲钟间隔）。
    - `prototype/scopeProblems.js`：清洗 `proportion-check`（比例判断），优化生成轮换策略与尝试步长。
    - 全库扫描脚本 `node scripts/scan_fakes.mjs` 扫描结果已清零（0 处违规标记）。
- **年级隔离与认知对齐：彻底分离二年级《搭配（一）》与三年级《搭配（二）》**：
  - **二年级上册《数学广角——搭配（一）》**：严格契合课标二年级“有序列举与直观连线”认知水平，严禁出现含0排列、单循环赛或三段路线相乘；重构为：2×2服装搭配（短袖/衬衫配长裤/短裤）、1与2无0组数、3人握手、2饮品配3早点（早餐搭配）、3×3衣服搭配、2/5/7三选二求和（无序组合）、三人合影排队等 7 种亲和考法。
  - **三年级下册《数学广角——搭配（二）》**：承接乘法计数与含0排列；考法覆盖含0数字卡片（0在十位排除）、单循环赛场次计算、多段路线乘法原理走法、4人合影指定排头/排尾排法（全面引入“小明、小华、小红、小军”等丰富真实人名与多变站位，彻底告别单调“甲、乙、丙”）。
- **生活常识与算理真实度全面校正**：
  - **4上《数学广角——优化》**：全面扩充沏茶问题（烧水8~15分钟，洗杯拿茶并行）、烙饼问题（平底锅/电饼铛煎牛排/烙饼/煎蛋，两面煎2~6分钟，单数/双数饼数）、排队等待（接水/打饭/理发多情境与丰富人名轮换）、田忌赛马对策论（赛马、扑克比大小、抢数对弈等多场景），解除了低熵数值对 40 题生成池的挤压瓶颈。
  - **1下《找规律》**：图形符号池从 4 种扩充到 14 种（`△○□☆●▲■★◇◆▽▼♡♢`），新增标准周期循环第 $n$ 个图形推断与多色珠子排列规律，题面自然通顺。
  - **6下《数学广角——鸽巢问题》**：扩充 54 张含大小王扑克抽屉、52 张无王花色保证、13 点数同点保证、抽屉双色/三色袜子同色保证等多样情境。
- **验证与台账**：
  - 前端资源版本号升级为 `?v=20261112b`。
  - 全部 7 大测试套件 100% 满额绿灯通过（整卷冒烟、756配置全覆盖、160轮独立数学复算、每日一练、难度梯度、考法轮转、题面有效性）。

---


- **极度贫血单元彻底清零 (5 -> 0)**：
  - 重构 [`prototype/unitPlugins.js`](prototype/unitPlugins.js) 中的三大高年级核心计算插件（`decimalMulProblems`、`decimalDivProblems`、`fractionMulProblems`），全面引入三档独立考法与子模板矩阵：
    - **5上-U1 小数乘法**：细分 `dec-mul-tenth-int`（小数乘整数）、`dec-mul-ten-hundred`（扩大10/100倍）、`dec-mul-tenth-tenth`（一位乘一位）、`dec-mul-int-tenth`（整数乘一位）、`dec-mul-hundredth-tenth`（两位乘一位）以及 `dec-mul-special-quarter`（特殊因数0.25/1.25巧算）共 6 种阶梯考法。
    - **5上-U3 小数除法**：细分 `dec-div-int-divisor`（整数除数一位商）、`dec-div-ten-divisor`（除以10/100）、`dec-div-dec-divisor`（小数除数）、`dec-div-two-tenth`（两位除数）、`dec-div-two-dec`（两位小数除法）以及 `dec-div-special-quarter`（特殊除数0.25巧除）共 6 种阶梯考法。
    - **6上-U1 分数乘法**：细分 `frac-mul-int-simple`（分数乘整数基础）、`frac-mul-int-cancel`（整除约分型）、`frac-mul-frac-basic`（分数乘分数）、`frac-mul-frac-cancel`（带交叉约分型）、`frac-mul-three-terms`（三项连乘链式巧算）以及 `frac-mul-cross-cancel` 共 6 种阶梯考法。
  - 结合首批钟表与时间单元的重构，全网 93 单元中**“极度贫血（仅1~2种考法）”单元由 5 个彻底降至 0 个**！考法较丰富单元增至 **73 个**，阶梯考法单元总数提升至 **47 个**！
  - 全套 7 大自动化测试套件持续 100% 满额通过，独立逆向数学复算无一谬误。
- **开源化与全量题型体检**：
  - 确立 GitHub 纯前端开源与技术复盘路线，增加标准开源 [`README.md`](README.md)。
  - 编写自动化诊断工具 [`scripts/find_weak_units.mjs`](scripts/find_weak_units.mjs)，对全套 93 个单元的三档考法真实生成链路进行全量扫描。
  - 产出完整工程规范文档 [`WEAK_UNITS_REDESIGN_SPEC.md`](WEAK_UNITS_REDESIGN_SPEC.md)，明确定义 25 个薄弱单元在 Easy/Medium/Hard 三档下的完整考法矩阵、题面情境、算理约束与数据形式。
  - 确定“平时做单元专项练（因类制宜）、周末出单元测验卷（五大板块大题考卷）”的双轨制架构。

---

## [v0.8.2] - 2026-11-11 · 审查修复、核心考点补齐与验证链路恢复
- **后续内容验收（同日）**：完成93个入口共279卷三档抽样与源码范围核对，建立 [单元必备考点验收表](UNIT_COVERAGE_AUDIT.md)。识别教材版次未固定及新的折扣/满减、难度边界问题，迁移前先关闭内容验收P0。本次仅更新验收文档及项目路线图，未修改生成器。
- 修复年月日生成同月不存在日期、满减付款为负、约分条件未化简；新增固定种子题面有效性回归检查。
- 修复三种动物题的大小关系、标准题直接泄露答案和提高题条件不足；使用非负整数解枚举验证三档题目均唯一可解，移除错误兜底题。
- 补齐六上《圆》的周长/面积、五上《多边形的面积》的平行四边形/三角形面积与反求高、三上《测量》的吨与千克换算。93 单元接通与完整考点覆盖分开记录。
- 保留并收尾原工作区的考法轮转、推理三模式、竖式渲染保护、文案调整和本地服务访问范围限制；推理考法标识加入难度维度，并检查人数与线索梯度。
- 模式与难度卡片改为原生按钮，支持 Enter/空格选择、选中状态播报和键盘焦点提示；递增入口资源版本。
- 更新浏览器检查定位，增加页面异常与键盘操作断言；11 类 PDF 样张全部通过题号、答案页分隔和边界校验，共 37 页，已目检新增圆/面积题页面。
- 自动巡检扩展为 7 套测试；普通巡检遇到失败也返回非零退出码，故障注入检查通过。修复看板算术插件三档分类与测试总数展示，更新测试摘要。
- 验证：7/7 套件通过；覆盖 93 单元的 756 种配置、123 种每日练配置；11 类浏览器生成及 PDF 检查通过。未进行微信真机或逐项教材全考点认证。

---

## [v0.8.1] - 2026-11-11 · 解决本地浏览器file协议限制 + 修复Windows启动弹窗 + 启动器优化
- **解决本地直接打开 HTML 按钮无反应与启动弹窗问题**：
  - 排查确认原因：现代主流浏览器（Chrome/Edge）因严格的 CORS/Module 同源安全策略，默认在本地 `file:///` 协议下阻止加载 `<script type="module" src="app.js">`，导致 JS 未被执行。
  - **提供零依赖本地静态 HTTP 服务器**（[`scripts/serve.mjs`](scripts/serve.mjs)）：Node.js 原生内置 `http` 模块实现，修复 Windows 下 ShellExecute 唤起 URL 权限弹窗（改用 PowerShell `Start-Process` 与 Edge 备用唤起，避免弹出“无法访问指定设备”提示），自动搜寻可用端口。
  - **提供一键双击运行启动器**（[`双击启动出题器.bat`](双击启动出题器.bat)）：去除中文字符编码解析异常与括号语法问题，纯净 ASCII 结构，根目录下双击即自动启动并在浏览器中呈现工作台。
  - **增加网页端智能异常探测与提示**（[`prototype/index.html`](prototype/index.html)）：底部加入非模块原生行内脚本探测，若用户误以 `file://` 双击打开且未初始化，自动弹出醒目的友好黄色指引横幅。
- **5 大自动化测试套件持续 100% 绿灯**：冒烟、覆盖率、独立数学逆向复算、每日一练、难度梯度全部通过。

---

## [v0.8.0] - 2026-11-11 · 前端UI界面全面精装升级 + 通用插件考法补全 (阶梯考法达42单元)
- **前端工作台 UI 全面精装升级（彻底告别毛坯房）**（[`prototype/style.css`](prototype/style.css) / [`prototype/index.html`](prototype/index.html) / [`prototype/app.js`](prototype/app.js)）：
  - **现代设计语言体系**：引入教育科技蓝主色调（`#2563eb`）搭配翡翠绿与轻奢紫，采用多层次柔和弥散阴影、毛玻璃悬浮顶栏（`backdrop-filter`）与精巧的步骤胶囊指示器。
  - **模式与年级卡片化**：模式选择大卡片化（单元同步练·主打推荐 / 口算每日一练·分级速算 / 竖式每日一练·规范排版），年级与学期采用动态双态药丸组件。
  - **单元选择即时搜索与精致卡片**：新增单元实时过滤搜索框，单元卡片展示 `Unit XX` 序号、考法特征标签（`✨ 阶梯考法`、`📐 图形作图`、`⏱️ 钟表时间`）与题量建议。
  - **难度三档教学化情境**：以 🟢 基础巩固（夯实算理/课后查漏）、🔵 标准通关（校内自测/常规达标）、🟣 培优挑战（逆推思维/培优拔高）三色生动卡片呈现。
  - **拟真 A4 试卷工作台**：悬浮毛玻璃快捷操作栏（打印/PDF导出、查看答案、一键换一套、调整配置）；试卷正文采用标准人教版名校同步练规范抬头（学校、班级、姓名、学号、用时、得分考评框）；大题自动科学归类（一、直接写出得数；二、列竖式计算；三、填空比较；四、动手操作与作图；五、走进生活解决问题带作答留白与“答：”引导）。
- **通用插件深度补齐考法标识与梯度**（[`prototype/unitPlugins.js`](prototype/unitPlugins.js)）：
  - 补齐 `elapsed`（时分秒：时钟敲响间隔/列车延误）、`unit-len`（木料剪切）、`unit-weight`（复合装袋重量差）、`equation`（两步方程/列方程解和倍差倍）、`percent`（折扣成数/银行年利率本息）、`negative`（数轴单位距离/质检偏差）等三档独立考法。
  - 补全 `rect` / `rect-area`、`quad-area`、`triangle`、`circle`、`solid`、`cylinder`、`unit-area` 的 `subtemplateId` 映射，全书阶梯考法单元总数从 35 个大幅提升至 **42 个**。
- **5 大测试套件 100% 通过**：冒烟、93单元全覆盖、独立数学复算、每日一练、难度梯度全部绿灯。

---

## [v0.7.0] - 2026-11-11 · 全面完成 34 个单元的三档难度梯度升级（两档待升级清零）
- **课标专项单元三档阶梯考法全面升级**（[`prototype/scopeProblems.js`](prototype/scopeProblems.js)）：
  - 新增 **15 个概念/应用专项插件** 的全独立三档考法（`easy / medium / hard` 每档 4 种考法，提高档与标准档考法完全不重叠）：`calendar`（年月日：平闰年/季度 → 跨午夜时长/日期周期推算星期）、`operation-laws`（运算律：交换结合律 → 分配律拆项/凑整百简算）、`mixed-order`（混合运算：同级/乘加 → 综合算式合并/括号差值比较）、`fraction-intro`（分数初步：读写比大小 → 按份数求具体量/逆推总量）、`fraction-properties`（分数性质：分数单位/约分通分 → 分子加几分母怎么变/按和反求原分数）、`fraction-addsub`（分数加减：同分母/异分母 → 分数方程/凑整简算/超额完成）、`decimal-intro`（小数初步：读写换算 → 进退位加减/两步绳长与质量差倍）、`decimal-properties`（小数性质：数位化简/移位 → 移位差倍还原/四舍五入最大最小两位小数）、`decimal-addsub`（小数加减：基本加减 → 满减优惠/错看加数还原/连筐去皮重/木条重叠）、`fraction-division`（分数除法：倒数与基本除 → 比多比少逆推单位1/工程合做/和倍比例）、`optimize`（优化：同时做/烙饼 → 三人接水总等待最短/田忌赛马策略/多工序并行沏茶）、`possibility`（可能性：一定可能不可能 → 补球实现公平/最不利保证摸出/转盘改色公平）、`counterfeit`（找次品：3个称1次 → 已知次数求最大可测数/首次不平衡剩余范围/二次三分最大份）、`number-shape`（数与形：点阵层数 → 方桌拼排正逆推/数形平方差/空心方阵）、`proportion`（比例：比例判定与解比例 → 图形按比例放大面积变化/影长测树高/反比例铺砖与齿轮咬合）。
  - 升级 **6 个数感与计算专项插件** 的进阶考法与三档数值梯度：`four-operations`（四则运算：新增中括号逆推填数与租船费用计算）、`number-10000` 与 `large-number`（万以内数/大数：三档数值区间 + 含零组最大四位数）、`multi-times-one` / `two-times-two` / `three-times-two` / `sum-10000-oral`（三档乘数/口算区间 + 逆推因数、整十整百估算与两步应用）。
- **通用插件与几何插件三档梯度升级**（[`prototype/unitPlugins.js`](prototype/unitPlugins.js)、[`prototype/geometryProblems.js`](prototype/geometryProblems.js)）：
  - `pattern`（找规律：递增递减 → 二级等差、中间缺项逆推、周期穿珠求第N颗）、`combine`（搭配：基础配对 → 含0组两位数、固定排头照相、单循环赛场次、三段路线乘法原理）、`reasoning`（推理：2人→3人→4人排除推理）、`pigeonhole`（鸽巢问题：基础抽屉 → 至少k个同色、逆推最少准备球数、扑克牌花色保证）。
  - `geo-angle-intro`（新增数图形中直角个数）、`geo-angle-measure`（三档角度池 + 平角补角计算）、`geo-cuboid`（三档棱长 + 12条棱总长）、`geo-cylinder`（三档尺寸 + 圆柱侧面积）、`geo-view-1/2/3`（三档叠放层数），以及 `frac-mul` / `frac-div` / `dec-mul` / `dec-addsub` 三档算术梯度。
- **扩展难度梯度与独立复算测试**（[`prototype/difficulty-gradient-test.mjs`](prototype/difficulty-gradient-test.mjs)）：
  - 覆盖全部 **33 个阶梯考法插件**（18 个全独立三档插件 + 15 个进阶分支插件），并对 18 个核心插件的 72 种提高档考法执行 60 轮（共 4320 道随机题）独立数学逆向复算，通过率 100%。

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
