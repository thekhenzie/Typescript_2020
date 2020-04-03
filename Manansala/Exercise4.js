var input = 5;
var GetFib = function (input) {
    var fib = [1, 1];
    for (var i = 0; i < input - 2; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }
    return fib;
};
console.log(GetFib(input));
