


abstract class Shape implements Shape1{
    name: string;
    noOfSides: number;
    constructor(name: string, noOfSides: number){
        console.log(`Shape: ${name}`)
    }
    GetName(): string {
        return this.name;
    }
    abstract GetArea(side: number, plusSide?: number): number;
    abstract GetPerimeter(side: number, plusSide?: number): number;
}

class Square extends Shape{
    side: number;
    constructor(noOfSides: number){
        super("Square", 4)
        console.log(`No of sides: ${noOfSides}`);
    }
    GetArea(side: number): number{
        return side*side;
    }

    GetPerimeter(side: number): number{
        return side*4;
    }

    PrintColorAndName(color: string, name: string){
        console.log(`Color is ${color} and name is ${name}`);
    }
}

class Rectangle extends Shape{
    length: number;
    width: number;

    GetArea(side: number, plusSide: number): number{
        return side*plusSide;
    }

    GetPerimeter(side: number, plusSide: number): number{
        return (side*2) + (plusSide*2);
    }
}