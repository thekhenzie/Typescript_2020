export {}




let convertToCelsius = (fahrenheit: number): number => {return (fahrenheit - 32) / 1.8 ;}
let convertToFahrenheit = (celsius: number): number => {return (celsius * 1.8) + 32;}

console.log("Fahrenheit to Celsius: "+convertToCelsius(30));
console.log("Celsius to Fahrenheit: "+convertToFahrenheit(30));
