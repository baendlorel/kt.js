import { KTReactiveType } from '../core.js';
import { KTRef } from './base.js';

export class KTArrayRef<T> extends KTRef<T[]> {
  constructor(value: T[]) {
    super(value);
    this.ktType = KTReactiveType.ArrayRef;
  }

  get length() {
    return this.value.length;
  }

  set length(newLength: number) {
    this._value.length = newLength;
    this.notify();
  }

  push(...items: T[]) {
    this._value.push(...items);
    this.notify();
  }

  /**
   * Same as `Array.prototype.pop`, but emits change after calling it
   */
  pop(): T | undefined {
    const result = this._value.pop();
    this.notify();
    return result;
  }

  /**
   * Same as `Array.prototype.shift`, but emits change after calling it
   */
  shift(): T | undefined {
    return this._applyMutation((currentValue) => currentValue.shift());
  }

  /**
   * Same as `Array.prototype.unshift`, but emits change after calling it
   */
  unshift(...items: T[]): number {
    return this._applyMutation((currentValue) => currentValue.unshift(...items));
  }

  /**
   * Same as `Array.prototype.splice`, but emits change after calling it
   */
  splice(start: number, deleteCount?: number, ...items: T[]): T[] {
    return this._applyMutation((currentValue) =>
      currentValue.splice(start, deleteCount ?? currentValue.length - start, ...items),
    );
  }

  /**
   * Same as `Array.prototype.sort`, but emits change after calling it
   */
  sort(compareFn?: (a: T, b: T) => number): this {
    this._applyMutation((currentValue) => currentValue.sort(compareFn));
    return this;
  }

  /**
   * Same as `Array.prototype.reverse`, but emits change after calling it
   */
  reverse(): this {
    this._applyMutation((currentValue) => currentValue.reverse());
    return this;
  }

  /**
   * Same as `Array.prototype.fill`, but emits change after calling it
   */
  fill(value: T, start?: number, end?: number): this {
    this._applyMutation((currentValue) => currentValue.fill(value, start, end));
    return this;
  }

  /**
   * Same as `Array.prototype.copyWithin`, but emits change after calling it
   */
  copyWithin(target: number, start: number, end?: number): this {
    this._applyMutation((currentValue) => currentValue.copyWithin(target, start, end));
    return this;
  }
}
