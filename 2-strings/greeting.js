/**
 * Write a function that takes a name a returns a greeting
 */

const greeting = (name1, name2) => {
  // Write code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [['Shawn'], 'Hello Shawn!'],
  [['Colleen'], 'Hello Colleen!']
];

require('../test.js').test(greeting, testCases);