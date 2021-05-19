/**
 * Write a function that takes a name a returns a greeting
 *
 * To test: node 2-Greeting.js
 */

const greeting = (name) => {
  // Write code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [['Shawn'], 'Hello Shawn!'],
  [['Colleen'], 'Hello Colleen!']
];

require('./test.js').test(greeting, testCases);