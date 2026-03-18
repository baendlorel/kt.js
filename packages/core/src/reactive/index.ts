import type { KTReactive, ReactiveChangeHandler } from '../types/reactive.js';
import type { JSX } from '../types/jsx.js';
import { isKT } from './core.js';
import { ref } from './refs/base.js';

export const toReactive = <T>(value: T | KTReactive<T>, onChange?: ReactiveChangeHandler<T>): KTReactive<T> => {
  if (isKT(value)) {
    if (onChange) {
      value.addOnChange(onChange);
    }
    return value;
  } else {
    return ref(value as T, onChange) as KTReactive<T>;
  }
};

/**
 * Extracts the value from a KTReactive, or returns the value directly if it's not reactive.
 */
export function dereactive<T = JSX.Element>(value: T | KTReactive<T>): T {
  return isKT<T>(value) ? value.value : value;
}

export * from './core.js';
export * from './refs/base.js';
export * from './refs/array.js';
export * from './refs/object.js';
export * from './refs/map.js';
export * from './refs/set.js';
export * from './refs/weak-map.js';
export * from './refs/weak-set.js';
export * from './refs/date.js';
export * from './refs/form-data.js';
export * from './refs/headers.js';
export * from './refs/url-search-params.js';
export * from './computed.js';
export * from './effect.js';
