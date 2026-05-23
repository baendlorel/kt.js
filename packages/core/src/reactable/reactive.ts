import type { KTComputed } from './computed.js';
import { type ChangeListener, type KTListenOptions } from './types.js';
import { isOwnerDead, own, unown } from '../common/owner.js';

export const enum KType {
  Ref /*--------*/ = 1 << 1,
  SubRef /*-----*/ = 1 << 2,
  Computed /*---*/ = 1 << 3,
  Reactive /*---*/ = Ref | Computed,

  /**
   * Used for custom reactive-like objects.
   */
  Custom /*-----*/ = 1 << 30,
}

let kid = 1;
export const nextKid = () => kid++;

export abstract class KTReactive<T> {
  readonly kid = nextKid();

  /**
   * Internal value storage.
   */
  _value: T;

  private readonly _ownedCleanups = new Map<ChangeListener<any>, () => void>();
  readonly _listeners = new Map<ChangeListener<any>, Node | undefined>();

  constructor(value: T) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    $warn('Setting value to a non-ref instance takes no effect.' + (newValue ? '' : ''));
  }

  protected _emit(newValue: T, oldValue: T): this {
    this._listeners.forEach((owner, f) => {
      if (owner && isOwnerDead(owner)) {
        this.unlisten(f);
        return;
      }
      f(newValue, oldValue);
    });
    return this;
  }

  listen(listener: ChangeListener<T>, options?: KTListenOptions | Node): this {
    if (this._listeners.has(listener)) {
      $warn(`Overriding existing change handler with ${listener.toString()}.`);
      return this;
    }
    const owner =
      typeof Node !== 'undefined' && options instanceof Node ? options : (options as KTListenOptions | undefined)?.owner;
    this._listeners.set(listener, owner);
    if (owner) {
      const cleanup = () => this.unlisten(listener);
      this._ownedCleanups.set(listener, cleanup);
      own(owner, cleanup);
    }
    return this;
  }

  unlisten(listener: ChangeListener<T>): this {
    const owner = this._listeners.get(listener);
    this._listeners.delete(listener);
    const cleanup = this._ownedCleanups.get(listener);
    if (owner && cleanup) {
      unown(owner, cleanup);
      this._ownedCleanups.delete(listener);
    }
    return this;
  }

  unlistenAll(): this {
    this._ownedCleanups.clear();
    this._listeners.clear();
    return this;
  }

  notify(): this {
    return this._emit(this._value, this._value);
  }

  /**
   * Create a computed value via current reactive value.
   * - No matter `this` is added to `dependencies` or not, it is always listened.
   * @param calculator A function that generates a new value based on current value.
   * @param dependencies optional other dependencies that the computed value depends on.
   */
  map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactive<any>>): KTComputed<U> {
    return (calculator || dependencies || null) as any; // & implemented in computed.ts to avoid circular dependency
  }

  /**
   * Make a computed value that checks if the reactive value is strictly equal to a specific value.
   * - Use `Object.is` for comparison.
   * - if `o` is reactive-like, it will be added to dependencies
   */
  is(o: T | KTReactive<T>): KTComputed<boolean> {
    return o as any; // & implemented in computed.ts to avoid circular dependency
  }

  /**
   * Make a computed value that checks if the reactive value matches a specific object structure.
   * - Deeply match.
   * - if `o` is reactive-like, it will be added to dependencies
   */
  match(o: object | KTReactive<object>): KTComputed<boolean> {
    return o as any; // & implemented in computed.ts to avoid circular dependency
  }

  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a computed value to `this.value.a.b`.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): KTComputed<T[K0][K1][K2]>;
  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a computed value to `this.value.a.b`.
   */
  get<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): KTComputed<T[K0][K1]>;
  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a computed value to `this.value.a.b`.
   */
  get<K0 extends keyof T>(key0: K0): KTComputed<T[K0]>;
  /**
   * Generate a computed value based on this reactive, using keys to access nested properties.
   * - `reactive.get('a', 'b')` means a computed value to `this.value.a.b`.
   */
  get(..._keys: Array<string | number>): KTComputed<any> {
    // & Will be implemented in computed.ts to avoid circular dependency
    return null as any;
  }
}
