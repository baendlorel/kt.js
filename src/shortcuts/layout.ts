import { bindParams } from 'bind-params';
import { h } from '@/core/h/index.js';
import { HAlias } from '@/types/h.js';

/** Alias for h('header', ...) - Header section */
export const header: HAlias<'header'> = bindParams(h, 'header');

/** Alias for h('nav', ...) - Navigation section */
export const nav: HAlias<'nav'> = bindParams(h, 'nav');

/** Alias for h('main', ...) - Main content */
export const main: HAlias<'main'> = bindParams(h, 'main');

/** Alias for h('article', ...) - Article block */
export const article: HAlias<'article'> = bindParams(h, 'article');

/** Alias for h('section', ...) - Section block */
export const section: HAlias<'section'> = bindParams(h, 'section');

/** Alias for h('aside', ...) - Aside (sidebar) */
export const aside: HAlias<'aside'> = bindParams(h, 'aside');

/** Alias for h('footer', ...) - Footer section */
export const footer: HAlias<'footer'> = bindParams(h, 'footer');

/** Alias for h('figure', ...) - Figure with caption */
export const figure: HAlias<'figure'> = bindParams(h, 'figure');

/** Alias for h('figcaption', ...) - Figure caption */
export const figcaption: HAlias<'figcaption'> = bindParams(h, 'figcaption');
