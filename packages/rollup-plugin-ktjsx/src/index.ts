import type { Plugin } from 'rollup';

export interface KTJSXPluginOptions {
  svgTags?: string[];
  namespaceURI?: string;
}

const DEFAULT_SVG_TAGS = [
  'svg',
  'g',
  'path',
  'rect',
  'circle',
  'ellipse',
  'line',
  'polyline',
  'polygon',
  'text',
  'use',
  'defs',
  'symbol',
  'view',
];

function createReplaceRegex(tags: string[]) {
  // match createElement('tag' or "tag") or h('tag', ...)
  const joined = tags.map((t) => t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  // capture function name (createElement or h) and the tag string
  return new RegExp(`(createElement|h)\(\s*(['\"])(?:${joined})\2`, 'g');
}

export default function ktjsxPlugin(opts: KTJSXPluginOptions = {}): Plugin {
  const svgTags = opts.svgTags ?? DEFAULT_SVG_TAGS;
  const ns = opts.namespaceURI ?? 'http://www.w3.org/2000/svg';
  const regex = createReplaceRegex(svgTags);

  return {
    name: 'rollup-plugin-ktjsx',
    transform(code, id) {
      // Only process TS/JS files that likely contain compiled JSX
      if (!/\.(t|j)sx?$/.test(id)) return null;

      // Replace createElement('svg', ...) -> createElementNS('http://...','svg', ...)
      const replaced = code.replace(regex, (match, fn, quote) => {
        // extract tag name from match
        const m = /\(\s*(['\"])([^'\"]+)\1/.exec(match);
        const tag = m ? m[2] : null;
        if (!tag) return match;
        return `${fn}NS(${quote}${ns}${quote}, ${quote}${tag}${quote}`;
      });

      if (replaced === code) return null;
      return {
        code: replaced,
        map: { mappings: '' },
      };
    },
  };
}

export { ktjsxPlugin as rollupPluginKtjsx };
