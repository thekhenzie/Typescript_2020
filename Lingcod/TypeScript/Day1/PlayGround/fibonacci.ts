export{}

function Fibonacci(num:number):void{
    let x:number = 0;
    let numStr:number[] = [1,1];
    let z:string = "";
    for (let index = 0; index < num; index++) {
        if(index >= 2){ 
            x = numStr[index -1] + numStr[index -2];
            numStr.push(x);
        }
        z += numStr[index] + " ";
    }
    console.log(z);
}
Fibonacci(5);