// 1. How can I remove a specific item from an array in JavaScript?
function removeElement(arr, element) {
  let index = arr.indexOf(element);

  if (index > 0) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeElement([1, 2, 3, 4, 5, 6], 3));

// 2. How to check whether a string contains a substring in JavaScript?
function checkSubstring(string, substring) {
  return string.includes(substring);
}

console.log(checkSubstring('foo', 'oo'));

// 3. Use console.table() to Display Arrays and Objects in the Console

// 4. Use the Spread Operator to Copy and Merge Arrays

// 5. Use the padStart() and padEnd() Methods to Pad a string with a Character

// 6. Use the includes() Method to Check if an Array Contains a Specific Value

// 7. Use the flat() Method to Flatten an Array

// 8. Preserve Object Integrity by Sealing

// 9. Use the reduce() Method to Sum Up All Elements in an Array

// 10. Use the reduceRight() Method to Sum Up All Elements in an Array
