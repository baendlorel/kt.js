import { $is, $stringify } from '@ktjs/shared';
import { KTReactive, KTReactiveLike, KTReactiveType, KTSubReactive } from './reactive.js';

export class KTComputed<T> extends KTReactive<T> {
  readonly ktype = KTReactiveType.Computed;

  private readonly _calculator: () => T;
  private readonly _dependencies: Array<KTReactiveLike<any>>;
  private readonly _recalculateListener: () => void;
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

  constructor(calculator: () => T, dependencies: Array<KTReactiveLike<any>>) {
    super(calculator());
    this._calculator = calculator;
    this._dependencies = dependencies;
    this._recalculateListener = () => this._recalculate();
    for (let i = 0; i < dependencies.length; i++) {
      dependencies[i].addOnChange(this._recalculateListener, this._recalculateListener);
    }
  }

  notify(): this {
    return this._recalculate(true);
  }

  dispose(): this {
    if (this._disposed) {
      return this;
    }

    this._disposed = true;
    for (let i = 0; i < this._dependencies.length; i++) {
      this._dependencies[i].removeOnChange(this._recalculateListener);
    }
    return this;
  }
}

KTReactiveLike.prototype.map = function <U>(
  this: KTReactive<unknown>,
  c: (value: unknown) => U,
  dep?: Array<KTReactiveLike<any>>,
) {
  return new KTComputed(() => c(this.value), dep ? [this, ...dep] : [this]);
};

KTReactive.prototype.get = function <T>(this: KTReactive<T>, ...keys: Array<string | number>) {
  if (keys.length === 0) {
    $throw('At least one key is required to get a sub-computed.');
  }
  return new KTSubComputed(this, keys);
};

export class KTSubComputed<T> extends KTSubReactive<T> {
  readonly ktype = KTReactiveType.SubComputed;
}

export type KTComputedLike<T> = KTComputed<T> | KTSubComputed<T>;

/**
 * Create a computed value that automatically updates when its dependencies change.
 * @param calculator synchronous function that calculates the value of the computed. It should not have side effects.
 * @param dependencies an array of reactive dependencies that the computed value depends on. The computed value will automatically update when any of these dependencies change.
 */
export const computed = <T>(calculator: () => T, dependencies: Array<KTReactiveLike<any>>): KTComputed<T> =>
  new KTComputed(calculator, dependencies);
