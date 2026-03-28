import type { KTComputed, KTSubComputed } from './computed.js';

import { $stringify } from '@ktjs/shared';
import { $createSubGetter } from './common.js';

export type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

export const enum KTReactiveType {
  ReactiveLike = 0b00001,
  Ref = 0b00010,
  SubRef = 0b00100,
  RefLike = Ref | SubRef,
  Computed = 0b01000,
  SubComputed = 0b10000,
  ComputedLike = Computed | SubComputed,
  Reactive = Ref | Computed,
}

let kid = 1;
let handlerId = 1;

export abstract class KTReactiveLike<T> {
  readonly kid = kid++;

  abstract readonly ktype: KTReactiveType;

  abstract get value(): T;

  abstract addOnChange(handler: ChangeHandler<T>, key?: any): this;

  abstract removeOnChange(key: any): this;

  /**
   * Create a computed value via current reactive value.
   * - No matter `this` is added to `dependencies` or not, it is always listened.
   * @param calculator A function that generates a new value based on current value.
   * @param dependencies optional other dependencies that the computed value depends on.
   */
  map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactiveLike<any>>): KTComputed<U> {
    return null as any;
  }
}

export abstract class KTReactive<T> extends KTReactiveLike<T> {
  /**
   * @internal
   */
  protected _value: T;

  /**
   * @internal
   */
  protected readonly _changeHandlers = new Map<any, ChangeHandler<any>>();

  constructor(value: T) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(_newValue: T) {
    $warn('Setting value to a non-ref instance takes no effect.');
  }

  /**
   * @internal
   */
  protected _emit(newValue: T, oldValue: T): this {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
    return this;
  }

  addOnChange(handler: ChangeHandler<T>, key?: any): this {
    key ??= handlerId++;
    if (this._changeHandlers.has(key)) {
      $throw(`Overriding existing change handler with key ${$stringify(key)}.`);
    }
    this._changeHandlers.set(key, handler);
    return this;
  }

  removeOnChange(key: any): this {
    this._changeHandlers.delete(key);
    return this;
  }

  clearOnChange(): this {
    this._changeHandlers.clear();
    return this;
  }

  notify(): this {
    return this._emit(this._value, this._value);
  }

  /**
   * Generate a sub-computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   * - `KTSubComputed` is lighter than `KTComputed` because it only listens to changes on the source reactive, while `KTComputed` listens to all its dependencies. So it's better to use `get` when you only need to access nested properties without doing any calculation.
   */
  get<
    K0 extends keyof T,
    K1 extends keyof T[K0],
    K2 extends keyof T[K0][K1],
    K3 extends keyof T[K0][K1][K2],
    K4 extends keyof T[K0][K1][K2][K3],
  >(key0: K0, key1: K1, key2: K2, key3: K3, key4: K4): KTSubComputed<T[K0][K1][K2][K3][K4]>;
  /**
   * Generate a sub-computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   * - `KTSubComputed` is lighter than `KTComputed` because it only listens to changes on the source reactive, while `KTComputed` listens to all its dependencies. So it's better to use `get` when you only need to access nested properties without doing any calculation.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
  ): KTSubComputed<T[K0][K1][K2][K3]>;
  /**
   * Generate a sub-computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   * - `KTSubComputed` is lighter than `KTComputed` because it only listens to changes on the source reactive, while `KTComputed` listens to all its dependencies. So it's better to use `get` when you only need to access nested properties without doing any calculation.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTSubComputed<T[K0][K1][K2]>;
  /**
   * Generate a sub-computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   * - `KTSubComputed` is lighter than `KTComputed` because it only listens to changes on the source reactive, while `KTComputed` listens to all its dependencies. So it's better to use `get` when you only need to access nested properties without doing any calculation.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): KTSubComputed<T[K0][K1]>;
  /**
   * Generate a sub-computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   * - `KTSubComputed` is lighter than `KTComputed` because it only listens to changes on the source reactive, while `KTComputed` listens to all its dependencies. So it's better to use `get` when you only need to access nested properties without doing any calculation.
   */
  get<K0 extends keyof T>(key0: K0): KTSubComputed<T[K0]>;
  /**
   * Generate a sub-computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   * - `KTSubComputed` is lighter than `KTComputed` because it only listens to changes on the source reactive, while `KTComputed` listens to all its dependencies. So it's better to use `get` when you only need to access nested properties without doing any calculation.
   */
  get(..._keys: Array<string | number>): KTSubComputed<any> {
    // & Will be implemented in computed.ts to avoid circular dependency
    return null as any;
  }
}

export abstract class KTSubReactive<T> extends KTReactiveLike<T> {
  readonly source: KTReactive<any>;

  /**
   * @internal
   */
  protected readonly _getter: (sv: KTReactive<any>['value']) => T;

  constructor(source: KTReactive<any>, paths: string) {
    super();
    this.source = source;
    this._getter = $createSubGetter(paths);
  }

  get value() {
    // @ts-expect-error _value is private
    return this._getter(this.source._value);
  }

  addOnChange(handler: ChangeHandler<T>, key?: any): this {
    this.source.addOnChange((newSourceValue, oldSourceValue) => {
      const oldValue = this._getter(oldSourceValue);
      const newValue = this._getter(newSourceValue);
      handler(newValue, oldValue);
    }, key);
    return this;
  }

  removeOnChange(key: any): this {
    this.source.removeOnChange(key);
    return this;
  }
}
