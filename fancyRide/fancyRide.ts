export function fancyRide(l: number, fares: number[]): string {
  let newArray = [];
  for (let i = 0; i < fares.length; i++) {
    if (fares[i] * l <= 20) {
      newArray.push(fares[i]);
    }
  }
  newArray = newArray.sort((a, b) => a - b);

  const lastItem = newArray[newArray.length - 1];

  return lastItem;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
