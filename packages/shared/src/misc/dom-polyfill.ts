export {};

if (typeof Node !== 'undefined') {
  if (typeof Node.prototype.remove !== 'function') {
    Object.defineProperty(Node.prototype, 'remove', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function remove(this: Node) {
        const parent = this.parentNode;
        if (parent) {
          parent.removeChild(this);
        }
      },
    });
  }

  if (typeof Node.prototype.replaceWith !== 'function') {
    Object.defineProperty(Node.prototype, 'replaceWith', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function replaceWith(this: Node, ...newNodes: Array<Node | string>) {
        const parent = this.parentNode;
        if (!parent) {
          return;
        }

        if (newNodes.length === 0) {
          parent.removeChild(this);
          return;
        }

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < newNodes.length; i++) {
          const node = newNodes[i];
          fragment.appendChild(typeof node === 'string' ? document.createTextNode(node) : node);
        }

        parent.insertBefore(fragment, this);
        parent.removeChild(this);
      },
    });
  }
}
