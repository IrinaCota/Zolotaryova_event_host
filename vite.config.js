import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Використовуйте відносний базовий шлях
  build: {
    outDir: './dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  publicDir: 'public', // Вказує на папку зі статичними файлами
  server: {
    open: '/index.html',
  },
});
