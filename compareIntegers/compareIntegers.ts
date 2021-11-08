function setStringToNumber(string) {
  return parseInt(string);
}

export function compareIntegers(a: string, b: string): string {
  const numberA = setStringToNumber(a);
  const numberB = setStringToNumber(b);
  let result = "";

  if (numberA < numberB) {
    result = "less";
  }

  if (numberA === numberB) {
    result = "equal";
  }

  if (numberA > numberB) {
    result = "greater";
  }

  console.log(numberB);

  return result;
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
