export function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  const growthByDay = upSpeed - downSpeed;
  const days = desiredHeight / growthByDay;

  return parseInt(days.toFixed());
}

console.log(growingPlant(100, 10, 910));
