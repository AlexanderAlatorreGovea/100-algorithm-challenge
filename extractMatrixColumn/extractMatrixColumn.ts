export function extractMatrixColumn(
  matrix: number[][],
  column: number
): number[] {
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    let matrixColumn = matrix[i];
    let secondColumn = matrixColumn[column];
    newArray = [...newArray, secondColumn];
  }
  return newArray;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
