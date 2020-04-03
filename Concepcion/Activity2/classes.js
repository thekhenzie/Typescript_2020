"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(_name, _noOfSides, _color) {
        this.getName = () => this.name;
        this.name = _name;
        this.noOfSides = _noOfSides;
        this.color = _color;
        console.log("Shape: " + this.getName());
    }
}
class Square extends Shape {
    constructor(_side, _color) {
        super("Square", 4, _color);
        this.GetArea = () => Math.pow(this.side, 2);
        this.GetPerimeter = () => this.side * 4;
        this.PrintColorAndName = () => console.log("Color and Name is: " + this.color + ", " + this.getName());
        this.side = _side;
        console.log("Number of sides is:" + this.side);
    }
}
exports.Square = Square;
class Rectangle extends Shape {
    constructor(_length, _width, _color) {
        super("Rectangle", 4, _color);
        this.GetArea = () => this.length * this.width;
        this.GetPerimeter = () => (2 * this.length) + (2 * this.width);
        this.length = _length;
        this.width = _width;
    }
}
exports.Rectangle = Rectangle;
