function setStringToLowerCase(string) {
    return string.toLowerCase()
}

export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowerCaseString = setStringToLowerCase(inputString);
    inputString = setStringToLowerCase(inputString);

    let reversedString = '';
    
    for(let char of inputString) {
        reversedString = char + reversedString
    }
    
    return inputString === reversedString ? true : false
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));