import type { HTMLTag } from '@ktjs/core';
import type { RawAttr, RawContent } from '@ktjs/core';

import { h } from '@ktjs/core';

export const aliasH = function <T extends HTMLTag>(tag: T) {
  return function (attr?: RawAttr, content?: RawContent) {
    return h(tag, attr, content);
  };
};
