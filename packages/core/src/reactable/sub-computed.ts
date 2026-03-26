import { KTReactiveType } from './base.js';

class KTSomeReactive {
  readonly isKT = true; // & 全有

  readonly type = KTReactiveType.SubComputed; // & 全有

  // & 全有
  get value() {
    return 1;
  }

  source = this; // & 仅 subRef\subComputed，指向真正持有数据/监听器的上游

  _getter = (source: any) => source; // & 仅 subRef\subComputed，根据 path 从 source 取值
  _setter = (source: any, newValue: any) => {}; // & 仅 subRef，根据 path 写回 source
  _draft = (source: any) => source; // & 仅 subRef，根据 path 返回可变引用

  // & 仅 subRef\subComputed，监听透传到 source 时，记录本地 key -> source key
  _sourceChangeHandlerKeys = new Map<ChangeHandlerKey, ChangeHandlerKey>();

  _value = 123; // & 仅 ref\computed，要缓存当前值

  _changeHandlers = new Map<ChangeHandlerKey, ChangeHandler>(); // & 仅 ref\computed，自身持有监听器时才需要

  // & 仅 ref\computed，同 _changeHandlers，用于触发变化
  _emit(newValue: any, oldValue: any) {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
  }

  // & 仅 computed
  _calculator = () => 1;

  // & 仅 computed
  _dependencies: any[] = [];

  // & 仅 computed
  _recalculate(forceEmit: boolean = false): this {
    return this;
  }

  // & 仅 ref\subRef，用于设置值。subRef 会直接影响 source 的值。
  set value(v) {}

  // & 仅 ref\subRef
  get draft() {
    return 1;
  }

  // & ref\computed 给自己加；sub 系列给 source 加，必要时要用 _sourceChangeHandlerKeys 记映射。
  addOnChange(handler: ChangeHandler, key?: ChangeHandlerKey) {
    this._changeHandlers.set(key ?? this._changeHandlers.size, handler);
  }

  // & ref\computed 删除自己的；sub 系列删除 source 上对应的包装监听。
  removeOnChange(key: ChangeHandlerKey) {
    this._changeHandlers.delete(key);
  }

  // & ref\computed 直接触发自己的事件；sub 系列直接触发 source 的事件。
  notify() {
    this._changeHandlers.forEach((handler) => handler(this._value, this._value));
  }

  // & 仅 ref\computed，用于导出 subRef 和 subComputed
  map(calculator: (value: any) => any) {}

  // & 仅 ref\computed，用于导出 subRef 和 subComputed
  get(...args: string[]) {}
}
