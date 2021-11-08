// function deleteRepeatedNumbers(string) {
//   const stringArray = string.split("");
//   const newArray = [];
//   stringArray.forEach(element => {
//     if (!newArray.includes(element)) {
//       newArray.push(element);
//     }
//   });

//   return newArray;
// }

// function compareItemsInArrays(newStringOne, newStringTwo) {
//   let count = 0;
//   for (let element of newStringOne) {
//     if (newStringTwo.includes(element)) {
//       count++;
//     }
//   }

//   return count;
// }

// export function commonCharacterCount(s1: string, s2: string): number {
//   const newStringOne = deleteRepeatedNumbers(s1);
//   const newStringTwo = deleteRepeatedNumbers(s2);
//   const result = compareItemsInArrays(newStringOne, newStringTwo);

//   return result;
// }

function strObject(string) {
  const chars = {};

  for (let char of string) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  return chars;
}

function getCharList(stringOne, stringTwo) {
  const stringOneKey = Object.getOwnPropertyNames(stringOne);
  const stringTwoKey = Object.getOwnPropertyNames(stringOne);
  let count = 0;

  for (let char in stringOne) {
    if (stringOne[char] && stringTwo[char]) {
      if (stringOne[char] < stringTwo[char]) {
        count += stringOne[char];
      } else {
        count += stringTwo[char];
      }
    }
  }

  return count;
}

export function commonCharacterCount(s1: string, s2: string): number {
  const stringOne = strObject(s1);
  const stringTwo = strObject(s2);
  const result = getCharList(stringOne, stringTwo);

  return result;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
