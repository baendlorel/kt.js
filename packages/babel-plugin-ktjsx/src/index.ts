import type { PluginObj } from '@babel/core';
import * as t from '@babel/types';

export interface KTJSXPluginOptions {}
export const SVG_ATTR_FLAG = '__kt_svg__';

export default function babelPluginKtjsx(babel: any, options: KTJSXPluginOptions): PluginObj {
  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      JSXElement(path) {
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
        const isSvgRoot = tag === 'svg' || typeof tag === 'string';

        let insideSvg = false;
        if (!isSvgRoot) {
          const parentSvg = path.findParent((p: any) => {
            if (!p.isJSXElement()) {
              return false;
            }
            const popping = p.node.openingElement && p.node.openingElement.name;
            if (!popping) {
              return false;
            }
            if (t.isJSXIdentifier(popping)) {
              const ptag = popping.name;
              return ptag === 'svg' || typeof ptag === 'string';
            }
            if (t.isJSXNamespacedName(popping)) {
              return t.isJSXIdentifier(popping.namespace) && popping.namespace.name === 'svg';
            }
            return false;
          });
          insideSvg = !!parentSvg;
        }

        // & If this element is neither an svg root nor inside an svg, skip.
        if (!isSvgRoot && !insideSvg) {
          return;
        }

        // Add boolean attribute SVG_ATTR_FLAG to opening element if not present
        const attrs = opening.attributes || [];
        const hasFlag = attrs.some(
          (a) => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name) && a.name.name === SVG_ATTR_FLAG,
        );
        if (!hasFlag) {
          attrs.push(t.jsxAttribute(t.jsxIdentifier(SVG_ATTR_FLAG)));
          opening.attributes = attrs;
        }
      },
    },
  } as PluginObj;
}

export { babelPluginKtjsx };
