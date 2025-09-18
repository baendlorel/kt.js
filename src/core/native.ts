export const apply = Reflect.apply;

export const ObjectIs = Object.is;

export const IsSafeInt = Number.isSafeInteger as (n: unknown) => n is number;

export const IsObject = <T extends object>(o: unknown): o is T =>
  typeof o === 'object' && o !== null;
