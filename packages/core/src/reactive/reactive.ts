import type { KTComputed } from './computed.js';

import { IdGenerator } from '../common.js';
import { KTReactiveType } from './core.js';

export type ChangeHandler<T> = (newValue: T, oldValue: T) => void;
export type ChangeHandlerKey = string | number;
export class KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  public isKT: true = true;

  public ktType: KTReactiveType = KTReactiveType.Reative;

  /**
   * @internal
   */
  protected _value: T;

  /**
   * @internal
   */
  protected _changeHandlers: Map<ChangeHandlerKey, ChangeHandler<T>> = new Map();

  /**
   * @internal
   */
  protected _emit(newValue: T, oldValue: T, handlerKeys?: ChangeHandlerKey[]) {
    if (handlerKeys) {
      for (let i = 0; i < handlerKeys.length; i++) {
        this._changeHandlers.get(handlerKeys[i])?.(newValue, oldValue);
      }
      return this;
    }
    this._changeHandlers.forEach((c) => c(newValue, oldValue));
    return this;
  }

  constructor(_value: T, _onChange?: ChangeHandler<T>) {
    this._value = _value;
    this._changeHandlers = new Map();
    if (_onChange) {
      this._changeHandlers.set(IdGenerator.refOnChangeId, _onChange);
    }
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value() {
    return this._value;
  }

  /**
   * Force all listeners to run even when reference identity has not changed.
   * Useful for in-place array/object mutations.
   */
  notify(oldValue: T = this._value, newValue: T = this._value, handlerKeys?: ChangeHandlerKey[]): this {
    return this._emit(newValue, oldValue, handlerKeys);
  }

  /**
   * Ccreate a computed value based on this `KTReactive` instance.
   * @param calculator A function that calculates the computed value based on the current value of this `KTReactive` instance.
   * @param dependencies Optional additional dependencies that the computed value relies on.
   * @returns A `KTComputed` instance
   */
  toComputed<R>(calculator: (currentValue: T) => R, dependencies?: KTReactive<any>[]): KTComputed<R> {
    throw new Error('Cannot use it in KTReactive. Please use it in KTRef or KTComputed.');
  }

  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
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
