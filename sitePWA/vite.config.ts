import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Barberfy',
      short_name: 'Barberfy',
      description: 'Sistema de agendagamento digital para barbeiros',
      theme_color: '#1C1C1C',
      icons: [
        {
          src: '/barberfy-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/barberfy-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico, jpg, jpeg, webp, json, txt, tsx, ts, jsx}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})