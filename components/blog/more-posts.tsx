import { PostPreview } from "@/components/blog/post-preview";
import IBlogPost from "@/interfaces/blog-post";

type BlogPost = IBlogPost & {
  slug: string;
};
type Props = {
  posts: BlogPost[];
};

export default function MorePosts({ posts }: Props) {
  return (
    <div className="optimized-render-block flex flex-col gap-6">
      <h2 className="text-xl/[1.375rem] font-semibold -tracking-4 md:text-4xl/[2.625rem]">
        All Posts
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4.5 lg:gap-y-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
