import { blog as source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import Link from 'next/link';
import { HeroPost } from "@/components/blog/hero-post";
import { IntroSection } from '@/sections/blog/intro';
import MorePosts from '@/sections/blog/more-posts';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  if (!params.slug) {
    const pages = source.getPages();
    const heroPost = pages.shift();
    if (!heroPost) notFound();

    return (
      <div className='container mx-auto px-5'>
        <IntroSection />
        <HeroPost
          title={heroPost.data.title}
          coverImage={heroPost.data.coverImage}
          excerpt={heroPost.data.excerpt}
          date={heroPost.data.date}
          author={heroPost.data.author}
          slug={heroPost.slugs[0]}
        />
        {pages.length > 0 &&
          <div className="space-y-4">
            <MorePosts posts={pages.map(
              (page) => ({
                title: page.data.title,
                coverImage: page.data.coverImage,
                date: page.data.date,
                excerpt: page.data.excerpt,
                author: page.data.author,
                slug: page.slugs[0],
              })
            )}
            />
          </div>
        }
      </div>
    )
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage tableOfContent={{
      style: 'clerk',
    }} lastUpdate={new Date(Date.now())} toc={page.data.toc} full={page.data.full}>
      <Link href='/blog'>Back to the main blog</Link>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  if (!params.slug) {
    return {
      title: 'Blog',
      description: 'Blog posts',
    };
  }
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
