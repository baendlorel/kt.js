import { type KTBaseReactable, KTReactive, KTReactiveType } from './base.js';
import type { ChangeHandler, KTDerivable, KTDerived } from './reactable.js';

export class KTComputed<T>
  implements
    KTBaseReactable<T, KTReactiveType.Computed>,
    KTDerivable<T, KTReactiveType.Computed>,
    KTDerived<T, KTReactiveType.Computed>
{
  readonly isKT = true;
  readonly type = KTReactiveType.Computed;
  private _value: T;
  private readonly _changeHandlers = new Map<string | number, ChangeHandler<any>>();
  /**
   * @internal
   */
  private _calculator: () => T;

  /**
   * @internal
   */
  private _recalculate(forceEmit: boolean = false): this {
    const oldValue = this._value;
    const newValue = this._calculator();
    if ($is(oldValue, newValue)) {
      if (forceEmit) {
        this._emit(newValue, oldValue);
      }
      return this;
    }
    this._value = newValue;
    this._emit(newValue, oldValue);
    return this;
  }

  constructor(_calculator: () => T, dependencies: Array<KTReactive<unknown>>) {
    this._calculator = _calculator;

    for (let i = 0; i < dependencies.length; i++) {
      dependencies[i].addOnChange(() => this._recalculate());
    }

    this._value = _calculator();
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value() {
    return this._value;
  }

  set value(_newValue: T) {
    $warn(`'value' of Computed are read-only.`);
  }
}
