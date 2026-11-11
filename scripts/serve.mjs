// scripts/serve.mjs —— 轻量级零依赖本地 HTTP 服务器
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

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

      if (!filePath.startsWith(ROOT)) {
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
        'Access-Control-Allow-Origin': '*',
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

    // Windows 自动调用默认浏览器
    const openCmd = process.platform === 'win32'
      ? `start "" "${targetUrl}"`
      : process.platform === 'darwin'
        ? `open "${targetUrl}"`
        : `xdg-open "${targetUrl}"`;

    exec(openCmd, (err) => {
      if (err) console.log(`（请在浏览器地址栏手动输入：${targetUrl}）`);
    });
  });
}

startServer(3000);
