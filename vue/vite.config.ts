import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), vue()],
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
    // drop: command === 'serve' ? [] : ['console'], // remove console.log in production
  },

  build: {
    emptyOutDir: true,
    manifest: false,
    rollupOptions: {
      output: {
        sanitizeFileName: (name) => {
          // Sanitizes file names generated during the build process:
          // - Replaces spaces with dashes ('-').
          // - Removes invalid characters that are not alphanumeric, underscores (_), periods (.), or dashes (-).
          return name
            .replace(/\s+/g, '-') // Replaces spaces with dashes.
            .replace(/[^a-zA-Z0-9_.-]/g, ''); // Removes all invalid characters.
        },
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'main.css'
          return 'assets/[hash].[ext]'
        },
      },
    },
  },
}))
