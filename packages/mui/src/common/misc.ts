export const $ArrayPushUnique = <T>(arr: T[], item: T) => {
  if (!arr.includes(item)) {
    arr.push(item);
  }
};

export const $ArrayDelete = <T>(arr: T[], item: T) => {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
};
