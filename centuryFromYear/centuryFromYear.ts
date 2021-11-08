export function centuryFromYear(year: number): number {
    let century = Math.floor(year / 100) 
    let lastNum = year.toString().split('');
    lastNum = lastNum[lastNum.length - 1]
   

    return lastNum > 0 ? century + 1 : century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));