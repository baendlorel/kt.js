import { $is } from '@ktjs/shared';
import { KTReactive, KTReactiveType } from './reactive.js';
import { KTComputed } from './computed.js';
import { markMutation } from './scheduler.js';

export class KTRef<T> extends KTReactive<T, KTReactiveType.Ref> {
  readonly type = KTReactiveType.Ref;

  constructor(_value: T) {
    super(_value);
  }

  // ! Cannot be omitted, otherwise this will override `KTReactive` with only setter. And getter will return undefined.
  get value() {
    return this._value;
  }

  set value(newValue: T) {
    if ($is(newValue, this._value)) {
      return;
    }
    const oldValue = this._value;
    this._value = newValue;
    this._emit(newValue, oldValue);
  }

  /**
   * Used to mutate the value in-place.
   * - internal value is changed instantly, but the change handlers will be called in the next microtask.
   */
  get draft() {
    markMutation(this);
    return this._value;
  }

  map<U>(calculator: (value: T) => U, dependencies?: KTReactive<any>[]): KTComputed<U> {
    return new KTComputed(() => calculator(this.value), dependencies ? dependencies.concat(this) : [this]);
  }

  notify(): this {
    return this._emit(this._value, this._value);
  }

  get(...keys: PropertyKey[]): unknown {
    throw new Error('Method not implemented.');
  }
}
