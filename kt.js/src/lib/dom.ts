import { HTMLTag, otherstring } from '@/global.js';

/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & window.document is safe because it is not configurable and its setter is undefined
 */
const createElement = document.createElement;
const createTextNode = document.createTextNode;

export const $h = (id: HTMLTag | otherstring) => createElement.call(document, id);
export const $textNode = (data: string = '') => createTextNode.call(document, data);

export const $append = HTMLElement.prototype.append;
export const $on = HTMLElement.prototype.addEventListener;
export const $setAttr = HTMLElement.prototype.setAttribute;
