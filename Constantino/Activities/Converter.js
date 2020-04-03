var celsius;
var fahrenheit;
var FtoC = function (fahrenheit) { return ((fahrenheit - 32) / 1.8); };
var CtoF = function (celsius) { return ((celsius * 1.8) + 32); };
console.log(CtoF(30));
console.log(FtoC(30));
