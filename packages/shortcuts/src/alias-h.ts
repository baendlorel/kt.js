import type { KTRawAttr, KTRawContent, HTMLTag, HTML } from '@ktjs/core';
import { h } from '@ktjs/core';

export const aliasH: <T extends HTMLTag>(tag: T) => (attr?: KTRawAttr, content?: KTRawContent) => HTML<T> =
  <T extends HTMLTag>(tag: T) =>
  (attr?: KTRawAttr, content?: KTRawContent) =>
    h(tag, attr, content);
