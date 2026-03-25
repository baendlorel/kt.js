import { $stringify } from '@ktjs/shared';
import { KTReactive } from './reactive.js';
import { $createSubFn, $createSubFnWithCache, KTReactiveType } from './common.js';

export class KTSubRef<T> {
  /**
   * Although it is not extending `KTReactive`, it remains a KT object.
   */
  public readonly isKT: true = true;

  /**
   * Indicates that this is a `KTSubRef` instance
   */
  public readonly ktType: KTReactiveType = KTReactiveType.SubRef;

  /**
   * Reference to the original reactive object, used for change tracking and dependency collection.
   */
  private _source: KTReactive<any>;

  private _getter: (source: KTReactive<any>) => T;

  private _setter: (source: KTReactive<any>, newValue: T) => void;

  private _draft: (source: KTReactive<any>) => T;

  constructor(_source: KTReactive<any>, path: string[]) {
    this._source = _source;
    const p = path.map((p) => `[${$stringify(p)}]`).join('');
    const subFn = path.some((p) => typeof p === 'number') ? $createSubFn(p) : $createSubFnWithCache(p);
    this._getter = subFn.getter;
    this._setter = subFn.setter;
    this._draft = subFn.draft;
  }

  get value() {
    return this._getter(this._source);
  }

  set value(newValue: T) {
    this._setter(this._source, newValue); // hack 理论上这里如果被修改，由于改动的透传，源对象的事件应该能正常触发
  }

  get draft() {
    return this._draft(this._source);
  }
}

KTReactive.prototype.get = function (this: KTReactive<any>, ...path: string[]) {
  return new KTSubRef(this, path);
};
