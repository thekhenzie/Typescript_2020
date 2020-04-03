"use strict";
exports.__esModule = true;
console.log("First n numbers of Fibonacci Series \n");
function Fibonacci(input) {
    var f1 = 0;
    var f2 = 1;
    var nextNum;
    var arr = [];
    if (input < 1) {
        return;
    }
    for (var i = 0; i < input; i++) {
        arr.push(f1);
        nextNum = f1 + f2;
        f1 = f2;
        f2 = nextNum;
    }
    return arr;
}
console.log("Output : " + Fibonacci(5));
