const arr1 = [1, 6, 2, 9, 10, 20, 11];
const indexes = [0, 4, 6];

function newArray(arr, indexes) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!indexes.includes(i)) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(newArray(arr1, indexes));
