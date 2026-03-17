import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendors': ['three', '@react-three/fiber', '@react-three/drei'],
          'gsap-vendors': ['gsap']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
