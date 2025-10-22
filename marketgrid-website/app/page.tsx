import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-grid bg-gradient-to-b from-brand-gray-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-brand-secondary/10 rounded-full text-brand-secondary font-semibold text-sm">
              삼성전자 출신 전문가의 13조원 수요 예측 노하우
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI로 비즈니스
              <br />
              <span className="gradient-text">수요를 정확히 예측</span>하다
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              복잡한 시장 데이터를 명확한 인사이트로 변환하여
              <br />
              기업의 전략적 의사결정을 지원합니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                무료 상담 신청
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                서비스 살펴보기
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stat-card">
                <div className="text-4xl font-bold gradient-text mb-2">13조원</div>
                <div className="text-gray-600">B2B 수요 예측 규모</div>
              </div>
              <div className="stat-card">
                <div className="text-4xl font-bold gradient-text mb-2">84%</div>
                <div className="text-gray-600">예측 정확도 향상</div>
              </div>
              <div className="stat-card">
                <div className="text-4xl font-bold gradient-text mb-2">5년</div>
                <div className="text-gray-600">삼성전자 실무 경험</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-brand-secondary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              왜 <span className="gradient-text">Marketgrid</span>인가?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전통적인 수요 예측 방식의 한계를 AI 자동화로 극복합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-8">기존 방식의 문제점</h3>
              <div className="space-y-4">
                {[
                  '시간이 오래 걸리는 수작업 데이터 분석',
                  '주관적 판단에 의존하는 예측',
                  '실시간 시장 변화에 대응 불가',
                  '부서 간 데이터 사일로 현상',
                  '일관성 없는 예측 방법론'
                ].map((problem, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-secondary mb-8">Marketgrid 솔루션</h3>
              <div className="space-y-4">
                {[
                  'AI 자동화로 분석 시간 90% 단축',
                  '데이터 기반 객관적 예측 모델',
                  '실시간 시장 데이터 모니터링',
                  '통합 데이터 플랫폼 구축',
                  '검증된 수요 예측 프레임워크'
                ].map((solution, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-brand-secondary">
                    <svg className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-brand-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              검증된 <span className="gradient-text">방법론</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              삼성전자에서 실전 검증된 수요 예측 프로세스를 AI로 자동화합니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '데이터 수집',
                description: '공개 데이터와 내부 데이터를 통합하여 수집',
                icon: '📊'
              },
              {
                step: '02',
                title: '모수 분석',
                description: 'TAM, SAM, SOM 분석으로 시장 규모 산정',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'AI 예측',
                description: '전환율과 ASP 기반 수요 자동 예측',
                icon: '🤖'
              },
              {
                step: '04',
                title: '의사결정',
                description: 'Front-end 소버린 AI로 실시간 인사이트 제공',
                icon: '💡'
              }
            ].map((item, idx) => (
              <div key={idx} className="card text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-sm font-semibold text-brand-secondary mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              핵심 <span className="gradient-text">기능</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI 수요 예측 엔진',
                description: '과거 데이터와 시장 트렌드를 분석하여 미래 수요를 정확히 예측합니다.',
                features: ['머신러닝 기반 예측', '실시간 모델 학습', '시나리오 분석']
              },
              {
                title: 'Front-end 소버린 AI',
                description: '의사결정자를 위한 직관적인 AI 인터페이스를 제공합니다.',
                features: ['자연어 질의응답', '대시보드 자동 생성', '인사이트 추천']
              },
              {
                title: '통합 데이터 플랫폼',
                description: '모든 데이터를 한곳에 모아 일관된 분석을 지원합니다.',
                features: ['데이터 통합', 'API 연동', '자동 업데이트']
              }
            ].map((feature, idx) => (
              <div key={idx} className="card">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            무료 상담을 통해 귀사의 수요 예측 과제를 진단하고
            <br />
            맞춤형 솔루션을 제안해드립니다
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand-primary font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg">
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
