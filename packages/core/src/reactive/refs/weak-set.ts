import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTWeakSetRef<T extends WeakKey> extends KTRef<WeakSet<T>> {
  constructor(value: WeakSet<T>) {
    super(value);
    this.ktType = KTReactiveType.WeakSetRef;
  }

  /**
   * Same as `WeakSet.prototype.add`, but emits change after calling it
   */
  add(value: T): this {
    this._applyMutation((currentValue) => currentValue.add(value));
    return this;
  }

  /**
   * Same as `WeakSet.prototype.delete`, but emits change after calling it
   */
  delete(value: T): boolean {
    return this._applyMutation((currentValue) => currentValue.delete(value));
  }
}

registerRefFactory(
  (value): value is WeakSet<WeakKey> => value instanceof WeakSet,
  (value, onChange) => {
    const weakSetRef = new KTWeakSetRef(value as WeakSet<WeakKey>);
    if (onChange) {
      weakSetRef.addOnChange(onChange);
    }
    return weakSetRef;
  },
);
