import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { blog as source } from '@/lib/source';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <DocsLayout tree={source.pageTree} sidebar={{ enabled: false }}>
                {children}
            </DocsLayout>
            <Footer />
        </>
    );
}
