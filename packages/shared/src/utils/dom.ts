// DOM manipulation utilities

import type { KTReactiveLike } from '../types/misc.js';
import { $entries } from './native.js';

// # dom natives

export const $isNode = (x: any): x is ChildNode => x?.nodeType > 0;

// # DOM utilities

// Same as it is in @ktjs/core
export const $parseStyle = (style: unknown): string => {
  if (!style) {
    return '';
  }
  if (typeof style === 'string') {
    return style;
  }

  // already !style === false
  if (typeof style === 'object') {
    if ((style as KTReactiveLike).isKT) {
      return $parseStyle((style as KTReactiveLike).value);
    }

    return $entries(style)
      .map((entry: [string, string]) => {
        const cssKey = entry[0].replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        return `${cssKey}:${entry[1]}`;
      })
      .join(';');
  }
  return '';
};

export type ChangeHandler<T = string> = (value: T, ...args: any[]) => void;

/**
 * [INFO]  document.contains\isConnected\getRootNode can be used to check if an element is still in the DOM.
 * - `document.contains` is widely supported but slow.
 * - `node.isConnected` is much faster but not supported in IE.
 *
 * So we combine them as this function
 */
export const $inDom: (node: Node) => boolean = (() => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected');

  if (descriptor && descriptor.get) {
    const isConnected = descriptor.get;
    return (node) => isConnected.call(node);
  }
  return (node) => document.contains(node);
})();
