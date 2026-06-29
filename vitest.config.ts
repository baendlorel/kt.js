import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { dirs } from './common/consts.js';
import { replace } from './configs/replace.js';

const getDir = (name: string, file: string = 'index.ts') => dirs.root.join('packages', name, 'src', file);

export default defineConfig(() => {
  const dir = process.env.LIB_DIR!;

  return {
    test: {
      setupFiles: [path.join('configs', 'vitest.setup.ts')],
      environment: 'jsdom',
      // setupFiles: ['./src/macros.ts'],
      include: [path.join(dir, '**', '*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)')],
      exclude: [
        path.join(dir, '**', 'node_modules', '**'),
        path.join(dir, '**', 'dist', '**'),
        path.join(dir, '**', 'build', '**'),
        path.join(dir, '**', 'coverage', '**'),
      ],
      silent: false,
    },
    plugins: [replace(dir)],
    resolve: {
      alias: [
        { find: 'kt.js/jsx-dev-runtime', replacement: getDir('core', 'jsx-runtime.ts') },
        { find: 'kt.js/jsx-runtime', replacement: getDir('core', 'jsx-runtime.ts') },
        { find: 'kt.js/jsx', replacement: getDir('core', 'jsx.ts') },
        { find: 'kt.js', replacement: getDir('kt.js') },

        { find: '@ktjs/core/jsx-dev-runtime', replacement: getDir('core', 'jsx-runtime.ts') },
        { find: '@ktjs/core/jsx-runtime', replacement: getDir('core', 'jsx-runtime.ts') },
        { find: '@ktjs/core/jsx', replacement: getDir('core', 'jsx-runtime.ts') },
        { find: '@ktjs/core', replacement: getDir('core') },

        { find: '@ktjs/mui-icon', replacement: getDir('mui-icon') },
        { find: '@ktjs/mui', replacement: getDir('mui') },

        { find: '@ktjs/router', replacement: getDir('router') },
        { find: '@ktjs/shared', replacement: getDir('shared') },
      ],
    },
  };
});

// // Extra aliases for jsx runtimes
// if (name === '@ktjs/core') {
//   aliases.push({ find: name + '/jsx', replacement: src.join('index.ts') });
// } else if (name === 'kt.js') {
//   aliases.push({ find: name + '/jsx', replacement: src.join('jsx.ts') });
// }
// aliases.push({ find: name + '/jsx-runtime', replacement: src.join('jsx-runtime.ts') });
// aliases.push({ find: name + '/jsx-dev-runtime', replacement: src.join('jsx-runtime.ts') });
