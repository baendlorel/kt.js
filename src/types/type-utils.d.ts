type IsSameType<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? (<T>() => T extends B ? 1 : 2) extends <T>() => T extends A ? 1 : 2
      ? true
      : false
    : false;

type PickProperty<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: T[K];
};

type PickMethod<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

/**
 * Used for function to bind args
 */
type DropPrefix<T extends any[], N extends number, Acc extends any[] = []> = Acc['length'] extends N
  ? T
  : T extends [infer Head, ...infer Rest]
    ? DropPrefix<Rest, N, [...Acc, Head]>
    : [];

/**
 * Extract the first N parameters from a function type
 * Handles optional parameters and rest parameters
 */
type FirstNParams<
  Func extends (...args: any[]) => any,
  N extends number,
  Acc extends any[] = [],
> = Acc['length'] extends N
  ? Acc
  : Parameters<Func> extends readonly [infer First, ...infer Rest]
    ? Rest extends any[]
      ? FirstNParams<(...args: Rest) => any, N, [...Acc, First]>
      : Acc
    : Acc;

/**
 * Generate a union type of all possible parameter combinations from empty array to full parameters
 * [] | FirstNParams<Func,1> | FirstNParams<Func,2> | ... | Parameters<Func>
 */
type FirstParamOrAllParams<Func extends (...args: any[]) => any> =
  | []
  | FirstNParams<Func, 1>
  | FirstNParams<Func, 2>
  | FirstNParams<Func, 3>
  | FirstNParams<Func, 4>
  | FirstNParams<Func, 5>
  | FirstNParams<Func, 6>
  | FirstNParams<Func, 7>
  | FirstNParams<Func, 8>
  | FirstNParams<Func, 9>
  | FirstNParams<Func, 10>
  | Parameters<Func>;
