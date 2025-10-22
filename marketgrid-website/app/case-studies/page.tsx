export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-gray-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">성공 사례</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Marketgrid와 함께 비즈니스를 혁신한 기업들의 이야기
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="card max-w-5xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white p-8 rounded-t-xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                대표 사례
              </div>
              <h2 className="text-4xl font-bold mb-4">
                삼성전자 한국총괄 B2B 사업부
              </h2>
              <p className="text-xl opacity-90">
                13조원 규모의 B2B 수요 예측 성공 사례
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-secondary mb-2">13조원</div>
                  <div className="text-gray-600">총 수요 예측 규모</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-accent mb-2">5년</div>
                  <div className="text-gray-600">프로젝트 기간</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-2">95%+</div>
                  <div className="text-gray-600">예측 정확도</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">과제</h3>
                  <p className="text-gray-700 leading-relaxed">
                    삼성전자의 모든 전자제품 및 가전제품에 대한 B2B 수요를 정확히 예측하여
                    생산 계획, 재고 관리, 영업 전략 수립의 기반을 마련해야 했습니다.
                    수십 가지 제품 라인과 다양한 고객 세그먼트를 고려한 복잡한 수요 예측이 필요했습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">솔루션</h3>
                  <ul className="space-y-2">
                    {[
                      '공개 데이터를 활용한 시장 규모(TAM/SAM/SOM) 산정',
                      '과거 거래 데이터 기반 전환율 모델 개발',
                      'ASP(Average Selling Price) 분석을 통한 매출 예측',
                      '제품별, 고객별 세분화된 수요 예측 모델 구축',
                      '월간/분기별 롤링 예측으로 정확도 지속 개선'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">결과</h3>
                  <ul className="space-y-2">
                    {[
                      '13조원 규모의 B2B 수요를 95% 이상의 정확도로 예측',
                      '생산 계획의 정확도 향상으로 재고 비용 30% 절감',
                      '영업팀의 목표 수립 및 전략 실행 효율성 대폭 향상',
                      '경영진 의사결정을 위한 신뢰할 수 있는 데이터 기반 마련'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-gradient-to-b from-brand-gray-50 to-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            더 많은 <span className="gradient-text">성공 사례</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: '제조업',
                company: 'A 전자 제조사',
                challenge: '글로벌 수요 변동성으로 인한 재고 과다/부족 문제',
                solution: 'AI 수요 예측 시스템 도입으로 실시간 수요 모니터링',
                results: ['재고 회전율 40% 개선', '재고 비용 25% 절감', '품절률 60% 감소'],
                icon: '🏭'
              },
              {
                industry: '유통',
                company: 'B 리테일 체인',
                challenge: '계절성 및 프로모션 효과를 반영한 정확한 수요 예측 필요',
                solution: 'Front-end 소버린 AI 기반 자동화된 수요 분석',
                results: ['매출 예측 정확도 35% 향상', '재고 폐기 손실 50% 감소', '프로모션 ROI 20% 개선'],
                icon: '🛒'
              },
              {
                industry: '헬스케어',
                company: 'C 제약회사',
                challenge: '병원 및 약국의 의약품 수요 예측 정확도 부족',
                solution: '의료 데이터와 AI 예측 모델 통합',
                results: ['공급망 효율성 45% 향상', '의약품 부족 사례 80% 감소', '유통기한 만료 손실 35% 절감'],
                icon: '💊'
              },
              {
                industry: 'B2B 서비스',
                company: 'D IT 솔루션 기업',
                challenge: '기업 고객의 라이선스 갱신 및 확대 수요 예측',
                solution: '고객 행동 패턴 분석 및 예측 모델 개발',
                results: ['갱신율 예측 정확도 90% 달성', '업셀 기회 발굴 3배 증가', '고객 이탈률 25% 감소'],
                icon: '💼'
              }
            ].map((caseStudy, idx) => (
              <div key={idx} className="card hover:scale-105 transition-transform">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-brand-secondary font-semibold mb-1">{caseStudy.industry}</div>
                    <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                  </div>
                  <div className="text-5xl">{caseStudy.icon}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">과제</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">솔루션</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">결과</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            고객 <span className="gradient-text">후기</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Marketgrid의 AI 수요 예측 덕분에 재고 관리가 혁신적으로 개선되었습니다. 정확도가 높아 믿고 사용할 수 있습니다.",
                author: "김OO 이사",
                company: "A 전자 제조사",
                role: "공급망 관리 부문"
              },
              {
                quote: "Front-end 소버린 AI는 정말 직관적입니다. 데이터 분석 전문가가 아니어도 쉽게 인사이트를 얻을 수 있어요.",
                author: "박OO 본부장",
                company: "B 리테일 체인",
                role: "영업 기획"
              },
              {
                quote: "삼성전자 실무 경험을 바탕으로 한 검증된 방법론이라 신뢰가 갑니다. 우리 회사에도 잘 적용되었습니다.",
                author: "이OO 상무",
                company: "C 제약회사",
                role: "경영 전략"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card bg-brand-gray-50">
                <svg className="w-10 h-10 text-brand-secondary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-sm text-brand-secondary">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            다음 성공 사례의 주인공은 당신입니다
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            지금 무료 상담을 신청하고 귀사의 성공 스토리를 시작하세요
          </p>
          <a href="/contact" className="inline-block bg-white text-brand-primary font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg">
            무료 상담 신청하기
          </a>
        </div>
      </section>
    </>
  );
}
