import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTSetRef<T> extends KTRef<Set<T>> {
  constructor(value: Set<T>) {
    super(value);
    this.ktType = KTReactiveType.SetRef;
  }

  /**
   * Same as `Set.prototype.add`, but emits change after calling it
   */
  add(value: T): this {
    this._applyMutation((currentValue) => currentValue.add(value));
    return this;
  }

  /**
   * Same as `Set.prototype.delete`, but emits change after calling it
   */
  delete(value: T): boolean {
    return this._applyMutation((currentValue) => currentValue.delete(value));
  }

  /**
   * Same as `Set.prototype.clear`, but emits change after calling it
   */
  clear(): this {
    this._applyMutation((currentValue) => currentValue.clear());
    return this;
  }
}

registerRefFactory(
  (value): value is Set<unknown> => value instanceof Set,
  (value, onChange) => {
    const setRef = new KTSetRef(value as Set<unknown>);
    if (onChange) {
      setRef.addOnChange(onChange);
    }
    return setRef;
  },
);
