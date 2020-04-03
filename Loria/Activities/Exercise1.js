"use strict";
exports.__esModule = true;
console.log("Conversion of temperatures to and from Celsius, farenheit \n");
var toCelsius = function (temp) { return ((temp - 32) / 1.8); };
var toFarenheit = function (temp) { return ((temp * 1.8) + 32); };
console.log("Celsius: " + toCelsius(30) + "\n");
console.log("Farenheit: " + toFarenheit(30) + "\n");
