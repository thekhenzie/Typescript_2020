function concat(input, times) {
    var newString = "";
    for (var i = 0; i < times; i++) {
        newString = newString + input;
    }
    return newString;
}
console.log("Input: \"Hi\" , 3");
console.log("Output : " + concat("Hi", 3));
