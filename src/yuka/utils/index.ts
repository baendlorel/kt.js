import { i18n } from '../i18n';
import { I18NConfig } from '../types';

export * from './merge';
export * from './memoize';

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

/**
 * 判断函数是否带有async标志
 * @param fn
 * @returns
 */
export const isAsyncFunction = (fn: any) => {
  if (typeof fn !== 'function') {
    return false;
  }
  return fn.constructor.name === 'AsyncFunction' || fn[Symbol.toStringTag] === 'AsyncFunction';
};
