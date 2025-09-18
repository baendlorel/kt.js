// #region common

export const ReflectApply = Reflect.apply;
export const ReflectSet = Reflect.set;
export const ReflectGet = Reflect.get;
export const ReflectDefineProperty = Reflect.defineProperty;
export const IsArray = Array.isArray;

export const ObjectKeys = Object.keys;
export const ObjectAssign = Object.assign;
export const ObjectIs = Object.is as <B extends unknown>(a: unknown, b: B) => a is B;
// #endregion

// #region special

export const IsSafeInt = Number.isSafeInteger as (n: unknown) => n is number;

export const IsObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;

// export const provideDefault = <T>(v: T | typeof Sym.NotProvided, defaultV: T): T =>
//   ObjectIs(v, Sym.NotProvided) ? defaultV : (v as T);

// #endregion

// #region Dom manipulation

export const createElement = document.createElement.bind(document);
export const createTextNode = document.createTextNode.bind(document);
export const addEventListener = HTMLElement.prototype.addEventListener;
export const removeEventListener = HTMLElement.prototype.removeEventListener;

// #endregion
