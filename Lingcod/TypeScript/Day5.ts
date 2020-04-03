
//destruction
let cars:string[] = ['fortuner','hunchback'];

let [car1,car2] = cars;
console.log(car1);
console.log(car2);

//spread operator
let cars1:string[] = ['fortuner','hunchback'];
let cars2:string[] = ['fortuner','hunchback',...cars1];

//tuple type
let myTuple:[string,number | boolean] = ['fortuner',1];
myTuple.push('hehe');

//union type
let cars5: string | number = 21;

//string literal types
let motors: 'MOTORCYCLES' = 'MOTORCYCLES';
let motors2: 'MOTORCYCLES' | 'motor' = 'motor';
type bothMotor = 'MOTORCYCLES' | 'motor';
let hehe:bothMotor = 'MOTORCYCLES';
