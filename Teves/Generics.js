//Generic class
var GenericPerson = /** @class */ (function () {
    function GenericPerson() {
    }
    return GenericPerson;
}());
var person = new GenericPerson();
person.name = 'Jeffrey';
console.log(person.name);
var Gperson = new GenericPerson();
Gperson.name = true;
console.log(Gperson.name);
var personNum = new GenericPerson();
personNum.name = 143;
console.log(personNum);
//Generic function
function identity(input) {
    return input;
}
var output = identity("Kathlyn");
console.log(output);
var output2 = identity(143);
console.log(output2);
var output3 = identity(true);
console.log(output3);
var magazines = [
    { title: 'The Boy in the Striped Pyjamas', year: 2018 },
    { title: 'Hachi: A Dogs Tale', year: 2009 },
    { title: 'Life Is Beautiful ', year: 1997 }
];
var movies = { title: "Life is Beautiful", year: 1997 };
