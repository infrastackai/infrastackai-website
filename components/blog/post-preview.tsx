import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import IBlogPost from "@/interfaces/blog-post";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import generateAvatarFallback from "@/utils/generate-avatar-fallback";

type Props = IBlogPost & {
  slug: string;
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date || new Date()} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={author?.picture} />
          <AvatarFallback>{generateAvatarFallback(author?.name || "")}</AvatarFallback>
        </Avatar>
        <div className="text-xl font-bold">{author?.name}</div>
      </div>
    </div>
  );
}
