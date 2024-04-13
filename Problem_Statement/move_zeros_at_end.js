function moveZerosToEnd(nums) {
  let nonZeroIndex = 0; // Initialize the pointer for non-zero elements

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // If current element is not zero
    if (nums[i] !== 0) {
      // Swap current element with the element at nonZeroIndex
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++; // Move pointer to next position
    }
  }

  return nums;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([4, 2, 4, 0, 0, 3, 0, 5, 1, 0])); // Output: [1, 2, 3, 4, 4, 5, 0, 0, 0, 0]
