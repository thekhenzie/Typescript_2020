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
    function Shape(shapeName, noOfSides, color) {
        var _this = this;
        this.noOfSides = noOfSides;
        this.color = color;
        this.GetName = function (name) { return _this.name = name; };
        this.GetName(shapeName);
        console.log("Shape: " + this.name);
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(shapeName, noOfSides, color, side) {
        var _this = _super.call(this, shapeName, noOfSides, color) || this;
        _this.side = side;
        _this.PrintColorAndName = function () { console.log("Color: " + _this.color + " Shape: " + _this.name); };
        _this.GetArea = function () { return Math.pow(_this.side, 2); };
        _this.GetPerimeter = function () { return 4 * _this.side; };
        console.log("No of sides: " + _this.noOfSides);
        return _this;
    }
    return Square;
}(Shape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(shapeName, noOfSides, color, length, width) {
        var _this = _super.call(this, shapeName, noOfSides, color) || this;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.GetArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.GetPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
