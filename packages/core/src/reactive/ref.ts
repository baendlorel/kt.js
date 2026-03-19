import type { JSX } from '../types/jsx.js';
import type { ChangeHandler, ChangeHandlerKey } from './reactive.js';

import { $emptyFn, $is } from '@ktjs/shared';
import { isRef, KTReactiveType } from './core.js';
import { KTReactive } from './reactive.js';

export class KTRef<T> extends KTReactive<T> {
  ktType = KTReactiveType.Ref;

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
  notify(oldValue: T = this._value, newValue: T = this._value, handlerKeys?: ChangeHandlerKey[]): this {
    return this._emit(newValue, oldValue, handlerKeys);
  }

  get draft() {
    // todo add to microtask queue
    return this._value;
  }

  set draft(newValue: T) {
    const oldValue = this._value;
    this._value = newValue;
    // todo add to microtask queue
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
export const ref = <T = JSX.Element>(value?: T, onChange?: ChangeHandler<T>) => new KTRef(value as any, onChange);

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
