import { defineConfig } from 'vite';
import ktjsx from '@ktjs/vite-plugin-ktjsx';

// Vite config for KT.js development
export default defineConfig({
  // ...otherConfigs,
  plugins: [ktjsx()],
});
