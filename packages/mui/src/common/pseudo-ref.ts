import type { KTMaybeReactive } from '@ktjs/core';
import type { ChangeHandler, KTComputed, KTReactive } from '@ktjs/core';

import { $deepMatch } from '@ktjs/shared';
import { isKT, KType } from '@ktjs/core';

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

  clearOnChange(): this {
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

  addOnChange(_handler: ChangeHandler<T>, _key?: any): this {
    return this;
  }

  removeOnChange(_key: any): this {
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
