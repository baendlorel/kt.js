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

/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & `window.document` is safe because it is not configurable and its setter is undefined
 */
export const $appendChild = Node.prototype.appendChild;
const originAppend = Element.prototype.append;
export const $append: typeof originAppend = // for ie 9/10/11
  typeof originAppend === 'function'
    ? originAppend
    : function (this: ParentNode, ...nodes: Array<Node | string>) {
        if (nodes.length < 50) {
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(this, document.createTextNode(node));
            } else {
              $appendChild.call(this, node);
            }
          }
        } else {
          const fragment = document.createDocumentFragment();
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(fragment, document.createTextNode(node));
            } else {
              $appendChild.call(fragment, node);
            }
          }
          $appendChild.call(this, fragment);
        }
      };

export const { get: $buttonDisabledGetter, set: $buttonDisabledSetter } = Object.getOwnPropertyDescriptor(
  HTMLButtonElement.prototype,
  'disabled',
) as Required<PropertyDescriptor>;

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
