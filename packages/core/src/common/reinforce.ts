export {};

// TODO 这个好像没必要啊！直接给一个函数叫_appendTo不就行了反正没人知道
Node.prototype._appendTo = function (this: Node, parent: Node) {
  return parent.appendChild(this);
};

declare global {
  interface Node {
    /**
     * Only `Node` and `KTAnchor` are implemented with this method
     */
    _appendTo(parent: Node): this;
  }

  interface Versioned {
    _version: number;
  }
}
