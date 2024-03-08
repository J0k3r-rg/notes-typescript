//Partial<T>
interface Task{
    id: number;
    name: string;
    description: string;
}

function updateTask(id : string,task : Partial<Task>){

}

const newTask  = {
    name: 'new task'
}

updateTask('1',newTask);

//Reqiured<T>

interface Todo{
    id?: number;
    name?: string;
}

const myTodo : Required<Todo> = {
    id: 1,
    name: 'joker'
}

//Records<Keys,Type> para la creacion de objetos

interface CatInfo{
    age: number;
    name: string;
}

type CatName = 'moi' | 'baris' | 'luffy';

const cats : Record<CatName,CatInfo> = {
    moi: {
        age: 2,
        name: 'joker'
    },
    baris: {
        age: 3,
        name: 'baris'
    },
    luffy: {
        age: 4,
        name: 'luffy'
    }
}

//Pick<T,Properties>

interface ToDoInterface{
    tittle: string;
    description: string;
    completed: boolean;
}

type ToDo = Pick<ToDoInterface, 'tittle' | 'completed'>;

const myToDo : ToDo = {
    tittle: 'joker',
    completed: true
}

//Omit<T,Properties>

interface ToDoInterface{
    tittle: string;
    description: string;
    completed: boolean;
}


type ToDo2 = Omit<ToDoInterface, 'completed'>;

const myToDo2 : ToDo2 = {
    tittle: 'joker',
    description: 'joker'
}