import { HTMLTag } from '@/global.js';
import { h } from '@/core/h/index.js';
import { RawAttr, RawContent } from '@/types/h.js';

export const aliasH =
  <T extends HTMLTag>(tag: T) =>
  (attr?: RawAttr, content?: RawContent) =>
    h(tag, attr, content);
