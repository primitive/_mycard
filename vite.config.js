import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import siteSettings from './src/settings.js'; // ✅ import your config
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: siteSettings.title,
          description: siteSettings.description,
          theme_color: siteSettings.color.theme_ui
        }
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Primitive Web Card',
        short_name: 'MyCard',
        description: siteSettings.description,
        start_url: '.',
        display: 'standalone',
        background_color: siteSettings.color.bg,
        theme_color: siteSettings.color.theme_ui,
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
