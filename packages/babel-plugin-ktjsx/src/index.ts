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
        const callee = path.node.callee;
        if (!t.isIdentifier(callee)) return;
        if (!createNames.includes(callee.name)) return;

        const args = path.node.arguments;
        if (!args || args.length === 0) return;

        const first = args[0];
        if (!t.isStringLiteral(first)) return;

        const tag = first.value;
        if (!svgTags.includes(tag)) return;

        // Replace callee name to createElementNS and inject namespace arg
        path.node.callee = t.identifier('createElementNS');
        const nsArg = t.stringLiteral(ns);
        const tagArg = t.stringLiteral(tag);
        path.node.arguments = [nsArg, tagArg, ...args.slice(1)];
      },
    },
  } as PluginObj;
}

export { babelPluginKtjsx };
