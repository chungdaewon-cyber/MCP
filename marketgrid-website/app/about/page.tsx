export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              회사 <span className="gradient-text">소개</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Marketgrid는 AI 기반 수요 예측과 전략적 의사결정 인텔리전스로
              <br />
              기업의 성장을 가속화하는 컨설팅 회사입니다
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-sm font-semibold text-brand-secondary mb-4 tracking-wider">OUR VISION</div>
              <h2 className="text-4xl font-bold mb-6">비전</h2>
              <p className="text-2xl text-brand-secondary font-semibold mb-4">
                AI로 비즈니스 수요 예측의 새로운 표준을 제시합니다
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                우리는 복잡한 시장 데이터를 명확한 인사이트로 변환하여,
                모든 기업이 데이터 기반 의사결정을 통해 지속 가능한 성장을 이루는 세상을 만들어갑니다.
                AI 기술과 실전 경험을 결합하여, 수요 예측 분야의 글로벌 리더가 되겠습니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl p-12 text-white">
              <div className="text-6xl mb-6">🎯</div>
              <div className="text-3xl font-bold mb-4">2030년까지</div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>국내 수요 예측 시장 점유율 1위</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>글로벌 100대 기업 50곳 이상 파트너십</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>AI 수요 예측 정확도 업계 최고 수준 달성</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 bg-brand-gray-50 rounded-2xl p-12">
              <div className="text-6xl mb-6">🚀</div>
              <div className="text-3xl font-bold mb-4 text-brand-black-900">핵심 미션</div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-2xl text-brand-secondary">1</span>
                  <span>검증된 수요 예측 방법론의 AI 자동화</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-2xl text-brand-secondary">2</span>
                  <span>실시간 의사결정 지원 시스템 구축</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-2xl text-brand-secondary">3</span>
                  <span>데이터 기반 비즈니스 문화 확산</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-sm font-semibold text-brand-secondary mb-4 tracking-wider">OUR MISSION</div>
              <h2 className="text-4xl font-bold mb-6">미션</h2>
              <p className="text-2xl text-brand-secondary font-semibold mb-4">
                데이터 기반 의사결정으로 기업의 성장을 가속화합니다
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                삼성전자에서 검증된 13조원 규모의 B2B 수요 예측 노하우를 AI로 자동화하여,
                모든 기업이 정확한 수요 예측을 통해 재고 최적화, 매출 증대, 리스크 관리를 실현할 수 있도록 지원합니다.
                우리의 Front-end 소버린 AI는 복잡한 데이터를 누구나 이해할 수 있는 인사이트로 변환합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-brand-secondary mb-4 tracking-wider">CORE VALUES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              핵심 <span className="gradient-text">가치</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marketgrid의 모든 의사결정과 행동의 기준이 되는 4가지 핵심 가치입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: '정확성',
                subtitle: 'Precision',
                description: '데이터 기반의 정확한 분석과 예측으로 신뢰를 구축합니다',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '💡',
                title: '혁신',
                subtitle: 'Innovation',
                description: 'AI 기술과 새로운 방법론으로 끊임없이 혁신합니다',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: '🔍',
                title: '투명성',
                subtitle: 'Transparency',
                description: '모든 프로세스를 투명하게 공개하고 설명 가능한 AI를 지향합니다',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: '🤝',
                title: '고객 성공',
                subtitle: 'Client Success',
                description: '고객의 성공이 곧 우리의 성공이라는 철학을 실천합니다',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((value, idx) => (
              <div key={idx} className="card group hover:scale-105 transition-all">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <div className="text-sm text-gray-500 mb-4 font-semibold tracking-wider">{value.subtitle}</div>
                <p className="text-gray-600">{value.description}</p>
                <div className={`mt-6 h-1 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-semibold text-brand-secondary mb-4 tracking-wider">OUR STORY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                왜 Marketgrid를 <span className="gradient-text">시작했나요?</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-light rounded-xl p-8 border-l-4 border-brand-secondary">
                <h3 className="text-2xl font-bold mb-4">삼성전자에서의 경험</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  5년간 삼성전자 한국총괄 B2B 사업부에서 모든 전자제품 및 가전제품에 대한 수요산정을 담당했습니다.
                  공개된 데이터의 모수에 기반한 전환율과 ASP(Average Selling Price)를 활용하여
                  <strong className="text-brand-secondary"> 13조원 규모의 B2B 수요</strong>를 정확히 예측했습니다.
                </p>
              </div>

              <div className="bg-brand-light rounded-xl p-8 border-l-4 border-brand-accent">
                <h3 className="text-2xl font-bold mb-4">해결하고자 하는 문제</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  수요 예측은 기업 경영의 핵심이지만, 대부분의 기업은 시간이 오래 걸리는 수작업 분석과
                  주관적 판단에 의존하고 있습니다. 우리는 이 문제를 <strong className="text-brand-accent">AI 자동화</strong>로 해결하고자 합니다.
                </p>
              </div>

              <div className="bg-brand-light rounded-xl p-8 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold mb-4">Marketgrid의 차별점</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  단순한 AI 도구가 아닌, <strong className="text-indigo-600">검증된 수요 예측 방법론과 AI 기술의 결합</strong>입니다.
                  삼성전자에서 실전 검증된 프로세스를 자동화하고, Front-end 소버린 AI를 통해
                  의사결정자가 직접 데이터를 탐색하고 인사이트를 얻을 수 있도록 지원합니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>실전 검증된 방법론 (13조원 규모 수요 예측 경험)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI 자동화로 분석 시간 90% 단축</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Front-end 소버린 AI로 누구나 쉽게 사용</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-brand-secondary mb-4 tracking-wider">OUR TEAM</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              전문가 <span className="gradient-text">팀</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              삼성전자, 글로벌 컨설팅 펌, AI 연구 분야의 전문가들이 모여
              <br />
              최고의 수요 예측 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: '수요 예측 전문가',
                role: 'Demand Forecasting Expert',
                background: '삼성전자 5년 경력, 13조원 규모 B2B 수요 예측',
                icon: '👨‍💼'
              },
              {
                name: 'AI 엔지니어',
                role: 'AI/ML Engineer',
                background: '머신러닝 모델 개발 및 최적화 전문',
                icon: '👨‍💻'
              },
              {
                name: '비즈니스 컨설턴트',
                role: 'Business Consultant',
                background: '글로벌 컨설팅 펌 출신, 전략 수립 전문',
                icon: '👩‍💼'
              }
            ].map((member, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-7xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-sm text-brand-secondary font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
