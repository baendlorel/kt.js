import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef } from './ref.js';
import { apply, applyArgless } from './applier.js';

export class KTArrayRef<T> extends KTRef<T[]> {
  constructor(value: T[], onChange?: ReactiveChangeHandler<T[]>) {
    super(value, onChange);
    this.ktType = KTReactiveType.ArrayRef;
  }

  get length() {
    return this.value.length;
  }

  set length(newLength: number) {
    this._value.length = newLength;
    this._onChanges.forEach((handler) => handler(this._value, this._value));
  }

  push(...items: T[]): number {
    return apply(this, this._value.push, items);
  }

  /**
   * Same as `Array.prototype.pop`, but emits change after calling it
   */
  pop(): T | undefined {
    return applyArgless(this, this._value.pop);
  }

  /**
   * Same as `Array.prototype.shift`, but emits change after calling it
   */
  shift(): T | undefined {
    return applyArgless(this, this._value.shift);
  }

  /**
   * Same as `Array.prototype.unshift`, but emits change after calling it
   */
  unshift(...items: T[]): number {
    return apply(this, this._value.unshift, items);
  }

  /**
   * Same as `Array.prototype.splice`, but emits change after calling it
   */
  splice(start: number, deleteCount?: number): T[];
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  splice(...args: any[]): T[] {
    return apply(this, this._value.splice, args);
  }

  /**
   * Same as `Array.prototype.sort`, but emits change after calling it
   */
  sort(compareFn?: (a: T, b: T) => number): this;
  sort(...args: any[]): this {
    apply(this, this._value.sort, args);
    return this;
  }

  /**
   * Same as `Array.prototype.reverse`, but emits change after calling it
   */
  reverse(): this {
    applyArgless(this, this._value.reverse);
    return this;
  }

  /**
   * Same as `Array.prototype.fill`, but emits change after calling it
   */
  fill(value: T, start?: number, end?: number): this;
  fill(...args: any[]): this {
    apply(this, this._value.fill, args);
    return this;
  }

  /**
   * Same as `Array.prototype.copyWithin`, but emits change after calling it
   */
  copyWithin(target: number, start: number, end?: number): this;
  copyWithin(...args: any[]): this {
    apply(this, this._value.copyWithin, args);
    return this;
  }
}

export const arrayRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) =>
  new KTArrayRef(value as any[], onChange);
