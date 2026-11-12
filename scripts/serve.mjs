// scripts/serve.mjs —— 轻量级本地 HTTP 服务器（含直接导出 A4 矢量 PDF 引擎）
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'prototype');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

// 后台 Headless Chromium 实例池（单例复用，极速导出，平均响应仅约 200ms）
let browserPromise = null;

async function getBrowser() {
  if (!browserPromise) {
    const { chromium } = require('C:/Users/ASUS/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
    browserPromise = chromium.launch({
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    }).catch((err) => {
      browserPromise = null;
      throw err;
    });
  }
  return browserPromise;
}

async function renderPdfFromHtml(html) {
  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    const cssPath = path.join(ROOT, 'prototype', 'style.css');
    const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';
    const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<style>
${css}
@page { size: A4 portrait; margin: 12mm 14mm; }
body { background: #ffffff !important; margin: 0 !important; padding: 0 !important; }
.paper { border: none !important; box-shadow: none !important; margin: 0 !important; width: 100% !important; padding: 0 !important; }
.hidden { display: none !important; }
.no-print { display: none !important; }
#answer-sheet { page-break-before: always; }
</style>
</head>
<body>
${html}
</body>
</html>`;
    await page.setContent(fullHtml, { waitUntil: 'load' });
    await page.emulateMedia({ media: 'print' });
    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '12mm', bottom: '12mm', left: '14mm', right: '14mm' }
    });
    return buffer;
  } finally {
    await page.close();
  }
}

function startServer(port = 3000) {
  const server = http.createServer((req, res) => {
    try {
      const urlObj = new URL(req.url, `http://localhost:${port}`);
      const urlPath = decodeURIComponent(urlObj.pathname);

      // 直接导出 PDF 服务健康检查
      if (req.method === 'GET' && urlPath === '/api/export-pdf/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', engine: 'headless-chromium' }));
        return;
      }

      // 直接导出真实 A4 PDF 接口（纯后台生成，无需调用系统打印机）
      if (req.method === 'POST' && urlPath === '/api/export-pdf') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
          if (body.length > 20 * 1024 * 1024) req.destroy();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { html, filename } = data;
            if (!html) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: '缺少 HTML 内容' }));
              return;
            }
            const pdfBuffer = await renderPdfFromHtml(html);
            const safeName = encodeURIComponent(filename || '小学数学练习卷.pdf');
            res.writeHead(200, {
              'Content-Type': 'application/pdf',
              'Content-Disposition': `attachment; filename="${safeName}"; filename*=UTF-8''${safeName}`,
              'Content-Length': pdfBuffer.length,
            });
            res.end(pdfBuffer);
          } catch (err) {
            console.error('❌ PDF 生成异常:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          }
        });
        return;
      }

      let filePath = path.join(ROOT, urlPath);

      if (urlPath === '/' || urlPath === '') {
        filePath = path.join(ROOT, 'prototype', 'index.html');
      } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      // 只允许访问 prototype/ 目录，且禁止任何隐藏文件（如 .git），防止本机源码被其他网页读取
      const rel = path.relative(PUBLIC_DIR, filePath);
      if (rel.startsWith('..') || path.isAbsolute(rel) || rel.split(path.sep).some((s) => s.startsWith('.'))) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Forbidden');
        return;
      }

      if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`404 Not Found: ${urlPath}`);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      const content = fs.readFileSync(filePath);

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      });
      res.end(content);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Server Error: ' + err.message);
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ 端口 ${port} 已被占用，尝试使用端口 ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('❌ 服务器启动异常:', err);
    }
  });

  server.listen(port, '127.0.0.1', () => {
    const targetUrl = `http://127.0.0.1:${port}/prototype/index.html`;
    const adminUrl = `http://127.0.0.1:${port}/prototype/admin.html`;
    console.log('\n======================================================');
    console.log('🚀 小学数学出题小程序 · 本地高速服务器已就绪！');
    console.log(`👉 出卷主页面：${targetUrl}`);
    console.log(`📊 管理看板页：${adminUrl}`);
    console.log('======================================================\n');
    console.log('💡 正在为您自动在默认浏览器中打开页面...');

    // 跨平台自动拉起浏览器，Windows 下使用 PowerShell Start-Process 避免 ShellExecute 协议弹窗
    if (process.platform === 'win32') {
      exec(`powershell -NoProfile -Command "Start-Process '${targetUrl}'"`, (err) => {
        if (err) {
          exec(`start msedge "${targetUrl}"`, () => {});
        }
      });
    } else if (process.platform === 'darwin') {
      exec(`open "${targetUrl}"`);
    } else {
      exec(`xdg-open "${targetUrl}"`);
    }
  });
}

function cleanup() {
  if (browserPromise) {
    browserPromise.then((b) => b.close().catch(() => {})).catch(() => {});
  }
}
process.on('SIGINT', () => { cleanup(); process.exit(); });
process.on('exit', cleanup);

startServer(3000);
