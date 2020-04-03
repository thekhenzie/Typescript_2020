"use strict";
exports.__esModule = true;
function Concatinate(word, times) {
    var x = "";
    for (var index = 0; index < times; index++) {
        x += word;
        " ";
    }
    console.log(x);
}
Concatinate("Hi", 3);
