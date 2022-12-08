import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nissfolio/',
  plugins: [vue()],
  build: {
    transpile: ['mdi-vue']
  },
  // assetsInclude: ['**/*.jpg'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
