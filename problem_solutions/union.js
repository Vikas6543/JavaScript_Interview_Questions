// *********** Solution: 1
function union(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++) {
    if (newArr.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 9])); // [ 1, 2, 3, 4, 5, 9 ]

// *********** Solution: 2
// Using ES6
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); // [ 1, 2, 3, 100, 10 ]
