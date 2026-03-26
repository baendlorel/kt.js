import { $is, $stringify } from '@ktjs/shared';
import { KTReactive, KTReactiveType, KTSubReactive } from './reactive.js';
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

  notify(): this {
    return this._emit(this._value, this._value);
  }

  map<U>(calculator: (value: T) => U, dependencies?: KTReactive<any>[]): KTComputed<U> {
    return new KTComputed(() => calculator(this.value), dependencies ? dependencies.concat(this) : [this]);
  }

  get(...keys: (string | number)[]): unknown {
    if (keys.length === 0) {
      $throw('At least one key is required to get a sub-ref.');
    }
    return new KTSubRef(this, keys.map((key) => `[${$stringify(key)}]`).join(''));
  }
}

export function ref<T>(value: T): KTRef<T> {
  return new KTRef(value);
}

class KTSubRef<T, Source extends KTRef<any>> extends KTSubReactive<T, KTReactiveType.SubRef, KTRef<any>> {
  readonly type = KTReactiveType.SubRef;

  /**
   * @internal
   */
  protected readonly _setter: (o: object, newValue: T) => void;

  constructor(source: Source, paths: string) {
    super(source, paths);
    this._setter = new Function('s', 'v', `s${paths}=v`) as (o: object, newValue: T) => void;
  }

  get value() {
    // @ts-expect-error _value is private
    return this._getter(this.source._value);
  }

  set value(newValue: T) {
    // @ts-expect-error _value is private
    this._setter(this.source._value, newValue);
    this.source.notify();
  }

  get draft() {
    // Same implementation as `draft` in `KTRef`
    markMutation(this.source);
    // @ts-expect-error _value is private
    return this._getter(this.source._value);
  }
}
