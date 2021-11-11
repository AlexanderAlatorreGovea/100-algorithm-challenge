export function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
  if (attempts.length > 10) {
    return false;
  }

  for (let index = 0; index < attempts.length; index++) {
      const element = attempts[index];
      if (passcode === element) {
          return true;
        }
    }
    
    return false;
    //option 2:
    //return attempts.includes(passcode);
}

console.log(
  incorrectPasscodeAttempts("1111", [
    "1111",
    "4444",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
  ])
);
