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
    this.value.length = newLength;
    this._emit(this.value, this.value);
  }

  push(...items: T[]) {
    this.value.push(...items);
    this._emit(this.value, this.value);
  }

  /**
   * Same as `Array.prototype.pop`, but emits change after calling it
   */
  pop(): T | undefined {
    const result = this.value.pop();
    this._emit(this.value, this.value);
    return result;
  }

  /**
   * Same as `Array.prototype.shift`, but emits change after calling it
   */
  shift(): T | undefined {
    const result = this.value.shift();
    this._emit(this.value, this.value);
    return result;
  }

  /**
   * Same as `Array.prototype.unshift`, but emits change after calling it
   */
  unshift(...items: T[]): number {
    const result = this.value.unshift(...items);
    this._emit(this.value, this.value);
    return result;
  }

  /**
   * Same as `Array.prototype.splice`, but emits change after calling it
   */
  splice(start: number, deleteCount?: number, ...items: T[]): T[] {
    const result = this.value.splice(start, deleteCount ?? this.value.length - start, ...items);
    this._emit(this.value, this.value);
    return result;
  }

  /**
   * Same as `Array.prototype.sort`, but emits change after calling it
   */
  sort(compareFn?: (a: T, b: T) => number): this {
    this.value.sort(compareFn);
    this._emit(this.value, this.value);
    return this;
  }

  /**
   * Same as `Array.prototype.reverse`, but emits change after calling it
   */
  reverse(): this {
    this.value.reverse();
    this._emit(this.value, this.value);
    return this;
  }

  /**
   * Same as `Array.prototype.fill`, but emits change after calling it
   */
  fill(value: T, start?: number, end?: number): this {
    this.value.fill(value, start, end);
    this._emit(this.value, this.value);
    return this;
  }

  /**
   * Same as `Array.prototype.copyWithin`, but emits change after calling it
   */
  copyWithin(target: number, start: number, end?: number): this {
    this.value.copyWithin(target, start, end);
    this._emit(this.value, this.value);
    return this;
  }
}
