import './global.css';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Infrastack AI',
  description: 'Building reliable, production-grade AI systems that can observe, reason, and take action inside complex software environments.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body className="min-h-screen bg-black antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
