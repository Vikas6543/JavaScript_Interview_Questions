// ********* Solution: 1
const vowels = (str) => {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((item) => letters.indexOf(item) > -1).length;
};

console.log(vowels('vikas'));

// ********* Solution: 2
function countVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello'));
