// 1) ***************************************** find the minimum number in two array and show them in a string
function minNumber(nums1, nums2) {
  let mini1;
  let mini2;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
  mini1 = +nums1[0];

  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[i] > nums2[j]) {
        temp = nums2[i];
        nums2[i] = nums2[j];
        nums2[j] = temp;
      }
    }
  }

  mini2 = +nums2[0];

  const result = mini1.toString() + mini2.toString();

  return result;
}

console.log(minNumber([4, 1, 3], [5, 7])); // 1,5

// 2) ************************************************************************* find index of two sum
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        const result = [i, j];
        return result;
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// 3) ************************************************************ find the median
function findMedianSortedArrays(nums1, nums2) {
  const mergeArray = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergeArray.length % 2 === 0) {
    let specificPlace = Math.floor(mergeArray.length / 2);
    let median =
      (mergeArray[specificPlace - 1] + mergeArray[specificPlace]) / 2;
    return median;
  } else {
    let median = Math.floor(mergeArray.length / 2);
    return mergeArray[median];
  }
}

console.log(findMedianSortedArrays([1, 3], [2])); // median is 2

// 4) *********************************************** checks for palindrome for both str and numbers
function palindrome(value) {
  const str = value.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome(121)); // true

// 5) *********************************************** factorial
function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120

// another solution
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5)); // 120

// 6) *********************************************** Anagram
function anagram(str1, str2) {
  let result = {};

  if (str1.length !== str2.length) {
    console.log('both strings are not of same length');
  }

  for (let i = 0; i < str1.length; i++) {
    result[str1[i]] = (result[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!result[str2[i]]) {
      return false;
    }
    result[str2[i]]--;
  }
  return true;
}

console.log(anagram('vikass', 'kaviss')); // true

// 7) *********************************************** push all 0's to the end of the array
function pushZeroToEnd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }

  return arr;
}
console.log(pushZeroToEnd([0, 3, 0, 4, 5])); // [ 3, 4, 5, 0, 0 ]
