---
trigger: always_on
---

# 小学数学出题小程序 · AI 协作与项目管理强制规范

## 1. 每次会话启动必读（防失忆铁律）
在回答用户任务或修改任何代码之前，请确保你已掌握当前项目进度：
- 全局状态与模块地图：[`PROJECT_STATUS.md`](../../PROJECT_STATUS.md)
- 完整变更历史与版本台账：[`CHANGELOG.md`](../../CHANGELOG.md)
- 可视化管理看板数据：[`prototype/projectStatus.js`](../../prototype/projectStatus.js)（由 `node scripts/manage.mjs` 自动生成）

## 2. 每次修改代码后的强制收尾动作（不可跳过！）
只要你修改了 `prototype/` 下的任何代码、题型插件、单元配置或样式，在向用户汇报完成前 **必须依次执行以下三步**：
1. **运行管理巡检脚本**：
   执行 `node scripts/manage.mjs`（或直接执行 `node scripts/manage.mjs snapshot "本次改动简述"`）。
   - 该命令会自动运行全部 5 个测试套件（`smoke-test`、`coverage-test`、`correctness-test`、`daily-practice-test`、`difficulty-gradient-test`），确保零回归错误。
   - 自动扫描 93 个教材单元的三档难度（`easy/medium/hard`）状态并更新 [`prototype/projectStatus.js`](../../prototype/projectStatus.js) 看板数据。
2. **更新文档台账**：
   - 在 [`CHANGELOG.md`](../../CHANGELOG.md) 顶部记录本次修改的模块、新增/调整的考法及验证结果。
   - 若完成了待办事项或推进了里程碑，同步勾选 [`PROJECT_STATUS.md`](../../PROJECT_STATUS.md) 与 [`.workbuddy/memory/MEMORY.md`](../../.workbuddy/memory/MEMORY.md)。
   - 若修改了前端 JS/CSS，递增 `prototype/index.html` 或 `prototype/admin.html` 中的 `?v=` 版本号防止浏览器缓存。
3. **保存 Git 版本快照**：
   - 使用 `node scripts/manage.mjs snapshot "改动说明"` 或 `git add -A && git commit -m "..."` 将改动归档到 Git 历史，确保随时可回滚。

## 3. 产品核心红线（绝对不可违反）
1. **纯算法实时生成，绝不做题库、不存题目**：个人主体按微信小程序“工具”类目申报，禁止任何题目持久化存储。
2. **合规文案红线**：界面与导出物只用“单元同步练 / 练习卷 / 实时生成 / 导出打印”，严禁出现“真题 / 试卷 / 小升初 / 名校 / 提分 / 课程 / 讲解 / 辅导”。
3. **技术约束**：
   - 底层引擎 `config.digits` 四键（`add/subtract/multiply/divide`）必须齐全，`termCount` 必传。
   - 单元专属插件必须保证同一张卷子内考法轮转不连续重复（`subtemplateId` 相邻不重）、数学答案可独立复算验证。
