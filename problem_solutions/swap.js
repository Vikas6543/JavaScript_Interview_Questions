// *********** Solution: 1
// swap first and last item in an array
function swap(array) {
  if (array.length < 2) {
    return array;
  }
  const firstIndex = array[0];
  const lastIndex = array[array.length - 1];

  array[0] = lastIndex;
  array[array.length - 1] = firstIndex;

  return array;
}

console.log(swap([1, 2, 3, 4]));

// *********** Solution: 2
// divide an array into two halves and swap first half with second half
function twoHalf(array) {
  if (array.length % 2 !== 0) {
    return false;
  }

  // method 1
  const midArray = array.length / 2;
  const firstHalfArray = array.slice(0, midArray);
  const secondHalf = array.slice(midArray);
  return [...secondHalf, ...firstHalfArray];

  // method 2
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length / 2 + i];
    array[array.length / 2 + i] = temp;
  }
  return array;
}

console.log(twoHalf([1, 2, 3, 7, 8, 9]));

// *********** Solution: 3
// swap pairs of adjacent digits of a given number of even length
function swapAdjacentPairs(number) {
  const numberStr = number.toString();
  let swappedStr = '';

  // Loop through the digits of the number in steps of 2
  for (let i = 0; i < numberStr.length; i += 2) {
    // Check if there's a pair of digits to swap
    if (i + 1 < numberStr.length) {
      // If yes, swap the positions of the adjacent digits
      swappedStr += numberStr[i + 1] + numberStr[i];
    } else {
      // If only one digit is left, keep it as is
      swappedStr += numberStr[i];
    }
  }

  return parseInt(swappedStr, 10);
}

console.log(swapAdjacentPairs(123456)); // 214365
