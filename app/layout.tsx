import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'QT Labs - Quantum Technology Research & Innovation',
  description:
    'Leading-edge research and development in quantum computing, cryptography, and sensing. Building the foundation for tomorrow\'s technological breakthroughs.',
  keywords: [
    'quantum technology',
    'quantum computing',
    'quantum research',
    'innovation',
    'quantum cryptography',
    'quantum sensing',
  ],
  authors: [{ name: 'QT Labs' }],
  openGraph: {
    title: 'QT Labs - Quantum Technology Research & Innovation',
    description:
      'Pioneering quantum technology research and innovation. Leading-edge research in quantum computing, cryptography, and sensing.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QT Labs - Quantum Technology Research & Innovation',
    description:
      'Leading-edge research and development in quantum computing, cryptography, and sensing.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
