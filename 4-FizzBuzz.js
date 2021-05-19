/**
 * Write a function that takes an integer and returns an array
 * of integers. The array will contain strings of the integer starting at one and
 * counting up to n. If an integer is divisible by 3 and 5, have 'FizzBuzz' instead
 * of the value. If the integer is divisible by 3, have 'Fizz' instead of the value.
 * If the integer is divisible by 5, have 'Buzz' instead of the value
 *
 * To test: node 4-FizzBuzz.js
 */

const fizzBuzz = (num) => {
  // Write code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [[3], ['1', '2', 'Fizz']],
  [[5], ['1', '2', 'Fizz', '4', 'Buzz']]
];

require('./test.js').test(fizzBuzz, testCases);