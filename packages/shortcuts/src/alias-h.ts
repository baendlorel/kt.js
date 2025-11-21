import type { KTRawAttr, KTRawContent } from '@ktjs/core';
import type { HTMLTag } from '@/types/global.js';

import { h } from '@ktjs/core';
import { $defines } from '@/lib/native.js';

export const aliasH = <T extends HTMLTag>(tag: T) => {
  const newFunc = (attr?: KTRawAttr, content?: KTRawContent) => {
    return h(tag, attr, content);
  };

  $defines(newFunc, { __ktjs_h__: { value: tag } });

  return newFunc;
};
