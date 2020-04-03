
import { Square, Rectangle } from './classes';

let newSquare = new Square(5);
newSquare.GetName;
newSquare.PrintColorAndName("Red");
let area : number = newSquare.GetArea();
let peri : number = newSquare.GetPerimeter();
console.log(`Side: ${newSquare.side}`);
console.log(`Area : ${area}`);
console.log(`Perimeter : ${peri}`);
let newRec = new Rectangle(4,5);
newRec.GetName();
console.log(`Length: ${newRec.length}`);
console.log(`Width: ${newRec.width}`);
let areaNew : number = newRec.GetArea();
let periNew : number = newRec.GetPerimeter();
console.log(`Area : ${areaNew}`);
console.log(`Perimeter : ${periNew}`);

