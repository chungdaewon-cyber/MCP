# MCP Servers Installation

MCP(Model Context Protocol) 서버들의 설정 및 의존성을 관리하는 저장소입니다.

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 설정 파일 확인
cat mcp-config.json
```

## ✅ 설치된 패키지

다음 MCP 서버들이 성공적으로 설치되었습니다:

| 패키지 | 용도 | 상태 |
|--------|------|------|
| @modelcontextprotocol/server-filesystem | 로컬 파일시스템 접근 | ✅ 설치완료 |
| @modelcontextprotocol/server-github | GitHub API 통합 | ✅ 설치완료 |
| @modelcontextprotocol/server-postgres | PostgreSQL DB 접근 | ✅ 설치완료 |

## 📋 요청된 패키지 상태

| 패키지명 | 상태 | 비고 |
|---------|------|------|
| mcp-installer | ❓ 조사 필요 | 정확한 패키지명 확인 필요 |
| playwrighter-mcp | ⚠️ 부분설치 | 네트워크 제한으로 브라우저 다운로드 실패 |
| context7 | ❓ 찾을 수 없음 | NPM에 없음, 대체 방안 필요 |
| g-search-mcp | ❓ 찾을 수 없음 | Google Search MCP 조사 필요 |
| canva | ❓ 찾을 수 없음 | 공식 MCP 서버 존재 여부 불명 |
| firecrawl-mcp | ❓ 찾을 수 없음 | 대체 웹 스크래핑 서버 검토 |
| serena | ❓ 찾을 수 없음 | 정확한 패키지 정보 필요 |

## 📚 문서

자세한 설치 가이드 및 문제 해결 방법은 [INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)를 참조하세요.

## ⚙️ 설정

MCP 서버 설정은 `mcp-config.json` 파일에 정의되어 있습니다.

### 환경 변수 설정

```bash
# GitHub 토큰 (필수)
export GITHUB_PERSONAL_ACCESS_TOKEN="your-github-token"

# PostgreSQL 연결 (필수)
export POSTGRES_CONNECTION_STRING="postgresql://user:pass@localhost:5432/db"
```

## 🔧 사용법

### Filesystem 서버
```bash
npx -y @modelcontextprotocol/server-filesystem /path/to/directory
```

### GitHub 서버
```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="your-token"
npx -y @modelcontextprotocol/server-github
```

### PostgreSQL 서버
```bash
npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb
```

## 📝 다음 단계

1. ✅ 환경 변수 설정
2. ✅ MCP 클라이언트에서 설정 파일 적용
3. ⏳ 추가 패키지 조사 및 설치
4. ⏳ 각 서버 연결 테스트

## 🔗 참고 자료

- [MCP Documentation](https://modelcontextprotocol.io)
- [MCP GitHub](https://github.com/modelcontextprotocol)
- [설치 가이드](./INSTALLATION_GUIDE.md)
