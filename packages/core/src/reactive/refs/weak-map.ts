import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTWeakMapRef<K extends WeakKey, V> extends KTRef<WeakMap<K, V>> {
  constructor(value: WeakMap<K, V>) {
    super(value);
    this.ktType = KTReactiveType.WeakMapRef;
  }

  /**
   * Same as `WeakMap.prototype.set`, but emits change after calling it
   */
  set(key: K, value: V): this {
    this._applyMutation((currentValue) => currentValue.set(key, value));
    return this;
  }

  /**
   * Same as `WeakMap.prototype.delete`, but emits change after calling it
   */
  delete(key: K): boolean {
    return this._applyMutation((currentValue) => currentValue.delete(key));
  }
}
