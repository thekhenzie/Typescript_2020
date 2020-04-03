var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(event) {
        this.name = event.name;
        this.age = event.age;
    }
    Employee.prototype.Greet = function () {
        console.log("Hi, My name is " + this.name + " and I'm " + this.age + " yrs old");
    };
    return Employee;
}());
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(ex, address) {
        var _this = _super.call(this, ex) || this;
        _this.address = address;
        return _this;
    }
    Address.prototype.Address = function () {
        console.log("Hi, My name is " + this.name + " and I'm " + this.age + " yrs old.I live in " + this.address);
    };
    return Address;
}(Employee));
var myTodo = { name: 'klyde', age: 21 };
var klyde = new Address(myTodo, 'MYADDRESS');
klyde.Greet();
klyde.Address();
