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

export * from './ref.js';
export * from './computed.js';
export * from './core.js';
