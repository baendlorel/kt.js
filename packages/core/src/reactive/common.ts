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
