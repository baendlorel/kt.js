import { HTMLTag, otherstring } from '@/global.js';
import { ktnull } from './consts.js';

/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & `window.document` is safe because it is not configurable and its setter is undefined
 */
const dom = document;
const createElement = dom.createElement;
const createTextNode = dom.createTextNode;
const createDocumentFragment = dom.createDocumentFragment;

export const $h = function (id: HTMLTag | otherstring) {
  return createElement.call(dom, id);
};
export const $textNode = function (data: string = '') {
  return createTextNode.call(dom, data);
};
export const $fragment = function () {
  return createDocumentFragment.call(dom);
};

export const $on = HTMLElement.prototype.addEventListener;
export const $setAttr = HTMLElement.prototype.setAttribute;

export const $appendChild = HTMLElement.prototype.appendChild;
const originAppend = HTMLElement.prototype.append;
export const $append: typeof originAppend = // for ie 11
  typeof originAppend === 'function'
    ? function (this: HTMLElement, ...args) {
        return originAppend.apply(
          this,
          args.filter((a) => a !== ktnull)
        );
      }
    : function (this: HTMLElement, ...nodes: (Node | string)[]) {
        if (nodes.length < 50) {
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(this, $textNode(node));
            } else if (node !== ktnull) {
              $appendChild.call(this, node);
            }
          }
        } else {
          const fragment = $fragment();
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(fragment, $textNode(node));
            } else if (node !== ktnull) {
              $appendChild.call(fragment, node);
            }
          }
          $appendChild.call(this, fragment);
        }
      };
