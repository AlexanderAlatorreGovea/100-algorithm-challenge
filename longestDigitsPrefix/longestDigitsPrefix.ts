export function longestDigitsPrefix(inputString: string): string {
  const newArray = [];
  const arrayOfString = inputString.split("");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < arrayOfString.length; i++) {
    if (!numbers.includes(arrayOfString[i])) {
      break;
    }

    newArray.push(arrayOfString[i]);
  }

  console.log(newArray);
}

console.log(longestDigitsPrefix("123aa1"));
