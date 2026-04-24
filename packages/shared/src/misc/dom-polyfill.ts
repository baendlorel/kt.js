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
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  });

  installMethod('replaceWith', function (this: Node, ...newNodes: Array<Node | string>) {
    if (!this.parentNode) {
      return;
    }

    if (newNodes.length === 0) {
      this.parentNode.removeChild(this);
      return;
    }

    const fragment = document.createDocumentFragment();
    fragment.append.apply(fragment, newNodes);
    this.parentNode.insertBefore(fragment, this);
    this.parentNode.removeChild(this);
  });
}
