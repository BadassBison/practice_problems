/**
 * person
 *
 * When given a name, age, and favorite food, return an object that represents that person
 */

const person = () => {
  // Write code here
}

// ex. [[paramArray], expectedResult]
const testCases = [
  [['Shawn', 35, 'Salmon'], { name: 'Shawn', age: 35, food: 'Salmon' }]
];

// FIXME: Objects aren't testable in the current state
require('../test.js').test(person, testCases);

