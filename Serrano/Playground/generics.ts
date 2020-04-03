interface Fruits {
    name : string;
    color : string;
    stocks : number;
}

interface Vegetables {
    name : string;
    stocks : number;
}

let fruits: Array<Fruits> = [
    { name: "Apple", color: "red", stocks: 10},
    { name: "Banana", color: "yellow", stocks: 5},
    { name: "Orange", color: "orange", stocks: 5},
    { name: "Mango", color: "yellow", stocks: 7}
]

let vegetables: Array<Vegetables> = [
    { name: "Carrot", stocks: 20},
    { name: "Broccoli", stocks: 16},
    { name: "Onion", stocks: 7}
]

class Display<T extends Vegetables> {

    private _foods: Array<T> = new Array<T>();

    addToDisplay(food: T) : void{
        this._foods.push(food);
    }
    printDisplay(): void{
        this._foods.forEach(food => console.log(food.name));
    }

    findFood (name: string ): T {
        return this._foods.filter(food => food.name === name)[0];
    }

}

let fruitDisplay: Display<Fruits> = new Display<Fruits>();
fruits.forEach(fruit => fruitDisplay.addToDisplay(fruit));
fruitDisplay.printDisplay();
let fruitStock = fruitDisplay.findFood('Apple');
console.log(`${fruitStock.name}'s Stocks : ${fruitStock.stocks}`);


let vegDisplay: Display<Vegetables> = new Display<Vegetables>();
vegetables.forEach(vegy => vegDisplay.addToDisplay(vegy));
vegDisplay.printDisplay();
let vegStock = vegDisplay.findFood('Onion');
console.log(`${vegStock.name}'s Stocks : ${vegStock.stocks}`);


