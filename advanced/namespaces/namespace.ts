// existen pero los modulos los reemplazan
// 

namespace DatabaseEntity{
    export class User{
        constructor( public name : string){}
    }

    const myUser = new User('joker');
    console.log(myUser);
}

const myOtherUer = new DatabaseEntity.User('j03r2');
console.log(myOtherUer);