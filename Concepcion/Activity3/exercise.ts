import { Garage, Mitsubishi, Toyota } from './classes';

let car1 = new Mitsubishi("Mirage", "001-QWE");
let car2 = new Mitsubishi("Pajero", "002-WER");
let car3 = new Mitsubishi("Mirage", "003-ERT");
let car4 = new Mitsubishi("Pajero", "004-RTY");
let car5 = new Mitsubishi("Xpander", "005-TYU");

let car6 = new Toyota("Prius", "006-YUI");
let car7 = new Toyota("Prius", "007-UIO");
let car8 = new Toyota("Prius", "008-IOP");
let car9 = new Toyota("Prius", "009-ASD");
let car10 = new Toyota("Altis", "010-SDF");
let car11 = new Toyota("Altis", "011-AZD");



let garage1 = new Garage();
garage1.ParkCar(car1);
garage1.ParkCar(car2);
garage1.ParkCar(car3);
garage1.ParkCar(car4);
garage1.ParkCar(car5);
garage1.ParkCar(car6);
garage1.ParkCar(car7);
garage1.ParkCar(car8);
garage1.ParkCar(car9);
garage1.ParkCar(car10);
garage1.RemoveCar();
garage1.ParkCar(car2);
garage1.ParkCar(car11);

garage1.PrintAvailableSlots()
garage1.RemoveCar();
garage1.CarFilterByBrand("Mitsubishi").forEach(element => {
    console.log(element.plateNumber);
});
garage1.CarFilterByModel("Mirage").forEach(i => console.log(i.plateNumber))
//garage1.PrintCars();
const GetFullName = (firstName: string, lastName: string, middleName?: string) => {
    return middleName != null ? firstName + " " + middleName + " " + lastName : firstName + " " + lastName;
}
console.log(GetFullName("Jayson", "Concepcion", "Resmio"));
interface Iperson{
    name:string;
}
interface Ihuman{
    body:string;
}
interface Ipeople extends Iperson, Ihuman{
    count:number;
}

