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
Object.defineProperty(exports, "__esModule", { value: true });
var Garage = /** @class */ (function () {
    function Garage() {
        var _this = this;
        this.capacity = 10;
        this.slots = new Array();
        this.PrintAvailableSlots = function () { return console.log("Available slots: " + _this.capacity); };
        this.CarFilterByModel = function (carModel) { return _this.slots.filter(function (car) { return car.model === carModel; }); };
        this.CarFilterByBrand = function (carBrand) { return _this.slots.filter(function (car) { return car.brand === carBrand; }); };
    }
    Garage.prototype.ParkCar = function (car) {
        if (this.slots.filter(function (i) { return i.plateNumber === car.plateNumber; }).length > 0)
            console.log(car.plateNumber + " is already parked");
        else if (this.capacity > 0) {
            this.capacity--;
            this.slots.push(car);
            console.log(car.plateNumber + " was parked inside");
        }
        else
            console.log("Garage is Full, fool");
    };
    Garage.prototype.RemoveCar = function () {
        if (this.capacity < 10) {
            this.capacity++;
            console.log(this.slots[this.slots.length - 1].model + " was removed");
            this.slots.shift();
        }
        else if (this.capacity >= 10) {
            console.log("Garage is Empty, boi");
        }
    };
    Garage.prototype.PrintCars = function () {
        this.slots.forEach(function (car) { return console.log(car.brand + " " + car.model + " " + car.plateNumber); });
    };
    return Garage;
}());
exports.Garage = Garage;
var Car = /** @class */ (function () {
    function Car(brand, model, plateNumber) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
    }
    return Car;
}());
var Mitsubishi = /** @class */ (function (_super) {
    __extends(Mitsubishi, _super);
    function Mitsubishi(model, plateNumber) {
        return _super.call(this, "Mitsubishi", model, plateNumber) || this;
    }
    return Mitsubishi;
}(Car));
exports.Mitsubishi = Mitsubishi;
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, plateNumber) {
        return _super.call(this, "Toyota", model, plateNumber) || this;
    }
    return Toyota;
}(Car));
exports.Toyota = Toyota;
