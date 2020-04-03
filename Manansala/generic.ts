interface IGarage<T>{
    getVehicles: () => Array<T>;
    addVehicle: (newVehicle: T) => void;
}

class Garage<T> implements IGarage<T>{
    private vehicles = new Array<T>();
    getVehicles(): Array<T> {
        return this.vehicles;
    }
    addVehicle(newVehicle: T) {
        this.vehicles.push(newVehicle)
    }
}

abstract class Vehicle{
    name: string;
    modelno: number;
}

class Car extends Vehicle{
    constructor(name: string, modelno: number, public horespower: number) {
        super();
    }
}
class Plane extends Vehicle{
    constructor(name: string, modelno: number, public maxheight: number){
        super();
    }
}

let newCars: Car[] = [
    {name: "BMW", modelno: 3874, horespower: 600},
    {name: "Mercedes",modelno: 5738, horespower: 700}
];

let newPlanes: Plane[] = [
    {name: "AeroPlane", modelno: 5983, maxheight: 1000},
    {name: "Boeing 747", modelno: 7471, maxheight: 2000}
]

let newGarage = new Garage()
for (const car of newCars) {
    newGarage.addVehicle(car)
}
for (const plane of newPlanes){
    newGarage.addVehicle(plane)
}
console.log(newGarage.getVehicles())
