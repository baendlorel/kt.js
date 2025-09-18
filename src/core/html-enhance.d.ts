import { yon, yoff } from './enhance.js';

declare global {
  type HTMLElementEnhanced<Tag extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[Tag] & {
    yid: number;

    yon: typeof yon;

    yoff: typeof yoff;
  };
}
