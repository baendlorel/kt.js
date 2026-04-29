import { defineConfig, type Plugin } from 'vite';
import base from '../../configs/vite.config.js';

export function onceInjectComponent(): Plugin {
  return {
    name: 'css-ts-transform',
    transform(code, id) {
      if (id.endsWith('.tsx') && !id.endsWith('test.tsx') && !id.endsWith('spec.tsx')) {
        return null;
      }

      const transformed = code.replace(/void\s+injectGlobal/g, 'export default css');

      return {
        code: transformed,
        map: null,
      };
    },
  };
}

export default defineConfig((env) => {
  const config = base(env);
  config.plugins!.unshift(onceInjectComponent());
  return config;
});
