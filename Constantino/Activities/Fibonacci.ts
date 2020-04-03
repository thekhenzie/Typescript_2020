function fibonacci(num: number):string{
    let num1 = 0;
    let num2 = 1;
    let result: string = " ";
    for(let i = 0; i < num; i++){
        result = result + num2;
        let temp = num1;
        num1 = num2;
        num2 = temp + num2;
        
        
    }
    return result;
}

console.log(fibonacci(5));