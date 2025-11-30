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
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
          passes: 2, // Multiple compression passes for better optimization
        },
        format: {
          comments: false, // Remove all comments
        },
        mangle: {
          safari10: true, // Fix Safari 10 issues
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
          // Optimize chunk names
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entry-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,
      // Optimize for production
      sourcemap: false,
    },
    css: {
      devSourcemap: false,
    },
  },
});










