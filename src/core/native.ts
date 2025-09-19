// #region common

export const $apply = Reflect.apply;
export const $set = Reflect.set;
export const $get = Reflect.get;
export const $defineProperty = Reflect.defineProperty;
export const $isArray = Array.isArray;
export const $arrayFrom = Array.from;

export const $keys = Object.keys;
export const $assign = Object.assign;
export const $is = Object.is as <B extends unknown>(a: unknown, b: B) => a is B;

export const $isSafeInteger = Number.isSafeInteger as (n: unknown) => n is number;
export const $isObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;

// #endregion

// #region Dom manipulation

export const $getElementById = document.getElementById.bind(document);
export const $createElement = document.createElement.bind(document);
export const $createTextNode = document.createTextNode.bind(document);

export const $addEventListener = HTMLElement.prototype.addEventListener;
export const $removeEventListener = HTMLElement.prototype.removeEventListener;
export const $appendChild = HTMLElement.prototype.appendChild;
export const $setAttribute = HTMLElement.prototype.setAttribute;
// #endregion
