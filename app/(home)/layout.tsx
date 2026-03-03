import type { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site';
import { Toaster } from "react-hot-toast";

 
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "AI Agents",
    "AI Automation",
    "Autonomous Enterprise",
    "AI Operations",
    "AI for Business",
    "Department Automation",
    "AI Workforce",
    "Enterprise AI Agents",
    "AI Voice Agent",
    "AI Sales Agent",
    "AI Compliance Agent",
    "AI Data Analyst",
    "Business Process Automation",
    "Model Agnostic AI",
  ],
  creator: "Infrastack AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@infrastackai",
  },
  manifest: `/site.webmanifest`,
}

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      <Header />
      <Toaster position="top-center"
                  reverseOrder={false} />
      {children}
      <Footer />
    </>
  );
}
