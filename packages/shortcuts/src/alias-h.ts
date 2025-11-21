import type { KTRawAttr, KTRawContent } from '@ktjs/core';
import type { HTMLTag } from '@/types/global.js';

import { h } from '@ktjs/core';

export const aliasH = <T extends HTMLTag>(tag: T) => {
  const newFunc = (attr?: KTRawAttr, content?: KTRawContent) => {
    return h(tag, attr, content);
  };

  window.__ktjs__.defines(newFunc, { __ktjs_h__: { value: tag } });

  return newFunc;
};
