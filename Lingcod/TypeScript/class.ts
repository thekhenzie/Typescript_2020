import { ShapeInterface } from "./interface";

abstract class Shape implements ShapeInterface{
    constructor(public name:string, public noOfSides:number) {
        console.log(`Shape: ${this.name}.`);
    }

    GetName() :void{
        console.log(`The name of this shape is ${this.name}.`);
    }

    abstract GetArea():number;
    abstract GetPerimeter():number;
    
}

class Square extends Shape{
    constructor(name:string,noOfSides:number,public side:number,public color?: string) {
        super(name,noOfSides);
        console.log(`No. of sides: ${this.noOfSides}`);
    }

    PrintColorAndName():void{
        console.log(`Color: ${this.color}, Name: ${this.name}`);
    }

    GetArea():number{
        return this.side * this.side;
    };

    GetPerimeter():number{
        return this.side * 4;
    };
}

class Rectangle extends Shape {
    constructor(name:string,noOfSides:number,public length:number, public width:number) {
        super(name,noOfSides);
    }

    GetArea():number{
        return this.length * this.width;
    };
    
    GetPerimeter():number{
        return (this.length + this.width) * 2;
    };
}

export {Shape,Square,Rectangle}