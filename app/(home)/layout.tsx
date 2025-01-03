import type { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site';
 
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "AI-Ops",
    "AIOps",
    "SRE AI Agents",
    "DevOps AI Agents",
    "AI Infrastructure",
    "AI Infrastructure Management",
    "AI Infrastructure Automation",
    "AI Infrastructure Monitoring",
    "AI Infrastructure Security",
    "AI Infrastructure Compliance",
    "AI Infrastructure Governance",
    "AI Infrastructure Optimization",
    "AI Infrastructure Cost Management",
    "AI Infrastructure Performance Management",
    "AI Monitoring Automation",
    "AI Observability Automation",
    "AI Security Automation",
  ],
  creator: "InfraStack AI",
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
      {children}
      <Footer />
    </>
  );
}
