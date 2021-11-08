export function encloseInBrackets(inputString: string): string {
    let stringArray =  inputString.split('')
    stringArray = ["(" ,...stringArray, ")"]
    stringArray = stringArray.join("")
    return stringArray
}   

console.log(encloseInBrackets('abacaba'));