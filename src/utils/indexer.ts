export const Indexer = {
  kid: 0,
  nextKid() {
    return ++Indexer.kid;
  },
};
