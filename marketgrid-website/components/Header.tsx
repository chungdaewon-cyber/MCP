'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: '홈', href: '/' },
    { name: '회사소개', href: '/about' },
    { name: '서비스', href: '/services' },
    { name: '성공사례', href: '/case-studies' },
    { name: '문의하기', href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Marketgrid Logo"
              width={40}
              height={40}
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-black text-brand-black-900">
                MARKET<span className="text-brand-secondary">GRID</span>
              </span>
              <span className="text-xs text-gray-600 tracking-widest font-semibold">AI DEMAND INTELLIGENCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-gray-800 hover:text-brand-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-secondary text-sm">
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-bold text-gray-800 hover:bg-brand-green-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="/contact" className="btn-secondary w-full text-sm" onClick={() => setMobileMenuOpen(false)}>
                무료 상담 신청
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
