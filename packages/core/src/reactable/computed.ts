import { $deepMatch, $is } from '@ktjs/shared';
import { KTReactive, KType } from './reactive.js';
import type { ChangeListener } from './types.js';
import { $createSubGetter, isReactive } from './common.js';

export class KTComputed<T> extends KTReactive<T> {
  readonly ktype = KType.Computed;
  private readonly _calculator: () => T;
  private readonly _dependencies: Array<KTReactive<any>>;
  private readonly _listener: () => void;
  private _disposed = false;

  private _recalculate(forced: boolean = false): this {
    const newValue = this._calculator();
    const oldValue = this._value;
    if (!$is(oldValue, newValue) || forced) {
      this._value = newValue;
      this._emit(newValue, oldValue);
    }
    return this;
  }

  constructor(calculator: () => T, dependencies: Array<KTReactive<any>>) {
    super(calculator());
    this._calculator = calculator;
    this._dependencies = dependencies;
    this._listener = () => this._recalculate();

    for (let i = 0; i < dependencies.length; i++) {
      dependencies[i].listen(this._listener);
    }
  }

  notify(): this {
    return this._recalculate(true);
  }

  unlisten(listener: ChangeListener<T>): this {
    super.unlisten(listener);
    if (this._listeners.size === 0) {
      this.dispose();
    }
    return this;
  }

  dispose(): void {
    if (this._disposed) {
      return;
    }

    this._disposed = true;
    for (let i = 0; i < this._dependencies.length; i++) {
      this._dependencies[i].unlisten(this._listener);
    }

    this._dependencies.length = 0;
    this._listeners.clear();
  }
}

const C = KTComputed;

KTReactive.prototype.map = function <U>(
  this: KTReactive<unknown>,
  getter: (value: unknown) => U,
  dep?: Array<KTReactive<any>>,
) {
  return new C(() => getter(this._value), dep ? [this, ...dep] : [this]);
};

KTReactive.prototype.is = function (this: KTReactive<unknown>, o: unknown) {
  return isReactive(o) ? new C(() => $is(this._value, o.value), [this, o]) : new C(() => $is(this._value, o), [this]);
};

KTReactive.prototype.match = function (this: KTReactive<object>, o: object) {
  return isReactive(o)
    ? new C(() => $deepMatch(this._value, o.value), [this, o])
    : new C(() => $deepMatch(this._value, o), [this]);
};

KTReactive.prototype.get = function <T>(this: KTReactive<T>, ...keys: Array<string | number>) {
  if (keys.length === 0) {
    $throw('At least one key is required to get a sub-computed.');
  }
  const getter = $createSubGetter(keys);
  return new C(() => getter(this._value), [this]);
};

/**
 * Create a computed value that automatically updates when its dependencies change.
 * @param calculator synchronous function that calculates the value of the computed. It should not have side effects.
 * @param dependencies an array of reactive dependencies that the computed value depends on. The computed value will automatically update when any of these dependencies change.
 */
export const computed = <T>(calculator: () => T, dependencies: Array<KTReactive<any>>): KTComputed<T> =>
  new C(calculator, dependencies);
