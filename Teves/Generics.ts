//Generic class
class GenericPerson<T> {  
    name: T;
  }

let person = new GenericPerson<string>();
person.name = 'Jeffrey';
console.log(person.name);
 
let Gperson = new GenericPerson<boolean>();
Gperson.name = true;
console.log(Gperson.name);

let personNum = new GenericPerson<number>();
personNum.name = 143;
console.log(personNum);

//Generic function
function identity<T>(input: T): T {
    return input;
}

let output = identity<string>("Kathlyn");
console.log(output);

let output2 = identity<number>(143);
console.log(output2);

let output3 = identity(true);
console.log(output3);


//Generic Interface
interface IMovies<T,U> {
    title:T;
    year:U;
}

let magazines: Array<IMovies<string,number>> = [
    { title: 'The Boy in the Striped Pyjamas', year: 2018 },
    { title: 'Hachi: A Dogs Tale', year: 2009 },
    { title: 'Life Is Beautiful ',year: 1997 }
];

let movies: IMovies<string, number> = {title:"Life is Beautiful", year:1997 };
