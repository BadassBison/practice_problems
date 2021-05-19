/**
 * When passed a positive integer, return a boolean pertaining to if the number is prime
 *
 * To test: node 6-IsPrime.js
 */

const isPrime = (num) => {
  // Write code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [[0], false],
  [[1], false],
  [[2], true],
  [[3], true]
];

require('./test.js').test(isPrime, testCases);