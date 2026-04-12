import type { KTReactiveLike } from './types.js';

import { $deepMatch, $is } from '@ktjs/shared';
import { KTReactive, KTReactiveType, KTSubReactive, nextHandlerId } from './reactive.js';
import { $createSubGetter, isReactive, isSubReactive } from './common.js';

export class KTComputed<T> extends KTReactive<T> {
  readonly ktype = KTReactiveType.Computed;

  /**
   * @internal
   */
  private readonly _calculator: () => T;
  /**
   * @internal
   */
  private readonly _dependencies: Array<KTReactiveLike<any>>;
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
    this._handlerKeys = dependencies.map(() => nextHandlerId(this.kid));

    const uniqueSources = new Set<KTReactive<any>>();
    for (let i = 0; i < dependencies.length; i++) {
      const dep = dependencies[i];
      if (isSubReactive(dep)) {
        if (uniqueSources.has(dep.source)) {
          continue;
        } else {
          uniqueSources.add(dep.source);
        }
      }
      dep.addOnChange(this._handler, this._handlerKeys[i]);
    }
    uniqueSources.clear();
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

KTReactive.prototype.map = function <U>(
  this: KTReactive<unknown>,
  c: (value: unknown) => U,
  dep?: Array<KTReactive<any>>,
) {
  return new KTComputed(() => c(this.value), dep ? [this, ...dep] : [this]);
};

KTReactive.prototype.is = function (this: KTReactive<unknown>, o: unknown) {
  if (isReactive(o)) {
    return new KTSubComputed(this, (v) => $is(v, o.value), o);
  } else {
    return new KTSubComputed(this, (v) => $is(v, o));
  }
};

KTReactive.prototype.match = function (this: KTReactive<object>, o: object) {
  if (isReactive(o)) {
    return new KTSubComputed(this, (v) => $deepMatch(v, o.value), o);
  } else {
    return new KTSubComputed(this, (v) => $deepMatch(v, o));
  }
};

KTReactive.prototype.get = function <T>(this: KTReactive<T>, ...keys: Array<string | number>) {
  if (keys.length === 0) {
    $throw('At least one key is required to get a sub-computed.');
  }
  return new KTSubComputed(this, $createSubGetter(keys));
};

/**
 * Create a computed value that automatically updates when its dependencies change.
 * @param calculator synchronous function that calculates the value of the computed. It should not have side effects.
 * @param dependencies an array of reactive dependencies that the computed value depends on. The computed value will automatically update when any of these dependencies change.
 */
export const computed = <T>(calculator: () => T, dependencies: Array<KTReactiveLike<any>>): KTComputed<T> =>
  new KTComputed(calculator, dependencies);

// # SubComputed

export class KTSubComputed<T> extends KTSubReactive<T> {
  readonly ktype = KTReactiveType.SubComputed;

  /**
   * Used for `reactive.is` and `reactive.match` to track the single dependency.
   * @internal
   */
  private readonly _dependency?: KTReactive<any>;

  constructor(source: KTReactive<any>, getter: (sv: KTReactive<any>['value']) => T, dependency?: KTReactive<any>) {
    super(source, getter);
    this._dependency = dependency;

    if (dependency) {
      this._handlerKeys.push(nextHandlerId(this.kid));
      dependency.addOnChange(this._handler, this._handlerKeys[1]);
    }
  }

  get value() {
    return this._value;
  }

  dispose(): void {
    this._handlerKeys.forEach((key) => this.source.removeOnChange(key));
    this._dependency?.removeOnChange(this._handlerKeys[1]);
  }
}

export type KTComputedLike<T> = KTComputed<T> | KTSubComputed<T>;
