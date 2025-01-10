import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import "./docs.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout nav={{
      enabled: true,
    }} tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
