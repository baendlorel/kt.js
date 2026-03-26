import { $is, $stringify } from '@ktjs/shared';
import { KTReactive, KTReactiveType, KTSubReactive } from './reactive.js';
import { KTComputed } from './computed.js';
import { markMutation } from './scheduler.js';
import { $createSubSetter } from './common.js';

export class KTRef<T> extends KTReactive<T> {
  readonly ktype = KTReactiveType.Ref;

  constructor(_value: T) {
    super(_value);
  }

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

  notify(): this {
    return this._emit(this._value, this._value);
  }

  map<U>(calculator: (value: T) => U, dependencies?: KTReactive<any>[]): KTComputed<U> {
    return new KTComputed(() => calculator(this.value), dependencies ? dependencies.concat(this) : [this]);
  }

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
  get(...keys: (string | number)[]): KTSubRef<any> {
    if (keys.length === 0) {
      $throw('At least one key is required to get a sub-ref.');
    }
    return new KTSubRef(this, keys.map((key) => `[${$stringify(key)}]`).join(''));
  }
}

export class KTSubRef<T> extends KTSubReactive<T> {
  readonly ktype = KTReactiveType.SubRef;
  declare readonly source: KTRef<any>;

  /**
   * @internal
   */
  protected readonly _setter: (s: object, newValue: T) => void;

  constructor(source: KTRef<any>, paths: string) {
    super(source, paths);
    this._setter = $createSubSetter(paths);
  }

  get value() {
    // @ts-expect-error _value is private
    return this._getter(this.source._value);
  }

  set value(newValue: T) {
    // @ts-expect-error _value is private
    this._setter(this.source._value, newValue);
    this.source.notify();
  }

  get draft() {
    // Same implementation as `draft` in `KTRef`
    markMutation(this.source);
    // @ts-expect-error _value is private
    return this._getter(this.source._value);
  }
}

export function ref<T>(value: T): KTRef<T> {
  return new KTRef(value);
}

const a = ref({ a: { b: { c: 1 } }, dd: 23, cc: 11 });
a.get('dd', 'toExponential');
