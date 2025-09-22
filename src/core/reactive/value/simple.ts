import { $on } from '@/lib/dom.js';
import { $arrayPush } from '@/lib/native.js';

import { KBaseRef } from '../base.js';

export class KValueSimple<T extends any> extends KBaseRef<T> {
  /**
   * Shrink object items to an aggregated array to save memory and speed up iteration.
   *
   * **Pair Convention**
   * 1. element
   * 2. onchange field - means when `change` event is triggered, which field will be really changed.
   */
  protected readonly _bound: any[] = [];

  constructor(value: T) {
    super(value);
  }

  override set value(newValue: T) {
    this._value = newValue;

    // set all bound elements' value
    const len = this._bound.length;
    for (let i = 0; i < len; i += 2 satisfies KValueSimpleBoundTuple['length']) {
      //& element ↓          field ↓
      this._bound[i][this._bound[i + 1]] = newValue;
    }
  }

  /**
   * Bind on element's field that would trigger `change` event.
   * - if the field does not trigger `change`, nothing will happen.
   * @param element an enhanced element
   * @param field mostly is `value` or `checked`
   * @returns this
   */
  bindChange<E extends HTMLKEnhancedElement>(
    element: E,
    field: ChangeTriggerField | otherstring
  ): this {
    if (!(field in element)) {
      return this;
    }

    $on.call(element, 'change', () => {
      const v = (element as any)[field] as T;
      this._value = v;
      this._spreadChange(v);
    });

    $arrayPush.call(this._bound, element, field);

    return this;
  }

  /**
   * When one element's field is changed, spread it to other registered elements.
   * @param newElementValue must use the element's field value, not `this._value`
   */
  protected _spreadChange(newElementValue: T) {
    const len = this._bound.length;

    for (let i = 0; i < len; i += 2 satisfies KValueSimpleBoundTuple['length']) {
      //& element ↓          field ↓
      this._bound[i][this._bound[i + 1]] = newElementValue;
    }
  }
}
