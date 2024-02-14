// ********** Solution: 1
// using for loop
function findDuplicates(arr) {
  const duplicates = [];
  const unique = [...new Set(arr)];
  unique.forEach((item) => {
    if (arr.filter((i) => i === item).length > 1) {
      duplicates.push(item);
    }
  });
  return duplicates;
}

// using filter
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(
  findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// ********** Solution: 2
function findDuplicate(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6]));

// ********** Solution: 3
// merge two arrays and removes all duplicates elements Using for loop
function mergeArrays(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }
  var uniqueArray = newArray.filter(function (elem, pos) {
    return newArray.indexOf(elem) == pos;
  });
  return uniqueArray;
}

console.log(mergeArrays([1, 2, 3], [2, 30, 1]));

// ********** Solution: 4
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 10]));

// ********** Solution: 5 (remove duplicate values and dont use inbuilt methods)
function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let item of arr) {
    let isDuplicateValue = false;

    for (let item2 of uniqueArray) {
      if (item === item2) {
        isDuplicateValue = true;
        break;
      }
    }

    if (!isDuplicateValue) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 4, 2, 5, 6, 1])); // Output: [ 1, 2, 3, 4, 5, 6 ]
