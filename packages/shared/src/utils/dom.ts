// DOM manipulation utilities

import { InputElementTag } from '../types/global.js';
import { $emptyFn } from './misc.js';

// # dom natives

/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & `window.document` is safe because it is not configurable and its setter is undefined
 */
export const $appendChild = HTMLElement.prototype.appendChild;
const originAppend = HTMLElement.prototype.append;
export const $append: typeof originAppend = // for ie 9/10/11
  typeof originAppend === 'function'
    ? originAppend
    : function (this: HTMLElement, ...nodes: Array<Node | string>) {
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

export const parseStyle = (style: string | Partial<CSSStyleDeclaration> | undefined) => {
  if (typeof style === 'string') {
    return style;
  }
  if (style && typeof style === 'object') {
    return Object.entries(style)
      .map(([key, value]) => {
        // Convert camelCase to kebab-case
        const cssKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        return `${cssKey}: ${value}`;
      })
      .join('; ');
  }
  return '';
};

export type ChangeHandler<T = string> = (value: T, ...args: any[]) => void;
export const generateHandler = <T = string>(props: any, key: string): ChangeHandler<T> => {
  const handler = props[key];
  if (typeof handler === 'function') {
    return handler;
  } else if (handler && typeof handler === 'object' && handler.isKT) {
    return (value) => (handler.value = value);
  }
  return $emptyFn;
};

/**
 * Used for `k-model`
 */
export const applyModel = (
  element: HTMLElementTagNameMap[InputElementTag],
  valueRef: { value: unknown; addOnChange: (fn: (newValue: unknown) => void) => void },
  propName: 'value' | 'checked',
  eventName: 'change' | 'input',
) => {
  (element as any)[propName] = valueRef.value; // initialize
  valueRef.addOnChange((newValue) => ((element as any)[propName] = newValue));
  element.addEventListener(eventName, () => (valueRef.value = (element as any)[propName]));
};
