const noop = () => ({}) as any;
export interface KTRef<T> {
  value: T;
  isKT: true;
}

export function ref<T>(value?: T): KTRef<T> {
  return { value: value as T, isKT: true };
}
