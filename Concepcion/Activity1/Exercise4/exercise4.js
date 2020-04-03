"use strict";
const Fibonacci = (sequence) => {
    let output = [];
    output[0] = 1;
    output[1] = 1;
    for (let i = 2; i < sequence; i++)
        output.push(output[i - 2] + output[i - 1]);
    return output;
};
console.log(Fibonacci(5).join(" "));
