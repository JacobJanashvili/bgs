import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Set the correct MIME types for the generated JavaScript and CSS files
        mimeTypes: {
          '.js': 'application/javascript',
          '.css': 'text/css',
        },
      },
    },
  },
  base: "/bgs/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
