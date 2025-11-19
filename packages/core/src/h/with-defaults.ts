import { KTH, KTAttribute } from '@/types/h.js';

export const withDefaults = <F extends KTH>(func: F, defaultAttr: KTAttribute): F => {
  const newFunc: KTH = (tag, attr, content) => {
    if (typeof attr === 'string') {
      attr = { class: attr };
    }
    return func(tag, attr, content);
  };
  return newFunc as F;
};
