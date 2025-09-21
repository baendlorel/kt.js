// 所有响应式都要基于这个

export class KRef<T = any> {
  private _value: T;
  private _type: Factory<T>;
  private readonly _boundValue: (HTMLKEnhancedElement & { value: any })[] = [];
  private _preventChangeFlag: boolean = false;

  constructor(value: T, _type: Factory<T>) {
    this._value = value;
    this._type = _type;
  }

  set value(newValue: T) {
    this._value = newValue;
    const len = this._boundValue.length;
    for (let i = 0; i < len; i++) {
      this._boundValue[i].value = newValue;
    }
  }

  get value() {
    return this._value;
  }

  bindValue(el: HTMLKEnhancedElement): boolean {
    if (!('value' in el)) {
      return false;
    }

    el.kon('change', () => {
      if (this._preventChangeFlag) {
        return;
      }
      this._value = this._type(el.value);
      this._triggerElementValueChange(this._value);
    });

    this._boundValue.push(el);

    return true;
  }

  private _triggerElementValueChange(newValue: T) {
    this._preventChangeFlag = true;
    const len = this._boundValue.length;
    for (let i = 0; i < len; i++) {
      this._boundValue[i].value = newValue;
    }
    this._preventChangeFlag = false;
  }
}
