import type { KTReactive, ReactiveChangeHandler } from '../types/reactive.js';
import { isKT } from './core.js';
import { ref } from './ref.js';

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
export * from './ref.js';
export * from './computed.js';
export * from './effect.js';
