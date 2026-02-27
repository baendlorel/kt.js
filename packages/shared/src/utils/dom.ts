// DOM manipulation utilities

import type { KTReactiveLike } from '../types/misc.js';
import type { InputElementTag } from '../types/global.js';
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
 *
 * @param element
 * @param valueRef
 * @param propName
 * @param eventName
 * @param transformer For `input type="number"` or `"date"`..., we need to transform the value to number before assigning it to the ref
 */
export const $applyModel = (
  element: HTMLElementTagNameMap[InputElementTag],
  valueRef: { value: unknown; addOnChange: (fn: (newValue: unknown) => void) => void },
  propName: 'value' | 'checked',
  eventName: 'change' | 'input',
  transformer?: (value: unknown) => unknown,
) => {
  if (transformer) {
    (element as any)[propName] = transformer(valueRef.value); // initialize
    valueRef.addOnChange((newValue) => ((element as any)[propName] = transformer(newValue)));
    element.addEventListener(eventName, () => (valueRef.value = (element as any)[propName]));
  } else {
    (element as any)[propName] = valueRef.value; // initialize
    valueRef.addOnChange((newValue) => ((element as any)[propName] = newValue));
    element.addEventListener(eventName, () => (valueRef.value = (element as any)[propName]));
  }
};
