// 自动生成文件（请勿手改）：由 node scripts/manage.mjs 生成
export const PROJECT_STATUS = {
  "summary": {
    "generatedAt": "2026/11/12 15:20:58",
    "totalUnits": 93,
    "dedicatedUnits": 92,
    "reviewUnits": 1,
    "diagramUnits": 31,
    "dailyCount": 24,
    "testsPassed": 7,
    "testsTotal": 7,
    "byGradient": {
      "tiered-skills": 47,
      "three-tier-range": 22,
      "two-tier-range": 0,
      "fixed-range": 24
    },
    "byModule": {
      "scope": 41,
      "geometry": 17,
      "grid": 6,
      "diagram": 8,
      "unitPlugin": 16,
      "engineTopic": 4,
      "review": 1
    }
  },
  "tests": [
    {
      "id": "smoke",
      "name": "整卷生成冒烟测试 (6年级×3难度)",
      "file": "prototype/smoke-test.mjs",
      "passed": true,
      "durationMs": 117,
      "summary": "✅ 6年级/hard: 30/30 题, 去重后 30, 1ms, 分布={\"olympiad\":8,\"application\":7,\"arithmetic\":15} | 结果: 18 通过 / 0 未达标"
    },
    {
      "id": "coverage",
      "name": "93单元全量联动与756配置覆盖测试",
      "file": "prototype/coverage-test.mjs",
      "passed": true,
      "durationMs": 185,
      "summary": "总计 93 单元：联动通过 92，无专属出题映射（含整理与复习）1，不合格 0 | 已检查 756 种难度与题量组合。至少一组配置只有一个卷面分类的单元（分类数不等于考法数）共 81 个：1上 准备课、1上 位置、1上 1~5的认识和加减法、1上 认识图形（一）、1上 6~10的认识和加减法、1上 11~20各数的认识、1上 20以内的进位加法、1下 20以内的退位减法、1下 100以内数的认识、1下 100以内的加法和减法（一）、1下 认识图形（二）、1下 100以内的加法和减法（二）、1下 找规律、2上 100以内的加法和减法（二）、2上 角的初步认识、2上 表内乘法（一）、2上 观察物体（一）、2上 表内乘法（二）、2上 数学广角——搭配（一）、2下 数据收集整理、2下 表内除法（一）、2下 图形的运动（一）、2下 表内除法（二）、2下 混合运算、2下 有余数的除法、2下 万以内数的认识、2下 数学广角——推理、3上 万以内的加法和减法（一）、3上 万以内的加法和减法（二）、3上 倍的认识、3上 多位数乘一位数、3上 长方形和正方形、3上 分数的初步认识、3下 位置与方向（一）、3下 除数是一位数的除法、3下 复式统计表、3下 两位数乘两位数、3下 面积、3下 年月日、3下 小数的初步认识、3下 数学广角——搭配（二）、4上 大数的认识、4上 角的度量、4上 三位数乘两位数、4上 平行四边形和梯形、4上 除数是两位数的除法、4上 条形统计图、4上 数学广角——优化、4下 四则运算、4下 观察物体（二）、4下 运算定律、4下 小数的意义和性质、4下 三角形、4下 小数的加法和减法、4下 图形的运动（二）、4下 平均数与条形统计图、4下 数学广角——鸡兔同笼、5上 位置、5上 可能性、5上 简易方程、5上 多边形的面积、5上 数学广角——植树问题、5下 观察物体（三）、5下 因数与倍数、5下 长方体和正方体、5下 分数的意义和性质、5下 图形的运动（三）、5下 分数的加法和减法、5下 折线统计图、5下 数学广角——找次品、6上 位置与方向（二）、6上 分数除法、6上 比、6上 圆、6上 扇形统计图、6上 数学广角——数与形、6下 负数、6下 百分数（二）、6下 圆柱与圆锥、6下 比例、6下 数学广角——鸽巢问题"
    },
    {
      "id": "correctness",
      "name": "数学答案独立逆向复算测试 (160轮)",
      "file": "prototype/correctness-test.mjs",
      "passed": true,
      "durationMs": 89,
      "summary": "鸡兔同笼、植树、统计图并列和小数乘法的独立复算通过"
    },
    {
      "id": "daily",
      "name": "口算/竖式每日一练专项测试 (186配置)",
      "file": "prototype/daily-practice-test.mjs",
      "passed": true,
      "durationMs": 57,
      "summary": "186 种每日一练配置通过，题量、去重、答案复算和年级限制正常"
    },
    {
      "id": "gradient",
      "name": "三档难度阶梯考法与答案测试",
      "file": "prototype/difficulty-gradient-test.mjs",
      "passed": true,
      "durationMs": 94,
      "summary": "✅ 33 个专项插件（18 个全独立三档考法 + 15 个进阶分支插件）的难度梯度、题量和提高题答案复算全部通过！"
    },
    {
      "id": "rotation",
      "name": "同卷考法轮转相邻不重复测试 (93单元×3档×6轮)",
      "file": "prototype/rotation-test.mjs",
      "passed": true,
      "durationMs": 257,
      "summary": "考法轮转（相邻 subtemplateId 不重复）测试通过"
    },
    {
      "id": "regression",
      "name": "题面有效性、唯一解与必备考点回归测试",
      "file": "prototype/regression-test.mjs",
      "passed": true,
      "durationMs": 80,
      "summary": "题面有效性、动物题唯一解及缺失考点回归检查通过"
    }
  ],
  "git": {
    "initialized": true,
    "commits": [
      {
        "hash": "5465774",
        "date": "2026-11-12 15:06",
        "message": "chore: update projectStatus.js dashboard data"
      },
      {
        "hash": "0cadfb7",
        "date": "2026-11-12 15:06",
        "message": "fix: eliminate fake anti-dup tokens and fix real-world problem constraints"
      },
      {
        "hash": "58d8d70",
        "date": "2026-11-12 14:45",
        "message": "feat: upgrade decimal and fraction multiplication/division plugins with tiered skills"
      },
      {
        "hash": "88c826a",
        "date": "2026-11-12 14:40",
        "message": "feat: upgrade clock problems with tiered skills and multi-format templates"
      },
      {
        "hash": "780b7b4",
        "date": "2026-11-12 14:29",
        "message": "docs: establish 25 weak units tiered redesign specification"
      },
      {
        "hash": "6adab38",
        "date": "2026-11-12 14:16",
        "message": "docs: add standard open-source README.md"
      },
      {
        "hash": "b71e1d1",
        "date": "2026-11-11 17:21",
        "message": "docs: 建立93单元考点验收表并明确首发内容缺口"
      },
      {
        "hash": "96399e4",
        "date": "2026-11-11 17:12",
        "message": "fix: 修复题面与唯一解缺陷，补齐核心考点并恢复验证链路"
      },
      {
        "hash": "fad98a7",
        "date": "2026-11-11 16:39",
        "message": "fix: 修复Windows下URL唤起弹窗权限问题并优化双击脚本"
      },
      {
        "hash": "220f2c5",
        "date": "2026-11-11 16:30",
        "message": "fix: 彻底解决本地浏览器file协议下按钮无反应问题，新增一键双击启动器与智能引导"
      },
      {
        "hash": "8638a4b",
        "date": "2026-11-11 16:18",
        "message": "feat: 前端UI界面全面精装升级 + 通用插件考法补全 (阶梯考法达42单元，v0.8.0)"
      },
      {
        "hash": "8475fb3",
        "date": "2026-11-11 15:42",
        "message": "feat: 完成全部34个待升级单元的三档难度梯度改造（v0.7.0，两档待升级清零）"
      },
      {
        "hash": "fbcb3f1",
        "date": "2026-11-11 15:03",
        "message": "chore: 同步看板最新 Git 快照状态并保持工作区干净"
      },
      {
        "hash": "64c8a25",
        "date": "2026-11-11 15:01",
        "message": "feat: 上线项目管理系统 v0.6.0（可视化看板 + 自动巡检 + Git 版本台账）"
      }
    ],
    "dirtyFiles": 8
  },
  "roadmap": [
    {
      "group": "P0 · 正在推进 / 近期优先",
      "items": [
        {
          "done": false,
          "text": "首发内容验收：以 [单元必备考点验收表](UNIT_COVERAGE_AUDIT.md) 为唯一缺口清单。下一步固定目标教材版次，并先修复折扣/满减与单模板跨难度问题；退出条件是目录有依据、P0关闭、主干考点具备独立验证。"
        },
        {
          "done": true,
          "text": "建立项目管理系统（可视化看板 + 自动巡检脚本 + Git 仓库 + AI 记忆规则）"
        },
        {
          "done": true,
          "text": "完成第一批 3 个单元（`有余数的除法`、`倍的认识`、`因数与倍数`）的三档难度独立考法梯度"
        },
        {
          "done": true,
          "text": "扩充其余单元的三档难度梯度（`easy / medium / hard`）：全部 34 个“两档数值”单元已升级为三档阶梯考法或三档递进数值（阶梯考法单元达 35 个、三档数值达 32 个，两档待升级清零）"
        },
        {
          "done": true,
          "text": "前端支持 URL 参数直达单元：从 `admin.html` 点击任意单元可直接打开 `index.html` 对应年级学期单元并预览试卷"
        }
      ]
    },
    {
      "group": "P1 · 微信小程序端移植（M1 → M2）",
      "items": [
        {
          "done": false,
          "text": "将 `prototype/` 下的纯 JS 生成引擎与插件模块迁移至 `repos/skeleton/miniprogram/`"
        },
        {
          "done": false,
          "text": "实现小程序端四步选卷 UI（教材→年级学期单元→难度题量→预览导出）与 SVG/Canvas 图形渲染适配"
        },
        {
          "done": false,
          "text": "补齐“关于”页开源许可证声明（木兰 PSL v2 + MIT）与隐私保护指引"
        }
      ]
    },
    {
      "group": "P2 · 变现与多出口副线（M3 → M4）",
      "items": [
        {
          "done": false,
          "text": "编写闲鱼/小红书电子资料包批量导出脚本（按年级×单元自动生成带水印与小程序码的 PDF 题卡包）"
        },
        {
          "done": false,
          "text": "注册个人小程序账号，完成微信认证（¥30/年）与 ICP 备案，按“工具”类目提审"
        },
        {
          "done": false,
          "text": "UV 满 500 后接入流量主（导出 PDF 激励视频 + 结果页 Banner）"
        }
      ]
    }
  ],
  "changelog": [
    {
      "version": "v0.8.5",
      "date": "2026-11-12",
      "title": "口算与竖式每日一练全学段深度重构与 1~6 年级难度梯度精准分级",
      "bullets": [
        "**口算与竖式每日一练全学段覆盖扩充（范围数由 17 增至 24 个）**：",
        "彻底解决原先 3~6 年级口算专项为 0、6年级竖式专项为 0 的严重断层问题，实现 1~6 年级学段无缝衔接。",
        "**口算新增 7 大进阶范围**：",
        "三年级：round-times-div（整十整百数乘除法口算）、sum-10000-oral（万以内加减法口算）。",
        "四年级：two-times-one-oral（两位数乘一位数与整百乘整十口算）、dec-addsub-oral（简单小数加减法口算）。",
        "五年级：dec-muldiv-oral（小数乘除法口算与速算特训）。",
        "六年级：percent-oral（百分数、分数与小数互化及速算）。",
        "**竖式新增与深化 10 大规范笔算范围**：",
        "六年级新增：pi-multiply（圆周率 $\\pi=3.14$ 常用倍数竖式笔算特训，全面覆盖 $3.14 \\times 1\\sim 9$、两位数及小数倍数）。",
        "除法笔算彻底修复：重构 divide-one 与 divide-two，解除此前硬编码 result <= 18 与除数限制，全面支持标准三位数商、商中间有0、末尾有0及带余数试商。",
        "**全范围 Easy / Medium / Hard 三档难度数学算理分级**：",
        "**加减法口算与笔算**：",
        "Easy：不进位、不退位，夯实基础算理与数位认知。",
        "Medium：单次进位、单次退位，标准速算通关。",
        "Hard：连续进位、连续退位、被减数中间有0（如 $800 - 356$）、跨数位加减。",
        "**表内乘除法**：",
        "Easy：1~5乘法口诀及对应除法。",
        "Medium：4~9表内高频乘除法。",
        "Hard：全乘法表混合逆运算与极限试除。",
        "**多位数乘除笔算**：",
        "Easy：基本一位数/两位数乘除，无进位或单次进位，整除商。",
        "Medium：常规两位数乘法、三位数除以一位数、两位数试商，含规范余数。",
        "Hard：因数中间有0（如 $308 \\times 4$）、因数末尾有0、商中间有0（如 $618 \\div 6 = 103$）、商末尾有0（如 $840 \\div 4 = 210$）、复杂调商。",
        "**小数与百分数**：",
        "Easy：纯一位小数加减、基础百分数互化（如 $25\\% = 0.25$）。",
        "Medium：两位小数加减（需补位对齐）、小数乘一位数、常见百分数速算。",
        "Hard：整数减小数（如 $10 - 2.45$）、末尾去0规约、小数除法补0、高频百分数分数互化。",
        "**独立高熵实时生成引擎与零短缺保障**：",
        "每日一练采用独立计算生成器调度映射（DAILY_GENERATORS），彻底摆脱此前通过大题插件过滤 subtemplateId === 'calculate' 导致 75% 题型被丢弃、易触发题量不足的缺陷。",
        "针对 carry-20、borrow-20、table-times-2 等总算式数量有限的范围（36~81 道），引入“梯度加权概率采样”，确保三档难度均能在 20/30/40 题下 100% 满额出卷且零题面重复。",
        "**前端交互与管理看板联动**：",
        "app.js 每日一练列表新增“🎯 本年级精练”与“基础衔接”智能徽章。",
        "资源缓存版本升级为 ?v=20261112c。",
        "全部 7 大测试套件通过，daily-practice-test.mjs 测试配置由 123 组扩充至 186 组，100% 绿灯通过。"
      ]
    },
    {
      "version": "v0.8.4",
      "date": "2026-11-12",
      "title": "彻底清除全库生硬伪去重标记、按年级隔离数学广角搭配与优化情境算理真实性",
      "bullets": [
        "**彻底消除全库生硬“伪去重标记”（代码中 6 处违规字符彻底清零）**：",
        "排查确认根因：此前为防止 seen.has(key) 判重过滤，在多处通用模板中生硬拼接了 （第${guard}组）、（第${guard}局）、（第${guard}题）、（间隔耗时第${m1}组）、（第 ${n} 题） 等人工痕迹，导致用户卷面上出现“照相（第1组）... 照相（第5组）”的不自然重复。",
        "清理范围：",
        "prototype/unitPlugins.js：清洗 combineProblems（照相排队）、patternProblems（图形找规律）、pigeonholeProblems（扑克牌抽屉花色）、unitElapsedProblems（挂钟敲钟间隔）。",
        "prototype/scopeProblems.js：清洗 proportion-check（比例判断），优化生成轮换策略与尝试步长。",
        "全库扫描脚本 node scripts/scan_fakes.mjs 扫描结果已清零（0 处违规标记）。",
        "**年级隔离与认知对齐：彻底分离二年级《搭配（一）》与三年级《搭配（二）》**：",
        "**二年级上册《数学广角——搭配（一）》**：严格契合课标二年级“有序列举与直观连线”认知水平，严禁出现含0排列、单循环赛或三段路线相乘；重构为：2×2服装搭配（短袖/衬衫配长裤/短裤）、1与2无0组数、3人握手、2饮品配3早点（早餐搭配）、3×3衣服搭配、2/5/7三选二求和（无序组合）、三人合影排队等 7 种亲和考法。",
        "**三年级下册《数学广角——搭配（二）》**：承接乘法计数与含0排列；考法覆盖含0数字卡片（0在十位排除）、单循环赛场次计算、多段路线乘法原理走法、4人合影指定排头/排尾排法（全面引入“小明、小华、小红、小军”等丰富真实人名与多变站位，彻底告别单调“甲、乙、丙”）。",
        "**生活常识与算理真实度全面校正**：",
        "**4上《数学广角——优化》**：全面扩充沏茶问题（烧水8~15分钟，洗杯拿茶并行）、烙饼问题（平底锅/电饼铛煎牛排/烙饼/煎蛋，两面煎2~6分钟，单数/双数饼数）、排队等待（接水/打饭/理发多情境与丰富人名轮换）、田忌赛马对策论（赛马、扑克比大小、抢数对弈等多场景），解除了低熵数值对 40 题生成池的挤压瓶颈。",
        "**1下《找规律》**：图形符号池从 4 种扩充到 14 种（△○□☆●▲■★◇◆▽▼♡♢），新增标准周期循环第 $n$ 个图形推断与多色珠子排列规律，题面自然通顺。",
        "**6下《数学广角——鸽巢问题》**：扩充 54 张含大小王扑克抽屉、52 张无王花色保证、13 点数同点保证、抽屉双色/三色袜子同色保证等多样情境。",
        "**验证与台账**：",
        "前端资源版本号升级为 ?v=20261112b。",
        "全部 7 大测试套件 100% 满额绿灯通过（整卷冒烟、756配置全覆盖、160轮独立数学复算、每日一练、难度梯度、考法轮转、题面有效性）。",
        "**极度贫血单元彻底清零 (5 -> 0)**：",
        "重构 [prototype/unitPlugins.js](prototype/unitPlugins.js) 中的三大高年级核心计算插件（decimalMulProblems、decimalDivProblems、fractionMulProblems），全面引入三档独立考法与子模板矩阵：",
        "**5上-U1 小数乘法**：细分 dec-mul-tenth-int（小数乘整数）、dec-mul-ten-hundred（扩大10/100倍）、dec-mul-tenth-tenth（一位乘一位）、dec-mul-int-tenth（整数乘一位）、dec-mul-hundredth-tenth（两位乘一位）以及 dec-mul-special-quarter（特殊因数0.25/1.25巧算）共 6 种阶梯考法。",
        "**5上-U3 小数除法**：细分 dec-div-int-divisor（整数除数一位商）、dec-div-ten-divisor（除以10/100）、dec-div-dec-divisor（小数除数）、dec-div-two-tenth（两位除数）、dec-div-two-dec（两位小数除法）以及 dec-div-special-quarter（特殊除数0.25巧除）共 6 种阶梯考法。",
        "**6上-U1 分数乘法**：细分 frac-mul-int-simple（分数乘整数基础）、frac-mul-int-cancel（整除约分型）、frac-mul-frac-basic（分数乘分数）、frac-mul-frac-cancel（带交叉约分型）、frac-mul-three-terms（三项连乘链式巧算）以及 frac-mul-cross-cancel 共 6 种阶梯考法。",
        "结合首批钟表与时间单元的重构，全网 93 单元中**“极度贫血（仅1~2种考法）”单元由 5 个彻底降至 0 个**！考法较丰富单元增至 **73 个**，阶梯考法单元总数提升至 **47 个**！",
        "全套 7 大自动化测试套件持续 100% 满额通过，独立逆向数学复算无一谬误。",
        "**开源化与全量题型体检**：",
        "确立 GitHub 纯前端开源与技术复盘路线，增加标准开源 [README.md](README.md)。",
        "编写自动化诊断工具 [scripts/find_weak_units.mjs](scripts/find_weak_units.mjs)，对全套 93 个单元的三档考法真实生成链路进行全量扫描。",
        "产出完整工程规范文档 [WEAK_UNITS_REDESIGN_SPEC.md](WEAK_UNITS_REDESIGN_SPEC.md)，明确定义 25 个薄弱单元在 Easy/Medium/Hard 三档下的完整考法矩阵、题面情境、算理约束与数据形式。",
        "确定“平时做单元专项练（因类制宜）、周末出单元测验卷（五大板块大题考卷）”的双轨制架构。"
      ]
    },
    {
      "version": "v0.8.2",
      "date": "2026-11-11",
      "title": "审查修复、核心考点补齐与验证链路恢复",
      "bullets": [
        "**后续内容验收（同日）**：完成93个入口共279卷三档抽样与源码范围核对，建立 [单元必备考点验收表](UNIT_COVERAGE_AUDIT.md)。识别教材版次未固定及新的折扣/满减、难度边界问题，迁移前先关闭内容验收P0。本次仅更新验收文档及项目路线图，未修改生成器。",
        "修复年月日生成同月不存在日期、满减付款为负、约分条件未化简；新增固定种子题面有效性回归检查。",
        "修复三种动物题的大小关系、标准题直接泄露答案和提高题条件不足；使用非负整数解枚举验证三档题目均唯一可解，移除错误兜底题。",
        "补齐六上《圆》的周长/面积、五上《多边形的面积》的平行四边形/三角形面积与反求高、三上《测量》的吨与千克换算。93 单元接通与完整考点覆盖分开记录。",
        "保留并收尾原工作区的考法轮转、推理三模式、竖式渲染保护、文案调整和本地服务访问范围限制；推理考法标识加入难度维度，并检查人数与线索梯度。",
        "模式与难度卡片改为原生按钮，支持 Enter/空格选择、选中状态播报和键盘焦点提示；递增入口资源版本。",
        "更新浏览器检查定位，增加页面异常与键盘操作断言；11 类 PDF 样张全部通过题号、答案页分隔和边界校验，共 37 页，已目检新增圆/面积题页面。",
        "自动巡检扩展为 7 套测试；普通巡检遇到失败也返回非零退出码，故障注入检查通过。修复看板算术插件三档分类与测试总数展示，更新测试摘要。",
        "验证：7/7 套件通过；覆盖 93 单元的 756 种配置、123 种每日练配置；11 类浏览器生成及 PDF 检查通过。未进行微信真机或逐项教材全考点认证。"
      ]
    },
    {
      "version": "v0.8.1",
      "date": "2026-11-11",
      "title": "解决本地浏览器file协议限制 + 修复Windows启动弹窗 + 启动器优化",
      "bullets": [
        "**解决本地直接打开 HTML 按钮无反应与启动弹窗问题**：",
        "排查确认原因：现代主流浏览器（Chrome/Edge）因严格的 CORS/Module 同源安全策略，默认在本地 file:/// 协议下阻止加载 <script type=\"module\" src=\"app.js\">，导致 JS 未被执行。",
        "**提供零依赖本地静态 HTTP 服务器**（[scripts/serve.mjs](scripts/serve.mjs)）：Node.js 原生内置 http 模块实现，修复 Windows 下 ShellExecute 唤起 URL 权限弹窗（改用 PowerShell Start-Process 与 Edge 备用唤起，避免弹出“无法访问指定设备”提示），自动搜寻可用端口。",
        "**提供一键双击运行启动器**（[双击启动出题器.bat](双击启动出题器.bat)）：去除中文字符编码解析异常与括号语法问题，纯净 ASCII 结构，根目录下双击即自动启动并在浏览器中呈现工作台。",
        "**增加网页端智能异常探测与提示**（[prototype/index.html](prototype/index.html)）：底部加入非模块原生行内脚本探测，若用户误以 file:// 双击打开且未初始化，自动弹出醒目的友好黄色指引横幅。",
        "**5 大自动化测试套件持续 100% 绿灯**：冒烟、覆盖率、独立数学逆向复算、每日一练、难度梯度全部通过。"
      ]
    },
    {
      "version": "v0.8.0",
      "date": "2026-11-11",
      "title": "前端UI界面全面精装升级 + 通用插件考法补全 (阶梯考法达42单元)",
      "bullets": [
        "**前端工作台 UI 全面精装升级（彻底告别毛坯房）**（[prototype/style.css](prototype/style.css) / [prototype/index.html](prototype/index.html) / [prototype/app.js](prototype/app.js)）：",
        "**现代设计语言体系**：引入教育科技蓝主色调（#2563eb）搭配翡翠绿与轻奢紫，采用多层次柔和弥散阴影、毛玻璃悬浮顶栏（backdrop-filter）与精巧的步骤胶囊指示器。",
        "**模式与年级卡片化**：模式选择大卡片化（单元同步练·主打推荐 / 口算每日一练·分级速算 / 竖式每日一练·规范排版），年级与学期采用动态双态药丸组件。",
        "**单元选择即时搜索与精致卡片**：新增单元实时过滤搜索框，单元卡片展示 Unit XX 序号、考法特征标签（✨ 阶梯考法、📐 图形作图、⏱️ 钟表时间）与题量建议。",
        "**难度三档教学化情境**：以 🟢 基础巩固（夯实算理/课后查漏）、🔵 标准通关（校内自测/常规达标）、🟣 培优挑战（逆推思维/培优拔高）三色生动卡片呈现。",
        "**拟真 A4 试卷工作台**：悬浮毛玻璃快捷操作栏（打印/PDF导出、查看答案、一键换一套、调整配置）；试卷正文采用标准人教版名校同步练规范抬头（学校、班级、姓名、学号、用时、得分考评框）；大题自动科学归类（一、直接写出得数；二、列竖式计算；三、填空比较；四、动手操作与作图；五、走进生活解决问题带作答留白与“答：”引导）。",
        "**通用插件深度补齐考法标识与梯度**（[prototype/unitPlugins.js](prototype/unitPlugins.js)）：",
        "补齐 elapsed（时分秒：时钟敲响间隔/列车延误）、unit-len（木料剪切）、unit-weight（复合装袋重量差）、equation（两步方程/列方程解和倍差倍）、percent（折扣成数/银行年利率本息）、negative（数轴单位距离/质检偏差）等三档独立考法。",
        "补全 rect / rect-area、quad-area、triangle、circle、solid、cylinder、unit-area 的 subtemplateId 映射，全书阶梯考法单元总数从 35 个大幅提升至 **42 个**。",
        "**5 大测试套件 100% 通过**：冒烟、93单元全覆盖、独立数学复算、每日一练、难度梯度全部绿灯。"
      ]
    },
    {
      "version": "v0.7.0",
      "date": "2026-11-11",
      "title": "全面完成 34 个单元的三档难度梯度升级（两档待升级清零）",
      "bullets": [
        "**课标专项单元三档阶梯考法全面升级**（[prototype/scopeProblems.js](prototype/scopeProblems.js)）：",
        "新增 **15 个概念/应用专项插件** 的全独立三档考法（easy / medium / hard 每档 4 种考法，提高档与标准档考法完全不重叠）：calendar（年月日：平闰年/季度 → 跨午夜时长/日期周期推算星期）、operation-laws（运算律：交换结合律 → 分配律拆项/凑整百简算）、mixed-order（混合运算：同级/乘加 → 综合算式合并/括号差值比较）、fraction-intro（分数初步：读写比大小 → 按份数求具体量/逆推总量）、fraction-properties（分数性质：分数单位/约分通分 → 分子加几分母怎么变/按和反求原分数）、fraction-addsub（分数加减：同分母/异分母 → 分数方程/凑整简算/超额完成）、decimal-intro（小数初步：读写换算 → 进退位加减/两步绳长与质量差倍）、decimal-properties（小数性质：数位化简/移位 → 移位差倍还原/四舍五入最大最小两位小数）、decimal-addsub（小数加减：基本加减 → 满减优惠/错看加数还原/连筐去皮重/木条重叠）、fraction-division（分数除法：倒数与基本除 → 比多比少逆推单位1/工程合做/和倍比例）、optimize（优化：同时做/烙饼 → 三人接水总等待最短/田忌赛马策略/多工序并行沏茶）、possibility（可能性：一定可能不可能 → 补球实现公平/最不利保证摸出/转盘改色公平）、counterfeit（找次品：3个称1次 → 已知次数求最大可测数/首次不平衡剩余范围/二次三分最大份）、number-shape（数与形：点阵层数 → 方桌拼排正逆推/数形平方差/空心方阵）、proportion（比例：比例判定与解比例 → 图形按比例放大面积变化/影长测树高/反比例铺砖与齿轮咬合）。",
        "升级 **6 个数感与计算专项插件** 的进阶考法与三档数值梯度：four-operations（四则运算：新增中括号逆推填数与租船费用计算）、number-10000 与 large-number（万以内数/大数：三档数值区间 + 含零组最大四位数）、multi-times-one / two-times-two / three-times-two / sum-10000-oral（三档乘数/口算区间 + 逆推因数、整十整百估算与两步应用）。",
        "**通用插件与几何插件三档梯度升级**（[prototype/unitPlugins.js](prototype/unitPlugins.js)、[prototype/geometryProblems.js](prototype/geometryProblems.js)）：",
        "pattern（找规律：递增递减 → 二级等差、中间缺项逆推、周期穿珠求第N颗）、combine（搭配：基础配对 → 含0组两位数、固定排头照相、单循环赛场次、三段路线乘法原理）、reasoning（推理：2人→3人→4人排除推理）、pigeonhole（鸽巢问题：基础抽屉 → 至少k个同色、逆推最少准备球数、扑克牌花色保证）。",
        "geo-angle-intro（新增数图形中直角个数）、geo-angle-measure（三档角度池 + 平角补角计算）、geo-cuboid（三档棱长 + 12条棱总长）、geo-cylinder（三档尺寸 + 圆柱侧面积）、geo-view-1/2/3（三档叠放层数），以及 frac-mul / frac-div / dec-mul / dec-addsub 三档算术梯度。",
        "**扩展难度梯度与独立复算测试**（[prototype/difficulty-gradient-test.mjs](prototype/difficulty-gradient-test.mjs)）：",
        "覆盖全部 **33 个阶梯考法插件**（18 个全独立三档插件 + 15 个进阶分支插件），并对 18 个核心插件的 72 种提高档考法执行 60 轮（共 4320 道随机题）独立数学逆向复算，通过率 100%。"
      ]
    },
    {
      "version": "v0.6.0",
      "date": "2026-11-11",
      "title": "项目管理系统上线（看板 + 自动巡检 + Git + 记忆规范）",
      "bullets": [
        "**新增可视化管理看板**（[prototype/admin.html](prototype/admin.html) / [prototype/admin.js](prototype/admin.js)）：",
        "93 个教材单元全景矩阵：支持按年级、模块类型、难度梯度状态过滤，支持点击单元并排对比 基础 / 标准 / 提高 三档难度的考法与样题。",
        "支持从管理看板一键跳转到出题器对应单元（index.html?grade=...&semester=...&unit=...）。",
        "集成里程碑待办、合规自检红线、踩坑档案、测试套件状态与 Git 提交历史。",
        "**新增自动化管理与巡检脚本**（[scripts/manage.mjs](scripts/manage.mjs)）：",
        "自动执行 5 大测试套件（冒烟、93单元覆盖、数学正确性复算、每日一练、难度梯度）。",
        "自动对 93 个单元进行三档难度抽样与梯度分析（区分“阶梯考法”、“数值梯度”、“固定考法”），生成前端数据模块 [prototype/projectStatus.js](prototype/projectStatus.js)。",
        "支持 node scripts/manage.mjs snapshot \"提交说明\" 一键完成测试、看板更新与 Git 提交。",
        "**建立 Git 版本控制与 AI 强制记忆规范**：",
        "初始化根目录 Git 仓库，配置 .gitignore，归档 PDF 自动化打印检验脚本至 scripts/pdf/。",
        "新增 Antigravity 常驻规则 [.agents/rules/project-management.md](.agents/rules/project-management.md) 与 [GEMINI.md](GEMINI.md)，确保后续每次会话自动读取项目状态并在改动后自动记录。"
      ]
    },
    {
      "version": "v0.5.1",
      "date": "2026-11-11 09:34",
      "title": "专项单元三档难度梯度升级（第一批）",
      "bullets": [
        "**升级 3 个核心单元的难度梯度**（[prototype/scopeProblems.js](prototype/scopeProblems.js)）：",
        "**2下《有余数的除法》(divide-remainder)**：区分基础（直接求商和余数、装盒、余数范围判断）、标准（余数最大问题、算式逆推填空）、提高（逆推被除数/除数、进一法至少几个盒子、再添几本装满）。",
        "**3上《倍的认识》(times-as-many)**：区分基础（直接求倍数/几倍）、标准（应用题求倍数/一倍数/判断）、提高（比几倍多几、已知比几倍多几反求一倍数、和倍、差倍）。",
        "**5下《因数与倍数》(factors)**：区分基础（因数倍数基本判断、奇偶、5的倍数）、标准（列举全部因数、质数合数判断、2和5公倍判断）、提高（列举公因数、区间内2和5公倍数、既是因数又是倍数、2和3公倍数的数位填数）。",
        "**新增难度梯度测试**（[prototype/difficulty-gradient-test.mjs](prototype/difficulty-gradient-test.mjs)）：验证上述 3 个单元在 easy / medium / hard 下题量充足、各含 4 种考法且提高档考法独立、100 轮随机答案独立复算 100% 正确。"
      ]
    },
    {
      "version": "v0.5.0",
      "date": "2026-11-10 15:35~16:45",
      "title": "93单元100%视觉与题型闭环 + 每日一练 + PDF打印验证",
      "bullets": [
        "**攻克全部 16 个图形/概念/操作类单元（实现 92/93 专属插件覆盖，仅 6下《整理与复习》为全年级综合复习）**：",
        "**几何作图与图形认识**（[prototype/geometryProblems.js](prototype/geometryProblems.js)）：新增 geo-count（准备课数图形）、geo-position（位置上下左右）、geo-shapes-solid（认识立体图形）、geo-shapes-plane（认识平面图形）、geo-angle-intro（角的初步认识）、geo-view-1/2/3（观察物体三视图）、geo-perimeter（长方形和正方形周长图形题）、geo-area（面积图形题）、geo-angle-measure（量角器角的度量）、geo-quad（平行四边形和梯形）、geo-triangle（三角形）、geo-composite（组合多边形面积）、geo-cuboid（长方体和正方体）、geo-circle（圆）、geo-cylinder（圆柱与圆锥），图形单元默认 maxCount: 6。",
        "**方格纸与坐标作图**（[prototype/gridProblems.js](prototype/gridProblems.js)）：新增 grid-motion-1/2/3（图形的运动：对称/平移/旋转）、grid-direction（位置与方向一）、grid-pairs（五上用数对确定位置）、grid-bearing（六上位置与方向二），自带题目方格图与答案页作图参考图（answerDiagram）。",
        "**钟表与统计图表 SVG 渲染**（[prototype/diagramProblems.js](prototype/diagramProblems.js) + [prototype/renderDiagram.js](prototype/renderDiagram.js)）：新增 clock（认识钟表/时间：读表填空、画指针、三选一）、data-table（数据收集整理）、double-table（复式统计表）、bar-chart（条形统计图）、bar-average（平均数与条形统计图）、line-chart（折线统计图）、pie-chart（扇形统计图）。",
        "**教材范围专项题型生成器**（[prototype/scopeProblems.js](prototype/scopeProblems.js)）：新增 39 个按课标范围严格约束的插件（数的认识、口算/笔算分流、运算律、混合运算、四则运算、分数/小数初步与性质、可能性、优化、找次品、数与形、比例等）。",
        "**新增“口算每日一练”与“竖式每日一练”内置模块**（[prototype/dailyPractice.js](prototype/dailyPractice.js) + [prototype/daily-practice-test.mjs](prototype/daily-practice-test.mjs)）：",
        "支持 17 个专项练习范围（7 个口算 + 10 个竖式），按所选年级自动解锁，支持竖式自动对齐排版（加减乘竖式与除法竖式框 renderVertical），123 种配置测试全过。",
        "**新增独立数学正确性复算与 Playwright PDF 打印全链路验证**：",
        "新增 [prototype/correctness-test.mjs](prototype/correctness-test.mjs)：对鸡兔同笼、植树、条形图并列最值、小数乘法进行 160 轮独立逆向复算。",
        "完成 8 类典型卷面（口算、小数竖式、乘法竖式、除法竖式、万以内数、扇形统计图、方格运动、三视图）的無头 Chrome A4 打印导出与 PDF 边界/题号自动化校验（样张存档于 output/pdf/）。"
      ]
    },
    {
      "version": "v0.4.0",
      "date": "2026-11-10 15:00~15:45",
      "title": "全单元联动初版与引擎深度接通",
      "bullets": [
        "接通引擎 decimal-arithmetic 与 fraction-arithmetic 策略，支持 arithmeticPlugin 与 generateFromSubtemplate 精确出题。",
        "修复配额计算、轮转死循环、解方程减法分支答案错误、小数除法混入整数、低年级钟表 24 时制超纲等问题。"
      ]
    },
    {
      "version": "v0.1.0 ~ v0.3.0",
      "date": "2026-11-10 09:00~15:00",
      "title": "立项定稿与网页版原型跑通",
      "bullets": [
        "完成《立项文档_v1.md》与《竞品变现模式调研.md》四轮调研，拍板 **v1.0 直接主打“按教材单元自动出套题”**。",
        "克隆开源组卷引擎（repos/engine）与小程序骨架（repos/skeleton），搭建 prototype/ 四步出卷 UI 与打印样式，跑通 18/18 冒烟测试。"
      ]
    }
  ],
  "dailyRanges": [
    {
      "id": "sum-10",
      "name": "10以内加减法",
      "grade": 1,
      "mode": "oral",
      "maxCount": 20,
      "samples": [
        {
          "question": "8 − 2 = ______",
          "answer": "6"
        },
        {
          "question": "8 − 1 = ______",
          "answer": "7"
        },
        {
          "question": "5 − 4 = ______",
          "answer": "1"
        }
      ]
    },
    {
      "id": "carry-20",
      "name": "20以内进位加法",
      "grade": 1,
      "mode": "oral",
      "maxCount": 20,
      "samples": [
        {
          "question": "6 + 6 = ______",
          "answer": "12"
        },
        {
          "question": "3 + 7 = ______",
          "answer": "10"
        },
        {
          "question": "8 + 2 = ______",
          "answer": "10"
        }
      ]
    },
    {
      "id": "borrow-20",
      "name": "20以内退位减法",
      "grade": 1,
      "mode": "oral",
      "maxCount": 20,
      "samples": [
        {
          "question": "11 − 6 = ______",
          "answer": "5"
        },
        {
          "question": "14 − 5 = ______",
          "answer": "9"
        },
        {
          "question": "12 − 5 = ______",
          "answer": "7"
        }
      ]
    },
    {
      "id": "sum-100-oral",
      "name": "100以内口算加减法",
      "grade": 1,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "19 − 8 = ______",
          "answer": "11"
        },
        {
          "question": "54 + 3 = ______",
          "answer": "57"
        },
        {
          "question": "33 − 1 = ______",
          "answer": "32"
        }
      ]
    },
    {
      "id": "table-times-2",
      "name": "表内乘法",
      "grade": 2,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "8 × 6 = ______",
          "answer": "48"
        },
        {
          "question": "8 × 7 = ______",
          "answer": "56"
        },
        {
          "question": "8 × 9 = ______",
          "answer": "72"
        }
      ]
    },
    {
      "id": "divide-table-1",
      "name": "表内除法（2～6口诀）",
      "grade": 2,
      "mode": "oral",
      "maxCount": 20,
      "samples": [
        {
          "question": "25 ÷ 5 = ______",
          "answer": "5"
        },
        {
          "question": "18 ÷ 6 = ______",
          "answer": "3"
        },
        {
          "question": "12 ÷ 4 = ______",
          "answer": "3"
        }
      ]
    },
    {
      "id": "divide-table-2",
      "name": "表内除法（7～9口诀）",
      "grade": 2,
      "mode": "oral",
      "maxCount": 20,
      "samples": [
        {
          "question": "54 ÷ 9 = ______",
          "answer": "6"
        },
        {
          "question": "45 ÷ 9 = ______",
          "answer": "5"
        },
        {
          "question": "42 ÷ 7 = ______",
          "answer": "6"
        }
      ]
    },
    {
      "id": "sum-100-column",
      "name": "两位数加减法",
      "grade": 2,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "55 − 46 = ______",
          "answer": "9"
        },
        {
          "question": "28 + 22 = ______",
          "answer": "50"
        },
        {
          "question": "72 − 56 = ______",
          "answer": "16"
        }
      ]
    },
    {
      "id": "round-times-div",
      "name": "整十整百数乘除法",
      "grade": 3,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "120 ÷ 6 = ______",
          "answer": "20"
        },
        {
          "question": "560 ÷ 7 = ______",
          "answer": "80"
        },
        {
          "question": "180 ÷ 6 = ______",
          "answer": "30"
        }
      ]
    },
    {
      "id": "sum-10000-oral",
      "name": "万以内加减法口算",
      "grade": 3,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "4300 − 300 = ______",
          "answer": "4000"
        },
        {
          "question": "2400 + 600 = ______",
          "answer": "3000"
        },
        {
          "question": "3400 − 800 = ______",
          "answer": "2600"
        }
      ]
    },
    {
      "id": "sum-10000-column",
      "name": "三位数加减法",
      "grade": 3,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "816 − 403 = ______",
          "answer": "413"
        },
        {
          "question": "326 + 552 = ______",
          "answer": "878"
        },
        {
          "question": "255 + 536 = ______",
          "answer": "791"
        }
      ]
    },
    {
      "id": "multi-times-one",
      "name": "多位数乘一位数",
      "grade": 3,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "404 × 5 = ______",
          "answer": "2020"
        },
        {
          "question": "346 × 5 = ______",
          "answer": "1730"
        },
        {
          "question": "400 × 7 = ______",
          "answer": "2800"
        }
      ]
    },
    {
      "id": "two-times-two",
      "name": "两位数乘两位数",
      "grade": 3,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "69 × 25 = ______",
          "answer": "1725"
        },
        {
          "question": "70 × 33 = ______",
          "answer": "2310"
        },
        {
          "question": "49 × 20 = ______",
          "answer": "980"
        }
      ]
    },
    {
      "id": "divide-one",
      "name": "除数是一位数的除法",
      "grade": 3,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "630 ÷ 9 = ______",
          "answer": "70"
        },
        {
          "question": "474 ÷ 3 = ______",
          "answer": "158"
        },
        {
          "question": "392 ÷ 4 = ______",
          "answer": "98"
        }
      ]
    },
    {
      "id": "two-times-one-oral",
      "name": "两位数乘一位数口算",
      "grade": 4,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "400 ÷ 80 = ______",
          "answer": "5"
        },
        {
          "question": "420 ÷ 70 = ______",
          "answer": "6"
        },
        {
          "question": "420 ÷ 60 = ______",
          "answer": "7"
        }
      ]
    },
    {
      "id": "dec-addsub-oral",
      "name": "小数加减法口算",
      "grade": 4,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "7.2 − 1.6 = ______",
          "answer": "5.6"
        },
        {
          "question": "3.1 − 1.6 = ______",
          "answer": "1.5"
        },
        {
          "question": "3.8 + 4.5 = ______",
          "answer": "8.3"
        }
      ]
    },
    {
      "id": "three-times-two",
      "name": "三位数乘两位数",
      "grade": 4,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "423 × 33 = ______",
          "answer": "13959"
        },
        {
          "question": "388 × 20 = ______",
          "answer": "7760"
        },
        {
          "question": "173 × 42 = ______",
          "answer": "7266"
        }
      ]
    },
    {
      "id": "divide-two",
      "name": "除数是两位数的除法",
      "grade": 4,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "510 ÷ 85 = ______",
          "answer": "6"
        },
        {
          "question": "115 ÷ 23 = ______",
          "answer": "5"
        },
        {
          "question": "304 ÷ 76 = ______",
          "answer": "4"
        }
      ]
    },
    {
      "id": "dec-addsub",
      "name": "小数加减法",
      "grade": 4,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "5.62 − 1.91 = ______",
          "answer": "3.71"
        },
        {
          "question": "3.19 + 2.18 = ______",
          "answer": "5.37"
        },
        {
          "question": "2.13 + 4.7 = ______",
          "answer": "6.83"
        }
      ]
    },
    {
      "id": "dec-muldiv-oral",
      "name": "小数乘除法口算",
      "grade": 5,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "0.1 ÷ 0.5 = ______",
          "answer": "0.2"
        },
        {
          "question": "0.12 ÷ 0.4 = ______",
          "answer": "0.3"
        },
        {
          "question": "0.48 ÷ 0.6 = ______",
          "answer": "0.8"
        }
      ]
    },
    {
      "id": "dec-mul",
      "name": "小数乘法",
      "grade": 5,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "4.4 × 3.2 = ______",
          "answer": "14.08"
        },
        {
          "question": "3.6 × 3 = ______",
          "answer": "10.8"
        },
        {
          "question": "3.8 × 2.6 = ______",
          "answer": "9.88"
        }
      ]
    },
    {
      "id": "dec-div",
      "name": "小数除法",
      "grade": 5,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "285.6 ÷ 3.4 = ______",
          "answer": "84"
        },
        {
          "question": "348.3 ÷ 4.3 = ______",
          "answer": "81"
        },
        {
          "question": "171 ÷ 3.8 = ______",
          "answer": "45"
        }
      ]
    },
    {
      "id": "percent-oral",
      "name": "百分数与小数速算",
      "grade": 6,
      "mode": "oral",
      "maxCount": 40,
      "samples": [
        {
          "question": "10.5 ÷ 0.5 = ______",
          "answer": "21"
        },
        {
          "question": "0.75 × 250 = ______",
          "answer": "187.5"
        },
        {
          "question": "14.6 ÷ 0.2 = ______",
          "answer": "73"
        }
      ]
    },
    {
      "id": "pi-multiply",
      "name": "圆周率倍数竖式计算",
      "grade": 6,
      "mode": "vertical",
      "maxCount": 40,
      "samples": [
        {
          "question": "3.14 × 16 = ______",
          "answer": "50.24"
        },
        {
          "question": "3.14 × 15 = ______",
          "answer": "47.1"
        },
        {
          "question": "3.14 × 17 = ______",
          "answer": "53.38"
        }
      ]
    }
  ],
  "units": [
    {
      "id": "G1上-U1",
      "grade": 1,
      "semester": "上",
      "unitNo": 1,
      "name": "准备课",
      "plugin": "geo-count",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-objects",
            "compare-groups",
            "match-quantity"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "数一数，图中有几个圆？",
              "answer": "4",
              "skill": "count-objects",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "上排和下排，哪一排的圆更多？",
              "answer": "上排",
              "skill": "compare-groups",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在下方横线上画三角形，画得和圆一样多。",
              "answer": "画 4 个三角形",
              "skill": "match-quantity",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "数一数，图中有几个圆？",
              "answer": "5",
              "skill": "count-objects",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-objects",
            "compare-groups",
            "match-quantity"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "数一数，图中有几个圆？",
              "answer": "4",
              "skill": "count-objects",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "上排和下排，哪一排的圆更多？",
              "answer": "下排",
              "skill": "compare-groups",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在下方横线上画三角形，画得和圆一样多。",
              "answer": "画 1 个三角形",
              "skill": "match-quantity",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "数一数，图中有几个圆？",
              "answer": "3",
              "skill": "count-objects",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-objects",
            "compare-groups",
            "match-quantity"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "数一数，图中有几个圆？",
              "answer": "4",
              "skill": "count-objects",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "上排和下排，哪一排的圆更多？",
              "answer": "下排",
              "skill": "compare-groups",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在下方横线上画三角形，画得和圆一样多。",
              "answer": "画 3 个三角形",
              "skill": "match-quantity",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "数一数，图中有几个圆？",
              "answer": "5",
              "skill": "count-objects",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U2",
      "grade": 1,
      "semester": "上",
      "unitNo": 2,
      "name": "位置",
      "plugin": "geo-position",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "vertical-position",
            "horizontal-position",
            "place-relative"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "圆在正方形的上面还是下面？",
              "answer": "下面",
              "skill": "vertical-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "圆在正方形的左边还是右边？",
              "answer": "左边",
              "skill": "horizontal-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在圆的右边画一个三角形。",
              "answer": "示例见参考图",
              "skill": "place-relative",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "圆在正方形的上面还是下面？",
              "answer": "上面",
              "skill": "vertical-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "vertical-position",
            "horizontal-position",
            "place-relative"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "圆在正方形的上面还是下面？",
              "answer": "上面",
              "skill": "vertical-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "圆在正方形的左边还是右边？",
              "answer": "右边",
              "skill": "horizontal-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在圆的右边画一个三角形。",
              "answer": "示例见参考图",
              "skill": "place-relative",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "圆在正方形的上面还是下面？",
              "answer": "下面",
              "skill": "vertical-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "vertical-position",
            "horizontal-position",
            "place-relative"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "圆在正方形的上面还是下面？",
              "answer": "上面",
              "skill": "vertical-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "圆在正方形的左边还是右边？",
              "answer": "右边",
              "skill": "horizontal-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在圆的右边画一个三角形。",
              "answer": "示例见参考图",
              "skill": "place-relative",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "圆在正方形的上面还是下面？",
              "answer": "下面",
              "skill": "vertical-position",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U3",
      "grade": 1,
      "semester": "上",
      "unitNo": 3,
      "name": "1~5的认识和加减法",
      "plugin": "sum-5",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "apply",
            "calculate",
            "compare-expression",
            "missing-operand"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "盒里原有 1 枚棋子，又放入 4 枚，现在有多少枚？",
              "answer": "5",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4 + 1 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2 + 2（　）5。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1 − ______ = 0",
              "answer": "1",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "missing-operand",
            "compare-expression",
            "apply",
            "calculate"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "4 − ______ = 0",
              "answer": "4",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：4 + 1（　）5。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 2 枚棋子，拿走 2 枚，还剩多少枚？",
              "answer": "0",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3 + 2 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "compare-expression",
            "apply",
            "missing-operand"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1 + 2 = ______",
              "answer": "3",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：1 + 3（　）3。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 3 枚棋子，拿走 2 枚，还剩多少枚？",
              "answer": "1",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2 + ______ = 3",
              "answer": "1",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U4",
      "grade": 1,
      "semester": "上",
      "unitNo": 4,
      "name": "认识图形（一）",
      "plugin": "geo-shapes-solid",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "name-solid",
            "identify-flat-and-curved",
            "identify-cube"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是哪一种立体图形？",
              "answer": "球",
              "skill": "name-solid",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个图形既有平面又有曲面？写 A 或 B。",
              "answer": "B",
              "skill": "identify-flat-and-curved",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个是正方体？写 A 或 B。",
              "answer": "B",
              "skill": "identify-cube",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中是哪一种立体图形？",
              "answer": "圆柱",
              "skill": "name-solid",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "name-solid",
            "identify-flat-and-curved",
            "identify-cube"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是哪一种立体图形？",
              "answer": "球",
              "skill": "name-solid",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个图形既有平面又有曲面？写 A 或 B。",
              "answer": "B",
              "skill": "identify-flat-and-curved",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个是正方体？写 A 或 B。",
              "answer": "A",
              "skill": "identify-cube",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中是哪一种立体图形？",
              "answer": "圆柱",
              "skill": "name-solid",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "name-solid",
            "identify-flat-and-curved",
            "identify-cube"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是哪一种立体图形？",
              "answer": "球",
              "skill": "name-solid",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个图形既有平面又有曲面？写 A 或 B。",
              "answer": "B",
              "skill": "identify-flat-and-curved",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个是正方体？写 A 或 B。",
              "answer": "A",
              "skill": "identify-cube",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中是哪一种立体图形？",
              "answer": "圆柱",
              "skill": "name-solid",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U5",
      "grade": 1,
      "semester": "上",
      "unitNo": 5,
      "name": "6~10的认识和加减法",
      "plugin": "sum-10",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "9 + 1 = ______",
              "answer": "10",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8 + ______ = 9",
              "answer": "1",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：1 − 1（　）0。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 6 枚棋子，拿走 3 枚，还剩多少枚？",
              "answer": "3",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "6 + 1 = ______",
              "answer": "7",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5 − ______ = 1",
              "answer": "4",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：5 − 1（　）4。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 7 枚棋子，又放入 1 枚，现在有多少枚？",
              "answer": "8",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "3 + 7 = ______",
              "answer": "10",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2 − ______ = 0",
              "answer": "2",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8 − 5（　）4。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 9 枚棋子，拿走 9 枚，还剩多少枚？",
              "answer": "0",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U6",
      "grade": 1,
      "semester": "上",
      "unitNo": 6,
      "name": "11~20各数的认识",
      "plugin": "number-20",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 6,
        "medium": 6,
        "hard": 6
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "compare-numbers",
            "write-number",
            "place-value",
            "compose-number",
            "read-number",
            "count-in-order"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：20（　）13。",
              "answer": ">",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "十二写作多少？",
              "answer": "12",
              "skill": "write-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "17 中，十位上的数字表示多少？",
              "answer": "10",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 1个十、2个一 组成的数写作多少？",
              "answer": "12",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compare-numbers",
            "read-number",
            "compose-number",
            "write-number",
            "count-in-order"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "17 中，个位上的数字表示多少？",
              "answer": "7",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：15（　）17。",
              "answer": "<",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "12 读作什么？",
              "answer": "十二",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 1个十、8个一 组成的数写作多少？",
              "answer": "18",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "read-number",
            "write-number",
            "count-in-order"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "17 中，个位上的数字表示多少？",
              "answer": "7",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 1个十、5个一 组成的数写作多少？",
              "answer": "15",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：11（　）11。",
              "answer": "=",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "11 读作什么？",
              "answer": "十一",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U7",
      "grade": 1,
      "semester": "上",
      "unitNo": 7,
      "name": "认识钟表",
      "plugin": "clock",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 5
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "clock-read-whole",
            "clock-parts-whole",
            "clock-choice-whole"
          ],
          "formats": [
            "fill",
            "choice"
          ],
          "samples": [
            {
              "question": "认一认钟面上的时刻，填在横线上。",
              "answer": "1时",
              "skill": "clock-read-whole",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "观察钟面（12时），钟面上又粗又短的针指的是数字（ ）。",
              "answer": "12",
              "skill": "clock-parts-whole",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个钟面显示 1时？",
              "answer": "A",
              "skill": "clock-choice-whole",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "3时",
              "skill": "clock-read-whole",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "clock-draw-whole",
            "clock-time-shift",
            "clock-choice-whole"
          ],
          "formats": [
            "draw",
            "fill",
            "choice"
          ],
          "samples": [
            {
              "question": "请在钟面上补全 1时 的指针（短针指几，长针指12）。",
              "answer": "1时",
              "skill": "clock-draw-whole",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "看钟面（7时），过 1 小时是（ ）时。",
              "answer": "8时",
              "skill": "clock-time-shift",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪一个钟面显示 11时？",
              "answer": "A",
              "skill": "clock-choice-whole",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "请在钟面上补全 6时 的指针（短针指几，长针指12）。",
              "answer": "6时",
              "skill": "clock-draw-whole",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "clock-approximate-time",
            "clock-daily-routine",
            "clock-draw-whole",
            "clock-choice-whole",
            "clock-time-shift"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面上的指针位置，此时大约是刚过（ ）时整。",
              "answer": "2",
              "skill": "clock-approximate-time",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面（4时整），亮亮在这一时刻正在（ ）。（填对应活动名称）",
              "answer": "下午在操场做运动",
              "skill": "clock-daily-routine",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 9时 的时针和分针。",
              "answer": "9时",
              "skill": "clock-draw-whole",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 10时？",
              "answer": "B",
              "skill": "clock-choice-whole",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1上-U8",
      "grade": 1,
      "semester": "上",
      "unitNo": 8,
      "name": "20以内的进位加法",
      "plugin": "carry-20",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "7 + 7 = ______",
              "answer": "14",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2 + ______ = 10",
              "answer": "8",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8 + 6（　）13。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 7 枚棋子，又放入 6 枚，现在有多少枚？",
              "answer": "13",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "7 + 4 = ______",
              "answer": "11",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8 + ______ = 14",
              "answer": "6",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：5 + 8（　）14。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 7 枚棋子，又放入 9 枚，现在有多少枚？",
              "answer": "16",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "7 + 8 = ______",
              "answer": "15",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 + ______ = 15",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 8 枚棋子，又放入 4 枚，现在有多少枚？",
              "answer": "12",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2 + 8（　）11。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1下-U1",
      "grade": 1,
      "semester": "下",
      "unitNo": 1,
      "name": "20以内的退位减法",
      "plugin": "borrow-20",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "missing-operand",
            "calculate",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "11 − ______ = 6",
              "answer": "5",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "18 − 9 = ______",
              "answer": "9",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 18 枚棋子，拿走 9 枚，还剩多少枚？",
              "answer": "9",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：18 − 9（　）8。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "18 − 9 = ______",
              "answer": "9",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "17 − ______ = 8",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：16 − 9（　）6。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 18 枚棋子，拿走 9 枚，还剩多少枚？",
              "answer": "9",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "18 − 9 = ______",
              "answer": "9",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "16 − ______ = 7",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：13 − 4（　）9。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 18 枚棋子，拿走 9 枚，还剩多少枚？",
              "answer": "9",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1下-U2",
      "grade": 1,
      "semester": "下",
      "unitNo": 2,
      "name": "100以内数的认识",
      "plugin": "number-100",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 6,
        "medium": 6,
        "hard": 6
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "read-number",
            "write-number",
            "count-in-order"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "94 中，个位上的数字表示多少？",
              "answer": "4",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 3个十、7个一 组成的数写作多少？",
              "answer": "37",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：91（　）33。",
              "answer": ">",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "84 读作什么？",
              "answer": "八十四",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "read-number",
            "write-number",
            "count-in-order"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "94 中，个位上的数字表示多少？",
              "answer": "4",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 9个十、7个一 组成的数写作多少？",
              "answer": "97",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：51（　）69。",
              "answer": "<",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "70 读作什么？",
              "answer": "七十",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "read-number",
            "write-number",
            "count-in-order"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "94 中，十位上的数字表示多少？",
              "answer": "90",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 6个十、7个一 组成的数写作多少？",
              "answer": "67",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：12（　）15。",
              "answer": "<",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "55 读作什么？",
              "answer": "五十五",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1下-U3",
      "grade": 1,
      "semester": "下",
      "unitNo": 3,
      "name": "100以内的加法和减法（一）",
      "plugin": "sum-100-oral",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：58 + 6 = ______",
              "answer": "64",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "90 − ______ = 87",
              "answer": "3",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：85 − 6（　）78。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 38 枚棋子，又放入 8 枚，现在有多少枚？",
              "answer": "46",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：29 + 3 = ______",
              "answer": "32",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "11 + ______ = 61",
              "answer": "50",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：52 − 5（　）48。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 18 枚棋子，又放入 80 枚，现在有多少枚？",
              "answer": "98",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：80 + 20 = ______",
              "answer": "100",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "12 + ______ = 21",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：35 − 2（　）34。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 39 枚棋子，又放入 9 枚，现在有多少枚？",
              "answer": "48",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1下-U4",
      "grade": 1,
      "semester": "下",
      "unitNo": 4,
      "name": "认识图形（二）",
      "plugin": "geo-shapes-plane",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "name-shape",
            "count-sides",
            "find-shape"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是哪一种平面图形？",
              "answer": "正方形",
              "skill": "name-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "数一数，这个图形有几条边？",
              "answer": "4",
              "skill": "count-sides",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪个图形是正方形？写 A 或 B。",
              "answer": "A",
              "skill": "find-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中是哪一种平面图形？",
              "answer": "正方形",
              "skill": "name-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "name-shape",
            "count-sides",
            "find-shape"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是哪一种平面图形？",
              "answer": "正方形",
              "skill": "name-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "数一数，这个图形有几条边？",
              "answer": "4",
              "skill": "count-sides",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪个图形是正方形？写 A 或 B。",
              "answer": "A",
              "skill": "find-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中是哪一种平面图形？",
              "answer": "三角形",
              "skill": "name-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "name-shape",
            "count-sides",
            "find-shape"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是哪一种平面图形？",
              "answer": "正方形",
              "skill": "name-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "数一数，这个图形有几条边？",
              "answer": "3",
              "skill": "count-sides",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪个图形是正方形？写 A 或 B。",
              "answer": "B",
              "skill": "find-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中是哪一种平面图形？",
              "answer": "正方形",
              "skill": "name-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1下-U5",
      "grade": 1,
      "semester": "下",
      "unitNo": 5,
      "name": "100以内的加法和减法（二）",
      "plugin": "sum-100",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "67 + 1 = ______",
              "answer": "68",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "27 + ______ = 35",
              "answer": "8",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：19 − 4（　）15。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 31 枚棋子，又放入 15 枚，现在有多少枚？",
              "answer": "46",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "31 + 56 = ______",
              "answer": "87",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "92 − ______ = 61",
              "answer": "31",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：60 − 46（　）14。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 48 枚棋子，拿走 1 枚，还剩多少枚？",
              "answer": "47",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "94 + 4 = ______",
              "answer": "98",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "59 − ______ = 25",
              "answer": "34",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2 − 1（　）1。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 66 枚棋子，又放入 28 枚，现在有多少枚？",
              "answer": "94",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G1下-U6",
      "grade": 1,
      "semester": "下",
      "unitNo": 6,
      "name": "找规律",
      "plugin": "pattern",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "arith-down",
            "repeat-2",
            "arith-up"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "找规律填数：29，24，19，14，（　）",
              "answer": "9",
              "skill": "arith-down",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "按规律接着画：☆◆☆◆☆◆（　）（　）",
              "answer": "☆◆",
              "skill": "repeat-2",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：8，12，16，20，（　）",
              "answer": "24",
              "skill": "arith-up",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：38，33，28，23，（　）",
              "answer": "18",
              "skill": "arith-down",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "double",
            "repeat-3",
            "arith-two"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "找规律填数：1，2，4，8，（　）",
              "answer": "16",
              "skill": "double",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "图形按“◇△◆”的规律重复排列，第 15 个图形是（　）。",
              "answer": "◆",
              "skill": "repeat-3",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：9，15，21，27，（　），（　）",
              "answer": "33，39",
              "skill": "arith-two",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：4，8，16，32，（　）",
              "answer": "64",
              "skill": "double",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "missing-middle",
            "bead-cycle",
            "growing-diff"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "找规律填空缺的数：2，8，（　），20，26",
              "answer": "14",
              "skill": "missing-middle",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "珠子按“3颗黑、1颗绿”的规律依次穿成一串，第 37 颗珠子是什么颜色？",
              "answer": "黑",
              "skill": "bead-cycle",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：13，16，22，31，43，（　）",
              "answer": "58",
              "skill": "growing-diff",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填空缺的数：11，16，（　），26，31",
              "answer": "21",
              "skill": "missing-middle",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U1",
      "grade": 2,
      "semester": "上",
      "unitNo": 1,
      "name": "长度单位",
      "plugin": "unit-len",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "len-compare",
            "len-big-to-small",
            "len-small-to-big"
          ],
          "formats": [
            "compare",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：2米（　）197厘米。",
              "answer": ">",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "9米 = （　）厘米",
              "answer": "900厘米",
              "skill": "len-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "800厘米 = （　）米",
              "answer": "8米",
              "skill": "len-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4米 = （　）厘米",
              "answer": "400厘米",
              "skill": "len-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "len-compound",
            "len-compare",
            "len-big-to-small"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "5米25厘米 = （　）厘米",
              "answer": "525厘米",
              "skill": "len-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8米（　）797厘米。",
              "answer": ">",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5米 = （　）厘米",
              "answer": "500厘米",
              "skill": "len-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4米57厘米 = （　）厘米",
              "answer": "457厘米",
              "skill": "len-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "len-compare",
            "len-cut-story",
            "len-compound"
          ],
          "formats": [
            "compare",
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：3米（　）295厘米。",
              "answer": ">",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根木料长7米，锯下26厘米后，还剩多少厘米？",
              "answer": "674厘米",
              "skill": "len-cut-story",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2米22厘米 = （　）厘米",
              "answer": "222厘米",
              "skill": "len-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：3米（　）298厘米。",
              "answer": ">",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U2",
      "grade": 2,
      "semester": "上",
      "unitNo": 2,
      "name": "100以内的加法和减法（二）",
      "plugin": "sum-100-column",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "列竖式计算：42 − 32 = ______",
              "answer": "10",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "written",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "49 − ______ = 26",
              "answer": "23",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：21 + 32（　）54。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 73 枚棋子，拿走 60 枚，还剩多少枚？",
              "answer": "13",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "列竖式计算：13 − 11 = ______",
              "answer": "2",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "written",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "22 + ______ = 71",
              "answer": "49",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：54 + 42（　）95。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 87 枚棋子，又放入 12 枚，现在有多少枚？",
              "answer": "99",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "列竖式计算：64 − 24 = ______",
              "answer": "40",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "written",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "76 + ______ = 98",
              "answer": "22",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：88 + 11（　）100。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 20 枚棋子，拿走 14 枚，还剩多少枚？",
              "answer": "6",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U3",
      "grade": 2,
      "semester": "上",
      "unitNo": 3,
      "name": "角的初步认识",
      "plugin": "geo-angle-intro",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-angles",
            "right-angle",
            "locate-vertex"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "数一数，图中的封闭图形有几个角？",
              "answer": "4",
              "skill": "count-angles",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中的角是直角吗？可以用三角尺比一比。",
              "answer": "是",
              "skill": "right-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在图中用小圆点标出角的顶点。",
              "answer": "两条边的公共端点",
              "skill": "locate-vertex",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "数一数，图中的封闭图形有几个角？",
              "answer": "3",
              "skill": "count-angles",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-angles",
            "right-angle",
            "locate-vertex"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "数一数，图中的封闭图形有几个角？",
              "answer": "4",
              "skill": "count-angles",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中的角是直角吗？可以用三角尺比一比。",
              "answer": "是",
              "skill": "right-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在图中用小圆点标出角的顶点。",
              "answer": "两条边的公共端点",
              "skill": "locate-vertex",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "数一数，图中的封闭图形有几个角？",
              "answer": "4",
              "skill": "count-angles",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-right-angles",
            "right-angle",
            "locate-vertex"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "数一数，图中的图形一共有几个直角？",
              "answer": "4",
              "skill": "count-right-angles",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中的角是直角吗？可以用三角尺比一比。",
              "answer": "不是",
              "skill": "right-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在图中用小圆点标出角的顶点。",
              "answer": "两条边的公共端点",
              "skill": "locate-vertex",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "数一数，图中的图形一共有几个直角？",
              "answer": "4",
              "skill": "count-right-angles",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U4",
      "grade": 2,
      "semester": "上",
      "unitNo": 4,
      "name": "表内乘法（一）",
      "plugin": "table-times-1",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "missing-operand",
            "calculate",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "2 × ______ = 4",
              "answer": "2",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4 × 4 = ______",
              "answer": "16",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 6 本书，5 箱一共有多少本？",
              "answer": "30",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2 × 2（　）5。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "4 × 2 = ______",
              "answer": "8",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 × ______ = 18",
              "answer": "3",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：6 × 3（　）17。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 6 本书，2 箱一共有多少本？",
              "answer": "12",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "missing-operand",
            "calculate",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5 × ______ = 25",
              "answer": "5",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4 × 5 = ______",
              "answer": "20",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：4 × 4（　）16。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 6 本书，4 箱一共有多少本？",
              "answer": "24",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U5",
      "grade": 2,
      "semester": "上",
      "unitNo": 5,
      "name": "观察物体（一）",
      "plugin": "geo-view-1",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-blocks",
            "read-front",
            "draw-top"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "2",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从前面看，最下面一行能看到几个小正方形？",
              "answer": "2",
              "skill": "read-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从上面看哪些格子有小正方体？在右侧空格中涂出来。右侧图上方对应物体的后方。",
              "answer": "见参考图",
              "skill": "draw-top",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "5",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-blocks",
            "read-front",
            "draw-top"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "4",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从前面看，最下面一行能看到几个小正方形？",
              "answer": "3",
              "skill": "read-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从上面看哪些格子有小正方体？在右侧空格中涂出来。右侧图上方对应物体的后方。",
              "answer": "见参考图",
              "skill": "draw-top",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "2",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-blocks",
            "read-front",
            "draw-top"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "5",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从前面看，最下面一行能看到几个小正方形？",
              "answer": "3",
              "skill": "read-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从上面看哪些格子有小正方体？在右侧空格中涂出来。右侧图上方对应物体的后方。",
              "answer": "见参考图",
              "skill": "draw-top",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "4",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U6",
      "grade": 2,
      "semester": "上",
      "unitNo": 6,
      "name": "表内乘法（二）",
      "plugin": "table-times-2",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5 × 8 = ______",
              "answer": "40",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "7 × ______ = 63",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 9 本书，7 箱一共有多少本？",
              "answer": "63",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8 × 9（　）71。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5 × 6 = ______",
              "answer": "30",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5 × ______ = 30",
              "answer": "6",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：5 × 6（　）29。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 2 本书，9 箱一共有多少本？",
              "answer": "18",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5 × 9 = ______",
              "answer": "45",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3 × ______ = 21",
              "answer": "7",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2 × 7（　）14。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 2 本书，6 箱一共有多少本？",
              "answer": "12",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U7",
      "grade": 2,
      "semester": "上",
      "unitNo": 7,
      "name": "认识时间",
      "plugin": "clock",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "time-read-5min",
            "time-draw-5min",
            "time-choice-5min"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "认一认钟面上的时刻。",
              "answer": "10时10分",
              "skill": "time-read-5min",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 8时35分 的时针和分针。",
              "answer": "8时35分",
              "skill": "time-draw-5min",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 8时25分？",
              "answer": "A",
              "skill": "time-choice-5min",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "9时55分",
              "skill": "time-read-5min",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "time-read-1min",
            "time-draw-accurate",
            "time-choice-5min"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "认一认钟面上的精准时刻。",
              "answer": "10时25分",
              "skill": "time-read-1min",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 3时45分 的时针和分针。",
              "answer": "3时45分",
              "skill": "time-draw-accurate",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 6时25分？",
              "answer": "A",
              "skill": "time-choice-5min",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "12时17分",
              "skill": "time-read-1min",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "time-elapsed-fill",
            "time-draw-future",
            "time-choice-5min"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面（10时5分），亮亮开始踢球，踢了 25 分钟，结束时间是（ ）时（ ）分。",
              "answer": "10时30分",
              "skill": "time-elapsed-fill",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "钟面上现在是 11时10分，请画出过20分钟后（11时30分）的时针和分针。",
              "answer": "11时30分",
              "skill": "time-draw-future",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 3时25分？",
              "answer": "A",
              "skill": "time-choice-5min",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面（4时20分），亮亮开始踢球，踢了 40 分钟，结束时间是（ ）时（ ）分。",
              "answer": "4时60分",
              "skill": "time-elapsed-fill",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2上-U8",
      "grade": 2,
      "semester": "上",
      "unitNo": 8,
      "name": "数学广角——搭配（一）",
      "plugin": "combine",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "digits-two",
            "clothes-basic",
            "handshake-3"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、2这两张数字卡片，能组成多少个不同的两位数？",
              "answer": "2个",
              "skill": "digits-two",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有毛衣、外套共2件上衣，牛仔裤、运动裤共2件下装，各选一件搭配，一共有多少种不同的穿法？",
              "answer": "4种",
              "skill": "clothes-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小红、小丽、小芳3位同学互相握手，每两人握一次手，一共要握多少次手？",
              "answer": "3次",
              "skill": "handshake-3",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用7、4这两张数字卡片，能组成多少个不同的两位数？",
              "answer": "2个",
              "skill": "digits-two",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "digits",
            "breakfast-combo",
            "clothes",
            "handshake"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、2、9这3张数字卡片，每次取2张组成没有重复数字的两位数，一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "digits",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "早餐有红茶、绿茶共2种饮品，煎饼、蛋糕、三明治共3种早点，各选一种搭配，一共有多少种不同的早餐搭配？",
              "answer": "6种",
              "skill": "breakfast-combo",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有4件不同的上衣和5条不同的裙子，每次各选一件搭配，一共有多少种不同的穿法？",
              "answer": "20种",
              "skill": "clothes",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4个小朋友聚会，每两人通一次电话，一共要通多少次电话？",
              "answer": "6次",
              "skill": "handshake",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "digits-sum-choice",
            "round-robin",
            "clothes-3x3",
            "photo-order-3"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用7、1、2这3个数字中的任意2个求和，得数一共有多少种可能？",
              "answer": "3种",
              "skill": "digits-sum-choice",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "学校举办乒乓球比赛，有8名选手（或队伍）参加单循环赛（每两名选手之间都要赛一场），一共要进行多少场比赛？",
              "answer": "28场",
              "skill": "round-robin",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有粉、绿、紫3种颜色的上衣，黑、白、灰3种颜色的裤子，各选一件搭配，一共有多少种不同的穿法？",
              "answer": "9种",
              "skill": "clothes-3x3",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小刚、小红、小丽3人排成一排合影，一共有多少种不同的排法？",
              "answer": "6种",
              "skill": "photo-order-3",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U1",
      "grade": 2,
      "semester": "下",
      "unitNo": 1,
      "name": "数据收集整理",
      "plugin": "data-table",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 7,
        "medium": 7,
        "hard": 7
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "8",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "43",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "26",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "一组最多，二组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "16",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "102",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "62",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "四组最多，一组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "135",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "100",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "95",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "四组最多，二组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U2",
      "grade": 2,
      "semester": "下",
      "unitNo": 2,
      "name": "表内除法（一）",
      "plugin": "divide-table-1",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "10 ÷ 5 = ______",
              "answer": "2",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "12 ÷ ______ = 4",
              "answer": "3",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：12 ÷ 6（　）1。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "18 本书，每 6 本装一盒，可以装几盒？",
              "answer": "3",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "missing-operand",
            "calculate",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "10 ÷ ______ = 5",
              "answer": "2",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "30 ÷ 6 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "30 本书，每 6 本装一盒，可以装几盒？",
              "answer": "5",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：15 ÷ 5（　）4。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "18 ÷ 6 = ______",
              "answer": "3",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "36 ÷ ______ = 6",
              "answer": "6",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：12 ÷ 3（　）3。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "12 本书，每 6 本装一盒，可以装几盒？",
              "answer": "2",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U3",
      "grade": 2,
      "semester": "下",
      "unitNo": 3,
      "name": "图形的运动（一）",
      "plugin": "grid-motion-1",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "grid",
      "moduleLabel": "方格与坐标作图 (gridProblems)",
      "moduleFile": "prototype/gridProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-slide",
            "draw-slide",
            "distinguish-motion"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形向右平移 1 格后的图形。",
              "answer": "见参考图",
              "skill": "draw-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "实线三角形变成虚线三角形时，发生的是平移、旋转还是轴对称翻折？",
              "answer": "轴对称翻折",
              "skill": "distinguish-motion",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-slide",
            "draw-slide",
            "distinguish-motion"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形向右平移 3 格后的图形。",
              "answer": "见参考图",
              "skill": "draw-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "实线三角形变成虚线三角形时，发生的是平移、旋转还是轴对称翻折？",
              "answer": "轴对称翻折",
              "skill": "distinguish-motion",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-slide",
            "draw-slide",
            "distinguish-motion"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "1 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形向右平移 3 格后的图形。",
              "answer": "见参考图",
              "skill": "draw-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "实线三角形变成虚线三角形时，发生的是平移、旋转还是轴对称翻折？",
              "answer": "轴对称翻折",
              "skill": "distinguish-motion",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U4",
      "grade": 2,
      "semester": "下",
      "unitNo": 4,
      "name": "表内除法（二）",
      "plugin": "divide-table-2",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "27 ÷ 9 = ______",
              "answer": "3",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "27 ÷ ______ = 3",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：64 ÷ 8（　）9。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "81 本书，每 9 本装一盒，可以装几盒？",
              "answer": "9",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "72 ÷ 9 = ______",
              "answer": "8",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "40 ÷ ______ = 5",
              "answer": "8",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "36 本书，每 9 本装一盒，可以装几盒？",
              "answer": "4",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：14 ÷ 7（　）2。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "45 ÷ 9 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "56 ÷ ______ = 7",
              "answer": "8",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：36 ÷ 9（　）3。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "63 本书，每 9 本装一盒，可以装几盒？",
              "answer": "7",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U5",
      "grade": 2,
      "semester": "下",
      "unitNo": 5,
      "name": "混合运算",
      "plugin": "mixed-order",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "order-same-level",
            "order-mul-add",
            "order-div-add",
            "order-sub-brackets"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "同级混合运算：67 − 6 + 7 = ______",
              "answer": "68",
              "skill": "order-same-level",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "乘加计算：6 × 9 + 3 = ______",
              "answer": "57",
              "skill": "order-mul-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "除加计算：28 ÷ 4 + 47 = ______",
              "answer": "54",
              "skill": "order-div-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "带括号计算：36 −（3 + 6）= ______",
              "answer": "27",
              "skill": "order-sub-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "operation-order",
            "mixed-with-brackets",
            "mixed-no-brackets",
            "mixed-story"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "计算 84 + 4 × 9 时，应先算哪一步？",
              "answer": "4 × 9",
              "skill": "operation-order",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "（3 + 6）× 5 = ______",
              "answer": "45",
              "skill": "mixed-with-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "53 − 27 ÷ 9 = ______",
              "answer": "50",
              "skill": "mixed-no-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每袋有 8 个球，买 7 袋，又单买 2 个。一共有多少个球？",
              "answer": "58",
              "skill": "mixed-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "mixed-reverse-blank",
            "mixed-combine-expr",
            "mixed-two-step-div",
            "mixed-compare-brackets"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "在括号里填数：（______ − 8）× 9 = 63。",
              "answer": "15",
              "skill": "mixed-reverse-blank",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "先算 6 + 4 = 10，再算 10 × 7，合并成综合算式算出的得数是多少？",
              "answer": "70",
              "skill": "mixed-combine-expr",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "班级图书角有 41 本书，先借出 5 本，剩下的平均分给 6 个小组，每组分到几本？",
              "answer": "6 本",
              "skill": "mixed-two-step-div",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "计算（3 + 9）× 9 比 3 + 9 × 9 的得数大多少？",
              "answer": "24",
              "skill": "mixed-compare-brackets",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U6",
      "grade": 2,
      "semester": "下",
      "unitNo": 6,
      "name": "有余数的除法",
      "plugin": "divide-remainder",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "remainder-computation",
            "remainder-grouping",
            "remainder-bounds",
            "remainder-check"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "30 ÷ 9 = ______（写出商和余数）",
              "answer": "3 余 3",
              "skill": "remainder-computation",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "29 本书每 8 本装一盒，能装满几盒，还剩几本？",
              "answer": "3 盒，剩 5 本",
              "skill": "remainder-grouping",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "除数是 2，余数填 1 还是 3 才可能正确？",
              "answer": "1",
              "skill": "remainder-bounds",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "被除数是 11，除数是 3，商是 3。余数是多少？",
              "answer": "2",
              "skill": "remainder-check",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "remainder-grouping",
            "remainder-check",
            "remainder-largest",
            "remainder-missing"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "83 本书每 9 本装一盒，能装满几盒，还剩几本？",
              "answer": "9 盒，剩 2 本",
              "skill": "remainder-grouping",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "被除数是 19，除数是 2，商是 9。余数是多少？",
              "answer": "1",
              "skill": "remainder-check",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一道有余数的除法，除数是 2，商是 9。余数最大是多少？",
              "answer": "1",
              "skill": "remainder-largest",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "38 = 7 × 5 + ______。",
              "answer": "3",
              "skill": "remainder-missing",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "remainder-dividend",
            "remainder-divisor",
            "remainder-extra-box",
            "remainder-fill-group"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "一道除法中，除数是 9，商是 6，余数是 8。被除数是多少？",
              "answer": "62",
              "skill": "remainder-dividend",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一道除法中，被除数是 25，商是 6，余数是 1。除数是多少？",
              "answer": "4",
              "skill": "remainder-divisor",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "9 本书每 2 本装一盒，每本书都要装进盒子，至少需要几个盒子？",
              "answer": "5 个",
              "skill": "remainder-extra-box",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "13 本书每 2 本装一盒，至少再添几本就能全部装满盒子？",
              "answer": "1 本",
              "skill": "remainder-fill-group",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U7",
      "grade": 2,
      "semester": "下",
      "unitNo": 7,
      "name": "万以内数的认识",
      "plugin": "number-10000",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 5,
        "medium": 6,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "read-number",
            "write-number"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "905 中，百位上的数字表示多少？",
              "answer": "900",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 7个百、1个十、8个一 组成的数写作多少？",
              "answer": "718",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：615（　）396。",
              "answer": ">",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "186 读作什么？",
              "answer": "一百八十六",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "read-number",
            "write-number",
            "estimate"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "9077 中，十位上的数字表示多少？",
              "answer": "70",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 9个千、5个百、1个十、9个一 组成的数写作多少？",
              "answer": "9519",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：6313（　）7683。",
              "answer": "<",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5483 读作什么？",
              "answer": "五千四百八十三",
              "skill": "read-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "estimate",
            "max-with-zeros"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "9101 中，个位上的数字表示多少？",
              "answer": "1",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 5个千、1个十、4个一 组成的数写作多少？",
              "answer": "5014",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 3586 四舍五入到百位，近似数是多少？",
              "answer": "3600",
              "skill": "estimate",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用数字 5、5 和两个 0 组成一个最大的四位数（每个数字只用一次，且大于 556），这个四位数是多少？",
              "answer": "5500",
              "skill": "max-with-zeros",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U8",
      "grade": 2,
      "semester": "下",
      "unitNo": 8,
      "name": "克和千克",
      "plugin": "unit-weight",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "weight-compare",
            "g-to-kg",
            "kg-to-g"
          ],
          "formats": [
            "compare",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：7千克（　）7800克。",
              "answer": "<",
              "skill": "weight-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8000克 = （　）千克",
              "answer": "8千克",
              "skill": "g-to-kg",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3千克 = （　）克",
              "answer": "3000克",
              "skill": "kg-to-g",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8千克（　）7600克。",
              "answer": ">",
              "skill": "weight-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "weight-sub-story",
            "kg-g-compound",
            "weight-compare"
          ],
          "formats": [
            "application",
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "一袋米重7千克，取出600克后，还剩多少克？",
              "answer": "6400克",
              "skill": "weight-sub-story",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5千克200克 = （　）克",
              "answer": "5200克",
              "skill": "kg-g-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8千克（　）8200克。",
              "answer": "<",
              "skill": "weight-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一袋米重7千克，取出800克后，还剩多少克？",
              "answer": "6200克",
              "skill": "weight-sub-story",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "weight-compare",
            "weight-multi-bags",
            "kg-g-compound"
          ],
          "formats": [
            "compare",
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：12千克（　）11800克。",
              "answer": ">",
              "skill": "weight-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每袋杂粮重300克，买5袋一共重多少克？比6千克少多少克？",
              "answer": "1500克，少4500克",
              "skill": "weight-multi-bags",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2千克900克 = （　）克",
              "answer": "2900克",
              "skill": "kg-g-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：10千克（　）10900克。",
              "answer": "<",
              "skill": "weight-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G2下-U9",
      "grade": 2,
      "semester": "下",
      "unitNo": 9,
      "name": "数学广角——推理",
      "plugin": "reasoning",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "reason-easy-order",
            "reason-easy-queue",
            "reason-easy-fruit"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小红、小明、小丽比身高，小明比小红高，小丽比小明高。谁最矮？",
              "answer": "小红",
              "skill": "reason-easy-order",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明、小红、小华排成一队。小明排在小华前面；小华不排在第二个；小红排在第二个。小华排在第几个？",
              "answer": "第三个",
              "skill": "reason-easy-queue",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小刚、小红每人拿一种不同的水果，水果有梨、橘子。小刚拿的不是梨。小红拿的是什么？",
              "answer": "梨",
              "skill": "reason-easy-fruit",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小芳、小刚、小红比身高，小刚比小芳高，小红比小刚高。谁最高？",
              "answer": "小红",
              "skill": "reason-easy-order",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "reason-medium-order",
            "reason-medium-queue",
            "reason-medium-fruit"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小芳、小红、小明比身高，小红比小芳高，小明比小红高。谁排在中间？",
              "answer": "小红",
              "skill": "reason-medium-order",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小刚、小红、小明排成一队。小红排在小刚前面；小明排在小红前面。小明排在第几个？",
              "answer": "第一个",
              "skill": "reason-medium-queue",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小华、小芳、小刚每人拿一种不同的水果，水果有西瓜、葡萄、梨。小华拿的是西瓜；小芳拿的不是梨。小刚拿的是什么？",
              "answer": "梨",
              "skill": "reason-medium-fruit",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小芳、小红、小刚比身高，小刚比小红高，小红比小芳高。谁排在中间？",
              "answer": "小红",
              "skill": "reason-medium-order",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "reason-hard-order",
            "reason-hard-queue",
            "reason-hard-fruit"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小华、小红、小明、小刚比身高，小明比小红高，小红比小华高，小华比小刚高。谁第三高？",
              "answer": "小华",
              "skill": "reason-hard-order",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小丽、小刚、小红、小芳排成一队。小丽不排在第二个；小丽不排在第三个；小丽排在小芳前面；小刚不排在第二个；小红不排在第二个；小刚排在小红前面。小红排在第几个？",
              "answer": "第四个",
              "skill": "reason-hard-queue",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明、小芳、小丽、小红每人拿一种不同的水果，水果有苹果、葡萄、香蕉、桃子。小明拿的是苹果；小芳拿的是葡萄；小丽拿的不是香蕉。小红拿的是什么？",
              "answer": "香蕉",
              "skill": "reason-hard-fruit",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小芳、小红、小刚、小明比身高，小红比小芳高，小芳比小明高，小刚比小红高。谁第二高？",
              "answer": "小红",
              "skill": "reason-hard-order",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U1",
      "grade": 3,
      "semester": "上",
      "unitNo": 1,
      "name": "时分秒",
      "plugin": "elapsed",
      "arithmeticPlugin": null,
      "topics": [
        "time-complex"
      ],
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "find-end",
            "find-start",
            "find-duration"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "小明10时50分开始写作业，写了21分钟，写完时是几时几分？",
              "answer": "11时11分",
              "skill": "find-end",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明写了11分钟作业，在17时57分写完。他开始写作业的时间是______。",
              "answer": "17时46分",
              "skill": "find-start",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明从15时48分写作业到15时58分，一共写了多少分钟？",
              "answer": "10分钟",
              "skill": "find-duration",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明19时19分开始写作业，写了24分钟，写完时是几时几分？",
              "answer": "19时43分",
              "skill": "find-end",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "find-end",
            "find-start",
            "find-duration",
            "sec-convert"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "小明10时30分开始写作业，写了43分钟，写完时是几时几分？",
              "answer": "11时13分",
              "skill": "find-end",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明写了41分钟作业，在21时8分写完。他开始写作业的时间是______。",
              "answer": "20时27分",
              "skill": "find-start",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明从15时15分写作业到16时17分，一共写了多少分钟？",
              "answer": "62分钟",
              "skill": "find-duration",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3分49秒 = ______秒。",
              "answer": "229秒",
              "skill": "sec-convert",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "find-start",
            "find-duration",
            "train-delay",
            "bell-intervals"
          ],
          "formats": [
            "fill",
            "application"
          ],
          "samples": [
            {
              "question": "小明写了52分钟作业，在11时1分写完。他开始写作业的时间是______。",
              "answer": "10时9分",
              "skill": "find-start",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明从10时8分写作业到12时，一共写了多少分钟？",
              "answer": "112分钟",
              "skill": "find-duration",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一列动车原定15时38分到站，因故晚点59分钟，实际几时几分到站？",
              "answer": "16时37分",
              "skill": "train-delay",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "时钟敲5下需要24秒，照这样计算，敲9下需要______秒。",
              "answer": "48秒",
              "skill": "bell-intervals",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U2",
      "grade": 3,
      "semester": "上",
      "unitNo": 2,
      "name": "万以内的加法和减法（一）",
      "plugin": "sum-10000-oral",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：56 − 17 = ______",
              "answer": "39",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "48 − ______ = 8",
              "answer": "40",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：73 − 18（　）54。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 87 枚棋子，拿走 43 枚，还剩多少枚？",
              "answer": "44",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：830 − 570 = ______",
              "answer": "260",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "26 − ______ = 4",
              "answer": "22",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：680 − 20（　）661。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 970 枚棋子，拿走 330 枚，还剩多少枚？",
              "answer": "640",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "reverse-first-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：180 − 90 = ______",
              "answer": "90",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "已知 ______ + 210 = 850，横线上应填多少？",
              "answer": "640",
              "skill": "reverse-first-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：210 − 80（　）131。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 230 枚棋子，又放入 660 枚，现在有多少枚？",
              "answer": "890",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U3",
      "grade": 3,
      "semester": "上",
      "unitNo": 3,
      "name": "测量",
      "plugin": "unit-len",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "len-compare",
            "len-big-to-small",
            "len-small-to-big"
          ],
          "formats": [
            "compare",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：5分米（　）52厘米。",
              "answer": "<",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "9分米 = （　）厘米",
              "answer": "90厘米",
              "skill": "len-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "90分米 = （　）米",
              "answer": "9米",
              "skill": "len-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：6分米（　）57厘米。",
              "answer": ">",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "len-compound",
            "len-compare",
            "len-big-to-small"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "6米8分米 = （　）分米",
              "answer": "68分米",
              "skill": "len-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2千米（　）2002米。",
              "answer": "<",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5吨 = （　）千克",
              "answer": "5000千克",
              "skill": "len-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "9吨864千克 = （　）千克",
              "answer": "9864千克",
              "skill": "len-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "len-compare",
            "len-cut-story",
            "len-compound"
          ],
          "formats": [
            "compare",
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：5米（　）55分米。",
              "answer": "<",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根木料长6千米，锯下733米后，还剩多少米？",
              "answer": "5267米",
              "skill": "len-cut-story",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2米5分米 = （　）分米",
              "answer": "25分米",
              "skill": "len-compound",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：12米（　）1202厘米。",
              "answer": "<",
              "skill": "len-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U4",
      "grade": 3,
      "semester": "上",
      "unitNo": 4,
      "name": "万以内的加法和减法（二）",
      "plugin": "sum-10000-column",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "列竖式计算：559 − 229 = ______",
              "answer": "330",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "written",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "297 + ______ = 651",
              "answer": "354",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：563 − 285（　）277。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 982 枚棋子，又放入 961 枚，现在有多少枚？",
              "answer": "1943",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "列竖式计算：230 − 170 = ______",
              "answer": "60",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "written",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "507 − ______ = 123",
              "answer": "384",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：925 + 273（　）1197。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 678 枚棋子，又放入 297 枚，现在有多少枚？",
              "answer": "975",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "列竖式计算：802 − 662 = ______",
              "answer": "140",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "written",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "718 − ______ = 551",
              "answer": "167",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：387 − 384（　）2。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 375 枚棋子，又放入 534 枚，现在有多少枚？",
              "answer": "909",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U5",
      "grade": 3,
      "semester": "上",
      "unitNo": 5,
      "name": "倍的认识",
      "plugin": "times-as-many",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "times-direct",
            "times-division",
            "times-simple-story",
            "times-equation"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "3 的 2 倍是多少？",
              "answer": "6",
              "skill": "times-direct",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4 是 2 的几倍？",
              "answer": "2",
              "skill": "times-division",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每盒彩笔有 6 支，2 盒有多少支？",
              "answer": "12",
              "skill": "times-simple-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3 的 2 倍是 ______，算式是 3 × 2。",
              "answer": "6",
              "skill": "times-equation",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "find-times",
            "find-multiple",
            "find-base",
            "check-times"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "红旗有 28 面，黄旗有 4 面。红旗的面数是黄旗的几倍？",
              "answer": "7",
              "skill": "find-times",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "蓝旗有 5 面，红旗是蓝旗的 8 倍。红旗有几面？",
              "answer": "40",
              "skill": "find-multiple",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "红旗有 48 面，是绿旗的 6 倍。绿旗有几面？",
              "answer": "8",
              "skill": "find-base",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "33 是 8 的 4 倍吗？",
              "answer": "不是",
              "skill": "check-times",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "times-extra",
            "times-reverse-extra",
            "times-combined",
            "times-difference"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "蓝旗有 4 面，红旗比蓝旗的 4 倍多 2 面。红旗有多少面？",
              "answer": "18",
              "skill": "times-extra",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "红旗有 37 面，比蓝旗的 5 倍多 2 面。蓝旗有多少面？",
              "answer": "7",
              "skill": "times-reverse-extra",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "蓝旗有 8 面，红旗是蓝旗的 9 倍。两种旗一共有多少面？",
              "answer": "80",
              "skill": "times-combined",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "蓝旗有 3 面，红旗是蓝旗的 5 倍。红旗比蓝旗多多少面？",
              "answer": "12",
              "skill": "times-difference",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U6",
      "grade": 3,
      "semester": "上",
      "unitNo": 6,
      "name": "多位数乘一位数",
      "plugin": "multi-times-one",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "13 × 6 = ______",
              "answer": "78",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "17 × ______ = 153",
              "answer": "9",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：14 × 9（　）125。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 13 本书，9 箱一共有多少本？",
              "answer": "117",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "25 × 3 = ______",
              "answer": "75",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "30 × ______ = 90",
              "answer": "3",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：14 × 3（　）41。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 25 本书，4 箱一共有多少本？",
              "answer": "100",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "reverse-factor",
            "estimate-product",
            "multi-step-apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "387 × 8 = ______",
              "answer": "3096",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "已知 ______ × 6 = 1902，横线上应填多少？",
              "answer": "317",
              "skill": "reverse-factor",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "估算：把 783 看作 800，则 783 × 5 ≈ ______",
              "answer": "4000",
              "skill": "estimate-product",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 407 本书，买 7 箱后又单买 7 本，一共有多少本？",
              "answer": "2856",
              "skill": "multi-step-apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U7",
      "grade": 3,
      "semester": "上",
      "unitNo": 7,
      "name": "长方形和正方形",
      "plugin": "geo-perimeter",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "rect-perimeter",
            "square-perimeter",
            "trace-perimeter"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "求图中长方形的周长。",
              "answer": "14 厘米",
              "skill": "rect-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "沿正方形四周围一圈，需要多长的线？",
              "answer": "24 厘米",
              "skill": "square-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从图中的黑点出发，沿边描一圈，再回到黑点。",
              "answer": "描出长方形四条边",
              "skill": "trace-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "求图中长方形的周长。",
              "answer": "24 厘米",
              "skill": "rect-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "rect-perimeter",
            "square-perimeter",
            "trace-perimeter"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "求图中长方形的周长。",
              "answer": "22 厘米",
              "skill": "rect-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "沿正方形四周围一圈，需要多长的线？",
              "answer": "8 厘米",
              "skill": "square-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从图中的黑点出发，沿边描一圈，再回到黑点。",
              "answer": "描出长方形四条边",
              "skill": "trace-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "求图中长方形的周长。",
              "answer": "24 厘米",
              "skill": "rect-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "rect-perimeter",
            "square-perimeter",
            "trace-perimeter"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "求图中长方形的周长。",
              "answer": "26 厘米",
              "skill": "rect-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "沿正方形四周围一圈，需要多长的线？",
              "answer": "16 厘米",
              "skill": "square-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从图中的黑点出发，沿边描一圈，再回到黑点。",
              "answer": "描出长方形四条边",
              "skill": "trace-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "求图中长方形的周长。",
              "answer": "50 厘米",
              "skill": "rect-perimeter",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3上-U8",
      "grade": 3,
      "semester": "上",
      "unitNo": 8,
      "name": "分数的初步认识",
      "plugin": "fraction-intro",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "fraction-read-part",
            "compare-unit-fraction",
            "same-denom-add-basic",
            "same-denom-sub-basic"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把一条长 7 米的彩带平均分成 17 份，其中的 4 份占全长的几分之几？",
              "answer": "4/17",
              "skill": "fraction-read-part",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：1/23（　）1/5。",
              "answer": "<",
              "skill": "compare-unit-fraction",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4/14 + 6/14 = ______（保留原分母）",
              "answer": "10/14",
              "skill": "same-denom-add-basic",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5/13 − 2/13 = ______（保留原分母）",
              "answer": "3/13",
              "skill": "same-denom-sub-basic",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "fraction-unit",
            "compare-fractions",
            "same-denominator-add",
            "whole-minus-fraction"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把一块纸片平均分成 18 份，其中的 5 份用什么分数表示？",
              "answer": "5/18",
              "skill": "fraction-unit",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：9/26（　）17/26。",
              "answer": "<",
              "skill": "compare-fractions",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5/21 + 9/21 = ______（保留原分母）",
              "answer": "14/21",
              "skill": "same-denominator-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1 − 5/12 = ______（分母写 12）",
              "answer": "7/12",
              "skill": "whole-minus-fraction",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "fraction-of-quantity",
            "fraction-remain-quantity",
            "fraction-two-parts",
            "fraction-reverse-total"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "一盒糖果有 198 颗，分给小华这盒糖果的 5/22，小华分到多少颗？",
              "answer": "45 颗",
              "skill": "fraction-of-quantity",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根绳子长 55 米，用去了全长的 3/11，还剩多少米？",
              "answer": "40 米",
              "skill": "fraction-remain-quantity",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一本书，第一天看了全书的 5/15，第二天看了全书的 4/15，还剩全书的几分之几没看（保留原分母）？",
              "answer": "6/15",
              "skill": "fraction-two-parts",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盘子里有一些苹果，拿出它的 1/6 正好是 86 个，盘子里原来有多少个苹果？",
              "answer": "516 个",
              "skill": "fraction-reverse-total",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U1",
      "grade": 3,
      "semester": "下",
      "unitNo": 1,
      "name": "位置与方向（一）",
      "plugin": "grid-direction",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "grid",
      "moduleLabel": "方格与坐标作图 (gridProblems)",
      "moduleFile": "prototype/gridProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-direction",
            "plot-direction",
            "reverse-direction"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "B 在 A 的什么方向？",
              "answer": "西南",
              "skill": "read-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在 A 的东方向任意标出一点 C。",
              "answer": "示例：C 在 A 的东方向",
              "skill": "plot-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "如果从 B 看 A，A 在 B 的什么方向？",
              "answer": "东南",
              "skill": "reverse-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "B 在 A 的什么方向？",
              "answer": "东北",
              "skill": "read-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-direction",
            "plot-direction",
            "reverse-direction"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "B 在 A 的什么方向？",
              "answer": "东",
              "skill": "read-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在 A 的西北方向任意标出一点 C。",
              "answer": "示例：C 在 A 的西北方向",
              "skill": "plot-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "如果从 B 看 A，A 在 B 的什么方向？",
              "answer": "南",
              "skill": "reverse-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "B 在 A 的什么方向？",
              "answer": "西北",
              "skill": "read-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-direction",
            "plot-direction",
            "reverse-direction"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "B 在 A 的什么方向？",
              "answer": "北",
              "skill": "read-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在 A 的南方向任意标出一点 C。",
              "answer": "示例：C 在 A 的南方向",
              "skill": "plot-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "如果从 B 看 A，A 在 B 的什么方向？",
              "answer": "西",
              "skill": "reverse-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "B 在 A 的什么方向？",
              "answer": "西南",
              "skill": "read-direction",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U2",
      "grade": 3,
      "semester": "下",
      "unitNo": 2,
      "name": "除数是一位数的除法",
      "plugin": "divide-one",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "28 ÷ 7 = ______",
              "answer": "4",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "60 ÷ ______ = 12",
              "answer": "5",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：24 ÷ 6（　）3。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "45 本书，每 3 本装一盒，可以装几盒？",
              "answer": "15",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "apply",
            "compare-expression"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "105 ÷ 7 = ______",
              "answer": "15",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "64 ÷ ______ = 16",
              "answer": "4",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "15 本书，每 3 本装一盒，可以装几盒？",
              "answer": "5",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：32 ÷ 4（　）8。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "63 ÷ 7 = ______",
              "answer": "9",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 ÷ ______ = 3",
              "answer": "2",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：108 ÷ 9（　）11。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "36 本书，每 3 本装一盒，可以装几盒？",
              "answer": "12",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U3",
      "grade": 3,
      "semester": "下",
      "unitNo": 3,
      "name": "复式统计表",
      "plugin": "double-table",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 8,
        "medium": 8,
        "hard": 8
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-cell",
            "group-total",
            "group-change",
            "day-total",
            "day-change",
            "cross-day",
            "greatest-change",
            "missing-from-target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组第二天收集了多少张？",
              "answer": "31",
              "skill": "read-cell",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "三组两天一共收集了多少张？",
              "answer": "39",
              "skill": "group-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组第二天比第一天多收集多少张？",
              "answer": "1",
              "skill": "group-change",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "第一天四个小组一共收集了多少张？",
              "answer": "77",
              "skill": "day-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-cell",
            "group-total",
            "group-change",
            "day-total",
            "day-change",
            "cross-day",
            "greatest-change",
            "missing-from-target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组第二天收集了多少张？",
              "answer": "28",
              "skill": "read-cell",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "三组两天一共收集了多少张？",
              "answer": "70",
              "skill": "group-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组第二天比第一天多收集多少张？",
              "answer": "6",
              "skill": "group-change",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "第一天四个小组一共收集了多少张？",
              "answer": "144",
              "skill": "day-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-cell",
            "group-total",
            "group-change",
            "day-total",
            "day-change",
            "cross-day",
            "greatest-change",
            "missing-from-target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组第二天收集了多少张？",
              "answer": "200",
              "skill": "read-cell",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "三组两天一共收集了多少张？",
              "answer": "311",
              "skill": "group-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组第二天比第一天多收集多少张？",
              "answer": "4",
              "skill": "group-change",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "第一天四个小组一共收集了多少张？",
              "answer": "425",
              "skill": "day-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U4",
      "grade": 3,
      "semester": "下",
      "unitNo": 4,
      "name": "两位数乘两位数",
      "plugin": "two-times-two",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "17 × 29 = ______",
              "answer": "493",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "20 × ______ = 720",
              "answer": "36",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：12 × 93（　）1115。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 13 本书，49 箱一共有多少本？",
              "answer": "637",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "39 × 86 = ______",
              "answer": "3354",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "40 × ______ = 2400",
              "answer": "60",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：48 × 24（　）1151。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 22 本书，86 箱一共有多少本？",
              "answer": "1892",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "reverse-factor",
            "estimate-product",
            "multi-step-apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "80 × 53 = ______",
              "answer": "4240",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "已知 ______ × 83 = 5561，横线上应填多少？",
              "answer": "67",
              "skill": "reverse-factor",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "估算：把 71 看作 70，则 71 × 45 ≈ ______",
              "answer": "3150",
              "skill": "estimate-product",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 52 本书，买 33 箱后又单买 33 本，一共有多少本？",
              "answer": "1749",
              "skill": "multi-step-apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U5",
      "grade": 3,
      "semester": "下",
      "unitNo": 5,
      "name": "面积",
      "plugin": "geo-area",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-area-units",
            "rect-area",
            "square-area"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "每小格是 1 平方厘米。数一数，阴影的面积是多少？",
              "answer": "24 平方厘米",
              "skill": "count-area-units",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方形的面积。",
              "answer": "8 平方厘米",
              "skill": "rect-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求正方形的面积。",
              "answer": "9 平方厘米",
              "skill": "square-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "每小格是 1 平方厘米。数一数，阴影的面积是多少？",
              "answer": "21 平方厘米",
              "skill": "count-area-units",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-area-units",
            "rect-area",
            "square-area"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "每小格是 1 平方厘米。数一数，阴影的面积是多少？",
              "answer": "36 平方厘米",
              "skill": "count-area-units",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方形的面积。",
              "answer": "50 平方厘米",
              "skill": "rect-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求正方形的面积。",
              "answer": "9 平方厘米",
              "skill": "square-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "每小格是 1 平方厘米。数一数，阴影的面积是多少？",
              "answer": "54 平方厘米",
              "skill": "count-area-units",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-area-units",
            "rect-area",
            "square-area"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "每小格是 1 平方厘米。数一数，阴影的面积是多少？",
              "answer": "26 平方厘米",
              "skill": "count-area-units",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方形的面积。",
              "answer": "140 平方厘米",
              "skill": "rect-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求正方形的面积。",
              "answer": "144 平方厘米",
              "skill": "square-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "每小格是 1 平方厘米。数一数，阴影的面积是多少？",
              "answer": "30 平方厘米",
              "skill": "count-area-units",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U6",
      "grade": 3,
      "semester": "下",
      "unitNo": 6,
      "name": "年月日",
      "plugin": "calendar",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "month-days-basic",
            "year-type",
            "year-days",
            "clock-24h"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1990 年 11 月一共有多少天？",
              "answer": "30",
              "skill": "month-days-basic",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2045 年是平年还是闰年？",
              "answer": "平年",
              "skill": "year-type",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2007 年全年有多少天？",
              "answer": "365",
              "skill": "year-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把下午 4 时 27 分写成 24 时计时法的形式。",
              "answer": "16 时 27 分",
              "skill": "clock-24h",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "month-days",
            "date-rollover",
            "clock-12h",
            "quarter-days"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "2018 年 7 月有多少天？",
              "answer": "31",
              "skill": "month-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2064 年 6 月 30 日的第二天是几月几日？",
              "answer": "7 月 1 日",
              "skill": "date-rollover",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 19 时 46 分改写成普通计时法（注明“下午”）。",
              "answer": "下午 7 时 46 分",
              "skill": "clock-12h",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2082 年第一季度（1月、2月、3月）一共有多少天？",
              "answer": "90",
              "skill": "quarter-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "elapsed-hours-same-day",
            "elapsed-days-in-month",
            "weekday-cycle",
            "cross-midnight-hours"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "一辆客车于 2047 年某天上午 8 时出发，当天下午 6 时到达终点，一共行驶了多少小时？",
              "answer": "10 小时",
              "skill": "elapsed-hours-same-day",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "读书活动从 4 月 9 日开始，到 4 月 17 日结束（首尾两天都算），一共举办了多少天？",
              "answer": "9 天",
              "skill": "elapsed-days-in-month",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "如果 2031 年 6 月 4 日是星期三，那么同月 25 日是星期几？",
              "answer": "星期三",
              "skill": "weekday-cycle",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一列列车第一天 16 时发车，第二天早晨 9 时到达（车次 50），途中行驶了多少小时？",
              "answer": "17 小时",
              "skill": "cross-midnight-hours",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U7",
      "grade": 3,
      "semester": "下",
      "unitNo": 7,
      "name": "小数的初步认识",
      "plugin": "decimal-intro",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-place",
            "decimal-write",
            "decimal-money",
            "decimal-length"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "58.8 的十分位上是几？",
              "answer": "8",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "六点三写作多少？",
              "answer": "6.3",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 元 8 角写成以元为单位的小数是多少？",
              "answer": "6.8 元",
              "skill": "decimal-money",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "43 分米写成以米为单位的小数是多少米？",
              "answer": "4.3 米",
              "skill": "decimal-length",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-compare",
            "decimal-simple-add",
            "decimal-simple-sub",
            "decimal-money-compare"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "填 >、< 或 =：85.5（　）85.5。",
              "answer": "=",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2.9 + 4.0 = ______",
              "answer": "6.9",
              "skill": "decimal-simple-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "18.4 − 9.4 = ______",
              "answer": "9",
              "skill": "decimal-simple-sub",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：9 元 4 角（　）9.7 元。",
              "answer": "<",
              "skill": "decimal-money-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-carry-add",
            "decimal-borrow-sub",
            "decimal-rope-cut",
            "decimal-diff-total"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "一支钢笔 8.2 元，一本笔记本 3.8 元，买这两样一共要多少元？",
              "answer": "12 元",
              "skill": "decimal-carry-add",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小刚带了 11 元，买文具花了 4.6 元，还剩多少元？",
              "answer": "6.4 元",
              "skill": "decimal-borrow-sub",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根绳子长 9.7 米，第一次剪去 0.9 米，第二次剪去 0.7 米，还剩多少米？",
              "answer": "8.1 米",
              "skill": "decimal-rope-cut",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "甲筐水果重 5.6 千克，比乙筐重 0.5 千克，两筐水果一共重多少千克？",
              "answer": "10.7 千克",
              "skill": "decimal-diff-total",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G3下-U8",
      "grade": 3,
      "semester": "下",
      "unitNo": 8,
      "name": "数学广角——搭配（二）",
      "plugin": "combine",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 5,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "digits-two",
            "path-basic",
            "breakfast-combo",
            "clothes-basic"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用7、1、5这3张数字卡片，每次取2张组成两位数（十位和个位不同），一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "digits-two",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从家到学校有3条路，从学校到公园有2条路，从家经学校到公园一共有多少种不同的走法？",
              "answer": "6种",
              "skill": "path-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "早餐有牛奶、豆浆共2种饮品，煎饼、蛋糕、三明治共3种早点，各选一种搭配，一共有多少种不同的早餐搭配？",
              "answer": "6种",
              "skill": "breakfast-combo",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有3件不同的上衣和3条不同的裤子，各选一件搭配，一共有多少种不同的穿法？",
              "answer": "9种",
              "skill": "clothes-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "digits",
            "path",
            "clothes",
            "handshake",
            "round-robin-4"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、7、2这3张数字卡片，每次取2张组成没有重复数字的两位数，一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "digits",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从家到图书馆有4条路，从图书馆到少年宫有5条路，从家经图书馆到少年宫一共有多少种不同的走法？",
              "answer": "20种",
              "skill": "path",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有3件不同的T恤和3条不同的裙子，每次各选一件搭配，一共有多少种不同的穿法？",
              "answer": "9种",
              "skill": "clothes",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5个小朋友聚会，每两人握一次手，一共要握多少次手？",
              "answer": "10次",
              "skill": "handshake",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "photo-fixed",
            "path-three-stops",
            "digits-with-zero",
            "round-robin"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "爸爸、妈妈、小明、姐姐共4人排成一排照相，如果妈妈必须站在排头，一共有多少种不同的排法？",
              "answer": "6种",
              "skill": "photo-fixed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲城到乙城有4条路，从乙城到丙城有3条路，从丙城到丁城有3条路。从甲城经乙城、丙城到丁城共有多少种走法？",
              "answer": "36种",
              "skill": "path-three-stops",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用0、3、2、5这4张数字卡片，每次取2张组成没有重复数字的两位数，一共能组成多少个？",
              "answer": "9个",
              "skill": "digits-with-zero",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "学校举办篮球比赛，有5名选手（或队伍）参加单循环赛（每两名选手之间都要赛一场），一共要进行多少场比赛？",
              "answer": "10场",
              "skill": "round-robin",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U1",
      "grade": 4,
      "semester": "上",
      "unitNo": 1,
      "name": "大数的认识",
      "plugin": "large-number",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "rewrite-wan"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "150575 中，万位上的数字表示多少？",
              "answer": "50000",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 8个十万、9个万、4个千、6个百、2个十、1个一 组成的数写作多少？",
              "answer": "894621",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：965948（　）395994。",
              "answer": ">",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把整万数 3890410000 改写成用“万”作单位的数。",
              "answer": "389041万",
              "skill": "rewrite-wan",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "compare-numbers",
            "estimate"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "15326047 中，千位上的数字表示多少？",
              "answer": "6000",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 1个千万、6个百万、1个十万、1个万、4个千、4个百、4个十、2个一 组成的数写作多少？",
              "answer": "16114442",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：98303528（　）80493428。",
              "answer": ">",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 78715917 四舍五入到万位，近似数是多少？",
              "answer": "78720000",
              "skill": "estimate",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "place-value",
            "compose-number",
            "estimate",
            "max-with-zeros"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "155946216 中，十位上的数字表示多少？",
              "answer": "10",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 6个亿、4个千万、2个百万、7个十万、7个万、4个千、9个百、2个十、1个一 组成的数写作多少？",
              "answer": "642774921",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 957374523 四舍五入到万位，近似数是多少？",
              "answer": "957370000",
              "skill": "estimate",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用数字 1、3 和两个 0 组成一个最大的四位数（每个数字只用一次，且大于 701），这个四位数是多少？",
              "answer": "3100",
              "skill": "max-with-zeros",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U2",
      "grade": 4,
      "semester": "上",
      "unitNo": 2,
      "name": "公顷和平方千米",
      "plugin": "unit-area",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "area-compare",
            "area-small-to-big",
            "area-big-to-small"
          ],
          "formats": [
            "compare",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：7平方千米（　）720公顷。",
              "answer": "<",
              "skill": "area-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "50000平方米 = （　）公顷",
              "answer": "5公顷",
              "skill": "area-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5平方千米 = （　）公顷",
              "answer": "500公顷",
              "skill": "area-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "30000平方米 = （　）公顷",
              "answer": "3公顷",
              "skill": "area-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "area-small-to-big",
            "area-compare",
            "area-big-to-small"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "30000平方米 = （　）公顷",
              "answer": "3公顷",
              "skill": "area-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：1平方千米（　）100公顷。",
              "answer": "=",
              "skill": "area-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "11平方千米 = （　）平方米",
              "answer": "11000000平方米",
              "skill": "area-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "400公顷 = （　）平方千米",
              "answer": "4平方千米",
              "skill": "area-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "area-compare",
            "area-big-to-small",
            "area-small-to-big"
          ],
          "formats": [
            "compare",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：14平方千米（　）1380公顷。",
              "answer": ">",
              "skill": "area-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "28公顷 = （　）平方米",
              "answer": "280000平方米",
              "skill": "area-big-to-small",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "380000平方米 = （　）公顷",
              "answer": "38公顷",
              "skill": "area-small-to-big",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：33公顷（　）331000平方米。",
              "answer": "<",
              "skill": "area-compare",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U3",
      "grade": 4,
      "semester": "上",
      "unitNo": 3,
      "name": "角的度量",
      "plugin": "geo-angle-measure",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "measure-angle",
            "classify-angle",
            "draw-angle"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "用量角器量出图中角的度数。",
              "answer": "30°",
              "skill": "measure-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "判断图中的是锐角、直角还是钝角。",
              "answer": "锐角",
              "skill": "classify-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "以图中的线段为一条边、左端点为顶点，向上画出 30° 的角。",
              "answer": "30°，见参考图",
              "skill": "draw-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "用量角器量出图中角的度数。",
              "answer": "30°",
              "skill": "measure-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "measure-angle",
            "classify-angle",
            "draw-angle"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "用量角器量出图中角的度数。",
              "answer": "55°",
              "skill": "measure-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "判断图中的是锐角、直角还是钝角。",
              "answer": "钝角",
              "skill": "classify-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "以图中的线段为一条边、左端点为顶点，向上画出 125° 的角。",
              "answer": "125°，见参考图",
              "skill": "draw-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "用量角器量出图中角的度数。",
              "answer": "35°",
              "skill": "measure-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "measure-angle",
            "supplement-angle",
            "draw-angle"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "用量角器量出图中角的度数。",
              "answer": "65°",
              "skill": "measure-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "已知图中角与∠2拼成一个平角（180°），图中角为 135°，求∠2的度数。",
              "answer": "45°",
              "skill": "supplement-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "以图中的线段为一条边、左端点为顶点，向上画出 85° 的角。",
              "answer": "85°，见参考图",
              "skill": "draw-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "用量角器量出图中角的度数。",
              "answer": "25°",
              "skill": "measure-angle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U4",
      "grade": 4,
      "semester": "上",
      "unitNo": 4,
      "name": "三位数乘两位数",
      "plugin": "three-times-two",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "120 × 59 = ______",
              "answer": "7080",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "132 × ______ = 6600",
              "answer": "50",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：146 × 39（　）5693。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 162 本书，83 箱一共有多少本？",
              "answer": "13446",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "181 × 26 = ______",
              "answer": "4706",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "146 × ______ = 10658",
              "answer": "73",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：151 × 60（　）9059。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 356 本书，30 箱一共有多少本？",
              "answer": "10680",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "reverse-factor",
            "estimate-product",
            "multi-step-apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "443 × 83 = ______",
              "answer": "36769",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "已知 ______ × 96 = 89856，横线上应填多少？",
              "answer": "936",
              "skill": "reverse-factor",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "估算：把 854 看作 900，则 854 × 81 ≈ ______",
              "answer": "72900",
              "skill": "estimate-product",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 758 本书，买 67 箱后又单买 67 本，一共有多少本？",
              "answer": "50853",
              "skill": "multi-step-apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U5",
      "grade": 4,
      "semester": "上",
      "unitNo": 5,
      "name": "平行四边形和梯形",
      "plugin": "geo-quad",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "classify-quad",
            "parallel-sides",
            "draw-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是平行四边形还是梯形？",
              "answer": "梯形",
              "skill": "classify-quad",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "用笔描出这个梯形中互相平行的一对边。",
              "answer": "描出上底和下底",
              "skill": "parallel-sides",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "从黑点向下方的底画一条高。",
              "answer": "见参考图",
              "skill": "draw-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中是平行四边形还是梯形？",
              "answer": "梯形",
              "skill": "classify-quad",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "classify-quad",
            "parallel-sides",
            "draw-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是平行四边形还是梯形？",
              "answer": "平行四边形",
              "skill": "classify-quad",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "用笔描出这个梯形中互相平行的一对边。",
              "answer": "描出上底和下底",
              "skill": "parallel-sides",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "从黑点向下方的底画一条高。",
              "answer": "见参考图",
              "skill": "draw-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中是平行四边形还是梯形？",
              "answer": "平行四边形",
              "skill": "classify-quad",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "classify-quad",
            "parallel-sides",
            "draw-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中是平行四边形还是梯形？",
              "answer": "梯形",
              "skill": "classify-quad",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "用笔描出这个梯形中互相平行的一对边。",
              "answer": "描出上底和下底",
              "skill": "parallel-sides",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "从黑点向下方的底画一条高。",
              "answer": "见参考图",
              "skill": "draw-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中是平行四边形还是梯形？",
              "answer": "平行四边形",
              "skill": "classify-quad",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U6",
      "grade": 4,
      "semester": "上",
      "unitNo": 6,
      "name": "除数是两位数的除法",
      "plugin": "divide-two",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "228 ÷ 19 = ______",
              "answer": "12",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "164 ÷ ______ = 4",
              "answer": "41",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：42 ÷ 14（　）4。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "342 本书，每 38 本装一盒，可以装几盒？",
              "answer": "9",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "114 ÷ 19 = ______",
              "answer": "6",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "264 ÷ ______ = 8",
              "answer": "33",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：280 ÷ 40（　）7。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "624 本书，每 39 本装一盒，可以装几盒？",
              "answer": "16",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "calculate",
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "323 ÷ 19 = ______",
              "answer": "17",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "325 ÷ ______ = 13",
              "answer": "25",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：297 ÷ 27（　）10。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "240 本书，每 40 本装一盒，可以装几盒？",
              "answer": "6",
              "skill": "apply",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U7",
      "grade": 4,
      "semester": "上",
      "unitNo": 7,
      "name": "条形统计图",
      "plugin": "bar-chart",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 7,
        "medium": 7,
        "hard": 7
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "3",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "63",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "6",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "一组最多，二组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "66",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "120",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "48",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "一组最多，二组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "15",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "215",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "55",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "四组最多，一组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4上-U8",
      "grade": 4,
      "semester": "上",
      "unitNo": 8,
      "name": "数学广角——优化",
      "plugin": "optimize",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "parallel-tasks",
            "shorter-first",
            "even-pancakes",
            "flow-sum"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "烧水要 14 分钟，洗杯子要 4 分钟，两件事可以同时做，最少要多少分钟？",
              "answer": "14",
              "skill": "parallel-tasks",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两人等用同一台打印机，小明要用 4 分钟、小刚要用 2 分钟。要让两人等待时间的和最短，谁先用？",
              "answer": "小刚",
              "skill": "shorter-first",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "电饼铛每次最多烙 2 张煎鸡蛋，两面都要烙，每面 4 分钟。烙熟 2 张煎鸡蛋最少需要多少分钟？",
              "answer": "8 分钟",
              "skill": "even-pancakes",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "淘米要 3 分钟，电饭煲煮饭要 19 分钟，煮饭时可同时洗菜 2 分钟。做好这些事最少要多少分钟？",
              "answer": "22 分钟",
              "skill": "flow-sum",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "prerequisite",
            "batch-capacity",
            "two-queue-wait",
            "odd-pancakes"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "周末家里来客，等水烧开要 8 分钟，烧好后泡茶要 3 分钟。洗杯子要 2 分钟，可以在烧水时洗。最少要多少分钟？",
              "answer": "11",
              "skill": "prerequisite",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个平底煎锅每轮最多煎 8 张煎牛排，一轮需 4 分钟。煎熟 17 张煎牛排至少要多少分钟？",
              "answer": "12",
              "skill": "batch-capacity",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "东东打水要 1 分钟，亮亮打水要 3 分钟，只有 1 个水龙头。两人等待（含打水）时间的总和最少是多少分钟？",
              "answer": "5 分钟",
              "skill": "two-queue-wait",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个平底煎锅每次最多烙 2 张烙肉饼，两面都要烙，每面 5 分钟。烙熟 7 张烙肉饼最少要多少分钟？",
              "answer": "35 分钟",
              "skill": "odd-pancakes",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "three-queue-min-wait",
            "general-pancake-time",
            "multi-parallel-tea",
            "tianji-card-strategy"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "三人排队接水，甲需 1 分钟，乙需 4 分钟，丙需 8 分钟。只有一个水龙头，三人等待（含接水）时间的总和最少是多少分钟？",
              "answer": "19 分钟",
              "skill": "three-queue-min-wait",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一口平底锅每次最多烙 2 张煎牛排，两面都要烙，每面需 5 分钟。烙熟 11 张煎牛排最少需要多少分钟？",
              "answer": "55 分钟",
              "skill": "general-pancake-time",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明招待客人：洗水壶 3 分钟，烧开水 10 分钟，烧水时可同时洗茶杯 4 分钟和拿绿茶 1 分钟（5 < 10），最后沏茶 1 分钟。最少多少分钟能喝上茶？",
              "answer": "14 分钟",
              "skill": "multi-parallel-tea",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "三局两胜扑克赛：对方出牌点数依次为 6、4、2，我方手牌为 5、3、1。我方用最小牌 1 对阵对方最大牌 6，其余两局我方能赢几局？",
              "answer": "2 局",
              "skill": "tianji-card-strategy",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U1",
      "grade": 4,
      "semester": "下",
      "unitNo": 1,
      "name": "四则运算",
      "plugin": "four-operations",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 5,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "nested-brackets",
            "inverse-relationship",
            "add-sub-inverse",
            "zero-operation-rule"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "[47 −（4 + 7）] × 4 = ______",
              "answer": "144",
              "skill": "nested-brackets",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法与除法的关系填空：621 ÷ ______ = 69。",
              "answer": "9",
              "skill": "inverse-relationship",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据加减法各部分关系，由 26 + 2 = 28 可得 28 − 26 = ______。",
              "answer": "2",
              "skill": "add-sub-inverse",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有关 0 的运算：0 ÷ 64 + 6 × 4 = ______。",
              "answer": "24",
              "skill": "zero-operation-rule",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "bracket-order",
            "nested-brackets",
            "inverse-relationship",
            "quotient-rule",
            "four-operation-story"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "计算 [64 −（6 + 4）] × 2，先算哪一步？",
              "answer": "6 + 4",
              "skill": "bracket-order",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "[36 −（3 + 6）] × 2 = ______",
              "answer": "54",
              "skill": "nested-brackets",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法与除法的关系填空：261 ÷ ______ = 29。",
              "answer": "9",
              "skill": "inverse-relationship",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "（216 + 30）÷ 6 = ______",
              "answer": "41",
              "skill": "quotient-rule",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "nested-brackets",
            "inverse-relationship",
            "four-op-reverse",
            "rental-boat-cost"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "[69 −（6 + 9）] × 9 = ______",
              "answer": "486",
              "skill": "nested-brackets",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法与除法的关系填空：216 ÷ ______ = 54。",
              "answer": "4",
              "skill": "inverse-relationship",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "已知 [24 −（______ + 2）] × 4 = 80，横线上应填多少？",
              "answer": "2",
              "skill": "four-op-reverse",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "全班去划船，大船每条租金 18 元，小船每条租金 12 元。租 7 条大船和 7 条小船一共应付多少元？",
              "answer": "210 元",
              "skill": "rental-boat-cost",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U2",
      "grade": 4,
      "semester": "下",
      "unitNo": 2,
      "name": "观察物体（二）",
      "plugin": "geo-view-2",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-blocks",
            "read-front",
            "draw-side"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "4",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从前面看，最高的一列有几个小正方形？",
              "answer": "1",
              "skill": "read-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从右面看是什么样子？在右侧方格里从最底下一行开始涂，左列对应物体的后排。",
              "answer": "见参考图",
              "skill": "draw-side",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "5",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-blocks",
            "read-front",
            "draw-side"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "6",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从前面看，最高的一列有几个小正方形？",
              "answer": "2",
              "skill": "read-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从右面看是什么样子？在右侧方格里从最底下一行开始涂，左列对应物体的后排。",
              "answer": "见参考图",
              "skill": "draw-side",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "3",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "count-blocks",
            "read-front",
            "draw-side"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "7",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从前面看，最高的一列有几个小正方形？",
              "answer": "3",
              "skill": "read-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从右面看是什么样子？在右侧方格里从最底下一行开始涂，左列对应物体的后排。",
              "answer": "见参考图",
              "skill": "draw-side",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中的方块摆成竖直的柱，每个上层方块下面都垫满。标出的这堆一共有几个小正方体？",
              "answer": "8",
              "skill": "count-blocks",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U3",
      "grade": 4,
      "semester": "下",
      "unitNo": 3,
      "name": "运算定律",
      "plugin": "operation-laws",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "commutative",
            "associative",
            "commutative-add",
            "simplify-product"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "用乘法交换律填空：47 × 7 = ______ × 47。",
              "answer": "7",
              "skill": "commutative",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用加法结合律计算：44 + 67 + 56 = ______。",
              "answer": "167",
              "skill": "associative",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用加法交换律填空：23 + 38 = 38 + ______。",
              "answer": "23",
              "skill": "commutative-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法结合律简算：25 × 47 × 4 = ______。",
              "answer": "4700",
              "skill": "simplify-product",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "distributive",
            "distributive-combine",
            "sub-property",
            "div-property"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "用乘法分配律填空：6 ×（4 + 6）= 6 × 4 + 6 × ______。",
              "answer": "6",
              "skill": "distributive",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法分配律简算：84 × 8 + 84 × 2 = ______。",
              "answer": "840",
              "skill": "distributive-combine",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用减法性质简算：126 − 2 − 98 = ______。",
              "answer": "26",
              "skill": "sub-property",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用除法性质简算：9900 ÷ 25 ÷ 4 = ______。",
              "answer": "99",
              "skill": "div-property",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "near-hundred-plus",
            "near-hundred-minus",
            "distributive-diff",
            "pair-eight-125"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "用简便方法计算：69 × 99 + 69 = ______。",
              "answer": "6900",
              "skill": "near-hundred-plus",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法分配律简算：39 × 101 − 39 = ______。",
              "answer": "3900",
              "skill": "near-hundred-minus",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用简便方法计算：39 × 13 − 39 × 3 = ______。",
              "answer": "390",
              "skill": "distributive-diff",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法交换律和结合律简算：125 × 52 × 8 = ______。",
              "answer": "52000",
              "skill": "pair-eight-125",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U4",
      "grade": 4,
      "semester": "下",
      "unitNo": 4,
      "name": "小数的意义和性质",
      "plugin": "decimal-properties",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-place",
            "decimal-compare",
            "decimal-write",
            "trailing-zero"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "4.42 的十分位上是几？",
              "answer": "4",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：49.9（　）49.2。",
              "answer": ">",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "五点九三写作多少？",
              "answer": "5.93",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "化简小数 45.5400。",
              "answer": "45.54",
              "skill": "trailing-zero",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-hundredth",
            "shift-right",
            "shift-left",
            "round-tenth"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "小数 69.98 的百分位上的数字是几？",
              "answer": "8",
              "skill": "decimal-hundredth",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 7.64 的小数点向右移动两位，得到的数是多少？",
              "answer": "764",
              "skill": "shift-right",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 75 缩小到原来的 1/10，结果是多少？",
              "answer": "7.5",
              "skill": "shift-left",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 8.63 保留一位小数（四舍五入），近似数是多少？",
              "answer": "8.6",
              "skill": "round-tenth",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "shift-diff-find",
            "unit-convert-decimal",
            "approx-max-two-dec",
            "approx-min-two-dec"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把一个小数的小数点向右移动一位后，得到的新数比原数大 59.4。原来的小数是多少？",
              "answer": "6.6",
              "skill": "shift-diff-find",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "高级单位换算：9 千克 460 克 = ______ 千克（填小数）。",
              "answer": "9.46",
              "skill": "unit-convert-decimal",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个两位小数“四舍五入”保留一位小数后是 78.8，这个两位小数最大是多少？",
              "answer": "78.84",
              "skill": "approx-max-two-dec",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个两位小数“四舍五入”保留一位小数后是 47.7，这个两位小数最小是多少？",
              "answer": "47.65",
              "skill": "approx-min-two-dec",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U5",
      "grade": 4,
      "semester": "下",
      "unitNo": 5,
      "name": "三角形",
      "plugin": "geo-triangle",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "classify-triangle",
            "triangle-angle-sum",
            "triangle-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "看图判断，这是直角三角形还是锐角三角形？",
              "answer": "锐角三角形",
              "skill": "classify-triangle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标出的两个角，求顶角 ∠A。",
              "answer": "59°",
              "skill": "triangle-angle-sum",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从顶点 A 向下方的底画一条高。",
              "answer": "见参考图",
              "skill": "triangle-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "看图判断，这是直角三角形还是锐角三角形？",
              "answer": "锐角三角形",
              "skill": "classify-triangle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "classify-triangle",
            "triangle-angle-sum",
            "triangle-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "看图判断，这是直角三角形还是锐角三角形？",
              "answer": "锐角三角形",
              "skill": "classify-triangle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标出的两个角，求顶角 ∠A。",
              "answer": "61°",
              "skill": "triangle-angle-sum",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从顶点 A 向下方的底画一条高。",
              "answer": "见参考图",
              "skill": "triangle-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "看图判断，这是直角三角形还是锐角三角形？",
              "answer": "直角三角形",
              "skill": "classify-triangle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "classify-triangle",
            "triangle-angle-sum",
            "triangle-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "看图判断，这是直角三角形还是锐角三角形？",
              "answer": "直角三角形",
              "skill": "classify-triangle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标出的两个角，求顶角 ∠A。",
              "answer": "79°",
              "skill": "triangle-angle-sum",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从顶点 A 向下方的底画一条高。",
              "answer": "见参考图",
              "skill": "triangle-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "看图判断，这是直角三角形还是锐角三角形？",
              "answer": "锐角三角形",
              "skill": "classify-triangle",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U6",
      "grade": 4,
      "semester": "下",
      "unitNo": 6,
      "name": "小数的加法和减法",
      "plugin": "decimal-addsub",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-add",
            "decimal-subtract",
            "decimal-sum-story",
            "decimal-change"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5.4 + 0.46 = ______",
              "answer": "5.86",
              "skill": "decimal-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2.6 − 0.68 = ______",
              "answer": "1.92",
              "skill": "decimal-subtract",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔 5.6 元，一块橡皮 0.62 元，合计多少元？",
              "answer": "6.22 元",
              "skill": "decimal-sum-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 2.8 元，用去 0.88 元，还剩多少元？",
              "answer": "1.92 元",
              "skill": "decimal-change",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "int-minus-decimal",
            "decimal-missing-addend",
            "decimal-pair-sum",
            "decimal-two-step-story"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "计算整数减小数：16 − 7.4 = ______",
              "answer": "8.6",
              "skill": "int-minus-decimal",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填空：5.3 + ______ = 7.3",
              "answer": "2",
              "skill": "decimal-missing-addend",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "简算：8.9 + 8.9 + 7.1 = ______",
              "answer": "24.9",
              "skill": "decimal-pair-sum",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买菜花去 6.9 元，买水果花去 6.1 元，付给收银员 22 元，应找回多少元？",
              "answer": "9 元",
              "skill": "decimal-two-step-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "decimal-coupon-story",
            "decimal-mistake-recover",
            "decimal-tare-weight",
            "decimal-shared-overlap"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "书店满 9 元减 6 元。小华买了一本 7.6 元和一本 2.4 元的书，优惠后应付多少元？",
              "answer": "4 元",
              "skill": "decimal-coupon-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小马虎计算小数加法时，把一个加数 7.9 看成了 11.9，算得结果是 83.9。正确结果是多少？",
              "answer": "79.9",
              "skill": "decimal-mistake-recover",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一筐苹果连筐共重 18.8 千克，卖出一半苹果后，连筐重 13.4 千克。空筐重多少千克？",
              "answer": "8 千克",
              "skill": "decimal-tare-weight",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两根木条分别长 9.2 米和 2.5 米，接在一起后接头重叠部分长 0.9 米。接好后的木条总长多少米？",
              "answer": "10.8 米",
              "skill": "decimal-shared-overlap",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U7",
      "grade": 4,
      "semester": "下",
      "unitNo": 7,
      "name": "图形的运动（二）",
      "plugin": "grid-motion-2",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "grid",
      "moduleLabel": "方格与坐标作图 (gridProblems)",
      "moduleFile": "prototype/gridProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-slide",
            "draw-slide",
            "draw-reflection"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形向右平移 1 格后的图形。",
              "answer": "见参考图",
              "skill": "draw-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "以虚线为对称轴，画出这个三角形的轴对称图形。",
              "answer": "见参考图",
              "skill": "draw-reflection",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "1 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-slide",
            "draw-slide",
            "draw-reflection"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形向右平移 2 格后的图形。",
              "answer": "见参考图",
              "skill": "draw-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "以虚线为对称轴，画出这个三角形的轴对称图形。",
              "answer": "见参考图",
              "skill": "draw-reflection",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "3 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-slide",
            "draw-slide",
            "draw-reflection"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "2 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形向右平移 3 格后的图形。",
              "answer": "见参考图",
              "skill": "draw-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "以虚线为对称轴，画出这个三角形的轴对称图形。",
              "answer": "见参考图",
              "skill": "draw-reflection",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "原图（实线）向右平移了几格，得到虚线图形？",
              "answer": "3 格",
              "skill": "read-slide",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U8",
      "grade": 4,
      "semester": "下",
      "unitNo": 8,
      "name": "平均数与条形统计图",
      "plugin": "bar-average",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 9,
        "medium": 9,
        "hard": 9
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target",
            "average",
            "above-average"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "29",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "61",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "35",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "一组最多，二组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target",
            "average",
            "above-average"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "22",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "78",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "60",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "三组最多，一组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target",
            "average",
            "above-average"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "二组收集了多少张？",
              "answer": "80",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一组和三组合计收集了多少张？",
              "answer": "60",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "四组和三组收集的数量相差多少张？",
              "answer": "65",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "二组最多，三组最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G4下-U9",
      "grade": 4,
      "semester": "下",
      "unitNo": 9,
      "name": "数学广角——鸡兔同笼",
      "plugin": null,
      "arithmeticPlugin": null,
      "topics": [
        "chicken-rabbit-complex"
      ],
      "maxCount": null,
      "review": false,
      "moduleKey": "engineTopic",
      "moduleLabel": "引擎题材模板 (problemTemplates)",
      "moduleFile": "prototype/engine/problemTemplates/",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 9,
        "medium": 9,
        "hard": 9
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "chicken-rabbit-given-one",
            "chicken-rabbit-basic",
            "chicken-rabbit-simple",
            "chicken-rabbit-multiple",
            "chicken-rabbit-difference",
            "chicken-rabbit-move",
            "chicken-rabbit-legs-only",
            "chicken-rabbit-buying",
            "chicken-rabbit-with-difference"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "笼子里有鸡和兔，共有13个头，42条腿，已知兔有8只，鸡有多少只？",
              "answer": "鸡5只，兔8只",
              "skill": "chicken-rabbit-given-one",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "笼子里关着鹤和龟，数一数共有7个头，22只脚，鹤和龟各有多少？",
              "answer": "鹤3只，龟4只",
              "skill": "chicken-rabbit-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在一个笼子里，鸡和兔共有5个头，14条腿，鸡和兔各有多少？",
              "answer": "鸡3只，兔2只",
              "skill": "chicken-rabbit-simple",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "笼子里有鸡和兔，兔的数量是鸡的2倍，共有42个头，140条腿，鸡和兔各有多少只？",
              "answer": "鸡14只，兔28只",
              "skill": "chicken-rabbit-multiple",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "chicken-rabbit-buying",
            "chicken-rabbit-difference",
            "chicken-rabbit-with-difference",
            "chicken-rabbit-legs-only",
            "chicken-rabbit-basic",
            "chicken-rabbit-given-one",
            "chicken-rabbit-move",
            "chicken-rabbit-multiple",
            "chicken-rabbit-simple"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小丽买了鸡和兔共25只，鸡每只5元，兔每只11元，一共花了203元，小丽买了鸡和兔各多少只？",
              "answer": "鸡12只，兔13只",
              "skill": "chicken-rabbit-buying",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两个笼子里分别装着鸡和兔，第一个笼子里有21个头、80条腿，第二个笼子里有29个头、82条腿，两个笼子里兔相差多少只？",
              "answer": "相差7只",
              "skill": "chicken-rabbit-difference",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "笼子里有鸡和螃蟹，鸡有2条腿，螃蟹有10条腿，共有36个头，120条腿，已知鸡比螃蟹多24只，它们各有多少？",
              "answer": "鸡30只，螃蟹6只",
              "skill": "chicken-rabbit-with-difference",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "笼子里有鸡和兔，兔比鸡多29只，数一数共有308条腿，鸡和兔各有多少只？",
              "answer": "鸡32只，兔61只",
              "skill": "chicken-rabbit-legs-only",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "chicken-rabbit-legs-only",
            "chicken-rabbit-multiple",
            "chicken-rabbit-move",
            "chicken-rabbit-difference",
            "chicken-rabbit-given-one",
            "chicken-rabbit-with-difference",
            "chicken-rabbit-simple",
            "chicken-rabbit-basic",
            "chicken-rabbit-buying"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "笼子里有鸡和兔，兔比鸡多16只，数一数共有220条腿，鸡和兔各有多少只？",
              "answer": "鸡26只，兔42只",
              "skill": "chicken-rabbit-legs-only",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "笼子里有鸡和兔，兔的数量是鸡的4倍，共有25个头，90条腿，鸡和兔各有多少只？",
              "answer": "鸡5只，兔20只",
              "skill": "chicken-rabbit-multiple",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "笼子里原来有蜘蛛和螃蟹，放走8只螃蟹后，剩下46个头、390条腿，原来各有多少只？",
              "answer": "原来有蜘蛛35只，螃蟹19只",
              "skill": "chicken-rabbit-move",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两个笼子里分别装着鸡和兔，第一个笼子里有17个头、60条腿，第二个笼子里有23个头、82条腿，两个笼子里兔相差多少只？",
              "answer": "相差5只",
              "skill": "chicken-rabbit-difference",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U1",
      "grade": 5,
      "semester": "上",
      "unitNo": 1,
      "name": "小数乘法",
      "plugin": "word",
      "arithmeticPlugin": "dec-mul",
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "dec-mul-ten-hundred",
            "dec-mul-tenth-int",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "1.2 × 100 = ______",
              "answer": "120",
              "skill": "dec-mul-ten-hundred",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3.8 × 2 = ______",
              "answer": "7.6",
              "skill": "dec-mul-tenth-int",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔24.7元，买3支一共要多少元？",
              "answer": "74.1元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔11.3元，买3支一共要多少元？",
              "answer": "33.9元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "dec-mul-int-tenth",
            "dec-mul-tenth-tenth",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "3 × 3.4 = ______",
              "answer": "10.2",
              "skill": "dec-mul-int-tenth",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2.5 × 1.7 = ______",
              "answer": "4.25",
              "skill": "dec-mul-tenth-tenth",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔20.9元，买3支一共要多少元？",
              "answer": "62.7元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔4元，买5支一共要多少元？",
              "answer": "20元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "dec-mul-special-quarter",
            "dec-mul-hundredth-tenth",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "0.25 × 8 = ______",
              "answer": "2",
              "skill": "dec-mul-special-quarter",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1.87 × 2.1 = ______",
              "answer": "3.927",
              "skill": "dec-mul-hundredth-tenth",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔72.4元，买5支一共要多少元？",
              "answer": "362元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔78.6元，买4支一共要多少元？",
              "answer": "314.4元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U2",
      "grade": 5,
      "semester": "上",
      "unitNo": 2,
      "name": "位置",
      "plugin": "grid-pairs",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "grid",
      "moduleLabel": "方格与坐标作图 (gridProblems)",
      "moduleFile": "prototype/gridProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-pair",
            "plot-pair",
            "move-pair"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "用数对表示点 A 的位置。",
              "answer": "（2，4）",
              "skill": "read-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在图上标出点 B（6，3）。",
              "answer": "B（6，3）",
              "skill": "plot-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "点 A 向右移动 2 格，新位置用数对怎样表示？",
              "answer": "（6，4）",
              "skill": "move-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "用数对表示点 A 的位置。",
              "answer": "（4，4）",
              "skill": "read-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-pair",
            "plot-pair",
            "move-pair"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "用数对表示点 A 的位置。",
              "answer": "（2，2）",
              "skill": "read-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在图上标出点 B（5，2）。",
              "answer": "B（5，2）",
              "skill": "plot-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "点 A 向右移动 2 格，新位置用数对怎样表示？",
              "answer": "（6，2）",
              "skill": "move-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "用数对表示点 A 的位置。",
              "answer": "（2，4）",
              "skill": "read-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-pair",
            "plot-pair",
            "move-pair"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "用数对表示点 A 的位置。",
              "answer": "（2，5）",
              "skill": "read-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在图上标出点 B（4，5）。",
              "answer": "B（4，5）",
              "skill": "plot-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "点 A 向右移动 4 格，新位置用数对怎样表示？",
              "answer": "（8，4）",
              "skill": "move-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "用数对表示点 A 的位置。",
              "answer": "（3，5）",
              "skill": "read-pair",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U3",
      "grade": 5,
      "semester": "上",
      "unitNo": 3,
      "name": "小数除法",
      "plugin": "word",
      "arithmeticPlugin": "dec-div",
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "dec-div-ten-divisor",
            "dec-div-int-divisor",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "19 ÷ 10 = ______",
              "answer": "1.9",
              "skill": "dec-div-ten-divisor",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8 ÷ 2 = ______",
              "answer": "4",
              "skill": "dec-div-int-divisor",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买4本同样的笔记本共花14.8元，每本多少元？",
              "answer": "3.7元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买4本同样的笔记本共花47.2元，每本多少元？",
              "answer": "11.8元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "dec-div-two-tenth",
            "dec-div-dec-divisor",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "7.2 ÷ 1.2 = ______",
              "answer": "6",
              "skill": "dec-div-two-tenth",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "0.88 ÷ 0.8 = ______",
              "answer": "1.1",
              "skill": "dec-div-dec-divisor",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买4本同样的笔记本共花94元，每本多少元？",
              "answer": "23.5元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买2本同样的笔记本共花9.2元，每本多少元？",
              "answer": "4.6元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "dec-div-special-quarter",
            "dec-div-two-dec",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "2.5 ÷ 0.25 = ______",
              "answer": "10",
              "skill": "dec-div-special-quarter",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "0.352 ÷ 0.16 = ______",
              "answer": "2.2",
              "skill": "dec-div-two-dec",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买6本同样的笔记本共花418.2元，每本多少元？",
              "answer": "69.7元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买6本同样的笔记本共花446.4元，每本多少元？",
              "answer": "74.4元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U4",
      "grade": 5,
      "semester": "上",
      "unitNo": 4,
      "name": "可能性",
      "plugin": "possibility",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "certain",
            "impossible",
            "more-likely",
            "equally-likely"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "袋里只有 26 个白球，任意摸出一个，摸到白球是一定、可能还是不可能？",
              "answer": "一定",
              "skill": "certain",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里有 2 个红球和 5 个白球，任意摸出一个，可能摸到蓝球吗？",
              "answer": "不可能",
              "skill": "impossible",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里有 10 个红球和 5 个白球，任意摸一个，哪种颜色更容易摸到？",
              "answer": "红色",
              "skill": "more-likely",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里红球和黑球各有 24 个，任意摸一个，摸到这两种颜色的可能性相同吗？",
              "answer": "相同",
              "skill": "equally-likely",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "least-likely",
            "count-outcomes",
            "infer-most-color",
            "card-parity-likely"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "盒子里有 23 个红球、5 个黄球和 2 个蓝球，任意摸出一个，摸到哪种颜色球的可能性最小？",
              "answer": "蓝色",
              "skill": "least-likely",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋子里有 87 种不同颜色的球各若干个，任意摸出一个球，按颜色分有多少种可能的结果？",
              "answer": "87 种",
              "skill": "count-outcomes",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒子里有红球和黄球共 39 个，每次摸出一个记录后放回，共摸 30 次，其中红球 23 次、黄球 7 次。盒子里哪种颜色的球可能更多？",
              "answer": "红球",
              "skill": "infer-most-color",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从写有 1 到 199 的数字卡片中任意抽出一张，抽到奇数还是抽到偶数的可能性更大？",
              "answer": "奇数",
              "skill": "card-parity-likely",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "balance-balls-for-fair",
            "min-draws-guarantee",
            "fair-spinner-adjust",
            "odd-even-card-game"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "袋里有 28 个红球和 2 个白球，要使任意摸出一个球是红球和白球的可能性相等，需要再放入多少个白球？",
              "answer": "26 个",
              "skill": "balance-balls-for-fair",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒子里有 59 个红球和 9 个黄球，闭上眼睛至少要摸出多少个球，才能保证一定摸到红球？",
              "answer": "10 个",
              "skill": "min-draws-guarantee",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "转盘平均分成 168 格，其中红色 92 格，蓝色 76 格。要使指针停在红、蓝两色的可能性相等，应把几格红色改成蓝色？",
              "answer": "8 格",
              "skill": "fair-spinner-adjust",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "桌上有数字卡片 15、13、174 共 3 张，任意抽一张，抽到奇数甲赢，抽到偶数乙赢。谁赢的可能性大？",
              "answer": "甲",
              "skill": "odd-even-card-game",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U5",
      "grade": 5,
      "semester": "上",
      "unitNo": 5,
      "name": "简易方程",
      "plugin": "equation",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "eq-minus",
            "eq-times",
            "eq-divide",
            "eq-plus"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "解方程：x − 17 = 4",
              "answer": "x = 21",
              "skill": "eq-minus",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：5x = 65",
              "answer": "x = 13",
              "skill": "eq-times",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x ÷ 3 = 15",
              "answer": "x = 45",
              "skill": "eq-divide",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x + 23 = 33",
              "answer": "x = 10",
              "skill": "eq-plus",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "eq-two-sub",
            "eq-bracket",
            "eq-eval",
            "eq-two-add"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "解方程：8x − 12 = 44",
              "answer": "x = 7",
              "skill": "eq-two-sub",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：2（x + 3）= 80",
              "answer": "x = 37",
              "skill": "eq-bracket",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "当 x = 29 时，代数式 6x + 17 的值是多少？",
              "answer": "191",
              "skill": "eq-eval",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：8x + 18 = 330",
              "answer": "x = 39",
              "skill": "eq-two-add",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "eq-reverse-sub",
            "eq-sum-multiple",
            "eq-diff-multiple",
            "eq-combine-like"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "解方程：62 − 5x = 7",
              "answer": "x = 11",
              "skill": "eq-reverse-sub",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "果园里桃树和梨树共有 711 棵，桃树棵数是梨树的 8 倍。列方程求得梨树有多少棵？",
              "answer": "79棵",
              "skill": "eq-sum-multiple",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "甲数是乙数的 9 倍，甲数比乙数多 384。列方程求得乙数是多少？",
              "answer": "48",
              "skill": "eq-diff-multiple",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：14x − 9x = 80",
              "answer": "x = 16",
              "skill": "eq-combine-like",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U6",
      "grade": 5,
      "semester": "上",
      "unitNo": 6,
      "name": "多边形的面积",
      "plugin": "geo-composite",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 6,
        "medium": 6,
        "hard": 6
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "parallelogram-area",
            "triangle-area",
            "trapezoid-area",
            "split-shape",
            "combine-areas",
            "triangle-find-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中标出的底和高，求平行四边形的面积。",
              "answer": "24 平方厘米",
              "skill": "parallelogram-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标出的底和高，求三角形的面积。",
              "answer": "21 平方厘米",
              "skill": "triangle-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "30 平方厘米",
              "skill": "trapezoid-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "只画一条线，把这个图形分成两个长方形。",
              "answer": "示例见参考图",
              "skill": "split-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "parallelogram-area",
            "triangle-area",
            "trapezoid-area",
            "split-shape",
            "combine-areas",
            "triangle-find-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中标出的底和高，求平行四边形的面积。",
              "answer": "16 平方厘米",
              "skill": "parallelogram-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标出的底和高，求三角形的面积。",
              "answer": "40 平方厘米",
              "skill": "triangle-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "44 平方厘米",
              "skill": "trapezoid-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "只画一条线，把这个图形分成两个长方形。",
              "answer": "示例见参考图",
              "skill": "split-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "parallelogram-area",
            "triangle-area",
            "trapezoid-area",
            "split-shape",
            "combine-areas",
            "triangle-find-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中标出的底和高，求平行四边形的面积。",
              "answer": "40 平方厘米",
              "skill": "parallelogram-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标出的底和高，求三角形的面积。",
              "answer": "80 平方厘米",
              "skill": "triangle-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "36 平方厘米",
              "skill": "trapezoid-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "只画一条线，把这个图形分成两个长方形。",
              "answer": "示例见参考图",
              "skill": "split-shape",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        }
      }
    },
    {
      "id": "G5上-U7",
      "grade": 5,
      "semester": "上",
      "unitNo": 7,
      "name": "数学广角——植树问题",
      "plugin": null,
      "arithmeticPlugin": null,
      "topics": [
        "tree-planting"
      ],
      "maxCount": null,
      "review": false,
      "moduleKey": "engineTopic",
      "moduleLabel": "引擎题材模板 (problemTemplates)",
      "moduleFile": "prototype/engine/problemTemplates/",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "tree-both-ends",
            "tree-circular",
            "tree-one-end"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小强在39米长的路两边种树,每隔3米种一棵,两端都种。共需多少棵树?",
              "answer": "28棵",
              "skill": "tree-both-ends",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明在周长391米的圆形花坛四周种树,每隔17米种一棵。需要多少棵树?",
              "answer": "23棵",
              "skill": "tree-circular",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小红在一条68米的路一侧种树,每隔4米种一棵,只种一端。共需多少棵树?",
              "answer": "17棵",
              "skill": "tree-one-end",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小军在周长294米的圆形花坛四周种树,每隔14米种一棵。需要多少棵树?",
              "answer": "21棵",
              "skill": "tree-circular",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "tree-both-ends",
            "tree-circular",
            "tree-one-end"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小梅在40米长的路两边种树,每隔4米种一棵,两端都种。共需多少棵树?",
              "answer": "22棵",
              "skill": "tree-both-ends",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小红在周长238米的圆形花坛四周种树,每隔17米种一棵。需要多少棵树?",
              "answer": "14棵",
              "skill": "tree-circular",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小刚在一条64米的路一侧种树,每隔8米种一棵,只种一端。共需多少棵树?",
              "answer": "8棵",
              "skill": "tree-one-end",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小军在周长493米的圆形花坛四周种树,每隔17米种一棵。需要多少棵树?",
              "answer": "29棵",
              "skill": "tree-circular",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "tree-circular",
            "tree-one-end",
            "tree-both-ends"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小雪在周长342米的圆形花坛四周种树,每隔19米种一棵。需要多少棵树?",
              "answer": "18棵",
              "skill": "tree-circular",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小芳在一条90米的路一侧种树,每隔10米种一棵,只种一端。共需多少棵树?",
              "answer": "9棵",
              "skill": "tree-one-end",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小梅在52米长的路两边种树,每隔1米种一棵,两端都种。共需多少棵树?",
              "answer": "106棵",
              "skill": "tree-both-ends",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小强在周长391米的圆形花坛四周种树,每隔17米种一棵。需要多少棵树?",
              "answer": "23棵",
              "skill": "tree-circular",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U1",
      "grade": 5,
      "semester": "下",
      "unitNo": 1,
      "name": "观察物体（三）",
      "plugin": "geo-view-3",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "interpret-plan",
            "plan-to-front",
            "build-from-plan"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 拼出这堆图形一共需要几个小正方体？",
              "answer": "3",
              "skill": "interpret-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 从前面看，左右两列分别有几层？",
              "answer": "左列 1 层，右列 1 层",
              "skill": "plan-to-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 请用小正方体摆出这个图形。",
              "answer": "搭法见参考图",
              "skill": "build-from-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 拼出这堆图形一共需要几个小正方体？",
              "answer": "4",
              "skill": "interpret-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "interpret-plan",
            "plan-to-front",
            "build-from-plan"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 拼出这堆图形一共需要几个小正方体？",
              "answer": "3",
              "skill": "interpret-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 从前面看，左右两列分别有几层？",
              "answer": "左列 1 层，右列 3 层",
              "skill": "plan-to-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 请用小正方体摆出这个图形。",
              "answer": "搭法见参考图",
              "skill": "build-from-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 拼出这堆图形一共需要几个小正方体？",
              "answer": "4",
              "skill": "interpret-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "interpret-plan",
            "plan-to-front",
            "build-from-plan"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 拼出这堆图形一共需要几个小正方体？",
              "answer": "4",
              "skill": "interpret-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 从前面看，左右两列分别有几层？",
              "answer": "左列 1 层，右列 1 层",
              "skill": "plan-to-front",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 请用小正方体摆出这个图形。",
              "answer": "搭法见参考图",
              "skill": "build-from-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "俯视图上方是后方，格内数字表示这一格叠了几个小正方体，空白格没有方块。 拼出这堆图形一共需要几个小正方体？",
              "answer": "3",
              "skill": "interpret-plan",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U2",
      "grade": 5,
      "semester": "下",
      "unitNo": 2,
      "name": "因数与倍数",
      "plugin": "factors",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "factor-pair",
            "multiple-basic",
            "even-odd",
            "multiple-five"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "4 × 3 = 12，4 是 12 的因数吗？",
              "answer": "是",
              "skill": "factor-pair",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 × 9 = 54，54 是 6 的倍数吗？",
              "answer": "是",
              "skill": "multiple-basic",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "69 是奇数还是偶数？",
              "answer": "奇数",
              "skill": "even-odd",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "40 是 5 的倍数吗？",
              "answer": "是",
              "skill": "multiple-five",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "list-factors",
            "identify-multiple",
            "prime-or-composite",
            "divisibility"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "写出 40 的所有因数（从小到大）。",
              "answer": "1、2、4、5、8、10、20、40",
              "skill": "list-factors",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "19 是 3 的倍数吗？",
              "answer": "不是",
              "skill": "identify-multiple",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "36 是质数还是合数？",
              "answer": "合数",
              "skill": "prime-or-composite",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "65 同时是 2 和 5 的倍数吗？",
              "answer": "不是",
              "skill": "divisibility",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "common-factor",
            "multiple-two-five",
            "factor-multiple",
            "divisibility-digit"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "写出 5 和 25 的所有公因数（从小到大）。",
              "answer": "1、5",
              "skill": "common-factor",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "写出大于 90 且小于 120，同时是 2 和 5 的倍数的所有数。",
              "answer": "100、110",
              "skill": "multiple-two-five",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个数既是 63 的因数，又是 9 的倍数。请写出所有这样的数（从小到大）。",
              "answer": "9、63",
              "skill": "factor-multiple",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在 97□ 中填一个数字，使这个三位数同时是 2 和 3 的倍数。写出所有符合条件的数字。",
              "answer": "2、8",
              "skill": "divisibility-digit",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U3",
      "grade": 5,
      "semester": "下",
      "unitNo": 3,
      "name": "长方体和正方体",
      "plugin": "geo-cuboid",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "cuboid-volume",
            "cuboid-surface",
            "opposite-face"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "100 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方体六个面的总面积。",
              "answer": "126 平方厘米",
              "skill": "cuboid-surface",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "把这个展开图折成正方体，与 A 面相对的是哪个面？",
              "answer": "C 面",
              "skill": "opposite-face",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "24 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "cuboid-volume",
            "cuboid-surface",
            "opposite-face"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "126 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方体六个面的总面积。",
              "answer": "136 平方厘米",
              "skill": "cuboid-surface",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "把这个展开图折成正方体，与 A 面相对的是哪个面？",
              "answer": "C 面",
              "skill": "opposite-face",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "28 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "cuboid-volume",
            "cuboid-edge-sum",
            "opposite-face"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "108 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注的长、宽、高，求这个长方体12条棱的总长度。",
              "answer": "60 厘米",
              "skill": "cuboid-edge-sum",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "把这个展开图折成正方体，与 A 面相对的是哪个面？",
              "answer": "C 面",
              "skill": "opposite-face",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "700 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U4",
      "grade": 5,
      "semester": "下",
      "unitNo": 4,
      "name": "分数的意义和性质",
      "plugin": "fraction-properties",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-div-relation",
            "fraction-unit-name",
            "equivalent-fractions",
            "fraction-to-decimal"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "用分数表示除法算式的商：4 ÷ 12 = ______（不约分）。",
              "answer": "4/12",
              "skill": "frac-div-relation",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "分数 5/70 的分数单位是多少？",
              "answer": "1/70",
              "skill": "fraction-unit-name",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2/11 = ______/55。",
              "answer": "10",
              "skill": "equivalent-fractions",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 67/100 化成小数。",
              "answer": "0.67",
              "skill": "fraction-to-decimal",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "simplify-fraction",
            "common-denominator",
            "improper-to-mixed",
            "share-rope-length"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把 45/207 约成最简分数。",
              "answer": "5/23",
              "skill": "simplify-fraction",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 9/18 通分成分母是 90 的分数。",
              "answer": "45/90",
              "skill": "common-denominator",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把假分数 182/20 化成带分数，整数部分是 9，分数部分最简形式是多少？",
              "answer": "1/10",
              "skill": "improper-to-mixed",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 4 米长的绳子平均分成 18 段，每段长多少米（用最简分数表示）？",
              "answer": "2/9 米",
              "skill": "share-rope-length",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "invariant-property-add",
            "find-fraction-by-sum",
            "share-rope-ratio",
            "max-proper-diff"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把分数 5/18 的分子加上 30，要使分数的大小不变，分母应该加上多少？",
              "answer": "108",
              "skill": "invariant-property-add",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个分数约分后是 1/6，已知原分数的分子与分母的和是 189，原分数是多少？",
              "answer": "27/162",
              "skill": "find-fraction-by-sum",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 24 米长的铁丝平均截成 11 段，每段占全长的几分之几？",
              "answer": "1/11",
              "skill": "share-rope-ratio",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "分母是 79 的最大真分数与最小假分数相差多少（写最简分数）？",
              "answer": "1/79",
              "skill": "max-proper-diff",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U5",
      "grade": 5,
      "semester": "下",
      "unitNo": 5,
      "name": "图形的运动（三）",
      "plugin": "grid-motion-3",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "grid",
      "moduleLabel": "方格与坐标作图 (gridProblems)",
      "moduleFile": "prototype/gridProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "rotate-clockwise",
            "track-rotated-point",
            "read-rotation"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "画出三角形绕 O 点顺时针旋转 90° 后的图形。",
              "answer": "见参考图",
              "skill": "rotate-clockwise",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "三角形绕 O 点逆时针旋转 90°，点 A 的对应点在 O 的哪一侧？离 O 几格？",
              "answer": "上方 2 格",
              "skill": "track-rotated-point",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "以 O 为旋转中心，原图（实线）怎样旋转得到虚线图形？",
              "answer": "顺时针旋转 90°",
              "skill": "read-rotation",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形绕 O 点顺时针旋转 90° 后的图形。",
              "answer": "见参考图",
              "skill": "rotate-clockwise",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "rotate-clockwise",
            "track-rotated-point",
            "read-rotation"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "画出三角形绕 O 点顺时针旋转 90° 后的图形。",
              "answer": "见参考图",
              "skill": "rotate-clockwise",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "三角形绕 O 点逆时针旋转 90°，点 A 的对应点在 O 的哪一侧？离 O 几格？",
              "answer": "左侧 1 格",
              "skill": "track-rotated-point",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "以 O 为旋转中心，原图（实线）怎样旋转得到虚线图形？",
              "answer": "顺时针旋转 90°",
              "skill": "read-rotation",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形绕 O 点顺时针旋转 90° 后的图形。",
              "answer": "见参考图",
              "skill": "rotate-clockwise",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "rotate-clockwise",
            "track-rotated-point",
            "read-rotation"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "画出三角形绕 O 点顺时针旋转 90° 后的图形。",
              "answer": "见参考图",
              "skill": "rotate-clockwise",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "三角形绕 O 点逆时针旋转 90°，点 A 的对应点在 O 的哪一侧？离 O 几格？",
              "answer": "上方 2 格",
              "skill": "track-rotated-point",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "以 O 为旋转中心，原图（实线）怎样旋转得到虚线图形？",
              "answer": "顺时针旋转 90°",
              "skill": "read-rotation",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出三角形绕 O 点顺时针旋转 90° 后的图形。",
              "answer": "见参考图",
              "skill": "rotate-clockwise",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U6",
      "grade": 5,
      "semester": "下",
      "unitNo": 6,
      "name": "分数的加法和减法",
      "plugin": "fraction-addsub",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "same-denom-simplify",
            "same-denom-sub-simplify",
            "whole-minus-frac-basic",
            "same-denom-story"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "同分母分数相加并约成最简分数：4/88 + 4/88 = ______。",
              "answer": "1/11",
              "skill": "same-denom-simplify",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "同分母分数相减并约成最简分数：6/66 − 3/66 = ______。",
              "answer": "1/22",
              "skill": "same-denom-sub-simplify",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1 − 2/22 = ______（写最简分数）",
              "answer": "10/11",
              "skill": "whole-minus-frac-basic",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一块菜地，种茄子占 5/68，种黄瓜占 2/68，两种菜共占这块地的几分之几（不约分）？",
              "answer": "7/68",
              "skill": "same-denom-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unlike-subtract",
            "unlike-add",
            "fraction-sum-story",
            "fraction-remainder"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1/6 − 1/18 = ______（结果约成最简分数）",
              "answer": "1/9",
              "skill": "unlike-subtract",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1/6 + 1/20 = ______（结果约成最简分数）",
              "answer": "13/60",
              "skill": "unlike-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "上午读了全书的 1/3，下午读了全书的 1/17。一共读了全书的几分之几？",
              "answer": "20/51",
              "skill": "fraction-sum-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "先用去总量的 1/2，又用去总量的 1/12。还剩总量的几分之几？",
              "answer": "5/12",
              "skill": "fraction-remainder",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-solve-equation",
            "frac-assoc-simplify",
            "frac-exceed-plan",
            "frac-three-parts-remain"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "解方程：x + 1/16 = 7/6，x = ______（结果约成最简分数）。",
              "answer": "53/48",
              "skill": "frac-solve-equation",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用简便方法计算：8/19 + 1/5 + 11/19 = ______（写假分数形式）。",
              "answer": "6/5",
              "skill": "frac-assoc-simplify",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "修路队修一条路，上半月修了全长的 15/16，下半月修了全长的 3/16，全月实际比原计划多修了全长的几分之几（写最简分数）？",
              "answer": "1/8",
              "skill": "frac-exceed-plan",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根竹竿长 54 米，第一次截去 5/15 米，第二次截去 10/15 米，还剩多少米？",
              "answer": "53 米",
              "skill": "frac-three-parts-remain",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U7",
      "grade": 5,
      "semester": "下",
      "unitNo": 7,
      "name": "折线统计图",
      "plugin": "line-chart",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 8,
        "medium": 8,
        "hard": 8
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target",
            "rising-intervals"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "周二收集了多少张？",
              "answer": "19",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "周一和周三合计收集了多少张？",
              "answer": "54",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "周四和周三收集的数量相差多少张？",
              "answer": "21",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "周三最多，周一最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target",
            "rising-intervals"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "周二收集了多少张？",
              "answer": "52",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "周一和周三合计收集了多少张？",
              "answer": "64",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "周四和周三收集的数量相差多少张？",
              "answer": "18",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "周二最多，周三最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-value",
            "combine-values",
            "compare-values",
            "find-extrema",
            "total",
            "threshold",
            "target",
            "rising-intervals"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "周二收集了多少张？",
              "answer": "60",
              "skill": "read-value",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "周一和周三合计收集了多少张？",
              "answer": "125",
              "skill": "combine-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "周四和周三收集的数量相差多少张？",
              "answer": "100",
              "skill": "compare-values",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "收集最多和最少的分别是哪一项？如果并列，请都写出来。",
              "answer": "周二最多，周一最少",
              "skill": "find-extrema",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G5下-U8",
      "grade": 5,
      "semester": "下",
      "unitNo": 8,
      "name": "数学广角——找次品",
      "plugin": "counterfeit",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "weigh-once",
            "divide-into-three",
            "two-items-weigh",
            "balance-equal-group"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "编号 45、46、47 的三袋物品中有一袋偏轻。用天平称前两袋，第一袋较轻。哪一袋偏轻？",
              "answer": "45",
              "skill": "weigh-once",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 87 袋物品，只有一袋偏轻。先平均分成三组比较，每组几袋？",
              "answer": "29",
              "skill": "divide-into-three",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 37 号和 38 号两枚硬币，其中一枚偏轻，用天平至少称几次一定能找出次品？",
              "answer": "1",
              "skill": "two-items-weigh",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 91 个零件分成（45，45，1）三组，称前两组时天平平衡，次品在第几组？",
              "answer": "3",
              "skill": "balance-equal-group",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "identify-suspects",
            "optimal-partition",
            "minimum-weighings",
            "lighter-or-heavier"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "将编号 1 到 6 的物品依次分成三份，每份 2 件。已知有一件偏轻，称第一、二份时第二份较轻。哪些编号仍可能是次品？",
              "answer": "3 至 4",
              "skill": "identify-suspects",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 130 个零件，其中 1 个偏重。第一次按最优策略分成 3 份，最多的一份有几个零件？",
              "answer": "44",
              "skill": "optimal-partition",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 27 个外表相同的零件，只有一个偏轻，用天平最坏情况下要称几次才能找到？",
              "answer": "3",
              "skill": "minimum-weighings",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "天平左盘放 86 号球，右盘放 87 号球，已知其中一个是偏重的次品。若左盘下沉，次品是几号球？",
              "answer": "86",
              "skill": "lighter-or-heavier",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "max-items-for-k-weighs",
            "find-weighs-from-count",
            "first-weigh-remaining",
            "second-weigh-count"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "已知次品比正品略轻，用无砝码天平称 5 次，最多可以从多少个物品中保证找出这件次品？",
              "answer": "243",
              "skill": "max-items-for-k-weighs",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 73 个外观相同的零件，已知有 1 个次品偏轻，用天平至少称几次一定能找出次品？",
              "answer": "4",
              "skill": "find-weighs-from-count",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 140 个零件（1 个偏轻），第一次按（47，47，46）分成三组称前两组，若天平不平衡，接下来还在几个零件中继续找？",
              "answer": "47",
              "skill": "first-weigh-remaining",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 112 个零件（1 个偏重），第一次按（37，37，38）称前两组且天平平衡；第二次把剩下的 38 个零件再最优分成三份，最多的一份有几个？",
              "answer": "13",
              "skill": "second-weigh-count",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U1",
      "grade": 6,
      "semester": "上",
      "unitNo": 1,
      "name": "分数乘法",
      "plugin": "word",
      "arithmeticPlugin": "frac-mul",
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-mul-int-cancel",
            "frac-mul-int-simple",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "1/12 × 12 = ______",
              "answer": "1",
              "skill": "frac-mul-int-cancel",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4/6 × 5 = ______",
              "answer": "10/3",
              "skill": "frac-mul-int-simple",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重6千克，倒出它的1/3，还剩多少千克？",
              "answer": "4千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重12千克，倒出它的1/2，还剩多少千克？",
              "answer": "6千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-mul-frac-cancel",
            "frac-mul-frac-basic",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "2/15 × 5/7 = ______",
              "answer": "2/21",
              "skill": "frac-mul-frac-cancel",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2/5 × 3/7 = ______",
              "answer": "6/35",
              "skill": "frac-mul-frac-basic",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重10千克，倒出它的3/5，还剩多少千克？",
              "answer": "4千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重20千克，倒出它的3/4，还剩多少千克？",
              "answer": "5千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-mul-cross-cancel",
            "frac-mul-three-terms",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "7/9 × 3/12 = ______",
              "answer": "7/36",
              "skill": "frac-mul-cross-cancel",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1/2 × 2/3 × 3/4 = ______",
              "answer": "1/4",
              "skill": "frac-mul-three-terms",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根绳子长20米，用去了它的2/4，用去了多少米？",
              "answer": "10米",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6/7 × 4/11 = ______",
              "answer": "24/77",
              "skill": "frac-mul-cross-cancel",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U2",
      "grade": 6,
      "semester": "上",
      "unitNo": 2,
      "name": "位置与方向（二）",
      "plugin": "grid-bearing",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "grid",
      "moduleLabel": "方格与坐标作图 (gridProblems)",
      "moduleFile": "prototype/gridProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-bearing",
            "plot-bearing",
            "return-distance"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。",
              "answer": "正东",
              "skill": "read-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "B 在 A 的正北方向 100 米处。每小格边长代表 100 米，请用直尺在图上标出 B。",
              "answer": "正北方向 100 米",
              "skill": "plot-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "沿图中线段从 A 到 B 后原路返回，一共走多少米？",
              "answer": "400 米",
              "skill": "return-distance",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。",
              "answer": "东偏北45°",
              "skill": "read-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-bearing",
            "plot-bearing",
            "return-distance"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。",
              "answer": "正北",
              "skill": "read-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "B 在 A 的西偏南45°方向 100 米处。每小格边长代表 100 米，请用直尺在图上标出 B。",
              "answer": "西偏南45°方向 100 米",
              "skill": "plot-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "沿图中线段从 A 到 B 后原路返回，一共走多少米？",
              "answer": "600 米",
              "skill": "return-distance",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。",
              "answer": "西偏北45°",
              "skill": "read-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "read-bearing",
            "plot-bearing",
            "return-distance"
          ],
          "formats": [
            "grid"
          ],
          "samples": [
            {
              "question": "从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。",
              "answer": "正西",
              "skill": "read-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "B 在 A 的正东方向 200 米处。每小格边长代表 100 米，请用直尺在图上标出 B。",
              "answer": "正东方向 200 米",
              "skill": "plot-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "沿图中线段从 A 到 B 后原路返回，一共走多少米？",
              "answer": "200 米",
              "skill": "return-distance",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从 A 看，B 在什么方向？斜向位置请以正东或正西为基准。",
              "answer": "西偏南45°",
              "skill": "read-bearing",
              "format": "grid",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U3",
      "grade": 6,
      "semester": "上",
      "unitNo": 3,
      "name": "分数除法",
      "plugin": "fraction-division",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "reciprocal-find",
            "fraction-divide",
            "fraction-division-story",
            "divide-by-fraction"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "写出分数 6/16 的倒数。",
              "answer": "8/3",
              "skill": "reciprocal-find",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1/6 ÷ 5 = ______",
              "answer": "1/30",
              "skill": "fraction-divide",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "25 米彩带，每 1/5 米剪一段，可剪几段？",
              "answer": "125",
              "skill": "fraction-division-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "62 ÷ 1/2 = ______",
              "answer": "124",
              "skill": "divide-by-fraction",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-div-frac",
            "fraction-original",
            "frac-speed-problem",
            "frac-solve-eq"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "9/18 ÷ 7/18 = ______（写最简分数）",
              "answer": "9/7",
              "skill": "frac-div-frac",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一条绳子的 3/11 长 9 米，全长多少米？",
              "answer": "33 米",
              "skill": "fraction-original",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小敏 8/22 小时走了 40 千米，她平均每小时走多少千米？",
              "answer": "110 千米",
              "skill": "frac-speed-problem",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：5/16 x = 20，x = ______。",
              "answer": "64",
              "skill": "frac-solve-eq",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "frac-known-more",
            "frac-known-less",
            "frac-work-together",
            "frac-sum-ratio-find"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "果园里有桃树 84 棵，比梨树多 1/20。果园里有梨树多少棵？",
              "answer": "80 棵",
              "skill": "frac-known-more",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件上衣现价 152 元，比原价降低了 1/20。这件上衣原价多少元？",
              "answer": "160 元",
              "skill": "frac-known-less",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "第 89 号工程，甲队独做 72 天完成，乙队独做 9 天完成。两队合做多少天可以完成？",
              "answer": "8 天",
              "skill": "frac-work-together",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "甲、乙两数的和是 224，其中甲数是乙数的 9/19。乙数是多少？",
              "answer": "152",
              "skill": "frac-sum-ratio-find",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U4",
      "grade": 6,
      "semester": "上",
      "unitNo": 4,
      "name": "比",
      "plugin": null,
      "arithmeticPlugin": null,
      "topics": [
        "ratio"
      ],
      "maxCount": null,
      "review": false,
      "moduleKey": "engineTopic",
      "moduleLabel": "引擎题材模板 (problemTemplates)",
      "moduleFile": "prototype/engine/problemTemplates/",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "ratio-partnership",
            "ratio-scale",
            "ratio-combine",
            "ratio-distribute"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小刚和小军按1:3合伙做生意,赚了40元,小刚分多少?",
              "answer": "小刚10元,小军30元",
              "skill": "ratio-partnership",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小雪按1:3分糖,甲得了3个,乙得了几个?一共几个?",
              "answer": "乙9个,一共12个",
              "skill": "ratio-scale",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小梅第一次把21颗糖按5:2分给甲乙,第二次把18颗糖按5:4分给甲乙,两次合起来甲乙分到的糖的比是多少?",
              "answer": "25:14",
              "skill": "ratio-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "大伟有9个糖,按2:1分给甲乙两人,甲得几个?",
              "answer": "6个",
              "skill": "ratio-distribute",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "ratio-combine",
            "ratio-scale",
            "ratio-distribute",
            "ratio-partnership"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小刚第一次把18颗糖按2:4分给甲乙,第二次把30颗糖按2:4分给甲乙,两次合起来甲乙分到的糖的比是多少?",
              "answer": "1:2",
              "skill": "ratio-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小强按1:2分糖,甲得了10个,乙得了几个?一共几个?",
              "answer": "乙20个,一共30个",
              "skill": "ratio-scale",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小红有12个糖,按1:2分给甲乙两人,甲得几个?",
              "answer": "4个",
              "skill": "ratio-distribute",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明和小强按5:9合伙做生意,赚了434元,小明分多少?",
              "answer": "小明155元,小强279元",
              "skill": "ratio-partnership",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "ratio-partnership",
            "ratio-distribute",
            "ratio-scale",
            "ratio-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小玲和小刚按1:3合伙做生意,赚了96元,小玲分多少?",
              "answer": "小玲24元,小刚72元",
              "skill": "ratio-partnership",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明有12个糖,按1:2分给甲乙两人,甲得几个?",
              "answer": "4个",
              "skill": "ratio-distribute",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小华按4:3分糖,甲得了36个,乙得了几个?一共几个?",
              "answer": "乙27个,一共63个",
              "skill": "ratio-scale",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小芳第一次把27颗糖按5:4分给甲乙,第二次把16颗糖按3:5分给甲乙,两次合起来甲乙分到的糖的比是多少?",
              "answer": "21:22",
              "skill": "ratio-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U5",
      "grade": 6,
      "semester": "上",
      "unitNo": 5,
      "name": "圆",
      "plugin": "geo-circle",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 6,
        "medium": 6,
        "hard": 6
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "circle-circumference",
            "circle-area",
            "identify-segment",
            "diameter-to-radius",
            "draw-radius",
            "radius-to-diameter"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中半径，求圆的周长。π 取 3.14。",
              "answer": "43.96 厘米",
              "skill": "circle-circumference",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中半径，求圆的面积。π 取 3.14。",
              "answer": "113.04 平方厘米",
              "skill": "circle-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中画出的线段是半径还是直径？",
              "answer": "半径",
              "skill": "identify-segment",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中标出直径的长度，求这个圆的半径。",
              "answer": "7 厘米",
              "skill": "diameter-to-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "circle-circumference",
            "circle-area",
            "identify-segment",
            "diameter-to-radius",
            "draw-radius",
            "radius-to-diameter"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中半径，求圆的周长。π 取 3.14。",
              "answer": "62.80 厘米",
              "skill": "circle-circumference",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中半径，求圆的面积。π 取 3.14。",
              "answer": "153.86 平方厘米",
              "skill": "circle-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中画出的线段是半径还是直径？",
              "answer": "直径",
              "skill": "identify-segment",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中标出直径的长度，求这个圆的半径。",
              "answer": "10 厘米",
              "skill": "diameter-to-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "circle-circumference",
            "circle-area",
            "identify-segment",
            "diameter-to-radius",
            "draw-radius",
            "radius-to-diameter"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中半径，求圆的周长。π 取 3.14。",
              "answer": "100.48 厘米",
              "skill": "circle-circumference",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中半径，求圆的面积。π 取 3.14。",
              "answer": "200.96 平方厘米",
              "skill": "circle-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中画出的线段是半径还是直径？",
              "answer": "直径",
              "skill": "identify-segment",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "图中标出直径的长度，求这个圆的半径。",
              "answer": "16 厘米",
              "skill": "diameter-to-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U6",
      "grade": 6,
      "semester": "上",
      "unitNo": 6,
      "name": "百分数（一）",
      "plugin": "percent",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "pct-to-dec",
            "find-pct-basic",
            "pct-of-num"
          ],
          "formats": [
            "fill",
            "application"
          ],
          "samples": [
            {
              "question": "把百分数 95% 化成小数是______。",
              "answer": "0.95",
              "skill": "pct-to-dec",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷共收到50份答卷，其中20份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "40%",
              "skill": "find-pct-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "40的40%是______。",
              "answer": "16",
              "skill": "pct-of-num",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把百分数 71% 化成小数是______。",
              "answer": "0.71",
              "skill": "pct-to-dec",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "find-pct",
            "find-total",
            "pct-of-num"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "一次问卷共收到200份答卷，其中50份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "25%",
              "skill": "find-pct",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷中，有96份答卷选择步行，占总数的60%。一共收到多少份答卷？",
              "answer": "160份",
              "skill": "find-total",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "30的50%是______。",
              "answer": "15",
              "skill": "pct-of-num",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷共收到110份答卷，其中88份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "80%",
              "skill": "find-pct",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "pct-interest",
            "pct-discount",
            "pct-growth"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "王叔叔把2900元存入银行，年利率是2%，存期3年，到期时一共可取回本息多少元？",
              "answer": "3074元",
              "skill": "pct-interest",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件外套原价400元，商场促销打7折出售，现价是______元。",
              "answer": "280元",
              "skill": "pct-discount",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "某果园去年产苹果500吨，今年产苹果900吨，今年比去年增产了百分之几？",
              "answer": "80%",
              "skill": "pct-growth",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "王叔叔把4600元存入银行，年利率是2%，存期1年，到期时一共可取回本息多少元？",
              "answer": "4692元",
              "skill": "pct-interest",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U7",
      "grade": 6,
      "semester": "上",
      "unitNo": 7,
      "name": "扇形统计图",
      "plugin": "pie-chart",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "diagram",
      "moduleLabel": "钟表与统计图表 (diagramProblems)",
      "moduleFile": "prototype/diagramProblems.js",
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 10,
        "medium": 10,
        "hard": 10
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-share",
            "combine-shares",
            "share-to-count",
            "rank-shares",
            "remaining-share",
            "compare-shares",
            "count-to-total",
            "count-to-count",
            "count-difference",
            "share-threshold"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "科普书占借阅总数的百分之几？",
              "answer": "25%",
              "skill": "read-share",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "故事书与历史书合计占借阅总数的百分之几？",
              "answer": "30%",
              "skill": "combine-shares",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一共借出 380 本书，其中有多少本艺术书？",
              "answer": "76 本",
              "skill": "share-to-count",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪类书借得最多？如果并列，请都写出来。",
              "answer": "科普",
              "skill": "rank-shares",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-share",
            "combine-shares",
            "share-to-count",
            "rank-shares",
            "remaining-share",
            "compare-shares",
            "count-to-total",
            "count-to-count",
            "count-difference",
            "share-threshold"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "科普书占借阅总数的百分之几？",
              "answer": "25%",
              "skill": "read-share",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "故事书与历史书合计占借阅总数的百分之几？",
              "answer": "25%",
              "skill": "combine-shares",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一共借出 280 本书，其中有多少本艺术书？",
              "answer": "56 本",
              "skill": "share-to-count",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪类书借得最多？如果并列，请都写出来。",
              "answer": "科普",
              "skill": "rank-shares",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "read-share",
            "combine-shares",
            "share-to-count",
            "rank-shares",
            "remaining-share",
            "compare-shares",
            "count-to-total",
            "count-to-count",
            "count-difference",
            "share-threshold"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "科普书占借阅总数的百分之几？",
              "answer": "35%",
              "skill": "read-share",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "故事书与历史书合计占借阅总数的百分之几？",
              "answer": "45%",
              "skill": "combine-shares",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "一共借出 200 本书，其中有多少本艺术书？",
              "answer": "30 本",
              "skill": "share-to-count",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "哪类书借得最多？如果并列，请都写出来。",
              "answer": "历史",
              "skill": "rank-shares",
              "format": "application",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6上-U8",
      "grade": 6,
      "semester": "上",
      "unitNo": 8,
      "name": "数学广角——数与形",
      "plugin": "number-shape",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "square-dot-total",
            "square-dot-side",
            "first-n-odd-sum",
            "triangle-matchsticks"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "第 1 层有 1 个点。每添一层依次增加 3、5、7……个点。添到第 28 层共有多少个点？",
              "answer": "784",
              "skill": "square-dot-total",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用 484 个点刚好排成实心正方形，每行有几个点？",
              "answer": "22",
              "skill": "square-dot-side",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从 1 开始的连续 45 个奇数相加（1 + 3 + 5 + …），和是多少？",
              "answer": "2025",
              "skill": "first-n-odd-sum",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用火柴棒摆独立三角形，摆 1 个用 3 根，摆 28 个独立三角形一共要用多少根？",
              "answer": "84",
              "skill": "triangle-matchsticks",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "square-border",
            "odd-sum",
            "connected-triangles",
            "connected-squares"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把 11 行 11 列的方阵扩成 12 行 12 列，要增加多少个点？",
              "answer": "23",
              "skill": "square-border",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从第 7 个奇数到第 10 个奇数（首尾都算）相加，和是多少？",
              "answer": "64",
              "skill": "odd-sum",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用火柴棒连着摆一排三角形，摆 1 个用 3 根，摆 2 个用 5 根……摆 28 个这样的三角形需要多少根火柴棒？",
              "answer": "57",
              "skill": "connected-triangles",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用小棒连着摆一排正方形，摆 1 个用 4 根，摆 2 个用 7 根……摆 96 个这样的正方形需要多少根小棒？",
              "answer": "289",
              "skill": "connected-squares",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "table-seating-forward",
            "table-seating-reverse",
            "hollow-frame-dots",
            "pythagorean-square-diff"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1 张方桌坐 4 人，2 张方桌拼成一排坐 6 人，3 张拼成一排坐 8 人……22 张方桌拼成一排一共可以坐多少人？",
              "answer": "46",
              "skill": "table-seating-forward",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "按“1 张方桌坐 4 人，每多拼 1 张多坐 2 人”的规律，要坐下 114 人，需要把多少张方桌拼成一排？",
              "answer": "56",
              "skill": "table-seating-reverse",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一个实心方阵每边有 91 个点，拿走中心 83 行 83 列的点后，外圈还剩多少个点？",
              "answer": "1392",
              "skill": "hollow-frame-dots",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "利用数形结合计算平方差：81² − 74² = ______。",
              "answer": "1085",
              "skill": "pythagorean-square-diff",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6下-U1",
      "grade": 6,
      "semester": "下",
      "unitNo": 1,
      "name": "负数",
      "plugin": "negative",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "pos-neg-meaning",
            "compare-basic",
            "neg-write"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "如果向东走5米记作+5米，那么向西走11米应记作______米。",
              "answer": "-11",
              "skill": "pos-neg-meaning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "比较大小：-8 和 -4，哪个数更大？",
              "answer": "-4",
              "skill": "compare-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "零下5摄氏度记作______℃，零上2摄氏度记作+2℃。",
              "answer": "-5",
              "skill": "neg-write",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "如果向东走12米记作+12米，那么向西走10米应记作______米。",
              "answer": "-10",
              "skill": "pos-neg-meaning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "rise",
            "diff",
            "compare"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "早上气温是-5℃，中午比早上升高了5℃，中午的气温是多少？",
              "answer": "0℃",
              "skill": "rise",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "某地某天最高气温15℃，最低气温-8℃，这天的温差是多少？",
              "answer": "23℃",
              "skill": "diff",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "比较大小：-6 和 -12，哪个数更大？",
              "answer": "-6",
              "skill": "compare",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "早上气温是-1℃，中午比早上升高了4℃，中午的气温是多少？",
              "answer": "3℃",
              "skill": "rise",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "std-weight-offset",
            "multi-step-move",
            "number-line-dist"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "一袋饼干标准净重为130克，超过标准记为正，不足记为负。质检记作-8克，这袋饼干实际重多少克？",
              "answer": "122克",
              "skill": "std-weight-offset",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "潜水艇在海平面以下270米处（记作-270米），先上升80米，又下潜50米，现在位置记作多少米？",
              "answer": "-240米",
              "skill": "multi-step-move",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在数轴上，表示-9的点与表示+16的点之间相距多少个单位长度？",
              "answer": "25",
              "skill": "number-line-dist",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一袋饼干标准净重为390克，超过标准记为正，不足记为负。质检记作-5克，这袋饼干实际重多少克？",
              "answer": "385克",
              "skill": "std-weight-offset",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6下-U2",
      "grade": 6,
      "semester": "下",
      "unitNo": 2,
      "name": "百分数（二）",
      "plugin": null,
      "arithmeticPlugin": null,
      "topics": [
        "discount"
      ],
      "maxCount": null,
      "review": false,
      "moduleKey": "engineTopic",
      "moduleLabel": "引擎题材模板 (problemTemplates)",
      "moduleFile": "prototype/engine/problemTemplates/",
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "discount-single",
            "discount-stack",
            "discount-buy-get"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "一件文具原价68元,现在打7折,现价多少元?",
              "answer": "48元",
              "skill": "discount-single",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件水果原价271元,先打8折,再参加满350减70的活动,实际付多少元?",
              "answer": "133元",
              "skill": "discount-stack",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "超市玩具每22元,买7送1。小明想买17件玩具,最少付多少钱?",
              "answer": "330元",
              "skill": "discount-buy-get",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件水果原价97元,现在打5折,现价多少元?",
              "answer": "49元",
              "skill": "discount-single",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "discount-buy-get",
            "discount-stack",
            "discount-single"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "超市服装每38元,买7送1。小明想买16件服装,最少付多少钱?",
              "answer": "532元",
              "skill": "discount-buy-get",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件零食原价305元,先打9折,再参加满175减35的活动,实际付多少元?",
              "answer": "224元",
              "skill": "discount-stack",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件水果原价65元,现在打7折,现价多少元?",
              "answer": "42元",
              "skill": "discount-single",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件零食原价383元,先打8折,再参加满130减26的活动,实际付多少元?",
              "answer": "280元",
              "skill": "discount-stack",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "discount-stack",
            "discount-buy-get",
            "discount-single"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "一件零食原价347元,先打7折,再参加满350减70的活动,实际付多少元?",
              "answer": "156元",
              "skill": "discount-stack",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "超市电器每31元,买5送1。小明想买13件电器,最少付多少钱?",
              "answer": "341元",
              "skill": "discount-buy-get",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一件零食原价66元,现在打5折,现价多少元?",
              "answer": "33元",
              "skill": "discount-single",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "超市文具每32元,买9送1。小明想买18件文具,最少付多少钱?",
              "answer": "544元",
              "skill": "discount-buy-get",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6下-U3",
      "grade": 6,
      "semester": "下",
      "unitNo": 3,
      "name": "圆柱与圆锥",
      "plugin": "geo-cylinder",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": 6,
      "review": false,
      "moduleKey": "geometry",
      "moduleLabel": "几何与视图专项 (geometryProblems)",
      "moduleFile": "prototype/geometryProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "cylinder-volume",
            "cone-volume",
            "mark-cone-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中标注，求圆柱体积。π 取 3.14。",
              "answer": "423.90 立方厘米",
              "skill": "cylinder-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标注，求圆锥体积。π 取 3.14。",
              "answer": "392.50 立方厘米",
              "skill": "cone-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出图中圆锥的高。",
              "answer": "从顶点垂直连到底面圆心",
              "skill": "mark-cone-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "根据图中标注，求圆柱体积。π 取 3.14。",
              "answer": "113.04 立方厘米",
              "skill": "cylinder-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "cylinder-volume",
            "cone-volume",
            "mark-cone-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中标注，求圆柱体积。π 取 3.14。",
              "answer": "593.46 立方厘米",
              "skill": "cylinder-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标注，求圆锥体积。π 取 3.14。",
              "answer": "56.52 立方厘米",
              "skill": "cone-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出图中圆锥的高。",
              "answer": "从顶点垂直连到底面圆心",
              "skill": "mark-cone-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "根据图中标注，求圆柱体积。π 取 3.14。",
              "answer": "471.00 立方厘米",
              "skill": "cylinder-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 6,
          "targetCount": 6,
          "skills": [
            "cylinder-lateral-area",
            "cone-volume",
            "mark-cone-height"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中标注，求圆柱的侧面积。π 取 3.14。",
              "answer": "263.76 平方厘米",
              "skill": "cylinder-lateral-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标注，求圆锥体积。π 取 3.14。",
              "answer": "141.30 立方厘米",
              "skill": "cone-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "画出图中圆锥的高。",
              "answer": "从顶点垂直连到底面圆心",
              "skill": "mark-cone-height",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "根据图中标注，求圆柱的侧面积。π 取 3.14。",
              "answer": "1036.20 平方厘米",
              "skill": "cylinder-lateral-area",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6下-U4",
      "grade": 6,
      "semester": "下",
      "unitNo": 4,
      "name": "比例",
      "plugin": "proportion",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "scope",
      "moduleLabel": "课标范围专项 (scopeProblems)",
      "moduleFile": "prototype/scopeProblems.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 4,
        "medium": 4,
        "hard": 4
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "proportion-check",
            "direct-proportion",
            "inverse-proportion",
            "outer-inner-product"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "判断：3∶4 和 9∶13 能否组成比例？",
              "answer": "不能",
              "skill": "proportion-check",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每本练习本 32 元。买 2 本和买 6 本时，总价与本数成正比例还是反比例？",
              "answer": "正比例",
              "skill": "direct-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "同一段路以每小时 49 千米的速度走需 9 小时。路程一定时，速度和时间成什么比例？",
              "answer": "反比例",
              "skill": "inverse-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在一个比例中，两个内项分别是 5 和 54，则两个外项的积是多少？",
              "answer": "270",
              "skill": "outer-inner-product",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "solve-proportion",
            "map-scale",
            "find-other-outer",
            "scale-find-map"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "解比例：x∶4 = 81∶9。",
              "answer": "36",
              "skill": "solve-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "比例尺 1∶9000 的图上量得 2 厘米，实际距离多少米？",
              "answer": "180 米",
              "skill": "map-scale",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在一个比例里，两个内项的积是 275，其中一个外项是 5，另一个外项是多少？",
              "answer": "55",
              "skill": "find-other-outer",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "实际距离是 160 米，画在比例尺是 1∶2000 的地图上，图上距离是多少厘米？",
              "answer": "8 厘米",
              "skill": "scale-find-map",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "scale-area-expand",
            "shadow-height-prop",
            "gear-teeth-inverse",
            "paving-tiles-inverse"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "把一个长 46 厘米、宽 4 厘米的长方形按 6∶1 放大后，新长方形的面积是多少平方厘米？",
              "answer": "6624 平方厘米",
              "skill": "scale-area-expand",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "同一时刻同一地点，高 4 米的竹竿影长 6 米；旁边一棵大树的影长是 42 米，这棵大树高多少米？",
              "answer": "28 米",
              "skill": "shadow-height-prop",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "相互咬合的两个齿轮，大齿轮有 9 个齿，每分钟转 40 圈；小齿轮有 3 个齿，每分钟转多少圈？",
              "answer": "120 圈",
              "skill": "gear-teeth-inverse",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "给教室铺地，用面积为 5 平方分米的方砖需要 560 块；如果改用面积为 40 平方分米的方砖，需要多少块？",
              "answer": "70 块",
              "skill": "paving-tiles-inverse",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6下-U5",
      "grade": 6,
      "semester": "下",
      "unitNo": 5,
      "name": "数学广角——鸽巢问题",
      "plugin": "pigeonhole",
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": false,
      "moduleKey": "unitPlugin",
      "moduleLabel": "通用单元插件 (unitPlugins)",
      "moduleFile": "prototype/unitPlugins.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 3,
        "medium": 3,
        "hard": 3
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "socks",
            "books-basic",
            "drawer-plus-one"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "抽屉里有4种颜色的筷子各若干只（看不见颜色），至少要摸出多少只，才能保证有2只同色？",
              "answer": "5只",
              "skill": "socks",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把8本课外书放进5个抽屉，总有一个抽屉至少放几本？",
              "answer": "2本",
              "skill": "books-basic",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把9只鸽子放进8个鸽巢里，总有一个鸽巢里至少飞进几只鸽子？",
              "answer": "2只",
              "skill": "drawer-plus-one",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "抽屉里有7种颜色的筷子各若干只（看不见颜色），至少要摸出多少只，才能保证有2只同色？",
              "answer": "8只",
              "skill": "socks",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "birthday",
            "books",
            "drawer"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "30名同学中，至少有几名同学的生日在同一个月？",
              "answer": "3名",
              "skill": "birthday",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "图书角有30本书，放进3个书架，总有一个书架至少放多少本？",
              "answer": "10本",
              "skill": "books",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把23个苹果放进8个抽屉里，不管怎么放，总有一个抽屉里至少放几个苹果？",
              "answer": "3个",
              "skill": "drawer",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "59名同学中，至少有几名同学的生日在同一个月？",
              "answer": "5名",
              "skill": "birthday",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "reverse-objects",
            "cards-suit",
            "balls"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "把一些小球放进5个盒子里，要保证总有一个盒子里至少有3个小球，那么至少需要准备多少个小球？",
              "answer": "11个",
              "skill": "reverse-objects",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一盒扑克牌去掉了大王和小王，至少从中抽出多少张牌，才能保证有3张牌是同一种花色？",
              "answer": "9张",
              "skill": "cards-suit",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒子里有2种颜色的球各若干个，至少摸出多少个球，才能保证有6个球同色？",
              "answer": "11个",
              "skill": "balls",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把一些小球放进7个盒子里，要保证总有一个盒子里至少有3个小球，那么至少需要准备多少个小球？",
              "answer": "15个",
              "skill": "reverse-objects",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    },
    {
      "id": "G6下-U6",
      "grade": 6,
      "semester": "下",
      "unitNo": 6,
      "name": "整理与复习",
      "plugin": null,
      "arithmeticPlugin": null,
      "topics": null,
      "maxCount": null,
      "review": true,
      "moduleKey": "review",
      "moduleLabel": "全科综合复习 (Engine)",
      "moduleFile": "prototype/paper.js",
      "gradientTier": "tiered-skills",
      "gradientLabel": "阶梯考法",
      "gradientBadge": "success",
      "gradientNote": "基础/标准/提高具备不同的考法模板或进阶题型分支",
      "skillCount": {
        "easy": 11,
        "medium": 10,
        "hard": 12
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "pigeon-socks",
            "train-bridge-time",
            "three-cattle-chicken",
            "statistics-mean",
            "sports-single",
            "interest-find-total",
            "gc-square-grid",
            "logic-liar-truth",
            "perfect-square-judge",
            "arithmetic-result",
            "arithmetic-operand"
          ],
          "formats": [
            "olympiad",
            "application",
            "arithmetic",
            "fill"
          ],
          "samples": [
            {
              "question": "抽屉里有1种颜色的袜子(每种足够多),至少摸出几只能保证配成颜色相同的一双?",
              "answer": "2只(最坏情况是每种颜色各拿 1 只,第 2 只必与前 1 只中某色配对)",
              "skill": "pigeon-socks",
              "format": "olympiad",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一列火车长88米,以每秒22米的速度通过一座264米长的桥,需要多少秒?",
              "answer": "16秒",
              "skill": "train-bridge-time",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "牧场里有牛、羊、鸡共14只,腿数共48条,牛和羊都是4条腿、鸡2条腿,且牛比羊多4只。求牛、羊、鸡各多少只?",
              "answer": "牛7只,羊3只,鸡4只",
              "skill": "three-cattle-chicken",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "10的平均数是多少?",
              "answer": "10",
              "skill": "statistics-mean",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "medium": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "proportion-three-parts",
            "perfect-square-divisor-count",
            "ratio-scale",
            "distance-meet",
            "train-tunnel-time",
            "magic-3-row",
            "prob-compare",
            "extreme-min-perimeter",
            "arithmetic-result",
            "arithmetic-operand"
          ],
          "formats": [
            "application",
            "olympiad",
            "arithmetic",
            "fill"
          ],
          "samples": [
            {
              "question": "把157支笔按3:3:4的比例分给三人,各分多少?",
              "answer": "47支、47支、63支",
              "skill": "proportion-three-parts",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "13共有多少个因数?",
              "answer": "2个",
              "skill": "perfect-square-divisor-count",
              "format": "olympiad",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小华按3:1分糖,甲得了21个,乙得了几个?一共几个?",
              "answer": "乙7个,一共28个",
              "skill": "ratio-scale",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小梅每分钟走53米,小明每分钟走57米,两人相向而行3分钟后相遇,两地相距多少米?",
              "answer": "330米",
              "skill": "distance-meet",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        },
        "hard": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "train-cross-meet",
            "duty-last",
            "sports-relay",
            "interest-compare",
            "age-meet-sum",
            "sequence-double-diff",
            "prob-two-stage",
            "coloring-domino",
            "comb-ball",
            "nt-puzzle",
            "arithmetic-result",
            "arithmetic-operand"
          ],
          "formats": [
            "application",
            "olympiad",
            "arithmetic",
            "fill"
          ],
          "samples": [
            {
              "question": "两列火车分别长514米和438米,各以每秒32米和36米的速度相向而行,从相遇到完全错开需多少秒?",
              "answer": "14秒",
              "skill": "train-cross-meet",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "今天是星期四,小华要在29天后的值日,那天是星期几?",
              "answer": "星期五",
              "skill": "duty-last",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "接力赛三人分别用时36秒、52秒、30秒,总成绩是多少秒?比纪录120秒快几秒?",
              "answer": "总成绩118秒,快2秒",
              "skill": "sports-relay",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "本金7103元,甲银行年利率4%,乙银行年利率5%,存4年,两家利息相差多少元?",
              "answer": "285元",
              "skill": "interest-compare",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            }
          ]
        }
      }
    }
  ]
};
