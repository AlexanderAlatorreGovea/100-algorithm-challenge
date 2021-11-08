export function circleOfNumbers(n: number, firstNumber: number): number {
  const midPoint = n / 2;
  let newArray = [];

  for (let i = 0; i < n; i++) {
    newArray.push(i);
  }
  
  return firstNumber + newArray[midPoint];
}

console.log(circleOfNumbers(10, 2));
