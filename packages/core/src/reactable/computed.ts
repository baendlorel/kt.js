import { $is, $stringify } from '@ktjs/shared';
import { KTReactive, KTReactiveType, KTSubReactive } from './reactive.js';

export class KTComputed<T> extends KTReactive<T, KTReactiveType.Computed> {
  readonly type = KTReactiveType.Computed;

  private readonly _calculator: () => T;

  private _recalculate(forced: boolean = false): this {
    const newValue = this._calculator();
    const oldValue = this._value;
    if (!$is(oldValue, newValue) || forced) {
      this._value = newValue;
      this._emit(newValue, oldValue);
    }
    return this;
  }

  constructor(calculator: () => T, dependencies: KTReactive<any>[]) {
    super(calculator());
    this._calculator = calculator;
    const recalculate = () => this._recalculate();
    for (let i = 0; i < dependencies.length; i++) {
      dependencies[i].addOnChange(recalculate);
    }
  }

  notify(): this {
    return this._recalculate(true);
  }

  map<U>(calculator: (value: T) => U, dependencies?: KTReactive<any>[]): KTComputed<U> {
    return new KTComputed(() => calculator(this.value), dependencies ? dependencies.concat(this) : [this]);
  }

  get(...keys: (string | number)[]): unknown {
    if (keys.length === 0) {
      $throw('At least one key is required to get a sub-computed.');
    }
    return new KTSubComputed(this, keys.map((key) => `[${$stringify(key)}]`).join(''));
  }
}

class KTSubComputed<T, Source extends KTReactive<any, KTReactiveType.Computed>> extends KTSubReactive<
  T,
  KTReactiveType.SubComputed,
  Source
> {
  readonly type = KTReactiveType.SubComputed;
}
