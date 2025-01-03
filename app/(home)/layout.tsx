import type { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'InfraStack AI | Your AI-Ops Agents',
  description: 'Supercharge Infrastructure, SRE, and DevOps with AI Agents. Transform repetitive and time-consuming tasks into autonomous workflows. Save time, reduce errors, and improve productivity.',
}

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
