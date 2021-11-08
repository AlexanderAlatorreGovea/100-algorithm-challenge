export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0;

    for(let i = 0; i < inputArray.length; i++) {
        sum = inputArray[k] + inputArray[k - 1]
    }

    return sum
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));