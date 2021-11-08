export function companyBotStrategy(trainingData: number[][]): number {
  //average when we have
  //[3, 1] answerTime, correctness
  //if correctness === 0 or -1 dont add it to the average
  let time = 0;
  let correct = 0;
  let average;
  for (let data of trainingData) {
    const [answerTime, correctness] = data;
    if (correctness > 0) {
      correct += correctness;
      time += answerTime;
    }
  }

  average = time / correct;

  return average || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
