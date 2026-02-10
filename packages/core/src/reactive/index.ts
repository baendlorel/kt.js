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

// & Shockingly, If T is boolean, KTReactify<T> becomes KTReactive<true> | KTReactive<false>. It causes @ktjs/mui that disabledRefs not assignable.
export type KTReactify<T> = T extends boolean ? KTReactive<boolean> : T extends any ? KTReactive<T> : never;

export type KTReactifyObject<T extends object> = {
  [K in keyof T]: KTReactify<T[K]>;
};

export type KTReactifyProps<T extends object> = {
  [K in keyof T]: KTReactify<Exclude<T[K], undefined>> | T[K];
};

export * from './core.js';
export * from './ref.js';
export * from './computed.js';
export * from './effect.js';
