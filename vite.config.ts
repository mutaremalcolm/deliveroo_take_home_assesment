/// <reference types="vitest" />

import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  test: {
    // ...
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


