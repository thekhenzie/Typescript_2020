"use strict";
exports.__esModule = true;
function ConvertScale(num) {
    var far = (num * 1.8) + 32, cel = (num - 32) / 1.8;
    console.log("From Farenheight = " + num + " To Celcius = " + cel.toFixed(2));
    console.log("From Celcius = " + num + " To Farenheight = " + far.toFixed(2));
}
console.log("Conversion");
ConvertScale(-40);
