import type { HTMLTag } from '@/global.js';
import type { RawAttr, RawContent } from '@/types/h.js';

import { h } from '@/core/h/index.js';

export const aliasH = function <T extends HTMLTag>(tag: T) {
  return function (attr?: RawAttr, content?: RawContent) {
    return h(tag, attr, content);
  };
};
