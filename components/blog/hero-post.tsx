import Link from "next/link";
import DateFormatter from "./date-formatter";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import CoverImage from "./cover-image";
import IBlogPost from "@/interfaces/blog-post";
import generateAvatarFallback from "@/utils/generate-avatar-fallback";

type Props = IBlogPost & {
  slug: string;
};



export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date || new Date()} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={author?.picture} />
              <AvatarFallback>{generateAvatarFallback(author?.name || "")}</AvatarFallback>
            </Avatar>
            <div className="text-xl font-bold">{author?.name}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
