import { $is } from '@ktjs/shared';
import { IdGenerator } from '../../common.js';
import type { KTReactive, ReactiveChangeKey, ReactiveChangeHandler } from '../../types/reactive.js';
import { computed, type KTComputed } from '../computed.js';
import { KTReactiveType } from '../core.js';

export class KTRef<T> implements KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT = true as const;

  ktType = KTReactiveType.Ref;

  /**
   * @internal
   */
  protected _value: T;

  /**
   * @internal
   */
  protected _onChanges: Map<ReactiveChangeKey, ReactiveChangeHandler<T>>;

  /**
   * @internal
   */
  protected _emit(newValue: T, oldValue: T, handlerKeys?: ReactiveChangeKey[]) {
    if (handlerKeys) {
      for (let i = 0; i < handlerKeys.length; i++) {
        this._onChanges.get(handlerKeys[i])?.(newValue, oldValue);
      }
      return;
    }
    this._onChanges.forEach((c) => c(newValue, oldValue));
  }

  constructor(_value: T, _onChange?: ReactiveChangeHandler<T>) {
    this._value = _value;
    this._onChanges = new Map();
    if (_onChange) {
      this._onChanges.set(IdGenerator.refOnChangeId, _onChange);
    }
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
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
   * Force all listeners to run even when reference identity has not changed.
   * Useful for in-place array/object mutations.
   */
  notify(handlerKeys?: ReactiveChangeKey[]) {
    this._emit(this._value, this._value, handlerKeys);
  }

  /**
   * Mutate current value in-place and notify listeners once.
   *
   * @example
   * const items = ref<number[]>([1, 2]);
   * items.mutate((list) => list.push(3));
   */
  mutate<R = void>(mutator: (currentValue: T) => R, handlerKeys?: ReactiveChangeKey[]): R {
    if (typeof mutator !== 'function') {
      $throw('KTRef.mutate: mutator must be a function');
    }
    const oldValue = this._value;
    const result = mutator(this._value);
    this._emit(this._value, oldValue, handlerKeys);
    return result;
  }

  toComputed<R>(calculator: (currentValue: T) => R, dependencies?: KTReactive<any>[]): KTComputed<R> {
    return computed(() => calculator(this.value), dependencies ? [this, ...dependencies] : [this]);
  }

  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
   * @param key Optional key to identify the callback, allowing multiple listeners on the same ref and individual removal. If not provided, a unique ID will be generated.
   */
  addOnChange<K extends ReactiveChangeKey | undefined>(
    callback: ReactiveChangeHandler<T>,
    key?: K,
  ): K extends undefined ? number : K {
    if (typeof callback !== 'function') {
      $throw('KTRef.addOnChange: callback must be a function');
    }
    const k = key ?? IdGenerator.refOnChangeId;
    this._onChanges.set(k, callback);
    return k as K extends undefined ? number : K;
  }

  removeOnChange(key: ReactiveChangeKey): ReactiveChangeHandler<any> | undefined {
    const callback = this._onChanges.get(key);
    this._onChanges.delete(key);
    return callback;
  }
}
