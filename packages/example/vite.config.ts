import { defineConfig } from 'vite';
import { getAliases, globalDefines } from '../../configs/rollup.config.base.js';

const inPackage = (id: string, pkg: string) => {
  const escaped = pkg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`[\\\\/]node_modules[\\\\/](?:\\.pnpm[\\\\/][^\\\\/]+[\\\\/]node_modules[\\\\/])?${escaped}[\\\\/]`);
  return re.test(id);
};

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/kt.js/' : '/',
  resolve: {
    alias: getAliases(),
  },
  define: globalDefines,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (inPackage(id, '@emotion/css')) {
            return 'vendor-emotion';
          }
          if (inPackage(id, 'marked')) {
            return 'vendor-marked';
          }
          if (
            inPackage(id, 'shiki') ||
            inPackage(id, '@shikijs/core') ||
            inPackage(id, '@shikijs/langs') ||
            inPackage(id, '@shikijs/themes') ||
            inPackage(id, '@shikijs/engine-oniguruma') ||
            inPackage(id, '@shikijs/engine-javascript') ||
            inPackage(id, '@shikijs/types') ||
            inPackage(id, 'vscode-oniguruma') ||
            inPackage(id, 'vscode-textmate')
          ) {
            return 'vendor-shiki';
          }
          return undefined;
        },
      },
    },
  },
}));
