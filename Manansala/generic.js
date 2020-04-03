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
var Garage = /** @class */ (function () {
    function Garage() {
        this.vehicles = new Array();
    }
    Garage.prototype.getVehicles = function () {
        return this.vehicles;
    };
    Garage.prototype.addVehicle = function (newVehicle) {
        this.vehicles.push(newVehicle);
    };
    return Garage;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, modelno, horespower) {
        var _this = _super.call(this) || this;
        _this.horespower = horespower;
        return _this;
    }
    return Car;
}(Vehicle));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(name, modelno, maxheight) {
        var _this = _super.call(this) || this;
        _this.maxheight = maxheight;
        return _this;
    }
    return Plane;
}(Vehicle));
var newCars = [
    { name: "BMW", modelno: 3874, horespower: 600 },
    { name: "Mercedes", modelno: 5738, horespower: 700 }
];
var newPlanes = [
    { name: "AeroPlane", modelno: 5983, maxheight: 1000 },
    { name: "Boeing 747", modelno: 7471, maxheight: 2000 }
];
var newGarage = new Garage();
for (var _i = 0, newCars_1 = newCars; _i < newCars_1.length; _i++) {
    var car = newCars_1[_i];
    newGarage.addVehicle(car);
}
for (var _a = 0, newPlanes_1 = newPlanes; _a < newPlanes_1.length; _a++) {
    var plane = newPlanes_1[_a];
    newGarage.addVehicle(plane);
}
console.log(newGarage.getVehicles());
