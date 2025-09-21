import { $on } from '@/lib/dom.js';

export class KRef<T = unknown> {
  private _value: T;

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
    this._value = value;
    this._type = _type;
  }

  set value(newValue: T) {
    this._value = newValue;

    // set all bound elements' value
    const len = this._bound.length;
    for (let i = 0; i < len; i += 2 satisfies KRefBound['length']) {
      // @ts-ignore [INFO] [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = newValue;
    }
  }

  get value() {
    return this._value;
  }

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
      this._triggerElementValueChange(this._value);
    });

    this._bound.push(element, field);

    return true;
  }

  private _triggerElementValueChange(newValue: T) {
    const len = this._bound.length;

    for (let i = 0; i < len; i += 2 satisfies KRefBound['length']) {
      // @ts-ignore [INFO] [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = newValue;
    }
  }
}
