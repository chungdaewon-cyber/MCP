'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">문의하기</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              AI 기반 수요 예측에 대해 궁금하신가요?
              <br />
              전문가와 무료 상담을 받아보세요
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-6">무료 상담 신청</h2>
              <p className="text-gray-600 mb-8">
                아래 양식을 작성해주시면 24시간 내에 전문가가 연락드립니다.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-green-800">문의가 접수되었습니다!</h3>
                      <p className="text-green-700">곧 연락드리겠습니다.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                      placeholder="주식회사 마켓그리드"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                        placeholder="contact@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold mb-2">
                      산업 분야
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                    >
                      <option value="">선택해주세요</option>
                      <option value="manufacturing">제조업</option>
                      <option value="retail">유통/리테일</option>
                      <option value="b2b">B2B</option>
                      <option value="healthcare">헬스케어</option>
                      <option value="mobility">모빌리티</option>
                      <option value="finance">금융</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      문의 내용
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent resize-none"
                      placeholder="수요 예측과 관련하여 궁금하신 사항을 자유롭게 작성해주세요."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    무료 상담 신청하기
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    개인정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info Card */}
              <div className="card bg-gradient-to-br from-brand-secondary to-brand-accent text-white">
                <h3 className="text-2xl font-bold mb-6">Marketgrid</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold mb-1">이메일</div>
                      <a href="mailto:contact@marketgrid.ai" className="hover:underline">
                        contact@marketgrid.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-semibold mb-1">전화</div>
                      <a href="tel:+82-2-XXXX-XXXX" className="hover:underline">
                        +82-2-XXXX-XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold mb-1">주소</div>
                      <p>서울특별시 강남구<br />테헤란로 XXX, XX층</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold mb-1">운영 시간</div>
                      <p>평일 09:00 - 18:00<br />주말 및 공휴일 휴무</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card bg-brand-light">
                <h3 className="text-xl font-bold mb-4">왜 Marketgrid를 선택해야 할까요?</h3>
                <ul className="space-y-3">
                  {[
                    '삼성전자 검증된 수요 예측 노하우',
                    'AI 자동화로 90% 시간 단축',
                    '84% 예측 정확도 향상 (평균)',
                    '24시간 이내 전문가 응답',
                    '맞춤형 솔루션 제공'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-brand-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Quick Links */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">자주 묻는 질문</h3>
                <div className="space-y-3">
                  {[
                    'AI 수요 예측은 어떻게 작동하나요?',
                    '도입 비용은 얼마나 되나요?',
                    '기존 시스템과 통합이 가능한가요?',
                    '교육 프로그램이 제공되나요?'
                  ].map((question, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left p-3 bg-brand-light rounded-lg hover:bg-brand-secondary hover:text-white transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{question}</span>
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-8">오시는 길</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-200 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg">지도는 추후 업데이트 예정입니다</p>
                  <p className="text-sm mt-2">서울특별시 강남구 테헤란로 XXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            다양한 방법으로 <span className="gradient-text">연락하세요</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '📞',
                title: '전화 상담',
                description: '전문가와 직접 통화하여 빠른 답변을 받으세요',
                action: '전화하기',
                link: 'tel:+82-2-XXXX-XXXX'
              },
              {
                icon: '✉️',
                title: '이메일 문의',
                description: '상세한 내용을 이메일로 보내주세요',
                action: '이메일 보내기',
                link: 'mailto:contact@marketgrid.ai'
              },
              {
                icon: '💬',
                title: '채팅 상담',
                description: '실시간 채팅으로 즉시 답변을 받으세요',
                action: '채팅 시작',
                link: '#'
              }
            ].map((method, idx) => (
              <div key={idx} className="card text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-block px-6 py-2 bg-brand-secondary text-white rounded-lg hover:bg-brand-accent transition-colors"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
