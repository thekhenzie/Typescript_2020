export{}

let concatString = (word: string, iteration: number):string =>{
    let concatWord = ""
    for (let i = 0; i < iteration; i++) {
        concatWord += word;
    }
    return concatWord;
}

console.log(concatString("Hi", 3));