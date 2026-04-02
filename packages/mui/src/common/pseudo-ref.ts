import { isReactive, isReactiveLike } from '@ktjs/core';
import { KTMaybeReactive } from '@ktjs/core';
import { ChangeHandler, isComputedLike, isRefLike, KTComputed, KTReactiveLike, KTReactiveType } from '@ktjs/core';

class PseudoRef<T> implements KTReactiveLike<T> {
  kid: number = -1;
  ktype = KTReactiveType.ReactiveLike;
  public value: T;
  constructor(value: T) {
    this.value = value;
  }

  addOnChange(handler: ChangeHandler<T>, key?: any): this {
    return this;
  }

  removeOnChange(key: any): this {
    return this;
  }

  map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactiveLike<any>>): KTComputed<U> {
    return new PseudoRef(calculator(this.value)) as KTComputed<U>;
  }
}

/**
 * In order to reduce listeners and computations, we use this to wrap non-reactive values in a pseudo-ref.
 * This allows us to treat them uniformly with reactive values without the overhead of making them fully reactive.
 */
export const toPseudoRef = <T>(o: KTMaybeReactive<T>): KTReactiveLike<T> => {
  if (isReactiveLike<T>(o)) {
    return o;
  }
  return new PseudoRef(o) as unknown as KTReactiveLike<T>;
};
