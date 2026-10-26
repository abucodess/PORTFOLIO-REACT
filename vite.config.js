import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion-vendor";
            if (id.includes("react-icons")) return "icons-vendor";
            if (id.includes("react") || id.includes("react-dom")) return "react-vendor";
          }
        },
      },
    },
  },
});
