import { $on } from '@/lib/dom.js';
import { $arrayPush } from '@/lib/native.js';

import { KBaseRef } from './base.js';

export class KValue<T = unknown> extends KBaseRef<T> {
  private _type: Factory<T>;

  /**
   * Shrink object items to an aggregated array to save memory and speed up iteration.
   *
   * **Pair Convention**
   * 1. element
   * 2. onchange field - means when `change` event is triggered, which field will be really changed.
   */
  private readonly _bound: KRefBound[number][] = [];

  constructor(value: T, _type: Factory<T>) {
    super(value);
    this._type = _type;
  }

  override set value(newValue: T) {
    this._value = newValue;

    // set all bound elements' value
    const len = this._bound.length;
    for (let i = 0; i < len; i += 2 satisfies KRefBound['length']) {
      // @ts-ignore
      // [INFO] [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = newValue;
    }
  }

  // #region value

  /**
   * Bind on element's field that would trigger `change` event.
   * - if the field does not trigger `change`, nothing will happen.
   * @param element an enhanced element
   * @param field mostly is `value` or `checked`
   * @returns `false` when `field` does not exist on `element`, otherwise `true`.
   */
  bindChange<El extends HTMLKEnhancedElement>(element: El, field: keyof El & string): boolean {
    if (!(field in element)) {
      return false;
    }

    $on.call(element, 'change', () => {
      this._value = this._type(element[field]);
      this._spreadChange(this._value);
    });

    $arrayPush.call(this._bound, element, field);

    return true;
  }

  /**
   * When one element's field is changed, spread it to other registered elements.
   * @param newValue
   */
  private _spreadChange(newValue: T) {
    const len = this._bound.length;

    for (let i = 0; i < len; i += 2 satisfies KRefBound['length']) {
      // @ts-ignore
      // [INFO] [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = newValue;
    }
  }

  // #endregion
}
