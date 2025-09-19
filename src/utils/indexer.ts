export class Indexer extends null {
  private static kid = 0;
  private static index = 0;

  static genIndex() {
    const index = (++Indexer.index).toString(36);
    return 'data-k-' + index.padStart(6, '0');
  }

  static nextKid() {
    return ++Indexer.kid;
  }
}
