export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT === true;

export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;

export enum KTReactiveType {
  NotKT = 0,
  Ref = 1,
  Computed = 2,
}

export interface KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT: true;

  /**
   * A flag that identifies the type of this reactive
   */
  ktType: KTReactiveType;

  value: T;

  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
   */
  addOnChange(handler: ReactiveChangeHandler<T>): void;

  /**
   * Unregister a callback
   * @param callback (newValue, oldValue) => xxx
   */
  removeOnChange(handler: ReactiveChangeHandler<T>): void;
}
