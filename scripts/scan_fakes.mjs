import fs from 'node:fs';
const files = [
  'prototype/unitPlugins.js',
  'prototype/scopeProblems.js',
  'prototype/geometryProblems.js',
  'prototype/gridProblems.js',
  'prototype/diagramProblems.js',
  'prototype/paper.js'
];

console.log('=== 扫描代码中生硬防去重拼接（如 第${guard}组） ===');
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.match(/第\s*\$\{\s*(?:guard|attempts|index|i)/) || l.includes('（第') || l.includes('(第')) {
      if (l.includes('guard') || l.includes('attempts') || l.includes('index') || l.includes('${i}')) {
        console.log(`[${f}:${i+1}] ${l.trim()}`);
      }
    }
  });
});
