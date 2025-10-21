# Marketgrid - AI 기반 수요 예측 컨설팅 웹사이트

삼성전자 출신 전문가의 13조원 규모 B2B 수요 예측 노하우를 AI로 자동화하여 기업의 성장을 가속화하는 컨설팅 회사 웹사이트

## 🌟 프로젝트 개요

Marketgrid는 AI 기반 수요 예측과 전략적 의사결정 인텔리전스를 제공하는 컨설팅 회사입니다. 이 웹사이트는 회사의 비전, 서비스, 성공 사례를 효과적으로 전달하기 위해 제작되었습니다.

### 주요 특징
- ✅ 프로페셔널한 브랜드 디자인
- ✅ 반응형 웹 디자인 (모바일/태블릿/데스크톱)
- ✅ 5개의 완성된 페이지 (홈, 회사소개, 서비스, 성공사례, 문의하기)
- ✅ Next.js 15 + TypeScript + Tailwind CSS
- ✅ SEO 최적화
- ✅ 빠른 로딩 속도 (Static Site Generation)

## 🎨 브랜드 아이덴티티

### 로고
- **주 로고**: `/public/logo.svg` - 200x200px 정사각형
- **가로형 로고**: `/public/logo-horizontal.svg` - 800x200px
- **파비콘**: `/public/favicon.svg` - 32x32px

### 색상 팔레트
```
Primary Navy:   #0F172A  (브랜드 메인 컬러)
Trust Blue:     #3B82F6  (신뢰감, 전문성)
Innovation Cyan: #06B6D4  (혁신, 미래지향)
Light Gray:     #F1F5F9  (배경)
```

### 비전 & 미션

**비전 (Vision)**
> AI로 비즈니스 수요 예측의 새로운 표준을 제시합니다

**미션 (Mission)**
> 데이터 기반 의사결정으로 기업의 성장을 가속화합니다

**핵심 가치 (Core Values)**
1. **정확성 (Precision)** - 데이터 기반의 정확한 분석과 예측
2. **혁신 (Innovation)** - AI 기술과 새로운 방법론
3. **투명성 (Transparency)** - 설명 가능한 AI
4. **고객 성공 (Client Success)** - 고객의 성공이 우리의 성공

## 🏗️ 기술 스택

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Animation**: Framer Motion
- **Package Manager**: npm
- **Node Version**: 18+

## 📁 프로젝트 구조

```
marketgrid-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 메인 레이아웃
│   ├── page.tsx             # 홈페이지
│   ├── globals.css          # 글로벌 스타일
│   ├── about/               # 회사소개
│   ├── services/            # 서비스
│   ├── case-studies/        # 성공사례
│   └── contact/             # 문의하기
├── components/              # 재사용 컴포넌트
│   ├── Header.tsx           # 네비게이션 헤더
│   └── Footer.tsx           # 푸터
├── public/                  # 정적 파일
│   ├── logo.svg             # 메인 로고
│   ├── logo-horizontal.svg  # 가로형 로고
│   └── favicon.svg          # 파비콘
├── tailwind.config.ts       # Tailwind 설정
├── tsconfig.json            # TypeScript 설정
└── package.json             # 의존성 관리
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 http://localhost:3000 접속

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. 프로덕션 서버 실행
```bash
npm start
```

## 📄 페이지 구성

### 1. 홈페이지 (`/`)
- **Hero Section**: 메인 메시지와 CTA
- **통계 카드**: 13조원 수요 예측, 84% 정확도 향상, 5년 경험
- **문제와 솔루션**: 기존 방식 vs Marketgrid 솔루션
- **검증된 방법론**: 4단계 프로세스
- **핵심 기능**: 3가지 주요 기능
- **CTA Section**: 무료 상담 신청

### 2. 회사소개 (`/about`)
- **비전 (Vision)**: 2030년까지의 목표
- **미션 (Mission)**: 핵심 미션 3가지
- **핵심 가치**: 정확성, 혁신, 투명성, 고객 성공
- **회사 스토리**: 삼성전자 경험, 해결하고자 하는 문제, 차별점
- **팀 소개**: 수요 예측 전문가, AI 엔지니어, 비즈니스 컨설턴트

### 3. 서비스 (`/services`)
- **AI 수요 예측 시스템**: TAM/SAM/SOM 분석, 전환율 예측, ASP 최적화
- **Front-end 소버린 AI**: 대화형 분석, 자동 시각화, 설명 가능한 AI
- **전략 컨설팅**: 비즈니스 진단, 전략 수립, 시스템 구축, 교육
- **산업별 솔루션**: 제조업, 유통, B2B, 헬스케어, 모빌리티, 금융
- **가격 옵션**: Starter, Professional, Enterprise

### 4. 성공사례 (`/case-studies`)
- **대표 사례**: 삼성전자 13조원 수요 예측
- **추가 사례**: 제조업, 유통, 헬스케어, B2B 서비스
- **고객 후기**: 3개 고객사 testimonials

### 5. 문의하기 (`/contact`)
- **문의 폼**: 이름, 회사명, 이메일, 전화번호, 산업 분야, 문의 내용
- **회사 정보**: 이메일, 전화, 주소, 운영시간
- **선택 이유**: 5가지 핵심 강점
- **FAQ**: 자주 묻는 질문
- **지도**: 오시는 길 (placeholder)
- **대체 연락 방법**: 전화, 이메일, 채팅

## 🎨 디자인 시스템

### 컴포넌트 클래스

```css
/* 레이아웃 */
.section-container     /* 최대 너비 컨테이너 */
.hero-grid            /* 그리드 배경 패턴 */

/* 버튼 */
.btn-primary          /* 주요 액션 버튼 */
.btn-secondary        /* 보조 액션 버튼 */

/* 카드 */
.card                 /* 기본 카드 */
.stat-card            /* 통계 카드 */

/* 텍스트 */
.gradient-text        /* 그라디언트 텍스트 */
```

### 애니메이션
- `animate-fade-in`: 페이드인 효과
- `animate-slide-in-left`: 왼쪽에서 슬라이드
- `animate-slide-in-right`: 오른쪽에서 슬라이드
- `animate-bounce`: 바운스 효과 (스크롤 인디케이터)

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.ts`의 `colors.brand` 섹션을 수정:

```typescript
colors: {
  brand: {
    primary: '#0F172A',    // 메인 네이비
    secondary: '#3B82F6',   // 블루
    accent: '#06B6D4',      // 시안
    light: '#F1F5F9',       // 라이트 배경
    dark: '#0F172A',        // 다크 텍스트
  },
}
```

### 메타데이터 (SEO) 수정
`app/layout.tsx`의 `metadata` 객체 수정:

```typescript
export const metadata: Metadata = {
  title: '회사명 - 타이틀',
  description: '회사 설명',
  // ...
}
```

### 연락처 정보 수정
`components/Footer.tsx` 및 `app/contact/page.tsx`에서 연락처 정보 업데이트

## 📱 반응형 디자인

- **Mobile First** 디자인 접근
- **Breakpoints**:
  - `sm`: 640px (모바일)
  - `md`: 768px (태블릿)
  - `lg`: 1024px (데스크톱)
  - `xl`: 1280px (대형 데스크톱)

## 🚀 배포

### Vercel (권장)
1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

```bash
npm i -g vercel
vercel --prod
```

### 다른 플랫폼
- **Netlify**: `netlify deploy --prod`
- **AWS Amplify**: Amplify Console 사용
- **Docker**: Dockerfile 추가 필요

## 📊 성능 최적화

- ✅ **Static Generation**: 모든 페이지 SSG로 빌드
- ✅ **이미지 최적화**: SVG 로고 사용
- ✅ **코드 분할**: Next.js 자동 코드 스플리팅
- ✅ **Minification**: 프로덕션 빌드 자동 최적화
- ✅ **First Load JS**: ~102-105 kB

## 🔒 보안

- ✅ HTTPS 필수 (배포 시)
- ✅ 환경 변수 사용 (.env.local)
- ✅ 클라이언트 측 폼 검증
- ⚠️ 서버 측 폼 처리 구현 필요

## 📋 TODO (향후 개선 사항)

- [ ] 문의 폼 백엔드 구현 (이메일 전송 또는 DB 저장)
- [ ] Google Analytics 통합
- [ ] 블로그 섹션 추가
- [ ] 다국어 지원 (i18n)
- [ ] 실제 지도 API 연동 (Google Maps / Kakao Maps)
- [ ] 채팅 상담 기능 (라이브챗)
- [ ] 애니메이션 개선 (Framer Motion 활용)
- [ ] A/B 테스팅
- [ ] 리드 관리 시스템 연동

## 🤝 기여

이 프로젝트는 Marketgrid 내부 사용을 위해 제작되었습니다.

## 📄 라이선스

MIT License

## 📞 문의

- **이메일**: contact@marketgrid.ai
- **전화**: +82-2-XXXX-XXXX
- **주소**: 서울특별시 강남구

---

**© 2025 Marketgrid. All rights reserved.**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
