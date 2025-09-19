export const $getElementById = document.getElementById.bind(document);
export const $createElement = document.createElement.bind(document);
export const $createTextNode = document.createTextNode.bind(document);

export const $on = HTMLElement.prototype.addEventListener;
export const $off = HTMLElement.prototype.removeEventListener;
export const $appendChild = HTMLElement.prototype.appendChild;
export const $setAttr = HTMLElement.prototype.setAttribute;
