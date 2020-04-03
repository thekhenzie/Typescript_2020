function Purge(inventory) {
    var bobo = "hehe";
    return inventory.splice(2, inventory.length);
}
console.log(bobo);
var x = Purge([1, 2, 3, 4]);
console.log(x);
// class Shelf<T>{
//     private _items: Array<T> = new Array<T>();
//     add(item: T) : void{
//         this._items.push(item);
//     }
//     getFirst():T{
//         return this._items[0];
//     }
//     find(num:number):T{
//         return: this._items.filter(item => 1);
//     }
// }
// let bookShelf:Shelf <number> = new Shelf <number>();
// [1,2,3,4] = 
