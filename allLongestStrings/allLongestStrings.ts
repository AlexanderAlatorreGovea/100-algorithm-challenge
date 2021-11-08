export function allLongestStrings(inputArray: string[]): string[] {
    let longestWord = 0;
    let maxWordArray = [];

    //We want to get the longest array
    inputArray.forEach(word => {
        longestWord = word.length > longestWord ? word.length : longestWord
    })

    //we want to push every word that has the length of the longest word
    inputArray.forEach(word => {
        if(word.length === longestWord) {
            maxWordArray.push(word)
        }
    })


    //we want to return the array with all the new words
    return maxWordArray;
}

console.log(allLongestStrings(["ab", "aa", "ad", "vcd", "aba"]));
