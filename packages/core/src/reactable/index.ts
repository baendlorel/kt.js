import type { KTReactive, KTReactiveLike } from './reactive.js';
import { isKT } from './common.js';
import { ref } from './ref.js';

/**
 * Ensure a value is reactive. If it's already `KTReactiveLike`, return it as is; otherwise, wrap it in a `ref`.
 */
export const toReactive = <T>(o: T | KTReactiveLike<T>): KTReactiveLike<T> =>
  isKT(o) ? o : (ref(o as T) as KTReactive<T>);

/**
 * Extracts the value from a KTReactive, or returns the value directly if it's not reactive.
 */
export const dereactive = <T>(value: T | KTReactive<T>): T => (isKT<T>(value) ? value.value : value);

export type { KTRef, KTSubRef, KTRefLike } from './ref.js';
export { ref, assertModel } from './ref.js';
export type { KTComputed, KTSubComputed, KTComputedLike } from './computed.js';
export { computed } from './computed.js';
export { KTReactiveType } from './reactive.js';
export type * from './reactive.js';

export {
  isKT,
  isReactiveLike,
  isRef,
  isSubRef,
  isRefLike,
  isComputed,
  isSubComputed,
  isComputedLike,
  isReactive,
} from './common.js';
export { effect } from './effect.js';
export type * from './types.js';
