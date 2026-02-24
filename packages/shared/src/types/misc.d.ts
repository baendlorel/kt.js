export interface KTReactiveLike<T = unknown> {
  isKT: true;
  value: T;
  addOnChange<K extends string | number | undefined>(
    fn: (newValue: T, oldValue: T) => void,
    key?: K,
  ): K extends undefined ? number : K;
  removeOnChange?(key: string | number): ((newValue: T, oldValue: T) => void) | undefined;
}
