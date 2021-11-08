export function crossingSum(matrix: number[][], a: number, b: number): number {
  const columnTotal = matrix[a].reduce((acc, num) => acc + num);
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    total += i !== a ? matrix[i][b] : 0
  }
  return total + columnTotal
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
