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

// Basic Babel plugin skeleton – transforms calls like
// createElement('svg', ...) -> createElementNS('http://...','svg', ...)
export default function babelPluginKtjsx(babel: any, options: KTJSXPluginOptions = {}): PluginObj {
  const svgTags = options.svgTags ?? DEFAULT_SVG_TAGS;
  const ns = options.namespaceURI ?? 'http://www.w3.org/2000/svg';
  const createNames = options.createElementNames ?? ['createElement', 'h'];

  return {
    name: 'babel-plugin-ktjsx',
    visitor: {
      CallExpression(path: any) {
        console.log('current path:', path);
        const callee = path.node.callee;
        if (!t.isIdentifier(callee)) return;
        if (!createNames.includes(callee.name)) return;

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
            if (!createNames.includes(pc.name)) return false;
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
        if (!isSvgRoot && !(insideSvg && svgTags.includes(tag))) return;

        // Rewrite tag to svg:tag
        const newTag = `svg:${tag}`;
        path.node.arguments[0] = t.stringLiteral(newTag);
      },
    },
  } as PluginObj;
}

export { babelPluginKtjsx };
