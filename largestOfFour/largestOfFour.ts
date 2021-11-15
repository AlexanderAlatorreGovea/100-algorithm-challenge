export function largestOfFour(nums: number[][]): number[] {
  const newArray = [];
  for (let index = 0; index < nums.length; index++) {
    const arr = nums[index].sort((a, b) => a - b);
    newArray.push(arr[arr.length - 1]);
  }
  console.log(newArray);
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
