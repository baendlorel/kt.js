import { KTReactiveType, type KTReactive } from './reactive.js';
import type { KTRefLike } from './ref.js';
import type { KTComputedLike } from './computed.js';

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => typeof obj?.kid === 'number';

export const isRefLike = <T = any>(obj: any): obj is KTRefLike<T> => {
  if (typeof obj.ktype === 'number') {
    return (obj.ktype & KTReactiveType.RefLike) !== 0;
  } else {
    return false;
  }
};

export const isComputedLike = <T = any>(obj: any): obj is KTComputedLike<T> => {
  if (typeof obj.ktype === 'number') {
    return (obj.ktype & KTReactiveType.ComputedLike) !== 0;
  } else {
    return false;
  }
};

type SubGetter = (s: any) => any;
type SubSetter = (s: any, newValue: any) => void;
const _getters = new Map<string, SubGetter>();
const _setters = new Map<string, SubSetter>();

export const $createSubGetter = (path: string): SubGetter => {
  const exist = _getters.get(path);
  if (exist) {
    return exist;
  } else {
    const cache = new Function('s', `return s${path}`) as SubGetter;
    _getters.set(path, cache);
    return cache;
  }
};

export const $createSubSetter = (path: string): SubSetter => {
  const exist = _setters.get(path);
  if (exist) {
    return exist;
  } else {
    const cache = new Function('s', 'v', `s${path}=v`) as SubSetter;
    _setters.set(path, cache);
    return cache;
  }
};
