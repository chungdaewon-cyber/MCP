# Marketgrid 브랜드 가이드

## 📘 목차
1. [브랜드 개요](#브랜드-개요)
2. [로고 가이드라인](#로고-가이드라인)
3. [색상 시스템](#색상-시스템)
4. [타이포그래피](#타이포그래피)
5. [비전, 미션, 가치](#비전-미션-가치)
6. [브랜드 보이스](#브랜드-보이스)
7. [사용 사례](#사용-사례)

---

## 브랜드 개요

### 회사명
**Marketgrid**

### 회사명 의미
- **Market**: 시장, 비즈니스의 핵심 영역
- **Grid**: 격자, 네트워크 - 정확성, 체계성, 연결성을 상징
- **합성어**: 시장 수요를 정밀하게 매핑하고 예측하는 플랫폼

### 슬로건 (Tagline)
```
AI-POWERED DEMAND INTELLIGENCE
AI 기반 수요 예측 인텔리전스
```

### 엘리베이터 피치 (30초)
> "Marketgrid는 삼성전자에서 검증된 13조원 규모의 수요 예측 노하우를 AI로 자동화하여,
> 기업이 데이터 기반 의사결정을 통해 매출을 극대화하고 비용을 절감할 수 있도록 지원하는
> AI 컨설팅 회사입니다."

---

## 로고 가이드라인

### 로고 파일
1. **주 로고** (`/public/logo.svg`)
   - 크기: 200x200px
   - 용도: 프로필 이미지, SNS, 앱 아이콘
   - 특징: M자 형태의 그리드 네트워크

2. **가로형 로고** (`/public/logo-horizontal.svg`)
   - 크기: 800x200px
   - 용도: 웹사이트 헤더, 문서, 프레젠테이션
   - 구성: 로고 아이콘 + "Marketgrid" 워드마크 + 태그라인

3. **파비콘** (`/public/favicon.svg`)
   - 크기: 32x32px
   - 용도: 브라우저 탭 아이콘
   - 특징: 단순화된 M자 형태

### 로고 디자인 요소

#### 심볼 의미
- **M자 형태**: Marketgrid의 이니셜
- **그리드 노드**: 데이터 포인트, 정확한 측정
- **연결선**: AI 네트워크, 데이터 연결성
- **그라디언트**: 혁신, 미래지향적 기술

#### 로고 색상
```
Primary: Blue to Cyan Gradient
- Start: #3B82F6 (Trust Blue)
- End: #06B6D4 (Innovation Cyan)

Nodes:
- Main: #3B82F6 (Blue)
- Center: #06B6D4 (Cyan)
```

### 로고 사용 규칙

#### ✅ DO (권장)
- 충분한 여백 확보 (최소 로고 높이의 25%)
- 단색 배경 위에 사용
- 원본 비율 유지
- 명확하게 보이는 크기 (최소 32px 높이)

#### ❌ DON'T (금지)
- 로고 비율 왜곡 금지
- 로고 색상 변경 금지 (흑백 버전 제외)
- 로고 회전 금지
- 복잡한 배경 위 사용 지양
- 로고에 효과 추가 금지 (그림자, 외곽선 등)

### 로고 변형

#### 다크 모드
배경이 어두운 경우 (Dark Background):
- 흰색 버전 사용 가능
- 그라디언트를 더 밝은 톤으로 조정

#### 흑백 (Black & White)
- 단색 인쇄 시: Navy (#0F172A) 단색 사용
- 회색조: Slate 800 (#1E293B) 사용

---

## 색상 시스템

### 주요 색상 (Primary Colors)

#### Brand Primary - Professional Navy
```
HEX: #0F172A
RGB: 15, 23, 42
용도: 헤더, 푸터, 주요 텍스트, 다크 배경
의미: 전문성, 신뢰, 안정성
```

#### Brand Secondary - Trust Blue
```
HEX: #3B82F6
RGB: 59, 130, 246
용도: 버튼, 링크, 강조, 아이콘
의미: 신뢰, 기술, 전문성
```

#### Brand Accent - Innovation Cyan
```
HEX: #06B6D4
RGB: 6, 182, 212
용도: 하이라이트, 그라디언트 엔드, 인터랙션
의미: 혁신, 미래, AI 기술
```

### 보조 색상 (Secondary Colors)

#### Light Background
```
HEX: #F1F5F9
RGB: 241, 245, 249
용도: 섹션 배경, 카드 배경
```

#### Dark Text
```
HEX: #0F172A
RGB: 15, 23, 42
용도: 본문 텍스트
```

#### Gray Scale
```
Gray 50:  #F9FAFB (매우 밝음)
Gray 100: #F3F4F6
Gray 200: #E5E7EB
Gray 300: #D1D5DB (보더)
Gray 400: #9CA3AF
Gray 500: #6B7280 (보조 텍스트)
Gray 600: #4B5563
Gray 700: #374151 (주요 텍스트)
Gray 800: #1F2937
Gray 900: #111827 (가장 어두움)
```

### 색상 사용 가이드

#### 배경 조합
```
✅ 권장:
- White (#FFFFFF) + Navy (#0F172A) text
- Light (#F1F5F9) + Navy (#0F172A) text
- Navy (#0F172A) + White (#FFFFFF) text
- Blue Gradient + White text

❌ 피해야 할 조합:
- 밝은 색 + 밝은 색 (가독성 낮음)
- 비슷한 톤 조합
```

#### 그라디언트
```css
/* Primary Gradient */
background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);

/* Subtle Background Gradient */
background: linear-gradient(180deg, #F1F5F9 0%, #FFFFFF 100%);

/* Dark Gradient */
background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
```

---

## 타이포그래피

### 폰트 패밀리

#### 주 폰트 (Primary Font)
```
Font Family: System UI Stack
Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

이유:
- 모든 OS에서 일관된 경험
- 빠른 로딩 속도
- 깔끔하고 현대적인 느낌
```

### 폰트 크기 및 스타일

#### Headings
```
H1: 60px (3.75rem) - Bold
용도: 히어로 섹션 메인 타이틀

H2: 48px (3rem) - Bold
용도: 섹션 타이틀

H3: 36px (2.25rem) - Bold
용도: 서브섹션 타이틀

H4: 24px (1.5rem) - Semibold
용도: 카드 타이틀, 리스트 헤더

H5: 20px (1.25rem) - Semibold
용도: 작은 섹션 제목

H6: 18px (1.125rem) - Semibold
용도: 캡션 타이틀
```

#### Body Text
```
Large: 20px (1.25rem) - Regular
용도: 리드 문단, 인트로 텍스트

Default: 16px (1rem) - Regular
용도: 일반 본문

Small: 14px (0.875rem) - Regular
용도: 보조 텍스트, 캡션

Tiny: 12px (0.75rem) - Regular
용도: 라벨, 태그
```

#### Font Weights
```
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

### 텍스트 스타일 가이드

#### 그라디언트 텍스트
```css
.gradient-text {
  background: linear-gradient(to right, #3B82F6, #06B6D4);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### 줄 간격 (Line Height)
```
Headings: 1.2 (120%)
Body: 1.6 (160%)
Small Text: 1.5 (150%)
```

#### 자간 (Letter Spacing)
```
Headings: -0.02em (타이트)
Body: normal
All Caps: 0.1em (넓게)
```

---

## 비전, 미션, 가치

### 비전 (Vision)
```
AI로 비즈니스 수요 예측의 새로운 표준을 제시합니다

영문:
Setting the New Standard for AI-Powered Business Demand Forecasting
```

**비전 설명**:
복잡한 시장 데이터를 명확한 인사이트로 변환하여, 모든 기업이 데이터 기반 의사결정을 통해 지속 가능한 성장을 이루는 세상을 만들어갑니다.

**2030년 목표**:
- 국내 수요 예측 시장 점유율 1위
- 글로벌 100대 기업 50곳 이상 파트너십
- AI 수요 예측 정확도 업계 최고 수준 달성

### 미션 (Mission)
```
데이터 기반 의사결정으로 기업의 성장을 가속화합니다

영문:
Accelerating Business Growth through Data-Driven Decision Intelligence
```

**핵심 미션**:
1. 검증된 수요 예측 방법론의 AI 자동화
2. 실시간 의사결정 지원 시스템 구축
3. 데이터 기반 비즈니스 문화 확산

### 핵심 가치 (Core Values)

#### 1. 정확성 (Precision)
```
아이콘: 🎯
설명: 데이터 기반의 정확한 분석과 예측으로 신뢰를 구축합니다
영문: Precision-driven analysis and forecasting build trust
```

#### 2. 혁신 (Innovation)
```
아이콘: 💡
설명: AI 기술과 새로운 방법론으로 끊임없이 혁신합니다
영문: Continuous innovation through AI and new methodologies
```

#### 3. 투명성 (Transparency)
```
아이콘: 🔍
설명: 모든 프로세스를 투명하게 공개하고 설명 가능한 AI를 지향합니다
영문: Transparent processes and explainable AI
```

#### 4. 고객 성공 (Client Success)
```
아이콘: 🤝
설명: 고객의 성공이 곧 우리의 성공이라는 철학을 실천합니다
영문: Our success is our clients' success
```

---

## 브랜드 보이스

### 톤 앤 매너 (Tone & Manner)

#### 브랜드 성격
- **전문적 (Professional)**: 컨설팅 업계 전문성
- **신뢰할 수 있는 (Trustworthy)**: 삼성전자 검증 경험
- **혁신적 (Innovative)**: AI 기술 선도
- **접근 가능한 (Approachable)**: 고객 친화적

#### 커뮤니케이션 원칙

**DO** ✅:
- 데이터와 사실에 기반한 주장
- 구체적인 수치와 사례 제시
- 명확하고 간결한 문장
- 전문 용어 사용 시 설명 추가
- 고객 관점의 가치 제시

**DON'T** ❌:
- 과장되거나 검증되지 않은 주장
- 복잡한 전문 용어 남발
- 추상적이거나 모호한 표현
- 경쟁사 비하
- 불필요한 이모티콘 남용

### 메시지 프레임워크

#### 핵심 메시지
```
1차 메시지: "AI로 비즈니스 수요를 정확히 예측합니다"
2차 메시지: "삼성전자 검증된 13조원 규모 수요 예측 노하우"
3차 메시지: "데이터 기반 의사결정으로 성장을 가속화"
```

#### 주요 키워드
- AI 수요 예측
- 데이터 기반 의사결정
- Front-end 소버린 AI
- 수요 예측 자동화
- 비즈니스 인텔리전스
- 삼성전자 검증
- 13조원 규모
- 84% 정확도 향상

---

## 사용 사례

### 명함 (Business Card)

**앞면**:
```
[Marketgrid 로고]

홍길동
대표이사 / CEO

+82-10-XXXX-XXXX
contact@marketgrid.ai
www.marketgrid.ai
```

**뒷면**:
```
AI-POWERED DEMAND INTELLIGENCE

"AI로 비즈니스 수요 예측의
새로운 표준을 제시합니다"

서울특별시 강남구 테헤란로 XXX
```

### 이메일 서명

```html
---
홍길동 | Hong Gil-dong
대표이사 | Chief Executive Officer

Marketgrid
AI-Powered Demand Intelligence

📧 contact@marketgrid.ai
📞 +82-2-XXXX-XXXX
🌐 www.marketgrid.ai
📍 서울특별시 강남구
```

### 소셜 미디어

#### LinkedIn 회사 페이지
- 프로필 이미지: 주 로고 (200x200)
- 배너 이미지: Marketgrid 가로형 로고 + 그리드 배경
- 회사 소개: 비전 + 핵심 서비스

#### 게시물 스타일
```
📊 [통계/데이터 기반 인사이트]

💡 핵심 메시지

🔗 자세히 보기: [링크]

#AI #수요예측 #비즈니스인텔리전스
```

### 프레젠테이션

#### 슬라이드 템플릿
- **타이틀 슬라이드**:
  - 배경: Navy 그라디언트
  - 로고: 가로형 (화이트 버전)
  - 타이틀: 화이트, 48px Bold

- **내용 슬라이드**:
  - 배경: 화이트
  - 헤더: Navy, 32px Bold
  - 본문: Gray 700, 18px Regular
  - 강조: Blue 또는 Cyan

- **구분선**: Cyan (#06B6D4) 2px

### 웹사이트

**일관된 요소**:
- 헤더: 화이트 배경, 고정 (sticky)
- 섹션 패딩: 80px (상하)
- 카드 그림자: subtle shadow
- 버튼 호버: 스케일 105%
- 링크 색상: Blue (#3B82F6)

---

## 브랜드 체크리스트

### 모든 마케팅 자료 제작 시 확인

- [ ] 로고가 정확히 사용되었는가?
- [ ] 브랜드 색상이 올바르게 적용되었는가?
- [ ] 폰트가 일관되게 사용되었는가?
- [ ] 메시지가 브랜드 보이스에 맞는가?
- [ ] 핵심 가치가 반영되어 있는가?
- [ ] 데이터/사실 기반 주장인가?
- [ ] 타겟 고객에게 명확한가?
- [ ] 오타나 문법 오류가 없는가?

---

## 버전 관리

- **Version**: 1.0
- **Last Updated**: 2025-10-21
- **Next Review**: 2025-04-21 (6개월 후)

---

**© 2025 Marketgrid. All rights reserved.**

이 브랜드 가이드는 Marketgrid의 브랜드 일관성을 유지하기 위한 공식 문서입니다.
모든 마케팅 및 커뮤니케이션 활동 시 본 가이드를 준수해 주시기 바랍니다.
