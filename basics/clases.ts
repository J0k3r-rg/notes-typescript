class Animal{
    public name : string;
    private age : number;
    protected identity : string;

    constructor(name : string,age : number,identity : string){
        this.name = name;
        this.age = age;
        this.identity = identity;   
    }
    sayHi() {
        console.log(`Hi, this age is: ${this.age}`);
    }
}

class Dog extends Animal{
    constructor(name : string,age : number,identity : string){
        super(name,age,identity);
    }
    sayHi() {
        console.log(`Guau!!, I am a dog`);
    }
    sayId(){
        console.log(this.identity);
    }
}

const myAnimal : Animal = new Animal('',0,'');
myAnimal.sayHi();

const myDog : Dog = new Dog('',0,'');
myDog.sayHi();
myDog.sayId();