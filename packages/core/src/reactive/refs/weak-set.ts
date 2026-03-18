import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';

export class KTWeakSetRef<T extends WeakKey = WeakKey> extends KTRef<WeakSet<T>> {
  constructor(value: WeakSet<T>, onChange?: ReactiveChangeHandler<WeakSet<T>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.WeakSetRef;
  }

  has(value: T) {
    return this.value.has(value);
  }

  add(value: T): this {
    this._value.add(value);
    this._forceEmit();
    return this;
  }

  delete(value: T): boolean {
    const result = this._value.delete(value);
    this._forceEmit();
    return result;
  }
}

registerRefFactory(
  (value) => value instanceof WeakSet,
  (value, onChange) =>
    new KTWeakSetRef(value as WeakSet<WeakKey>, onChange as ReactiveChangeHandler<WeakSet<WeakKey>> | undefined),
);
