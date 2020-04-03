abstract class ReferenceItem {
    private _publisher:string;
    static department:string = "Research";

    constructor(public title:string, year: number) {
        console.log('creating a new ReferenceItem...');
    }
    printItem():void{
        console.log(`${this.title} was published `);
        console.log(`${ReferenceItem.department}`);
    }
    // public get publisher() : string {
    //     return this._publisher;
    // }
    // public set publisher(newPublisher:string) : void {
    //     this._publisher = newPublisher;
    // }
    
}

class Encyclopedia extends ReferenceItem{
    constructor(newTitle:string, newYear:number,public edition:number) {
        super(newTitle,newYear);
    }
}
// let ref = new ReferenceItem("hehe",2015);
// ref.printItem();
// ref.publisher = "ref";
// console.log(ref.publisher);
let ency = new Encyclopedia('Britannica',2015,1998);
// console.log(ency.printItem());
