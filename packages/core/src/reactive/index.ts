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
