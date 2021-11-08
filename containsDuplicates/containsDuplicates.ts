export function containsDuplicates(a: number[]): boolean {
  let newArray: number[] = [];

  a.forEach(num => { 
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  });

  return newArray.sort();
}

console.log(containsDuplicates([1, 2, 3, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
