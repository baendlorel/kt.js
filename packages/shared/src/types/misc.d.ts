export interface KTReactiveLike<T = unknown> {
  isKT: true;
  value: T;
  addOnChange(fn: (newValue: T, oldValue: T) => void): void;
  removeOnChange?(fn: (newValue: T, oldValue: T) => void): boolean;
}
