export{}

console.log("Conversion of temperatures to and from Celsius, farenheit \n");

let toCelsius = (temp: number): number => {return((temp - 32) / 1.8)}
let toFarenheit = (temp: number): number => {return((temp * 1.8) + 32)}

console.log("Celsius: " + toCelsius(30) + "\n");
console.log("Farenheit: " + toFarenheit(30) + "\n");