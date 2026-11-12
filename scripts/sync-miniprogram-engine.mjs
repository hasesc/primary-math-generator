// scripts/sync-miniprogram-engine.mjs
// 将 prototype/ 下经过全量测试的纯算法生成引擎同步复制到 repos/skeleton/miniprogram/engine/

import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = 'prototype';
const DEST_DIR = 'repos/skeleton/miniprogram/engine';

fs.mkdirSync(DEST_DIR, { recursive: true });

const CORE_FILES = [
  'units.js',
  'paper.js',
  'scopeProblems.js',
  'unitPlugins.js',
  'conceptProblems.js',
  'geometryProblems.js',
  'gridProblems.js',
  'diagramProblems.js',
  'dailyPractice.js',
];

for (const file of CORE_FILES) {
  const src = path.join(SRC_DIR, file);
  const dest = path.join(DEST_DIR, file);
  fs.copyFileSync(src, dest);
}
console.log('Copied core engine files.');

function copyDirRecursive(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

// Copy entire prototype/engine directory to repos/skeleton/miniprogram/engine/engine
copyDirRecursive(path.join(SRC_DIR, 'engine'), path.join(DEST_DIR, 'engine'));
console.log('Copied entire engine/ directory recursively.');

console.log('Engine sync complete.');
