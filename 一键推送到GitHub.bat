@echo off
title Push to GitHub - Primary Math Generator
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\push.ps1"
if %errorlevel% neq 0 (
    echo.
    echo Script ended with code %errorlevel%.
    pause
)
