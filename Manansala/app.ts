import { Shape, Square, Rectangle } from "./classes";

let square = new Square("Square", 5, "blue");

console.log(`Area of ${square.GetName()} is ${square.GetArea()}`)
console.log(`Perimeter of ${square.GetName()} is ${square.GetPerimeter()}`)
square.PrintColorAndName()


let rectangle = new Rectangle("Rectangle", 5,10);
console.log(`Area of ${rectangle.GetName()} is ${rectangle.GetArea()}`)
console.log(`Perimeter of ${rectangle.GetName()} is ${rectangle.GetPerimeter()}`)
