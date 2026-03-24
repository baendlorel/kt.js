import type { JSX } from '../types/jsx.js';

import { $emptyFn, $is } from '@ktjs/shared';
import { isRef, KTReactiveType } from './common.js';
import { KTReactive } from './reactive.js';
import { markMutation } from './scheduler.js';
import { KTComputed } from './computed.js';

export class KTRef<T> extends KTReactive<T> {
  public readonly ktType = KTReactiveType.Ref;

  // ! Cannot be omitted, otherwise this will override `KTReactive` with only setter. And getter will return undefined.
  get value() {
    return this._value;
  }

  set value(newValue: T) {
    if ($is(newValue, this._value)) {
      return;
    }
    const oldValue = this._value;
    this._value = newValue;
    this._emit(newValue, oldValue);
  }

  /**
   * Used to mutate the value in-place.
   * - internal value is changed instantly, but the change handlers will be called in the next microtask.
   */
  get draft() {
    markMutation(this);
    return this._value;
  }

  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler and more efficient.
   * @returns A `KTComputed` object
   */
  get<
    K0 extends keyof T,
    K1 extends keyof T[K0],
    K2 extends keyof T[K0][K1],
    K3 extends keyof T[K0][K1][K2],
    K4 extends keyof T[K0][K1][K2][K3],
  >(key0: K0, key1: K1, key2: K2, key3: K3, key4: K4): KTComputed<T[K0][K1][K2][K3][K4]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
  ): KTComputed<T[K0][K1][K2][K3]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTComputed<T[K0][K1][K2]>;
  get<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): KTComputed<keyof T[K0][K1]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   */
  get(key: keyof T): KTComputed<T[typeof key]>;
  get(...keys: any[]) {
    return new KTComputed(() => {
      let v = this.value as any;
      for (let i = 0; i < keys.length; i++) {
        if (v === null || v === undefined) {
          return v;
        }
        const k = keys[i];
        if (k in v) {
          v = v[k];
        } else {
          return undefined;
        }
      }
      return undefined;
    }, [this]) as any;
  }
}

/**
 * Create a `KTRef` object.
 * - use `refObject.state` to get plain data
 * - use `refObject.map(calculator)` to create a computed value based on this ref
 * - use `refObject.mutable` to set too, but it will recalculate in the next microtask. Useful for deep objects, `Map`, `Set` or other custom objects
 *
 * @param value any data
 * @param onChange event handler triggered when the value changes, with signature `(newValue, oldValue) => void`
 * @returns
 */
export const ref = <T = JSX.Element>(value?: T) => new KTRef<T>(value as any);

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
