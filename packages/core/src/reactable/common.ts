import type { KTRef, KTSubRef } from './ref.js';
import type { KTComputed } from './computed.js';
import { KType, type KTReactive } from './reactive.js';

// #region type guards

// & Shockingly, using `typeof` first is about 2~4 times faster than directly `o?.ktype === KType.XXX`.

/**
 * @returns `true` for both `KTRef` and `KTSubRef`, since `KTSubRef` is a subclass of `KTRef`
 */
export const isRef = <T = any>(o: any): o is KTRef<T> =>
  typeof o?.ktype === 'number' ? o.ktype === KType.Ref || o.ktype === KType.SubRef : false;

export const isSubRef = <T = any>(o: any): o is KTSubRef<T> =>
  typeof o?.ktype === 'number' ? o.ktype === KType.SubRef : false;

export const isRefExact = <T = any>(o: any): o is KTRef<T> =>
  typeof o?.ktype === 'number' ? o.ktype === KType.Ref : false;

export const isComputed = <T = any>(o: any): o is KTComputed<T> =>
  typeof o?.ktype === 'number' ? o.ktype === KType.Computed : false;

/**
 * A little different from `isKT`
 * @returns true if `o` is computed\ref\subref
 */
export const isReactive = <T = any>(o: any): o is KTReactive<T> =>
  typeof o?.ktype === 'number' ? (o.ktype & KType.Reactive) !== 0 : false;

/**
 * Only checks if `ktype` is a number, which is the common property of all KTReactive instances.
 */
export const isKT = <T = any>(o: any): o is KTReactive<T> => typeof o?.ktype === 'number';

// #endregion

// #region sub getter/setter factory

type SubGetter = (s: any) => any;
type SubSetter = (s: any, newValue: any) => void;

/**
 * Create a value getter which params is `reactive.value`(or `ref.draft`)
 */
export const $createSubGetter = (path: Array<string | number>): SubGetter => {
  // & path.length is guaranteed to be greater than 0 in `KTReactive.get` and `KTRef.get`
  switch (path.length) {
    case 1:
      return (s) => s[path[0]];
    case 2:
      return (s) => s[path[0]][path[1]];
    case 3:
      return (s) => s[path[0]][path[1]][path[2]];
    default:
      return (s) => {
        let r = s[path[0]][path[1]][path[2]];
        for (let i = 3; i < path.length; i++) {
          r = r[path[i]];
        }
        return r;
      };
  }
};

/**
 * Create a value setter which params is `reactive.value`(or `ref.draft`)
 */
export const $createSubSetter = (path: Array<string | number>): SubSetter => {
  switch (path.length) {
    case 1:
      return (s, newValue) => (s[path[0]] = newValue);
    case 2:
      return (s, newValue) => (s[path[0]][path[1]] = newValue);
    case 3:
      return (s, newValue) => (s[path[0]][path[1]][path[2]] = newValue);
    default:
      return (s, newValue) => {
        let r = s[path[0]][path[1]][path[2]];
        for (let i = 3; i < path.length - 1; i++) {
          r = r[path[i]];
        }
        r[path[path.length - 1]] = newValue;
      };
  }
};

// #endregion
