export{}

let celsius = (temp : number) : number => {return((temp - 32) / 1.8)};

let fahr = (temp : number) : number => {return((temp * 1.8) + 32)};

let newTempC = celsius(30);
let newTempF = fahr(30);

console.log("Input : -40");
console.log("Output : Fahrenheit = "+ newTempF + ", "+ "Celsius = " + newTempC);