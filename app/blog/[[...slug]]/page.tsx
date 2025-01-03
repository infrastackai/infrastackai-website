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

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  if (!params.slug) {
    const pages = source.getPages()
    return (
      <div className='mt-[144px] pl-24 pr-24 w-full font-[family-name:var(--font-geist-sans)]'>
        <h1 className="text-7xl font-bold font-semibold trackin text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Blog.</h1>
        <p className='text-muted-foreground mt-2 text-lg font-[family-name:var(--font-geist-mono)]'>Compiled collection of team insights</p>
        <div className="space-y-4">
          {pages.map((page) => (
            <Link
              key={page.url}
              href={page.url}
              className="block p-4 border rounded hover:bg-gray-50"
            >
              <h2 className="text-xl font-semibold">{page.data.title}</h2>
              {page.data.description && (
                <p className="mt-2 text-gray-600">{page.data.description}</p>
              )}
            </Link>
          ))}
        </div>
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
