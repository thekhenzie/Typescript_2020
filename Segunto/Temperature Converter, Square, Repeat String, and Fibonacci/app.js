"use strict";
exports.__esModule = true;
function CelsiustoFahrenheit(a) {
    return (a * 1.8) + 32;
}
console.log(CelsiustoFahrenheit(30));
function FahrenheittoCelsius(a) {
    return (a - 32) / 1.8;
}
console.log(FahrenheittoCelsius(30));
// Area of square 
var width = 12;
var height = width;
var area = width * height;
var perimeter = 4 * width;
console.log("The area of square is:" + " " + area + " " + "The perimeter is:" + perimeter);
//Concatenate
var str = "Hi";
console.log(str.repeat(5));
// //Fibonacci
function PrintFib(n) {
    var f1 = 0;
    var f2 = 1;
    var i;
    if (n < 1)
        return;
    for (i = 1; i <= n; i++) {
        console.log(f2 + " ");
        var nxt = f1 + f2;
        f1 = f2;
        f2 = nxt;
    }
}
PrintFib(5);
