export function firstNotRepeatingCharacter(s: string): string {
  s = s.split("").sort();
  let newChar;
  const newObject = {};
  //iterate through the string with a for of loop
  for (let char of s) {
    if (!newObject[char]) {
      newObject[char] = 1;
    } else {
      newObject[char]++;
    }
  }

  for (let char in newObject) {
    if (newObject[char] === 1) {
      newChar = char;
      break;
    } else {
      newChar = "_";
    }
  }

  return newChar;
}

console.log(firstNotRepeatingCharacter("abazcabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
