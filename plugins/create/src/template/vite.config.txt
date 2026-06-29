import { defineConfig } from 'vite';
import ktjsx from '@ktjs/vite-plugin-ktjsx';

export default defineConfig({
  plugins: [ktjsx()],
});
