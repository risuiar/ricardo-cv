import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind()],
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        },
        format: {
          comments: false, // Remove all comments
        },
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
    },
    css: {
      devSourcemap: false,
    },
  },
});










