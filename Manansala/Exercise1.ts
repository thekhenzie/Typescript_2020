var input: number = 30
let ToC = (input: number): number => {return((input - 32) / 1.8)}
let ToF = (input: number): number => {return((input * 1.8) + 32)}

console.log("C = " + ToC(input))
console.log("F = " + ToF(input))
