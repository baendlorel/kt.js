import { $emptyFn } from '@ktjs/shared';
import type { ReactiveChangeHandler } from '../types/reactive.js';
import type { JSX } from '../types/jsx.js';

import type { KTAutoRef } from './refs/auto-ref.js';
import { KTRef } from './refs/ref.js';
import { isRef } from './core.js';
import { arrayRef } from './refs/array.js';
import { dateRef } from './refs/date.js';
import { mapRef } from './refs/map.js';
import { setRef } from './refs/set.js';
import { weakMapRef } from './refs/weak-map.js';
import { weakSetRef } from './refs/weak-set.js';

/**
 * Reference to the created HTML element or other reactive data.
 * - **Only** respond to `ref.value` changes, not reactive to internal changes of the element.
 * - Automically wrap the value with corresponding ref type based on its type.
 *   - When wrapped, setter-like methods will be reactive. like `push` for `Array`, `set` for `Map`, `add` for `Set`, etc.
 *   - Supports: `Array`, `Map`, `Set`, `WeakMap`, `WeakSet`, `Date`.
 *   - Since there will be some cost for runtime detection, and compilation plugin might not be able to analyze all cases. It is recommended to use specific ref type directly if you already know the type of value, like `ref.array`, `ref.map`, etc.
 * @param value any data
 * @param onChange event handler triggered when the value changes, with signature `(newValue, oldValue) => void`
 */
export function autoRef<T>(value?: T, onChange?: ReactiveChangeHandler<T>): KTAutoRef<T> {
  // todo 这里要人工判定了
  return new KTRef<T>(value as any, onChange) as KTAutoRef<T>;
}

type RefCreator = (<T = JSX.Element>(value?: T, onChange?: ReactiveChangeHandler<T>) => KTRef<T>) & {
  array: typeof arrayRef;
  date: typeof dateRef;
  map: typeof mapRef;
  set: typeof setRef;
  weakMap: typeof weakMapRef;
  weakSet: typeof weakSetRef;
};

// todo 编译时期，插件要尽量分析出谁是谁，并基于最大限度的覆写支持，避免运行时for循环创建ref
/**
 * Create a plain `KTRef` object.
 *
 * If you want the value to be automatically wrapped with corresponding ref type based on its type, please use `autoRef` instead.
 *
 * @param value any data
 * @param onChange event handler triggered when the value changes, with signature `(newValue, oldValue) => void`
 * @returns
 */
const ref: RefCreator = ((value, onChange) => new KTRef(value as any, onChange)) as RefCreator;
ref.array = arrayRef;
ref.date = dateRef;
ref.map = mapRef;
ref.set = setRef;
ref.weakMap = weakMapRef;
ref.weakSet = weakSetRef;

export { ref };

/**
 * Assert k-model to be a ref object
 */
export const $modelOrRef = <T = any>(props: any, defaultValue?: T): KTRef<T> => {
  // & props is an object. Won't use it in any other place
  if ('k-model' in props) {
    const kmodel = props['k-model'];
    if (isRef(kmodel)) {
      return kmodel;
    } else {
      $throw(`k-model data must be a KTRef object, please use 'ref(...)' to wrap it.`);
    }
  }
  return ref(defaultValue) as KTRef<T>;
};

const $refSetter = <T>(props: { ref?: KTRef<T> }, node: T) => (props.ref!.value = node);
type RefSetter<T> = (props: { ref?: KTRef<T> }, node: T) => void;

/**
 * Whether `props.ref` is a `KTRef` only needs to be checked in the initial render
 */
export const $initRef = <T extends Node>(props: { ref?: KTRef<T> }, node: T): RefSetter<T> => {
  if (!('ref' in props)) {
    return $emptyFn;
  }

  const r = props.ref;
  if (isRef(r)) {
    r.value = node;
    return $refSetter;
  } else {
    $throw('Fragment: ref must be a KTRef');
  }
};
