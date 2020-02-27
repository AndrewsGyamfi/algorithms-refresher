const ascending = (a, b) => a - b;

/**
 * @name uniqueSortOne
 * @param {array} list - items to sort
 *
 * Uses an object (`seen` in this case) to
 * track items already added to the array.
 *
 * @returns {array} sorted array
 */
const uniqueSortOne = list => {
  const seen = {};
  const sorted = [];

  for (let i = 0; i < list.length; i++) {
    const thisItem = list[i];

    if (!seen[thisItem]) {
      sorted.push(thisItem);
      seen[thisItem] = true;
    }
  }

  return sorted.sort(ascending);
};

/**
 * @name uniqueSortTwo
 * @param {array} list - items to sort
 * Set data structure maintains only
 * unique values and also implements an
 * iterable interface. So you can spread,
 * and spread and spread :)
 *
 * @returns {array} sorted array
 */
const uniqueSortTwo = list => [...new Set(list)].sort(ascending);

/**
 * @name uniqueSortThree
 * @param {array} list - items to sort
 * Unnecessary complications but I just
 * wanted to use reduce :wink
 *
 * @returns {array} sorted array
 */
const uniqueSortThree = list =>
  Object.keys(
    list.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: true,
      }),
      {}
    )
  )
    .map(Number)
    .sort(ascending);
