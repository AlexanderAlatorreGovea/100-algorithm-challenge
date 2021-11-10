export function htmlEndTagByStartTag(startTag: string): string {
  let initialTag = startTag.split(" ")[0].split("");
  initialTag = initialTag.includes(">") ? initialTag : [...initialTag, ">"];
  initialTag = initialTag.join("");
  console.log(initialTag.length);
  const closingTag = "</" + initialTag.slice(1, initialTag.length);

  return closingTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
