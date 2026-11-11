// 自动生成文件（请勿手改）：由 node scripts/manage.mjs 生成
export const PROJECT_STATUS = {
  "summary": {
    "generatedAt": "2026/11/11 15:03:12",
    "totalUnits": 93,
    "dedicatedUnits": 92,
    "reviewUnits": 1,
    "diagramUnits": 31,
    "dailyCount": 17,
    "testsPassed": 5,
    "testsTotal": 5,
    "byGradient": {
      "tiered-skills": 4,
      "three-tier-range": 29,
      "two-tier-range": 34,
      "fixed-range": 26
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
      "durationMs": 114,
      "summary": "✅ 6年级/hard: 30/30 题, 去重后 30, 1ms, 分布={\"arithmetic\":15,\"application\":7,\"olympiad\":8} | 结果: 18 通过 / 0 未达标"
    },
    {
      "id": "coverage",
      "name": "93单元全量联动与756配置覆盖测试",
      "file": "prototype/coverage-test.mjs",
      "passed": true,
      "durationMs": 169,
      "summary": "总计 93 单元：联动通过 92，无专属出题映射（含整理与复习）1，不合格 0 | 已检查 756 种难度与题量组合。至少一组配置只有一个卷面分类的单元（分类数不等于考法数）共 81 个：1上 准备课、1上 位置、1上 1~5的认识和加减法、1上 认识图形（一）、1上 6~10的认识和加减法、1上 11~20各数的认识、1上 20以内的进位加法、1下 20以内的退位减法、1下 100以内数的认识、1下 100以内的加法和减法（一）、1下 认识图形（二）、1下 100以内的加法和减法（二）、1下 找规律、2上 100以内的加法和减法（二）、2上 角的初步认识、2上 表内乘法（一）、2上 观察物体（一）、2上 表内乘法（二）、2上 数学广角——搭配（一）、2下 数据收集整理、2下 表内除法（一）、2下 图形的运动（一）、2下 表内除法（二）、2下 混合运算、2下 有余数的除法、2下 万以内数的认识、2下 数学广角——推理、3上 万以内的加法和减法（一）、3上 万以内的加法和减法（二）、3上 倍的认识、3上 多位数乘一位数、3上 长方形和正方形、3上 分数的初步认识、3下 位置与方向（一）、3下 除数是一位数的除法、3下 复式统计表、3下 两位数乘两位数、3下 面积、3下 年月日、3下 小数的初步认识、3下 数学广角——搭配（二）、4上 大数的认识、4上 角的度量、4上 三位数乘两位数、4上 平行四边形和梯形、4上 除数是两位数的除法、4上 条形统计图、4上 数学广角——优化、4下 四则运算、4下 观察物体（二）、4下 运算定律、4下 小数的意义和性质、4下 三角形、4下 小数的加法和减法、4下 图形的运动（二）、4下 平均数与条形统计图、4下 数学广角——鸡兔同笼、5上 位置、5上 可能性、5上 简易方程、5上 多边形的面积、5上 数学广角——植树问题、5下 观察物体（三）、5下 因数与倍数、5下 长方体和正方体、5下 分数的意义和性质、5下 图形的运动（三）、5下 分数的加法和减法、5下 折线统计图、5下 数学广角——找次品、6上 位置与方向（二）、6上 分数除法、6上 比、6上 圆、6上 扇形统计图、6上 数学广角——数与形、6下 负数、6下 百分数（二）、6下 圆柱与圆锥、6下 比例、6下 数学广角——鸽巢问题"
    },
    {
      "id": "correctness",
      "name": "数学答案独立逆向复算测试 (160轮)",
      "file": "prototype/correctness-test.mjs",
      "passed": true,
      "durationMs": 92,
      "summary": "鸡兔同笼、植树、统计图并列和小数乘法的独立复算通过"
    },
    {
      "id": "daily",
      "name": "口算/竖式每日一练专项测试 (123配置)",
      "file": "prototype/daily-practice-test.mjs",
      "passed": true,
      "durationMs": 75,
      "summary": "123 种每日一练配置通过，题量、去重、答案复算和年级限制正常"
    },
    {
      "id": "gradient",
      "name": "三档难度阶梯考法与答案测试",
      "file": "prototype/difficulty-gradient-test.mjs",
      "passed": true,
      "durationMs": 49,
      "summary": "三个单元的难度梯度、题量和提高题答案检查通过"
    }
  ],
  "git": {
    "initialized": true,
    "commits": [
      {
        "hash": "81459b0",
        "date": "2026-11-11 15:03",
        "message": "chore: 同步看板最新 Git 快照状态并保持工作区干净"
      },
      {
        "hash": "64c8a25",
        "date": "2026-11-11 15:01",
        "message": "feat: 上线项目管理系统 v0.6.0（可视化看板 + 自动巡检 + Git 版本台账）"
      }
    ],
    "dirtyFiles": 0
  },
  "roadmap": [
    {
      "group": "P0 · 正在推进 / 近期优先",
      "items": [
        {
          "done": true,
          "text": "建立项目管理系统（可视化看板 + 自动巡检脚本 + Git 仓库 + AI 记忆规则）"
        },
        {
          "done": true,
          "text": "完成第一批 3 个单元（`有余数的除法`、`倍的认识`、`因数与倍数`）的三档难度独立考法梯度"
        },
        {
          "done": false,
          "text": "扩充其余单元的三档难度梯度（`easy / medium / hard`）：在管理看板中筛选“待拉开梯度/仅数值梯度”的单元，分批实现基础/标准/提高的差异化考法"
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
          "question": "6 + 1 = ______",
          "answer": "7"
        },
        {
          "question": "3 − 3 = ______",
          "answer": "0"
        },
        {
          "question": "6 + 4 = ______",
          "answer": "10"
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
          "question": "7 + 5 = ______",
          "answer": "12"
        },
        {
          "question": "5 + 6 = ______",
          "answer": "11"
        },
        {
          "question": "9 + 2 = ______",
          "answer": "11"
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
          "question": "16 − 7 = ______",
          "answer": "9"
        },
        {
          "question": "14 − 5 = ______",
          "answer": "9"
        },
        {
          "question": "12 − 7 = ______",
          "answer": "5"
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
          "question": "13 + 6 = ______",
          "answer": "19"
        },
        {
          "question": "37 + 5 = ______",
          "answer": "42"
        },
        {
          "question": "78 + 9 = ______",
          "answer": "87"
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
          "question": "8 × 9 = ______",
          "answer": "72"
        },
        {
          "question": "2 × 8 = ______",
          "answer": "16"
        },
        {
          "question": "2 × 9 = ______",
          "answer": "18"
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
          "question": "63 ÷ 9 = ______",
          "answer": "7"
        },
        {
          "question": "54 ÷ 9 = ______",
          "answer": "6"
        },
        {
          "question": "45 ÷ 9 = ______",
          "answer": "5"
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
          "question": "20 ÷ 5 = ______",
          "answer": "4"
        },
        {
          "question": "12 ÷ 4 = ______",
          "answer": "3"
        },
        {
          "question": "24 ÷ 4 = ______",
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
          "question": "33 + 54 = ______",
          "answer": "87"
        },
        {
          "question": "73 − 41 = ______",
          "answer": "32"
        },
        {
          "question": "45 − 45 = ______",
          "answer": "0"
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
          "question": "196 + 995 = ______",
          "answer": "1191"
        },
        {
          "question": "895 − 571 = ______",
          "answer": "324"
        },
        {
          "question": "364 − 155 = ______",
          "answer": "209"
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
          "question": "833 × 9 = ______",
          "answer": "7497"
        },
        {
          "question": "876 × 7 = ______",
          "answer": "6132"
        },
        {
          "question": "827 × 4 = ______",
          "answer": "3308"
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
          "question": "85 × 75 = ______",
          "answer": "6375"
        },
        {
          "question": "68 × 48 = ______",
          "answer": "3264"
        },
        {
          "question": "61 × 84 = ______",
          "answer": "5124"
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
          "question": "88 ÷ 8 = ______",
          "answer": "11"
        },
        {
          "question": "25 ÷ 5 = ______",
          "answer": "5"
        },
        {
          "question": "28 ÷ 4 = ______",
          "answer": "7"
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
          "question": "881 × 41 = ______",
          "answer": "36121"
        },
        {
          "question": "267 × 99 = ______",
          "answer": "26433"
        },
        {
          "question": "162 × 79 = ______",
          "answer": "12798"
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
          "question": "180 ÷ 45 = ______",
          "answer": "4"
        },
        {
          "question": "720 ÷ 48 = ______",
          "answer": "15"
        },
        {
          "question": "252 ÷ 42 = ______",
          "answer": "6"
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
          "question": "9 + 9.8 = ______",
          "answer": "18.8"
        },
        {
          "question": "8.9 − 8.4 = ______",
          "answer": "0.5"
        },
        {
          "question": "7.7 − 6.6 = ______",
          "answer": "1.1"
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
          "question": "4.6 × 3.3 = ______",
          "answer": "15.18"
        },
        {
          "question": "1.2 × 7 = ______",
          "answer": "8.4"
        },
        {
          "question": "1.5 × 5 = ______",
          "answer": "7.5"
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
          "question": "57.6 ÷ 9 = ______",
          "answer": "6.4"
        },
        {
          "question": "20.8 ÷ 8 = ______",
          "answer": "2.6"
        },
        {
          "question": "26.7 ÷ 3 = ______",
          "answer": "8.9"
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
              "question": "4 + 1 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
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
              "question": "盒里原有 1 枚棋子，又放入 4 枚，现在有多少枚？",
              "answer": "5",
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
              "question": "3 + 2 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
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
              "question": "1 + 2 = ______",
              "answer": "3",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
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
            },
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
              "question": "14 读作什么？",
              "answer": "十四",
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
              "question": "17 中，个位上的数字表示多少？",
              "answer": "7",
              "skill": "place-value",
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
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "一年级上册《认识钟表》课标规定仅考整时（固定步长60分）",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-clock"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面，写出时间。",
              "answer": "7时",
              "skill": "unit-clock",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 7时 的时针和分针。",
              "answer": "7时",
              "skill": "unit-clock",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 7时？",
              "answer": "A",
              "skill": "unit-clock",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "8时",
              "skill": "unit-clock",
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
            "unit-clock"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面，写出时间。",
              "answer": "7时",
              "skill": "unit-clock",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 7时 的时针和分针。",
              "answer": "7时",
              "skill": "unit-clock",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 7时？",
              "answer": "A",
              "skill": "unit-clock",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "8时",
              "skill": "unit-clock",
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
            "unit-clock"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面，写出时间。",
              "answer": "7时",
              "skill": "unit-clock",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 7时 的时针和分针。",
              "answer": "7时",
              "skill": "unit-clock",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 7时？",
              "answer": "A",
              "skill": "unit-clock",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "8时",
              "skill": "unit-clock",
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
            "compare-expression",
            "apply"
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
              "question": "在括号里填 >、< 或 =：2 + 8（　）11。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
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
              "question": "11 − ______ = 6",
              "answer": "5",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-pattern"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "找规律填数：4，8，16，32，（　）",
              "answer": "64",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "按规律接着画：△○△○△○（　）（　）",
              "answer": "△○",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：3，7，11，15，（　），（　）",
              "answer": "19，23",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：3，6，12，24，（　）",
              "answer": "48",
              "skill": "unit-pattern",
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
            "unit-pattern"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "找规律填数：1，2，4，8，（　）",
              "answer": "16",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "按规律接着画：●▲●▲●▲（　）（　）",
              "answer": "●▲",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：1，6，11，16，（　），（　）",
              "answer": "21，26",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：2，4，8，16，（　）",
              "answer": "32",
              "skill": "unit-pattern",
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
            "unit-pattern"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "找规律填数：1，2，4，8，（　）",
              "answer": "16",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "按规律接着画：□☆□☆□☆（　）（　）",
              "answer": "□☆",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：8，11，14，17，（　），（　）",
              "answer": "20，23",
              "skill": "unit-pattern",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "找规律填数：4，8，16，32，（　）",
              "answer": "64",
              "skill": "unit-pattern",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-len"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "800厘米 = （　）米",
              "answer": "8米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：6米（　）596厘米。",
              "answer": ">",
              "skill": "unit-len",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3米 = （　）厘米",
              "answer": "300厘米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "900厘米 = （　）米",
              "answer": "9米",
              "skill": "unit-len",
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
            "unit-len"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "500厘米 = （　）米",
              "answer": "5米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：8米（　）804厘米。",
              "answer": "<",
              "skill": "unit-len",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3米 = （　）厘米",
              "answer": "300厘米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：3米（　）298厘米。",
              "answer": ">",
              "skill": "unit-len",
              "format": "compare",
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
            "unit-len"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "300厘米 = （　）米",
              "answer": "3米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：2米（　）200厘米。",
              "answer": "=",
              "skill": "unit-len",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4米 = （　）厘米",
              "answer": "400厘米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "200厘米 = （　）米",
              "answer": "2米",
              "skill": "unit-len",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "数一数，图中的封闭图形有几个角？",
              "answer": "4",
              "skill": "count-angles",
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
              "question": "4 × 4 = ______",
              "answer": "16",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
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
              "question": "在括号里填 >、< 或 =：2 × 2（　）5。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
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
              "question": "4 × 5 = ______",
              "answer": "20",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "answer": "3",
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
              "answer": "3",
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
              "answer": "3",
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
            "compare-expression",
            "apply"
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
              "question": "在括号里填 >、< 或 =：8 × 9（　）71。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础(15分刻)/标准(5分刻)/提高(1分刻)三档精细度",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": true,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-clock"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面，写出时间。",
              "answer": "6时",
              "skill": "unit-clock",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 6时 的时针和分针。",
              "answer": "6时",
              "skill": "unit-clock",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 6时？",
              "answer": "A",
              "skill": "unit-clock",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "6时15分",
              "skill": "unit-clock",
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
            "unit-clock"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面，写出时间。",
              "answer": "6时5分",
              "skill": "unit-clock",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 6时5分 的时针和分针。",
              "answer": "6时5分",
              "skill": "unit-clock",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 6时5分？",
              "answer": "A",
              "skill": "unit-clock",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "6时10分",
              "skill": "unit-clock",
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
            "unit-clock"
          ],
          "formats": [
            "fill",
            "draw",
            "choice"
          ],
          "samples": [
            {
              "question": "看钟面，写出时间。",
              "answer": "6时9分",
              "skill": "unit-clock",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "在钟面上画出 6时9分 的时针和分针。",
              "answer": "6时9分",
              "skill": "unit-clock",
              "format": "draw",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "哪一个钟面显示 6时9分？",
              "answer": "A",
              "skill": "unit-clock",
              "format": "choice",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "看钟面，写出时间。",
              "answer": "6时10分",
              "skill": "unit-clock",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、2、9这3张数字卡片，每次取2张组成两位数，一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲地到乙地有2条路，从乙地到丙地有4条路，从甲地经乙地到丙地一共有多少种走法？",
              "answer": "8种",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6个小朋友，每两人握一次手，一共要握多少次手？",
              "answer": "15次",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有2件上衣和4条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？",
              "answer": "8种",
              "skill": "unit-combine",
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
            "unit-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、2、9这3张数字卡片，每次取2张组成两位数，一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲地到乙地有3条路，从乙地到丙地有4条路，从甲地经乙地到丙地一共有多少种走法？",
              "answer": "12种",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3个小朋友，每两人握一次手，一共要握多少次手？",
              "answer": "3次",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有3件上衣和4条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？",
              "answer": "12种",
              "skill": "unit-combine",
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
            "unit-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用7、1、2、6这4张数字卡片，每次取3张组成三位数，一共能组成多少个不同的三位数？",
              "answer": "24个",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲地到乙地有3条路，从乙地到丙地有4条路，从甲地经乙地到丙地一共有多少种走法？",
              "answer": "12种",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3个小朋友，每两人握一次手，一共要握多少次手？",
              "answer": "3次",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有4件上衣和3条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？",
              "answer": "12种",
              "skill": "unit-combine",
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
              "question": "30 ÷ 6 = ______",
              "answer": "5",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
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
              "question": "在括号里填 >、< 或 =：15 ÷ 5（　）4。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
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
            "compare-expression",
            "apply"
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
              "question": "在括号里填 >、< 或 =：14 ÷ 7（　）2。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "计算 67 + 7 × 2 时，应先算哪一步？",
              "answer": "7 × 2",
              "skill": "operation-order",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "（6 + 9）× 3 = ______",
              "answer": "45",
              "skill": "mixed-with-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "47 − 28 ÷ 4 = ______",
              "answer": "40",
              "skill": "mixed-no-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每袋有 3 个球，买 6 袋，又单买 4 个。一共有多少个球？",
              "answer": "22",
              "skill": "mixed-story",
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
              "question": "计算 89 + 9 × 7 时，应先算哪一步？",
              "answer": "9 × 7",
              "skill": "operation-order",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "（6 + 4）× 7 = ______",
              "answer": "70",
              "skill": "mixed-with-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "66 − 30 ÷ 5 = ______",
              "answer": "60",
              "skill": "mixed-no-brackets",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每袋有 3 个球，买 9 袋，又单买 9 个。一共有多少个球？",
              "answer": "36",
              "skill": "mixed-story",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "estimate"
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
              "question": "9078 中，十位上的数字表示多少？",
              "answer": "70",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 9个千、5个百、2个十 组成的数写作多少？",
              "answer": "9520",
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
              "question": "5484 读作什么？",
              "answer": "五千四百八十四",
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
            "estimate"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "9102 中，个位上的数字表示多少？",
              "answer": "2",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 2个千、8个百、5个十、1个一 组成的数写作多少？",
              "answer": "2851",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：6469（　）2400。",
              "answer": ">",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "9103 读作什么？",
              "answer": "九千一百零三",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-weight"
          ],
          "formats": [
            "compare",
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：6千克（　）6600克。",
              "answer": "<",
              "skill": "unit-weight",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一袋米重4千克，取出900克后，还剩多少克？",
              "answer": "3100克",
              "skill": "unit-weight",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3千克 = （　）克",
              "answer": "3000克",
              "skill": "unit-weight",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：1千克（　）1900克。",
              "answer": "<",
              "skill": "unit-weight",
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
            "unit-weight"
          ],
          "formats": [
            "compare",
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：6千克（　）6200克。",
              "answer": "<",
              "skill": "unit-weight",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一袋米重5千克，取出600克后，还剩多少克？",
              "answer": "4400克",
              "skill": "unit-weight",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4千克200克 = （　）克",
              "answer": "4200克",
              "skill": "unit-weight",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：4千克（　）3800克。",
              "answer": ">",
              "skill": "unit-weight",
              "format": "compare",
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
            "unit-weight"
          ],
          "formats": [
            "compare",
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "在括号里填 >、< 或 =：9千克（　）8800克。",
              "answer": ">",
              "skill": "unit-weight",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一袋米重1千克，取出300克后，还剩多少克？",
              "answer": "700克",
              "skill": "unit-weight",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8千克200克 = （　）克",
              "answer": "8200克",
              "skill": "unit-weight",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：9千克（　）9500克。",
              "answer": "<",
              "skill": "unit-weight",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-reasoning"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小丽、小明、小红每人拿一种不同的水果，水果有梨、苹果、西瓜。小丽拿的是梨；小明拿的不是苹果。小红拿的是什么？",
              "answer": "苹果",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明、小红、小刚每人拿一种不同的水果，水果有葡萄、橘子、西瓜。小明拿的是葡萄；小红拿的不是西瓜。小红拿的是什么？",
              "answer": "橘子",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明、小红、小华每人拿一种不同的水果，水果有梨、橘子、西瓜。小明拿的是梨；小红拿的不是西瓜。小华拿的是什么？",
              "answer": "西瓜",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明、小红、小刚每人拿一种不同的水果，水果有橘子、梨、香蕉。小明拿的是香蕉；小红拿的不是橘子。小红拿的是什么？",
              "answer": "梨",
              "skill": "unit-reasoning",
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
            "unit-reasoning"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小明、小红、小刚每人拿一种不同的水果，水果有梨、橘子、葡萄。小明拿的是梨；小红拿的不是葡萄。小刚拿的是什么？",
              "answer": "葡萄",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小丽、小刚、小华每人拿一种不同的水果，水果有橘子、苹果、梨。小丽拿的是橘子；小刚拿的不是苹果。小刚拿的是什么？",
              "answer": "梨",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小丽、小刚、小华每人拿一种不同的水果，水果有西瓜、葡萄、梨。小丽拿的是西瓜；小刚拿的不是梨。小华拿的是什么？",
              "answer": "梨",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小刚、小红、小丽每人拿一种不同的水果，水果有香蕉、梨、葡萄。小刚拿的是香蕉；小红拿的不是葡萄。小红拿的是什么？",
              "answer": "梨",
              "skill": "unit-reasoning",
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
            "unit-reasoning"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "小明、小红、小华、小刚每人拿一种不同的水果，水果有苹果、西瓜、香蕉、葡萄。小明拿的是葡萄；小红拿的是苹果；小华拿的不是西瓜。小刚拿的是什么？",
              "answer": "西瓜",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小丽、小明、小红、小华每人拿一种不同的水果，水果有苹果、西瓜、香蕉、梨。小丽拿的是西瓜；小明拿的是梨；小红拿的不是香蕉。小红拿的是什么？",
              "answer": "苹果",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小红、小丽、小明、小华每人拿一种不同的水果，水果有苹果、香蕉、西瓜、葡萄。小红拿的是香蕉；小丽拿的是西瓜；小明拿的不是葡萄。小华拿的是什么？",
              "answer": "葡萄",
              "skill": "unit-reasoning",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小丽、小明、小华、小刚每人拿一种不同的水果，水果有梨、葡萄、西瓜、香蕉。小丽拿的是梨；小明拿的是香蕉；小华拿的不是西瓜。小华拿的是什么？",
              "answer": "葡萄",
              "skill": "unit-reasoning",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-elapsed"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "小明10时50分开始写作业，写了21分钟，写完时是几时几分？",
              "answer": "11时11分",
              "skill": "unit-elapsed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明写了11分钟作业，在17时57分写完。他开始写作业的时间是______。",
              "answer": "17时46分",
              "skill": "unit-elapsed",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明从15时48分写作业到15时58分，一共写了多少分钟？",
              "answer": "10分钟",
              "skill": "unit-elapsed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明19时19分开始写作业，写了24分钟，写完时是几时几分？",
              "answer": "19时43分",
              "skill": "unit-elapsed",
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
            "unit-elapsed"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "小明10时30分开始写作业，写了43分钟，写完时是几时几分？",
              "answer": "11时13分",
              "skill": "unit-elapsed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明写了41分钟作业，在21时8分写完。他开始写作业的时间是______。",
              "answer": "20时27分",
              "skill": "unit-elapsed",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明从15时15分写作业到16时17分，一共写了多少分钟？",
              "answer": "62分钟",
              "skill": "unit-elapsed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明11时29分开始写作业，写了53分钟，写完时是几时几分？",
              "answer": "12时22分",
              "skill": "unit-elapsed",
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
            "unit-elapsed"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "小明10时9分开始写作业，写了52分钟，写完时是几时几分？",
              "answer": "11时1分",
              "skill": "unit-elapsed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明写了112分钟作业，在12时写完。他开始写作业的时间是______。",
              "answer": "10时8分",
              "skill": "unit-elapsed",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明从15时38分写作业到16时37分，一共写了多少分钟？",
              "answer": "59分钟",
              "skill": "unit-elapsed",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "小明16时39分开始写作业，写了73分钟，写完时是几时几分？",
              "answer": "17时52分",
              "skill": "unit-elapsed",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "missing-operand",
            "compare-expression",
            "apply"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "口算：48 − 45 = ______",
              "answer": "3",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "440 − ______ = 210",
              "answer": "230",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：750 + 40（　）790。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒里原有 690 枚棋子，拿走 580 枚，还剩多少枚？",
              "answer": "110",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-len"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "90分米 = （　）米",
              "answer": "9米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：4米（　）400厘米。",
              "answer": "=",
              "skill": "unit-len",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "7千米 = （　）米",
              "answer": "7000米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "90厘米 = （　）分米",
              "answer": "9分米",
              "skill": "unit-len",
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
            "unit-len"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "60分米 = （　）米",
              "answer": "6米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：7厘米（　）66毫米。",
              "answer": ">",
              "skill": "unit-len",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "7米 = （　）厘米",
              "answer": "700厘米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5000米 = （　）千米",
              "answer": "5千米",
              "skill": "unit-len",
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
            "unit-len"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "30分米 = （　）米",
              "answer": "3米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：9分米（　）93厘米。",
              "answer": "<",
              "skill": "unit-len",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "7米 = （　）分米",
              "answer": "70分米",
              "skill": "unit-len",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "20分米 = （　）米",
              "answer": "2米",
              "skill": "unit-len",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "372 × 3 = ______",
              "answer": "1116",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "508 × ______ = 1524",
              "answer": "3",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：120 × 3（　）359。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 378 本书，4 箱一共有多少本？",
              "answer": "1512",
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
              "question": "375 × 8 = ______",
              "answer": "3000",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "303 × ______ = 1818",
              "answer": "6",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：778 × 5（　）3891。",
              "answer": "<",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 395 本书，7 箱一共有多少本？",
              "answer": "2765",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "把一块纸片平均分成 14 份，其中的 4 份用什么分数表示？",
              "answer": "4/14",
              "skill": "fraction-unit",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：5/15（　）7/15。",
              "answer": "<",
              "skill": "compare-fractions",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4/12 + 6/12 = ______（保留原分母）",
              "answer": "10/12",
              "skill": "same-denominator-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1 − 2/9 = ______（分母写 9）",
              "answer": "7/9",
              "skill": "whole-minus-fraction",
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
              "question": "把一块纸片平均分成 22 份，其中的 5 份用什么分数表示？",
              "answer": "5/22",
              "skill": "fraction-unit",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：3/11（　）8/11。",
              "answer": "<",
              "skill": "compare-fractions",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5/12 + 4/12 = ______（保留原分母）",
              "answer": "9/12",
              "skill": "same-denominator-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1 − 8/23 = ______（分母写 23）",
              "answer": "15/23",
              "skill": "whole-minus-fraction",
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
            "compare-expression",
            "apply"
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
              "question": "在括号里填 >、< 或 =：32 ÷ 4（　）8。",
              "answer": "=",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "74 × 86 = ______",
              "answer": "6364",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "76 × ______ = 4560",
              "answer": "60",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：93 × 24（　）2231。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 37 本书，86 箱一共有多少本？",
              "answer": "3182",
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
              "question": "74 × 53 = ______",
              "answer": "3922",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "58 × ______ = 4814",
              "answer": "83",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：63 × 45（　）2834。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 39 本书，33 箱一共有多少本？",
              "answer": "1287",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 5,
        "medium": 5,
        "hard": 5
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "month-days",
            "year-type",
            "year-days",
            "date-rollover",
            "clock-24h"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1990 年 11 月有多少天？",
              "answer": "30",
              "skill": "month-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2067 年是平年还是闰年？",
              "answer": "平年",
              "skill": "year-type",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2062 年全年有多少天？",
              "answer": "365",
              "skill": "year-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2035 年 7 月 31 日的第二天是几月几日？",
              "answer": "8 月 1 日",
              "skill": "date-rollover",
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
            "year-type",
            "year-days",
            "date-rollover",
            "clock-24h"
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
              "question": "2002 年是平年还是闰年？",
              "answer": "平年",
              "skill": "year-type",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2091 年全年有多少天？",
              "answer": "365",
              "skill": "year-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2028 年 3 月 31 日的第二天是几月几日？",
              "answer": "4 月 1 日",
              "skill": "date-rollover",
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
            "month-days",
            "year-type",
            "year-days",
            "date-rollover",
            "clock-24h"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "2047 年 3 月有多少天？",
              "answer": "31",
              "skill": "month-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2046 年是平年还是闰年？",
              "answer": "平年",
              "skill": "year-type",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2010 年全年有多少天？",
              "answer": "365",
              "skill": "year-days",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "2021 年 12 月 31 日的第二天是几月几日？",
              "answer": "1 月 1 日",
              "skill": "date-rollover",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "decimal-money"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5.8 的十分位上是几？",
              "answer": "8",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：6.3（　）6.2。",
              "answer": ">",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "六点八写作多少？",
              "answer": "6.8",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4 元 3 角写成以元为单位的小数是多少？",
              "answer": "4.3 元",
              "skill": "decimal-money",
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
            "decimal-place",
            "decimal-compare",
            "decimal-write",
            "decimal-money"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "8.5 的十分位上是几？",
              "answer": "5",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：2.9（　）2.4。",
              "answer": ">",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "九点四写作多少？",
              "answer": "9.4",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "9 元 4 角写成以元为单位的小数是多少？",
              "answer": "9.4 元",
              "skill": "decimal-money",
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
            "decimal-place",
            "decimal-compare",
            "decimal-write",
            "decimal-money"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "8.2 的十分位上是几？",
              "answer": "2",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：4.6（　）4.6。",
              "answer": "=",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "九点七写作多少？",
              "answer": "9.7",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5 元 6 角写成以元为单位的小数是多少？",
              "answer": "5.6 元",
              "skill": "decimal-money",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用7、1、5这3张数字卡片，每次取2张组成两位数，一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲地到乙地有2条路，从乙地到丙地有4条路，从甲地经乙地到丙地一共有多少种走法？",
              "answer": "8种",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5个小朋友，每两人握一次手，一共要握多少次手？",
              "answer": "10次",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有2件上衣和5条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？",
              "answer": "10种",
              "skill": "unit-combine",
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
            "unit-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、7、2这3张数字卡片，每次取2张组成两位数，一共能组成多少个不同的两位数？",
              "answer": "6个",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲地到乙地有3条路，从乙地到丙地有4条路，从甲地经乙地到丙地一共有多少种走法？",
              "answer": "12种",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4个小朋友，每两人握一次手，一共要握多少次手？",
              "answer": "6次",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有3件上衣和2条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？",
              "answer": "6种",
              "skill": "unit-combine",
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
            "unit-combine"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "用1、7、4、6这4张数字卡片，每次取3张组成三位数，一共能组成多少个不同的三位数？",
              "answer": "24个",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从甲地到乙地有2条路，从乙地到丙地有3条路，从甲地经乙地到丙地一共有多少种走法？",
              "answer": "6种",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "10个小朋友，每两人握一次手，一共要握多少次手？",
              "answer": "45次",
              "skill": "unit-combine",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有3件上衣和5条裤子，一件上衣配一条裤子，一共有多少种不同的搭配？",
              "answer": "15种",
              "skill": "unit-combine",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "estimate"
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
              "question": "把 389041 四舍五入到万位，近似数是多少？",
              "answer": "390000",
              "skill": "estimate",
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
            "compare-numbers",
            "estimate"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "15594621 中，十位上的数字表示多少？",
              "answer": "20",
              "skill": "place-value",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "由 4个千万、1个百万、7个十万、6个万、6个千、7个百、8个十、3个一 组成的数写作多少？",
              "answer": "41766783",
              "skill": "compose-number",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：1012191（　）22387430。",
              "answer": "<",
              "skill": "compare-numbers",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 19527723 四舍五入到万位，近似数是多少？",
              "answer": "19530000",
              "skill": "estimate",
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
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-area"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "50000平方米 = （　）公顷",
              "answer": "5公顷",
              "skill": "unit-area",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：7平方千米（　）720公顷。",
              "answer": "<",
              "skill": "unit-area",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5平方千米 = （　）公顷",
              "answer": "500公顷",
              "skill": "unit-area",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "60000平方米 = （　）公顷",
              "answer": "6公顷",
              "skill": "unit-area",
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
            "unit-area"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "30000平方米 = （　）公顷",
              "answer": "3公顷",
              "skill": "unit-area",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：1平方千米（　）100公顷。",
              "answer": "=",
              "skill": "unit-area",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "11平方千米 = （　）平方米",
              "answer": "11000000平方米",
              "skill": "unit-area",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "400公顷 = （　）平方千米",
              "answer": "4平方千米",
              "skill": "unit-area",
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
            "unit-area"
          ],
          "formats": [
            "fill",
            "compare"
          ],
          "samples": [
            {
              "question": "380000平方米 = （　）公顷",
              "answer": "38公顷",
              "skill": "unit-area",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：14平方千米（　）1380公顷。",
              "answer": ">",
              "skill": "unit-area",
              "format": "compare",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "28公顷 = （　）平方米",
              "answer": "280000平方米",
              "skill": "unit-area",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：33公顷（　）331000平方米。",
              "answer": "<",
              "skill": "unit-area",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "以图中的线段为一条边、左端点为顶点，向上画出 70° 的角。",
              "answer": "70°，见参考图",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "282 × 26 = ______",
              "answer": "7332",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "204 × ______ = 14892",
              "answer": "73",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：214 × 60（　）12839。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 674 本书，30 箱一共有多少本？",
              "answer": "20220",
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
              "question": "284 × 83 = ______",
              "answer": "23572",
              "skill": "calculate",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "917 × ______ = 88032",
              "answer": "96",
              "skill": "missing-operand",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "在括号里填 >、< 或 =：813 × 81（　）65852。",
              "answer": ">",
              "skill": "compare-expression",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每箱有 690 本书，67 箱一共有多少本？",
              "answer": "46230",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "prerequisite",
            "batch-capacity",
            "shorter-first"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "烧水要 37 分钟，洗杯子要 7 分钟，两件事可以同时做，最少要多少分钟？",
              "answer": "37",
              "skill": "parallel-tasks",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "等水烧开要 68 分钟，烧好后泡茶要 6 分钟。洗杯子要 8 分钟，可以在烧水时洗。最少要多少分钟？",
              "answer": "74",
              "skill": "prerequisite",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一口锅每轮最多煎 6 张饼，一轮需 2 分钟。煎熟 13 张饼至少要多少分钟？",
              "answer": "6",
              "skill": "batch-capacity",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两人等用同一台打印机，甲要用 45 分钟、乙要用 5 分钟。要让两人等待时间的和最短，谁先用？",
              "answer": "乙",
              "skill": "shorter-first",
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
            "parallel-tasks",
            "prerequisite",
            "batch-capacity",
            "shorter-first"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "烧水要 44 分钟，洗杯子要 4 分钟，两件事可以同时做，最少要多少分钟？",
              "answer": "44",
              "skill": "parallel-tasks",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "等水烧开要 25 分钟，烧好后泡茶要 2 分钟。洗杯子要 5 分钟，可以在烧水时洗。最少要多少分钟？",
              "answer": "27",
              "skill": "prerequisite",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一口锅每轮最多煎 8 张饼，一轮需 5 分钟。煎熟 17 张饼至少要多少分钟？",
              "answer": "15",
              "skill": "batch-capacity",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两人等用同一台打印机，甲要用 96 分钟、乙要用 6 分钟。要让两人等待时间的和最短，谁先用？",
              "answer": "乙",
              "skill": "shorter-first",
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
            "parallel-tasks",
            "prerequisite",
            "batch-capacity",
            "shorter-first"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "烧水要 49 分钟，洗杯子要 9 分钟，两件事可以同时做，最少要多少分钟？",
              "answer": "49",
              "skill": "parallel-tasks",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "等水烧开要 42 分钟，烧好后泡茶要 4 分钟。洗杯子要 2 分钟，可以在烧水时洗。最少要多少分钟？",
              "answer": "46",
              "skill": "prerequisite",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一口锅每轮最多煎 8 张饼，一轮需 8 分钟。煎熟 17 张饼至少要多少分钟？",
              "answer": "24",
              "skill": "batch-capacity",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "两人等用同一台打印机，甲要用 48 分钟、乙要用 8 分钟。要让两人等待时间的和最短，谁先用？",
              "answer": "乙",
              "skill": "shorter-first",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 5,
        "medium": 5,
        "hard": 5
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
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
              "question": "计算 [47 −（4 + 7）] × 4，先算哪一步？",
              "answer": "4 + 7",
              "skill": "bracket-order",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
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
              "question": "用乘法与除法的关系填空：156 ÷ ______ = 26。",
              "answer": "6",
              "skill": "inverse-relationship",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "（256 + 24）÷ 4 = ______",
              "answer": "70",
              "skill": "quotient-rule",
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
              "question": "计算 [69 −（6 + 9）] × 9，先算哪一步？",
              "answer": "6 + 9",
              "skill": "bracket-order",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "[54 −（5 + 4）] × 4 = ______",
              "answer": "180",
              "skill": "nested-brackets",
              "format": "practice",
              "responseKind": "calculation",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法与除法的关系填空：96 ÷ ______ = 24。",
              "answer": "4",
              "skill": "inverse-relationship",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "（539 + 21）÷ 7 = ______",
              "answer": "80",
              "skill": "quotient-rule",
              "format": "practice",
              "responseKind": "calculation",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "answer": "6",
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
              "answer": "8",
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
              "answer": "4",
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
              "answer": "5",
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
              "answer": "6",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "distributive",
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
              "question": "用乘法分配律填空：2 ×（3 + 8）= 2 × 3 + 2 × ______。",
              "answer": "8",
              "skill": "distributive",
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
            "commutative",
            "associative",
            "distributive",
            "simplify-product"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "用乘法交换律填空：64 × 4 = ______ × 64。",
              "answer": "4",
              "skill": "commutative",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用加法结合律计算：16 + 49 + 84 = ______。",
              "answer": "149",
              "skill": "associative",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法分配律填空：2 ×（6 + 4）= 2 × 6 + 2 × ______。",
              "answer": "4",
              "skill": "distributive",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法结合律简算：25 × 99 × 4 = ______。",
              "answer": "9900",
              "skill": "simplify-product",
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
            "commutative",
            "associative",
            "distributive",
            "simplify-product"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "用乘法交换律填空：69 × 9 = ______ × 69。",
              "answer": "9",
              "skill": "commutative",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用加法结合律计算：61 + 92 + 39 = ______。",
              "answer": "192",
              "skill": "associative",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法分配律填空：3 ×（9 + 9）= 3 × 9 + 3 × ______。",
              "answer": "9",
              "skill": "distributive",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用乘法结合律简算：25 × 52 × 4 = ______。",
              "answer": "5200",
              "skill": "simplify-product",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "填 >、< 或 =：4.9（　）4.2。",
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
              "question": "化简小数 4.5400。",
              "answer": "4.54",
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
              "question": "6.98 的十分位上是几？",
              "answer": "9",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：7.6（　）7.4。",
              "answer": ">",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "七点五八写作多少？",
              "answer": "7.58",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "化简小数 8.6300。",
              "answer": "8.63",
              "skill": "trailing-zero",
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
              "question": "6.66 的十分位上是几？",
              "answer": "6",
              "skill": "decimal-place",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "填 >、< 或 =：9.4（　）9.6。",
              "answer": "<",
              "skill": "decimal-compare",
              "format": "practice",
              "responseKind": "comparison",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "七点八四写作多少？",
              "answer": "7.84",
              "skill": "decimal-write",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "化简小数 4.7900。",
              "answer": "4.79",
              "skill": "trailing-zero",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "7.9 + 0.94 = ______",
              "answer": "8.84",
              "skill": "decimal-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5.3 − 0.32 = ______",
              "answer": "4.98",
              "skill": "decimal-subtract",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔 8.9 元，一块橡皮 0.97 元，合计多少元？",
              "answer": "9.87 元",
              "skill": "decimal-sum-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 6.9 元，用去 0.96 元，还剩多少元？",
              "answer": "5.94 元",
              "skill": "decimal-change",
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
              "question": "7.6 + 0.62 = ______",
              "answer": "8.22",
              "skill": "decimal-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "7.9 − 0.94 = ______",
              "answer": "6.96",
              "skill": "decimal-subtract",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔 8.5 元，一块橡皮 0.53 元，合计多少元？",
              "answer": "9.03 元",
              "skill": "decimal-sum-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 9.2 元，用去 0.25 元，还剩多少元？",
              "answer": "8.95 元",
              "skill": "decimal-change",
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
            "chicken-rabbit-with-difference",
            "chicken-rabbit-multiple",
            "chicken-rabbit-difference",
            "chicken-rabbit-move",
            "chicken-rabbit-legs-only",
            "chicken-rabbit-buying"
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
              "question": "笼子里有鸡和兔，鸡有2条腿，兔有4条腿，共有23个头，60条腿，已知鸡比兔多9只，它们各有多少？",
              "answer": "鸡16只，兔7只",
              "skill": "chicken-rabbit-with-difference",
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
            "chicken-rabbit-simple",
            "chicken-rabbit-multiple"
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
            "chicken-rabbit-buying",
            "chicken-rabbit-simple",
            "chicken-rabbit-basic"
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 2,
        "medium": 2,
        "hard": 2
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-dec-mul",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "1.1 × 3.8 = ______",
              "answer": "4.18",
              "skill": "unit-dec-mul",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔20.7元，买5支一共要多少元？",
              "answer": "103.5元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔19.5元，买5支一共要多少元？",
              "answer": "97.5元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔19.2元，买4支一共要多少元？",
              "answer": "76.8元",
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
            "unit-dec-mul",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "1.1 × 3 = ______",
              "answer": "3.3",
              "skill": "unit-dec-mul",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔23.3元，买5支一共要多少元？",
              "answer": "116.5元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔13.4元，买2支一共要多少元？",
              "answer": "26.8元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔14.1元，买2支一共要多少元？",
              "answer": "28.2元",
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
            "unit-dec-mul",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "1.3 × 4 = ______",
              "answer": "5.2",
              "skill": "unit-dec-mul",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔85.3元，买3支一共要多少元？",
              "answer": "255.9元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔32.5元，买4支一共要多少元？",
              "answer": "130元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一支笔45.8元，买8支一共要多少元？",
              "answer": "366.4元",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 2,
        "medium": 2,
        "hard": 2
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-dec-div",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "3 ÷ 2 = ______",
              "answer": "1.5",
              "skill": "unit-dec-div",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买3本同样的笔记本共花56.4元，每本多少元？",
              "answer": "18.8元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买5本同样的笔记本共花79.5元，每本多少元？",
              "answer": "15.9元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买5本同样的笔记本共花50.5元，每本多少元？",
              "answer": "10.1元",
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
            "unit-dec-div",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "14.4 ÷ 2 = ______",
              "answer": "7.2",
              "skill": "unit-dec-div",
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
            },
            {
              "question": "买3本同样的笔记本共花60.3元，每本多少元？",
              "answer": "20.1元",
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
            "unit-dec-div",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "21.3 ÷ 3 = ______",
              "answer": "7.1",
              "skill": "unit-dec-div",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买8本同样的笔记本共花446.4元，每本多少元？",
              "answer": "55.8元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买6本同样的笔记本共花335.4元，每本多少元？",
              "answer": "55.9元",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "买3本同样的笔记本共花151.5元，每本多少元？",
              "answer": "50.5元",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "question": "袋里红球和黑球各有 2 个，任意摸一个，摸到这两种颜色的可能性相同吗？",
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
              "question": "袋里只有 23 个白球，任意摸出一个，摸到白球是一定、可能还是不可能？",
              "answer": "一定",
              "skill": "certain",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里有 8 个红球和 7 个白球，任意摸出一个，可能摸到蓝球吗？",
              "answer": "不可能",
              "skill": "impossible",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里有 12 个红球和 9 个白球，任意摸一个，哪种颜色更容易摸到？",
              "answer": "红色",
              "skill": "more-likely",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里红球和蓝球各有 9 个，任意摸一个，摸到这两种颜色的可能性相同吗？",
              "answer": "相同",
              "skill": "equally-likely",
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
              "question": "袋里只有 28 个白球，任意摸出一个，摸到白球是一定、可能还是不可能？",
              "answer": "一定",
              "skill": "certain",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里有 5 个红球和 9 个白球，任意摸出一个，可能摸到蓝球吗？",
              "answer": "不可能",
              "skill": "impossible",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里有 12 个红球和 4 个白球，任意摸一个，哪种颜色更容易摸到？",
              "answer": "红色",
              "skill": "more-likely",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "袋里红球和绿球各有 8 个，任意摸一个，摸到这两种颜色的可能性相同吗？",
              "answer": "相同",
              "skill": "equally-likely",
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
      "gradientTier": "fixed-range",
      "gradientLabel": "课标定界",
      "gradientBadge": "neutral",
      "gradientNote": "按教材单元固定算理/图形范围出题（三档考法与数值区间一致）",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-equation"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "解方程：x - 1 = 1",
              "answer": "x = 2",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：5x = 50",
              "answer": "x = 10",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x ÷ 6 = 17",
              "answer": "x = 102",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x + 1 = 5",
              "answer": "x = 4",
              "skill": "unit-equation",
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
            "unit-equation"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "解方程：x - 3 = 4",
              "answer": "x = 7",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：4x = 176",
              "answer": "x = 44",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x ÷ 17 = 5",
              "answer": "x = 85",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x + 20 = 55",
              "answer": "x = 35",
              "skill": "unit-equation",
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
            "unit-equation"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "解方程：x - 4 = 12",
              "answer": "x = 16",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：47x = 5546",
              "answer": "x = 118",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x ÷ 35 = 38",
              "answer": "x = 1330",
              "skill": "unit-equation",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "解方程：x + 13 = 131",
              "answer": "x = 118",
              "skill": "unit-equation",
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
            "trapezoid-area",
            "split-shape",
            "combine-areas"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "21 平方厘米",
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
            },
            {
              "question": "阴影由两个长方形拼成，图中数字均以厘米为单位。求阴影面积。",
              "answer": "39 平方厘米",
              "skill": "combine-areas",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "16 平方厘米",
              "skill": "trapezoid-area",
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
            "trapezoid-area",
            "split-shape",
            "combine-areas"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "12 平方厘米",
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
            },
            {
              "question": "阴影由两个长方形拼成，图中数字均以厘米为单位。求阴影面积。",
              "answer": "60 平方厘米",
              "skill": "combine-areas",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "21 平方厘米",
              "skill": "trapezoid-area",
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
            "trapezoid-area",
            "split-shape",
            "combine-areas"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
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
            },
            {
              "question": "阴影由两个长方形拼成，图中数字均以厘米为单位。求阴影面积。",
              "answer": "52 平方厘米",
              "skill": "combine-areas",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中上下底和高，求梯形面积。",
              "answer": "28 平方厘米",
              "skill": "trapezoid-area",
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
            "tree-one-end",
            "tree-circular"
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
              "question": "小红在一条68米的路一侧种树,每隔4米种一棵,只种一端。共需多少棵树?",
              "answer": "17棵",
              "skill": "tree-one-end",
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
              "question": "小雪在一条100米的路一侧种树,每隔10米种一棵,只种一端。共需多少棵树?",
              "answer": "10棵",
              "skill": "tree-one-end",
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
              "question": "小芳在一条76米的路一侧种树,每隔4米种一棵,只种一端。共需多少棵树?",
              "answer": "19棵",
              "skill": "tree-one-end",
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
            "tree-both-ends",
            "tree-circular",
            "tree-one-end"
          ],
          "formats": [
            "application"
          ],
          "samples": [
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "answer": "5",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "answer": "160 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方体六个面的总面积。",
              "answer": "182 平方厘米",
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
              "answer": "48 立方厘米",
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
              "answer": "224 立方厘米",
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
              "answer": "48 立方厘米",
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
            "cuboid-surface",
            "opposite-face"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
            {
              "question": "读图中三条棱的长度，求长方体的体积。",
              "answer": "80 立方厘米",
              "skill": "cuboid-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "按图中标注，求长方体六个面的总面积。",
              "answer": "128 平方厘米",
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
              "answer": "308 立方厘米",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "equivalent-fractions",
            "simplify-fraction",
            "common-denominator",
            "fraction-to-decimal"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "4/10 = ______/40。",
              "answer": "16",
              "skill": "equivalent-fractions",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 30/84 约成最简分数。",
              "answer": "5/14",
              "skill": "simplify-fraction",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 2/11 通分成分母是 44 的分数。",
              "answer": "8/44",
              "skill": "common-denominator",
              "format": "practice",
              "responseKind": "short",
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
            "equivalent-fractions",
            "simplify-fraction",
            "common-denominator",
            "fraction-to-decimal"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5/23 = ______/207。",
              "answer": "45",
              "skill": "equivalent-fractions",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 36/72 约成最简分数。",
              "answer": "1/2",
              "skill": "simplify-fraction",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 2/20 通分成分母是 180 的分数。",
              "answer": "18/180",
              "skill": "common-denominator",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 48/100 化成小数。",
              "answer": "0.48",
              "skill": "fraction-to-decimal",
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
            "equivalent-fractions",
            "simplify-fraction",
            "common-denominator",
            "fraction-to-decimal"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "5/18 = ______/108。",
              "answer": "30",
              "skill": "equivalent-fractions",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 27/162 约成最简分数。",
              "answer": "1/6",
              "skill": "simplify-fraction",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 2/11 通分成分母是 55 的分数。",
              "answer": "10/55",
              "skill": "common-denominator",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 79/100 化成小数。",
              "answer": "0.79",
              "skill": "fraction-to-decimal",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "unlike-add",
            "unlike-subtract",
            "fraction-sum-story",
            "fraction-remainder"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1/4 + 1/14 = ______（结果约成最简分数）",
              "answer": "9/28",
              "skill": "unlike-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1/3 − 1/15 = ______（结果约成最简分数）",
              "answer": "4/15",
              "skill": "unlike-subtract",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "上午读了全书的 1/2，下午读了全书的 1/7。一共读了全书的几分之几？",
              "answer": "9/14",
              "skill": "fraction-sum-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "先用去总量的 1/5，又用去总量的 1/16。还剩总量的几分之几？",
              "answer": "59/80",
              "skill": "fraction-remainder",
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
            "unlike-add",
            "unlike-subtract",
            "fraction-sum-story",
            "fraction-remainder"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
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
              "question": "1/6 − 1/18 = ______（结果约成最简分数）",
              "answer": "1/9",
              "skill": "unlike-subtract",
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
            "unlike-add",
            "unlike-subtract",
            "fraction-sum-story",
            "fraction-remainder"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1/6 + 1/16 = ______（结果约成最简分数）",
              "answer": "11/48",
              "skill": "unlike-add",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "1/8 − 1/19 = ______（结果约成最简分数）",
              "answer": "11/152",
              "skill": "unlike-subtract",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "上午读了全书的 1/3，下午读了全书的 1/16。一共读了全书的几分之几？",
              "answer": "19/48",
              "skill": "fraction-sum-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "先用去总量的 1/5，又用去总量的 1/15。还剩总量的几分之几？",
              "answer": "11/15",
              "skill": "fraction-remainder",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "identify-suspects",
            "minimum-weighings"
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
              "question": "将编号 1 到 21 的物品依次分成三组，每组 7 件。已知有一件偏轻。称第一、二组时，第二组较轻。哪些编号仍可能是次品？",
              "answer": "8 至 14",
              "skill": "identify-suspects",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 27 个外表相同的零件，只有一个偏轻，用天平每次把候选零件均分成三组，最坏情况下要称几次才能找到？",
              "answer": "3",
              "skill": "minimum-weighings",
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
            "weigh-once",
            "divide-into-three",
            "identify-suspects",
            "minimum-weighings"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "编号 62、63、64 的三袋物品中有一袋偏轻。用天平称前两袋，第一袋较轻。哪一袋偏轻？",
              "answer": "62",
              "skill": "weigh-once",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 138 袋物品，只有一袋偏轻。先平均分成三组比较，每组几袋？",
              "answer": "46",
              "skill": "divide-into-three",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "将编号 1 到 9 的物品依次分成三组，每组 3 件。已知有一件偏轻。称第一、二组时，第二组较轻。哪些编号仍可能是次品？",
              "answer": "4 至 6",
              "skill": "identify-suspects",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 27 个外表相同的零件，只有一个偏轻，用天平每次把候选零件均分成三组，最坏情况下要称几次才能找到？",
              "answer": "3",
              "skill": "minimum-weighings",
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
            "weigh-once",
            "divide-into-three",
            "identify-suspects",
            "minimum-weighings"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "编号 67、68、69 的三袋物品中有一袋偏轻。用天平称前两袋，第一袋较轻。哪一袋偏轻？",
              "answer": "67",
              "skill": "weigh-once",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 189 袋物品，只有一袋偏轻。先平均分成三组比较，每组几袋？",
              "answer": "63",
              "skill": "divide-into-three",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "将编号 1 到 18 的物品依次分成三组，每组 6 件。已知有一件偏轻。称第一、二组时，第二组较轻。哪些编号仍可能是次品？",
              "answer": "7 至 12",
              "skill": "identify-suspects",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "有 27 个外表相同的零件，只有一个偏轻，用天平每次把候选零件均分成三组，最坏情况下要称几次才能找到？",
              "answer": "3",
              "skill": "minimum-weighings",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 2,
        "medium": 2,
        "hard": 2
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-frac-mul",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "5/6 × 2/8 = ______",
              "answer": "5/24",
              "skill": "unit-frac-mul",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重6千克，倒出它的1/2，还剩多少千克？",
              "answer": "3千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根绳子长25米，用去了它的4/5，用去了多少米？",
              "answer": "20米",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重25千克，倒出它的2/5，还剩多少千克？",
              "answer": "15千克",
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
            "unit-frac-mul",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "5/8 × 3/6 = ______",
              "answer": "5/16",
              "skill": "unit-frac-mul",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重10千克，倒出它的1/5，还剩多少千克？",
              "answer": "8千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重10千克，倒出它的1/2，还剩多少千克？",
              "answer": "5千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根绳子长12米，用去了它的1/2，用去了多少米？",
              "answer": "6米",
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
            "unit-frac-mul",
            "unit-word"
          ],
          "formats": [
            "arithmetic",
            "application"
          ],
          "samples": [
            {
              "question": "5/7 × 10 = ______",
              "answer": "50/7",
              "skill": "unit-frac-mul",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重50千克，倒出它的4/5，还剩多少千克？",
              "answer": "10千克",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一根绳子长36米，用去了它的2/4，用去了多少米？",
              "answer": "18米",
              "skill": "unit-word",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一桶油重35千克，倒出它的4/5，还剩多少千克？",
              "answer": "7千克",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "fraction-divide",
            "divide-by-fraction",
            "fraction-division-story",
            "fraction-original"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1/6 ÷ 2 = ______",
              "answer": "1/12",
              "skill": "fraction-divide",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 ÷ 1/5 = ______",
              "answer": "30",
              "skill": "divide-by-fraction",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "6 米彩带，每 1/2 米剪一段，可剪几段？",
              "answer": "12",
              "skill": "fraction-division-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一条绳子的 1/5 长 2 米，全长多少米？",
              "answer": "10 米",
              "skill": "fraction-original",
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
            "fraction-divide",
            "divide-by-fraction",
            "fraction-division-story",
            "fraction-original"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1/9 ÷ 7 = ______",
              "answer": "1/63",
              "skill": "fraction-divide",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "3 ÷ 1/3 = ______",
              "answer": "9",
              "skill": "divide-by-fraction",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8 米彩带，每 1/5 米剪一段，可剪几段？",
              "answer": "40",
              "skill": "fraction-division-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一条绳子的 1/7 长 5 米，全长多少米？",
              "answer": "35 米",
              "skill": "fraction-original",
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
            "fraction-divide",
            "divide-by-fraction",
            "fraction-division-story",
            "fraction-original"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "1/9 ÷ 4 = ______",
              "answer": "1/36",
              "skill": "fraction-divide",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5 ÷ 1/8 = ______",
              "answer": "40",
              "skill": "divide-by-fraction",
              "format": "practice",
              "responseKind": "blank",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "8 米彩带，每 1/9 米剪一段，可剪几段？",
              "answer": "72",
              "skill": "fraction-division-story",
              "format": "practice",
              "responseKind": "word",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一条绳子的 1/8 长 9 米，全长多少米？",
              "answer": "72 米",
              "skill": "fraction-original",
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
            "identify-segment",
            "diameter-to-radius",
            "draw-radius"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
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
              "answer": "6 厘米",
              "skill": "diameter-to-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从圆心 O 画一条半径。",
              "answer": "示例见参考图",
              "skill": "draw-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中画出的线段是半径还是直径？",
              "answer": "半径",
              "skill": "identify-segment",
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
            "identify-segment",
            "diameter-to-radius",
            "draw-radius"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
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
            },
            {
              "question": "从圆心 O 画一条半径。",
              "answer": "示例见参考图",
              "skill": "draw-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中画出的线段是半径还是直径？",
              "answer": "直径",
              "skill": "identify-segment",
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
            "identify-segment",
            "diameter-to-radius",
            "draw-radius"
          ],
          "formats": [
            "geometry"
          ],
          "samples": [
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
              "answer": "8 厘米",
              "skill": "diameter-to-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "从圆心 O 画一条半径。",
              "answer": "示例见参考图",
              "skill": "draw-radius",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": true
            },
            {
              "question": "图中画出的线段是半径还是直径？",
              "answer": "直径",
              "skill": "identify-segment",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-percent"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "一次问卷共收到100份答卷，其中60份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "60%",
              "skill": "unit-percent",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷中，有40份答卷选择步行，占总数的40%。一共收到多少份答卷？",
              "answer": "100份",
              "skill": "unit-percent",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "50的20%是______。",
              "answer": "10",
              "skill": "unit-percent",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷共收到50份答卷，其中20份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "40%",
              "skill": "unit-percent",
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
            "unit-percent"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "一次问卷共收到200份答卷，其中50份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "25%",
              "skill": "unit-percent",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷中，有96份答卷选择步行，占总数的60%。一共收到多少份答卷？",
              "answer": "160份",
              "skill": "unit-percent",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "30的50%是______。",
              "answer": "15",
              "skill": "unit-percent",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷共收到110份答卷，其中88份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "80%",
              "skill": "unit-percent",
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
            "unit-percent"
          ],
          "formats": [
            "application",
            "fill"
          ],
          "samples": [
            {
              "question": "一次问卷共收到500份答卷，其中400份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "80%",
              "skill": "unit-percent",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷中，有232份答卷选择步行，占总数的80%。一共收到多少份答卷？",
              "answer": "290份",
              "skill": "unit-percent",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "390的60%是______。",
              "answer": "234",
              "skill": "unit-percent",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "一次问卷共收到270份答卷，其中54份选择了步行出行。选择步行的答卷占总数的百分之几？",
              "answer": "20%",
              "skill": "unit-percent",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
            "square-border",
            "square-dot-side",
            "odd-sum"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "第 1 层有 1 个点。每添一层依次增加 3、5、7……个点。添到第 4 层共有多少个点？",
              "answer": "16",
              "skill": "square-dot-total",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 3 行 3 列的方阵扩成 4 行 4 列，要增加多少个点？",
              "answer": "7",
              "skill": "square-border",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用 100 个点刚好排成实心正方形，每行有几个点？",
              "answer": "10",
              "skill": "square-dot-side",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从第 2 个奇数到第 9 个奇数（首尾都算）相加，和是多少？",
              "answer": "80",
              "skill": "odd-sum",
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
            "square-dot-total",
            "square-border",
            "square-dot-side",
            "odd-sum"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "第 1 层有 1 个点。每添一层依次增加 3、5、7……个点。添到第 11 层共有多少个点？",
              "answer": "121",
              "skill": "square-dot-total",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 12 行 12 列的方阵扩成 13 行 13 列，要增加多少个点？",
              "answer": "25",
              "skill": "square-border",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用 144 个点刚好排成实心正方形，每行有几个点？",
              "answer": "12",
              "skill": "square-dot-side",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从第 9 个奇数到第 14 个奇数（首尾都算）相加，和是多少？",
              "answer": "132",
              "skill": "odd-sum",
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
            "square-dot-total",
            "square-border",
            "square-dot-side",
            "odd-sum"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "第 1 层有 1 个点。每添一层依次增加 3、5、7……个点。添到第 16 层共有多少个点？",
              "answer": "256",
              "skill": "square-dot-total",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "把 21 行 21 列的方阵扩成 22 行 22 列，要增加多少个点？",
              "answer": "43",
              "skill": "square-border",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "用 64 个点刚好排成实心正方形，每行有几个点？",
              "answer": "8",
              "skill": "square-dot-side",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "从第 8 个奇数到第 10 个奇数（首尾都算）相加，和是多少？",
              "answer": "51",
              "skill": "odd-sum",
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
      "gradientTier": "three-tier-range",
      "gradientLabel": "三档数值",
      "gradientBadge": "info",
      "gradientNote": "基础/标准/提高三档采用独立递进的数值区间或图形步长",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-negative"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "早上气温是-3℃，中午比早上升高了9℃，中午的气温是多少？",
              "answer": "6℃",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "某地某天最高气温4℃，最低气温-5℃，这天的温差是多少？",
              "answer": "9℃",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "比较大小：-3 和 -2，哪个数更大？",
              "answer": "-2",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "早上气温是-8℃，中午比早上升高了8℃，中午的气温是多少？",
              "answer": "0℃",
              "skill": "unit-negative",
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
            "unit-negative"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "早上气温是-3℃，中午比早上升高了5℃，中午的气温是多少？",
              "answer": "2℃",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "某地某天最高气温6℃，最低气温-3℃，这天的温差是多少？",
              "answer": "9℃",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "比较大小：-10 和 -5，哪个数更大？",
              "answer": "-5",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "早上气温是-8℃，中午比早上升高了1℃，中午的气温是多少？",
              "answer": "-7℃",
              "skill": "unit-negative",
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
            "unit-negative"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "早上气温是-6℃，中午比早上升高了12℃，中午的气温是多少？",
              "answer": "6℃",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "某地某天最高气温8℃，最低气温-2℃，这天的温差是多少？",
              "answer": "10℃",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "比较大小：-13 和 -15，哪个数更大？",
              "answer": "-13",
              "skill": "unit-negative",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "早上气温是-16℃，中午比早上升高了6℃，中午的气温是多少？",
              "answer": "-10℃",
              "skill": "unit-negative",
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
            "discount-buy-get",
            "discount-stack"
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
              "question": "超市玩具每22元,买7送1。小明想买17件玩具,最少付多少钱?",
              "answer": "330元",
              "skill": "discount-buy-get",
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
            "discount-single",
            "discount-buy-get",
            "discount-stack"
          ],
          "formats": [
            "application"
          ],
          "samples": [
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
              "question": "一件服装原价47元,现在打5折,现价多少元?",
              "answer": "24元",
              "skill": "discount-single",
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
            "discount-single",
            "discount-stack",
            "discount-buy-get"
          ],
          "formats": [
            "application"
          ],
          "samples": [
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
              "question": "一件玩具原价97元,现在打6折,现价多少元?",
              "answer": "53元",
              "skill": "discount-single",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
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
              "answer": "1205.76 立方厘米",
              "skill": "cylinder-volume",
              "format": "geometry",
              "responseKind": null,
              "hasDiagram": true,
              "hasAnswerDiagram": false
            },
            {
              "question": "根据图中标注，求圆锥体积。π 取 3.14。",
              "answer": "904.32 立方厘米",
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
              "answer": "188.40 立方厘米",
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
              "answer": "84.78 立方厘米",
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
              "answer": "706.50 立方厘米",
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
              "answer": "226.08 立方厘米",
              "skill": "cylinder-volume",
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
              "question": "根据图中标注，求圆柱体积。π 取 3.14。",
              "answer": "1205.76 立方厘米",
              "skill": "cylinder-volume",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 5,
        "medium": 5,
        "hard": 5
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "solve-proportion",
            "proportion-check",
            "direct-proportion",
            "inverse-proportion",
            "map-scale"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "解比例：x∶3 = 12∶3。",
              "answer": "12",
              "skill": "solve-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "5∶4 和 20∶17 能组成比例吗？",
              "answer": "不能",
              "skill": "proportion-check",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每本练习本 3 元。买 2 本和买 6 本时，总价与本数成正比例还是反比例？",
              "answer": "正比例",
              "skill": "direct-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "同一段路以每小时 4 千米的速度走需 9 小时。若速度变为原来的 6 倍，速度和时间成什么比例？",
              "answer": "反比例",
              "skill": "inverse-proportion",
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
            "proportion-check",
            "direct-proportion",
            "inverse-proportion",
            "map-scale"
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
              "question": "2∶9 和 10∶45 能组成比例吗？",
              "answer": "能",
              "skill": "proportion-check",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每本练习本 5 元。买 5 本和买 2 本时，总价与本数成正比例还是反比例？",
              "answer": "正比例",
              "skill": "direct-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "同一段路以每小时 8 千米的速度走需 2 小时。若速度变为原来的 4 倍，速度和时间成什么比例？",
              "answer": "反比例",
              "skill": "inverse-proportion",
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
            "solve-proportion",
            "proportion-check",
            "direct-proportion",
            "inverse-proportion",
            "map-scale"
          ],
          "formats": [
            "practice"
          ],
          "samples": [
            {
              "question": "解比例：x∶4 = 48∶8。",
              "answer": "24",
              "skill": "solve-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "4∶6 和 28∶42 能组成比例吗？",
              "answer": "能",
              "skill": "proportion-check",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "每本练习本 5 元。买 8 本和买 7 本时，总价与本数成正比例还是反比例？",
              "answer": "正比例",
              "skill": "direct-proportion",
              "format": "practice",
              "responseKind": "short",
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "同一段路以每小时 3 千米的速度走需 4 小时。若速度变为原来的 3 倍，速度和时间成什么比例？",
              "answer": "反比例",
              "skill": "inverse-proportion",
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
      "gradientTier": "two-tier-range",
      "gradientLabel": "两档数值",
      "gradientBadge": "warning",
      "gradientNote": "目前仅区分基础与中高档数值范围，可进一步升级为独立阶梯考法",
      "skillCount": {
        "easy": 1,
        "medium": 1,
        "hard": 1
      },
      "hasDiagram": false,
      "byDifficulty": {
        "easy": {
          "generatedCount": 20,
          "targetCount": 20,
          "skills": [
            "unit-pigeonhole"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "抽屉里有2种颜色的袜子各若干只（黑暗中看不见颜色），至少要摸出多少只袜子，才能保证有2只同色？",
              "answer": "3只",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "37个人中，至少有几个人的生日在同一个月？",
              "answer": "4人",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒子里有3种颜色的球各若干个，至少摸出多少个球，才能保证有3个球同色？",
              "answer": "7个",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "图书角有22本书，放进4个书架，总有一个书架至少放多少本？",
              "answer": "6本",
              "skill": "unit-pigeonhole",
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
            "unit-pigeonhole"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "抽屉里有2种颜色的袜子各若干只（黑暗中看不见颜色），至少要摸出多少只袜子，才能保证有2只同色？",
              "answer": "3只",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "26个人中，至少有几个人的生日在同一个月？",
              "answer": "3人",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒子里有2种颜色的球各若干个，至少摸出多少个球，才能保证有3个球同色？",
              "answer": "5个",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "图书角有15本书，放进5个书架，总有一个书架至少放多少本？",
              "answer": "3本",
              "skill": "unit-pigeonhole",
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
            "unit-pigeonhole"
          ],
          "formats": [
            "application"
          ],
          "samples": [
            {
              "question": "抽屉里有3种颜色的袜子各若干只（黑暗中看不见颜色），至少要摸出多少只袜子，才能保证有2只同色？",
              "answer": "4只",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "21个人中，至少有几个人的生日在同一个月？",
              "answer": "2人",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "盒子里有2种颜色的球各若干个，至少摸出多少个球，才能保证有2个球同色？",
              "answer": "3个",
              "skill": "unit-pigeonhole",
              "format": "application",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "图书角有56本书，放进2个书架，总有一个书架至少放多少本？",
              "answer": "28本",
              "skill": "unit-pigeonhole",
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
            "arithmetic-result",
            "arithmetic-operand",
            "train-bridge-time",
            "three-cattle-chicken",
            "statistics-mean",
            "sports-single",
            "interest-find-total",
            "gc-square-grid",
            "logic-liar-truth",
            "pigeon-socks",
            "perfect-square-judge"
          ],
          "formats": [
            "arithmetic",
            "fill",
            "application",
            "olympiad"
          ],
          "samples": [
            {
              "question": "34 ÷ 17 = ______",
              "answer": "2",
              "skill": "arithmetic-result",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "770 × ______ = 324170",
              "answer": "421",
              "skill": "arithmetic-operand",
              "format": "fill",
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
              "question": "牧场里有牛、羊、鸡共13只,腿数共44条,牛和羊都是4条腿、鸡2条腿,且牛比羊多3只。求牛、羊、鸡各多少只?",
              "answer": "牛3只,羊6只,鸡4只",
              "skill": "three-cattle-chicken",
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
            "arithmetic-result",
            "arithmetic-operand",
            "ratio-scale",
            "proportion-three-parts",
            "distance-meet",
            "train-tunnel-time",
            "magic-3-row",
            "perfect-square-divisor-count",
            "prob-compare",
            "extreme-min-perimeter"
          ],
          "formats": [
            "arithmetic",
            "fill",
            "application",
            "olympiad"
          ],
          "samples": [
            {
              "question": "60 ÷ 20 = ______",
              "answer": "3",
              "skill": "arithmetic-result",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "348 - ______ = 199",
              "answer": "149",
              "skill": "arithmetic-operand",
              "format": "fill",
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
              "question": "把157支笔按3:3:4的比例分给三人,各分多少?",
              "answer": "47支、47支、63支",
              "skill": "proportion-three-parts",
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
            "arithmetic-result",
            "arithmetic-operand",
            "train-cross-meet",
            "duty-last",
            "sports-relay",
            "interest-compare",
            "age-meet-sum",
            "sequence-double-diff",
            "prob-two-stage",
            "coloring-domino",
            "comb-ball",
            "nt-puzzle"
          ],
          "formats": [
            "arithmetic",
            "fill",
            "application",
            "olympiad"
          ],
          "samples": [
            {
              "question": "307 - 211 = ______",
              "answer": "96",
              "skill": "arithmetic-result",
              "format": "arithmetic",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
            {
              "question": "______ - 239 = 205",
              "answer": "444",
              "skill": "arithmetic-operand",
              "format": "fill",
              "responseKind": null,
              "hasDiagram": false,
              "hasAnswerDiagram": false
            },
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
            }
          ]
        }
      }
    }
  ]
};
