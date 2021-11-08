export function addBorder(picture: string[]): string[] {
    //Get the length of the string
    const lengthOfWall = picture[0].length + 1;
    let wall = '';

    for(let i = 0; i < lengthOfWall; i++) {
        wall = wall.concat("*")
    }
    console.log(lengthOfWall)
    picture.push(wall)
    picture.unshift(wall)
    console.log(picture)
    
    for(let i = 1; i < wall.length; i++) {
        if(picture[i].length != lengthOfWall) {
          picture[i] =  '*'.concat(picture[i], '*')
        }
    }
    console.log(picture)

    // const lengthOfWall = picture[0].length + 1;
    // let wall = ''

    // for(let i = 0; i< lengthOfWall; i++) {
    //     wall = wall.concat('*')
    // }

    // picture.unshift(wall)
    //  console.log(picture)
    // picture.push(wall)
    // console.log(picture)

    // for(let i = 1; i < picture.length - 1; i++) {
    //     picture[i] = '*'.concat(picture[i], '*')
    // }

    // return picture
}   

console.log(addBorder(["abc", "ded"]));