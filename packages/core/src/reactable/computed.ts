import { $is, $keys } from '@ktjs/shared';
import { KTReactive, KTReactiveLike, KTReactiveType, KTSubReactive } from './reactive.js';
import { isReactiveLike, isSubComputed, isSubReactive } from './common.js';

export class KTComputed<T> extends KTReactive<T> {
  readonly ktype = KTReactiveType.Computed;

  private readonly _calculator: () => T;
  private readonly _dependencies: Array<KTReactiveLike<any>>;
  private readonly _handler: () => void;
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
    this._handler = () => this._recalculate();
    for (let i = 0; i < dependencies.length; i++) {
      const dep = dependencies[i];
      if (isSubReactive(dep)) {
        // @ts-expect-error _changeHandlers is protected
        dep.source._changeHandlers.set(this._handler, this._handler);
      } else {
        dep.addOnChange(this._handler, this._handler);
      }
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
      this._dependencies[i].removeOnChange(this._handler);
    }

    this._dependencies.length = 0;
    this._changeHandlers.clear();

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

KTReactiveLike.prototype.is = function (this: KTReactive<unknown>, o: unknown) {
  if (isReactiveLike(o)) {
    return new KTComputed(() => $is(this.value, o.value), [this, o]);
  } else {
    return new KTComputed(() => $is(this.value, o), [this]);
  }
};

KTReactiveLike.prototype.match = function (this: KTReactive<object>, o: object) {
  if (isReactiveLike(o)) {
    return new KTComputed(() => {
      const v = o.value;
      const keys = $keys(v);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (k in this.value) {
          if (!$is((this.value as any)[k], v[k])) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    }, [this, o]);
  } else {
    return new KTComputed(() => {
      const keys = $keys(o);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (k in this.value) {
          if (!$is((this.value as any)[k], o[k])) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    }, [this]);
  }
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
