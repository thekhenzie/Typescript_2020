import { IShapes } from './interfaces';



abstract class Shape implements IShapes {
    constructor (public name : string, public noOfSides : number){
        console.log(`Shape : ${name}`);
    }

    GetName(): string {
        return this.name;
    }
    abstract GetArea(): number;
    abstract GetPerimeter(): number;
    
}

class Square extends Shape {
    constructor (public side : number){
        super("Square", 4);
        console.log(`No. of sides: ${this.noOfSides}`);
    }
    GetArea() : number {
        return this.side*this.side;
    }
    GetPerimeter() : number {
        return this.side*4;
    }
    PrintColorAndName (color : string){
        console.log(`${color} ${this.name}`);
    }

}

class Rectangle extends Shape {
    constructor (public length : number, public width : number){
        super("Rectangle", 4);
    }

    GetArea() : number {
        return this.length*this.width;
    }
    GetPerimeter() : number {
        return (this.length+this.width)*2;
    }
}

export {  Square, Rectangle };