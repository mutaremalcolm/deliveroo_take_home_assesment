import path from "path"
import ReactRefresh from "@vitejs/plugin-react";
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [ReactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
