import { HTMLTag } from '@/global.js';
import { h } from '@/core/h/index.js';
import { RawAttribute, RawContent } from '@/types/h.js';

export const aliasH =
  <T extends HTMLTag>(tag: T) =>
  (attr?: RawAttribute, content?: RawContent) =>
    h(tag, attr, content);
