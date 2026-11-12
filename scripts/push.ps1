[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "小学数学出题器 - 一键推送到 GitHub"

Write-Host ""
Write-Host "===================================================================" -ForegroundColor Cyan
Write-Host "       小学数学出题器 - 一键推送到 GitHub 远程仓库" -ForegroundColor Cyan
Write-Host "===================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "目标仓库: https://github.com/hasesc/primary-math-generator.git" -ForegroundColor Yellow
Write-Host "当前分支: master" -ForegroundColor Yellow
Write-Host ""
Write-Host "【提示】如果系统弹出浏览器登录/授权窗口，请在网页中点击 [Authorize] 完成授权。" -ForegroundColor Gray
Write-Host ""
Write-Host "-------------------------------------------------------------------"
Write-Host "正在推送到 GitHub，请稍候..."
Write-Host "-------------------------------------------------------------------"
Write-Host ""

git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "===================================================================" -ForegroundColor Green
    Write-Host " [成功] 全部代码与文档已成功推送到 GitHub 仓库！" -ForegroundColor Green
    Write-Host " 仓库主页: https://github.com/hasesc/primary-math-generator" -ForegroundColor Green
    Write-Host "===================================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "===================================================================" -ForegroundColor Red
    Write-Host " [提示] 推送遇到问题，请检查网络或授权窗口。" -ForegroundColor Red
    Write-Host "===================================================================" -ForegroundColor Red
}

Write-Host ""
Write-Host "按回车键退出..."
Read-Host
