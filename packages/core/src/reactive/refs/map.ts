import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';

export class KTMapRef<K, V> extends KTRef<Map<K, V>> {
  constructor(value: Map<K, V>, onChange?: ReactiveChangeHandler<Map<K, V>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.MapRef;
  }

  get size() {
    return this._value.size;
  }

  has(key: K) {
    return this._value.has(key);
  }

  get(key: K) {
    return this._value.get(key);
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

  clear() {
    this._value.clear();
    this._forceEmit();
  }
}

registerRefFactory(
  (value) => value instanceof Map,
  (value, onChange) =>
    new KTMapRef(value as Map<unknown, unknown>, onChange as ReactiveChangeHandler<Map<unknown, unknown>> | undefined),
);
