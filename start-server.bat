@echo off
echo ========================================
echo   SERVER LOCALE PER TEST MOBILE
echo ========================================
echo.
echo Il server sta partendo...
echo.

cd /d "%~dp0"

py -m http.server 8000 --bind 0.0.0.0

pause
