import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    // Vercel dan skrip prerender sama-sama membaca folder "build".
    outDir: "build",
    copyPublicDir: !isSsrBuild,
    // Tanpa aset base64 agar CSP cukup mengizinkan 'self'.
    assetsInlineLimit: 0,
  },
  ssr: {
    noExternal: ["react-icons"],
  },
}));
