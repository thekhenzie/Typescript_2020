interface IShape{
    name: string;
    noOfSides:number;
}

abstract class AShape implements IShape {
    
    constructor(public name:string, public noOfSides:number) { 
        console.log(`Shape: ${this.name}`);
        }

    abstract GetArea():void;
    abstract GetPerimeter():void;
}    

class Square extends AShape{
        constructor(public sName:string,public sNoOfSides:number,public side:number,public color:string){  
            super(sName,sNoOfSides);
            console.log(`No of sides: ${this.sNoOfSides}`)
        }
       
        PrintColorAndName(){
            console.log(`Color and Name: ${this.color} ${this.sName}`);
        }   

        GetArea(){ 
           let area=this.side*this.side;
            console.log("Area of Square: "+(this.side*this.side));
        }

        GetPerimeter(){
            console.log("Perimeter of Square: "+(this.side*4));
        }    
}

class Rectangle extends AShape{
    constructor(public rName:string,public rNoOfSides:number,public len:number,public wid:number){
        super(rName,rNoOfSides);
        console.log(`No of sides: ${this.rNoOfSides}`)
    }

        GetArea(){
            console.log("Area of Rectangle: "+(this.len*this.wid));
        }

        GetPerimeter(){
            console.log("Perimeter of Rectangle: "+(2*(this.len+this.wid)));
        }
    }

export{Square, Rectangle};

