// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
  weight: ['400', '500', '700'],
})


export const metadata: Metadata = {
  title: 'Canva Clone',
  description: 'Example header similar to Canva',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 {notoSans.variable}">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
