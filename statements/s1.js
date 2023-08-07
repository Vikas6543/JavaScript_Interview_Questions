// ********************************** make firstletter to uppercase in each word and sort them on the basis of length.
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

console.log(myFunction('Hello my friend vikas'));

// ********************************** Write a function that takes the number of seconds and returns the digital format in the form of 01:12:23.
function digitalClock(sec) {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec % 3600) / 60);
  let seconds = sec % 60;

  // if hour is less than 10, add 0 in front of it
  if (hours < 10) {
    hours = '0' + hours;
  }

  // if minutes is less than 10, add 0 in front of it
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  // if seconds is less than 10, add 0 in front of it
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

console.log(digitalClock(5025));

// ********************************* reverse the string and make each letter from lowercase to uppercase and vice versa
function invert(str) {
  const splitted = str.split(' ');
  const reversed = splitted.reverse();
  const inverted = reversed.map((word) => {
    return word
      .split('')
      .map((letter) => {
        if (letter === letter.toUpperCase()) {
          return letter.toLowerCase();
        } else {
          return letter.toUpperCase();
        }
      })
      .join('');
  });
  return inverted.join(' ');
}

console.log(invert('HellO viKaS')); // VIkAs hELLo

// ********************************* reverse the string & make each letter from lowercase to uppercase and vice versa
function invert(str) {
  const splitted = str.split(' ');
  const reversed = splitted.reverse();
  const result = reversed.map((word) => {
    return word
      .split('')
      .map((letter) => {
        if (letter === letter.toUpperCase()) {
          return letter.toLowerCase();
        } else {
          return letter.toUpperCase();
        }
      })
      .join('');
  });

  return result.join(' ');
}

console.log(invert('HellO viKaS')); // VIkAs hELLo
