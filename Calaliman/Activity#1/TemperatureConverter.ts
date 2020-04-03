export{}

let convertFahrenheit = (fahrenheit: number): number => {return (fahrenheit - 32) / 1.8;}
let convertCelsius = (celsius: number): number => {return (celsius * 1.8) + 32;}

console.log("Converting to Fahernheit: " + convertFahrenheit(30));
console.log("Converting to Celsius: " + convertCelsius(30));