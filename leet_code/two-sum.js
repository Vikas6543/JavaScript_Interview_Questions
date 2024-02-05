function twoSum(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result;
}

console.log(twoSum([2, 11, 7, 15], 9));

// ***************** reduced time complexity & optimized solution
function twoSum(arr, target) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (seen.hasOwnProperty(complement)) {
      return [seen[complement], i];
    }

    seen[arr[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 11, 7, 15], 9));
