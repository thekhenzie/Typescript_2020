import { Shapes } from "./interface";

abstract class Shape implements Shapes {
  GetName = (): string => this.name;

  abstract GetArea(): number;
  abstract GetPerimeter(): number;

  constructor(
    public name: string,
    public noOfSides: number,
    public color: string
  ) {
    this.name;
    this.noOfSides;
    this.color;
  }
}

class Square extends Shape {
  constructor(public noOfSides: number, public color: string) {
    super("Square", noOfSides, color);
    console.log("Number of sides:" + this.noOfSides);
  }

  GetArea = (): number => Math.pow(this.noOfSides, 2);
  GetPerimeter = (): number => this.noOfSides * 4;

  PrintColorAndName = (): void =>
    console.log("Color is:" + this.color + " " + "Shape is:" + this.GetName());
}

class Rectangle extends Shape {
  constructor(
    public length: number,
    public width: number,
    public color: string
  ) {
    super("Rectangle", 4, color);
    this.length;
    this.width;
    this.color;
  }

  GetArea = (): number => this.length * this.width;

  GetPerimeter = (): number => 2 * this.width + 2 * this.length;
}

export { Rectangle, Square };
