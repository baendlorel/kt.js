export const enum AType {
  Content = 'kt-content',
  Fragment = 'kt-fragment',
  For = 'kt-for',
  If = 'kt-if',
  Async = 'kt-async',
}

// TODO 也许应该在content的append处加入对Anchor的处理
export abstract class KTAnchor extends Comment {
  readonly atype: AType;

  constructor(atype: AType) {
    super();
    this.atype = atype;
  }

  _appendTo(parent: Node): void {
    parent.appendChild(this);
  }

  _remove(): void {
    this.remove();
  }
}

export const _isAnchor = (o: any): o is KTAnchor => typeof o?.atype === 'string';
