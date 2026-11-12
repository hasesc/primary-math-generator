@echo off
chcp 65001 >nul
title 小学数学出题器 - 一键推送到 GitHub

echo ===================================================================
echo        小学数学出题器 - 一键推送到 GitHub (hasesc/primary-math-generator)
echo ===================================================================
echo.
echo 正在准备推送到远程仓库:
echo URL: https://github.com/hasesc/primary-math-generator.git
echo 分支: master
echo.
echo [提示] 如果系统弹出了 GitHub 浏览器登录/授权窗口：
echo        请点击 [Sign in with your browser] -> [Authorize GitCredentialManager]
echo        授权后 Windows 将永久记住凭据，后续无需再登录！
echo.
echo -------------------------------------------------------------------
echo 正在推送代码，请稍候...
echo -------------------------------------------------------------------

git push -u origin master

if %errorlevel% equ 0 (
    echo.
    echo ===================================================================
    echo  [成功] 全部代码与文档已成功推送到 GitHub 仓库！
    echo  仓库地址: https://github.com/hasesc/primary-math-generator
    echo ===================================================================
) else (
    echo.
    echo ===================================================================
    echo  [提示] 推送遇到问题，请检查网络或授权窗口。
    echo ===================================================================
)

echo.
echo 按任意键退出窗口...
pause >nul
