import { $replaceNode } from '@ktjs/shared';
import type { ReactiveChangeHandler } from './core.js';
import type { KTReactive } from './index.js';
import { isKT, KTReactiveType } from './core.js';

export class KTComputed<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT = true as const;

  ktType = KTReactiveType.COMPUTED;

  /**
   * @internal
   */
  private _calculator: () => T;

  /**
   * @internal
   */
  private _value: T;

  /**
   * @internal
   */
  private _onChanges: Array<ReactiveChangeHandler<T>> = [];

  /**
   * @internal
   */
  private _subscribe(reactives: Array<KTReactive<unknown>>) {
    for (let i = 0; i < reactives.length; i++) {
      const reactive = reactives[i];
      reactive.addOnChange(() => {
        const oldValue = this._value;
        this._value = this._calculator();
        if (oldValue === this._value) {
          return;
        }
        $replaceNode(oldValue, this._value);
        for (let i = 0; i < this._onChanges.length; i++) {
          this._onChanges[i](this._value, oldValue);
        }
      });
    }
  }

  constructor(_calculator: () => T, reactives: Array<KTReactive<unknown>>) {
    this._calculator = _calculator;
    this._value = _calculator();
    this._subscribe(reactives);
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value() {
    return this._value;
  }

  set value(_newValue: T) {
    $throw('KTComputed: cannot set value of a computed value');
  }

  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
   */
  addOnChange(callback: ReactiveChangeHandler<T>) {
    if (typeof callback !== 'function') {
      $throw('KTRef.addOnChange: callback must be a function');
    }
    this._onChanges.push(callback);
  }

  /**
   * Unregister a callback
   * @param callback (newValue, oldValue) => xxx
   */
  removeOnChange(callback: ReactiveChangeHandler<T>) {
    for (let i = this._onChanges.length - 1; i >= 0; i--) {
      if (this._onChanges[i] === callback) {
        this._onChanges.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

/**
 * Create a reactive computed value
 * @param computeFn
 * @param reactives refs and computeds that this computed depends on
 */
export function computed<T = JSX.Element>(computeFn: () => T, reactives: Array<KTReactive<any>>): KTComputed<T> {
  if (reactives.some((v) => !isKT(v))) {
    $throw('computed: all reactives must be KTRef or KTComputed instances');
  }
  return new KTComputed<T>(computeFn, reactives);
}
