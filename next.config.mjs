import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hessian.ai', 'avatars.githubusercontent.com'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Apply MDX only for `/docs` and `/blog`
      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
          },
        ],
      });
    }
    return config;
  },
};

export default withMDX(nextConfig);

