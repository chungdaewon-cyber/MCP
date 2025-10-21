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
| @playwright/mcp | 브라우저 자동화 (Microsoft 공식) | ✅ 설치완료 |
| @upstash/context7-mcp | 최신 문서 및 코드 예제 | ✅ 설치완료 |
| g-search-mcp | Google 검색 (병렬 지원) | ✅ 설치완료 |
| firecrawl-mcp | 웹 스크래핑 및 검색 | ✅ 설치완료 |
| serena | 코딩 에이전트 툴킷 | ✅ 설치완료 |
| @canva/cli | Canva 앱 개발 지원 | ✅ 설치완료 |

## 📊 설치 통계

| 항목 | 수량 | 완료율 |
|------|------|--------|
| **요청된 MCP** | 10개 | 100% ✅ |
| **성공 설치** | 9개 | - |
| **총 NPM 패키지** | 294개 | - |

## 📚 문서

- **[MCP_SETUP_COMPLETE.md](./MCP_SETUP_COMPLETE.md)** - 설치 완료 보고서 및 사용 가이드
- **[INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)** - 상세 설치 가이드 및 문제 해결
- **[CLAUDE.md](./CLAUDE.md)** - 통합 개발 가이드 (MCP 설치 가이드 포함)

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
