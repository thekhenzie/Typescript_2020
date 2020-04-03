interface Shape {
    name: string;
    noOfSides: number;

}

abstract class Shape implements Shape {
    GetName() {
        return this.GetName;

    }

    abstract GetArea(): number;
    abstract GetPerimeter(): number;
    constructor(name: string){
        console.log(`${this.name}`);
    }

}

class Square extends Shape {
    GetArea(): number {
        return this.noOfSides;
    }
    GetPerimeter(): number {
        return this.noOfSides;
    }

    constructor(noOfSides: number, name:string){
        super(name);
        console.log(`${this.noOfSides}`);
    }

}

class Rectangle extends Square {
    length: number;
    width: number;

    constructor(width: number, length: number) {
        super(4, "Rectangle");
        this.width = width;
        this.length = length;
    }
}

