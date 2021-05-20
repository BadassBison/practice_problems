/**
 * Write a function that takes an integer and returns a boolean
 */

const isOdd = (num) => {
  // Write your code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [[1], true],
  [[2], false],
  [[23], true],
  [[54], false],
  [[1001], true],
  [[10890], false],
  [[100000024], false]
];

require('../test.js').test(isOdd, testCases);