// # internal methods that cannot be placed in @ktjs/shared

export const IdGenerator = {
  _refOnChangeId: 1,
  get refOnChangeId() {
    return this._refOnChangeId++;
  },
  _computedOnChangeId: 1,
  get computedOnChangeId() {
    return this._computedOnChangeId++;
  },
  _kid: 1,
  get kid() {
    return this._kid++;
  },
};
