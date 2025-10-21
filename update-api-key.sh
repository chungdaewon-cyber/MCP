#!/bin/bash
# Anthropic API 키 업데이트 스크립트
# Usage: ./update-api-key.sh

echo "🔐 Anthropic API 키 업데이트"
echo ""
echo "⚠️  주의: 새로 발급받은 API 키를 입력하세요"
echo "   (Console에서 복사한 키를 붙여넣기)"
echo ""
read -p "새 Anthropic API 키: " NEW_API_KEY

# 키 형식 검증
if [[ ! $NEW_API_KEY =~ ^sk-ant-api ]]; then
    echo "❌ 오류: 잘못된 API 키 형식입니다."
    echo "   Anthropic API 키는 'sk-ant-api'로 시작해야 합니다."
    exit 1
fi

# .env 파일 백업
if [ -f "/home/user/MCP/.env" ]; then
    cp /home/user/MCP/.env /home/user/MCP/.env.backup.$(date +%Y%m%d_%H%M%S)
    echo "✅ 기존 .env 파일 백업 완료"
fi

# .env 파일에서 ANTHROPIC_API_KEY 업데이트
if [ -f "/home/user/MCP/.env" ]; then
    # 기존 키를 새 키로 교체
    sed -i "s|ANTHROPIC_API_KEY=\".*\"|ANTHROPIC_API_KEY=\"$NEW_API_KEY\"|g" /home/user/MCP/.env
    echo "✅ .env 파일 업데이트 완료"
else
    echo "❌ 오류: .env 파일을 찾을 수 없습니다."
    exit 1
fi

# 환경 변수 재로드
echo ""
echo "🔄 환경 변수 재로드 중..."
export ANTHROPIC_API_KEY="$NEW_API_KEY"

# 키 확인 (마스킹)
echo ""
echo "✅ 새 API 키가 설정되었습니다:"
echo "   ${NEW_API_KEY:0:20}...${NEW_API_KEY: -6}"
echo ""
echo "🚀 완료! 이제 MCP 서버를 안전하게 사용할 수 있습니다."
echo ""
echo "다음 명령어로 환경 변수를 로드하세요:"
echo "  source /home/user/MCP/setup-env.sh"
echo ""
