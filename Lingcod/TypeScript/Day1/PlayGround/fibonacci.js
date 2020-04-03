"use strict";
exports.__esModule = true;
function Fibonacci(num) {
    var x = 0;
    var numStr = [1, 1];
    var z = "";
    for (var index = 0; index < num; index++) {
        if (index >= 2) {
            x = numStr[index - 1] + numStr[index - 2];
            numStr.push(x);
        }
        z += numStr[index] + " ";
    }
    console.log(z);
}
Fibonacci(5);
