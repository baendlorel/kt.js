import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTMapRef<K, V> extends KTRef<Map<K, V>> {
  constructor(value: Map<K, V>) {
    super(value);
    this.ktType = KTReactiveType.MapRef;
  }

  /**
   * Same as `Map.prototype.set`, but emits change after calling it
   */
  set(key: K, value: V): this {
    this._applyMutation((currentValue) => currentValue.set(key, value));
    return this;
  }

  /**
   * Same as `Map.prototype.delete`, but emits change after calling it
   */
  delete(key: K): boolean {
    return this._applyMutation((currentValue) => currentValue.delete(key));
  }

  /**
   * Same as `Map.prototype.clear`, but emits change after calling it
   */
  clear(): this {
    this._applyMutation((currentValue) => currentValue.clear());
    return this;
  }
}
