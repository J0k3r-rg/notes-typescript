import { PI, User, sayHelloUser as presentacion } from "./utils.module";

const perimetro = 5 * PI
console.log(perimetro);

const myUser : User = {
    name: 'joker',
    age: 30,
    charge: '100'
}

console.log(myUser);

presentacion(myUser);