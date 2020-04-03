export {}
function CelsiustoFahrenheit(a:number):number{
     return   (a * 1.8) + 32;
}
console.log(CelsiustoFahrenheit(30));

function FahrenheittoCelsius(a: number): any {
    return (a - 32) / 1.8;
}
console.log(FahrenheittoCelsius(30));


// Area of square 
let width: number = 12 ;
let height: number = width ;
let area : number = width * height;
let perimeter : number  = 4 * width
console.log("The area of square is:"+" "+area+" "+ "The perimeter is:"+ perimeter);

//Concatenate
let str : string = "Hi"
console.log(str.repeat(5));


// //Fibonacci

function PrintFib(n : number):void{
    let f1:number =0;
    let f2:number = 1;
    let i : number;
    if (n < 1)
    return;
    for (i = 1; i <=n; i++){
        console.log(f2+ " ");
        let nxt = f1 + f2;
        f1 = f2;
        f2 = nxt;
    }
    
}
PrintFib(5);