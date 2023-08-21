// *********** Solution: 1
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// *********** Solution: 2
function areAnagrams(str1, str2) {
  // Remove spaces and convert both strings to lowercase.
  str1 = str1.split(' ').join('').toLowerCase();
  str2 = str2.split(' ').join('').toLowerCase();

  // If the lengths of the two strings are different, they cannot be anagrams.
  if (str1.length !== str2.length) {
    return false;
  }

  // Initialize two empty objects to store character frequency counts.
  const charMap1 = {};
  const charMap2 = {};

  // Iterate through each character in the first string (str1).
  for (let char of str1) {
    // If the character already exists in charMap1, increment its count.
    if (charMap1[char]) {
      charMap1[char]++;
    } else {
      // If the character doesn't exist in charMap1, set its count to 1.
      charMap1[char] = 1;
    }
  }

  // Iterate through each character in the second string (str2).
  for (let char of str2) {
    // If the character already exists in charMap2, increment its count.
    if (charMap2[char]) {
      charMap2[char]++;
    } else {
      // If the character doesn't exist in charMap2, set its count to 1.
      charMap2[char] = 1;
    }
  }

  // Compare the character frequency counts between the two objects.
  for (let char in charMap1) {
    // If the counts for the same character are different, the strings are not anagrams.
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  // If all character counts match, the strings are anagrams.
  return true;
}

// Test cases
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('astronomer', 'moonstarer')); // true
