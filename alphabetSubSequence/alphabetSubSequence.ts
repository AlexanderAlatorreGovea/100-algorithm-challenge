// export function alphabetSubsequence(s: string): boolean {

//   const stringArray = s.split("");
//   for (let i = 0; i < stringArray.length; i++) {
//     if(stringArray[i -1] > stringArray[i]) {
//         return false
//     }
//   }
//   return true
// }

export function alphabetSubsequence(s: string): boolean {
  const chars = s.split("");
  const charValues = [];

  chars.forEach(char => {
    charValues.push(char.charCodeAt(0));
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence("zab"));
//console.log(alphabetSubsequence("effg"));
//console.log(alphabetSubsequence("cdce"));
//console.log(alphabetSubsequence("ace"));
//console.log(alphabetSubsequence("bxz"));
