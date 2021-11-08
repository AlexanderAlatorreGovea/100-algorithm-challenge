const checkArrayLength = arrayOfEmailInput => {
  return arrayOfEmailInput.length === 2;
};

export function findEmailDomain(address: string): string {
  const arrayOfEmailInput = address.split("@");
  const lengthOfEmailInput = arrayOfEmailInput.length;
  let domain = "";

  if (checkArrayLength(arrayOfEmailInput)) {
    return arrayOfEmailInput[1];
  }

  for (let i = 0; i < lengthOfEmailInput; i++) {
    domain = arrayOfEmailInput[lengthOfEmailInput - 1];
  }

  return domain;
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

const object = {
  name: "alex",
  age: 28,
};

let { name, age } = object;

name = "nnnasdfadsf";
age = 22;

console.log(name);
console.log(object);
console.log(age);
