import { defineConfig } from 'vite';

export default defineConfig({
  base: '/zolotaryova-event-host/', 
  build: {
    outDir: './dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  publicDir: 'partials', 
  server: {
    open: '/index.html',
  },
});
