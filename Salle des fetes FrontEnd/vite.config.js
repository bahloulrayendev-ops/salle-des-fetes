import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/salles": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/clients": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/reservations": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/employers": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/formules": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/paiements": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/notifications": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/admin": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
