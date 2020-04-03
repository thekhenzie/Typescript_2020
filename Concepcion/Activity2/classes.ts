
import { ShapeInterface } from "./interfaces";

abstract class Shape implements ShapeInterface {
    name: string;
    noOfSides: number;
    color?: string;
    constructor(_name: string, _noOfSides: number, _color?: string) {
        this.name = _name;
        this.noOfSides = _noOfSides;
        this.color = _color;
        console.log("Shape: " + this.getName());
    }
    getName = (): string => this.name;
    abstract GetArea(): number;
    abstract GetPerimeter(): number;
}

class Square extends Shape {
    side: number;
    constructor(_side: number, _color?: string) {
        super("Square", 4, _color)
        this.side = _side;
        console.log("Number of sides is:"+ this.side)
    }
    GetArea = (): number => Math.pow(this.side, 2);
    GetPerimeter = (): number => this.side * 4;
    PrintColorAndName = (): void => console.log("Color and Name is: " + this.color + ", " + this.getName());


}
class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(_length: number, _width: number, _color?: string) {
        super("Rectangle", 4, _color);
        this.length = _length;
        this.width = _width;
    }
    GetArea = (): number => this.length * this.width;
    GetPerimeter = (): number => (2 * this.length) + (2 * this.width);
}

export { Square, Rectangle }