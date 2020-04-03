interface EmployeeInterface{
    name:string;
    age:number;
}
class Employee{
    name:string;
    age:number;
    constructor(event: EmployeeInterface)
    {
        this.name = event.name;
        this.age = event.age;
    }

    Greet(){
        console.log(`Hi, My name is ${this.name} and I'm ${this.age} yrs old`);
    }
}
class Address extends Employee{
    address:string;

    constructor(ex: EmployeeInterface,address:string)
    {
        super(ex);
        this.address = address;
    }

    Address(){
        console.log(`Hi, My name is ${this.name} and I'm ${this.age} yrs old.I live in ${this.address}`);
    }
}
let myTodo = {name:'klyde',age:21};
let klyde = new Address(myTodo,'MYADDRESS');
klyde.Greet();
klyde.Address();
