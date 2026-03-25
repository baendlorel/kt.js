import type { KTReactive } from './reactive.js';
import type { KTComputed } from './index.js';
import type { KTRef } from './ref.js';

export const enum KTReactiveType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
}

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;
export const isRef = <T = any>(obj: any): obj is KTRef<T> => {
  // & This is tested to be the fastest way.
  // faster than includes, arrayindex, if or.
  if (obj.ktType === undefined) {
    return false;
  }
  return obj.ktType >= KTReactiveType.Ref;
};
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.Computed;

interface SubRefCacheItem {
  getter: (source: KTReactive<any>) => any;
  setter: (source: KTReactive<any>, newValue: any) => void;
  draft: (source: KTReactive<any>) => any;
}

const _subRefCache = new Map<string, SubRefCacheItem>();
export const $createSubFn = (path: string) =>
  ({
    getter: new Function(`r`, `return r.value${path}`),
    setter: new Function(`r`, `nv`, `r.draft${path} = nv`),
    draft: new Function(`r`, `return r.draft${path}`),
  }) as SubRefCacheItem;

export const $createSubFnWithCache = (path: string) => {
  const exist = _subRefCache.get(path);
  if (exist) {
    return exist;
  } else {
    const cache = $createSubFn(path);
    _subRefCache.set(path, cache);
    return cache;
  }
};
