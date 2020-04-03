import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'Research';
    constructor(protected title: string, protected year:number) {
        
        console.log('Creating a new ReferenceItem...');
    }
    printItem(): void{
        console.log(`${this.title} was published in ${this.year}`)
    }

    protected abstract ReferenceCitation();

    // get publisher(): string{
    //     return this._publisher.toUpperCase();
    // }
    // set publisher(newPublisher: string){
    //     this._publisher = newPublisher;
    // }

}
    class Encyclopedia extends ReferenceItem{
        constructor(newTitle: string, newYear: number, public edition: number){
            super(newTitle, newYear);
        } 
        
        printItem(){
            super.printItem();
            console.log(`${this.title} was published ${this.year}`);
            
        }

        
        ReferenceCitation(){
            console.log(`${this.title} - ${this.edition}`);
            
        }


    }

export { Encyclopedia ,UniversityLibrarian, ReferenceItem };