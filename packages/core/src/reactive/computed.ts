import type { KTReactive, ReactiveChangeHandler, ReactiveChangeKey } from '../types/reactive.js';
import type { JSX } from '../types/jsx.js';
import { isKT, KTReactiveType } from './core.js';
import { IdGenerator } from '../common.js';

export class KTComputed<T> implements KTReactive<T> {
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
  private _onChanges: Map<ReactiveChangeKey, ReactiveChangeHandler<T>> = new Map();

  /**
   * @internal
   */
  private _emit(newValue: T, oldValue: T, changeKeys?: ReactiveChangeKey[]) {
    if (changeKeys) {
      for (let i = 0; i < changeKeys.length; i++) {
        this._onChanges.get(changeKeys[i])?.(newValue, oldValue);
      }
      return;
    }
    this._onChanges.forEach((c) => c(newValue, oldValue));
  }

  /**
   * @internal
   */
  private _recalculate(forceEmit: boolean = false, changeKeys?: ReactiveChangeKey[]) {
    const oldValue = this._value;
    const newValue = this._calculator();
    if (oldValue === newValue) {
      if (forceEmit) {
        this._emit(newValue, oldValue, changeKeys);
      }
      return;
    }
    this._value = newValue;
    this._emit(newValue, oldValue, changeKeys);
  }

  /**
   * @internal
   */
  private _subscribe(reactives: Array<KTReactive<unknown>>) {
    for (let i = 0; i < reactives.length; i++) {
      const reactive = reactives[i];
      reactive.addOnChange(() => this._recalculate());
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
   * Force listeners to run once with the latest computed result.
   */
  notify(changeKeys?: ReactiveChangeKey[]) {
    this._recalculate(true, changeKeys);
  }

  /**
   * Computed values are derived from dependencies and should not be mutated manually.
   */
  mutate<R = void>(_mutator?: (currentValue: T) => R, changeKeys?: ReactiveChangeKey[]): R {
    $warn('KTComputed.mutate: computed is derived automatically; manual mutate is ignored. Use notify() instead');
    if (changeKeys) {
      this._emit(this._value, this._value, changeKeys);
    }
    return this._value as unknown as R;
  }

  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
   */
  addOnChange<K extends ReactiveChangeKey | undefined>(
    callback: ReactiveChangeHandler<T>,
    key?: K,
  ): K extends undefined ? number : K {
    if (typeof callback !== 'function') {
      $throw('KTComputed.addOnChange: callback must be a function');
    }
    const k = key ?? IdGenerator.computedOnChangeId;
    this._onChanges.set(k, callback);
    return k as K extends undefined ? number : K;
  }

  /**
   * Unregister a callback
   * @param key registered listener key
   */
  removeOnChange(key: ReactiveChangeKey): ReactiveChangeHandler<T> | undefined {
    const callback = this._onChanges.get(key);
    this._onChanges.delete(key);
    return callback;
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
