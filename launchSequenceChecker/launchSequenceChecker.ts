export function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  const launchCodes = {};

  for (let index = 0; index < systemNames.length; index++) {
    if (launchCodes.hasOwnProperty(systemNames[index])) {
      if (launchCodes[systemNames[index]] >= stepNumbers[index]) {
        return false;
      }
    } else {
      launchCodes[systemNames[index]] = stepNumbers[index];
    }
  }
}

console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  )
);
