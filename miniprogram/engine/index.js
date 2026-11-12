// repos/skeleton/miniprogram/engine/index.js
// 小程序出题引擎统一入口

export { UNITS, gradeDefaults } from './units.js';
export { generatePaper, generateExamPaper } from './paper.js';
export { DAILY_RANGES, generateDailyPractice } from './dailyPractice.js';
export { renderDiagramSVG, diagramToDataUrl } from './renderDiagramSVG.js';
export { SCOPE_PLUGINS } from './scopeProblems.js';
export { UNIT_PLUGINS } from './unitPlugins.js';
