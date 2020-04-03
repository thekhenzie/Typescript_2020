export{}

console.log("Perimeter and Area of a square. \n");

let Perimeter = (side: number): number => {return(side*4)}
let Area = (side: number): number => {return(side*side)}

console.log("Perimeter: " + Perimeter(5) + "\n");
console.log("Area: " + Area(5) + "\n");