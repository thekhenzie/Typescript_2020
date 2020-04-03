"use strict";
exports.__esModule = true;
console.log("Concatenation of strings. \n");
function Concatenation(input, repeat) {
    var concatString = "";
    for (var i = 0; i < repeat; i++) {
        concatString += input;
    }
    return concatString;
}
console.log(Concatenation("Hi", 3));
