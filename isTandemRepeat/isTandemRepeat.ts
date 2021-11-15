export function isTandemRepeat(inputString: string): boolean {
  const fullLength = inputString.length;
  const halfTheLength = inputString.length / 2;
  const firstHalf = inputString.slice(0, halfTheLength);
  const secondHalf = inputString.slice(firstHalf.length, fullLength);

  return firstHalf === secondHalf;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
