function fibonacci(input) {
    var a = 1;
    var b = 1;
    var next;
    var arr = [];
    if (input < 1) {
        return;
    }
    for (var i = 0; i < input; i++) {
        arr.push(a);
        next = a + b;
        a = b;
        b = next;
    }
    return arr;
}
console.log("Input : 5");
console.log("Output : " + fibonacci(5));
