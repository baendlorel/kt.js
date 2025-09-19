export class Indexer extends null {
  private static kid = 0;
  private static scopeIndex = 0;
  private static cssId = 0;

  static genScopeName() {
    const index = (++Indexer.scopeIndex).toString(36);
    return 'data-k-' + index.padStart(6, '0');
  }

  static genCssId() {
    const index = (++Indexer.cssId).toString(36);
    return 'kt-css-' + index.padStart(6, '0');
  }

  static nextKid() {
    return ++Indexer.kid;
  }
}
