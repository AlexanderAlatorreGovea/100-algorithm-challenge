export function htmlEndTagByStartTag(startTag: string): string {
  let initialTag = startTag.split(" ")[0].split("");
  initialTag = initialTag.includes(">") ? initialTag : [...initialTag, ">"];
  initialTag = initialTag.join("");
  console.log(initialTag.length);
  const closingTag = "</" + initialTag.slice(1, initialTag.length);

  return closingTag;
}

const entities = {
  entities: {
    assignedTo: {
      77: {
        id: "77",
        name: "Michel Weststrate",
      },
      99: {
        id: "99",
        name: "Dan Abramov",
      },
    },
    todo: {
      0: {
        assignedTo: "99",
        completed: true,
        id: "0",
        name: "create redux",
      },
      1: {
        assignedTo: "77",
        completed: true,
        id: "1",
        name: "create mobx",
      },
    },
  },
  result: ["0", "1"],
};

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
