import { DocsLayout } from "fumadocs-ui/layouts/docs";

import type { ReactNode } from "react";
import { blog as source } from "@/lib/source";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="md:mt-24">
        <DocsLayout
          tree={source.pageTree}
          nav={{ enabled: false }}
          sidebar={{ enabled: false }}
        >
          {children}
        </DocsLayout>
      </div>
      <Footer />
    </>
  );
}
