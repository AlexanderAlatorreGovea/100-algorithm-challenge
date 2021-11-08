export function containsCloseNums(nums: number[], k: number): boolean {
  let diff;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < k; j++) {
      if (nums[i] === nums[j]) {
        diff = true;
      } else {
          if(Math.abs((nums[i + 1]  - nums[i + 2] + 2 ))< k) {
            diff = false
          }
      }
    }
  }

  return diff;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
