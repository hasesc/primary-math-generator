// scripts/serve.mjs —— 轻量级零依赖本地 HTTP 服务器
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';

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

function startServer(port = 3000) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
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

startServer(3000);
