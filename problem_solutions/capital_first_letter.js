// *********** Solution: 1
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// *********** Solution: 2
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// *********** Solution: 3
// make firstletter to uppercase in each word and sort them on the basis of length.
function myFunction(str) {
  const splitted = str.split(' ');
  const uppercasedFirstLetter = splitted.map((element) => {
    return element[0].toUpperCase() + element.slice(1);
  });
  const sorted = uppercasedFirstLetter.sort((a, b) => {
    return a.length - b.length;
  });
  return sorted.join(' ');
}

console.log(myFunction('Hello my friend vikas')); // My Hello Vikas Friend
