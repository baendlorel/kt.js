import { $deepMatch, $is } from '@ktjs/shared';
import { ChangeHandler, KTReactive, KTReactiveType, KTSubReactive } from './reactive.js';
import { $createSubGetter, isReactive, isSubReactive } from './common.js';

export class KTComputed<T> extends KTReactive<T> {
  readonly ktype = KTReactiveType.Computed;

  private readonly _calculator: () => T;
  private readonly _dependencies: Array<KTReactive<any>>;
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

  constructor(calculator: () => T, dependencies: Array<KTReactive<any>>) {
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

  dispose(): void {
    if (this._disposed) {
      return;
    }

    this._disposed = true;
    for (let i = 0; i < this._dependencies.length; i++) {
      this._dependencies[i].removeOnChange(this._handler);
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
  return new KTSubComputed(this, (v) => $is(v, o));
};

KTReactive.prototype.match = function (this: KTReactive<object>, o: object) {
  return new KTSubComputed(this, (v) => $deepMatch(v, o));
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
export const computed = <T>(calculator: () => T, dependencies: Array<KTReactive<any>>): KTComputed<T> =>
  new KTComputed(calculator, dependencies);

// # SubComputed

export class KTSubComputed<T> extends KTSubReactive<T> {
  readonly ktype = KTReactiveType.SubComputed;

  /**
   * @internal
   */
  private readonly _handler: ChangeHandler<any>;

  /**
   * @internal
   */
  private _value: T;

  constructor(source: KTReactive<any>, getter: (sv: KTReactive<any>['value']) => T) {
    super(source);
    // @ts-expect-error _value is protected
    this._value = getter(source._value);
    this._handler = (v) => (this._value = getter(v));

    source.addOnChange(this._handler, this._handler);
  }

  get value() {
    return this._value;
  }

  dispose(): void {
    this.source.removeOnChange(this._handler);
  }
}

export type KTComputedLike<T> = KTComputed<T> | KTSubComputed<T>;
