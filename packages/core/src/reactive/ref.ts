import { $emptyFn, $is } from '@ktjs/shared';
import type { ChangeHandler, Key, KTReactive } from '../types/reactive.js';
import type { JSX } from '../types/jsx.js';

import { IdGenerator } from '../common.js';
import { isRef, KTReactiveType } from './core.js';
import { KTComputed, computed } from './index.js';

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
  protected _onChanges: Map<Key, ChangeHandler<T>>;

  /**
   * @internal
   */
  protected _emit(newValue: T, oldValue: T, handlerKeys?: Key[]) {
    if (handlerKeys) {
      for (let i = 0; i < handlerKeys.length; i++) {
        this._onChanges.get(handlerKeys[i])?.(newValue, oldValue);
      }
      return this;
    }

    this._onChanges.forEach((c) => c(newValue, oldValue));
    return this;
  }

  constructor(_value: T, _onChange?: ChangeHandler<T>) {
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
  notify(oldValue: T = this._value, newValue: T = this._value, handlerKeys?: Key[]): this {
    return this._emit(newValue, oldValue, handlerKeys);
  }

  toComputed<R>(calculator: (currentValue: T) => R, dependencies?: KTReactive<any>[]): KTComputed<R> {
    return computed(() => calculator(this.value), dependencies ? [this, ...dependencies] : [this]);
  }

  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
   * @param key Optional key to identify the callback, allowing multiple listeners on the same ref and individual removal. If not provided, a unique ID will be generated.
   */
  addOnChange(callback: ChangeHandler<T>, key?: Key): this {
    if (typeof callback !== 'function') {
      $throw('KTRef.addOnChange: callback must be a function');
    }
    const k = key ?? IdGenerator.refOnChangeId;
    this._onChanges.set(k, callback);
    return this;
  }

  removeOnChange(key: Key): ChangeHandler<any> | undefined {
    const callback = this._onChanges.get(key);
    this._onChanges.delete(key);
    return callback;
  }
}

// todo 编译时期，插件要尽量分析出谁是谁，并基于最大限度的覆写支持，避免运行时for循环创建ref
/**
 * Create a plain `KTRef` object.
 * - use `refObject.value` to get/set plain data
 * - use `refObject.toComputed(calculator)` to create a computed value based on this ref
 * - use `refObject.draft` to set too, but it will recalculate in the next microtask. Useful for deep objects, `Map`, `Set` or other custom objects
 *
 * @param value any data
 * @param onChange event handler triggered when the value changes, with signature `(newValue, oldValue) => void`
 * @returns
 */
const ref = <T = JSX.Element>(value?: T, onChange?: ChangeHandler<T>) => new KTRef(value as any, onChange);

export { ref };

/**
 * Assert k-model to be a ref object
 */
export const $modelOrRef = <T = any>(props: any, defaultValue?: T): KTRef<T> => {
  // & props is an object. Won't use it in any other place
  if ('k-model' in props) {
    const kmodel = props['k-model'];
    if (isRef(kmodel)) {
      return kmodel;
    } else {
      $throw(`k-model data must be a KTRef object, please use 'ref(...)' to wrap it.`);
    }
  }
  return ref(defaultValue) as KTRef<T>;
};

const $refSetter = <T>(props: { ref?: KTRef<T> }, node: T) => (props.ref!.value = node);
type RefSetter<T> = (props: { ref?: KTRef<T> }, node: T) => void;

/**
 * Whether `props.ref` is a `KTRef` only needs to be checked in the initial render
 */
export const $initRef = <T extends Node>(props: { ref?: KTRef<T> }, node: T): RefSetter<T> => {
  if (!('ref' in props)) {
    return $emptyFn;
  }

  const r = props.ref;
  if (isRef(r)) {
    r.value = node;
    return $refSetter;
  } else {
    $throw('Fragment: ref must be a KTRef');
  }
};
