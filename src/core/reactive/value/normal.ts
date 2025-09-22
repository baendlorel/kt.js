import { NotProvided } from '@/consts/sym.js';
import { $on, $arrayPush, $isInputElement } from '@/lib/index.js';

import { KValueSimple } from './simple.js';
import { detectOnChangeField } from './detect-field.js';

type VToE = (value: any) => any;
type EToV = (value: any) => any;
const trivial: AnyFn = (v) => v;

export class KValue<T extends any> extends KValueSimple<T> {
  /**
   * Shrink object items to an aggregated array to save memory and speed up iteration.
   *
   * **Pair Convention**
   * 1. element
   * 2. onchange field - means when `change` event is triggered, which field will be really changed.
   * 3. VToE: transfer from value to element.value
   * 4. EToV: transfer from element.value to value
   */
  protected override readonly _bound: any[] = [];

  constructor(value: T) {
    super(value);
  }

  override set value(newValue: T) {
    this._value = newValue;

    // set all bound elements' value
    const len = this._bound.length;
    for (let i = 0; i < len; i += 4 satisfies KValueBoundTuple['length']) {
      //& element ↓          field ↓                vtoe ↓
      this._bound[i][this._bound[i + 1]] = this._bound[i + 2](newValue);
    }
  }

  /**
   * Bind on element's field that would trigger `change` event.
   * - only works on `<input>`, `<select>`, `<textarea>`
   * - if the field does not trigger `change`, nothing will happen.
   * @param element an enhanced element
   * @param field mostly is `value` or `checked`
   * @returns this
   */
  override bindChange<E extends HTMLKEnhancedInputElement>(
    element: E,
    field: ChangeTriggerField | otherstring = NotProvided,
    vtoe: VToE = trivial,
    etov: EToV = trivial
  ): this {
    if (!$isInputElement(element)) {
      throw new TypeError(
        `[__NAME__:bindChange] element must be <input>|<select>|<textarea>, got <${(element as HTMLElement).tagName}>`
      );
    }

    if (field === NotProvided) {
      field = detectOnChangeField(element);
    }

    if (!(field in element)) {
      return this;
    }

    $on.call(element, 'change', () => {
      const v = (element as any)[field] as T;
      this._value = etov(v);
      this._spreadChange(v);
    });

    $arrayPush.call(this._bound, element, field, vtoe, etov);

    return this;
  }
}
