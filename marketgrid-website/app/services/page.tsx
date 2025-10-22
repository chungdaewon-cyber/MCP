import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-gray-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">서비스</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              AI 기반 수요 예측부터 전략적 의사결정 지원까지
              <br />
              비즈니스 성장에 필요한 모든 것을 제공합니다
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {/* Service 1: AI Demand Forecasting */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-brand-secondary/10 rounded-full text-brand-secondary font-semibold text-sm mb-4">
                  핵심 서비스 #1
                </div>
                <h2 className="text-4xl font-bold mb-6">AI 수요 예측 시스템</h2>
                <p className="text-xl text-gray-600 mb-6">
                  삼성전자에서 검증된 수요 예측 방법론을 AI로 자동화하여
                  정확하고 빠른 수요 예측을 제공합니다
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: 'TAM/SAM/SOM 분석',
                      description: '시장 규모를 체계적으로 분석하여 달성 가능한 목표를 설정'
                    },
                    {
                      title: '전환율 기반 예측',
                      description: '과거 데이터를 학습하여 정확한 전환율 예측 모델 구축'
                    },
                    {
                      title: 'ASP 최적화',
                      description: 'Average Selling Price 분석으로 매출 극대화 전략 수립'
                    },
                    {
                      title: '시나리오 분석',
                      description: '다양한 시장 상황을 시뮬레이션하여 최적의 전략 도출'
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  자세히 알아보기
                </Link>
              </div>

              <div className="bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">주요 기능</h3>
                <ul className="space-y-4">
                  {[
                    '실시간 데이터 수집 및 처리',
                    '머신러닝 기반 예측 모델',
                    '자동화된 리포트 생성',
                    'API 연동 및 데이터 통합',
                    '대시보드 시각화',
                    '알림 및 인사이트 추천'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-5xl font-bold mb-2">84%</div>
                  <div className="text-sm opacity-90">예측 정확도 향상 (평균)</div>
                </div>
              </div>
            </div>

            {/* Service 2: Sovereign AI */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-brand-accent to-purple-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Front-end 소버린 AI 특징</h3>
                <ul className="space-y-4">
                  {[
                    '자연어로 질문하고 즉시 답변 받기',
                    '복잡한 SQL 쿼리 없이 데이터 탐색',
                    '맞춤형 대시보드 자동 생성',
                    '실시간 인사이트 추천',
                    '다국어 지원 (한국어, 영어)',
                    '모바일 최적화 인터페이스'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-5xl font-bold mb-2">90%</div>
                  <div className="text-sm opacity-90">분석 시간 단축</div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-brand-accent/10 rounded-full text-brand-accent font-semibold text-sm mb-4">
                  핵심 서비스 #2
                </div>
                <h2 className="text-4xl font-bold mb-6">Front-end 소버린 AI</h2>
                <p className="text-xl text-gray-600 mb-6">
                  의사결정자를 위한 직관적인 AI 인터페이스로
                  누구나 쉽게 데이터를 탐색하고 인사이트를 얻을 수 있습니다
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: '대화형 분석',
                      description: 'ChatGPT처럼 자연어로 대화하며 데이터 분석 수행'
                    },
                    {
                      title: '자동 시각화',
                      description: '질문에 맞는 차트와 그래프를 자동으로 생성'
                    },
                    {
                      title: '설명 가능한 AI',
                      description: 'AI의 분석 과정과 근거를 투명하게 제시'
                    },
                    {
                      title: '커스터마이징',
                      description: '기업별 맞춤 설정과 브랜딩 적용 가능'
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  데모 신청하기
                </Link>
              </div>
            </div>

            {/* Service 3: Consulting */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full text-purple-600 font-semibold text-sm mb-4">
                  핵심 서비스 #3
                </div>
                <h2 className="text-4xl font-bold mb-6">전략 컨설팅</h2>
                <p className="text-xl text-gray-600 mb-6">
                  수요 예측을 넘어 비즈니스 전략 수립부터 실행까지
                  전 과정을 지원합니다
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: '비즈니스 진단',
                      description: '현재 수요 예측 프로세스의 문제점을 진단하고 개선 방안 제시'
                    },
                    {
                      title: '전략 수립',
                      description: '데이터 기반의 성장 전략과 로드맵 개발'
                    },
                    {
                      title: '시스템 구축',
                      description: 'AI 수요 예측 시스템 도입 및 구축 지원'
                    },
                    {
                      title: '교육 및 트레이닝',
                      description: '임직원 대상 데이터 리터러시 및 AI 활용 교육'
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  상담 신청하기
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">컨설팅 프로세스</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: 'Week 1-2',
                      title: '현황 분석 및 진단',
                      description: '비즈니스 이해 및 데이터 수집'
                    },
                    {
                      step: 'Week 3-4',
                      title: '전략 수립',
                      description: '개선 방안 및 로드맵 개발'
                    },
                    {
                      step: 'Week 5-8',
                      title: '파일럿 구축',
                      description: 'AI 시스템 도입 및 테스트'
                    },
                    {
                      step: 'Week 9-12',
                      title: '전사 확대',
                      description: '전체 조직으로 확산 및 안정화'
                    }
                  ].map((phase, idx) => (
                    <div key={idx} className="flex items-start space-x-4 pb-6 border-b border-white/20 last:border-0">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs opacity-75 mb-1">{phase.step}</div>
                        <div className="font-semibold mb-1">{phase.title}</div>
                        <div className="text-sm opacity-90">{phase.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-b from-brand-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              산업별 <span className="gradient-text">솔루션</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 산업의 특성에 맞는 맞춤형 수요 예측 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏭',
                industry: '제조업',
                description: '생산 계획 최적화 및 재고 관리',
                features: ['수요 변동 예측', '공급망 최적화', '생산 스케줄링']
              },
              {
                icon: '🛒',
                industry: '유통/리테일',
                description: '매출 예측 및 재고 최적화',
                features: ['계절성 분석', '프로모션 효과 예측', '재고 회전율 개선']
              },
              {
                icon: '🏢',
                industry: 'B2B',
                description: '기업 고객 수요 분석 및 예측',
                features: ['고객별 수요 패턴', '계약 갱신 예측', '교차 판매 기회']
              },
              {
                icon: '💊',
                industry: '헬스케어',
                description: '의료 수요 예측 및 자원 배분',
                features: ['환자 수요 예측', '의료 자원 최적화', '약품 재고 관리']
              },
              {
                icon: '🚗',
                industry: '모빌리티',
                description: '수송 수요 예측 및 최적화',
                features: ['수요 패턴 분석', '경로 최적화', '차량 배치 계획']
              },
              {
                icon: '💳',
                industry: '금융',
                description: '금융 상품 수요 예측',
                features: ['고객 이탈 예측', '상품 추천', '리스크 관리']
              }
            ].map((solution, idx) => (
              <div key={idx} className="card hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2">{solution.industry}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              합리적인 <span className="gradient-text">가격</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기업 규모와 니즈에 맞는 유연한 가격 옵션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '문의',
                description: '중소기업을 위한 기본 수요 예측',
                features: [
                  'AI 수요 예측 (기본 모델)',
                  '월 1,000건 데이터 처리',
                  '기본 대시보드',
                  '이메일 지원',
                  '월간 리포트'
                ],
                cta: '무료 상담',
                highlight: false
              },
              {
                name: 'Professional',
                price: '문의',
                description: '중견기업을 위한 고급 분석',
                features: [
                  'AI 수요 예측 (고급 모델)',
                  '월 10,000건 데이터 처리',
                  'Front-end 소버린 AI',
                  '우선 지원 (24시간 이내)',
                  '주간 리포트',
                  'API 연동',
                  '맞춤 교육 (월 1회)'
                ],
                cta: '가장 인기있는 플랜',
                highlight: true
              },
              {
                name: 'Enterprise',
                price: '맞춤 견적',
                description: '대기업을 위한 엔터프라이즈 솔루션',
                features: [
                  'AI 수요 예측 (커스텀 모델)',
                  '무제한 데이터 처리',
                  'Front-end 소버린 AI (커스텀)',
                  '전담 CS 매니저',
                  '실시간 리포트',
                  '전사 API 연동',
                  '온사이트 교육 및 컨설팅',
                  'SLA 보장'
                ],
                cta: '맞춤 견적 요청',
                highlight: false
              }
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`card ${tier.highlight ? 'ring-2 ring-brand-secondary shadow-2xl scale-105' : ''}`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-block px-4 py-1 bg-brand-secondary text-white text-xs font-semibold rounded-full">
                      추천
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-4 gradient-text">{tier.price}</div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <svg className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={tier.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            무료 상담을 통해 귀사에 최적화된 솔루션을 제안해드립니다
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand-primary font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg">
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
