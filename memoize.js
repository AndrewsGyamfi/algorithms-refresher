/**
 * Basic generic memoization
 * function
 * @name memoize
 * @param {Function} cb - callback function
 * @returns {Function}
 */
const memoize = cb => {
  const cache = {};
  return (...args) => {
    const cacheKey = args.join();

    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    cache[cacheKey] = cb(...args);

    return cache[cacheKey];
  };
};

export default memoize;
