import { yon, yoff } from './enhance.js';

declare global {
  type HTMLElementEnhanced<Tag extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[Tag] & {
    /**
     * Unique id of the Yuka.js enhanced html element;
     */
    yid: number;

    yon: typeof yon;

    yoff: typeof yoff;
  };
}
