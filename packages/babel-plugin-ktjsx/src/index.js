// @ts-check
import * as t from '@babel/types';

/**
 * Options for the plugin (kept for compatibility with original TS types).
 * @typedef {Object} KTJSXPluginOptions
 */

/**
 * Flag added to SVG elements to mark processed nodes.
 * @type {string}
 */
export const SVG_ATTR_FLAG = '__kt_svg__';

/**
 * Babel plugin to mark SVG elements.
 * @param {import('@babel/core')} babel - The Babel instance (unused directly).
 * @param {KTJSXPluginOptions} [options]
 * @returns {import('@babel/core').PluginObj}
 */
export default function babelPluginKtjsx(babel, options) {
  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      /**
       * @param {import('@babel/core').NodePath<import('@babel/types').JSXElement>} path
       */
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
        console.log(' oname.name', oname.name);
        const isSvgRoot = tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));

        let insideSvg = false;
        if (!isSvgRoot) {
          /**
           * @type {import('@babel/core').NodePath | null}
           */
          const parentSvg = path.findParent((p) => {
            if (!p.isJSXElement()) {
              return false;
            }
            const popping = p.node.openingElement && p.node.openingElement.name;
            if (!popping) {
              return false;
            }
            if (t.isJSXIdentifier(popping)) {
              const ptag = popping.name;
              console.log('PTAG', ptag);
              return ptag === 'svg' || (typeof ptag === 'string' && ptag.startsWith('svg:'));
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
  };
}

export { babelPluginKtjsx };
