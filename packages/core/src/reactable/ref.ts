import type { ChangeListener } from './types.js';
import type { KTComputed } from './computed.js';

import { $is } from '@ktjs/shared';
import { $createSubGetter, $createSubSetter, isRef } from './common.js';
import { KTReactive, KType, nextKid } from './reactive.js';
import { _markMutation } from './scheduler.js';

export class KTRef<T> extends KTReactive<T> {
  readonly ktype: KType = KType.Ref;

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
   * - internal value is changed instantly, but the change listeners will be called in the next microtask.
   */
  get draft() {
    _markMutation(this);
    return this._value;
  }

  notify(): this {
    return this._emit(this._value, this._value);
  }

  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the listeners.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    this: KTRef<T>,
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTSubRef<T[K0][K1][K2]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the listeners.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T, K1 extends keyof T[K0]>(this: KTRef<T>, key0: K0, key1: K1): KTSubRef<T[K0][K1]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the listeners.
   * - `KTSubRef` is lighter than `KTRef`.
   */
  subref<K0 extends keyof T>(this: KTRef<T>, key0: K0): KTSubRef<T[K0]>;
  /**
   * Derive a lighter sub-ref from this ref, using keys to access nested properties.
   * - `ref.subref('a', 'b')` means a sub-ref to `this.value.a.b`. Change it will also change `this.value` and trigger the listeners.
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
    this._listeners.clear();
  }
}

/**
 * Create a reactive reference to a value. The returned object has a single property `value` that holds the internal value.
 * @param value listened value
 */
export const ref = <T>(value?: T): KTRef<T> => new KTRef(value as any);

/**
 * @returns the pointed node itself
 */
export const $refToSelf = <T>(props: { ref?: KTRef<any> }, node: T): T => {
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

  protected readonly _getter: (sv: KTReactive<any>['value']) => T;
  protected readonly _setter: (s: object, newValue: T) => void;
  protected readonly _listener: ChangeListener<any>;

  constructor(
    source: KTRef<any>,
    getter: (sv: KTReactive<any>['value']) => T,
    setter: (s: object, newValue: T) => void,
  ) {
    super(getter(source.value));
    this.source = source;
    this._getter = getter;
    this._setter = setter;
    this._listener = () => (this._value = getter(source.value));
    source.listen(this._listener);
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    if (
      this.source.value === null ||
      (typeof this.source.value !== 'object' && typeof this.source.value !== 'function')
    ) {
      $throw('Sub-ref only supports object-like ref values.');
    }
    this._value = newValue;
    this._setter(this.source._value, newValue);
    this.source.notify();
  }

  listen(listener: ChangeListener<T>): this {
    this.source.listen((newValue, oldValue) => listener(this._getter(newValue), this._getter(oldValue)));
    return this;
  }

  unlisten(listener: ChangeListener<T>): this {
    this.source.unlisten(listener);
    return this;
  }

  dispose(): void {
    this.source.unlisten(this._listener);
  }

  get(...args: any[]): KTComputed<any> {
    args.length > 0; // avoid lint error, and not let _args appear in index.d.ts
    $throw('Sub-ref does not support get() method.');
  }

  /**
   * Only use it for object's nested properties.
   */
  get draft() {
    // Same implementation as `draft` in `KTRef`
    _markMutation(this.source);
    return this._value;
  }
}
