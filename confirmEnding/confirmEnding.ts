export function confirmEnding(str: string, target: string) {
  return str.slice(str.length - target.length) === target;
}