export{}

function Act1(input: number){
    let toCel :number = ((input - 32) / 1.8);
    let toFahr: number = ((input * 1.8)+32);
    console.log('Fahrenheit =' + toFahr.toFixed(2) + "F");
    console.log('Celcius =' + toCel.toFixed(2) + "C");
}

Act1(30);