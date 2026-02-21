import { defineConfig } from 'vite';
import { getAliases } from 'scripts/aliases';

export default defineConfig({
  resolve: {
    alias: getAliases(),
  },
});
