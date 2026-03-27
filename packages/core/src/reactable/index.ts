import type { KTReactive } from './reactive.js';
import { isKT } from './common.js';
import { ref } from './ref.js';

/**
 *
 * @param o
 * @returns
 */
export const toReactive = <T>(o: T | KTReactive<T>): KTReactive<T> => (isKT(o) ? o : (ref(o as T) as KTReactive<T>));

/**
 * Extracts the value from a KTReactive, or returns the value directly if it's not reactive.
 */
export const dereactive = <T>(value: T | KTReactive<T>): T => (isKT<T>(value) ? value.value : value);

export type { KTRef, KTSubRef, KTRefLike } from './ref.js';
export { ref, assertModel as $modelOrRef } from './ref.js';
export type { KTComputed, KTSubComputed } from './computed.js';
export { computed } from './computed.js';
export { KTReactiveType } from './reactive.js';
export type * from './reactive.js';

export { isKT, isRefLike, isComputedLike } from './common.js';
export { effect } from './effect.js';
export type * from './types.js';
