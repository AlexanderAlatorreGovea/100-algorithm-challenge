export function arrayConversion(inputArray ) {
    let isOdd = true;

     while(inputArray.length !== 1) {
        inputArray = addOrMultiply(inputArray, isOdd)
        isOdd = !isOdd
     }

    return inputArray[0]
}

function addOrMultiply(inputArray, isOdd) {
    const sum = [];

    if(isOdd) {
        for(let i = 0; i < inputArray.length; i += 2) {
            sum.push(inputArray[i] + inputArray[i + 1])
        }
    } else {
        for(let i = 0; i < inputArray.length; i += 2) {
            sum.push(inputArray[i] * inputArray[i + 1])
        }
    }

    return sum
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
