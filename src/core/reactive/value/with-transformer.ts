import { $on } from '@/lib/dom.js';
import { $arrayPush } from '@/lib/native.js';
import { KValueSimple } from './simple.js';

export class KValue<T> extends KValueSimple<T> {
  /**
   * Transform value to element's field value.
   */
  private _vtoe: Factory<T>;

  /**
   * Transform element's field value to value.
   */
  private _etov: Factory<T>;

  constructor(value: T, vtoe: Factory<T>, etov: Factory<T>) {
    super(value);
    this._etov = etov;
    this._vtoe = vtoe;
  }

  override set value(newValue: T) {
    this._value = newValue;

    // set all bound elements' value
    const len = this._bound.length;
    for (let i = 0; i < len; i += 2 satisfies KRefBound['length']) {
      // @ts-ignore
      // [INFO] [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = this._vtoe(newValue);
    }
  }

  /**
   * Bind on element's field that would trigger `change` event.
   * - if the field does not trigger `change`, nothing will happen.
   * @param element an enhanced element
   * @param field mostly is `value` or `checked`
   * @returns this
   */
  bindChange<El extends HTMLKEnhancedElement>(
    element: El,
    field: ChangeTriggerField | otherstring
  ): this {
    if (!(field in element)) {
      return this;
    }

    $on.call(element, 'change', () => {
      this._value = this._etov(element[field]);
      this._spreadChange(element[field] as T);
    });

    $arrayPush.call(this._bound, element, field);

    return this;
  }
}
