import { $stringify } from '@ktjs/shared';

export type ChangeHandler<T> = (newValue?: T, oldValue?: T) => void;

export const enum KTReactiveType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
  SubComputed,
}

let kid = 1;
let handlerId = 1;

export abstract class KTReactiveBase<T, Type extends KTReactiveType> {
  readonly kid = kid++;

  abstract readonly type: Type;

  abstract get value(): T;

  abstract addOnChange(handler: ChangeHandler<T>, key?: any): this;

  abstract removeOnChange(key: any): this;
}

type ReactiveType = KTReactiveType.Ref | KTReactiveType.Computed;
export abstract class KTReactive<T, Type extends ReactiveType = ReactiveType> extends KTReactiveBase<T, Type> {
  /**
   * @internal
   */
  protected _value: T;

  /**
   * @internal
   */
  protected readonly _changeHandlers = new Map<any, ChangeHandler<any>>();

  constructor(value: T) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(_newValue: T) {
    $warn('Setting value to a non-ref instance takes no effect.');
  }

  /**
   * @internal
   */
  protected _emit(newValue: T, oldValue: T): this {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
    return this;
  }

  addOnChange(handler: ChangeHandler<T>, key: any = handlerId++): this {
    if (this._changeHandlers.has(key)) {
      $throw(`Overriding existing change handler with key ${$stringify(key)}.`);
    }
    this._changeHandlers.set(key, handler);
    return this;
  }

  removeOnChange(key: any): this {
    this._changeHandlers.delete(key);
    return this;
  }

  clearOnChange(): this {
    this._changeHandlers.clear();
    return this;
  }

  notify(): this {
    return this._emit(this._value, this._value);
  }

  abstract map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactive<any>>): unknown;

  /**
   * Although it's possible to use non-string keys, it's not recommended since it may cause unexpected issues.
   */
  abstract get(...keys: (string | number)[]): unknown;
}

type SubReactiveType = KTReactiveType.SubRef | KTReactiveType.SubComputed;

export abstract class KTSubReactive<
  T,
  Type extends SubReactiveType,
  Source extends KTReactive<any>,
> extends KTReactiveBase<T, Type> {
  readonly source: Source;

  /**
   * @internal
   */
  protected readonly _getter: (sv: Source['value']) => T;

  constructor(source: Source, paths: string) {
    super();
    this.source = source;
    this._getter = new Function('s', `return s${paths}`) as (sv: Source['value']) => T;
  }

  get value() {
    // @ts-expect-error _value is private
    return this._getter(this.source._value);
  }

  addOnChange(handler: ChangeHandler<T>, key?: any): this {
    this.source.addOnChange((newSourceValue, oldSourceValue) => {
      const oldValue = this._getter(oldSourceValue);
      const newValue = this._getter(newSourceValue);
      handler(newValue, oldValue);
    }, key);
    return this;
  }

  removeOnChange(key: any): this {
    this.source.removeOnChange(key);
    return this;
  }
}
