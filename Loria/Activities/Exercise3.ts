export{}

console.log("Concatenation of strings. \n");


function Concatenation(input: string, repeat: number){
    let concatString: string = "";
    for(var i = 0; i<repeat; i++){
        concatString += input
    }    
    return concatString;
}

console.log(Concatenation("Hi", 3));