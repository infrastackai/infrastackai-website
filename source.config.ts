import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.object({
      name: z.string(),
      picture: z.string(),
      title: z.string(),
    }),
    coverImage: z.string(),
    excerpt: z.string(),
  }),
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    // remarkPlugins: [remarkMermaid],
  },
});
