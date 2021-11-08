export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  const newArray = [];
  let absoluteVal = 0;

  for(let i = 0; i < inputArray.length; i++) {
      newArray.push(inputArray[i] - inputArray[i +1])
  }

  for(let i =0; i < newArray.length -1; i++) {
    if(newArray[i] > newArray[i + 1]) {
        absoluteVal = newArray[i]
    }
  }

  return absoluteVal
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
