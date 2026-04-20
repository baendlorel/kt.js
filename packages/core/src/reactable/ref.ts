import { $emptyFn, $is } from '@ktjs/shared';
import { $createSubGetter, $createSubSetter, isRefLike } from './common.js';
import { KTReactive, KTReactiveType, nextHandlerId, nextKid } from './reactive.js';
import { KTReactiveLike, type ChangeHandler } from './types.js';
import { $markMutation } from './scheduler.js';

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
    $markMutation(this);
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
  >(this: KTRef<T & object>, key0: K0, key1: K1, key2: K2, key3: K3, key4: K4): KTSubRef<T[K0][K1][K2][K3][K4]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    this: KTRef<T & object>,
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
    this: KTRef<T & object>,
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTSubRef<T[K0][K1][K2]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0]>(
    this: KTRef<T & object>,
    key0: K0,
    key1: K1,
  ): KTSubRef<T[K0][K1]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T>(this: KTRef<T & object>, key0: K0): KTSubRef<T[K0]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the handlers.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref(...keys: Array<string | number>): KTSubRef<any> {
    if (keys.length === 0) {
      $throw('At least one key is required to get a sub-ref.');
    }
    if (this._value === null || (typeof this._value !== 'object' && typeof this._value !== 'function')) {
      $throw('Sub-ref only supports object-like ref values.');
    }
    return new KTSubRef(this, $createSubGetter(keys), $createSubSetter(keys));
  }

  dispose(): void {
    this._changeHandlers.clear();
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

// # SubRef

export class KTSubRef<T> extends KTReactiveLike<T> {
  readonly kid = nextKid();
  readonly ktype = KTReactiveType.SubRef;
  readonly source: KTRef<any>;

  /**
   * @internal
   */
  protected _value: T;
  /**
   * @internal
   */
  protected readonly _getter: (sv: KTReactive<any>['value']) => T;
  /**
   * @internal
   */
  protected readonly _setter: (s: object, newValue: T) => void;
  /**
   * @internal
   */
  protected readonly _handler: ChangeHandler<any>;
  /**
   * @internal
   */
  protected readonly _handlerKeys: string[];

  constructor(
    source: KTRef<any>,
    getter: (sv: KTReactive<any>['value']) => T,
    setter: (s: object, newValue: T) => void,
  ) {
    super();
    this.source = source;
    this._getter = getter;
    this._setter = setter;
    this._value = getter(source.value);
    this._handler = () => (this._value = getter(source.value));
    this._handlerKeys = [nextHandlerId(this.kid)];
    source.addOnChange(this._handler, this._handlerKeys[0]);
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    if (this.source.value === null || (typeof this.source.value !== 'object' && typeof this.source.value !== 'function')) {
      $throw('Sub-ref only supports object-like ref values.');
    }
    this._value = newValue;
    // @ts-expect-error _value is private
    this._setter(this.source._value, newValue);
    this.source.notify();
  }

  addOnChange(handler: ChangeHandler<T>, key: any = nextHandlerId(this.kid)): this {
    this._handlerKeys.push(key);
    this.source.addOnChange((newValue, oldValue) => handler(this._getter(newValue), this._getter(oldValue)), key);
    return this;
  }

  removeOnChange(key: any): this {
    this.source.removeOnChange(key);
    return this;
  }

  dispose(): void {
    this._handlerKeys.forEach((key) => this.source.removeOnChange(key));
  }

  /**
   * Only use it for object's nested properties.
   */
  get draft() {
    // Same implementation as `draft` in `KTRef`
    $markMutation(this.source);
    return this._value;
  }
}
