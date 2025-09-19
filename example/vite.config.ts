import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'kt.js': path.resolve(__dirname, '../src/index.ts'),
      '@': path.resolve(__dirname, '../src'),
    },
  },
});