import { $entries } from '@ktjs/shared';

export const $parseStyle = (style: string | Partial<CSSStyleDeclaration> | undefined) => {
  if (typeof style === 'string') {
    return style;
  }
  if (style && typeof style === 'object') {
    return $entries(style)
      .map(([key, value]) => {
        const cssKey = (key as string).replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        return `${cssKey}: ${value}`;
      })
      .join('; ');
  }
  return '';
};

export const registerPrefixedEvents = (element: HTMLElement, props: { [key: string]: any }, exclude?: string[]) => {
  if (exclude) {
    for (const key in props) {
      if (key.startsWith('on:') && !exclude.includes(key)) {
        element.addEventListener(key.slice(3), props[key]);
      }
    }
  } else {
    for (const key in props) {
      if (key.startsWith('on:')) {
        element.addEventListener(key.slice(3), props[key]);
      }
    }
  }
};
