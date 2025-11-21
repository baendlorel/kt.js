import type {} from '@ktjs/core';
import { KTH, KTAttribute } from '@/types/h.js';

export const withDefaults = <F extends (...args: any) => any>(func: F, defaultAttr: KTAttribute): F => {
  if ('__ktjs_h__' in func === false) {
    window.__ktjs__.throws('withDefaults can only be used with h function or its alias');
  }

  if (func.__ktjs_h__ === 'h') {
    return ((tag, attr, content) => {
      if (typeof attr === 'string') {
        attr = { ...defaultAttr, class: attr };
      } else if (attr && typeof attr === 'object') {
        attr = { ...defaultAttr, ...attr };
      }
      return func(tag, attr, content);
    }) as F;
  }

  return ((attr, content) => {
    if (typeof attr === 'string') {
      attr = { ...defaultAttr, class: attr };
    } else if (attr && typeof attr === 'object') {
      attr = { ...defaultAttr, ...attr };
    }
    return func(attr, content);
  }) as F;
};
