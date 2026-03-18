import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';

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
    this._forceEmit();
  }

  push(...items: T[]): number {
    const result = this._value.push(...items);
    this._forceEmit();
    return result;
  }

  /**
   * Same as `Array.prototype.pop`, but emits change after calling it
   */
  pop(): T | undefined {
    const result = this._value.pop();
    this._forceEmit();
    return result;
  }

  /**
   * Same as `Array.prototype.shift`, but emits change after calling it
   */
  shift(): T | undefined {
    const result = this._value.shift();
    this._forceEmit();
    return result;
  }

  /**
   * Same as `Array.prototype.unshift`, but emits change after calling it
   */
  unshift(...items: T[]): number {
    const result = this._value.unshift(...items);
    this._forceEmit();
    return result;
  }

  /**
   * Same as `Array.prototype.splice`, but emits change after calling it
   */
  splice(start: number, deleteCount?: number, ...items: T[]): T[] {
    const result =
      deleteCount === undefined
        ? this._value.splice(start, this._value.length - start, ...items)
        : this._value.splice(start, deleteCount, ...items);
    this._forceEmit();
    return result;
  }

  /**
   * Same as `Array.prototype.sort`, but emits change after calling it
   */
  sort(compareFn?: (a: T, b: T) => number): this {
    this._value.sort(compareFn);
    this._forceEmit();
    return this;
  }

  /**
   * Same as `Array.prototype.reverse`, but emits change after calling it
   */
  reverse(): this {
    this._value.reverse();
    this._forceEmit();
    return this;
  }

  /**
   * Same as `Array.prototype.fill`, but emits change after calling it
   */
  fill(value: T, start?: number, end?: number): this {
    this._value.fill(value, start, end);
    this._forceEmit();
    return this;
  }

  /**
   * Same as `Array.prototype.copyWithin`, but emits change after calling it
   */
  copyWithin(target: number, start: number, end?: number): this {
    this._value.copyWithin(target, start, end);
    this._forceEmit();
    return this;
  }
}

registerRefFactory(
  Array.isArray,
  (value, onChange) => new KTArrayRef(value as unknown[], onChange as ReactiveChangeHandler<unknown[]> | undefined),
);
