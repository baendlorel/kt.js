import { ChangeHandler, isRefLike, KTComputed, KTReactiveLike, KTReactiveType } from '@ktjs/core';

class PseudoRef<T> implements KTReactiveLike<T> {
  kid: number = -1;
  ktype = KTReactiveType.RefLike;
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

export const toPseudoRef = <T>(o: T) => (isRefLike(o) ? o : new PseudoRef(o));
