import { $emptyFn, $entries, $is } from '@ktjs/shared';
import type { KTReactive, ReactiveChangeHandler, ReactiveChangeKey } from '../types/reactive.js';
import type { JSX } from '../types/jsx.js';
import { isComputed, isRef, KTReactiveType } from './core.js';
import { IdGenerator } from '../common.js';

export class KTRef<T> implements KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT = true as const;

  ktType = KTReactiveType.REF;

  /**
   * @internal
   */
  private _value: T;

  /**
   * @internal
   */
  private _onChanges: Map<ReactiveChangeKey, ReactiveChangeHandler<T>>;

  /**
   * @internal
   */
  private _emit(newValue: T, oldValue: T) {
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
  notify() {
    this._emit(this._value, this._value);
  }

  /**
   * Mutate current value in-place and notify listeners once.
   *
   * @example
   * const items = ref<number[]>([1, 2]);
   * items.mutate((list) => list.push(3));
   */
  mutate<R = void>(mutator: (currentValue: T) => R): R {
    if (typeof mutator !== 'function') {
      $throw('KTRef.mutate: mutator must be a function');
    }
    const oldValue = this._value;
    const result = mutator(this._value);
    this._emit(this._value, oldValue);
    return result;
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

  removeOnChange(key: ReactiveChangeKey): ReactiveChangeHandler<T> | undefined {
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
export function ref<T = JSX.Element>(value?: T, onChange?: ReactiveChangeHandler<T>): KTRef<T> {
  return new KTRef<T>(value as any, onChange);
}

/**
 * Convert a value to `KTRef`.
 * - Returns the original value if it is already a `KTRef`.
 * - Throws error if the value is a `KTComputed`.
 * - Otherwise wraps the value with `ref()`.
 * @param o value to convert
 */
export const toRef = <T = any>(o: any): KTRef<T> => {
  if (isRef(o)) {
    return o;
  } else if (isComputed(o)) {
    $throw('Computed values cannot be used as KTRef.');
  } else {
    return ref(o);
  }
};

export type KTSurfaceRef<T extends object> = {
  [K in keyof T]: KTRef<T[K]>;
} & {
  /**
   * Get the dereferenced object like the original one
   */
  kcollect: () => T;
};

function kcollect<T extends object>(this: KTSurfaceRef<T>): T {
  const newObj: any = {};
  const entries = $entries(this);
  for (let i = 0; i < entries.length; i++) {
    const key = entries[i][0];
    if (key === 'kcollect') {
      continue;
    }
    newObj[key] = entries[i][1].value;
  }
  return newObj;
}

/**
 * Make all first-level properties of the object a `KTRef`.
 * - `obj.a.b` is not reactive
 */
export const surfaceRef = <T extends object>(obj: T): KTSurfaceRef<T> => {
  const entries = $entries(obj);
  const newObj = { kcollect } as KTSurfaceRef<T>;
  for (let i = 0; i < entries.length; i++) {
    (newObj[entries[i][0]] as KTReactive<any>) = ref(entries[i][1]);
  }
  return newObj;
};

// # asserts

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
