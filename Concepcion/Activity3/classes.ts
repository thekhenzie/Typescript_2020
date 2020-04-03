import { IVehicle } from './interface';
export { Garage, Mitsubishi, Toyota }

class Garage<T extends IVehicle<String>>{

    private capacity: number = 10;
    private slots: Array<T> = new Array<T>();

    ParkCar(car: T): void {
        if (this.slots.filter(i => i.plateNumber === car.plateNumber).length > 0)
            console.log(car.plateNumber + " is already parked")
        else if (this.capacity > 0) {
            this.capacity--;
            this.slots.push(car);
            console.log(car.plateNumber + " was parked inside");
            
        }
        else
            console.log("Garage is Full, fool");
    }
    RemoveCar(): void {
        if (this.capacity < 10) {
            this.capacity++;
            console.log(this.slots[this.slots.length - 1].model + " was removed")
            this.slots.shift();
        } else if(this.capacity>=10){
            console.log("Garage is Empty, boi");
        }
    }
    PrintCars(): void {
        this.slots.forEach(car => console.log(car.brand + " " + car.model + " " + car.plateNumber));
    }

    PrintAvailableSlots = (): void => console.log("Available slots: " + this.capacity);

    CarFilterByModel = (carModel: string): T[] => this.slots.filter(car => car.model === carModel);

    CarFilterByBrand = (carBrand: String): T[] => this.slots.filter(car => car.brand === carBrand);



}

abstract class Car implements IVehicle<string> {
    constructor(public brand: string, public model: string, public plateNumber: string) {
    }
}

class Mitsubishi extends Car {
    constructor(model: string, plateNumber: string) {
        super("Mitsubishi", model, plateNumber)
    }
}
class Toyota extends Car {
    constructor(model: string, plateNumber: string) {
        super("Toyota", model, plateNumber)
    }
}