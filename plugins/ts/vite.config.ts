import { defineConfig } from 'vite';
import base from '../../configs/vite.config.js';

export default defineConfig((env) => {
  const baseConfig = base(env);
  // @ts-expect-error --- IGNORE ---
  baseConfig.build.lib.formats = ['cjs'];
  return baseConfig;
});
