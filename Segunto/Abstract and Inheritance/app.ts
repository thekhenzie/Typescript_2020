import { Rectangle, Square } from "./class";

var square = new Square(4, "Red");
console.log("The Area is:" + square.GetArea());
console.log("The Perimeter is:" + square.GetPerimeter());
console.log(square.PrintColorAndName());


var rectangle = new Rectangle(5,5 ,"Blue");
console.log("The Area is:" + rectangle.GetArea());
console.log("The Perimeter is:" + rectangle.GetPerimeter());
