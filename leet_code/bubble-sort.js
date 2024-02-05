function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 2, 1, 6, 0, 5, 3])); // [0, 1, 2, 3, 4, 5, 6]
