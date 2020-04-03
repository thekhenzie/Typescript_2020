"use strict";
exports.__esModule = true;
function addArray(y, z) {
    var n = y.concat(z);
    return n;
}
var x = addArray([1, 2, 3, 4], [6, 7, 8, 9]);
console.warn(x);
var arr = ["Klyde", "Lingcod"];
var Person = /** @class */ (function () {
    function Person(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        console.log("My whole name is " + this.x + " " + this.y + " and my age is " + this.z);
    }
    return Person;
}());
var me = new Person("Klyde", "Lingcod", 21);
;
var persons = [
    { id: 1, name: 'Klyde Lingcod', age: 21 },
    { id: 2, name: 'Chile Panis', age: 22 },
    { id: 3, name: 'Josehp Rivera', age: 20 },
    { id: 4, name: 'Rolyn Gonzales', age: 19 },
    { id: 5, name: 'Neil Josef', age: 21 },
];
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addEmployee = function (arg) {
        persons.push(arg);
    };
    Employee.prototype.listEmployee = function () {
        persons.forEach(function (person) {
            console.log("Name: " + person.name + ", Age: " + person.age);
        });
    };
    return Employee;
}());
var emp = new Employee();
emp.addEmployee({ id: 6, name: 'Unknown Person', age: 55 });
emp.listEmployee();
//trial
var sum = function (num1, num2) { console.log('true'); };
console.log(sum(5, 109));
