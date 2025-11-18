import { HFunction, KAttribute } from '@/types/h.js';

export const withDefaults = <F extends HFunction>(func: F, defaultAttr: KAttribute): F => {
  const newFunc: HFunction = (tag, attr, content) => {
    if (typeof attr === 'string') {
      attr = { class: attr };
    }
    return func(tag, attr, content);
  };
  return newFunc as F;
};
