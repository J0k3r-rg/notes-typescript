interface myInterface <T>{
    field : T;
}

const my_interface : myInterface<string> = {
    field:'my_field'
}

interface User{
    name: string;
    age: number;
}

const my_interface_user : myInterface<User> ={
    field: {
        name: 'joker',
        age: 33
    }
}

console.log(`interface: ${my_interface}`);
console.log(`field: ${my_interface.field}`);

class MyClass<T>{
    field : T;
    constructor(field : T){
        this.field = field;
    }
}

const my_class_string : MyClass<string> = new MyClass('my_field');

const my_class_number : MyClass<number> = new MyClass(15);

function getData<T>(id : string) : Promise<T> | void{
}


//example with class

interface UserResponse{
    id: number;
    name: string;
}

interface TaskResponse{
    id : number;
    name: string;
    isImportant : boolean;
}

class HttpResponse<T> {
    data : T;
    status : number;
    code : number;
    constructor(data :T, status: number, code: number){
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = () : UserResponse =>{
    return {
        id: 1,
        name: 'joker'
    }
}

const fetchTask = () : TaskResponse => {
    return {
        id: 1,
        name: 'buy bread',
        isImportant: true
    }
}

const myUser = fetchUser();
const myTask = fetchTask();

const res = new HttpResponse(myUser,200,2);
console.log(res);

const res2 = new HttpResponse(myTask,200,2);
console.log(res2);

////////////////////////////////////////////
class CRUD<T>{
    private data : T[];
    constructor(data : T[]){
        this.data = data;
    }
    addItem(item : T):void{
        this.data.push(item);
    }
    deleteItem():void{
        this.data.pop();
    }
    printItems(): T[]{
        return this.data;
    }
}

const users : UserResponse[] = [
    {
        id: 1,
        name: 'joker'
    },{
        id: 2,
        name: 'queen'
    },{
        id: 3,
        name: 'j&q'
    }
]

const userCrud : CRUD<UserResponse> = new CRUD(users);

console.log('adding item....')
userCrud.addItem({
    id: 4,
    name: 'itemAdd'
});

console.log('--------------------------------------');
console.log(userCrud.printItems());

userCrud.deleteItem();
console.log('delete item...')

console.log('--------------------------------------');
console.log(userCrud.printItems());