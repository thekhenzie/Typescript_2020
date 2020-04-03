export{}
function Act3(str: string, num : number){
    let concatinated : string = "";
    for(let i = 0; i < num; i++){
        concatinated += str;
    }
    console.log(concatinated);
    
}

Act3("Hi", 3);
