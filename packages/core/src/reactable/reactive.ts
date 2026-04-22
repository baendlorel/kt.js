import type { KTComputed } from './computed.js';
import { type ChangeHandler } from './types.js';

import { $stringify } from '@ktjs/shared';

export const enum KType {
  Ref /*----------*/ = 1 << 1,
  SubRef /*-------*/ = 1 << 2,
  Computed /*-----*/ = 1 << 3,
  Reactive /*-----*/ = Ref | Computed,

  /**
   * Used for custom reactive-like objects.
   */
  Custom /*-------*/ = 1 << 30,
}

let kid = 1;
let handlerId = 1;

export const nextKid = () => kid++;
export const nextHandlerId = (_kid: number) => handlerId++;

export abstract class KTReactive<T> {
  readonly kid = nextKid();

  /**
   * Internal value storage.
   * @internal
   */
  protected v: T;

  /* @internal */
  // TODO 用isConnected去判定并清理handler
  // TODO 改名为_listeners，并改为Set
  protected readonly _changeHandlers = new Map<any, ChangeHandler<any>>();

  constructor(value: T) {
    this.v = value;
  }

  get value() {
    return this.v;
  }

  set value(_newValue: T) {
    $warn('Setting value to a non-ref instance takes no effect.');
  }

  /* @internal */
  protected _emit(newValue: T, oldValue: T): this {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
    return this;
  }

  // TODO 这里改为listen和unlisten
  addOnChange(handler: ChangeHandler<T>, key: any = nextHandlerId(this.kid)): this {
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
    return this._emit(this.v, this.v);
  }

  /**
   * Create a computed value via current reactive value.
   * - No matter `this` is added to `dependencies` or not, it is always listened.
   * @param calculator A function that generates a new value based on current value.
   * @param dependencies optional other dependencies that the computed value depends on.
   */
  map<U>(_calculator: (value: T) => U, _dependencies?: Array<KTReactive<any>>): KTComputed<U> {
    return null as any; // & implemented in computed.ts to avoid circular dependency
  }

  /**
   * Make a computed value that checks if the reactive value is strictly equal to a specific value.
   * - Use `Object.is` for comparison.
   * - if `o` is reactive-like, it will be added to dependencies
   */
  is(_o: T | KTReactive<T>): KTComputed<boolean> {
    return null as any; // & implemented in computed.ts to avoid circular dependency
  }

  /**
   * Make a computed value that checks if the reactive value matches a specific object structure.
   * - Deeply match.
   * - if `o` is reactive-like, it will be added to dependencies
   */
  match(_o: object | KTReactive<object>): KTComputed<boolean> {
    return null as any; // & implemented in computed.ts to avoid circular dependency
  }

  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTComputed<T[K0][K1][K2]>;
  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): KTComputed<T[K0][K1]>;
  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   */
  get<K0 extends keyof T>(key0: K0): KTComputed<T[K0]>;
  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a sub-computed value to `this.value.a.b`.
   */
  get(..._keys: Array<string | number>): KTComputed<any> {
    // & Will be implemented in computed.ts to avoid circular dependency
    return null as any;
  }
}
