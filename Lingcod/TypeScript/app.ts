import { Square,Rectangle } from "./class";

let square = new Square('Square',4,8,'Red');
square.PrintColorAndName()
square.GetName()
console.log(`Area: ${square.GetArea()} , Perimeter:  ${square.GetPerimeter()}`);

let rec = new Rectangle('Rectangle',4,5,10);
rec.GetName()
console.log(`Area: ${rec.GetArea()} , Perimeter:  ${rec.GetPerimeter()}`);