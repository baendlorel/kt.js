import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';

export class KTSetRef<T> extends KTRef<Set<T>> {
  constructor(value: Set<T>, onChange?: ReactiveChangeHandler<Set<T>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.SetRef;
  }

  get size() {
    return this.value.size;
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

  clear() {
    this._value.clear();
    this._forceEmit();
  }
}

registerRefFactory(
  (value) => value instanceof Set,
  (value, onChange) => new KTSetRef(value as Set<unknown>, onChange as ReactiveChangeHandler<Set<unknown>> | undefined),
);
