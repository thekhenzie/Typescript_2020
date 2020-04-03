var input = 30;
var ToC = function (input) { return ((input - 32) / 1.8); };
var ToF = function (input) { return ((input * 1.8) + 32); };
console.log("C = " + ToC(input));
console.log("F = " + ToF(input));
