"use strict";
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
exports.__esModule = true;
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var Shape = /** @class */ (function () {
    function Shape(name, noOfSides) {
        this.name = name;
        this.noOfSides = noOfSides;
        console.log("Shape : " + name);
    }
    Shape.prototype.GetName = function () {
        return this.name;
    };
    return Shape;
}());
exports.Shape = Shape;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, "Square", 4) || this;
        _this.side = side;
        console.log("No. of sides: " + _this.noOfSides);
        return _this;
    }
    Square.prototype.GetArea = function () {
        return this.side * this.side;
    };
    Square.prototype.GetPerimeter = function () {
        return this.side * 4;
    };
    Square.prototype.PrintColorAndName = function (color) {
        console.log(color + " " + this.name);
    };
    return Square;
}(Shape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this, "Rectangle", 4) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.GetArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.GetPerimeter = function () {
        return (this.length + this.width) * 2;
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
