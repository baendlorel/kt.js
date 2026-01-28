export interface KTForProps<T> {
  list: T[];
  /**
   * Key function to uniquely identify each item
   * Using stable keys enables efficient DOM reuse and updates
   */
  key?: (item: T, index: number, array: T[]) => string | number;
  /**
   * Mapper function to render each item
   */
  mapper: (item: T, index: number, array: T[]) => HTMLElement;
}

const trivial = (item: any) => item;

export function KTFor<T>(props: KTForProps<T>) {}
