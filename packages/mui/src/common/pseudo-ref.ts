import type { ChangeListener, KTComputed, KTReactive, KTMaybeReactive, KTRef } from '@ktjs/core';
import { $deepMatch } from '@ktjs/shared';
import { isKT, isRef, KType, ref } from '@ktjs/core';

class PseudoRef<T> {
  kid: number = -1;
  ktype = KType.Custom;
  public value: T;
  constructor(value: T) {
    this.value = value;
  }

  protected _emit(_newValue: T, _oldValue: T): this {
    throw new Error('Method not implemented.');
  }

  unlistenAll(): this {
    throw new Error('Method not implemented.');
  }

  notify(): this {
    throw new Error('Method not implemented.');
  }

  get(..._keys: Array<string | number>): KTComputed<any> {
    throw new Error('Method not implemented.');
  }

  dispose(): void {
    throw new Error('Method not implemented.');
  }

  listen(_listener: ChangeListener<T>, _key?: any): this {
    return this;
  }

  unlisten(_key: any): this {
    return this;
  }

  map<U>(calculator: (value: T) => U, _dependencies?: Array<KTReactive<any>>): PseudoRef<U> {
    return new PseudoRef(calculator(this.value));
  }

  is(o: T | KTReactive<T>): KTComputed<boolean> {
    if (isKT(o)) {
      return new PseudoRef(o.value === this.value) as any;
    } else {
      return new PseudoRef(o === this.value) as any;
    }
  }

  match(o: object | KTReactive<object>): KTComputed<boolean> {
    if (isKT(o)) {
      return new PseudoRef($deepMatch(this.value, o.value)) as any;
    } else {
      return new PseudoRef($deepMatch(this.value, o)) as any;
    }
  }
}

/**
 * In order to reduce listeners and computations, we use this to wrap non-reactive values in a pseudo-ref.
 * This allows us to treat them uniformly with reactive values without the overhead of making them fully reactive.
 */
export const toPseudoRef = <T>(o: KTMaybeReactive<T>): KTReactive<T> => {
  if (isKT<T>(o)) {
    return o;
  }
  return new PseudoRef(o) as unknown as KTReactive<T>;
};

/**
 * Assert `k-model` to be a ref-like object
 */
export const assertModel = <T = any>(props: any, defaultValue?: T): KTRef<T> => {
  // & props is an object. Won't use it in any other place
  if ('k-model' in props) {
    const model = props['k-model'];
    if (isRef(model)) {
      return model;
    } else {
      $throw(`k-model data must be a KTRef object, please use 'ref(...)' to wrap it.`);
    }
  }
  return ref(defaultValue) as KTRef<T>;
};
