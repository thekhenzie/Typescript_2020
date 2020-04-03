function concat(input : string, times : number) : string {
    let newString : string = "";
    for (var i = 0; i < times; i++){
        newString = newString + input;
    }
    return newString;
}

console.log("Input: \"Hi\" , 3");
console.log("Output : " + concat("Hi", 3));