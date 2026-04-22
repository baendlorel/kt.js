import type { ChangeHandler } from './types.js';

import { $is } from '@ktjs/shared';
import { $createSubGetter, $createSubSetter, isRef } from './common.js';
import { KTReactive, KType, nextHandlerId, nextKid } from './reactive.js';
import { $markMutation } from './scheduler.js';

export class KTRef<T> extends KTReactive<T> {
  readonly ktype: KType = KType.Ref;

  constructor(_value: T) {
    super(_value);
  }

  // ! Cannot be omitted, otherwise this will override `KTReactive` with only setter. And getter will return undefined.
  get value() {
    return this.v;
  }

  set value(newValue: T) {
    if ($is(newValue, this.v)) {
      return;
    }
    const oldValue = this.v;
    this.v = newValue;
    this._emit(newValue, oldValue);
  }

  /**
   * Used to mutate the value in-place.
   * - internal value is changed instantly, but the change handlers will be called in the next microtask.
   */
  get draft() {
    $markMutation(this);
    return this.v;
  }

  notify(): this {
    return this._emit(this.v, this.v);
  }

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
  subref<K0 extends keyof T, K1 extends keyof T[K0]>(this: KTRef<T & object>, key0: K0, key1: K1): KTSubRef<T[K0][K1]>;
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
    if (this.v === null || (typeof this.v !== 'object' && typeof this.v !== 'function')) {
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
export const assertModel = <T = any>(props: any, defaultValue?: T): KTRef<T> => {
  // & props is an object. Won't use it in any other place
  if ('k-model' in props) {
    const model = props['k-model'];
    if (isRef(model)) {
      return model;
    } else {
      $throw(`k-model data must be a KTRef object, please use 'ref(...)' to wrap it.`);
    }
  }
  return ref(defaultValue) as KTRef<T>;
};

/**
 * @returns the pointed node itself
 */
export const $refToSelf = <T extends Node>(props: { ref?: KTRef<T> }, node: T): T => {
  if (!('ref' in props)) {
    return node;
  }

  if (isRef(props.ref)) {
    return (props.ref.value = node);
  }

  $throw('props.ref must be a KTRef');
};

// # SubRef

export class KTSubRef<T> extends KTRef<T> {
  readonly kid = nextKid();
  readonly ktype: KType = KType.SubRef;
  readonly source: KTRef<any>;

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
    super(getter(source.value));
    this.source = source;
    this._getter = getter;
    this._setter = setter;
    this._handler = () => (this.v = getter(source.value));
    this._handlerKeys = [nextHandlerId(this.kid)];
    source.addOnChange(this._handler, this._handlerKeys[0]);
  }

  get value() {
    return this.v;
  }

  set value(newValue: T) {
    if (
      this.source.value === null ||
      (typeof this.source.value !== 'object' && typeof this.source.value !== 'function')
    ) {
      $throw('Sub-ref only supports object-like ref values.');
    }
    this.v = newValue;
    // @ts-expect-error _value is private
    this._setter(this.source.v, newValue);
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
    return this.v;
  }
}
