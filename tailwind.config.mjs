/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Optimize CSS for production
  ...(process.env.NODE_ENV === 'production' && {
    corePlugins: {
      // Disable unused features in production
    },
  }),
}










