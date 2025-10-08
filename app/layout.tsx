import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Aurum Education',
  description: '提供专业的学术辅导、大学申请和课程规划服务',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-body bg-light text-primary">
        <Header />
        {children}
        <Footer />   {/* ← 全局 Footer */}
      </body>
    </html>
  );
}
