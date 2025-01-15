"use client";

import { useScreenSize } from "@/hooks/use-screen-size";
import { blog } from "@/lib/source";
import Link from "fumadocs-core/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

type BlogPageProps = {
  slug: string[];
};
export default function BlogPage({ slug }: BlogPageProps) {
  const { isMobile } = useScreenSize();
  const page = blog.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  return (
    <DocsPage
      tableOfContent={{
        style: "clerk",
      }}
      lastUpdate={new Date(Date.now())}
      toc={!isMobile ? page.data.toc : undefined}
      full={page.data.full}
      breadcrumb={{ enabled: false }}
    >
      <Link href="/blog" className="mt-6 sm:mt-0 block">
        Back to the main blog
      </Link>
      {isMobile && <InlineTOC items={page.data.toc} />}
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}
