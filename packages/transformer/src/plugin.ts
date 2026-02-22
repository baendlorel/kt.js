import type { PluginObj } from '@babel/core';
import { addFlagToSvgMathMLElement, transformSvgMathMLCallExpression, transformSvgMathMLJSX } from './svg-mathml-flag.js';
import { transformConditionalChains } from './if-else.js';
import { transformKFor, transformKForCallExpression, validateDirectiveCombinations } from './k-for.js';

export function transformerKTjsx(): PluginObj {
  return {
    name: 'ktjs-transformer',
    visitor: {
      JSXElement: {
        enter(path) {
          validateDirectiveCombinations(path);
          addFlagToSvgMathMLElement(path);
          transformConditionalChains(path);
        },
        exit(path) {
          transformKFor(path);
        },
      },
      CallExpression: {
        exit(path) {
          transformSvgMathMLCallExpression(path);
          transformKForCallExpression(path);
        },
      },
      Program: {
        exit(path) {
          transformSvgMathMLJSX(path);
        },
      },
    },
  };
}

export default transformerKTjsx;
