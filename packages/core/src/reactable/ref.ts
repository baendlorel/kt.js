import { $emptyFn, $is, $stringify } from '@ktjs/shared';
import { KTReactive, KTReactiveType, KTSubReactive } from './reactive.js';
import { KTComputed } from './computed.js';
import { markMutation } from './scheduler.js';
import { $createSubSetter, isRefLike } from './common.js';

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

  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<
    K0 extends keyof T,
    K1 extends keyof T[K0],
    K2 extends keyof T[K0][K1],
    K3 extends keyof T[K0][K1][K2],
    K4 extends keyof T[K0][K1][K2][K3],
  >(key0: K0, key1: K1, key2: K2, key3: K3, key4: K4): KTSubRef<T[K0][K1][K2][K3][K4]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
  ): KTSubRef<T[K0][K1][K2][K3]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTSubRef<T[K0][K1][K2]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): KTSubRef<T[K0][K1]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T>(key0: K0): KTSubRef<T[K0]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref(...keys: Array<string | number>): KTSubRef<any> {
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

/**
 * Create a reactive reference to a value. The returned object has a single property `value` that holds the internal value.
 * @param value listened value
 */
export const ref = <T>(value?: T): KTRef<T> => new KTRef(value as any);

/**
 * Assert `k-model` to be a ref-like object
 */
export const assertModel = <T = any>(props: any, defaultValue?: T): KTRefLike<T> => {
  // & props is an object. Won't use it in any other place
  if ('k-model' in props) {
    const kmodel = props['k-model'];
    if (isRefLike(kmodel)) {
      return kmodel;
    } else {
      $throw(`k-model data must be a KTRef object, please use 'ref(...)' to wrap it.`);
    }
  }
  return ref(defaultValue) as KTRef<T>;
};

const $refSetter = <T>(props: { ref?: KTRef<T> }, node: T) => (props.ref!.value = node);
type RefSetter<T> = (props: { ref?: KTRef<T> }, node: T) => void;

export type KTRefLike<T> = KTRef<T> | KTSubRef<T>;

/**
 * Whether `props.ref` is a `KTRef` only needs to be checked in the initial render
 */
export const $initRef = <T extends Node>(props: { ref?: KTRefLike<T> }, node: T): RefSetter<T> => {
  if (!('ref' in props)) {
    return $emptyFn;
  }

  const r = props.ref;
  if (isRefLike(r)) {
    r.value = node;
    return $refSetter;
  } else {
    $throw('Fragment: ref must be a KTRef');
  }
};
