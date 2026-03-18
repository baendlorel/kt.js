import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef } from './ref.js';
import { apply, applyArgless } from './applier.js';

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
    return apply(this, this._value.set, [key, value]);
  }

  delete(key: K): boolean {
    return apply(this, this._value.delete, [key]);
  }

  clear() {
    return applyArgless(this, this._value.clear);
  }
}

export const mapRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) => new KTMapRef(value as any, onChange);
