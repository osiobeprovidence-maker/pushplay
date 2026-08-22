import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { copyFileSync } from 'fs';

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      try {
        copyFileSync('dist/index.html', 'dist/404.html');
        // eslint-disable-next-line no-console
        console.log('✓ SPA fallback: copied dist/index.html → dist/404.html for GitHub Pages');
      } catch {}
    },
  };
}

export default defineConfig(() => {
  return {
    appType: 'spa' as const,
    plugins: [react(), tailwindcss(), spaFallbackPlugin() as any],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      port: 4173,
      strictPort: false,
    },
  };
});
