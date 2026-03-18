import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';
import { apply } from './applier.js';

export class KTWeakMapRef<K extends WeakKey = WeakKey, V = any> extends KTRef<WeakMap<K, V>> {
  constructor(value: WeakMap<K, V>, onChange?: ReactiveChangeHandler<WeakMap<K, V>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.WeakMapRef;
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
}

registerRefFactory(
  (value) => value instanceof WeakMap,
  (value, onChange) =>
    new KTWeakMapRef(
      value as WeakMap<WeakKey, unknown>,
      onChange as ReactiveChangeHandler<WeakMap<WeakKey, unknown>> | undefined,
    ),
);
