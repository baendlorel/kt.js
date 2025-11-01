import { HTMLTag, otherstring } from '@/global.js';

/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & window.document is safe because it is not configurable and its setter is undefined
 */
const createElement = document.createElement;
const createTextNode = document.createTextNode;
const createDocumentFragment = document.createDocumentFragment;

export const $h = function (id: HTMLTag | otherstring) {
  return createElement.call(document, id);
};
export const $textNode = function (data: string = '') {
  return createTextNode.call(document, data);
};
export const $fragment = function () {
  return createDocumentFragment.call(document);
};

export const $on = HTMLElement.prototype.addEventListener;
export const $setAttr = HTMLElement.prototype.setAttribute;

export const $appendChild = HTMLElement.prototype.appendChild;
export const $append = // for ie 11
  typeof HTMLElement.prototype.append === 'function'
    ? HTMLElement.prototype.append
    : function (this: HTMLElement, ...nodes: (Node | string)[]) {
        if (nodes.length < 50) {
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(this, $textNode(node));
            } else {
              $appendChild.call(this, node);
            }
          }
        } else {
          const fragment = $fragment();
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(fragment, $textNode(node));
            } else {
              $appendChild.call(fragment, node);
            }
          }
          $appendChild.call(this, fragment);
        }
      };
