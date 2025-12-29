/**
 * & Remove `bind` because it is shockingly slower than wrapper
 * & `window.document` is safe because it is not configurable and its setter is undefined
 */

export const $appendChild = HTMLElement.prototype.appendChild;
const originAppend = HTMLElement.prototype.append;
export const $append: typeof originAppend = // for ie 9/10/11
  typeof originAppend === 'function'
    ? function (this: HTMLElement, ...args) {
        return originAppend.apply(this, args);
      }
    : function (this: HTMLElement, ...nodes: Array<Node | string>) {
        if (nodes.length < 50) {
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(this, document.createTextNode(node));
            } else {
              $appendChild.call(this, node);
            }
          }
        } else {
          const fragment = document.createDocumentFragment();
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (typeof node === 'string') {
              $appendChild.call(fragment, document.createTextNode(node));
            } else {
              $appendChild.call(fragment, node);
            }
          }
          $appendChild.call(this, fragment);
        }
      };
