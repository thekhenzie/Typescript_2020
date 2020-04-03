import { Book, DamageLogger, Author, Librarian, Item, Shape1 } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem  {
    private _publisher: string;
    static department: string = 'Research';
    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }
    printItem(): void{
        console.log(`${this.title} was published in ${this.year}`);
    }

    abstract printCitation() : void;

    // get publisher() : string {
    //     return this._publisher.toUpperCase();
    // }

    // set publisher(newPublisher: string) {
    //     this._publisher = newPublisher;
    // }
}

class Encyclopedia extends ReferenceItem{
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem() : void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation() : void {
        console.log(`${this.title} - ${this.year}`);
    }
}

abstract class Shape implements Shape1{

    constructor(public name: string, public noOfSides: number){
        console.log(`Shape: ${name}`)
    }
    GetName(): string {
        return this.name;
    }
    abstract GetArea(): number;
    abstract GetPerimeter(): number;
}

class Square extends Shape{

    constructor(public side: number){
        super("Square", 4)
        console.log(`No of sides: ${this.noOfSides}`);
    }
    GetArea(): number{
        return this.side*this.side;
    }

    GetPerimeter(): number{
        return this.side*4;
    }

    PrintColorAndName(color: string, name: string){
        console.log(`Color is ${color} and name is ${name}`);
    }
}

class Rectangle extends Shape{

        constructor(public length: number, public width: number){
            super("Rectangle", 4);
        }

    GetArea(): number{
        return this.length*this.width;
    }

    GetPerimeter(): number{
        return (this.length*2) + (this.width*2);
    }
}
export { UniversityLibrarian, ReferenceItem, Encyclopedia };