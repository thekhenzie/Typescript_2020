//Exercise 1 - Conversion celcius and farenheit
const d=1.8;
const i=32;

function ToFar(input:number):number{
    return ((input*d)+i); 
}

function ToCel(input:number):number{
    return ((input-i)/d);
}

console.log("Farenheit: "+ToFar(30));
console.log("Celcius: "+ToCel(30));

//Exercise 2 - Perimeter & Area
function PerimeterOfSquare(input) {
    return (4 * input);
}

function AreaOfSquare(input) {
    return (input * input);
}

console.log(PerimeterOfSquare(4));
console.log(AreaOfSquare(4));

//Exercise 3 - Concatenation
function Concat(str:string,num:number):string{
   
    let strResult:string =" ";   
    while(num>0){
   
       strResult += str;
       num--;
    }
    return strResult;
}

console.log(Concat("Hi",3));

//Exercise 4 - Fibonacci Length
function FibLen(num:number):void{

    let a:number = 1, b:number = 0, temp:number;

        while (num >= 1){
            temp = a;
            a = a + b;
            b = temp;
            num--;
            console.log(b);
        }
}
FibLen(10);