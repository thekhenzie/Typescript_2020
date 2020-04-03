var input = "Hi";
var StringConcat = function (input, number) {
    var endString = "";
    for (var i = 0; i < number; i++) {
        endString += input;
    }
    return endString;
};
console.log(StringConcat(input, 4));
