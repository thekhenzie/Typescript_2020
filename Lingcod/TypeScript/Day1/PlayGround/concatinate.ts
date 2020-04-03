export{}

function Concatinate(word:string,times:number):void{
    let x:string = "";
    for (let index = 0; index < times; index++) {
        x += word;
    }
    console.log(x);
}
Concatinate("Hi",3);