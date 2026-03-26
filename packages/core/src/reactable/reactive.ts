import type { KTRef, KTSubRef } from './ref.js';
import type { KTComputed, KTSubComputed } from './computed.js';

import { $stringify } from '@ktjs/shared';

export type ChangeHandler<T> = (newValue?: T, oldValue?: T) => void;

export const enum KTReactiveType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
  SubComputed,
}

let kid = 1;
let handlerId = 1;

export abstract class KTReactiveBase<T> {
  readonly kid = kid++;

  abstract readonly type: KTReactiveType;

  abstract get value(): T;

  abstract addOnChange(handler: ChangeHandler<T>, key?: any): this;

  abstract removeOnChange(key: any): this;
}

export abstract class KTReactive<T> extends KTReactiveBase<T> {
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

  addOnChange(handler: ChangeHandler<T>, key: any = handlerId++): this {
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

  abstract map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactive<any>>): unknown;

  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  abstract get<
    K0 extends keyof T,
    K1 extends keyof T[K0],
    K2 extends keyof T[K0][K1],
    K3 extends keyof T[K0][K1][K2],
    K4 extends keyof T[K0][K1][K2][K3],
  >(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
  ): this['type'] extends KTReactiveType.Ref ? KTSubRef<T[K0][K1][K2][K3][K4]> : KTSubComputed<T[K0][K1][K2][K3][K4]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  abstract get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
  ): this['type'] extends KTReactiveType.Ref ? KTSubRef<T[K0][K1][K2][K3]> : KTSubComputed<T[K0][K1][K2][K3]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  abstract get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): this['type'] extends KTReactiveType.Ref ? KTSubRef<T[K0][K1][K2]> : KTSubComputed<T[K0][K1][K2]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  abstract get<K0 extends keyof T, K1 extends keyof T[K0]>(
    key0: K0,
    key1: K1,
  ): this['type'] extends KTReactiveType.Ref ? KTSubRef<T[K0][K1]> : KTSubComputed<T[K0][K1]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  abstract get<K0 extends keyof T>(
    key0: K0,
  ): this['type'] extends KTReactiveType.Ref ? KTSubRef<T[K0]> : KTSubComputed<T[K0]>;
}

export abstract class KTSubReactive<T> extends KTReactiveBase<T> {
  readonly source: KTRef<any> | KTComputed<any>;

  /**
   * @internal
   */
  protected readonly _getter: (sv: (KTRef<any> | KTComputed<any>)['value']) => T;

  constructor(source: KTRef<any> | KTComputed<any>, paths: string) {
    super();
    this.source = source;
    this._getter = new Function('s', `return s${paths}`) as (sv: (KTRef<any> | KTComputed<any>)['value']) => T;
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
