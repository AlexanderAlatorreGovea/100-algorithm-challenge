export function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  //cost per minutes * ride time +
  //cost per mile * ride distance
  const arrayOfEstimates = [];
  for (let i = 0; i < cost_per_mile.length; i++) {
    let fares =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
    arrayOfEstimates.push(fares.toFixed(1));
  }

  return arrayOfEstimates;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
