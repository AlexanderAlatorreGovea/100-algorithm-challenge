export function candies(n: number, m: number): number {
    const maximumNumberOfCandies = Math.floor(m/n) * n;

    return maximumNumberOfCandies
}

console.log(candies(3, 10));