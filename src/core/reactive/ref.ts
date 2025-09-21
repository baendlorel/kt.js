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

  /**
   * Prevent infinite loop when element change triggers ref change which triggers element change again.
   */
  private _preventChangeFlag: boolean = false;

  constructor(value: T, _type: Factory<T>) {
    this._value = value;
    this._type = _type;
  }

  set value(newValue: T) {
    this._value = newValue;

    // set all bound elements' value
    const len = this._bound.length;
    for (let i = 0; i < len; i += 2) {
      // @ts-ignore
      // & [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = newValue;
    }
  }

  get value() {
    return this._value;
  }

  bind<El extends HTMLKEnhancedElement>(element: El, field: keyof El): boolean {
    if (!(field in element)) {
      return false;
    }

    element.kon('change', () => {
      if (this._preventChangeFlag) {
        return;
      }
      this._value = this._type(element[field]);
      this._triggerElementValueChange(this._value);
    });

    this._bound.push(element);

    return true;
  }

  private _triggerElementValueChange(newValue: T) {
    this._preventChangeFlag = true;
    const len = this._bound.length;

    for (let i = 0; i < len; i += 2) {
      // @ts-ignore
      // & [i, i+1] satisfies KRefBound
      this._bound[i][this._bound[i + 1]] = newValue;
    }
    this._preventChangeFlag = false;
  }
}
