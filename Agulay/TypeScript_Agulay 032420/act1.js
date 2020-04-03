"use strict";
exports.__esModule = true;
function Act1(input) {
    var toCel = ((input - 32) / 1.8);
    var toFahr = ((input * 1.8) + 32);
    console.log('Fahrenheit =' + toFahr.toFixed(2) + "F");
    console.log('Celcius =' + toCel.toFixed(2) + "C");
}
Act1(30);
