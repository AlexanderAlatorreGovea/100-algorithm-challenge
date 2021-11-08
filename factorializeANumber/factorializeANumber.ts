export function factorializeANumber(num: number): number {
  let counter = 1;
  for (let i = 1; i <= num; i++) {
    counter = counter * i;
  }
  return counter;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

function confirmEnding(string: type, ending) {
  console.log(string.slice(3));
  return string.slice(string.length - ending.length) === ending;
}

console.log(confirmEnding("Bastian", "ian"));
