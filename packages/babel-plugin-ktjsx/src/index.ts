import type { PluginObj } from '@babel/core';
import * as t from '@babel/types';

export interface KTJSXPluginOptions {
  svgTags?: string[];
  namespaceURI?: string;
  createElementNames?: string[];
}

// Basic Babel plugin skeleton – transforms calls like
// createElement('svg', ...) -> createElementNS('http://...','svg', ...)
export default function babelPluginKtjsx(babel: any, options: KTJSXPluginOptions = {}): PluginObj {
  const svgTags = options.svgTags ?? ['svg'];

  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      // Handle raw JSX nodes so plugin works even when run before JSX->createElement transform
      JSXOpeningElement(path: any) {
        const name = path.node.name;
        if (t.isJSXNamespacedName(name)) return;
        if (!t.isJSXIdentifier(name)) return;

        const tag = name.name;

        const isSvgRoot = tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));

        // If not root, check if we're inside an SVG ancestor
        let insideSvg = false;
        if (!isSvgRoot) {
          const parentSvg = path.findParent((p: any) => {
            if (!p.isJSXElement()) return false;
            const opening = p.node.openingElement;
            const pn = opening.name;
            if (t.isJSXIdentifier(pn)) {
              const ptag = pn.name;
              return ptag === 'svg' || (typeof ptag === 'string' && ptag.startsWith('svg:'));
            }
            if (t.isJSXNamespacedName(pn)) {
              return t.isJSXIdentifier(pn.namespace) && pn.namespace.name === 'svg';
            }
            return false;
          });
          insideSvg = !!parentSvg;
        }

        if (!isSvgRoot && !(insideSvg && svgTags.includes(tag))) return;

        path.node.name = t.jsxNamespacedName(t.jsxIdentifier('svg'), t.jsxIdentifier(tag));
      },
      JSXClosingElement(path: any) {
        const name = path.node.name;
        if (t.isJSXNamespacedName(name)) return;
        if (!t.isJSXIdentifier(name)) return;

        const tag = name.name;

        const isSvgRoot = tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));
        let insideSvg = false;
        if (!isSvgRoot) {
          const parentSvg = path.findParent((p: any) => {
            if (!p.isJSXElement()) return false;
            const opening = p.node.openingElement;
            const pn = opening.name;
            if (t.isJSXIdentifier(pn)) {
              const ptag = pn.name;
              return ptag === 'svg' || (typeof ptag === 'string' && ptag.startsWith('svg:'));
            }
            if (t.isJSXNamespacedName(pn)) {
              return t.isJSXIdentifier(pn.namespace) && pn.namespace.name === 'svg';
            }
            return false;
          });
          insideSvg = !!parentSvg;
        }

        if (!isSvgRoot && !(insideSvg && svgTags.includes(tag))) return;

        path.node.name = t.jsxNamespacedName(t.jsxIdentifier('svg'), t.jsxIdentifier(tag));
      },
      JSXElement(path: any) {
        console.log('JSXElement found', path);
      },
    },
  } as PluginObj;
}

export { babelPluginKtjsx };
