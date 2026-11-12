import fs from 'node:fs';
const c = fs.readFileSync('prototype/scopeProblems.js', 'utf8');
const lines = c.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('等水烧开要') || l.includes('打水要') || l.includes('天平') || l.includes('零件') || l.includes('每隔1米')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});
