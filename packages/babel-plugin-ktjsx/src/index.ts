import type { PluginObj } from '@babel/core';
import { addFlagToSvgMathMLElement } from './svg-mathml-flag.js';

export default function babelKTjsx(): PluginObj {
  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      JSXElement(path) {
        // Then handle SVG/MathML flagging
        addFlagToSvgMathMLElement(path);
      },
    },
  };
}
