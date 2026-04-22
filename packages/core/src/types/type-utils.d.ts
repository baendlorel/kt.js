// TASK 用于所有校验完成后无所谓类型的地方
export type Satisfied = any;

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

export interface Thenable<T> {
  then: (onfulfilled?: (value: T) => any) => any;

  /* @internal */
  _version: number;
}
