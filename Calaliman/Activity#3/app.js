//this is a generic function
var myGenFunc = function (myData) {
    console.log("The data type here is \"" + typeof myData + "\" with the value of: " + myData);
};
console.log("This is the sample for Generic Function");
myGenFunc(13);
myGenFunc("This is string #1");
console.log();
console.log("This is the sample for Generic Interface");
var data1 = { myData: 23 };
console.log("Value: " + data1.myData);
console.log("Data type: " + typeof data1.myData);
var data2 = { myData: "This is string #2" };
console.log("Value: " + data2.myData);
console.log("Data type: " + typeof data2.myData);
console.log();
//this is a generic class
var GenericClass = /** @class */ (function () {
    function GenericClass() {
        var _this = this;
        this.GetData = function (item) { _this._myData = item; };
        this.DisplayData = function () { console.log("The data type here is \"" + typeof _this._myData + "\" with the value of: " + _this._myData); };
    }
    return GenericClass;
}());
console.log("This is the sample for Generic Class");
var classData1 = new GenericClass();
classData1.GetData(33);
classData1.DisplayData();
var classData2 = new GenericClass();
classData2.GetData("This is string #3");
classData2.DisplayData();
var Computers = /** @class */ (function () {
    function Computers(brand, model, inventoryCode) {
        this.brand = brand;
        this.model = model;
        this.inventoryCode = inventoryCode;
    }
    return Computers;
}());
