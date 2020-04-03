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
var Shape = /** @class */ (function () {
    function Shape(name) {
        console.log("" + this.name);
    }
    Shape.prototype.GetName = function () {
        return this.GetName;
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(noOfSlides, name) {
        var _this = _super.call(this, name) || this;
        console.log("" + _this.noOfSides);
        return _this;
    }
    Square.prototype.GetArea = function () {
        return this.noOfSides;
    };
    Square.prototype.GetPerimeter = function () {
        return this.noOfSides;
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this, 4, "Rectangle") || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    return Rectangle;
}(Square));
