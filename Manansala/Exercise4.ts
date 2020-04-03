var input: number = 5

let GetFib = (input: number): number[] => {
    let fib: number[] = [1,1]
    for (let i = 0; i < input - 2;i++){
        fib.push(fib[i] + fib[i+1])
    }
    return fib
}

console.log(GetFib(input))