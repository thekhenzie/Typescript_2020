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
var AShape = /** @class */ (function () {
    function AShape(name, noOfSides) {
        this.name = name;
        this.noOfSides = noOfSides;
        console.log("Shape: " + this.name);
    }
    return AShape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sName, sNoOfSides, side, color) {
        var _this = _super.call(this, sName, sNoOfSides) || this;
        _this.sName = sName;
        _this.sNoOfSides = sNoOfSides;
        _this.side = side;
        _this.color = color;
        console.log("No of sides: " + _this.sNoOfSides);
        return _this;
    }
    Square.prototype.PrintColorAndName = function () {
        console.log("Color and Name: " + this.color + " " + this.sName);
    };
    Square.prototype.GetArea = function () {
        var area = this.side * this.side;
        console.log("Area of Square: " + (this.side * this.side));
    };
    Square.prototype.GetPerimeter = function () {
        console.log("Perimeter of Square: " + (this.side * 4));
    };
    return Square;
}(AShape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(rName, rNoOfSides, len, wid) {
        var _this = _super.call(this, rName, rNoOfSides) || this;
        _this.rName = rName;
        _this.rNoOfSides = rNoOfSides;
        _this.len = len;
        _this.wid = wid;
        console.log("No of sides: " + _this.rNoOfSides);
        return _this;
    }
    Rectangle.prototype.GetArea = function () {
        console.log("Area of Rectangle: " + (this.len * this.wid));
    };
    Rectangle.prototype.GetPerimeter = function () {
        console.log("Perimeter of Rectangle: " + (2 * (this.len + this.wid)));
    };
    return Rectangle;
}(AShape));
exports.Rectangle = Rectangle;
