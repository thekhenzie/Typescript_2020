function addMetadata(target: any) {
    // Add some metadata
    target.__customMetadata = {
    someKey: "someValue"
    };
}
@addMetadata
class Persons {
 private _name: string;
 public constructor(name: string) {
 this._name = name;
 }
 public greet() {
 return this._name;
 }
}
function getMetadataFromClass(target: any) {
 return target.__customMetadata;
}
console.log(getMetadataFromClass(Persons));
