interface Pet{
    name: string | undefined;
}

class Cat {
    name: string | undefined;
    constructor(){}
}
//Caso 1

let pet : Pet;

//Como ambas son iguales es valido

pet = new Cat(); // OK

//Caso 2
let pet2: Pet;
//si bien agregamos owner no lo puedo llamar por que no existe 
//dentro de la interface pet
let dog = {name: 'Lassie', owner: 'Joe'};
pet2 = dog; // OK


//Caso 3
let cat2 = {name: 'Whiskers', purrs: true};
function greet(pet:Pet){
    console.log('Hello, ' + pet.name);
}
greet(cat2); // OK

//Caso 4

enum Status{
    Ready,
    Waiting
}

enum Color{
    Red,
    Blue,
    Green
}

let stat = Status.Ready;
//stat = Color.Green; // Error
//Type 'Color.Green' is not assignable to type 'Status'.
//Type 'Color' is not assignable to type 'Status'.ts(2322)
// stat === Color.Green // Error
//Operator '===' cannot be applied to types 'Status' and 'Color'.ts(2367)


//Caso 5

class Animales{
    feet: number | undefined;
    constructor(name: string, numFeet: number){}
}
class Size{
    feet: number | undefined;
    constructor(numFeet: number){}
}
let a: Animales = new Animales('animal', 4);
let s: Size = new Size(4);
a = s; // OK
s = a; // OK

//Caso 6

interface Empty<T> {}
let x: Empty<number> = {};
let y: Empty<string> = {};
x = y;  // OK
y = x;  // OK

//Caso 7

interface NotEmpty<T> {
    data: T;
}

let x2: NotEmpty<number> = { data: 42 };
let y2: NotEmpty<string> = { data: "hello" };

//x2 = y2;  // Error
//Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'.
//Type 'string' is not assignable to type 'number'.ts(2322)


