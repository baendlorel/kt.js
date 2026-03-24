import type { JSX } from '../types/jsx.js';

import { $is, $stringify } from '@ktjs/shared';
import { isKT, KTReactiveType } from './common.js';
import { KTReactive } from './reactive.js';

export class KTComputed<T> extends KTReactive<T> {
  public readonly ktType = KTReactiveType.Computed;

  /**
   * @internal
   */
  private _calculator: () => T;

  /**
   * @internal
   */
  private _recalculate(forceEmit: boolean = false): this {
    const oldValue = this._value;
    const newValue = this._calculator();
    if ($is(oldValue, newValue)) {
      if (forceEmit) {
        this._emit(newValue, oldValue);
      }
      return this;
    }
    this._value = newValue;
    this._emit(newValue, oldValue);
    return this;
  }

  constructor(_calculator: () => T, dependencies: Array<KTReactive<unknown>>) {
    super(_calculator());
    this._calculator = _calculator;

    for (let i = 0; i < dependencies.length; i++) {
      dependencies[i].addOnChange(() => this._recalculate());
    }
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value() {
    return this._value;
  }

  set value(_newValue: T) {
    $warn(`'value' of Computed are read-only.`);
  }

  /**
   * Force listeners to run once with the latest computed result.
   */
  notify(): this {
    return this._recalculate(true);
  }
}

KTReactive.prototype.map = function <R>(calculator: (v: unknown) => R, dependencies?: Array<KTReactive<any>>) {
  return new KTComputed(() => calculator(this._value), dependencies ? [this, ...dependencies] : [this]);
};

KTReactive.prototype.get = function (...keys: string[]) {
  // # This method is 10 times faster than `for v=v[keys[i]]`
  const reader = new Function('v', `return v${keys.map((k) => `[${$stringify(k)}]`).join('')}`);
  return new KTComputed(() => reader(this._value), [this]) as any;
};

/**
 * Create a reactive computed value
 * @param computeFn
 * @param dependencies refs and computeds that this computed depends on
 */
export function computed<T = JSX.Element>(computeFn: () => T, dependencies: Array<KTReactive<any>>): KTComputed<T> {
  if (dependencies.some((v) => !isKT(v))) {
    $throw('computed: all reactives must be KTRef or KTComputed instances');
  }
  return new KTComputed<T>(computeFn, dependencies);
}
