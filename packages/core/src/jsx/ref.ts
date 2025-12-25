const noop = () => ({}) as any;
export interface KTRef<T> {
  value: T;
  update: () => T;
  isRef: true;
}

export function ref<T>(value?: T): KTRef<T> {
  return { value: value as T, update: noop, isRef: true };
}
