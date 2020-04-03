function fibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var result = " ";
    for (var i = 0; i < num; i++) {
        result = result + num2;
        var temp = num1;
        num1 = num2;
        num2 = temp + num2;
    }
    return result;
}
console.log(fibonacci(5));
