import { defineConfig } from 'vite';
import { getAliases } from '../../configs/aliases.js';
import { globalDefines } from '../../configs/replace-options.js';

export default defineConfig({
  resolve: {
    alias: getAliases(),
  },
  define: globalDefines,
});
