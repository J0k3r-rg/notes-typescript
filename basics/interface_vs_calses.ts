interface PersonInterface{
    name? : string;
    code? : number | string;
    charge? : number;
    description? : string;
    sayHello: () => void;
}

class PersonClass implements PersonInterface{
    sayHello() {
        console.log('hola soy persona 1');
    };
}

class PersonClass2 implements PersonInterface{
    sayHello(){
        console.log('hola soy persona 2')
    };
}

const personOne : PersonInterface = {
    sayHello(){

    }
}

const personTwo : PersonClass = new PersonClass();
personTwo.sayHello();