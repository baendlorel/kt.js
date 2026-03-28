import { $entries } from '@ktjs/shared';
import { isKT, isRefLike, type KTRefLike, ref } from '@ktjs/core';

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

export const registerPrefixedEvents = (element: Element, props: { [key: string]: any }, exclude?: string[]) => {
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

export const ensureRefLike = <T>(value: unknown): KTRefLike<T> => {
  if (isKT(value)) {
    if (isRefLike(value)) {
      return value;
    } else {
      $throw(`Computed values cannot be used as ref-like. Please use 'ref' instead.`);
    }
  } else {
    return ref(value as T);
  }
};
