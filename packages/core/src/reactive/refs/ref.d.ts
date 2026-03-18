import type { KTRef } from '../ref.js';
import type { KTArrayRef } from './array.js';
import type { KTDateRef } from './date.js';
import type { KTMapRef } from './map.js';
import type { KTSetRef } from './set.js';
import type { KTWeakMapRef } from './weak-map.js';
import type { KTWeakSetRef } from './weak-set.js';

type KTAutoRef<T> =
  T extends Array<any>
    ? KTArrayRef<T>
    : T extends Map<infer K, infer V>
      ? KTMapRef<K, V>
      : T extends Set<infer U>
        ? KTSetRef<U>
        : T extends Date
          ? KTDateRef
          : T extends WeakSet<infer U>
            ? KTWeakSetRef<U>
            : T extends WeakMap<infer K, infer V>
              ? KTWeakMapRef<K, V>
              : KTRef<T>;
