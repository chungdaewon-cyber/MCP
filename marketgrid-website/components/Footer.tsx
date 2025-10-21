import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.svg" alt="Marketgrid" width={40} height={40} />
              <span className="text-2xl font-bold">
                Market<span className="text-brand-accent">grid</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI 기반 수요 예측과 전략적 의사결정 인텔리전스로
              <br />기업의 성장을 가속화합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-brand-accent transition-colors">회사소개</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-accent transition-colors">서비스</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-brand-accent transition-colors">성공사례</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-accent transition-colors">문의하기</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: contact@marketgrid.ai</li>
              <li>전화: +82-2-XXXX-XXXX</li>
              <li>주소: 서울특별시 강남구</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Marketgrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
