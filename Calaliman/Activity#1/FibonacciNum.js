"use strict";
exports.__esModule = true;
var getFibNum = function (iteration) {
    var arrFibNum = [];
    var firstNum = 0, secondNum = 1;
    for (var i = 0; i < iteration; i++) {
        arrFibNum.push(secondNum);
        var tempNum = firstNum;
        firstNum = secondNum;
        secondNum = tempNum + firstNum;
    }
    return arrFibNum;
};
console.log(getFibNum(5).join(" "));
/*
let displayFibNum = (num: number):void =>{
    let result:string = "";

    getFibNum(num).forEach((number) => {
        result += number + " ";
    });

    console.log(result);
}

displayFibNum(5);*/ 
