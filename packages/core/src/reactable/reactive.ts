import { $stringify } from '@ktjs/shared';
import { IdGenerator } from '../common.js';

type ChangeHandler<T> = (newValue: T, oldValue: T) => void;
type ChangeHandlerKey = string | number;

export const enum KTReactiveType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
  SubComputed,
}

export abstract class KTReactiveBase<T, Type extends KTReactiveType> {
  readonly isKT = true as const;

  abstract readonly type: Type;

  abstract get value(): T;
}

export abstract class KTReactive<
  T,
  Type extends KTReactiveType.Ref | KTReactiveType.Computed = KTReactiveType.Ref | KTReactiveType.Computed,
> extends KTReactiveBase<T, Type> {
  protected _value: T;

  protected readonly _changeHandlers = new Map<ChangeHandlerKey, ChangeHandler<any>>();

  constructor(value: T) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  _emit(newValue: T, oldValue: T): this {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
    return this;
  }

  addOnChange(handler: ChangeHandler<T>, key?: ChangeHandlerKey): this {
    this._changeHandlers.set(key ?? IdGenerator.kid, handler);
    return this;
  }

  removeOnChange(key: ChangeHandlerKey): this {
    this._changeHandlers.delete(key);
    return this;
  }

  notify(): this {
    return this._emit(this._value, this._value);
  }

  abstract map<U>(calculator: (value: T) => U, dependencies?: Array<KTReactive<any>>): unknown;

  abstract get(...keys: PropertyKey[]): unknown;
}

export abstract class KTSubReactive<
  T,
  Type extends KTReactiveType.SubRef | KTReactiveType.SubComputed,
  Source extends KTReactiveBase<any, KTReactiveType>,
> extends KTReactiveBase<T, Type> {
  readonly source: Source;

  protected readonly _getter: (source: Source) => T;

  constructor(source: Source, paths: string[]) {
    super();
    this.source = source;
    this._getter = new Function('v', `return ${paths.map((p) => `v[${$stringify(p)}]`).join('')}`) as any;
  }

  get value() {
    return this._getter(this.source);
  }
}
