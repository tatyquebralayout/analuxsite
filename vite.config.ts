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
    outDir: 'dist', // Explicitamente define o diretório de saída
    emptyOutDir: true, // Limpa o diretório antes de construir
  },
  server: {
    // Permite que qualquer host acesse a aplicação
    hmr: {
      host: 'localhost',
    },
    cors: true,
    strictPort: true,
    host: true, // Permite acesso externo
  },
});
