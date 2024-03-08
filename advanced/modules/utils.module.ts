export const PI = 3.14;

export interface User{
    name: string;
    age: number;
    charge: string;
}

export const sayHelloUser = (user : User) =>{
    console.log(`Hi, my name is ${user.name}`);
}