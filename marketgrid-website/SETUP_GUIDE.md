# Marketgrid 웹사이트 설정 가이드

## 🎉 완성된 프로젝트 개요

Marketgrid 웹사이트가 성공적으로 구축되었습니다!

### ✅ 완성된 항목

- ✅ **브랜드 아이덴티티**: 로고, 색상, 비전, 미션, 핵심 가치
- ✅ **5개 페이지**: 홈, 회사소개, 서비스, 성공사례, 문의하기
- ✅ **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- ✅ **Next.js 15**: 최신 App Router 사용
- ✅ **TypeScript**: 타입 안전성
- ✅ **Tailwind CSS**: 유틸리티 퍼스트 CSS
- ✅ **SEO 최적화**: 메타데이터 및 구조화
- ✅ **빠른 성능**: Static Generation (SSG)

---

## 🚀 빠른 시작

### 1. 프로젝트 확인
```bash
cd marketgrid-website
ls -la
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

### 3. 프로덕션 빌드
```bash
npm run build
npm start
```

---

## 📁 프로젝트 구조

```
marketgrid-website/
├── 📄 README.md                    # 프로젝트 전체 가이드
├── 📄 BRANDING_GUIDE.md           # 브랜드 가이드 (로고, 색상, 메시지)
├── 📄 SETUP_GUIDE.md              # 이 문서 (설정 가이드)
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                 # 루트 레이아웃
│   ├── page.tsx                   # 홈페이지 ✨
│   ├── globals.css                # 글로벌 스타일
│   │
│   ├── about/                     # 회사소개 페이지 ✨
│   │   └── page.tsx
│   │
│   ├── services/                  # 서비스 페이지 ✨
│   │   └── page.tsx
│   │
│   ├── case-studies/              # 성공사례 페이지 ✨
│   │   └── page.tsx
│   │
│   └── contact/                   # 문의하기 페이지 ✨
│       └── page.tsx
│
├── components/                    # 재사용 컴포넌트
│   ├── Header.tsx                # 네비게이션 헤더
│   └── Footer.tsx                # 푸터
│
├── public/                        # 정적 파일
│   ├── logo.svg                  # 메인 로고 (200x200)
│   ├── logo-horizontal.svg       # 가로형 로고 (800x200)
│   └── favicon.svg               # 파비콘 (32x32)
│
├── tailwind.config.ts            # Tailwind 설정
├── tsconfig.json                 # TypeScript 설정
├── postcss.config.js             # PostCSS 설정
├── next.config.js                # Next.js 설정
├── package.json                  # 의존성 관리
└── .env.example                  # 환경 변수 예시
```

---

## 🎨 브랜드 에셋

### 로고 파일
1. **주 로고**: `/public/logo.svg`
   - 용도: SNS 프로필, 앱 아이콘, 정사각형 공간
   - 크기: 200x200px

2. **가로형 로고**: `/public/logo-horizontal.svg`
   - 용도: 웹사이트 헤더, 문서, 프레젠테이션
   - 크기: 800x200px
   - 구성: 아이콘 + "Marketgrid" + 태그라인

3. **파비콘**: `/public/favicon.svg`
   - 용도: 브라우저 탭 아이콘
   - 크기: 32x32px

### 브랜드 색상
```css
/* Primary Colors */
--brand-primary: #0F172A;    /* Professional Navy */
--brand-secondary: #3B82F6;   /* Trust Blue */
--brand-accent: #06B6D4;      /* Innovation Cyan */
--brand-light: #F1F5F9;       /* Light Background */
```

### 브랜드 메시지
- **비전**: AI로 비즈니스 수요 예측의 새로운 표준을 제시합니다
- **미션**: 데이터 기반 의사결정으로 기업의 성장을 가속화합니다
- **슬로건**: AI-POWERED DEMAND INTELLIGENCE

---

## 📄 페이지 상세

### 1. 홈페이지 (`/`)
**섹션 구성**:
- Hero Section: 메인 메시지 + CTA
- 통계 카드: 13조원, 84%, 5년
- 문제와 솔루션 비교
- 검증된 방법론 (4단계)
- 핵심 기능 (3가지)
- 최종 CTA

**주요 기능**:
- 애니메이션 배경
- 스크롤 인디케이터
- 호버 효과
- 그라디언트 텍스트

### 2. 회사소개 (`/about`)
**섹션 구성**:
- 비전 & 2030년 목표
- 미션 & 핵심 미션
- 핵심 가치 (4가지)
- 회사 스토리
- 팀 소개

**핵심 가치**:
1. 정확성 (Precision)
2. 혁신 (Innovation)
3. 투명성 (Transparency)
4. 고객 성공 (Client Success)

### 3. 서비스 (`/services`)
**주요 서비스**:
1. AI 수요 예측 시스템
   - TAM/SAM/SOM 분석
   - 전환율 기반 예측
   - ASP 최적화
   - 시나리오 분석

2. Front-end 소버린 AI
   - 대화형 분석
   - 자동 시각화
   - 설명 가능한 AI
   - 커스터마이징

3. 전략 컨설팅
   - 비즈니스 진단
   - 전략 수립
   - 시스템 구축
   - 교육 및 트레이닝

**산업별 솔루션**: 제조업, 유통, B2B, 헬스케어, 모빌리티, 금융

**가격 옵션**: Starter, Professional, Enterprise

### 4. 성공사례 (`/case-studies`)
**대표 사례**:
- 삼성전자 한국총괄 B2B 사업부
- 13조원 규모 수요 예측
- 95%+ 예측 정확도
- 5년 프로젝트 기간

**추가 사례**:
- A 전자 제조사 (재고 최적화)
- B 리테일 체인 (매출 예측)
- C 제약회사 (공급망 효율화)
- D IT 솔루션 (고객 행동 분석)

**고객 후기**: 3개 회사 testimonials

### 5. 문의하기 (`/contact`)
**문의 폼 필드**:
- 이름 (필수)
- 회사명 (필수)
- 이메일 (필수)
- 연락처 (필수)
- 산업 분야 (선택)
- 문의 내용 (선택)

**회사 정보**:
- 이메일: contact@marketgrid.ai
- 전화: +82-2-XXXX-XXXX
- 주소: 서울특별시 강남구
- 운영시간: 평일 09:00-18:00

**추가 정보**:
- 선택 이유 (5가지)
- FAQ (4가지 질문)
- 지도 (placeholder)
- 대체 연락 방법

---

## ⚙️ 커스터마이징

### 연락처 정보 변경

#### Footer (`components/Footer.tsx`)
```typescript
// 19번째 줄 근처
<a href="mailto:contact@marketgrid.ai">
  contact@marketgrid.ai
</a>

<a href="tel:+82-2-XXXX-XXXX">
  +82-2-XXXX-XXXX
</a>
```

#### Contact Page (`app/contact/page.tsx`)
```typescript
// 142번째 줄 근처
<a href="mailto:contact@marketgrid.ai">
  contact@marketgrid.ai
</a>
```

### 색상 변경
`tailwind.config.ts`:
```typescript
colors: {
  brand: {
    primary: '#0F172A',    // 여기를 변경
    secondary: '#3B82F6',  // 여기를 변경
    accent: '#06B6D4',     // 여기를 변경
    // ...
  },
}
```

### 메타데이터 (SEO) 수정
`app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: '회사명 - 타이틀',
  description: '회사 설명',
  // ...
}
```

---

## 🔧 향후 작업

### 필수 작업
- [ ] **연락처 정보 업데이트**: 실제 이메일, 전화번호, 주소로 변경
- [ ] **도메인 연결**: marketgrid.ai 도메인 구매 및 연결
- [ ] **문의 폼 백엔드**: 이메일 전송 또는 데이터베이스 저장 구현
- [ ] **환경 변수 설정**: `.env.local` 파일 생성

### 권장 작업
- [ ] **Google Analytics**: 방문자 추적
- [ ] **지도 API**: Google Maps 또는 Kakao Maps 연동
- [ ] **채팅 상담**: Intercom, Crisp 등 라이브챗 추가
- [ ] **이미지 최적화**: 실제 팀 사진, 프로젝트 사진 추가
- [ ] **블로그**: 인사이트 및 케이스 스터디 공유

### 선택 작업
- [ ] **다국어 지원**: 영문 버전 추가 (i18n)
- [ ] **CRM 연동**: HubSpot, Salesforce 등
- [ ] **A/B 테스팅**: 전환율 최적화
- [ ] **소셜 미디어 공유**: OG 이미지 커스텀
- [ ] **애니메이션 강화**: Framer Motion 활용

---

## 📦 배포 가이드

### Vercel (권장)

#### 1. GitHub에 푸시
```bash
git init
git add .
git commit -m "Initial commit: Marketgrid website"
git remote add origin https://github.com/YOUR_USERNAME/marketgrid-website.git
git push -u origin main
```

#### 2. Vercel 배포
1. [Vercel](https://vercel.com) 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. 자동 배포 (설정 필요 없음)
5. 도메인 연결

#### 3. 커스텀 도메인 설정
1. Vercel 프로젝트 → Settings → Domains
2. `marketgrid.ai` 입력
3. DNS 레코드 설정 (Vercel 안내 따라하기)

### 기타 플랫폼

#### Netlify
```bash
npm install netlify-cli -g
netlify deploy --prod
```

#### Docker
```dockerfile
# Dockerfile 추가 필요
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 🔍 문제 해결

### 빌드 오류
```bash
# 캐시 삭제
rm -rf .next
npm run build
```

### 스타일이 적용되지 않음
```bash
# Tailwind 재빌드
npm run dev
```

### 포트 충돌
```bash
# 다른 포트 사용
PORT=3001 npm run dev
```

---

## 📞 지원

프로젝트 관련 문의:
- **GitHub Issues**: 버그 리포트 및 기능 제안
- **이메일**: contact@marketgrid.ai
- **문서**: README.md, BRANDING_GUIDE.md 참조

---

## 📜 라이선스

MIT License - 자유롭게 사용 및 수정 가능

---

## 🙏 감사합니다

Marketgrid 웹사이트 프로젝트를 성공적으로 완료했습니다!

### 다음 단계:
1. ✅ 개발 서버 실행해서 확인
2. ✅ 연락처 정보 업데이트
3. ✅ 환경 변수 설정
4. ✅ Vercel에 배포
5. ✅ 도메인 연결
6. ✅ Google Analytics 추가

**행운을 빕니다! 🚀**

---

**© 2025 Marketgrid. All rights reserved.**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
