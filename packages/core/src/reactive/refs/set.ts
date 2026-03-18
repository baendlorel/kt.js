import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef } from './ref.js';
import { apply, applyArgless } from './applier.js';

export class KTSetRef<T> extends KTRef<Set<T>> {
  constructor(value: Set<T>, onChange?: ReactiveChangeHandler<Set<T>>) {
    super(value, onChange);
    this.ktType = KTReactiveType.SetRef;
  }

  get size() {
    return this._value.size;
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

  clear() {
    return applyArgless(this, this._value.clear);
  }
}

export const setRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) => new KTSetRef(value as any, onChange);
