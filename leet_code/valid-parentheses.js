function isValid(str) {
  const stack = [];
  const parenthesesMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of str) {
    if (char in parenthesesMap) {
      const topElement = stack.length === 0 ? '#' : stack.pop();
      if (topElement !== parenthesesMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValid('{([])}')); // true
