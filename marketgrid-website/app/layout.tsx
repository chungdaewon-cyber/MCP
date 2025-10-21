import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Marketgrid - AI 기반 수요 예측 및 전략적 의사결정 인텔리전스',
  description: '삼성전자 출신 전문가의 13조원 규모 B2B 수요 예측 노하우를 AI로 자동화. 데이터 기반 의사결정으로 기업 성장을 가속화합니다.',
  keywords: ['AI', '수요 예측', 'demand forecasting', '비즈니스 인텔리전스', '컨설팅', '의사결정 지원'],
  authors: [{ name: 'Marketgrid' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://marketgrid.ai',
    title: 'Marketgrid - AI 기반 수요 예측 컨설팅',
    description: '데이터 기반 의사결정으로 기업 성장을 가속화합니다',
    siteName: 'Marketgrid',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
