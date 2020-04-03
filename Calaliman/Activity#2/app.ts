import {Rectangle, Square} from './classes';

let s1 = new Square("Square", 4, "Red", 5);
s1.PrintColorAndName();
console.log("The Area of the Square is: " + s1.GetArea());
console.log("The Perimeter of the Square is: " + s1.GetPerimeter());

console.log();

let r1 = new Rectangle("Rectangle", 4, "Blue", 5, 10);
console.log("The Area of the Rectangle is: " + r1.GetArea());
console.log("The Perimeter of the Rectangle is: " + r1.GetPerimeter());