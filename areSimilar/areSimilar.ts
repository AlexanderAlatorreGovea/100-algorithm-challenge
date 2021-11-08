export function areSimilar(a: number[], b: number[]): boolean {
  let areSimilarNumbers = true;
   
  const firstArraySet = [...new Set(a)];
  const secondArraySet = [...new Set(b)];

  if (firstArraySet.length !== a.length && secondArraySet.length !== b.length) {
    areSimilarNumbers = false;
  }

  for (let i = 0; i < a.length; i++) {
    for (let i = 0; i < b.length; i++) {
      if (a[i] === b[i]) {
        areSimilarNumbers = true;
      }
    }
  }
  return areSimilarNumbers;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
