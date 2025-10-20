# MCP 서버 설치 가이드

## 설치된 패키지 (Successfully Installed)

다음 MCP 서버들이 성공적으로 설치되었습니다:

### 1. ✅ Filesystem (@modelcontextprotocol/server-filesystem)
- **용도**: 로컬 파일 시스템 접근
- **상태**: 설치 완료
- **사용법**: `npx -y @modelcontextprotocol/server-filesystem /path/to/directory`

### 2. ✅ GitHub (@modelcontextprotocol/server-github)
- **용도**: GitHub API 통합
- **상태**: 설치 완료
- **환경변수 필요**: `GITHUB_PERSONAL_ACCESS_TOKEN`
- **사용법**: `npx -y @modelcontextprotocol/server-github`

### 3. ✅ PostgreSQL (@modelcontextprotocol/server-postgres)
- **용도**: PostgreSQL 데이터베이스 접근
- **상태**: 설치 완료
- **사용법**: `npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb`

---

## 요청된 패키지 상태 (Requested Packages Status)

### 4. ⚠️ playwright-mcp / playwrighter-mcp
- **상태**: 패키지 존재하나 브라우저 다운로드 실패
- **패키지명**: `@executeautomation/playwright-mcp-server`
- **이슈**: 네트워크 제한으로 Chromium 브라우저 다운로드 불가
- **해결방법**:
  ```bash
  export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
  npm install @executeautomation/playwright-mcp-server
  ```
  또는 로컬 환경에서 수동 설치

### 5. ❓ context7
- **상태**: NPM 레지스트리에서 찾을 수 없음
- **시도한 패키지명**: `@context7/mcp-server`, `context7-mcp`
- **권장사항**:
  - 정확한 패키지명 확인 필요
  - GitHub 저장소에서 직접 설치 가능 여부 확인
  - 대체 패키지 검토

### 6. ❓ g-search-mcp (Google Search)
- **상태**: NPM 레지스트리에서 찾을 수 없음
- **시도한 패키지명**:
  - `@modelcontextprotocol/server-google-search`
  - `g-search-mcp`
  - `google-search-mcp`
- **권장사항**:
  - MCP 공식 문서에서 Google Search 서버 확인
  - 커뮤니티 패키지 검색
  - 직접 구현 필요할 수 있음

### 7. ❓ canva
- **상태**: MCP 서버로 존재 여부 불명
- **시도한 패키지명**: `canva-mcp`, `@canva/mcp-server`
- **권장사항**:
  - Canva의 공식 API 문서 확인
  - MCP 서버 커스텀 구현 필요할 수 있음

### 8. ❓ firecrawl-mcp
- **상태**: NPM 레지스트리에서 찾을 수 없음
- **시도한 패키지명**:
  - `@mendable/firecrawl-mcp`
  - `@firecrawl/mcp-server`
  - `firecrawl-mcp`
- **권장사항**:
  - Firecrawl 공식 GitHub 확인
  - 대체 웹 스크래핑 MCP 서버 검토

### 9. ❓ serena
- **상태**: NPM 레지스트리에서 찾을 수 없음
- **권장사항**:
  - 정확한 패키지명 또는 프로젝트 URL 필요
  - 용도 및 기능 확인 필요

### 10. ❓ mcp-installer
- **상태**: 패키지 존재 여부 확인 필요
- **권장사항**:
  - MCP CLI 도구일 가능성
  - 글로벌 설치 시도: `npm install -g mcp-installer`

---

## 다음 단계 (Next Steps)

### 즉시 사용 가능
```bash
# 설치 확인
npm install

# MCP 설정 파일 확인
cat mcp-config.json
```

### 추가 패키지 조사 필요
1. **정확한 패키지명 확인**
   - MCP 공식 저장소: https://github.com/modelcontextprotocol
   - NPM 검색: https://www.npmjs.com/search?q=mcp

2. **대체 패키지 검토**
   - 유사 기능의 다른 MCP 서버 찾기
   - 커뮤니티 제작 서버 확인

3. **커스텀 서버 구현**
   - MCP SDK 사용하여 직접 구현
   - 필요한 기능에 맞는 서버 개발

---

## 환경 변수 설정

```bash
# GitHub 토큰
export GITHUB_PERSONAL_ACCESS_TOKEN="your-token-here"

# PostgreSQL 연결 문자열
export POSTGRES_CONNECTION_STRING="postgresql://user:password@localhost:5432/dbname"

# Playwright 브라우저 다운로드 스킵 (선택사항)
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
```

---

## 문제 해결 (Troubleshooting)

### 패키지를 찾을 수 없는 경우
1. 패키지명 대소문자 확인
2. 스코프(@organization/package) 확인
3. GitHub에서 직접 설치 시도:
   ```bash
   npm install git+https://github.com/organization/repository.git
   ```

### 권한 오류
```bash
npm config set unsafe-perm true
```

### 네트워크 오류
- 프록시 설정 확인
- VPN 연결 확인
- NPM 레지스트리 미러 사용

---

## 참고 자료

- [MCP Documentation](https://modelcontextprotocol.io)
- [MCP GitHub](https://github.com/modelcontextprotocol)
- [NPM Registry](https://www.npmjs.com)

---

**마지막 업데이트**: 2025-10-20
