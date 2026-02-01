import type { PluginObj } from '@babel/core';
import * as t from '@babel/types';

export interface KTJSXPluginOptions {
  svgTags?: string[];
  namespaceURI?: string;
  createElementNames?: string[];
}

export default function babelPluginKtjsx(babel: any, options: KTJSXPluginOptions = {}): PluginObj {
  const svgTags = options.svgTags ?? ['svg'];

  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      // Handle raw JSX nodes so plugin works even when run before JSX->createElement transform
      JSXElement(path: any) {
        // Consolidated handling: update both opening and closing element names here.
        const opening = path.node.openingElement;
        if (!opening) return;

        const oname = opening.name;
        // skip if already namespaced
        if (t.isJSXNamespacedName(oname)) return;
        if (!t.isJSXIdentifier(oname)) return;

        const tag = oname.name;
        const isSvgRoot = tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));

        // If not root, check ancestor JSX elements for an SVG root
        let insideSvg = false;
        if (!isSvgRoot) {
          const parentSvg = path.findParent((p: any) => {
            if (!p.isJSXElement()) return false;
            const popping = p.node.openingElement && p.node.openingElement.name;
            if (!popping) return false;
            if (t.isJSXIdentifier(popping)) {
              const ptag = popping.name;
              return ptag === 'svg' || (typeof ptag === 'string' && ptag.startsWith('svg:'));
            }
            if (t.isJSXNamespacedName(popping)) {
              return t.isJSXIdentifier(popping.namespace) && popping.namespace.name === 'svg';
            }
            return false;
          });
          insideSvg = !!parentSvg;
        }

        if (!isSvgRoot && !(insideSvg && svgTags.includes(tag))) return;

        // Update opening name
        opening.name = t.jsxNamespacedName(t.jsxIdentifier('svg'), t.jsxIdentifier(tag));

        // Update closing name if present (non self-closing)
        const closing = path.node.closingElement;
        if (closing && !t.isJSXNamespacedName(closing.name) && t.isJSXIdentifier(closing.name)) {
          closing.name = t.jsxNamespacedName(t.jsxIdentifier('svg'), t.jsxIdentifier(tag));
        }
      },
    },
  } as PluginObj;
}

export { babelPluginKtjsx };
