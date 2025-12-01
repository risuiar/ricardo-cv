# Prompt: Optimización completa de minificación para proyectos Astro

## Objetivo
Configurar minificación completa de HTML, CSS y JavaScript en producción para proyectos Astro, incluyendo scripts inline y archivos generados.

## Pasos a seguir

### 1. Instalar dependencias necesarias

```bash
npm install -D html-minifier-terser terser
```

### 2. Crear plugin personalizado de minificación HTML

Crear archivo: `src/plugins/html-minify.ts`

```typescript
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
                    minifyJS: {
                      compress: {
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.error'],
                      },
                      mangle: true,
                      format: {
                        comments: false,
                      },
                    },
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
```

### 3. Configurar astro.config.mjs

Agregar las siguientes configuraciones a tu `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import htmlMinify from './src/plugins/html-minify.ts';

export default defineConfig({
  // ... otras configuraciones existentes
  integrations: [
    // ... otras integraciones
    htmlMinify(), // Agregar el plugin de minificación HTML
  ],
  vite: {
    build: {
      cssMinify: true, // Minificar CSS
      minify: 'terser', // Usar terser para minificar JS
      terserOptions: {
        compress: {
          drop_console: true, // Eliminar console.log en producción
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        },
        format: {
          comments: false, // Eliminar todos los comentarios
        },
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: false, // No generar sourcemaps en producción
    },
    css: {
      devSourcemap: false,
    },
  },
});
```

### 4. Optimizar scripts inline

Para scripts inline (`<script is:inline>`), minificarlos manualmente en una sola línea:

**Antes:**
```javascript
<script is:inline>
  (function () {
    async function loadData() {
      const key = new URLSearchParams(window.location.search).get("key");
      // ... código con saltos de línea
    }
  })();
</script>
```

**Después:**
```javascript
<script is:inline>
  (function(){async function n(){const t=new URLSearchParams(window.location.search).get("key");/* código minificado en una línea */}})();
</script>
```

### 5. Verificar resultados

Después del build (`npm run build`), verificar que:
- ✅ HTML esté minificado (sin espacios innecesarios)
- ✅ CSS esté minificado
- ✅ JavaScript esté minificado y sin console.log
- ✅ Scripts inline estén en una sola línea
- ✅ No haya comentarios en el código de producción

## Características de la minificación

### HTML
- ✅ Elimina espacios en blanco
- ✅ Elimina comentarios
- ✅ Elimina atributos redundantes
- ✅ Elimina comillas de atributos cuando es posible
- ✅ Minifica CSS y JS inline
- ✅ Optimiza estructura HTML

### JavaScript
- ✅ Minificación con terser
- ✅ Elimina console.log, console.info, console.debug
- ✅ Elimina debugger statements
- ✅ Elimina comentarios
- ✅ Mangling de variables (obfuscación de nombres)

### CSS
- ✅ Minificación automática
- ✅ Elimina espacios innecesarios
- ✅ Optimiza selectores

## Notas importantes

1. **Scripts inline**: Los scripts con `is:inline` no se procesan por Astro, por lo que necesitan minificarse manualmente o ser procesados por el plugin HTML.

2. **Modo desarrollo**: El plugin solo minifica en producción (`NODE_ENV !== 'development'`), por lo que el código permanece legible durante el desarrollo.

3. **Modo híbrido/SSR**: Si usas `output: 'hybrid'` o `output: 'server'`, el plugin busca archivos HTML tanto en `dist/client/` como en `dist/`.

4. **Errores**: El plugin continúa aunque encuentre errores en algunos archivos (`continueOnParseError: true`).

## Resultado esperado

- **Tamaño reducido**: Archivos HTML/JS/CSS significativamente más pequeños
- **Código ofuscado**: Variables mangleadas y código compacto
- **Sin código de debug**: console.log y comentarios eliminados
- **Mejor rendimiento**: Menos bytes para transferir y parsear

## Troubleshooting

Si algunos scripts inline no se minifican:
1. Verificar que el plugin esté agregado a `integrations`
2. Verificar que `minifyJS` esté configurado correctamente
3. Minificar manualmente scripts críticos si es necesario



