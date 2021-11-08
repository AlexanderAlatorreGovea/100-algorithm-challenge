const parseIntValueAndAdd = newValue => {
  while (newValue >= 10) {
    newValue = newValue.toString().split("");
    newValue = parseInt(newValue[0]) + parseInt(newValue[1]);
  }
  return newValue;
};

export function digitDegree(n: number): number {
  let arrayOfValues = n.toString().split("");
  if (arrayOfValues.length === 1) {
    return n;
  }

  arrayOfValues = arrayOfValues.reduce((acc, value) => {
    let newValue = parseInt(arrayOfValues[0]) + parseInt(arrayOfValues[1]);

    if (newValue >= 10) {
      acc = parseIntValueAndAdd(newValue);
    }
    return acc;
  }, 0);

  return arrayOfValues;
  //   while (arrayOfValues.length > 1) {
  //     let counter = 0;
  //     for (let i = 0; i < arrayOfValues.length; i++) {
  //       counter += parseInt(total[i]);
  //     }

  //     total = counter.toString();
  //   }

  //   return total;
}

//console.log(digitDegree(5));
//console.log(digitDegree(10));
console.log(digitDegree(91));
