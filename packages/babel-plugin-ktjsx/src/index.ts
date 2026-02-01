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
      JSXElement(path: any) {
        const opening = path.node.openingElement;
        if (!opening) {
          return;
        }

        const oname = opening.name;
        if (t.isJSXNamespacedName(oname)) {
          return;
        }
        if (!t.isJSXIdentifier(oname)) {
          return;
        }

        const tag = oname.name;
        const isSvgRoot = tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));

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

        // Add boolean attribute __kt_svg__ to opening element if not present
        const attrs = opening.attributes || [];
        const hasFlag = attrs.some(
          (a: any) => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name) && a.name.name === '__kt_svg__',
        );
        if (!hasFlag) {
          attrs.push(t.jsxAttribute(t.jsxIdentifier('__kt_svg__')));
          opening.attributes = attrs;
        }
      },
    },
  } as PluginObj;
}

export { babelPluginKtjsx };
