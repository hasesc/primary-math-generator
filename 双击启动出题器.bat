@echo off
chcp 65001 >nul
title 小学数学 · 单元同步练习出题器
echo ========================================================
echo   小学数学 · 单元同步练习出题器（本地高速运行环境）
echo ========================================================
echo.
echo 正在启动本地服务并自动唤起浏览器，请稍候...
echo.

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo 【错误】未检测到 Node.js 环境！
    echo 请先安装 Node.js (https://nodejs.org/) 后再运行本程序。
    pause
    exit /b
)

node scripts/serve.mjs
pause
