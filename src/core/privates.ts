const privates = new WeakMap<HTMLKEnhancedElement, KEnhancedPrivates>();

/**
 * Trust `get` never returns `undefined`.
 */
export const getPrivate = (element: HTMLKEnhancedElement) =>
  privates.get(element) as KEnhancedPrivates;

export const setPrivate = (element: HTMLKEnhancedElement, privatePart: KEnhancedPrivates) =>
  privates.set(element, privatePart);

export const isKEnhanced = (element: HTMLKEnhancedElement) => privates.has(element);
