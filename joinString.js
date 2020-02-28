const joinString = (list, character) => {
  const recursiveJoin = (index, resultSoFar) => {
    resultSoFar += list[index];

    return index === list.length - 1
      ? resultSoFar
      : recursiveJoin(index + 1, resultSoFar + character);
  };

  return recursiveJoin(0, '');
};
