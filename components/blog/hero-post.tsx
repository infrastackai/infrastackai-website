import Link from "next/link";
import DateFormatter from "./date-formatter";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CoverImage from "./cover-image";
import IBlogPost from "@/interfaces/blog-post";
import generateAvatarFallback from "@/utils/generate-avatar-fallback";
import Image from "next/image";

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
    <a
      href={`/blog/${slug}`}
      className="mt-8 relative justify-between border border-brand-borders dark:bg-medium-black rounded-2xl bg-brand-white p-3 -outline-offset-2 transition-all duration-300 md:p-4 grid grid-rows-[auto_auto] gap-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 md:rounded-3xl motion-reduce:transition-none mb-2 md:mb-4 hover:shadow-[0_0_10px_rgba(255,_255,_255,_0.6)] hover:border-opacity-80"
    >
      <div className="relative aspect-[620/405] h-full w-full overflow-hidden rounded-lg shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]">
        <div className="absolute inset-0 rotate-180 bg-cover bg-center object-cover blur-sm [transform-origin:41%_60%] [object-fit:fill] [transform:scaleX(1.5)_scale(1.5)_rotate(180deg)]"></div>
        <div className="absolute -inset-2">
          <div
            className="pointer-events-none absolute inset-0 bg-[url('/noise.webp')] mix-blend-soft-light z-[1]"
            style={{ backgroundSize: "125px 125px" }}
          ></div>
          <Image
            alt=""
            src={coverImage}
            aria-hidden="true"
            draggable="false"
            decoding="async"
            data-nimg="fill"
            className="absolute object-cover"
            sizes="(max-width: 1920px) 98vw, 70vw"
            fill
          ></Image>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 p-2 md:gap-8 lg:px-0 lg:py-4">
        <div className="contents flex-col gap-8 lg:flex">
          <div className="flex flex-col gap-4">
            <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-sm/[0.875rem] tracking-4 md:text-sm/[1.25rem] uppercase text-neutral-400">
              <DateFormatter dateString={date || new Date()} />
            </div>
            <h2 className="text-3.5xl/[2.25rem] font-semibold -tracking-4 md:text-5.5xl/[3.625rem] text-balance">
              {title}
            </h2>
            <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-base/[1.25rem] md:text-1.5xl/[1.6875rem] text-brand-neutrals-600 dark:text-neutral-400">
              {excerpt}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Image
            src={author?.picture || ""}
            className="size-9 rounded-lg md:size-12"
            width={144}
            height={144}
            alt={author?.name || "Author"}
          />
          <div className="flex flex-col gap-1">
            <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-base/[1.125rem] md:text-lg/[1.5rem] text-gray-300">
              {author?.name}
            </p>
            <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-600 dark:text-neutral-400">
              {author?.title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
