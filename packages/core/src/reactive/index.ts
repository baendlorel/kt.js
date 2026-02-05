import { KTComputed } from './computed.js';
import { isKT, ReactiveChangeHandler } from './core.js';
import { KTRef, ref } from './ref.js';

export type KTReactive<T> = KTRef<T> | KTComputed<T>;
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

export type KTReactify<T> = T extends any ? KTReactive<T> | T : never;
export type KTReactifyObject<T extends object> = {
  [K in keyof T]: KTReactify<T[K]>;
};

export * from './core.js';
export * from './ref.js';
export * from './computed.js';
export * from './effect.js';
