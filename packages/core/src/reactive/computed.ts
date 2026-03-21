import type { ChangeHandlerKey } from './reactive.js';
import type { JSX } from '../types/jsx.js';

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
  private _recalculate(forceEmit: boolean = false, handlerKeys?: ChangeHandlerKey[]): this {
    const oldValue = this._value;
    const newValue = this._calculator();
    if (oldValue === newValue) {
      if (forceEmit) {
        this._emit(newValue, oldValue, handlerKeys);
      }
      return this;
    }
    this._value = newValue;
    this._emit(newValue, oldValue, handlerKeys);
    return this;
  }

  constructor(_calculator: () => T, reactives: Array<KTReactive<unknown>>) {
    super(_calculator());
    this._calculator = _calculator;

    for (let i = 0; i < reactives.length; i++) {
      reactives[i].addOnChange(() => this._recalculate());
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
  notify(handlerKeys?: ChangeHandlerKey[]): this {
    return this._recalculate(true, handlerKeys);
  }
}

KTReactive.prototype.map = function <R>(calculator: (v: unknown) => R, dependencies?: KTReactive<any>[]) {
  return new KTComputed(() => calculator(this.value), dependencies ? [this, ...dependencies] : [this]);
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
