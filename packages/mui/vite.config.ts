import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.mjs',
      cssFileName: 'index',
    },
    rollupOptions: {
      external: [/^@ktjs\//],
    },
  },
});
