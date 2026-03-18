import { $emptyFn, $is } from '@ktjs/shared';
import type { KTReactive, ReactiveChangeHandler, ReactiveChangeKey } from '../types/reactive.js';
import type { JSX } from '../types/jsx.js';
import { isRef, KTReactiveType } from './core.js';
import { IdGenerator } from '../common.js';
import { computed, type KTComputed } from './computed.js';
import type { KTAutoRef } from './refs/ref.js';

type RefFactoryMatcher = (value: unknown) => boolean;
type RefFactoryCreator = (value: unknown, onChange?: ReactiveChangeHandler<any>) => KTRef<any>;

const refFactories: Array<{
  match: RefFactoryMatcher;
  create: RefFactoryCreator;
}> = [];

export function registerRefFactory(match: RefFactoryMatcher, create: RefFactoryCreator) {
  refFactories.push({ match, create });
}

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

/**
 * Reference to the created HTML element.
 * - **Only** respond to `ref.value` changes, not reactive to internal changes of the element.
 * - can alse be used to store normal values, but it is not reactive.
 * - if the value is already a `KTRef`, it will be returned **directly**.
 * @param value mostly an HTMLElement
 */
export function ref<T>(value?: T, onChange?: ReactiveChangeHandler<T>): KTAutoRef<T> {
  for (let i = 0; i < refFactories.length; i++) {
    if (refFactories[i].match(value)) {
      return refFactories[i].create(value, onChange) as KTAutoRef<T>;
    }
  }
  return new KTRef<T>(value as any, onChange) as KTAutoRef<T>;
}

// todo 编译时期，插件要尽量分析出谁是谁，并基于最大限度的覆写支持，避免运行时for循环创建ref
export const createRef = <T = JSX.Element>(value?: T, onChange?: ReactiveChangeHandler<T>) =>
  new KTRef<T>(value as any, onChange);

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
