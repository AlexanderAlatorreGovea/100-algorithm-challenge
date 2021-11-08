export function electionsWinners(votes: number[], k: number): number {
  votes = votes.sort((a, b) => a - b);
  const winner = votes[votes.length - 1] + k;
  const arrayOfWinners = [];

  votes.forEach(num => {
    if (num + k > votes[votes.length - 1]) {
      arrayOfWinners.push(num);
    }
  });
  return arrayOfWinners.length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
