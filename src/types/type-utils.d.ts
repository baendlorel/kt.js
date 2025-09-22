type IsSameType<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? (<T>() => T extends B ? 1 : 2) extends <T>() => T extends A ? 1 : 2
      ? true
      : false
    : false;

type PickProperty<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: T[K];
};

type PickMethod<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

type PossibleRestArgs<T extends any[], Acc extends any[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? Acc | PossibleRestArgs<Rest, [...Acc, First]>
  : Acc;

type Slice<T extends any[], N extends number, Acc extends any[] = []> = Acc['length'] extends N
  ? Acc
  : T extends [infer First, ...infer Rest]
    ? Slice<Rest, N, [...Acc, First]>
    : Acc;
