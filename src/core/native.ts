// #region common

export const _apply = Reflect.apply;
export const _set = Reflect.set;
export const _get = Reflect.get;
export const _defineProperty = Reflect.defineProperty;
export const IsArray = Array.isArray;
export const ArrayFrom = Array.from;

export const ObjectKeys = Object.keys;
export const ObjectAssign = Object.assign;
export const ObjectIs = Object.is as <B extends unknown>(a: unknown, b: B) => a is B;

export const IsSafeInt = Number.isSafeInteger as (n: unknown) => n is number;
export const IsObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;

// #endregion

// #region Dom manipulation

export const _getElementById = document.getElementById.bind(document);
export const _createElement = document.createElement.bind(document);
export const _createTextNode = document.createTextNode.bind(document);

export const _addEventListener = HTMLElement.prototype.addEventListener;
export const _removeEventListener = HTMLElement.prototype.removeEventListener;
export const _appendChild = HTMLElement.prototype.appendChild;
// #endregion
