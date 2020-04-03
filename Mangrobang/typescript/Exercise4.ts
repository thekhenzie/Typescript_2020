export{}

console.log("First n numbers of Fibonacci Series \n");

function Fibonacci (input : number) : number[] {
    let f1 : number = 0;
    let f2 : number = 1;
    let nextNum : number;
    var arr : number[] = [];
    if (input < 1){
        return; 
    }
    for (var i = 0; i<input; i++){
        arr.push(f1);
        nextNum = f1 + f2;
        f1 = f2;
        f2 = nextNum;
    }
    return arr;
}
console.log("Output : " + Fibonacci(5));