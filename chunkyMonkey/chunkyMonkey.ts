export function chunkyMonkey(arr: any[], size: number): any[][] {
  const newArray = [];

  for (let element of arr) {
    const lastElement = newArray[newArray.length - 1];

    if (!lastElement || lastElement.length === size) {
      newArray.push([element]);
    } else {
      lastElement.push(element);
    }
  }

  return newArray;
}

//console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 2));
