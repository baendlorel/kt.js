export class Indexer extends null {
  private static kid = 0;
  private static scopeIndex = 0;

  static genScopeName() {
    const index = (++Indexer.scopeIndex).toString(36);
    return 'data-k-' + index.padStart(6, '0');
  }

  static nextYid() {
    return ++Indexer.kid;
  }
}
