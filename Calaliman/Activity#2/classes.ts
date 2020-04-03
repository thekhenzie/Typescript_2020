import { IShape } from './interfaces';

export{Rectangle, Square}

abstract class Shape implements IShape{
    
    public name: string;

    constructor (shapeName: string, public noOfSides: number ,public color: string){
        this.GetName(shapeName);
        console.log(`Shape: ${this.name}`)
    }

    GetName = (name: string) => this.name = name;
    
    abstract GetArea(): void;
    abstract GetPerimeter(): void;
}

class Square extends Shape{

    constructor(shapeName: string, noOfSides: number, color: string, public side: number){
        super(shapeName, noOfSides, color);

        console.log(`No of sides: ${this.noOfSides}`);
    }

    PrintColorAndName = (): void => {console.log(`Color: ${this.color} Shape: ${this.name}`);}

    GetArea = (): number => { return Math.pow(this.side,2); }

    GetPerimeter= (): number => { return 4 * this.side; }

}

class Rectangle extends Shape{
    
    constructor(shapeName: string, noOfSides: number, color: string, public length: number, public width: number){
        super(shapeName, noOfSides, color);
    }

    GetArea(): number{
        return this.length * this.width;
    }

    GetPerimeter(): number{
        return 2 * (this.length + this.width);
    }
}