// ************************* 1) How can I remove a specific item from an array in JavaScript?
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array);

// ************************** 2) How to check whether a string contains a substring in JavaScript?
// solution 1
const string = 'foo';
const substring = 'oo';

console.log(string.includes(substring)); // true

// solution 2
var string1 = 'foo';
var substring1 = 'oo';

console.log(string.indexOf(substring) !== -1); // true

// *********************** 3) Use console.table() to Display Arrays and Objects in the Console
// console.log will display the array or object as usual, but console.table will tabularize the index and values for you.
const myArr = ['Krishna', 'Vikas', 10, true];

console.log(myArr);
console.table(myArr);

// ********************** 4) generate a random between given numbers
console.log(Math.floor(Math.random() * 10) + 1);

// ********************** 5) Methods of the Math Object
// Get the square root of a number
Math.sqrt(4);

// convert a number to absolute value
x = Math.abs(-5); // 5

// Round up a number to the nearest whole number
x = Math.round(4.6);

// Round up a number
x = Math.ceil(4.2); // 5

// Round down a number
x = Math.floor(4.9); // 4

// Exponent of a number
x = Math.pow(2, 3); // 8

// Get the minimum number
x = Math.min(4, 5, 3); // 3

// Get the maximum number
x = Math.max(4, 5, 3); // 5;

// ************************ 6) Capitalize the First Letter of Any Word
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr('krishna'));

// ************************ 7) Use the Spread Operator to Copy and Merge Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

// *********************** 8) Use the padStart() and padEnd() Methods to Pad a string with a Character
const originalString = 123;
const paddedString = String(originalString).padStart(5, '0');
console.log(paddedString); // *****00123

// *********************** 9) Flatten an array
const numbers = [
  [2, 1],
  [4, 4],
  [6, 9],
  [8, 16],
  [10, 25],
];

console.log(numbers.flat());

// ********************* 10) Preserve Object Integrity by Sealing
const person1 = {
  name: 'Krishna',
  city: 'Mathura',
};

// seal the object with Object.seal()
Object.seal(person1);

console.log(person1.name); // Krishna

person1.country = 'india'; // You can't add entries to a sealed object
console.log(person1.country); // undefined

// ******************** 11) Use the trim(), trimStart(), and trimEnd() to Handle White Spaces
const greet = '   Hello world!   ';
console.log(greet.trim()); // Hello world!

const greet2 = '   Hello world!   ';
console.log(greet2.trimStart()); // Output: 'Hello, world!   '

// ********************* 12) Use the startsWith() and endsWith() String Methods to Get the Start and End of a String
const message = 'Hello Vikas';

console.log(message.startsWith('H')); // true
console.log(message.startsWith('h')); // false
console.log(message.endsWith('s')); // true
console.log(message.endsWith('d')); // false
