# 📐 Primary Math Practice Generator (小学数学 · 单元同步练习生成器)

<p align="center">
  <img src="output/branding/miniapp-avatar-144.png" width="96" height="96" alt="Logo" style="border-radius:24px;">
</p>

<p align="center">
  <strong>专为小学生家长、数学老师与教育从业者设计的全端开源练习卷生成与排版打印神器</strong><br>
  人教版 1~6 年级上下册 <strong>94 个单元全量覆盖</strong> · 纯算法实时运算 · 零题库存储 · 零服务器成本 · PC/手机/平板全端自适应
</p>

<p align="center">
  <a href="https://github.com"><img src="https://img.shields.io/badge/License-MIT%20%2F%20MulanPSL-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/Tests-9%2F9%20Passing-brightgreen.svg" alt="Tests">
  <img src="https://img.shields.io/badge/Platform-Web%20%7C%20PWA%20%7C%20MiniProgram-orange.svg" alt="Platform">
  <img src="https://img.shields.io/badge/PRs-Welcome-green.svg" alt="PRs Welcome">
</p>

---

## 🌟 核心亮点

- 🎯 **人教版 1~6 年级 94 个单元全覆盖**：严格对齐最新义务教育课程标准，包含数的认识、多位数四则运算、分数小数、图形几何、时分秒、统计图表与实践操作。
- ⚡ **真正的“无限题库”（纯算法本地实时生成）**：
  - 零网络数据库依赖，零静态死题。
  - 手机或电脑在离线飞行模式下，亦可毫秒级实时生成不重复的全新题目与对应参考答案。
- 💯 **全真 100 分制单元测验卷模式**：
  - 严格按照期中期末试卷结构排版：填空(20分) + 判断(10分) + 选择(10分) + 计算(30分) + 操作(10分) + 应用(20分)。
  - 配备评分标准与详尽的【解题思路点拨】，家长无需懂奥数也能辅导。
- 📝 **工业级 A4 作业本横线作答留白**：
  - 解决应用题下方无处书写的痛点：每道解决问题配有 26mm A4 标准作答空间、作业本横线及“答：_______”规范引导。
  - 脱式计算配有 3 步递进等号留白，严格应用 `break-inside: avoid` 防跨页撕裂保护。
- 📊 **自研纯 SVG 矢量几何与图表引擎**：
  - 🕒 钟表认读与画指针（整时、半时、旋转角）
  - 📊 单/复式条形统计图、折线走势图、扇形百分比统计图
  - 📐 方格纸平移、轴对称、旋转、数对与位置坐标
  - 🧊 观察物体三视图、圆柱圆锥展开、组合图形面积
- 🧮 **每日一练专项（口算 + 竖式）**：
  - **口算天天练**：14 个专项范围（10以内至小数速算），两列紧凑网格。
  - **竖式天天练**：10 个规范竖式专项，含进退位标记与标准除法竖式框。
- 📱 **全端通吃 + PWA 离线桌面应用**：
  - **PC 电脑端**：大屏双栏预览、标尺级排版、一键导出/打印 A4 高清矢量 PDF。
  - **手机 / 平板端**：底部常驻大拇指触控栏、卡片化题流、支持“添加到手机桌面”秒变原生 App。
- ☁️ **0 元终身免维护**：
  - 纯前端客户端运算，无需购买服务器、无需域名备案，一键免费部署至 GitHub Pages 或 Vercel。

---

## 🚀 在线体验与一键部署

### 🌐 在线即刻使用
- **GitHub Pages 在线访问**：[立即进入工作台](https://hasesc.github.io/primary-math-generator/)
- **添加到手机桌面 (PWA)**：
  - iOS (Safari)：点击底部分享按钮 -> 选择 **“添加到主屏幕”**。
  - Android (Chrome/Edge)：点击右上角菜单 -> 选择 **“安装应用”** 或 **“添加到桌面”**。

### ⚡ 方式 1：一键免费部署（国内免翻，全球极速）

#### 选项 A：Cloudflare Pages 部署（国内网络访问极佳，推荐 ⭐）
1. 访问 [Cloudflare 控制台](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **Create application** -> **Pages**。
2. 点击 **Connect to Git** 并选中本仓库 `hasesc/primary-math-generator`。
3. 构建配置参数：
   - **Framework preset**（框架预设）：`None`
   - **Build command**（构建命令）：留空
   - **Build output directory**（输出目录）：`prototype`
4. 点击 **Save and Deploy**，30 秒即可获得专属 `*.pages.dev` 全球极速直连域名。

#### 选项 B：Vercel 一键部署
点击下方按钮，免费将本项目一键部署到你自己的 Vercel 账号：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhasesc%2Fprimary-math-generator)

### 📦 方式 2：本地双击直接运行（无需联网）
1. 下载或克隆本项目：
   ```bash
   git clone https://github.com/hasesc/primary-math-generator.git
   ```
2. 双击根目录下的 **`双击启动出题器.bat`**。
3. 浏览器将自动弹开本地出题工作台：`http://localhost:3000`。

---

## 🛠️ 项目架构与模块索引

```text
├── index.html                   # 根目录静态重定向与入口页
├── vercel.json                  # Vercel 一键部署路由与安全头配置
├── 双击启动出题器.bat             # Windows 桌面一键启动脚本
├── prototype/                   # 全端 Web 核心引擎与应用
│   ├── index.html               # 响应式四步出卷主界面
│   ├── admin.html               # 94 单元管理看板与状态大屏
│   ├── app.js                   # 前端交互、题型识别与排版调度
│   ├── style.css                # 现代教育工作台 UI 与 A4 打印专用样式表
│   ├── manifest.json            # PWA 桌面应用清单
│   ├── units.js                 # 人教版 94 单元教材映射与考点分级
│   ├── paper.js                 # 组卷核心纯函数调度器 & 100分制测验卷引擎
│   ├── dailyPractice.js         # 24 个口算/竖式每日一练专项插件
│   ├── scopeProblems.js         # 41 个课标专项算法题库
│   ├── unitPlugins.js           # 专属单元插件（方程、人民币、百分数二等）
│   ├── conceptProblems.js       # 判断题与选择题算法生成器
│   ├── geometryProblems.js      # 17 个几何图形与三视图插件
│   ├── gridProblems.js          # 6 个方格纸作图与位置插件
│   ├── diagramProblems.js       # 8 个钟表与统计图表插件
│   └── renderDiagram.js         # 纯 SVG 矢量图表高分辨率渲染器
├── repos/
│   └── skeleton/                # 微信小程序原生工程（同套引擎内核）
│       └── miniprogram/
│           ├── engine/          # 纯算法导出内核（纯字符串 SVG 渲染）
│           └── pages/           # 小程序首页、试卷页与关于页
├── scripts/                     # 自动化测试与工程化巡检
│   ├── manage.mjs               # 9 大测试套件与看板数据更新 CLI
│   ├── serve.mjs                # 本地极速 A4 矢量 PDF 导出服务
│   └── sync-miniprogram-engine.mjs # 引擎双向同步脚本
└── .github/workflows/           # GitHub Actions 自动化 CI/CD
    └── deploy.yml               # 自动跑测并部署至 GitHub Pages
```

---

## 🧪 自动化测试与质量防线

本项目严格践行防御性编程，每次迭代必须执行全部 **9 大自动化测试套件**（100% 满分通过）：

```bash
node scripts/manage.mjs
```

```text
🔍 [1/4] 正在执行 9 大自动化测试套件...
   ✅ 整卷生成冒烟测试 (6年级×3难度)
   ✅ 94单元全量联动与762配置覆盖测试
   ✅ 数学答案独立逆向复算测试 (160轮)
   ✅ 口算/竖式每日一练专项测试 (186配置)
   ✅ 三档难度阶梯考法与答案测试
   ✅ 同卷考法轮转相邻不重复测试 (94单元×3档×6轮)
   ✅ 题面有效性、唯一解与必备考点回归测试
   ✅ 100分制单元测验卷全链路测试 (6年级×3难度)
   ✅ 微信小程序引擎全链路与SVG测试
```

---

## 🤝 参与贡献

欢迎提出 Issue、分享教学用卷需求或提交 Pull Request！
1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 运行 `node scripts/manage.mjs` 确保测试全部通过
5. 推送到分支 (`git push origin feature/AmazingFeature`)
6. 提交 Pull Request

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 与 [Mulan PSL v2](LICENSE) 双协议开源。你可以自由下载、二次修改、为孩子与班级免费打印出卷，商业衍生请注明出处。
