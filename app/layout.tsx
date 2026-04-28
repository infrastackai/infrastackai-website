import './global.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infrastack',
  description: 'Infrastack is between chapters.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
