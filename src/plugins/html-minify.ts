import type { AstroIntegration } from 'astro';
import { minify } from 'html-minifier-terser';

export default function htmlMinify(): AstroIntegration {
  return {
    name: 'html-minify',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // Only minify in production
        if (process.env.NODE_ENV === 'development') return;

        const { promises: fs } = await import('fs');
        const path = await import('path');

        const distPath = dir.pathname;
        const clientPath = path.join(distPath, 'client');

        async function minifyHtmlFiles(dirPath: string) {
          try {
            const entries = await fs.readdir(dirPath, { withFileTypes: true });
            
            for (const entry of entries) {
              const fullPath = path.join(dirPath, entry.name);
              
              if (entry.isDirectory()) {
                await minifyHtmlFiles(fullPath);
              } else if (entry.name.endsWith('.html')) {
                try {
                  const html = await fs.readFile(fullPath, 'utf-8');
                  const minified = await minify(html, {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeAttributeQuotes: true,
                    removeTagWhitespace: true,
                    caseSensitive: false,
                    conservativeCollapse: false,
                    continueOnParseError: true,
                  });
                  await fs.writeFile(fullPath, minified);
                } catch (error) {
                  console.error(`Error minifying ${fullPath}:`, error);
                }
              }
            }
          } catch (error) {
            // Directory might not exist, which is fine
          }
        }

        // Minify HTML files in client directory (pre-rendered pages)
        await minifyHtmlFiles(clientPath);
        
        // Also check root dist directory for any HTML files
        await minifyHtmlFiles(distPath);
      },
    },
  };
}

