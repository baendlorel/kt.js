import { defineConfig } from 'vite';
import { getAliases } from '../../configs/aliases.js';

export default defineConfig({
  resolve: {
    alias: getAliases(),
  },
});
