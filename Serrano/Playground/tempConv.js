"use strict";
exports.__esModule = true;
var celsius = function (temp) { return ((temp - 32) / 1.8); };
var fahr = function (temp) { return ((temp * 1.8) + 32); };
var newTempC = celsius(30);
var newTempF = fahr(30);
console.log("Input : -40");
console.log("Output : Fahrenheit = " + newTempF + ", " + "Celsius = " + newTempC);
