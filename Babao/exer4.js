var Fibonacci = function (sequence) {
    var output = [];
    output[0] = 1;
    output[1] = 1;
    for (var i = 2; i < sequence; i++)
        output.push(output[i - 2] + output[i - 1]);
    return output;
};
console.log(Fibonacci(5).join(" "));
