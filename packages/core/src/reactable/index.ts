import type { KTReactive } from './reactive.js';
import { isKT } from './common.js';
import { KTRef } from './ref.js';

/**
 * Ensure a value is reactive. If it's already `KTReactiveLike`, return it as is; otherwise, wrap it in a `ref`.
 */
export const toReactive = <T>(o: T | KTReactive<T>): KTReactive<T> =>
  isKT(o) ? o : (new KTRef(o as T) as KTReactive<T>);

/**
 * Extracts the value from a KTReactive, or returns the value directly if it's not reactive.
 */
export const dereactive = <T>(value: T | KTReactive<T>): T => (isKT<T>(value) ? value.value : value);

export type { KTRef, KTSubRef } from './ref.js';
export { ref, assertModel } from './ref.js';
export type { KTComputed, KTComputedLike } from './computed.js';
export { computed } from './computed.js';

export { KType } from './reactive.js';
export type { KTReactive } from './reactive.js';

export { isKT, isReactiveLike, isRef, isSubRef, isRefExact, isComputed, isReactive } from './common.js';
export { effect } from './effect.js';
export type * from './types.js';
