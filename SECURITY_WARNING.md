# 🚨 중요: 보안 경고

## ⚠️ API 키가 노출되었습니다!

귀하의 **Anthropic API 키**가 공개 채팅에 노출되었습니다.

### 노출된 키
- **키 시작 부분**: `sk-ant-api03-_z_V6EtCRC...`
- **노출 일시**: 2025-10-21
- **노출 위치**: 대화 세션

---

## 🔴 즉시 조치 필요

### 1. API 키 즉시 무효화 (필수!)

**Anthropic Console에서 키 무효화:**
1. https://console.anthropic.com/settings/keys 방문
2. 로그인
3. 노출된 키 찾기: `sk-ant-api03-_z_V6EtCRC...`
4. **"Revoke" 또는 "Delete" 클릭**
5. 새로운 API 키 생성

### 2. 새 API 키 발급

**새 키 생성 후:**
```bash
# .env 파일 수정
nano /home/user/MCP/.env

# ANTHROPIC_API_KEY를 새 키로 교체
ANTHROPIC_API_KEY="sk-ant-api03-새로운키"
```

### 3. 환경 변수 재로드

```bash
# 환경 변수 다시 로드
source /home/user/MCP/setup-env.sh
```

---

## 🔒 API 키가 노출되면 발생할 수 있는 위험

### 1. **무단 사용**
- 다른 사람이 귀하의 API 크레딧을 사용
- 예상치 못한 요금 발생

### 2. **서비스 남용**
- 스팸 또는 악의적 용도로 사용
- 계정 정지 위험

### 3. **개인정보 노출**
- API를 통해 전송한 데이터 접근 가능
- 프롬프트 및 응답 내용 노출

---

## ✅ 보안 모범 사례

### 1. 환경 변수 사용
```bash
# ✅ Good: 환경 변수 사용
export ANTHROPIC_API_KEY="your-key"
npx -y your-mcp-server

# ❌ Bad: 코드에 직접 입력
const apiKey = "sk-ant-api03-..."
```

### 2. .env 파일 보호
```bash
# .gitignore에 반드시 포함
.env
.env.local
.env.*.local
*.key
secrets/
```

### 3. Git 커밋 전 확인
```bash
# 민감한 정보가 포함되지 않았는지 확인
git diff

# .env 파일이 추적되지 않는지 확인
git status
```

### 4. 정기적 키 로테이션
- **권장**: 3-6개월마다 API 키 재발급
- **필수**: 노출 즉시 재발급

### 5. 권한 최소화
- API 키에 필요한 최소 권한만 부여
- 사용하지 않는 권한은 비활성화

---

## 📋 체크리스트

작업을 완료했는지 확인하세요:

- [ ] **Anthropic API 키 무효화** (가장 중요!)
- [ ] 새로운 API 키 발급
- [ ] `.env` 파일에 새 키 업데이트
- [ ] 환경 변수 재로드 (`source setup-env.sh`)
- [ ] `.env` 파일이 `.gitignore`에 포함되어 있는지 확인
- [ ] Git 상태 확인 (`git status`)하여 `.env`가 추적되지 않는지 확인

---

## 🔐 안전한 API 키 관리 방법

### 방법 1: 환경 변수 (권장)
```bash
# .bashrc 또는 .zshrc에 추가
export ANTHROPIC_API_KEY="your-key"

# 또는 .env 파일 사용
source /home/user/MCP/setup-env.sh
```

### 방법 2: Secret 관리 도구
```bash
# 1Password, LastPass, AWS Secrets Manager 등 사용
# 예: AWS Systems Manager Parameter Store
aws ssm get-parameter --name "/mcp/anthropic-api-key" --with-decryption
```

### 방법 3: 런타임에만 제공
```bash
# 임시로 환경 변수 설정 (현재 세션에만 유효)
env ANTHROPIC_API_KEY="your-key" npx -y your-mcp-server
```

---

## 📞 추가 지원

### Anthropic 지원팀 연락
- **이메일**: support@anthropic.com
- **문서**: https://docs.anthropic.com
- **Console**: https://console.anthropic.com

### 보안 사고 보고
의심스러운 활동 발견 시:
1. API 키 즉시 무효화
2. Anthropic 지원팀에 연락
3. 계정 활동 로그 확인

---

## 🎯 현재 상태

### ✅ 완료된 조치
- `.env` 파일 생성 (API 키 저장됨)
- `.gitignore` 확인 (`.env` 보호됨)
- `setup-env.sh` 스크립트 생성
- `.env.example` 템플릿 생성

### ⚠️ 필요한 조치
- **노출된 API 키 즉시 무효화**
- 새 API 키 발급 및 업데이트
- 환경 변수 재로드

---

## 💡 교훈

**절대로 하지 말아야 할 것:**
1. ❌ API 키를 채팅, 이메일, 메시지에 포함
2. ❌ 코드에 API 키 하드코딩
3. ❌ 공개 저장소에 API 키 커밋
4. ❌ 스크린샷에 API 키 포함
5. ❌ API 키를 파일 이름에 사용

**항상 해야 할 것:**
1. ✅ 환경 변수 사용
2. ✅ `.env` 파일을 `.gitignore`에 추가
3. ✅ 정기적으로 키 로테이션
4. ✅ 최소 권한 원칙 적용
5. ✅ 의심스러운 활동 모니터링

---

**이 문서를 읽은 후 즉시 Anthropic Console에서 노출된 API 키를 무효화하세요!**

마지막 업데이트: 2025-10-21
