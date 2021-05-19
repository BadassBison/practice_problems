/**
 * When passed an integer, return the fibonacci sequence in an array up to n inclusively
 *
 * To test: node 5-Fibonacci.js
 */

const fibonacci = (n) => {
  // Write code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [[0], []],
  [[1], [0]],
  [[2], [0, 1]],
  [[3], [0, 1, 1]],
  [[4], [0, 1, 1, 2]],
  [[5], [0, 1, 1, 2, 3]]
];

require('./test.js').test(fibonacci, testCases);