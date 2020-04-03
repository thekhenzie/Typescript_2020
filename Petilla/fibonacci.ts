function fibonacci (input : number) : number[] {
    let a : number = 1;
    let b : number = 1;
    let next : number;
    let arr : number[] = [];
    if (input < 1){
        return;     
    }
    for (var i = 0; i<input; i++){
        arr.push(a);
        next = a + b;
        a = b;
        b = next;
    }
    return arr;
}
console.log("Input : 5");
console.log("Output : " + fibonacci(5));