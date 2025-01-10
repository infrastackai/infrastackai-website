import { DocsLayout } from "fumadocs-ui/layouts/docs";

import type { ReactNode } from "react";
import { blog as source } from "@/lib/source";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./blog.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mt-24">
        <DocsLayout
          nav={{ component: <Header /> }}
          tree={source.pageTree} sidebar={{ enabled: false }}>
          {children}
        </DocsLayout>
      </div>
      <Footer />
    </>
  );
}
