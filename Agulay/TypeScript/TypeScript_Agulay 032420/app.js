"use strict";
exports.__esModule = true;
function ConvertFahrToCel(fahr) {
    var toCel = ((fahr - 32) / 1.8);
    return toCel;
}
function ConvertCelToFahr(cel) {
    var toFahr = ((cel * 1.8) + 32);
    return toFahr;
}
function Act1(farh, cel) {
    console.log(farh + 'F to Celcius is ' + ConvertFahrToCel(farh).toFixed(2) + "C");
    console.log(cel + 'C to Fahrenheit is ' + ConvertCelToFahr(cel) + "F");
}
Act1(99, 34);
