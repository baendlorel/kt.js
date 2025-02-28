import { i18n } from './i18n';
import { I18NConfig } from './types';

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
  const cache = new Map<object, ReturnType<T>>();
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
