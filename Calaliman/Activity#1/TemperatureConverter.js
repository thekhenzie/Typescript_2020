"use strict";
exports.__esModule = true;
var convertFahrenheit = function (fahrenheit) { return (fahrenheit - 32) / 1.8; };
var convertCelsius = function (celsius) { return (celsius * 1.8) + 32; };
console.log("Converting to Fahernheit: " + convertFahrenheit(30));
console.log("Converting to Celsius: " + convertCelsius(30));
