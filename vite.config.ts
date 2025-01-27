import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Service worker otomatis update jika ada perubahan
      manifest: {
        name: 'SinThink AI',
        short_name: 'SinThink AI',
        description: 'experience free and fast AI solutions designed to boost productivity',
        theme_color: '#000000', // Warna tema aplikasi
        background_color: '#000000', // Warna latar belakang splash screen
        icons: [
          {
            src: '/icon-192x192.png', // Pastikan file ini ada di folder public/
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/', // Tetap gunakan base sesuai kebutuhan
});
