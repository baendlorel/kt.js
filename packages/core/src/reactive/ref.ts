import type { KTReactive, ReactiveChangeHandler } from '../types/reactive.js';
import { $entries, $replaceNode, $throw } from '@ktjs/shared';

export class KTRef<T> implements KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT = true as const;

  /**
   * @internal
   */
  private _value: T;

  /**
   * @internal
   */
  private _onChanges: Array<ReactiveChangeHandler<T>>;

  constructor(_value: T, _onChanges: Array<ReactiveChangeHandler<T>>) {
    this._value = _value;
    this._onChanges = _onChanges;
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value() {
    return this._value;
  }

  set value(newValue: T) {
    if (newValue === this._value) {
      return;
    }

    const oldValue = this._value;
    $replaceNode(oldValue, newValue);
    this._value = newValue;
    for (let i = 0; i < this._onChanges.length; i++) {
      this._onChanges[i](newValue, oldValue);
    }
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

export const isKTRef = <T = any>(obj: any): obj is KTRef<T> => obj?.isKT === true;

/**
 * Reference to the created HTML element.
 * - **Only** respond to `ref.value` changes, not reactive to internal changes of the element.
 * - can alse be used to store normal values, but it is not reactive.
 * - if the value is already a `KTRef`, it will be returned **directly**.
 * @param value mostly an HTMLElement
 */
export function ref<T = JSX.Element>(value?: T | KTRef<T>, onChange?: ReactiveChangeHandler<T>): KTRef<T> {
  if (isKTRef(value)) {
    if (onChange) {
      value.addOnChange(onChange);
    }
    return value;
  }
  return new KTRef<T>(value as any, onChange ? [onChange] : []);
}

export function deref<T = JSX.Element>(value: T | KTRef<T>): T {
  return isKTRef<T>(value) ? value.value : value;
}

export type KTSurfaceRef<T extends Object> = {
  [K in keyof T]: KTRef<T[K]>;
} & {
  /**
   * Get the dereferenced object like the original one
   */
  kcollect: () => T;
};

function kcollect<T extends Object>(this: KTSurfaceRef<T>): T {
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
export const surfaceRef = <T extends Object>(obj: T): KTSurfaceRef<T> => {
  const entries = $entries(obj);
  const newObj = { kcollect } as KTSurfaceRef<T>;
  for (let i = 0; i < entries.length; i++) {
    (newObj[entries[i][0]] as KTRef<any>) = ref(entries[i][1]);
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
    if (!kmodel?.isKT) {
      $throw(`k-model data must be a KTRef object, please use 'ref(...)' to wrap it.`);
    }
    return kmodel;
  }
  return ref(defaultValue);
};
