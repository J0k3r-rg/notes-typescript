interface Person{
    name : string;
    age: number
}

interface Empoyede extends Person{
    charge: string
}

let empoyede : Empoyede = {
    name: 'joker',
    age: 33,
    charge: 'normal'
}

type Person2 = {
    name : string;
    age: number
}

interface Empoyede2 extends Person2{
    charge: string
}

let empoyede2 : Empoyede2 = {
    name: 'joker',
    age: 33,
    charge: 'normal'
}

//union types

type User = {
    id : string
}

type Admin = User & { token : string }

const my_admin : Admin ={
    id: '123',
    token: '<PASSWORD>'
}


//union types with interface
type Role = User & Person & Admin

const my_role : Role = {
    id: '123',
    name: 'joker',
    age: 33,
    token: '<PASSWORD>'
}

type ServiceResponse = string | number | null | undefined;

//datos super especificos
type UserTypes = 'admin' | 'root' | 'client' | 0 ;

const user : UserTypes = 0;

interface Developer {
    name : string;
    stack : string[]
}

interface Developer {
    phone? : string;
}

const me : Developer = {
    name: 'joker',
    stack: ['nodejs', 'typescript'],
    phone: '0123456789'
}