const _textNodes = new WeakMap<HTMLKEnhancedElement, Text>();

/**
 * Trust `get` never returns `undefined`.
 */
export const getTextNode = _textNodes.get.bind(_textNodes) as (
  element: HTMLKEnhancedElement
) => Text;

export const setTextNode = _textNodes.set.bind(_textNodes);
