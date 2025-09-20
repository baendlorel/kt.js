/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & window.document is safe because it is not configurable and its setter is undefined
 */
const getElementById = document.getElementById;
const createElement = document.createElement;
const createTextNode = document.createTextNode;
const querySelector = document.querySelector;
const querySelectorAll = document.querySelectorAll;

export const $getElementById = (id: string) => getElementById.call(document, id);
export const $query: typeof querySelector = (selector: string) =>
  querySelector.call(document, selector);
export const $queryAll: typeof querySelectorAll = (selector: string) =>
  querySelectorAll.call(document, selector);

export const $createElement = (id: HTMLTag | (string & {})) => createElement.call(document, id);
export const $createTextNode = (data: string) => createTextNode.call(document, data);

export const $on = HTMLElement.prototype.addEventListener;
export const $off = HTMLElement.prototype.removeEventListener;
export const $appendChild = HTMLElement.prototype.appendChild;
export const $remove = HTMLElement.prototype.remove;
export const $removeChild = HTMLElement.prototype.removeChild;
export const $replaceChild = HTMLElement.prototype.replaceChild;
export const $setAttr = HTMLElement.prototype.setAttribute;
export const $getAttr = HTMLElement.prototype.getAttribute;
export const $sremoveAttr = HTMLElement.prototype.removeAttribute;

export const $domTokenListAdd = DOMTokenList.prototype.add;
