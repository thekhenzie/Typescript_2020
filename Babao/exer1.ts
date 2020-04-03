var input: number = 30;
let ToC = (input:number): number =>{return((input -32) / 1.8)}
let CtoF = (input:number): number =>{return((input * 1.8) + 32)}

console.log("C  =" + ToC(input))
console.log("C  =" + CtoF(input))
