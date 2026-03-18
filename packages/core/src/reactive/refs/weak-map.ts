import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTWeakMapRef<K extends WeakKey = WeakKey, V = any> extends KTRef<WeakMap<K, V>> {
  constructor(value: WeakMap<K, V>, onChange?: ReactiveChangeHandler<WeakMap<K, V>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.WeakMapRef;
  }

  has(key: K) {
    return this.value.has(key);
  }

  get(key: K) {
    return this.value.get(key);
  }

  set(key: K, value: V): this {
    this._value.set(key, value);
    this._forceEmit();
    return this;
  }

  delete(key: K): boolean {
    const result = this._value.delete(key);
    this._forceEmit();
    return result;
  }
}

registerRefFactory(
  (value) => value instanceof WeakMap,
  (value, onChange) =>
    new KTWeakMapRef(value as WeakMap<WeakKey, unknown>, onChange as ReactiveChangeHandler<WeakMap<WeakKey, unknown>> | undefined),
);
