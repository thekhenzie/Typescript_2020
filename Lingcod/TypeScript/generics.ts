export { }

function addArray<T>(y: Array<T>, z: Array<T>): Array<T> {
    let n: Array<T> = y.concat(z);
    return n;
}
let x: Array<number> = addArray([1, 2, 3, 4], [6, 7, 8, 9]);
console.warn(x);
let arr:string[] = ["Klyde", "Lingcod"];


class Person<T, U>{
    constructor(public x: T, public y: T, public z: U) {
        console.log(`My whole name is ${this.x} ${this.y} and my age is ${this.z}`);
    }
}
let me = new Person("Klyde", "Lingcod", 21);



interface IEmployee
{
    id: number,
    name:string,
    age:number
};

let persons = [
    {   id: 1, name: 'Klyde Lingcod', age: 21},
    {   id: 2, name: 'Chile Panis', age: 22},
    {   id: 3, name: 'Josehp Rivera', age: 20},
    {   id: 4, name: 'Rolyn Gonzales', age: 19},
    {   id: 5, name: 'Neil Josef', age: 21},
]
class Employee<T extends IEmployee>
{ 
    addEmployee(arg:T){
        persons.push(arg);
    }
    listEmployee(){
        persons.forEach(person => {
            console.log(`Name: ${person.name}, Age: ${person.age}`);
        });
    }
}

let emp = new Employee();
emp.addEmployee({id: 6,name:'Unknown Person',age:55});
emp.listEmployee();