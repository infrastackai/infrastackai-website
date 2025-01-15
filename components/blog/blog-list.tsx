import { blog } from "@/lib/source";
import { HeroPost } from "./hero-post";
import MorePosts from "./more-posts";
import { notFound } from "next/navigation";

export default function BlogList() {
  const pages = blog.getPages();
  if (pages.length === 0) notFound();
  let heroPost = pages.find((page) => page.data.isHero);
  if (!heroPost) heroPost = pages[0];

  pages.splice(pages.indexOf(heroPost), 1);

  return (
    <div className="mt-[104px] md:mt-[144px] px-6 md:px-24 pb-16 md:pb-24 w-full font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
        Blog.
      </h1>
      <p className="text-muted-foreground mt-2 text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
        Compiled collection of team insights
      </p>
      <div className="mt-8 md:mt-12">
        <HeroPost
          title={heroPost.data.title}
          coverImage={heroPost.data.coverImage}
          excerpt={heroPost.data.excerpt}
          date={heroPost.data.lastModified}
          author={heroPost.data.author}
          slug={heroPost.slugs[0]}
        />
      </div>
      {pages.length > 0 && (
        <div className="mt-8 md:mt-12 space-y-4">
          <MorePosts
            posts={pages.map((page) => ({
              title: page.data.title,
              coverImage: page.data.coverImage,
              date: page.data.lastModified,
              excerpt: page.data.excerpt,
              author: page.data.author,
              slug: page.slugs[0],
            }))}
          />
        </div>
      )}
    </div>
  );
}
