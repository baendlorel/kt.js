import { defineConfig } from 'vite';
import { getAliases } from '../../scripts/aliases.js';

export default defineConfig({
  resolve: {
    alias: getAliases(),
  },
});
