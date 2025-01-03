import type { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';


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
