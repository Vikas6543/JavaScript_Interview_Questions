function flattenArray(arr) {
  let result = [];

  for (let k = 0; k < arr.length; k++) {
    if (typeof arr[k] === 'number') {
      result.push(arr[k]);
    } else {
      result = result.concat(flattenArray(arr[k]));
    }
  }

  return result;
}

console.log(flattenArray([0, 1, 2, [5, 6, [7]]])); // [0, 1, 2, 5, 6, 7]
