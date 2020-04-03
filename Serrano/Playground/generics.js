var fruits = [
    { name: "Apple", color: "red", stocks: 10 },
    { name: "Banana", color: "yellow", stocks: 5 },
    { name: "Orange", color: "orange", stocks: 5 },
    { name: "Mango", color: "yellow", stocks: 7 }
];
var vegetables = [
    { name: "Carrot", stocks: 20 },
    { name: "Broccoli", stocks: 16 },
    { name: "Onion", stocks: 7 }
];
var Display = /** @class */ (function () {
    function Display() {
        this._foods = new Array();
    }
    Display.prototype.addToDisplay = function (food) {
        this._foods.push(food);
    };
    Display.prototype.printDisplay = function () {
        this._foods.forEach(function (food) { return console.log(food.name); });
    };
    Display.prototype.findFood = function (name) {
        return this._foods.filter(function (food) { return food.name === name; })[0];
    };
    return Display;
}());
var fruitDisplay = new Display();
fruits.forEach(function (fruit) { return fruitDisplay.addToDisplay(fruit); });
fruitDisplay.printDisplay();
var fruitStock = fruitDisplay.findFood('Apple');
console.log(fruitStock.name + "'s Stocks : " + fruitStock.stocks);
var vegDisplay = new Display();
vegetables.forEach(function (vegy) { return vegDisplay.addToDisplay(vegy); });
vegDisplay.printDisplay();
var vegStock = vegDisplay.findFood('Onion');
console.log(vegStock.name + "'s Stocks : " + vegStock.stocks);
