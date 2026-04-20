import { $deepMatch, $is } from '@ktjs/shared';
import { KTReactive, KType, nextHandlerId } from './reactive.js';
import { $createSubGetter, isReactiveLike } from './common.js';

export class KTComputed<T> extends KTReactive<T> {
  readonly ktype = KType.Computed;

  /**
   * @internal
   */
  private readonly _calculator: () => T;

  /**
   * @internal
   */
  private readonly _dependencies: Array<KTReactive<any>>;

  /**
   * @internal
   */
  private readonly _handler: () => void;

  /**
   * @internal
   */
  protected readonly _handlerKeys: string[];
  private _disposed = false;

  private _recalculate(forced: boolean = false): this {
    const newValue = this._calculator();
    const oldValue = this.v;
    if (!$is(oldValue, newValue) || forced) {
      this.v = newValue;
      this._emit(newValue, oldValue);
    }
    return this;
  }

  constructor(calculator: () => T, dependencies: Array<KTReactive<any>>) {
    super(calculator());
    this._calculator = calculator;
    this._dependencies = dependencies;
    this._handler = () => this._recalculate();
    this._handlerKeys = [];
    this._handlerKeys.length = dependencies.length;

    for (let i = 0; i < dependencies.length; i++) {
      // & Maybe use ? nextHandlerId(isSubRef(dep) ? dep.source.kid : dep.kid));
      dependencies[i].addOnChange(this._handler, (this._handlerKeys[i] = nextHandlerId(dependencies[i].kid)));
    }
  }

  notify(): this {
    return this._recalculate(true);
  }

  dispose(): void {
    if (this._disposed) {
      return;
    }

    this._disposed = true;
    for (let i = 0; i < this._dependencies.length; i++) {
      this._dependencies[i].removeOnChange(this._handlerKeys[i]);
    }

    this._dependencies.length = 0;
    this._changeHandlers.clear();
  }
}

const C = KTComputed;

KTReactive.prototype.map = function <U>(
  this: KTReactive<unknown>,
  getter: (value: unknown) => U,
  dep?: Array<KTReactive<any>>,
) {
  return new C(() => getter(this.v), dep ? [this, ...dep] : [this]);
};

KTReactive.prototype.is = function (this: KTReactive<unknown>, o: unknown) {
  return isReactiveLike(o) ? new C(() => $is(this.v, o.value), [this, o]) : new C(() => $is(this.v, o), [this]);
};

KTReactive.prototype.match = function (this: KTReactive<object>, o: object) {
  return isReactiveLike(o)
    ? new C(() => $deepMatch(this.v, o.value), [this, o])
    : new C(() => $deepMatch(this.v, o), [this]);
};

KTReactive.prototype.get = function <T>(this: KTReactive<T>, ...keys: Array<string | number>) {
  if (keys.length === 0) {
    $throw('At least one key is required to get a sub-computed.');
  }
  const getter = $createSubGetter(keys);
  return new C(() => getter(this.v), [this]);
};

/**
 * Create a computed value that automatically updates when its dependencies change.
 * @param calculator synchronous function that calculates the value of the computed. It should not have side effects.
 * @param dependencies an array of reactive dependencies that the computed value depends on. The computed value will automatically update when any of these dependencies change.
 */
export const computed = <T>(calculator: () => T, dependencies: Array<KTReactive<any>>): KTComputed<T> =>
  new C(calculator, dependencies);
