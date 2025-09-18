export class Indexer extends null {
  private static yid = 0;
  private static scopeIndex = 0;

  static genScopeName() {
    const index = (++Indexer.scopeIndex).toString(36);
    return 'data-y-' + index.padStart(6, '0');
  }

  static nextYid() {
    return ++Indexer.yid;
  }
}
