import type { KTRawAttr } from '@ktjs/core';
import type { KTAttribute } from '@/types/h.js';

/**
 * Wrap `h`(or its shortcuts) with default attributes.
 * - `defaultAttr.class` will be merged with the provided `class` attribute.
 * @param func `h` or its shortcuts.
 * @param defaultAttr default KTAttribute, must be an object.
 * @returns new h function with default attributes.
 */
export const withDefaults = <F extends (...args: any) => any>(func: F, defaultAttr: KTAttribute): F => {
  if ('__ktjs_h__' in func === false) {
    window.__ktjs__.throws('withDefaults can only be used with h function or its alias');
  }

  if (defaultAttr === null || typeof defaultAttr !== 'object') {
    window.__ktjs__.throws('defaultAttr must be an object');
  }

  // create different merger for defaultAttr with class and not
  const merge =
    typeof defaultAttr.class === 'string'
      ? (attr: KTRawAttr) => {
          if (typeof attr === 'string') {
            const newAttr = { ...defaultAttr };
            newAttr.class = attr + ' ' + defaultAttr.class;
            return newAttr;
          } else if (attr && typeof attr === 'object') {
            const newAttr = { ...defaultAttr, ...attr };
            newAttr.class = (attr.class ?? '') + ' ' + defaultAttr.class;
            return newAttr;
          }
        }
      : (attr: KTRawAttr) => {
          if (typeof attr === 'string') {
            return { ...defaultAttr, class: attr };
          } else if (attr && typeof attr === 'object') {
            return { ...defaultAttr, ...attr };
          }
        };

  if (func.__ktjs_h__ === 'h') {
    return ((tag, attr, content) => func(tag, merge(attr), content)) as F;
  } else {
    return ((attr, content) => func(merge(attr), content)) as F;
  }
};
