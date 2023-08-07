// 1) ******************* How do you check if a string contains a specific substring in JavaScript?
// using includes() method
const str = 'hello world';
const substr = 'world';

if (str.includes(substr)) {
  console.log('The string contains the substring');
} else {
  console.log('The string does not contain the substring');
}

// using indexOf() method
const str2 = 'hello world';
const substr2 = 'world';

if (str2.indexOf(substr2) !== -1) {
  console.log('The string contains the substring');
} else {
  console.log('The string does not contain the substring');
}

// 2) ******************* How do you reverse a string in JavaScript using loop?
function reverseString(str3) {
  let reversedStr = '';
  for (let i = str3.length - 1; i >= 0; i--) {
    reversedStr += str3[i];
  }
  return reversedStr;
}

console.log(reverseString('hello')); // Output: "olleh"

// 3) ******************* How do you find the maximum or minimum value in an array in JavaScript?
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([10, 5, 20, 8, 15])); // Output: 20
