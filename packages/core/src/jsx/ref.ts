const noop = () => ({}) as any;
export class Ref<T> {
  value: T;
  update: () => T;

  constructor(value: T) {
    this.value = value;
    this.update = noop;
  }
}

export function ref<T>(value?: T): Ref<T> {
  return new Ref<T>(value as T);
}
