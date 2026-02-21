import { defineConfig } from 'vite';
import { getAliases, globalDefines } from '../../configs/rollup.config.base.js';

export default defineConfig({
  resolve: {
    alias: getAliases(),
  },
  define: globalDefines,
});
