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
var Shape = /** @class */ (function () {
    function Shape(name, noOfSides) {
        this.name = name;
        this.noOfSides = noOfSides;
        console.log("Shape: " + this.name + ".");
    }
    Shape.prototype.GetName = function () {
        console.log("The name of this shape is " + this.name + ".");
    };
    return Shape;
}());
exports.Shape = Shape;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, noOfSides, side, color) {
        var _this = _super.call(this, name, noOfSides) || this;
        _this.side = side;
        _this.color = color;
        console.log("No. of sides: " + _this.noOfSides);
        return _this;
    }
    Square.prototype.PrintColorAndName = function () {
        console.log("Color: " + this.color + ", Name: " + this.name);
    };
    Square.prototype.GetArea = function () {
        return this.side * this.side;
    };
    ;
    Square.prototype.GetPerimeter = function () {
        return this.side * 4;
    };
    ;
    return Square;
}(Shape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, noOfSides, length, width) {
        var _this = _super.call(this, name, noOfSides) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.GetArea = function () {
        return this.length * this.width;
    };
    ;
    Rectangle.prototype.GetPerimeter = function () {
        return (this.length + this.width) * 2;
    };
    ;
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
