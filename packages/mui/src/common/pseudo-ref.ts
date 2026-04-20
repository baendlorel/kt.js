import type { KTMaybeReactive, KTReactiveLike } from '@ktjs/core';

import { $deepMatch } from '@ktjs/shared';
import { isReactive, isReactiveLike } from '@ktjs/core';
import { ChangeHandler, KTComputed, KTReactive, KTReactiveType } from '@ktjs/core';

class PseudoRef<T> {
  kid: number = -1;
  ktype = KTReactiveType.Pseudo;
  public value: T;
  constructor(value: T) {
    this.value = value;
  }

  protected _emit(newValue: T, oldValue: T): this {
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

  addOnChange(handler: ChangeHandler<T>, key?: any): this {
    return this;
  }

  removeOnChange(key: any): this {
    return this;
  }

  map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactiveLike<any>>): PseudoRef<U> {
    return new PseudoRef(calculator(this.value));
  }

  is(o: T | KTReactiveLike<T>): KTComputed<boolean> {
    if (isReactiveLike(o)) {
      return new PseudoRef(o.value === this.value) as any;
    } else {
      return new PseudoRef(o === this.value) as any;
    }
  }

  match(o: object | KTReactiveLike<object>): KTComputed<boolean> {
    if (isReactiveLike(o)) {
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
  if (isReactive<T>(o)) {
    return o;
  }
  return new PseudoRef(o) as unknown as KTReactive<T>;
};
