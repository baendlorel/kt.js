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

type Writable<T> = {
  [P in keyof T]-?: {} extends { -readonly [Q in P]: T[P] } ? P : never;
}[keyof T];

type ExcludeMethods<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any ? never : P;
}[keyof T];

type WritableProperties<T> = Writable<ExcludeMethods<T>>;
