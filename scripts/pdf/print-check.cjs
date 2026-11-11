const { chromium } = require('C:/Users/ASUS/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('prototype');
const cases = [
  ['oral', 'oral', 2, null, '表内乘法', 40],
  ['vertical-decimal', 'vertical', 4, null, '小数加减法', 20],
  ['vertical-multiply', 'vertical', 4, null, '三位数乘两位数', 20],
  ['vertical-divide', 'vertical', 5, null, '小数除法', 20],
  ['unit-number', 'unit', 2, '下', '万以内数的认识', 40],
  ['unit-chart', 'unit', 6, '上', '扇形统计图', 20],
  ['unit-grid', 'unit', 5, '下', '图形的运动（三）', 6],
  ['unit-solid', 'unit', 5, '下', '观察物体（三）', 6],
];
const server = http.createServer(async (req, res) => {
  try {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/\/$/, '/index.html'));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const data = await fs.readFile(file);
    res.setHeader('Content-Type', ({'.js':'text/javascript; charset=utf-8','.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'})[path.extname(file)] || 'application/octet-stream');
    res.end(data);
  } catch { res.writeHead(404).end(); }
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  await fs.mkdir('output/pdf', {recursive:true});
  const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  try {
    const page = await browser.newPage({viewport:{width:1254,height:877}});
    page.on('pageerror', error => console.log('PAGE ERROR', error.message));
    page.on('console', msg => { if (msg.type() === 'error') console.log('CONSOLE', msg.text()); });
    page.on('response', response => { if (response.status() !== 200) console.log('HTTP',response.status(),response.url()); });
    for (const [name, mode, grade, semester, range, count] of cases) {
      await page.emulateMedia({media:'screen'});
      await page.goto(`http://127.0.0.1:${server.address().port}/`);
      console.log(name, 'loaded', await page.locator('#grade-options').innerText());
      await page.evaluate(() => { let seed=7351; Math.random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32); });
      const modeName = {unit:'单元同步练',oral:'口算每日一练',vertical:'竖式每日一练'}[mode];
      await page.getByRole('button',{name:modeName,exact:true}).click();
      await page.getByRole('button',{name:`${grade} 年级`,exact:true}).click();
      if (semester) await page.getByRole('button',{name:`${semester}学期`,exact:true}).click();
      await page.getByRole('button',{name:/下一步/}).click();
      await page.locator('#unit-list button').filter({hasText:range}).click();
      await page.getByRole('button',{name:`${count} 题`,exact:true}).click();
      await page.getByRole('button',{name:/实时生成整卷/}).click();
      await page.locator('#paper-view').waitFor({state:'visible'});
      assert.equal(await page.locator('#paper-sections .q').count(),count);
      await page.getByRole('button',{name:'显示答案页',exact:true}).click();
      assert.equal(await page.locator('#answer-sections .ans-item').count(),count);
      await page.emulateMedia({media:'print'});
      await page.pdf({path:`output/pdf/${name}.pdf`,preferCSSPageSize:true,printBackground:true,displayHeaderFooter:false});
      console.log(name, count, 'questions + answers printed');
    }
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode=1; });

