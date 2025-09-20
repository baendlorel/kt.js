/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & window.document is safe because it is not configurable and its setter is undefined
 */
const getElementById = document.getElementById;
const createElement = document.createElement;
const createTextNode = document.createTextNode;

export const $getElementById = (id: string) => getElementById.call(document, id);
export const $createElement = (id: HTMLTag | (string & {})) => createElement.call(document, id);
export const $createTextNode = (data: string) => createTextNode.call(document, data);

export const $on = HTMLElement.prototype.addEventListener;
export const $off = HTMLElement.prototype.removeEventListener;
export const $appendChild = HTMLElement.prototype.appendChild;
export const $setAttr = HTMLElement.prototype.setAttribute;
