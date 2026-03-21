import type { KTReactive } from './reactive.js';
import type { JSX } from '../types/jsx.js';
import { isKT } from './common.js';
import { ref } from './ref.js';

/**
 *
 * @param value
 * @returns
 */
export const toReactive = <T>(value: T | KTReactive<T>): KTReactive<T> =>
  isKT(value) ? value : (ref(value as T) as KTReactive<T>);

/**
 * Extracts the value from a KTReactive, or returns the value directly if it's not reactive.
 */
export function dereactive<T = JSX.Element>(value: T | KTReactive<T>): T {
  return isKT<T>(value) ? value.value : value;
}

export * from './common.js';
export * from './ref.js';
export * from './computed.js';
export * from './effect.js';
export type * from './reactive.js';
