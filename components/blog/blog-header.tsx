import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import generateAvatarFallback from "@/utils/generate-avatar-fallback";
import DateFormatter from "./date-formatter";

export const BlogHeader = ({
  author,
  authorPicture,
  title,
  description,
  date,
  ogImage,
}: {
  author: string;
  authorPicture: string;
  title: string;
  description?: string;
  date?: number;
  ogImage?: string;
}) => (
  <div className="flex flex-col gap-1 sm:gap-2 items-center text-center px-4 sm:px-0">
    {ogImage && (
      <div className="mt-2 sm:mt-4 rounded relative aspect-video overflow-hidden w-full">
        <Image
          src={ogImage}
          className="object-cover transform group-hover:scale-105 transition-transform"
          alt={title}
          fill={true}
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
    )}
    <h1 className="text-2xl sm:text-3xl font-bold leading-snug text-balance">
      {title}
    </h1>
    <p className="text-primary/60 text-lg sm:text-xl text-balance">
      {description}
    </p>
    <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
      <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
        <AvatarImage src={authorPicture} className="m-0" />
        <AvatarFallback>{generateAvatarFallback(author || "")}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start gap-0.5 sm:gap-1">
        <div className="text-lg sm:text-xl font-bold">{author}</div>
        <div className="text-primary/60 text-xs">
          <DateFormatter dateString={date || new Date()} />
        </div>
      </div>
    </div>
    {/* <Authors authors={authors} /> */}
  </div>
);
