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

export function isSubReactive<T = any>(obj: any): obj is KTSubComputed<T> {
  if (typeof obj?.ktype === 'number') {
    return (obj.ktype & KTReactiveType.SubReactive) !== 0;
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
