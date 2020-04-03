interface IMyHouse<T, W>{
    GetDetails(type: T, color: T, size: W): void,
    GetPrice(origPrice: T, paidPrice: T): void;
}

class House<T,W> implements IMyHouse<T,W>{  
    
    GetDetails<T, W>(type:T , color: T, size: W): void{
        console.log(`The type of house is ${type}, the color of the house is ${color}, and the size of the house is ${size} square meters.`);
    }

    GetPrice<T>(paidPrice: T, origPrice: T): void{
        console.log(`I bought the house and got a discount and paid ${paidPrice}. The original price was ${origPrice}.`)
    }

}

let getHouse = new House();
console.log(getHouse.GetDetails<string, number>("Mansion", "Red", 900));
let getPrice = getHouse.GetPrice<number>(1500000, 2000000)
console.log(getPrice);