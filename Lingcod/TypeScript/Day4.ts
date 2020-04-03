interface Magazine {
    title:string,
    publisher:string
}
interface Magazine2 {
    title:string,
    publisher:string
}
interface IPerson extends Magazine,Magazine2{
    name:string
}

function Purge<T>(inventory: Array<T>) : Array<T>{

    return inventory.splice(2, inventory.length);
}
var booly:boolean = true;
let x:Array<number> = Purge([1,2,3,4]);

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

