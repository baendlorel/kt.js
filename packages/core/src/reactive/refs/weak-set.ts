import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';
import { apply } from './applier.js';

export class KTWeakSetRef<T extends WeakKey = WeakKey> extends KTRef<WeakSet<T>> {
  constructor(value: WeakSet<T>, onChange?: ReactiveChangeHandler<WeakSet<T>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.WeakSetRef;
  }

  has(value: T) {
    return this._value.has(value);
  }

  add(value: T): this {
    return apply(this, this._value.add, [value]);
  }

  delete(value: T): boolean {
    return apply(this, this._value.delete, [value]);
  }
}

registerRefFactory(
  (value) => value instanceof WeakSet,
  (value, onChange) =>
    new KTWeakSetRef(value as WeakSet<WeakKey>, onChange as ReactiveChangeHandler<WeakSet<WeakKey>> | undefined),
);

export const weakSetRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) =>
  new KTWeakSetRef(value as any, onChange);
