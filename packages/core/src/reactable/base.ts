import { compose } from 'composition-ts';
import { $is } from '@ktjs/shared';
import { IdGenerator } from '../common.js';
import { KTReactable, KTListenable, KTWritable, KTMappable, KTDerivable } from './reactable.js';

export type ChangeHandler = (newValue: any, oldValue: any) => void;
export type ChangeHandlerKey = string | number;

const valueStore: ValueStore = { _value: undefined };

const reactable: KTReactable<any, KTReactiveType> = {
  ...valueStore,
  isKT: true,
  type: KTReactiveType.Reative,
  get value() {
    return this._value;
  },
  set value(_newValue) {
    // & Only works for KTRef and KTSubRef
  },
};

const listenable: KTListenable<any> = {
  ...valueStore,
  _changeHandlers: new Map(),
  _emit(newValue: any, oldValue: any) {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
    return this;
  },
  addOnChange(handler, key) {
    this._changeHandlers.set(key ?? IdGenerator.kid, handler);
    return this;
  },
  removeOnChange(key: string) {
    this._changeHandlers.delete(key);
    return this;
  },
  notify() {
    this._changeHandlers.forEach((handler) => handler(this._value, this._value));
    return this;
  },
};

const writable: KTWritable<any> = {
  ...(listenable as any),
  get value() {
    return this._value;
  },
  set value(newValue: any) {
    if ($is(newValue, this._value)) {
      return;
    }
    const oldValue = this._value;
    this._value = newValue;
    this._emit(newValue, oldValue);
  },
  get draft() {
    // & Only works for KTRef and KTSubRef
    return this._value;
  },
};

const mappable: KTMappable<any> = {
  ...valueStore,
  map(calculator) {
    return computed(calculator(this._value));
  },
};

const derivableForRef: KTDerivable<any, KTReactiveType.Ref> = {
  type: KTReactiveType.Ref,
  get(...keys: string[]) {
    return subRef(keys);
  },
};

const derivableForComputed: KTDerivable<any, KTReactiveType.Computed> = {
  type: KTReactiveType.Computed,
  get(...keys: string[]) {
    return subComputed(keys);
  },
};

export type KTBaseReactable<T, Type extends KTReactiveType> = KTReactable<T, Type> & KTListenable<T> & KTMappable<T>;
export type KTComputed<T> = KTBaseReactable<T, KTReactiveType.Computed> & KTDerivable<T, KTReactiveType.Computed>;
export type KTRef<T> = KTBaseReactable<T, KTReactiveType.Ref> & KTWritable<T> & KTDerivable<T, KTReactiveType.Ref>;
export type KTSubRef<T> = KTReactable<T, KTReactiveType.SubRef> & KTWritable<T>;
export type KTSubComputed<T> = KTReactable<T, KTReactiveType.SubComputed>;

export type KTReactive<T> = KTComputed<T> | KTSubComputed<T> | KTRef<T> | KTSubRef<T>;

const KTRefConstructor = compose(
  function KTRef(_value) {
    this.type = KTReactiveType.Ref;
    this._value = _value;
    this._changeHandlers = new Map();
  },
  reactable,
  listenable,
  mappable,
  writable,
  derivableForRef,
) as new <T>(value: T) => KTRef<T>;
export const ref = <T>(value: T): KTRef<T> => new KTRefConstructor(value);

const KTComputedConstructor = compose(
  function KTComputed(this, calculator: () => any, dependencies: Array<KTReactive<unknown>>) {
    this.type = KTReactiveType.Computed;
    this._value = _value;
    this._calculator = calculator;
    this._changeHandlers = new Map();
  },
  reactable,
  listenable,
  mappable,
  derivableForComputed,
) as new <T>(value: T) => KTComputed<T>;
export const computed = <T>(value: T): KTComputed<T> => new KTComputedConstructor(value);

const KTSubRefConstructor = compose(
  function KTSubRef(this, _value) {
    this.type = KTReactiveType.SubRef;
    this._value = _value;
    this._changeHandlers = new Map();
  },
  reactable,
  writable,
) as new <T>(value: T) => KTSubRef<T>;

// # type annotions for testing
const a = {} as KTRef<{ a: { b: number }; c: string }>;
const b = a.get('a');
b.draft;
b.value;

const aa = {} as KTComputed<{ a: { b: number }; c: string }>;
const bb = aa.get('a', 'b');
bb.value;

const aaa = {} as KTReactive<{ a: { b: number }; c: string }>;
aaa.type;
