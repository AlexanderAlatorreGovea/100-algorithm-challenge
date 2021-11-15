const addeNumber = (numbers) => {
  return numbers.reduce((accumulator, total) => {
    let nums = +total;
    return (nums += accumulator);
  }, 0);
};

export function isLucky(n: number): boolean {
  const stringifiedNumber = n.toString().split("");
  const halfTheNumbersLength = stringifiedNumber.length / 2;

  let firstHalf = stringifiedNumber.slice(0, halfTheNumbersLength);
  let secondHalf = stringifiedNumber.slice(
    halfTheNumbersLength,
    stringifiedNumber.length
  );
  firstHalf = addeNumber(firstHalf);
  secondHalf = addeNumber(secondHalf);

  return firstHalf === secondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
