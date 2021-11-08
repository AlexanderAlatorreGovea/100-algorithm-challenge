export function addTwoDigits(n: any): number {
    let stringOfNums = n.toString().split('')
    let count = 0;

    for(let i = 0; i < stringOfNums.length; i++) {
       stringOfNums[i] = parseInt(stringOfNums[i])
       count += stringOfNums[i]
    }
    return count
}

function addTwoDigits1(n) {
    let stringOfNums = n.toString().split('');

    return stringOfNums.reduce((acc, num) => {
        return parseInt(acc) + parseInt(num)
    }, 0)
}

console.log(addTwoDigits(112));
console.log(addTwoDigits1(112));