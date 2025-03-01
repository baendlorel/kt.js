import { i18n } from './i18n';
import { I18NConfig } from './types';

export class MemoizeMap<A, B> {
  private readonly map: Map<A, B> = new Map();
  private readonly weakMap: WeakMap<Object, B> = new WeakMap();

  set(key: any, value: any) {
    if (typeof key === 'object' && key !== null) {
      this.weakMap.set(key, value);
    } else {
      this.map.set(key, value);
    }
  }

  get(key: any) {
    if (typeof key === 'object' && key !== null) {
      return this.weakMap.get(key);
    } else {
      return this.map.get(key);
    }
  }

  has(key: any) {
    if (typeof key === 'object' && key !== null) {
      return this.weakMap.has(key);
    } else {
      return this.map.has(key);
    }
  }

  delete(key: any) {
    if (typeof key === 'object' && key !== null) {
      return this.weakMap.delete(key);
    } else {
      return this.map.delete(key);
    }
  }

  forEach(callbackfn: (value: any, key: any, map: Map<any, any>) => void) {
    this.map.forEach(callbackfn);
  }
}

/**
 * 自动读取string和I18NConfig的文本
 * @deprecated 没用上
 * @param t string或I18NConfig
 * @returns 如果不是这两者，那么返回false
 */
export const getText = (t: string | I18NConfig): string | false => {
  if (typeof t === 'string') {
    return t;
  }

  if (i18n.valid(t)) {
    return i18n.get(t);
  }

  return false;
};

export const isAsyncFunction = (fn: any) => {
  if (typeof fn !== 'function') {
    return false;
  }
  return fn.constructor.name === 'AsyncFunction' || fn[Symbol.toStringTag] === 'AsyncFunction';
};

/**
 * 为一个以对象作为参数的函数添加缓存，缓存键为第一个参数
 * @param fn 第一个参数是对象的函数
 * @returns
 */
export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  if (typeof fn !== 'function') {
    throw new Error('[Yuka:memoize] fn must be a function');
  }
  const cache = new MemoizeMap<any, T>();
  return ((...args: Parameters<T>[]) => {
    const key = args[0];
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};
