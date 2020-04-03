let getCon = (word: string, num:number):string =>{
    let wordtemp: string;
    wordtemp = word;
    for(let i = 1; i < num; i++){
        word = word + wordtemp;

    }
    return word;
    
}
console.log(getCon("Hi", 3));
