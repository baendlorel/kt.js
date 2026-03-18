import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTDateRef extends KTRef<Date> {
  constructor(value: Date) {
    super(value);
    this.ktType = KTReactiveType.DateRef;
  }

  /**
   * Same as `Date.prototype.setTime`, but emits change after calling it
   */
  setTime(time: number): number {
    return this._applyMutation((currentValue) => currentValue.setTime(time));
  }

  /**
   * Same as `Date.prototype.setMilliseconds`, but emits change after calling it
   */
  setMilliseconds(milliseconds: number): number {
    return this._applyMutation((currentValue) => currentValue.setMilliseconds(milliseconds));
  }

  /**
   * Same as `Date.prototype.setUTCMilliseconds`, but emits change after calling it
   */
  setUTCMilliseconds(milliseconds: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCMilliseconds(milliseconds));
  }

  /**
   * Same as `Date.prototype.setSeconds`, but emits change after calling it
   */
  setSeconds(seconds: number, milliseconds?: number): number {
    return this._applyMutation((currentValue) => currentValue.setSeconds(seconds, milliseconds));
  }

  /**
   * Same as `Date.prototype.setUTCSeconds`, but emits change after calling it
   */
  setUTCSeconds(seconds: number, milliseconds?: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCSeconds(seconds, milliseconds));
  }

  /**
   * Same as `Date.prototype.setMinutes`, but emits change after calling it
   */
  setMinutes(minutes: number, seconds?: number, milliseconds?: number): number {
    return this._applyMutation((currentValue) => currentValue.setMinutes(minutes, seconds, milliseconds));
  }

  /**
   * Same as `Date.prototype.setUTCMinutes`, but emits change after calling it
   */
  setUTCMinutes(minutes: number, seconds?: number, milliseconds?: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCMinutes(minutes, seconds, milliseconds));
  }

  /**
   * Same as `Date.prototype.setHours`, but emits change after calling it
   */
  setHours(hours: number, minutes?: number, seconds?: number, milliseconds?: number): number {
    return this._applyMutation((currentValue) => currentValue.setHours(hours, minutes, seconds, milliseconds));
  }

  /**
   * Same as `Date.prototype.setUTCHours`, but emits change after calling it
   */
  setUTCHours(hours: number, minutes?: number, seconds?: number, milliseconds?: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCHours(hours, minutes, seconds, milliseconds));
  }

  /**
   * Same as `Date.prototype.setDate`, but emits change after calling it
   */
  setDate(date: number): number {
    return this._applyMutation((currentValue) => currentValue.setDate(date));
  }

  /**
   * Same as `Date.prototype.setUTCDate`, but emits change after calling it
   */
  setUTCDate(date: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCDate(date));
  }

  /**
   * Same as `Date.prototype.setMonth`, but emits change after calling it
   */
  setMonth(month: number, date?: number): number {
    return this._applyMutation((currentValue) => currentValue.setMonth(month, date));
  }

  /**
   * Same as `Date.prototype.setUTCMonth`, but emits change after calling it
   */
  setUTCMonth(month: number, date?: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCMonth(month, date));
  }

  /**
   * Same as `Date.prototype.setFullYear`, but emits change after calling it
   */
  setFullYear(year: number, month?: number, date?: number): number {
    return this._applyMutation((currentValue) => currentValue.setFullYear(year, month, date));
  }

  /**
   * Same as `Date.prototype.setUTCFullYear`, but emits change after calling it
   */
  setUTCFullYear(year: number, month?: number, date?: number): number {
    return this._applyMutation((currentValue) => currentValue.setUTCFullYear(year, month, date));
  }
}

registerRefFactory(
  (value): value is Date => value instanceof Date,
  (value, onChange) => {
    const dateRef = new KTDateRef(value as Date);
    if (onChange) {
      dateRef.addOnChange(onChange);
    }
    return dateRef;
  },
);
