import memoize from './memoize';

const factorial = n => (n === 1 ? n : n * factorial(n - 1));

const memoFactorial = memoize(factorial);

factorial(10); // console: 3628800

memoFactorial(10); // console: 3628800
