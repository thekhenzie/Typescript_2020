var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addMetadata(target) {
    // Add some metadata
    target.__customMetadata = {
        someKey: "someValue"
    };
}
var Persons = /** @class */ (function () {
    function Persons(name) {
        this._name = name;
    }
    Persons.prototype.greet = function () {
        return this._name;
    };
    Persons = __decorate([
        addMetadata
    ], Persons);
    return Persons;
}());
function getMetadataFromClass(target) {
    return target.__customMetadata;
}
console.log(getMetadataFromClass(Persons));
