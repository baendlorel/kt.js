import type { PluginObj } from '@babel/core';
import { addFlagToSvgMathMLElement } from './svg-mathml-flag.js';
import { transformConditionalChains } from './if-else.js';
import { transformKFor, validateDirectiveCombinations } from './k-for.js';

export function transformerKTjsx(): PluginObj {
  return {
    name: 'ktjs-transformer',
    visitor: {
      JSXElement: {
        enter(path) {
          validateDirectiveCombinations(path);
          transformConditionalChains(path);
          addFlagToSvgMathMLElement(path);
        },
        exit(path) {
          transformKFor(path);
        },
      },
    },
  };
}

export default transformerKTjsx;
