export type IsSameType<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? (<T>() => T extends B ? 1 : 2) extends <T>() => T extends A ? 1 : 2
      ? true
      : false
    : false;

/**
 * Pick non-symbol and non-method property of a type
 */
export type PickProperty<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T as T[K] extends (...args: any[]) => any ? never : K extends symbol ? never : K]: T[K];
};

export type PickMethod<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

export type Publicify<T> = {
  -readonly [P in keyof T]: T[P];
};

export type DeepGet<O, KList extends string[]> = KList extends [infer K, ...infer Rest]
  ? K extends keyof O
    ? Rest extends string[]
      ? DeepGet<O[K], Rest>
      : O[K]
    : never
  : O;
