# Cloudflare Pages 部署指引（本项目专用）

> 目标：拿到一个短到能念出来的地址，替换掉 `hasesc.github.io/primary-math-generator`。
> 项目：`hasesc/primary-math-generator` ｜ 前端目录：`prototype/` ｜ 无需构建

---

## 先选路：5 分钟验证 vs 长期自动

| 方式 | 适合 | 耗时 | 以后更新 |
|---|---|---|---|
| **A. 直接上传（Upload assets）** | 只想先试试能不能打开 | 5 分钟 | 每次改完手动重传，麻烦 |
| **B. 连 Git（Connect to Git）** | 打算长期用 | 10 分钟 | push 到 main 自动部署，推荐 |

建议：**先用 A 花 5 分钟确认地址能打开、你的手机能访问，再决定要不要做 B。** 因为下面第 6 节讲了国内访问的问题，万一 A 试完发现打不开，你就不用白折腾 Git 授权。

---

## A. 直接上传（5 分钟）

1. 打开 `dash.cloudflare.com`，注册免费账号（邮箱验证即可，不用绑卡）
2. 左侧 **Workers & Pages** → **Create** → 选 **Pages** → **Upload assets**
3. 项目名填一个短的英文小写词，比如 `lianxi`、`xiaojuan`、`mathtest`
   → 你的地址就是 `项目名.pages.dev`，**这个名字改不了，想清楚再填**
4. 把本地 `prototype` 文件夹整个拖进去（拖文件夹，不是拖里面的文件）
5. **Deploy site** → 等十几秒
6. 拿到 `https://项目名.pages.dev`，手机开 4G 打开试三次

> 注意：拖的是 `prototype` 文件夹的内容，站点根路径就是应用首页。访问 `项目名.pages.dev` 直接进工作台，比 GitHub Pages 少一跳。

---

## B. 连 Git（10 分钟，之后自动部署）

1. 同上第 1~2 步，这一步选 **Connect to Git**（Cloudflare 正在把 Pages 并入 Workers，入口措辞可能会变成 "Create an application → Pages → Import an existing Git repository"，找 Pages 就对了）
2. 授权 GitHub，选中 `hasesc/primary-math-generator`
3. 填写构建设置 —— **这一步填错是最常见的失败原因**：

   | 字段 | 填什么 |
   |---|---|
   | Project name | 短英文小写词，决定 `xxx.pages.dev` |
   | Production branch | `main` |
   | Framework preset | `None` |
   | Build command | **留空**（纯静态，没有构建步骤） |
   | Build output directory | **`prototype`** ← 关键 |
   | Root directory | 留空 |

4. **Save and Deploy**，30~60 秒完成
5. 以后每次 `git push` 到 main，自动重新部署（和你现在的 GitHub Actions 是两套并行，互不冲突）

---

## 这个项目特有的 4 个坑

1. **输出目录必须填 `prototype`。** 留空或填 `.` 会把仓库根目录当站点——根目录那个 `index.html` 是个跳转页，会跳到 `prototype/index.html`，而 Cloudflare 上没有这个路径，直接 404。
2. **`prototype/_headers` 会被自动读取**，安全响应头就此生效。根目录那份 `_headers` 和 `vercel.json` 在 Cloudflare 下不起作用（也不用删，不影响）。
3. **`prototype` 里的测试文件会被一起公开**：9 个 `*.mjs` 测试脚本、`projectStatus.js` 都会变成可下载的静态文件。没有敏感信息，但会被扒走。介意的话部署前挪到一个 `tests/` 目录（挪之前记得改 `manage.mjs` 里的路径）。
4. **`admin.html` 会公开可访问**。管理看板本来就是只读的，问题不大，但心里有数。

---

## 免费额度（够用到天荒地老）

无限请求、无限带宽、每月 500 次构建、单文件上限 25 MiB。你这个纯前端项目，等于永久免费。

---

## 第 6 节：说点不好听的

**README 里写的"Cloudflare Pages 部署（国内网络访问极佳，推荐）"这句不准确，建议改掉。**

真实情况：`*.pages.dev` 在国内可用性不稳定 —— 时快时慢，偶尔直接连不上，因为免费版 Cloudflare 的节点调度不保障国内访问质量。绑定自己的域名会稍好一点（解析可以优化），但本质上还是境外节点，不是国内 CDN。

所以：

- **如果只是自己用、发给朋友用** → Cloudflare Pages 完全够，今天就搞定
- **如果要给小红书上的陌生家长用** → 别指望境外免费托管，最稳的是「国内对象存储（阿里云 OSS / 腾讯云 COS）+ 已备案域名」，备案 10~20 天，一年几十块
- **最根本的解法** → 等微信小程序过审。小程序在微信里打开不受这些网络问题影响，那才是你的主场，网页只是过渡

**顺序建议**：先花 5 分钟用 A 方式传上去，手机 4G 实测。能稳定打开 → 继续做 B 并绑定域名；打不开 → 别再往 Cloudflare 投入时间，直接走备案或者等小程序。

---

## 配套建议：装个免费统计

页面能打开之后，装 **Cloudflare Web Analytics**（后台 → Analytics → Web Analytics，免费、不需要 cookie、不用改代码，加一段 JS 或走 Pages 的自动注入）。

装它不是为看流量，是为了回答你真正想知道的那个问题：**到底有没有人打开过。** 有 3 个人打开、其中 1 个人出了卷子，这次推广就有意义了。
