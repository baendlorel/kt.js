import type { PluginObj } from '@babel/core';
import * as t from '@babel/types';

export interface KTJSXPluginOptions {
  svgTags?: string[];
  namespaceURI?: string;
  createElementNames?: string[];
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

const prox = (o: any) => {
  if (!o || typeof o !== 'object') {
    // If it's a function, return a proxy that traps calls
    if (typeof o === 'function') {
      return new Proxy(o, {
        apply(target, thisArg, argumentsList) {
          console.log(`Calling function with arguments:`, argumentsList);
          return target.apply(thisArg, argumentsList);
        },
      });
    }
    return o;
  }

  return new Proxy(o, {
    get(target, prop, receiver) {
      const val = target[prop as keyof typeof target];
      console.log(`Accessing property "${String(prop)}"`);
      // If the property is a function (visitor handler), return a wrapper
      if (typeof val === 'function') {
        return function (this: any, ...args: any[]) {
          console.log(`Calling visitor "${String(prop)}" with args:`, args);
          return val.apply(this, args);
        };
      }
      return prox(val);
    },
  });
};

// Basic Babel plugin skeleton – transforms calls like
// createElement('svg', ...) -> createElementNS('http://...','svg', ...)
export default function babelPluginKtjsx(babel: any, options: KTJSXPluginOptions = {}): PluginObj {
  return {
    name: 'babel-plugin-ktjsx',
    visitor: prox({
      CallExpression(path: any) {
        console.log('current path:', path);
        const callee = path.node.callee;
        if (!t.isIdentifier(callee)) return;

        const args = path.node.arguments;
        if (!args || args.length === 0) return;

        const first = args[0];
        if (!t.isStringLiteral(first)) return;

        const tag = first.value;
        console.log('current tag:', tag);

        // Determine whether this call represents an SVG root
        const isSvgRoot = tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));

        // If not root, check if we're inside an SVG ancestor
        let insideSvg = false;
        if (!isSvgRoot) {
          const parentSvg = path.findParent((p: any) => {
            if (!p.isCallExpression()) return false;
            const pc = p.node.callee;
            if (!t.isIdentifier(pc)) return false;
            const pargs = p.node.arguments;
            if (!pargs || pargs.length === 0) return false;
            const pfirst = pargs[0];
            if (!t.isStringLiteral(pfirst)) return false;
            const ptag = pfirst.value;
            return ptag === 'svg' || (typeof ptag === 'string' && ptag.startsWith('svg:'));
          });
          insideSvg = !!parentSvg;
          console.log('current tag:', tag, 'insideSvg:', insideSvg);
        }

        // Only modify when it's the svg root, or when inside an svg and the tag is an SVG tag
        if (!isSvgRoot && !insideSvg) return;

        // Rewrite tag to svg:tag
        const newTag = `svg:${tag}`;
        path.node.arguments[0] = t.stringLiteral(newTag);
      },
    }),
  } as PluginObj;
}

export { babelPluginKtjsx };
