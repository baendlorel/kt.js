import { defineConfig } from 'tsdown';
import replace from '@rollup/plugin-replace';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig([
  {
    entry: [{ index: 'src/index.ts' }],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    minify: !isDev,
    target: 'node24',
    treeshake: !isDev,
    plugins: [
      replace({
        preventAssignment: true,
        delimiters: ['', ''],
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),

        // global $throw
        "$throw('": `throw new Error('[fluxion error] `,
        '$throw(`': 'throw new Error(`[fluxion error] ',
        '$throw("': `throw new Error("[fluxion error] `,
      }),
    ],
  },
]);
