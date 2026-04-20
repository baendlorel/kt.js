import type { KTRef, KTSubRef } from './ref.js';
import type { KTComputed } from './computed.js';
import { KType, type KTReactive } from './reactive.js';

// # type guards
export function isKT<T = any>(obj: any): obj is KTReactive<T> {
  return typeof obj?.kid === 'number';
}

export function isReactiveLike<T = any>(obj: any): obj is KTReactive<T> {
  return typeof obj?.ktype === 'number' ? (obj.ktype & KType.ReactiveLike) !== 0 : false;
}

/**
 * @returns `true` for both `KTRef` and `KTSubRef`, since `KTSubRef` is a subclass of `KTRef`
 */
export function isRef<T = any>(obj: any): obj is KTRef<T> {
  return typeof obj?.ktype === 'number' ? obj.ktype === KType.Ref || obj.ktype === KType.SubRef : false;
}

export function isSubRef<T = any>(obj: any): obj is KTSubRef<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KType.SubRef;
  } else {
    return false;
  }
}

export function isRefExact<T = any>(obj: any): obj is KTRef<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KType.Ref;
  } else {
    return false;
  }
}

export function isComputed<T = any>(obj: any): obj is KTComputed<T> {
  if (typeof obj?.ktype === 'number') {
    return obj.ktype === KType.Computed;
  } else {
    return false;
  }
}

export function isReactive<T = any>(obj: any): obj is KTReactive<T> {
  if (typeof obj?.ktype === 'number') {
    return (obj.ktype & KType.Reactive) !== 0;
  } else {
    return false;
  }
}

// # sub getter/setter factory

type SubGetter = (s: any) => any;
type SubSetter = (s: any, newValue: any) => void;

/**
 * Create a value getter which params is `reactive.value`(or `ref.draft`)
 */
export const $createSubGetter = (path: Array<string | number>): SubGetter => {
  // & path.length is guaranteed to be greater than 0 in `KTReactive.get` and `KTRef.get`
  switch (path.length) {
    // ? Does it use less memory if we write this:
    // const [k2_0, k2_1] = path;
    // return (s) => s[k2_0][k2_1];
    case 1:
      return (s) => s[path[0]];
    case 2:
      return (s) => s[path[0]][path[1]];
    case 3:
      return (s) => s[path[0]][path[1]][path[2]];
    case 4:
      return (s) => s[path[0]][path[1]][path[2]][path[3]];
    case 5:
      return (s) => s[path[0]][path[1]][path[2]][path[3]][path[4]];
    default:
      return (s) => {
        let r = s[path[0]][path[1]][path[2]][path[3]][path[4]];
        for (let i = 5; i < path.length; i++) {
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
    case 4:
      return (s, newValue) => (s[path[0]][path[1]][path[2]][path[3]] = newValue);
    case 5:
      return (s, newValue) => (s[path[0]][path[1]][path[2]][path[3]][path[4]] = newValue);
    default:
      return (s, newValue) => {
        let r = s[path[0]][path[1]][path[2]][path[3]][path[4]];
        for (let i = 5; i < path.length - 1; i++) {
          r = r[path[i]];
        }
        r[path[path.length - 1]] = newValue;
      };
  }
};
