function casing(str) {
  const splittedStr = str.split('');
  var result = '';

  for (var i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i] === splittedStr[i].toUpperCase()) {
      result += splittedStr[i].toLowerCase();
    } else {
      result += splittedStr[i].toUpperCase();
    }
  }

  return result;
}

console.log(casing('ViKAs')); // vIkaS
