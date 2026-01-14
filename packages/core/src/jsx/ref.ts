const noop = () => ({}) as any;
export interface KTRef<T> {
  value: T;
  isKT: true;
}

/**
 * Reference to the created HTML element.
 * - can alse be used to store normal values, but it is not reactive.
 * @param value mostly an HTMLElement
 */
export function ref<T = HTMLElement>(value?: T): KTRef<T> {
  return { value: value as T, isKT: true };
}
