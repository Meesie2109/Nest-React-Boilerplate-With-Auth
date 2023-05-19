import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PUBLIC_PATH = "";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  base: PUBLIC_PATH,
  css: {
    preprocessorOptions: {
      scss: {
        // adds the helper file into every scss file so they all have
        // access to the global variables and mixins.
        additionalData: "@import './src/ui/styling/helpers.scss';",
      },
    },
  },
});
