export function characterParity(symbol: string): string {

    if(isNaN(+symbol)) {
        return 'not a digit'
    }

    if(+symbol % 2) {
        return 'even'
    }

    return 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
