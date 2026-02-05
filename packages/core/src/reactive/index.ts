import { KTComputed } from './computed.js';
import { isKT } from './core.js';
import { KTRef, ref } from './ref.js';

export type KTReactive<T> = KTRef<T> | KTComputed<T>;
export const toReactive = <T>(value: T | KTReactive<T>): KTReactive<T> => {
  if (isKT(value)) {
    return value;
  }
  return ref(value) as KTReactive<T>;
};

export * from './ref.js';
export * from './computed.js';
export * from './core.js';
