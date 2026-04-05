import { defineConfig } from 'vite';
import { getAliases, globalDefines } from '../../configs/rollup.config.base.js';
import ktjsx from '@ktjs/vite-plugin-ktjsx';

const inPackage = (id: string, pkg: string) => {
  const escaped = pkg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `[\\\\/]node_modules[\\\\/](?:\\.pnpm[\\\\/][^\\\\/]+[\\\\/]node_modules[\\\\/])?${escaped}[\\\\/]`,
  );
  return re.test(id);
};

export default defineConfig(({ command }) => {
  const globalFns: any =
    command === 'build'
      ? {}
      : {
          $throw: (msg: string) => {
            throw new Error(`[kt.js error] ${msg}`);
          },
          $warn: (msg: string) => {
            console.warn(`[kt.js warn] ${msg}`);
          },
          $error: (msg: string) => {
            console.error(`[kt.js error] ${msg}`);
          },
          $debug: (msg: string) => {
            console.debug(`[kt.js debug] ${msg}`);
          },
        };

  for (const key in globalFns) {
    globalFns[key] = globalFns[key].toString();
  }

  return {
    base: command === 'build' ? '/kt.js/' : '/',
    resolve: {
      alias: getAliases(),
    },
    plugins: [ktjsx()],
    define: {
      ...globalDefines,
      ...globalFns,
      'process.env.BASE_URL': JSON.stringify(command === 'build' ? '/kt.js/' : '/'),
    },
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
  };
});
