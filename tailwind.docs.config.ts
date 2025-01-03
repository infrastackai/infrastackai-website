import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset(
    {
      preset: 'vitepress',
      addGlobalColors: true,
    }
  )],
};
