import { KTReactiveType, type KTReactive } from './reactive.js';
import type { KTComputed, KTSubComputed } from './computed.js';
import type { KTRef, KTSubRef } from './ref.js';

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => typeof obj?.kid === 'number';
export const isRefLike = <T = any>(obj: any): obj is KTRef<T> & KTSubRef<T> => {
  // & This is tested to be the fastest way. Faster than `includes`, array index, if or.
  if (obj.ktype === undefined) {
    return false;
  }
  return obj.ktype === KTReactiveType.Ref || obj.ktype === KTReactiveType.SubRef;
};
export const isComputedLike = <T = any>(obj: any): obj is KTComputed<T> & KTSubComputed<T> => {
  if (obj.ktype === undefined) {
    return false;
  }
  return obj.ktype === KTReactiveType.Computed || obj.ktype === KTReactiveType.SubComputed;
};

const _getters = new Map<string, (s: KTReactive<any>['value']) => any>();
const _setters = new Map<string, (s: KTReactive<any>['value'], newValue: any) => void>();

export const $createSubGetter = (path: string) => {
  const exist = _getters.get(path);
  if (exist) {
    return exist;
  } else {
    const cache = new Function('s', `return s${path}`) as (s: object) => any;
    _setters.set(path, cache);
    return cache;
  }
};

export const $createSubSetter = (path: string) => {
  const exist = _setters.get(path);
  if (exist) {
    return exist;
  } else {
    const cache = new Function('s', 'v', `s${path}=v`) as (s: object, newValue: any) => void;
    _setters.set(path, cache);
    return cache;
  }
};
