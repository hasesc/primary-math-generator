@echo off
title Math Paper Generator
cd /d "%~dp0"
echo ========================================================
echo   Primary Math Practice Generator
echo ========================================================
echo.
echo Starting local server and opening browser, please wait...
echo.
node scripts\serve.mjs
if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to start server. Please make sure Node.js is installed.
    pause
)
