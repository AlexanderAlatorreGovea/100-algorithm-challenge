export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  let stringifiedNumber = number.toString();
  const lengthOfNumber = stringifiedNumber.length
  if(width === lengthOfNumber) {
      return stringifiedNumber
  }

  if(width < lengthOfNumber) {
    return  stringifiedNumber.slice(width, lengthOfNumber)
  }

  return 0 + stringifiedNumber
}

//console.log(integerToStringOfFixedWidth(1234, 2));
//console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
