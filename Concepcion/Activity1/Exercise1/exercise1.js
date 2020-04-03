"use strict";
const FahreinheitToCelcius = ((temp) => ((temp - 32) * 5 / 9));
const CelciusToFahreinheit = ((temp) => ((temp * 1.8) + 32));
console.log(FahreinheitToCelcius(30));
console.log("\n");
console.log(CelciusToFahreinheit(30));
console.log("\n REMINDER");
console.log(CelciusToFahreinheit(37) + " Degree Fahreinheit Temperature is the normal Temperature for healthy people");
console.log("If you have " + FahreinheitToCelcius(100.4) + " Degree Celcius Temperature then you must go to the doctor");
