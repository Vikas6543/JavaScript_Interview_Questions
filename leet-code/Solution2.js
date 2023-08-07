// 1) *********************************************** push all 0's to the end of the array
function fizzBuzz(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz([0, 1, 2, 3, 4, 5]));
