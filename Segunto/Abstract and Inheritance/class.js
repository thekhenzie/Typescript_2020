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
    function Shape(name, noOfSides, color) {
        var _this = this;
        this.name = name;
        this.noOfSides = noOfSides;
        this.color = color;
        this.GetName = function () { return _this.name; };
        this.name;
        this.noOfSides;
        this.color;
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(noOfSides, color) {
        var _this = _super.call(this, "Square", noOfSides, color) || this;
        _this.noOfSides = noOfSides;
        _this.color = color;
        _this.GetArea = function () { return Math.pow(_this.noOfSides, 2); };
        _this.GetPerimeter = function () { return _this.noOfSides * 4; };
        _this.PrintColorAndName = function () {
            return console.log("Color is:" + _this.color + " " + "Shape is:" + _this.GetName());
        };
        _this.color;
        console.log("Number of sides:" + _this.noOfSides);
        return _this;
    }
    return Square;
}(Shape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width, color) {
        var _this = _super.call(this, "Rectangle", 4, "Blue") || this;
        _this.length = length;
        _this.width = width;
        _this.color = color;
        _this.GetArea = function () { return _this.length * _this.width; };
        _this.GetPerimeter = function () { return 2 * _this.width + 2 * _this.length; };
        _this.length;
        _this.width;
        _this.color;
        return _this;
    }
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
