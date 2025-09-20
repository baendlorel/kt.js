// & Remove `bind` because it is shockingly slower than wrapper

export const $getElementById = (id: string) => document.getElementById(id);
export const $createElement = (id: HTMLTag | (string & {})) => document.createElement(id);
export const $createTextNode = (data: string) => document.createTextNode(data);

export const $on = HTMLElement.prototype.addEventListener;
export const $off = HTMLElement.prototype.removeEventListener;
export const $appendChild = HTMLElement.prototype.appendChild;
export const $setAttr = HTMLElement.prototype.setAttribute;
