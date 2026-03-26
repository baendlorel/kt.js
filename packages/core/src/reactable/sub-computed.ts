import { KTComputed, KTReactiveType } from './base.js';
import { KTDerived, KTReactable } from './reactable.js';

export class KTSubComputed<T> implements KTReactable<T, KTReactiveType.SubComputed> {
  readonly isKT = true;
  readonly type = KTReactiveType.SubComputed;
  private readonly source: KTComputed<T>;
  get value() {}
}

class KTSomeReactive {
  iskt = true; // & 全有

  type = KTReactiveType.SubComputed; // & 全有

  _value = 123; // & ref\computed 要有，用于缓存

  _changeHandlers = new Map(); // & ref\computed 要有，用于监听变化

  // & ref\computed 要有，同_changeHandlers，用于触发变化
  _emit(newValue: any, oldValue: any) {
    const handlers = this._changeHandlers.get(this) || [];
    handlers.forEach((handler: any) => handler(newValue, oldValue));
  }

  // & computed 要有，用于计算值
  _calculator = () => 1;

  // & 全有
  get value() {
    return 1;
  }

  // & ref\subRef 要有，用于设置值。但subref将会直接影响source的值。
  set value(v) {}

  // & 全有，ref\computed给自己加，sub系列给source加。
  addOnChange(handler: any, key?: string) {
    const handlers = this._changeHandlers.get(this) || [];
    handlers.push(handler);
    this._changeHandlers.set(this, handlers);
  }

  // & 全有
  removeOnChange(key: string) {
    this._changeHandlers.delete(this);
  }

  // & 全有，ref\computed直接触发自己的事件。sub系列直接触发source的事件。
  notify() {
    const handlers = this._changeHandlers.get(this) || [];
    handlers.forEach((handler: any) => handler(this._value, this._value));
  }

  // & ref\computed有，用于导出subref和subcomputed
  get(...args: string[]) {}
}
