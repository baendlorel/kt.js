import { KTReactiveLike, KTReactiveType, type KTReactive } from './reactive.js';
import type { KTRef, KTRefLike, KTSubRef } from './ref.js';
import type { KTComputed, KTComputedLike, KTSubComputed } from './computed.js';

// # type guards
export function isKT<T = any>(obj: any): obj is KTReactiveLike<T> {
  return typeof obj?.kid === 'number';
}
export function isReactiveLike<T = any>(obj: any): obj is KTReactiveLike<T> {
  if (typeof obj?.ktype === 'number') {
    return (obj.ktype & KTReactiveType.ReactiveLike) !== 0;
  } else {
    return false;
  }
}

export function isRef<T = any>(obj: any): obj is KTRef<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KTReactiveType.Ref;
  } else {
    return false;
  }
}

export function isSubRef<T = any>(obj: any): obj is KTSubRef<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KTReactiveType.SubRef;
  } else {
    return false;
  }
}

export function isRefLike<T = any>(obj: any): obj is KTRefLike<T> {
  if (typeof obj?.ktype === 'number') {
    return (obj.ktype & KTReactiveType.RefLike) !== 0;
  } else {
    return false;
  }
}

export function isComputed<T = any>(obj: any): obj is KTComputed<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KTReactiveType.Computed;
  } else {
    return false;
  }
}

export function isSubComputed<T = any>(obj: any): obj is KTSubComputed<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KTReactiveType.SubComputed;
  } else {
    return false;
  }
}

export function isComputedLike<T = any>(obj: any): obj is KTComputedLike<T> {
  if (typeof obj?.ktype === 'number') {
    return (obj.ktype & KTReactiveType.ComputedLike) !== 0;
  } else {
    return false;
  }
}

export function isReactive<T = any>(obj: any): obj is KTReactive<T> {
  if (typeof obj?.ktype === 'number') {
    return (obj.ktype & KTReactiveType.Reactive) !== 0;
  } else {
    return false;
  }
}

// # sub getter/setter factory

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
