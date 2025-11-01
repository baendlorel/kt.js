import { HTMLTag } from '@/global.js';
import { h } from '@/core/h/index.js';
import { RawAttr, RawContent } from '@/types/h.js';

export const aliasH = function<T extends HTMLTag>(tag: T) {
  return function(attr?: RawAttr, content?: RawContent) {
    return h(tag, attr, content);
  };
};
