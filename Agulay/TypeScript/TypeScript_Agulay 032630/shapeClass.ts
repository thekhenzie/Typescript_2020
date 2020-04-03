
import{Polygon} from './shapeIntrfc'
export{ Square, Rectangle}

abstract class Shape implements Polygon{
    name: string;
    noOfSides: number  = 4;
    color: string;

    constructor(shapeName: string, shapeColor?: string){
        this.color = shapeColor;
        console.log(`Shape: ${this.name = shapeName}`);
    }
    getName(){
        console.log(`Shape Name: ${this.name}`);
    }
    abstract GetArea(): void;
    abstract GetPerimeter(): void;
}

class Square extends Shape{
    
    constructor(private sideLength: number, private newColor?: string){
        super('Square', newColor);
    }

    PrintColorAndName(){
        if(this.color == undefined ){ this.color = `No Color Specified`;}
        console.log(`Color: ${this.color}, Name: ${this.name}`);
    }
    GetArea(){
        console.log(`Area: ${this.sideLength * this.sideLength}`)
    }
    GetPerimeter(){
       console.log(`Perimeter: ${(this.sideLength * this.noOfSides)}`);
    }
}

class Rectangle extends Shape{
    constructor(private length : number, private witdh : number,  private newColor?: string){
        super('Rectangle', newColor);

    }

    GetArea(){
        console.log(`Area: ${(this.length * this.witdh)}`);
    }
    GetPerimeter(){
        console.log(`Perimeter: ${(this.length * 2) + (this.witdh * 2)}`);
    
    }
}
