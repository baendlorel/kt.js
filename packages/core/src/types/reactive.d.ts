export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;

export interface KTReactive<T> {
  isKT: true;
  value: T;
  addOnChange(handler: ReactiveChangeHandler<T>): void;
  removeOnChange(handler: ReactiveChangeHandler<T>): void;
}
