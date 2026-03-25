import type { KTComputed } from './computed.js';
import type { KTSubRef } from './sub-ref.js';

import { IdGenerator } from '../common.js';
import { KTReactiveType } from './common.js';

export type ChangeHandler<T> = (newValue: T, oldValue: T) => void;
export type ChangeHandlerKey = string | number;

// todo 也许应该用组合的方式实现响应式？
export class KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  public readonly isKT: true = true;

  public readonly ktType: KTReactiveType = KTReactiveType.Reative;

  /**
   * @internal
   */
  protected _value: T;

  /**
   * & Here we trust developers using addOnChange properly. `ChangeHandler<any>` is aimed to mute some unnecessary type errors.
   * @internal
   */
  protected _changeHandlers: Map<ChangeHandlerKey, ChangeHandler<any>> = new Map();

  /**
   * @internal
   */
  protected _emit(newValue: T, oldValue: T) {
    this._changeHandlers.forEach((c) => c(newValue, oldValue));
    return this;
  }

  constructor(_value: T) {
    this._value = _value;
    this._changeHandlers = new Map();
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   * - Use `.mutable` to modify the value.
   * @readonly
   */
  get value() {
    return this._value;
  }

  set value(_newValue: T) {
    // Only allow KTRef to be set.
  }

  /**
   * Force all listeners to run even when reference identity has not changed.
   *
   * Useful for in-place array/object mutations.
   */
  notify(): this {
    return this._emit(this._value, this._value);
  }

  /**
   * Ccreate a computed value based on this `KTReactive` instance.
   * @param calculator A function that calculates the computed value based on the current value of this `KTReactive` instance.
   * @param dependencies Optional additional dependencies that the computed value relies on.
   * @returns A `KTComputed` instance
   *
   * @see ./computed.ts implemented in `KTComputed`
   */
  map<R>(calculator: (currentValue: T) => R, dependencies?: Array<KTReactive<any>>): KTComputed<R>;
  map<R>(..._args: unknown[]): KTComputed<R> {
    throw new Error('This is meant to be override in computed.ts');
  }

  /**
   * Register a callback when the value changes
   * @param callback newValue and oldValue are references. You can use `a.draft` to make in-place mutations since `a.value` will not trigger `onChange` handers.
   * @param key Optional key to identify the callback, allowing multiple listeners on the same ref and individual removal. If not provided, a unique ID will be generated.
   */
  addOnChange(callback: ChangeHandler<T>, key?: ChangeHandlerKey): this {
    if (typeof callback !== 'function') {
      $throw('KTRef.addOnChange: callback must be a function');
    }
    const k = key ?? IdGenerator.refOnChangeId;
    this._changeHandlers.set(k, callback);
    return this;
  }

  removeOnChange(key: ChangeHandlerKey): ChangeHandler<any> | undefined {
    const callback = this._changeHandlers.get(key);
    this._changeHandlers.delete(key);
    return callback;
  }

  // todo 为了方便让多层复杂的属性也可以被响应式绑定到输入组件，这里建立mutable，名字待定。但其是否要返回只有value属性的极简版ref，还是完整的ref，要看对model的需求
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<
    K0 extends keyof T,
    K1 extends keyof T[K0],
    K2 extends keyof T[K0][K1],
    K3 extends keyof T[K0][K1][K2],
    K4 extends keyof T[K0][K1][K2][K3],
  >(key0: K0, key1: K1, key2: K2, key3: K3, key4: K4): KTSubRef<T[K0][K1][K2][K3][K4]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
  ): KTSubRef<T[K0][K1][K2][K3]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTSubRef<T[K0][K1][K2]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): KTSubRef<T[K0][K1]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T>(key0: K0): KTSubRef<T[K0]>;
  get(..._keys: PropertyKey[]) {
    // & It is implemented in computed.ts since it depends on KTComputed.
    return {} as any;
  }
}

// & Shockingly, If T is boolean, KTReactify<T> becomes KTReactive<true> | KTReactive<false>. It causes @ktjs/mui that disabledRefs not assignable.
/**
 * Makes `KTReactify<'a' | 'b'> to be KTReactive<'a'> | KTReactive<'b'>`
 */
export type KTReactifySplit<T> = T extends boolean ? KTReactive<boolean> : T extends any ? KTReactive<T> : never;

export type KTReactifyObject<T extends object> = {
  [K in keyof T]: KTReactifySplit<T[K]>;
};

export type KTReactifyProps<T extends object> = {
  [K in keyof T]: KTReactifySplit<Exclude<T[K], undefined>> | T[K];
};

/**
 * Makes `KTReactify<'a' | 'b'>` to be `KTReactive<'a' | 'b'>`
 */
export type KTReactify<T> = [T] extends [KTReactive<infer U>] ? KTReactive<U> : KTReactive<T>;
export type KTMaybeReactive<T> = T | KTReactify<T>;
export type KTMaybeReactiveProps<T extends object> = {
  [K in keyof T]: K extends `on:${string}` ? T[K] : KTMaybeReactive<Exclude<T[K], undefined>> | T[K];
};
