import { Sym } from '@/consts/sym.js';

// #region common
export const apply = Reflect.apply;

export const ObjectIs = Object.is as (a: unknown, b: unknown) => a is typeof b;
// #endregion

// #region special
export const isSafeInt = Number.isSafeInteger as (n: unknown) => n is number;

export const isObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;

export const provideDefault = <T>(v: T | typeof Sym.NotProvided, defaultV: T): T =>
  ObjectIs(v, Sym.NotProvided) ? defaultV : (v as T);
// #endregion

// #region Dom manipulation
export const createEl = document.createElement.bind(document);
export const addEventListener = HTMLElement.prototype.addEventListener;
export const removeEventListener = HTMLElement.prototype.removeEventListener;
// #endregion
