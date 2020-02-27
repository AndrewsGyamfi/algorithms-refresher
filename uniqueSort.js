const ascending = (a, b) => a - b;

const uniqueSortOne = list => {
  const seen = {};
  const sorted = [];

  for (let i = 0; i < list.length; i++) {
    const thisItem = list[i];

    if (seen[thisItem]) {
      continue;
    }
    sorted.push(thisItem);
    seen[thisItem] = true;
  }

  return sorted.sort(ascending);
};

const uniqueSortTwo = list => [...new Set(list)].sort(ascending);

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
