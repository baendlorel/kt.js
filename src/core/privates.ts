const privates = new WeakMap<HTMLKEnhancedElement, KEnhancedPrivates>();

/**
 * Trust `get` never returns `undefined`.
 */
export const getPrivate = privates.get.bind(privates) as (
  element: HTMLKEnhancedElement
) => KEnhancedPrivates;

export const setPrivate = (element: HTMLKEnhancedElement, privatePart: KEnhancedPrivates) =>
  privates.set(element, privatePart);

export const isKEnhanced = privates.has.bind(privates);
