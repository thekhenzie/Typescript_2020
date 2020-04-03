//Exercise 1 - Conversion celcius and farenheit
var d = 1.8;
var i = 32;
function ToFar(input) {
    return ((input * d) + i);
}
function ToCel(input) {
    return ((input - i) / d);
}
console.log("Farenheit: " + ToFar(30));
console.log("Celcius: " + ToCel(30));
//Exercise 2 - Perimeter & Area
function PerimeterOfSquare(input) {
    return (4 * input);
}
function AreaOfSquare(input) {
    return (input * input);
}
console.log(PerimeterOfSquare(4));
console.log(AreaOfSquare(4));
//Exercise 3 - Concatenation
function Concat(str, num) {
    var strResult = " ";
    while (num > 0) {
        strResult += str;
        num--;
    }
    return strResult;
}
console.log(Concat("Hi", 3));
//Exercise 4 - Fibonacci Length
function FibLen(num) {
    var a = 1, b = 0, temp;
    while (num >= 1) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
        console.log(b);
    }
}
FibLen(10);
