export namespace Indexer {
  let kid = 0;
  export function nextKid() {
    return ++kid;
  }
}
