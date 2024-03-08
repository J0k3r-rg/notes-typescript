interface Person{
    name? : string;
    code? : number | string;
    charge? : number;
    description? : string;
    sayHello: () => string;
}

interface Person2 extends Person{
    last_name : string;
    age : number;
}

let person : Person = {
    name: 'joker',
    code : '01',
    charge : 1,
    description : "descripcion de la persona",
    sayHello: () => 'hola'
}

person.code = 20;
person.code = '20';

let person2 : Person = {
    sayHello : () => "Hola"
};
//Al tener en la interface cada dato '?' 
//nos permite iniciar una persona sin datos
//caso que no existan los '?' necesariamente
//hay que asignarle valores, caso la funcion

console.log(person2.sayHello())

const person3 : Person2 = {
    name : 'mauricio',
    last_name : 'maldonado',
    age : 33,
    sayHello : () => "Hola"
};
