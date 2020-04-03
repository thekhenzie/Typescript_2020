"use strict";
exports.__esModule = true;
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
    Category[Category["Software"] = 5] = "Software";
})(Category || (Category = {}));
exports.Category = Category;
