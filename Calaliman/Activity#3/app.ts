//this is a generic function
let myGenFunc = <T>(myData: T) : void => {
    console.log(`The data type here is "${typeof myData}" with the value of: ${myData}`);
}

console.log("This is the sample for Generic Function");
myGenFunc<number>(13);
myGenFunc<string>("This is string #1");

console.log();
//this is a generic interface
interface IGeneric<T>{
    myData: T;
}

console.log("This is the sample for Generic Interface");
let data1: IGeneric<number>;
data1.myData = 23;
console.log(`Value: ${data1.myData}`);
console.log(`Data type: ${typeof data1.myData}`);

let data2: IGeneric<string> = {myData : "This is string #2"};
console.log(`Value: ${data2.myData}`);
console.log(`Data type: ${typeof data2.myData}`);

console.log();
//this is a generic class
class GenericClass<T>{
    private _myData : T;

    GetData = (item: T) : void => {this._myData = item;}

    DisplayData = ():void => {console.log(`The data type here is "${typeof this._myData}" with the value of: ${this._myData}`);}
}

console.log("This is the sample for Generic Class");
let classData1:GenericClass<number> = new GenericClass<number>();
classData1.GetData(33);
classData1.DisplayData();

let classData2:GenericClass<string> = new GenericClass<string>();
classData2.GetData("This is string #3");
classData2.DisplayData();

// END


interface IComputer<T>{
    brand: T;
    model: T;
}

abstract class Computers implements IComputer<string>{
    constructor(public brand: string, public model: string){
    }
}

class Lenovo extends Computers{
    private _brand: string = 'Lenovo';
    constructor(model: string){ 
        super('Lenovo', model);
    }
}

class Acer extends Computers{
    private _brand: string = 'Acer';
    constructor(model: string){ 
        super('Acer', model);
    }
}

class Asus extends Computers{
    private _brand: string = 'Asus';
    constructor(model: string){ 
        super('Asus', model);
    }
}