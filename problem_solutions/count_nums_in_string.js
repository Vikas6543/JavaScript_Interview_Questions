function digitCount(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= '0' && array[i] <= '9') {
      total += parseInt(array[i]);
    }
  }
  return total;
}

console.log(digitCount('vik1as9')); // 10
