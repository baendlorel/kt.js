// DOM manipulation utilities

import type { KTReactiveLike } from '../types/misc.js';
import type { InputElementTag } from '../types/global.js';
import { $entries } from './native.js';

// # dom natives

export const $isNode = (x: any): x is ChildNode => x?.nodeType > 0;

/**
 * Safe replace `oldNode` With `newNode`
 * - This function is not used everywhere. Because there is no need to check every time.
 */
export const $replaceNode = (oldNode: unknown, newNode: unknown) => {
  if ($isNode(oldNode) && $isNode(newNode)) {
    if (newNode.contains(oldNode)) {
      newNode.remove();
    }
    oldNode.replaceWith(newNode);
  }
};

// # DOM utilities

// Same as it is in @ktjs/core
export const $parseStyle = (style: unknown): string => {
  if (!style) {
    return '';
  }
  if (typeof style === 'string') {
    return style;
  }
  if (style && typeof style === 'object') {
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
 * Used for `k-model`
 */
export const $applyModel = (
  element: HTMLElementTagNameMap[InputElementTag],
  valueRef: { value: unknown; addOnChange: (fn: (newValue: unknown) => void) => void },
  propName: 'value' | 'checked',
  eventName: 'change' | 'input',
) => {
  (element as any)[propName] = valueRef.value; // initialize
  valueRef.addOnChange((newValue) => ((element as any)[propName] = newValue));
  element.addEventListener(eventName, () => (valueRef.value = (element as any)[propName]));
};
