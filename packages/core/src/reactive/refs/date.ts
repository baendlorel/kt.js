import type { ReactiveChangeHandler } from '../../types/reactive.js';
import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from '../ref.js';
import { apply } from './applier.js';

export class KTDateRef extends KTRef<Date> {
  constructor(value: Date, onChange?: ReactiveChangeHandler<Date>) {
    super(value, onChange);
    this.ktType = KTReactiveType.DateRef;
  }

  setTime(timeValue: number): number {
    return apply(this, this._value.setTime, [timeValue]);
  }

  setMilliseconds(millisecondsValue: number): number {
    return apply(this, this._value.setMilliseconds, [millisecondsValue]);
  }

  setUTCMilliseconds(millisecondsValue: number): number {
    return apply(this, this._value.setUTCMilliseconds, [millisecondsValue]);
  }

  setSeconds(secondsValue: number, millisecondsValue?: number): number;
  setSeconds(...args: any[]): number {
    return apply(this, this._value.setSeconds, args);
  }

  setUTCSeconds(secondsValue: number, millisecondsValue?: number): number;
  setUTCSeconds(...args: any[]): number {
    return apply(this, this._value.setUTCSeconds, args);
  }

  setMinutes(minutesValue: number, secondsValue?: number, millisecondsValue?: number): number;
  setMinutes(...args: any[]): number {
    return apply(this, this._value.setMinutes, args);
  }

  setUTCMinutes(minutesValue: number, secondsValue?: number, millisecondsValue?: number): number;
  setUTCMinutes(...args: any[]): number {
    return apply(this, this._value.setUTCMinutes, args);
  }

  setHours(hoursValue: number, minutesValue?: number, secondsValue?: number, millisecondsValue?: number): number;
  setHours(...args: any[]): number {
    return apply(this, this._value.setHours, args);
  }

  setUTCHours(hoursValue: number, minutesValue?: number, secondsValue?: number, millisecondsValue?: number): number;
  setUTCHours(...args: any[]): number {
    return apply(this, this._value.setUTCHours, args);
  }

  setDate(dateValue: number): number {
    return apply(this, this._value.setDate, [dateValue]);
  }

  setUTCDate(dateValue: number): number {
    return apply(this, this._value.setUTCDate, [dateValue]);
  }

  setMonth(monthValue: number, dateValue?: number): number;
  setMonth(...args: any[]): number {
    return apply(this, this._value.setMonth, args);
  }

  setUTCMonth(monthValue: number, dateValue?: number): number;
  setUTCMonth(...args: any[]): number {
    return apply(this, this._value.setUTCMonth, args);
  }

  setFullYear(yearValue: number, monthValue?: number, dateValue?: number): number;
  setFullYear(...args: any[]): number {
    return apply(this, this._value.setFullYear, args);
  }

  setUTCFullYear(yearValue: number, monthValue?: number, dateValue?: number): number;
  setUTCFullYear(...args: any[]): number {
    return apply(this, this._value.setUTCFullYear, args);
  }
}

registerRefFactory(
  (value) => value instanceof Date,
  (value, onChange) => new KTDateRef(value as Date, onChange as ReactiveChangeHandler<Date> | undefined),
);

export const dateRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) => new KTDateRef(value as any, onChange);
