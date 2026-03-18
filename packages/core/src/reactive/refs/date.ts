import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';

export class KTDateRef extends KTRef<Date> {
  constructor(value: Date, onChange?: ReactiveChangeHandler<Date>) {
    super(value, onChange);
    this.ktType = KTReactiveType.DateRef;
  }

  private _callSetter<R>(setter: (...args: any[]) => R, ...args: unknown[]): R {
    let argCount = args.length;
    while (argCount > 0 && args[argCount - 1] === undefined) {
      argCount--;
    }
    const result = setter.apply(this._value, args.slice(0, argCount));
    this._forceEmit();
    return result;
  }

  setTime(timeValue: number): number {
    return this._callSetter(this._value.setTime, timeValue);
  }

  setMilliseconds(millisecondsValue: number): number {
    return this._callSetter(this._value.setMilliseconds, millisecondsValue);
  }

  setUTCMilliseconds(millisecondsValue: number): number {
    return this._callSetter(this._value.setUTCMilliseconds, millisecondsValue);
  }

  setSeconds(secondsValue: number, millisecondsValue?: number): number {
    return this._callSetter(this._value.setSeconds, secondsValue, millisecondsValue);
  }

  setUTCSeconds(secondsValue: number, millisecondsValue?: number): number {
    return this._callSetter(this._value.setUTCSeconds, secondsValue, millisecondsValue);
  }

  setMinutes(minutesValue: number, secondsValue?: number, millisecondsValue?: number): number {
    return this._callSetter(this._value.setMinutes, minutesValue, secondsValue, millisecondsValue);
  }

  setUTCMinutes(minutesValue: number, secondsValue?: number, millisecondsValue?: number): number {
    return this._callSetter(this._value.setUTCMinutes, minutesValue, secondsValue, millisecondsValue);
  }

  setHours(hoursValue: number, minutesValue?: number, secondsValue?: number, millisecondsValue?: number): number {
    return this._callSetter(this._value.setHours, hoursValue, minutesValue, secondsValue, millisecondsValue);
  }

  setUTCHours(hoursValue: number, minutesValue?: number, secondsValue?: number, millisecondsValue?: number): number {
    return this._callSetter(this._value.setUTCHours, hoursValue, minutesValue, secondsValue, millisecondsValue);
  }

  setDate(dateValue: number): number {
    return this._callSetter(this._value.setDate, dateValue);
  }

  setUTCDate(dateValue: number): number {
    return this._callSetter(this._value.setUTCDate, dateValue);
  }

  setMonth(monthValue: number, dateValue?: number): number {
    return this._callSetter(this._value.setMonth, monthValue, dateValue);
  }

  setUTCMonth(monthValue: number, dateValue?: number): number {
    return this._callSetter(this._value.setUTCMonth, monthValue, dateValue);
  }

  setFullYear(yearValue: number, monthValue?: number, dateValue?: number): number {
    return this._callSetter(this._value.setFullYear, yearValue, monthValue, dateValue);
  }

  setUTCFullYear(yearValue: number, monthValue?: number, dateValue?: number): number {
    return this._callSetter(this._value.setUTCFullYear, yearValue, monthValue, dateValue);
  }
}

registerRefFactory(
  (value) => value instanceof Date,
  (value, onChange) => new KTDateRef(value as Date, onChange as ReactiveChangeHandler<Date> | undefined),
);
