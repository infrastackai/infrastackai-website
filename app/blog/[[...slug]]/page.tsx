import { blog as source } from "@/lib/source";
import { notFound } from "next/navigation";
import BlogList from "@/components/blog/blog-list";
import BlogPage from "@/components/blog/blog-page";

export default async function Page(props: { params: { slug?: string[] } }) {
  const { slug } = await props.params;

  if (!slug) {
    return <BlogList />;
  }

  return <BlogPage slug={slug} />;
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
      title: "Blog",
      description: "Blog posts",
    };
  }
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
