type Getter<T> = {
    [property in keyof T as `get${Capitalize<string & property>}`]: () => T[property];
}
interface Person {
    name: string;
    age: number;
}

interface Animal{
    id : string;
    name : string;
    type : number;
    isAdopted : boolean;
}

type getPerson = Getter<Person>;

type getAnimal = Getter<Animal>;