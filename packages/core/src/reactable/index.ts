import type { KTReactive } from './reactive.js';
import { isKT } from './common.js';
import { KTRef } from './ref.js';

/**
 * @returns it as is when it's already `isKT`. Otherwise wraps it with `ref`.
 */
export const toKT = <T>(o: T | KTReactive<T>): KTReactive<T> => (isKT<T>(o) ? o : new KTRef(o as T));

export { KTRef, KTSubRef } from './ref.js';
export { ref } from './ref.js';

export { KTComputed } from './computed.js';
export { computed } from './computed.js';

export { KType } from './reactive.js';
export { KTReactive } from './reactive.js';

export { isKT, isRef, isSubRef, isRefExact, isComputed } from './common.js';

export { effect } from './effect.js';
export type * from './types.js';
