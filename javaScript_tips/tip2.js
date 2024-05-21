// **************************** 1) How can I remove a specific item from an array.
function removeElement(arr, element) {
  let index = arr.indexOf(element);

  if (index > 0) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeElement([1, 2, 3, 4, 5, 6], 3));

// **************************** 2) How to check whether a string contains a substring.
function checkSubstring(string, substring) {
  return string.includes(substring);
}

console.log(checkSubstring('foo', 'oo'));

// **************************** 3) Use console.table() to Display Arrays and Objects in the Console.
function displayArray(array) {
  console.table(array);
}

displayArray([1, 2, 3, 4, 5, 6]);

// **************************** 4) Use the Spread Operator to Copy and Merge Arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// **************************** 5) Use the padStart() and padEnd() Methods to Pad a string with a Character.
function padString(string, length, character) {
  return string.padStart(length, character);
}

console.log(padString('123', 5, '0'));

// **************************** 6) Use the includes() Method to Check if an Array Contains a Specific Value.
function checkArray(array, value) {
  return array.includes(value);
}

console.log(checkArray([1, 2, 3, 4, 5, 6], 3));

// **************************** 7) Use the flat() Method to Flatten an Array.
function flattenArray(array) {
  return array.flat();
}

console.log(
  flattenArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// **************************** 8) Use the reduce() Method to Sum Up All Elements in an Array.
function sumArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
