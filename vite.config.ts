import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5175,
    hmr: {
      host: 'localhost',
    },
    cors: true,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
