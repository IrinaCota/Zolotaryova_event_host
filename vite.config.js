import { defineConfig } from 'vite';
import { sync } from 'glob'; // Зміна імпорту
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.', // Встановлюємо корінь проекту на головну папку
    build: {
      sourcemap: true,

      rollupOptions: {
        input: sync('./*.html'), // Тепер ми вказуємо, що основний HTML файл в корені
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: './dist',
    },
    plugins: [injectHTML(), FullReload(['./index.html'])], // Додаємо слідкування за змінами в index.html

    server: {
      open: '/index.html', // Це відкриє index.html при старті серверу
    },
  };
});
