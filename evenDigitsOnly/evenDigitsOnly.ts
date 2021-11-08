export function evenDigitsOnly(n: number): boolean {
  let allPositives;
  n = n.toString().split("");
  n.forEach(element => {
    if (parseInt(element) % 2 === 0) {
      return (allPositives = true);
    } else {
      return (allPositives = false);
    }
  });

  return allPositives;
}

console.log(evenDigitsOnly(2426));
console.log(evenDigitsOnly(643383));
