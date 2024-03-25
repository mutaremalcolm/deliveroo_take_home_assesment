/// <reference types="vitest" />

import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['.src/tests/vitest.setup.js'],
    coverage: {
      provider: 'v8'
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


