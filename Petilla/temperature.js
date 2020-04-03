"use strict";
exports.__esModule = true;
var convertToCelsius = function (fahrenheit) { return (fahrenheit - 32) / 1.8; };
var convertToFahrenheit = function (celsius) { return (celsius * 1.8) + 32; };
console.log("Fahrenheit to Celsius: " + convertToCelsius(30));
console.log("Celsius to Fahrenheit: " + convertToFahrenheit(30));
