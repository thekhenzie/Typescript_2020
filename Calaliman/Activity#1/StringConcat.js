"use strict";
exports.__esModule = true;
var concatString = function (word, iteration) {
    var concatWord = "";
    for (var i = 0; i < iteration; i++) {
        concatWord += word;
    }
    return concatWord;
};
console.log(concatString("Hi", 3));
