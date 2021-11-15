export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const newArray = [];

  for (let index = 0; index < changes.length; index++) {
    changes[index] = changes[index].sort((a, b) => b - a);
    const [row1, row2] = changes[index];
    if (row1 > lastBackupTime) {
      newArray.push(row2);
    }
  }

  return [...new Set(newArray)];
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
