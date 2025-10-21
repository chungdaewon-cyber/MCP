@echo off
echo ========================================
echo MCP 프로젝트 경로 찾기
echo ========================================
echo.
echo 현재 디렉토리:
cd
echo.
echo MCP 폴더 검색 중...
echo.
dir /s /b /ad marketgrid-website 2>nul | findstr /i "MCP\\marketgrid-website"
echo.
echo ========================================
echo 위에 표시된 경로가 프로젝트 위치입니다!
echo ========================================
pause
