import { defineConfig, type Plugin } from 'vite';
import MagicString from 'magic-string';
import base from '../../configs/vite.config.js';
import path, { dirname } from 'node:path';
import { readdirSync } from 'node:fs';
import { dirs } from '../../common/consts.js';

function findCssTs(id: string) {
  const dir = dirname(id);
  const items = readdirSync(dir);
  return items.find((i) => i.endsWith('.css.ts'))!.replace(/.ts$/, '.js');
}

const muiComponentDir = dirs.packages.join('mui', 'src', 'components');
export function onceInjectComponent(): Plugin {
  return {
    name: 'css-ts-transform',
    transform(code, id) {
      if (id.endsWith('.ts') || id.endsWith('test.tsx') || id.endsWith('spec.tsx')) {
        return null;
      }
      if (!id.includes(muiComponentDir)) {
        return null;
      }

      const matched = code.match(/export function[\s][A-Z][a-zA-Z0-9]+/g);
      if (!matched) {
        return null;
      }

      const entries = [...matched].map((s, i) => ({
        name: s.split(' ')[2],
        index: code.indexOf(s),
      }));

      const s = new MagicString(code);
      s.appendLeft(0, `import c from './${findCssTs(id)}';\n`);
      // s.replace(`import './${findCssTs(id)}';`, '');

      for (const { name, index } of entries) {
        const alias = `_${name}`;
        s.remove(index, index + 'export '.length);
        s.append(`
          let ${alias}=(...a)=>(c('${name}'),(${alias}=${name})(...a));
          export{${alias} as ${name}};`);
      }

      return {
        code: s.toString(),
        map: s.generateMap({ source: id, includeContent: true }),
      };
    },
  };
}

export default defineConfig((env) => {
  const config = base(env);
  config.plugins!.unshift(onceInjectComponent());
  return config;
});
