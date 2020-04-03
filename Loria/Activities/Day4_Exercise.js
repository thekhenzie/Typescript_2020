var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.GetDetails = function (type, color, size) {
        console.log("The type of house is " + type + ", the color of the house is " + color + ", and the size of the house is " + size + " square meters.");
    };
    House.prototype.GetPrice = function (paidPrice, origPrice) {
        console.log("I bought the house and got a discount and paid " + paidPrice + ". The original price was " + origPrice + ".");
    };
    return House;
}());
var getHouse = new House();
console.log(getHouse.GetDetails("Mansion", "Red", 900));
var getPrice = getHouse.GetPrice(1500000, 2000000);
console.log(getPrice);
