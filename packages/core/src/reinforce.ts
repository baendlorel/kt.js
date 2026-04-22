export {};

Node.prototype.$appendTo = function (this: Node, parent: Node) {
  parent.appendChild(this);
};

declare global {
  interface Node {
    /**
     * Only `Node` and `KTAnchor` are implemented with this method
     * @internal
     */
    $appendTo(parent: Node): void;
  }
}
