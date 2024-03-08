var person = {
    name: 'joker',
    code: '01',
    charge: 1,
    description: "descripcion de la persona",
    sayHello: function () { return 'hola'; }
};
person.code = 20;
person.code = '20';
var person2 = {
    sayHello: function () { return "Hola"; }
};
//Al tener en la interface cada dato '?' 
//nos permite iniciar una persona sin datos
//caso que no existan los '?' necesariamente
//hay que asignarle valores, caso la funcion
console.log(person2.sayHello());
var person3 = {
    name: 'mauricio',
    last_name: 'maldonado',
    age: 33,
    sayHello: function () { return "Hola"; }
};
