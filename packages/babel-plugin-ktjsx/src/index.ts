// @ts-check
import { PluginObj } from '@babel/core';
import { addFlagToSvgMathMLElement } from './svg-mathml-flag.js';
import { transformConditionalChains } from './if-else.js';

//_: any, options: KTJSXPluginOptions
/**
 * Transform `<svg ...>` and `<math ...>` JSX elements to include a special attribute flag
 */
export default function babelKTjsx(): PluginObj {
  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      JSXElement(path) {
        // Transform k-if/k-else-if/k-else chains first
        transformConditionalChains(path);
        // Then handle SVG/MathML flagging
        addFlagToSvgMathMLElement(path);
      },
    },
  };
}
