import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), react()],
  base: command === 'serve' ? '/' : '/dashboard-admin-tailwind',

  server: {
    port: 3000,
    host: 'localhost',
  },

  preview: {
    port: 8080,
    host: 'localhost',
  },

  esbuild: {
    legalComments: 'none', // remove copyright notice from bundle
    drop: command === 'serve' ? [] : ['console'], // remove console.log in production
  },

  build: {
    emptyOutDir: true,
    manifest: false,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'main.css'
          return 'assets/[hash].[ext]'
        },
      },
    },
  },
}))
