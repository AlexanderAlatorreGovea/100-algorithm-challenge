export function flattenArray(arr: any[]): any[] {
  const oneArray = [];

  const flatten = (arr) => {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        oneArray.push(element);
      }
    });
  };

  flatten(arr);
  return oneArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

// export function flattenArray(arr: any[]): any[] {
//   const oneArray = [];

//   flattenArray(arr);

//   function flattenArray(arr) {
//     arr.forEach(element => {
//       if (Array.isArray(element)) {
//         flattenArray(element);
//       } else {
//         oneArray.push(element);
//       }
//     });
//   }

//   return oneArray;
// }
