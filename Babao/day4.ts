export{}
interface Customer<T>{

    customerName: string;
    customerAge: number;
    customerOrder: string;
    customerNumber: number;

}

function displayName<FullName>(name: FullName): void {

    console.log("Name: "+  name);

}

function displayNumber(number: number){

    console.log("Customer Number: " + number);

}

let setFullName = displayName("Juan Dela Cruz");
let setNumber = displayNumber(69);