import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { remarkMermaid } from '@theguild/remark-mermaid';
import { z } from 'zod';


export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.object({
      name: z.string(),
      picture: z.string(),
    }),
    coverImage: z.string(),
    excerpt: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
});
