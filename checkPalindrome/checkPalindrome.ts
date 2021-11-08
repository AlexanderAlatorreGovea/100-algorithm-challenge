export function checkPalindrome(inputString: string): boolean {
    if(inputString.length === 0) {
        return true
    }

    let reversedStr = '';

    for(let char of inputString) {
        reversedStr = char + reversedStr
    }
    return inputString === reversedStr ? true : false
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

