export {};

if (typeof Node !== 'undefined') {
  const targets: Node[] = [];

  if (typeof Element !== 'undefined') {
    targets.push(Element.prototype);
  }
  if (typeof CharacterData !== 'undefined') {
    targets.push(CharacterData.prototype);
  }
  if (typeof DocumentType !== 'undefined') {
    targets.push(DocumentType.prototype);
  }
  if (targets.length === 0) {
    targets.push(Node.prototype);
  }

  const installMethod = (name: 'remove' | 'replaceWith', method: (...args: any[]) => void) => {
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      if (typeof (target as any)[name] !== 'function') {
        Object.defineProperty(target, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: method,
        });
      }
    }
  };

  installMethod('remove', function (this: Node) {
    const parent = this.parentNode;
    if (parent) {
      parent.removeChild(this);
    }
  });

  installMethod('replaceWith', function (this: Node, ...newNodes: Array<Node | string>) {
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
  });
}
