interface Shape {
    name: string;
    noOfSides: number;  
}

abstract class Shape implements Shape {
    public GetName(): string{
        return this.name;
    }
    public abstract GetArea(): void;
    public abstract GetPerimeter(): void;
    constructor (public name: string) {
        console.log(`Shape: ${name}`);
    }
}

class Square extends Shape {
    constructor(name: string, public side: number, public color?: string) {
        super(name);
        this.noOfSides = 4
        console.log(`No of sides: ${this.noOfSides}`);
    }
    public GetArea(): number {
        return this.side * this.side
    }
    public GetPerimeter(): number {
        return this.side * this.noOfSides
    }
    public PrintColorAndName() {
        console.log(`The ${this.name} is color ${this.color}`)
    }
}

class Rectangle extends Shape {
    constructor(name: string, public length: number, public width: number) {
        super(name);
        this.noOfSides = 4
    }
    public GetArea(): number {
        return this.length * this.width
    }
    public GetPerimeter(): number {
        return (this.length * 2) + (this.width * 2)
    }
}

export { Shape, Square, Rectangle }