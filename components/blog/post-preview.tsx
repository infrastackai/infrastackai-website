import DateFormatter from "./date-formatter";
import IBlogPost from "@/interfaces/blog-post";
import Image from "next/image";

type Props = IBlogPost & {
  slug: string;
};

export function PostPreview({ title, date, excerpt, author, slug }: Props) {
  return (
    <a
      href={`/blog/${slug}`}
      className="relative justify-between border dark:bg-medium-black -outline-offset-2 flex flex-col gap-4 md:gap-2 px-6 py-6 md:py-6.5 rounded-2xl md:rounded-2.5xl border-0.75 transition-colors duration-300 motion-reduce:transition-none border-zinc-300 hover:border-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-300"
    >
      <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-sm/[0.875rem] tracking-4 md:text-sm/[1.25rem] uppercase text-neutral-400">
        <DateFormatter dateString={date || new Date()} />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 md:gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="pt-0.5 text-xl/[1.375rem] font-semibold -tracking-4 md:text-2xl/[1.875rem] text-balance">
            {title}
          </h2>
          <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-sm/[1.125rem] md:text-base/[1.375rem] hidden text-neutral-600 dark:text-neutral-400 md:block">
            {excerpt}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={author?.picture || ""}
            className="size-9 rounded-lg md:size-12"
            width={144}
            height={144}
            alt={author?.name || "Author"}
          />
          <div className="flex flex-col gap-1">
            <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-base/[1.125rem] md:text-lg/[1.5rem] text-zinc-600 dark:text-zinc-300 ">
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
